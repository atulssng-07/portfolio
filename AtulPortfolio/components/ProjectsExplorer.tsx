"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Filter } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Section } from "@/components/Section";
import { projects, type ProjectCategory } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const filters: Array<ProjectCategory | "All"> = [
  "All",
  "Analytics",
  "BI",
  "ML",
  "Python"
];

type ProjectsExplorerProps = {
  expanded?: boolean;
};

export function ProjectsExplorer({ expanded = false }: ProjectsExplorerProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "All">("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected analysis, BI, ML, and Python work"
      description="Each project card frames the business objective, tools used, and the practical outcome a recruiter or hiring manager can scan quickly."
      theme={expanded ? "light" : "dark"}
      className={expanded ? "bg-mist pt-10" : "bg-ink text-white"}
    >
      <div className="mb-7 flex flex-col gap-4 rounded-lg border border-slate-200/12 bg-white/8 p-3 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <div className="inline-flex items-center gap-2 px-2 text-sm font-semibold text-slate-300">
          <Filter size={16} aria-hidden="true" />
          Filter projects
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={cn(
                "focus-ring rounded-md px-3 py-2 text-sm font-semibold transition",
                activeFilter === filter
                  ? "bg-cyan-glow text-ink"
                  : expanded
                    ? "border border-slate-200 bg-white text-slate-700 hover:border-teal-signal"
                  : "border border-white/10 text-slate-200 hover:bg-white/10"
              )}
            >
              {filter}
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div layout className="grid gap-5 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <motion.article
              layout
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.25 }}
              whileHover={{ y: -8 }}
              className={cn(
                "rounded-lg p-6 transition-shadow",
                expanded
                  ? "card-border hover:shadow-[0_26px_90px_rgba(15,118,110,0.16)]"
                  : "border border-white/10 bg-white/[0.07] shadow-glow hover:shadow-[0_0_70px_rgba(34,211,238,0.18)]"
              )}
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <span
                    className={cn(
                      "rounded-md px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em]",
                      expanded
                        ? "bg-teal-signal/12 text-teal-700"
                        : "bg-cyan-glow/12 text-cyan-glow"
                    )}
                  >
                    {project.category}
                  </span>
                  <h3
                    className={cn(
                      "mt-4 text-xl font-semibold leading-7",
                      expanded ? "text-ink" : "text-white"
                    )}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-sm font-medium",
                      expanded ? "text-slate-500" : "text-slate-300"
                    )}
                  >
                    Role: {project.role}
                  </p>
                </div>
                <Link
                  href={project.link ?? "/projects"}
                  target={project.link ? "_blank" : undefined}
                  rel={project.link ? "noreferrer" : undefined}
                  aria-label={
                    project.link
                      ? `Open ${project.title} live dashboard`
                      : `Open ${project.title} case study`
                  }
                  className={cn(
                    "focus-ring flex h-10 w-10 shrink-0 items-center justify-center rounded-md border transition",
                    expanded
                      ? "border-slate-200 text-slate-700 hover:border-teal-signal hover:text-teal-700"
                      : "border-white/10 text-white hover:bg-white/10"
                  )}
                >
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              </div>

              <p
                className={cn(
                  "text-sm leading-7",
                  expanded ? "text-slate-600" : "text-slate-300"
                )}
              >
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={cn(
                      "rounded-md px-2.5 py-1.5 text-xs font-semibold",
                      expanded
                        ? "border border-slate-200 bg-slate-50 text-slate-700"
                        : "border border-white/10 bg-white/8 text-slate-200"
                    )}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-6 space-y-2.5">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className={cn(
                      "flex gap-2 text-sm leading-6",
                      expanded ? "text-slate-600" : "text-slate-300"
                    )}
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-teal-signal"
                      aria-hidden="true"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div
                className={cn(
                  "mt-6 rounded-md p-4 text-sm leading-6",
                  expanded
                    ? "bg-slate-50 text-slate-700"
                    : "border border-cyan-glow/20 bg-cyan-glow/8 text-cyan-50"
                )}
              >
                <span className="font-semibold">Outcome: </span>
                {project.outcome}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
