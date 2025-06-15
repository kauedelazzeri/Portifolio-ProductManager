import { notFound } from "next/navigation";
import { getCaseBySlug, getOtherCases } from "@/lib/cases";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/context/i18n";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { t } = useTranslation();
  const project = getCaseBySlug(params.slug);
  const otherProjects = getOtherCases(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="animate-fade-in max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{project.title}</h1>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <p>{t('projectPage.role')}: {project.role}</p>
          <p>{t('projectPage.duration')}: {project.duration}</p>
        </div>
      </header>

      {project.image && (
        <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={675}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="prose dark:prose-invert max-w-none">
        <h2>{t('projectPage.context')}</h2>
        <p>{project.context}</p>

        <h2>{t('projectPage.challenge')}</h2>
        <p>{project.challenge}</p>

        <h2>{t('projectPage.decisions')}</h2>
        <ul>
          {project.decisions.map((decision, index) => (
            <li key={index}>{decision}</li>
          ))}
        </ul>

        <h2>{t('projectPage.results')}</h2>
        <ul>
          {project.results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>

        <h2>{t('projectPage.stack')}</h2>
        <div className="flex flex-wrap gap-2 not-prose">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {otherProjects.length > 0 && (
        <aside className="mt-16 border-t pt-8">
          <h2 className="text-2xl font-bold mb-8">{t('projectPage.other')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-lg border bg-card p-6 transition-all hover:border-foreground/50 hover:shadow-lg">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {project.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      )}
    </article>
  );
}
