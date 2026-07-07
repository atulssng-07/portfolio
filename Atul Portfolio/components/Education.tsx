"use client";

import { motion } from "framer-motion";
import { CalendarClock, GraduationCap, Medal, TrendingUp } from "lucide-react";
import { Section } from "@/components/Section";
import { cardReveal, sectionReveal } from "@/lib/animations";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic foundation in computer science and data systems"
      description="A Computer Science Engineering background supports Atul's work across databases, Python, BI dashboards, ERP workflows, and analytical problem solving."
      className="bg-white"
    >
      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]"
      >
        <motion.article
          variants={cardReveal}
          whileHover={{ y: -6 }}
          className="card-border relative overflow-hidden rounded-lg p-6 sm:p-8"
        >
          <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-cyan-glow/10" />
          <div className="relative">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-ink text-cyan-glow">
              <GraduationCap size={25} aria-hidden="true" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              University
            </p>
            <h3 className="mt-4 text-2xl font-semibold leading-8 text-ink">
              {education.school}
            </h3>
            <p className="mt-3 leading-7 text-slate-700">{education.degree}</p>
          </div>
        </motion.article>

        <motion.div variants={cardReveal} className="card-border rounded-lg p-6 sm:p-8">
          <div className="relative grid gap-5 sm:grid-cols-3">
            <div className="absolute left-4 top-8 hidden h-px w-[calc(100%-2rem)] bg-gradient-to-r from-teal-signal via-cyan-glow to-violet-accent/60 sm:block" />
            {[
              {
                label: "Degree",
                value: "B.Tech CSE",
                detail: "Computer Science & Engineering",
                icon: Medal
              },
              {
                label: "Graduation",
                value: education.graduationYear,
                detail: "Expected completion",
                icon: CalendarClock
              },
              {
                label: "CGPA",
                value: education.cgpa,
                detail: "Academic performance",
                icon: TrendingUp
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  variants={cardReveal}
                  whileHover={{ y: -4 }}
                  className="relative rounded-md border border-slate-200 bg-slate-50 p-5"
                >
                  <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-md bg-white text-teal-700 shadow-sm">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-ink">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
