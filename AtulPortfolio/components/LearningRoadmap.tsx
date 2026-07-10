"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/Section";
import { cardReveal, sectionReveal } from "@/lib/animations";
import { learningRoadmap } from "@/data/portfolio";

export function LearningRoadmap() {
  const [openTool, setOpenTool] = useState<string | null>(
    learningRoadmap[0]?.tool ?? null
  );

  return (
    <Section
      id="roadmap"
      eyebrow="Learning Roadmap"
      title="What I've actually learned, tool by tool"
      description="A breakdown of the specific topics and techniques covered under each tool in my data analyst journey so far."
    >
      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-4"
      >
        {learningRoadmap.map((item) => {
          const Icon = item.icon;
          const isOpen = openTool === item.tool;

          return (
            <motion.div
              key={item.tool}
              variants={cardReveal}
              className="card-border overflow-hidden rounded-lg"
            >
              <button
                type="button"
                onClick={() => setOpenTool(isOpen ? null : item.tool)}
                className="focus-ring flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-ink text-cyan-glow">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold text-ink">
                    {item.tool}
                  </h3>
                </div>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-slate-500"
                >
                  <ChevronDown size={20} aria-hidden="true" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-2.5 border-t border-slate-200 px-5 py-5">
                      {item.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex gap-2 text-sm leading-6 text-slate-600"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-teal-signal"
                            aria-hidden="true"
                          />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}