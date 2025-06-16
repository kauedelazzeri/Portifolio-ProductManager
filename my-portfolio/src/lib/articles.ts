import matter from "gray-matter";
import { Article } from "./types";

const articlesCache: Record<string, Article> = {};

export async function getArticleBySlug(slug: string, locale: string): Promise<Article | null> {
  const cacheKey = `${locale}/${slug}`;
  
  if (articlesCache[cacheKey]) {
    return articlesCache[cacheKey];
  }

  try {
    const filePath = `src/content/articles/${locale}/${slug}.md`;
    const fileContent = await import(`@/content/articles/${locale}/${slug}.md`);
    const { data, content } = matter(fileContent.default);

    const article: Article = {
      slug,
      title: data.title,
      subtitle: data.subtitle,
      date: data.date,
      author: data.author,
      tags: data.tags,
      content,
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
    const articles = await Promise.all([
      getArticleBySlug("wind-turbine-fault-prediction", locale),
    ]);

    return articles.filter((article): article is Article => article !== null);
  } catch (error) {
    console.error(`Error loading articles in ${locale}:`, error);
    return [];
  }
} 