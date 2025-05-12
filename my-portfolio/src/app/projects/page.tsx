import { getAllCases } from "@/lib/cases";
import { ProjectsGrid } from "@/components/projects-grid";

export default function ProjectsPage() {
  const projects = getAllCases();

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <ProjectsGrid projects={projects} />
    </div>
  );
}
