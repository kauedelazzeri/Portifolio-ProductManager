import matter from "gray-matter";
import { Project } from "./types";
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import fs from 'fs';
import path from 'path';

const projectContentCache: Record<string, any> = {};

export async function getProjectContentBySlug(slug: string, locale: string): Promise<any | null> {
  const cacheKey = `${locale}/${slug}`;
  
  if (projectContentCache[cacheKey]) {
    return projectContentCache[cacheKey];
  }

  try {
    const projectsDirectory = path.join(process.cwd(), 'src', 'content', 'projects', locale);
    const filePath = path.join(projectsDirectory, `${slug}.md`);
    
    // Check if file exists for this locale
    if (!fs.existsSync(filePath)) {
      // Fallback to English if locale-specific file doesn't exist
      const fallbackPath = path.join(process.cwd(), 'src', 'content', 'projects', 'en', `${slug}.md`);
      if (!fs.existsSync(fallbackPath)) {
        return null;
      }
      
      const fallbackContent = fs.readFileSync(fallbackPath, 'utf-8');
      const { data, content } = matter(fallbackContent);
      
      // Use translation if available, otherwise fallback to English
      const translatedData = data.translations?.[locale] || data;
      
      const mdxSource = await serialize(content, {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeRaw, rehypeSanitize],
        },
      });

      const projectContent = {
        slug,
        title: translatedData.title || data.title,
        subtitle: translatedData.subtitle || data.subtitle,
        date: data.date,
        author: data.author,
        tags: data.tags,
        content: mdxSource,
        locale: locale,
        originalLocale: data.locale,
      };

      projectContentCache[cacheKey] = projectContent;
      return projectContent;
    }
    
    // Load locale-specific file
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeRaw, rehypeSanitize],
      },
    });

    const projectContent = {
      slug,
      title: data.title,
      subtitle: data.subtitle,
      date: data.date,
      author: data.author,
      tags: data.tags,
      content: mdxSource,
      locale: locale,
      originalLocale: data.locale,
    };

    projectContentCache[cacheKey] = projectContent;
    return projectContent;
  } catch (error) {
    console.error(`Error loading project content ${slug} in ${locale}:`, error);
    return null;
  }
}

export async function getAllProjectContent(locale: string): Promise<any[]> {
  try {
    const projectsDirectory = path.join(process.cwd(), 'src', 'content', 'projects', locale);
    
    // Check if locale directory exists, fallback to English
    const directoryToUse = fs.existsSync(projectsDirectory) 
      ? projectsDirectory 
      : path.join(process.cwd(), 'src', 'content', 'projects', 'en');
    
    const fileNames = fs.readdirSync(directoryToUse);
    
    const projectPromises = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async fileName => {
        const slug = fileName.replace(/\.md$/, '');
        return getProjectContentBySlug(slug, locale);
      });

    const projects = await Promise.all(projectPromises);

    return projects.filter((project): project is any => project !== null);
  } catch (error) {
    console.error(`Error loading project content in ${locale}:`, error);
    return [];
  }
}
