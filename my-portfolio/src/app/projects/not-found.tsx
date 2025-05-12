import Link from "next/link";

export default function NotFound() {
  return (
    <div className="animate-fade-in flex flex-col items-center justify-center min-h-[50vh] text-center">
      <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
      <p className="text-muted-foreground mb-8">
        Sorry, we couldn't find the project you're looking for.
      </p>
      <Link
        href="/projects"
        className="inline-flex items-center rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
      >
        View All Projects
      </Link>
    </div>
  );
}
