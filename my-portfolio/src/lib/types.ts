export type Article = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  author: string;
  tags: string[];
  content: string;
};

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
  locale: string;
}; 