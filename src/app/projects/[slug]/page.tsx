import { notFound } from "next/navigation";
import { getProjectBySlug, getOtherProjects } from "@/lib/projects";
import { getProjectContentBySlug } from "@/lib/project-content";
import { cookies } from 'next/headers';
import { MarkdownContent } from "@/components/markdown-content";
import Image from "next/image";
import Link from "next/link";
import pt from '@/locales/pt.json';
import en from '@/locales/en.json';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const cookieStore = cookies();
  const lang = cookieStore.get('NEXT_LOCALE')?.value || 'en';
  const translations: Record<string, any> = lang === 'pt' ? pt : en;

  const t = (key: string) => {
    const parts = key.split('.');
    let current: any = translations;
    for (const part of parts) {
      if (current && typeof current === 'object' && part in current) {
        current = current[part];
      } else {
        return key;
      }
    }
    return typeof current === 'string' ? current : key;
  };

  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const articleContent = await getProjectContentBySlug(params.slug, lang);

  if (!articleContent) {
    notFound();
  }

  const otherProjects = getOtherProjects(params.slug);

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
        <MarkdownContent content={articleContent.content} />
      </div>

      {otherProjects.length > 0 && (
        <aside className="mt-16 border-t pt-8">
          <h2 className="text-2xl font-bold mb-8">{t('projectPage.other')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((proj) => (
              <Link
                key={proj.slug}
                href={`/projects/${proj.slug}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-lg border bg-card p-6 transition-all hover:border-foreground/50 hover:shadow-lg">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {proj.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {proj.summary}
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
