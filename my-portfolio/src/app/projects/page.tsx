import Link from "next/link";
import Image from "next/image";
import { getAllCases } from "@/lib/cases";

export default function ProjectsPage() {
  const projects = getAllCases();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A collection of my work in electric mobility, platform architecture, and digital payments.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-all hover:border-foreground hover:shadow-lg"
          >
            <div className="aspect-video w-full overflow-hidden rounded-md bg-muted mb-4">
              <div className="relative h-full w-full">
                {/* Replace with actual project images once available */}
                <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                  Project screenshot
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h2 className="font-semibold group-hover:text-primary">
                {project.title}
              </h2>
              <p className="text-sm text-muted-foreground">
                {project.summary}
              </p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
                {project.stack.length > 3 && (
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">
                    +{project.stack.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
