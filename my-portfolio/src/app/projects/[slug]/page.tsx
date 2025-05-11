import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { getCaseBySlug, getOtherCases } from "@/lib/cases";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getCaseBySlug(params.slug);
  
  if (!project) {
    notFound();
  }

  const otherProjects = getOtherCases(params.slug);

  return (
    <div className="space-y-12">
      {/* Back Button */}
      <Link
        href="/projects"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
      >
        <ChevronLeftIcon className="mr-1 h-4 w-4" />
        Back to Projects
      </Link>

      {/* Project Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-lg text-muted-foreground">{project.summary}</p>
        
        <div className="flex flex-wrap gap-4 text-sm">
          <div>
            <span className="font-medium">Role:</span> {project.role}
          </div>
          <div>
            <span className="font-medium">Duration:</span> {project.duration}
          </div>
        </div>
      </div>

      {/* Project Image */}
      <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
        <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
          Project screenshot coming soon
        </div>
      </div>

      {/* Project Content */}
      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          {/* Context */}
          <section>
            <h2 className="text-2xl font-semibold">Context</h2>
            <p className="mt-2 text-muted-foreground">{project.context}</p>
          </section>

          {/* Challenge */}
          <section>
            <h2 className="text-2xl font-semibold">Challenge</h2>
            <p className="mt-2 text-muted-foreground">{project.challenge}</p>
          </section>

          {/* Key Decisions */}
          <section>
            <h2 className="text-2xl font-semibold">Key Decisions</h2>
            <ul className="mt-4 space-y-2">
              {project.decisions.map((decision, index) => (
                <li key={index} className="flex gap-2 text-muted-foreground">
                  <span className="text-foreground">•</span>
                  {decision}
                </li>
              ))}
            </ul>
          </section>

          {/* Results */}
          <section>
            <h2 className="text-2xl font-semibold">Results</h2>
            <ul className="mt-4 space-y-2">
              {project.results.map((result, index) => (
                <li key={index} className="flex gap-2 text-muted-foreground">
                  <span className="text-foreground">•</span>
                  {result}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Tech Stack */}
          <section className="rounded-lg border p-6">
            <h3 className="font-semibold">Tech Stack</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="rounded-lg border p-6">
            <h3 className="font-semibold">Interested in working together?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Let's discuss how I can help with your product challenges.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get in Touch
            </Link>
          </section>
        </div>
      </div>

      {/* Other Projects */}
      <section className="pt-8">
        <h2 className="text-2xl font-semibold">Other Projects</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {otherProjects.map((otherProject) => (
            <Link
              key={otherProject.slug}
              href={`/projects/${otherProject.slug}`}
              className="group rounded-lg border p-6 transition-colors hover:border-foreground"
            >
              <h3 className="font-semibold group-hover:text-primary">
                {otherProject.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {otherProject.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
