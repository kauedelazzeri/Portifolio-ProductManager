import matter from "gray-matter";
import { Article } from "./types";
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import fs from 'fs';
import path from 'path';

const articlesCache: Record<string, Article> = {};

export async function getArticleBySlug(slug: string, locale: string): Promise<Article | null> {
  const cacheKey = `${locale}/${slug}`;
  
  if (articlesCache[cacheKey]) {
    return articlesCache[cacheKey];
  }

  try {
    const articlesDirectory = path.join(process.cwd(), 'src', 'content', 'articles', locale);
    const filePath = path.join(articlesDirectory, `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeRaw, rehypeSanitize],
      },
    });

    const article: Article = {
      slug,
      title: data.title,
      subtitle: data.subtitle,
      date: data.date,
      author: data.author,
      tags: data.tags,
      content: mdxSource,
    };

    articlesCache[cacheKey] = article;
    return article;
  } catch (error) {
    console.error(`Error loading article ${slug} in ${locale}:`, error);
    return null;
  }
}

export async function getAllArticles(locale: string): Promise<Article[]> {
  try {
    const articlesDirectory = path.join(process.cwd(), 'src', 'content', 'articles', locale);
    const fileNames = fs.readdirSync(articlesDirectory);
    
    const articlePromises = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async fileName => {
        const slug = fileName.replace(/\.md$/, '');
        return getArticleBySlug(slug, locale);
      });

    const articles = await Promise.all(articlePromises);

    return articles.filter((article): article is Article => article !== null);
  } catch (error) {
    console.error(`Error loading articles in ${locale}:`, error);
    return [];
  }
} 