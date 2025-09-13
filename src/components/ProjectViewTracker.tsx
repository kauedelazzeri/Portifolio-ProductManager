"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

interface ProjectViewTrackerProps {
  projectSlug: string;
  projectTitle: string;
}

export function ProjectViewTracker({ projectSlug, projectTitle }: ProjectViewTrackerProps) {
  useEffect(() => {
    posthog.capture("project_view", {
      project_slug: projectSlug,
      project_title: projectTitle,
      projeto: "portifolio",
    });
  }, [projectSlug, projectTitle]);

  return null;
}