"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import posthog from "posthog-js";

export default function Analytics() {
  const pathname = usePathname() ?? "";

  // initialize posthog once
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || "", {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      capture_pageview: false,
      person_profiles: "identified_only",
      defaults: "2025-05-24",
    });
  }, []);

  // capture page load with some user info
  useEffect(() => {
    posthog.capture("page_loaded", {
      path: pathname,
      language: navigator.language,
      userAgent: navigator.userAgent,
    });
    if (pathname.startsWith("/projects")) {
      posthog.capture("section_view", { section: "projects" });
    }
  }, [pathname]);

  // observe sections and important actions
  useEffect(() => {
    const sections = ["skills", "articles", "contact"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            posthog.capture("section_view", { section: id });
            observer.disconnect();
          }
        });
      }, { threshold: 0.5 });
      obs.observe(el);
      observers.push(obs);
    });

    const projectsLink = document.querySelector('a[href="/projects"]');
    const handleProjects = () => posthog.capture("section_view", { section: "projects" });
    projectsLink?.addEventListener("click", handleProjects);

    const emailLink = document.querySelector('a[href^="mailto:"]');
    const handleEmail = () => posthog.capture("contact_email");
    emailLink?.addEventListener("click", handleEmail);

    const linkedinLink = document.querySelector('a[href*="linkedin.com"]');
    const handleLinkedin = () => posthog.capture("contact_linkedin");
    linkedinLink?.addEventListener("click", handleLinkedin);

    return () => {
      observers.forEach((o) => o.disconnect());
      projectsLink?.removeEventListener("click", handleProjects);
      emailLink?.removeEventListener("click", handleEmail);
      linkedinLink?.removeEventListener("click", handleLinkedin);
    };
  }, []);

  return null;
}
