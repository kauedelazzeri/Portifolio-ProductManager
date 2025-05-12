import Link from "next/link";
import { FadeIn } from "@/components/animations";

export default function NotFound() {
  return (
    <FadeIn>
      <div className="flex flex-col items-center justify-center space-y-4 py-16 text-center">
        <div className="rounded-full bg-secondary p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold">Project Not Found</h1>
        <p className="max-w-[500px] text-muted-foreground">
          Sorry, we couldn't find the project you're looking for. Please check the URL or browse all projects.
        </p>
        <Link
          href="/projects"
          className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          View All Projects
        </Link>
      </div>
    </FadeIn>
  );
}
