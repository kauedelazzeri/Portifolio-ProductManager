"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Skill {
  name: string;
  description: string;
  examples?: string[];
}

interface SkillCardProps {
  title: string;
  skills: Skill[];
}

export function SkillCard({ title, skills }: SkillCardProps) {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  return (
    <div className="rounded-lg border p-4">
      <h4 className="font-medium">{title}</h4>
      <ul className="mt-2 space-y-2">
        {skills.map((skill) => (
          <li key={skill.name}>
            <button
              onClick={() => setExpandedSkill(expandedSkill === skill.name ? null : skill.name)}
              className="group w-full text-left"
            >
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground group-hover:text-foreground">
                  {skill.name}
                </span>
                <svg
                  className={`h-4 w-4 transition-transform ${
                    expandedSkill === skill.name ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <AnimatePresence>
                {expandedSkill === skill.name && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-2 text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                    {skill.examples && (
                      <ul className="mt-2 list-disc pl-4 text-sm text-muted-foreground">
                        {skill.examples.map((example, index) => (
                          <li key={index}>{example}</li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
