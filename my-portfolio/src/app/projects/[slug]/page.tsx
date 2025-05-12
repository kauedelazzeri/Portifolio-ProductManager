import Link from "next/link";
import { FadeIn } from "@/components/animations";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <div className="space-y-8">
      <Link
        href="/projects"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mr-1 h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
            clipRule="evenodd"
          />
        </svg>
        Back to Projects
      </Link>

      <FadeIn>
        <div className="flex flex-col items-center justify-center space-y-4 py-16 text-center">
          <div className="rounded-full bg-secondary p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M10 1a6.5 6.5 0 00-4.987 10.674l-.007.032a6.5 6.5 0 109.987-8.196A6.5 6.5 0 0010 1zm0 13a.75.75 0 100-1.5.75.75 0 000 1.5zm.75-4.25a.75.75 0 00-1.5 0V12a.75.75 0 001.5 0V9.75z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold">Project Details Coming Soon</h1>
          <p className="max-w-[500px] text-muted-foreground">
            This project case study is currently being prepared. Check back soon to learn more about the challenges, decisions, and outcomes of this project.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
