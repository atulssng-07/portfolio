"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { cardReveal, sectionReveal, tagReveal } from "@/lib/animations";
import { skillCategories } from "@/data/portfolio";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A practical stack for analytics, BI, and operations reporting"
      description="The skill set is organized around the complete reporting path: clean the data, model the questions, build the dashboard, and monitor the business process."
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
              whileHover={{ y: -7 }}
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
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={tagReveal}
                    whileHover={{ y: -2, borderColor: "rgba(20,184,166,0.6)" }}
                    className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </Section>
  );
}
