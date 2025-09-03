"use client";

import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/context/i18n";

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const { t } = useTranslation();
  return (
    <>
      <div className="animate-fade-in space-y-8 mb-16">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">{t('projectsGrid.title')}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            {t('projectsGrid.description')}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block h-full"
          >
            <div className="relative overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:border-foreground/50 hover:shadow-lg">
              <div className="aspect-[16/9] w-full overflow-hidden bg-muted">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-muted to-muted/80">
                    <span className="text-sm text-muted-foreground">
                      Project preview
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h2>
                <p className="mt-2 text-muted-foreground line-clamp-2">
                  {project.summary}
                </p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack?.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary transition-colors group-hover:bg-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack?.length > 3 && (
                    <span className="inline-flex items-center rounded-full bg-secondary/80 px-2.5 py-1 text-xs font-medium">
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
