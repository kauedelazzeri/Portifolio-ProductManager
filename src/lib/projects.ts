import projectsData from '@/data/projects.json';
import { Project, ProjectMeta } from './types';

export function getAllProjects(): Project[] {
  return projectsData.projects as Project[];
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.projects.find((project) => project.slug === slug) as Project | undefined;
}

export function getOtherProjects(currentSlug: string): Project[] {
  return projectsData.projects.filter((project) => project.slug !== currentSlug) as Project[];
}

export function getFeaturedProjects(): Project[] {
  return projectsData.projects.filter((project) => project.featured === true) as Project[];
}

export function getProjectsByTechnology(tech: string): Project[] {
  return projectsData.projects.filter((project) => 
    project.stack.some(t => t.toLowerCase().includes(tech.toLowerCase()))
  ) as Project[];
}
