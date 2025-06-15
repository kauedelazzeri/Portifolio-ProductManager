import cases from '@/data/cases.json';

export type Case = {
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
};

export function getAllCases(): Case[] {
  return cases.cases;
}

export function getCaseBySlug(slug: string): Case | undefined {
  return cases.cases.find((c) => c.slug === slug);
}

export function getOtherCases(currentSlug: string): Case[] {
  return cases.cases.filter((c) => c.slug !== currentSlug).slice(0, 2);
}
