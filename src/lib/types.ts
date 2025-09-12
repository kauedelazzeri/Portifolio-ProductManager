import { MDXRemoteSerializeResult } from 'next-mdx-remote';

// Article types
export type Article = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  author: string;
  tags: string[];
  content: MDXRemoteSerializeResult;
};

export type ArticleMeta = Omit<Article, 'content'>;

// Project types  
export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  duration: string;
  context: string;
  challenge: string;
  decisions: string[];
  results: string[];
  stack: string[];
  image: string;
  repoLink?: string;
  articleLink?: string;
  featured?: boolean;
  translations?: {
    pt?: {
      title?: string;
      summary?: string;
    };
  };
};

export type ProjectMeta = Pick<Project, 'slug' | 'title' | 'summary' | 'image' | 'stack' | 'featured'>;

// Skill types
export type Skill = {
  title: string;
  description: string;
  icon: React.ReactNode;
  tools: string[];
  category: 'technical' | 'management' | 'design';
};

// Common types
export type SupportedLocale = 'en' | 'pt'; 