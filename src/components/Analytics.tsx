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
    const startTime = Date.now();
    
    posthog.capture("page_loaded", {
      path: pathname,
      language: navigator.language,
      userAgent: navigator.userAgent,
      projeto: "portifolio",
    });
    
    if (pathname.startsWith("/projects")) {
      posthog.capture("section_view", { 
        section: "projects",
        projeto: "portifolio",
      });
    }

    // Track page time on unload
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      posthog.capture("page_time", {
        path: pathname,
        time_spent_seconds: timeSpent,
        projeto: "portifolio",
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
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
            posthog.capture("section_view", { 
              section: id,
              projeto: "portifolio",
            });
            observer.disconnect();
          }
        });
      }, { threshold: 0.5 });
      obs.observe(el);
      observers.push(obs);
    });

    const projectsLink = document.querySelector('a[href="/projects"]');
    const handleProjects = () => posthog.capture("section_view", { 
      section: "projects",
      projeto: "portifolio",
    });
    projectsLink?.addEventListener("click", handleProjects);

    const emailLink = document.querySelector('a[href^="mailto:"]');
    const handleEmail = () => posthog.capture("contact_email", {
      projeto: "portifolio",
    });
    emailLink?.addEventListener("click", handleEmail);

    const linkedinLink = document.querySelector('a[href*="linkedin.com"]');
    const handleLinkedin = () => posthog.capture("contact_linkedin", {
      projeto: "portifolio",
    });
    linkedinLink?.addEventListener("click", handleLinkedin);

    // Track project card clicks
    const projectCards = document.querySelectorAll('[data-project-slug]');
    const handleProjectClick = (event: Event) => {
      const target = event.currentTarget as HTMLElement;
      const slug = target.getAttribute('data-project-slug');
      posthog.capture("project_click", {
        project_slug: slug,
        projeto: "portifolio",
      });
    };
    projectCards.forEach(card => {
      card.addEventListener("click", handleProjectClick);
    });

    // Track CTA button clicks
    const ctaButtons = document.querySelectorAll('[data-cta]');
    const handleCtaClick = (event: Event) => {
      const target = event.currentTarget as HTMLElement;
      const ctaType = target.getAttribute('data-cta');
      posthog.capture("cta_click", {
        cta_type: ctaType,
        projeto: "portifolio",
      });
    };
    ctaButtons.forEach(button => {
      button.addEventListener("click", handleCtaClick);
    });

    // Track skill card interactions
    const skillCards = document.querySelectorAll('[data-skill]');
    const handleSkillHover = (event: Event) => {
      const target = event.currentTarget as HTMLElement;
      const skillType = target.getAttribute('data-skill');
      posthog.capture("skill_hover", {
        skill_type: skillType,
        projeto: "portifolio",
      });
    };
    skillCards.forEach(card => {
      card.addEventListener("mouseenter", handleSkillHover, { once: true });
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    const milestones = [25, 50, 75, 90];
    const trackedMilestones = new Set();
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = Math.round((scrollTop + windowHeight) / documentHeight * 100);
      
      if (scrollPercentage > maxScrollDepth) {
        maxScrollDepth = scrollPercentage;
        
        // Track milestone scroll depths
        milestones.forEach(milestone => {
          if (scrollPercentage >= milestone && !trackedMilestones.has(milestone)) {
            trackedMilestones.add(milestone);
            posthog.capture("scroll_depth", {
              percentage: milestone,
              projeto: "portifolio",
            });
          }
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observers.forEach((o) => o.disconnect());
      projectsLink?.removeEventListener("click", handleProjects);
      emailLink?.removeEventListener("click", handleEmail);
      linkedinLink?.removeEventListener("click", handleLinkedin);
      projectCards.forEach(card => {
        card.removeEventListener("click", handleProjectClick);
      });
      ctaButtons.forEach(button => {
        button.removeEventListener("click", handleCtaClick);
      });
      skillCards.forEach(card => {
        card.removeEventListener("mouseenter", handleSkillHover);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
