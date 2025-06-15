"use client";

import { useState } from "react";
import posthog from "posthog-js";
import { cn } from "@/lib/utils";

interface Skill {
  title: string;
  description: string;
  icon: React.ReactNode;
  tools: string[];
}

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = () => {
    setIsExpanded((prev) => {
      const next = !prev;
      if (next) {
        posthog.capture("skill_expand", { title: skill.title });
      }
      return next;
    });
  };

  return (
    <div
      className={cn(
        "group rounded-xl border bg-card p-6 transition-all duration-300",
        "hover:border-foreground/50 hover:shadow-lg",
        "cursor-pointer"
      )}
      onClick={toggle}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border bg-background">
            {skill.icon}
          </div>
          <div>
            <h3 className="font-semibold">{skill.title}</h3>
            <div className="mt-1 flex flex-wrap gap-1">
              {skill.tools.slice(0, 3).map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                >
                  {tool}
                </span>
              ))}
              {skill.tools.length > 3 && (
                <span className="inline-flex items-center rounded-full bg-secondary/80 px-2 py-0.5 text-xs font-medium">
                  +{skill.tools.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
        <svg
          className={cn(
            "h-5 w-5 transform text-foreground/50 transition-transform",
            isExpanded && "rotate-180"
          )}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-200",
          isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="mt-4 text-sm text-muted-foreground">
            {skill.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1">
            {skill.tools.map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center rounded-full bg-secondary/50 px-2 py-0.5 text-xs font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
