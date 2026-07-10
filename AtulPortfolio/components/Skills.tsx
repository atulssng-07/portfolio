"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/Section";
import { cardReveal, sectionReveal, tagReveal } from "@/lib/animations";
import { skillCategories } from "@/data/portfolio";

export function Skills() {
  const [openSkill, setOpenSkill] = useState<string | null>(null);

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A practical stack for analytics, BI, and operations reporting"
      description="The skill set is organized around the complete reporting path: clean the data, model the questions, build the dashboard, and monitor the business process. Click any skill to see exactly what's been covered."
    >
      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <motion.article
              key={category.title}
              variants={cardReveal}
              className="card-border rounded-lg p-6 transition-shadow hover:shadow-[0_26px_80px_rgba(15,118,110,0.15)]"
            >
              <div className="mb-5 flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-ink text-cyan-glow">
                  <Icon size={21} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-ink">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {category.summary}
                  </p>
                </div>
              </div>

              <div className="relative">
                {/* Connecting thread linking all skills in this card */}
                <div className="absolute bottom-3 left-[9px] top-3 w-px overflow-hidden bg-slate-200">
                  <motion.div
                    initial={{ y: "-100%" }}
                    whileInView={{ y: "100%" }}
                    viewport={{ once: false, margin: "-60px" }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="h-1/2 w-full bg-gradient-to-b from-transparent via-teal-signal to-transparent"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  {category.skills.map((skill) => {
                    const key = `${category.title}-${skill.name}`;
                    const isOpen = openSkill === key;

                    return (
                      <div key={key} className="relative pl-6">
                        {/* Node on the thread */}
                        <span className="absolute left-0 top-[13px] h-[9px] w-[9px] shrink-0 -translate-x-[3.5px] rounded-full border-2 border-teal-signal bg-white" />

                        <div className="overflow-hidden rounded-md border border-slate-200 bg-slate-50">
                          <motion.button
                            type="button"
                            variants={tagReveal}
                            onClick={() => setOpenSkill(isOpen ? null : key)}
                            whileHover={{ borderColor: "rgba(20,184,166,0.6)" }}
                            className="focus-ring flex w-full items-center justify-between gap-2 px-3 py-2.5 text-left"
                          >
                            <span className="text-sm font-medium text-slate-700">
                              {skill.name}
                            </span>
                            <motion.span
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="shrink-0 text-slate-500"
                            >
                              <ChevronDown size={15} aria-hidden="true" />
                            </motion.span>
                          </motion.button>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.22 }}
                                className="overflow-hidden"
                              >
                                <ul className="space-y-2 border-t border-slate-200 px-3 py-3">
                                  {skill.topics.map((topic) => (
                                    <li
                                      key={topic}
                                      className="flex gap-2 text-xs leading-5 text-slate-600"
                                    >
                                      <CheckCircle2
                                        size={13}
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
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </Section>
  );
}