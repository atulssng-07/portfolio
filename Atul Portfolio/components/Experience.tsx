"use client";

import { motion } from "framer-motion";
import { CalendarDays, CheckCircle2, MapPin } from "lucide-react";
import { Section } from "@/components/Section";
import { cardReveal, sectionReveal } from "@/lib/animations";
import { experiences } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Reporting work grounded in real operational workflows"
      description="Hands-on exposure across ERPNext modules, CRM operations, dashboards, and data analysis workflows."
      className="bg-white"
    >
      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative grid gap-6 lg:grid-cols-2"
      >
        <div className="absolute left-1/2 top-4 hidden h-[calc(100%-2rem)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-teal-signal/40 to-transparent lg:block" />
        {experiences.map((item, index) => (
          <motion.article
            key={item.company}
            variants={cardReveal}
            whileHover={{ y: -7 }}
            className="card-border relative rounded-lg p-6 transition-shadow hover:shadow-[0_26px_90px_rgba(15,23,42,0.13)] sm:p-7"
          >
            <span
              className={cn(
                "absolute -top-3 left-6 flex h-6 w-6 items-center justify-center rounded-full border bg-white shadow-sm",
                index % 2 === 0
                  ? "border-teal-signal/40 lg:left-auto lg:right-[-2.15rem]"
                  : "border-cyan-glow/40 lg:left-[-2.15rem]"
              )}
            >
              <span
                className={cn(
                  "h-2.5 w-2.5 rounded-full",
                  index % 2 === 0 ? "bg-teal-signal" : "bg-cyan-glow"
                )}
              />
            </span>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-md bg-teal-signal/12 px-3 py-1.5 text-sm font-semibold text-teal-700">
                {item.type}
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-slate-500">
                <CalendarDays size={16} aria-hidden="true" />
                {item.period}
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-ink">{item.title}</h3>
            <p className="mt-2 font-medium text-slate-700">{item.company}</p>
            {item.location && (
              <p className="mt-2 inline-flex items-center gap-2 text-sm text-slate-500">
                <MapPin size={15} aria-hidden="true" />
                {item.location}
              </p>
            )}
            <ul className="mt-6 space-y-3">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm leading-6 text-slate-600">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-teal-signal"
                    aria-hidden="true"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
