"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { sectionReveal, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  theme?: "light" | "dark";
  className?: string;
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  theme = "light",
  className,
  children
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-28", className)}>
      <motion.div
        className="section-shell"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {(eyebrow || title || description) && (
          <motion.div variants={sectionReveal} className="mb-10 max-w-3xl">
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-teal-signal">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={cn(
                  "text-3xl font-semibold sm:text-4xl",
                  theme === "dark" ? "text-white" : "text-ink"
                )}
              >
                {title}
              </h2>
            )}
            {description && (
              <p
                className={cn(
                  "mt-4 text-base leading-8 sm:text-lg",
                  theme === "dark" ? "text-slate-300" : "text-slate-600"
                )}
              >
                {description}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
