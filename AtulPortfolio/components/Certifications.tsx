"use client";

import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Section } from "@/components/Section";
import { cardReveal, sectionReveal } from "@/lib/animations";
import { certifications, type Certification } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function issuerInitials(issuer: string) {
  return issuer
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

function CertificateImage({ certification }: { certification: Certification }) {
  const [showFallback, setShowFallback] = useState(!certification.certificateImage);

  return (
    <div className="relative h-40 overflow-hidden rounded-md border border-slate-200 bg-ink">
      {!showFallback && certification.certificateImage ? (
        <Image
          src={certification.certificateImage}
          alt={`${certification.title} certificate`}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
          onError={() => setShowFallback(true)}
        />
      ) : (
        <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_35%_20%,rgba(34,211,238,0.22),transparent_18rem),linear-gradient(135deg,#07111f,#0d1726)]">
          <div className="rounded-md border border-cyan-glow/25 bg-white/8 px-5 py-4 text-center shadow-glow backdrop-blur">
            <p className="text-3xl font-semibold text-cyan-glow">
              {issuerInitials(certification.issuer)}
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
              Certificate
            </p>
          </div>
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink/70 to-transparent" />
    </div>
  );
}

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Focused credentials in data analysis, EDA, and Python"
      description="Dedicated certification cards include the issuer, completion date, learning outcome, and an image slot that falls back gracefully when files are not available."
      className="bg-mist"
    >
      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-5 lg:grid-cols-3"
      >
        {certifications.map((certification) => (
          <motion.article
            key={certification.title}
            variants={cardReveal}
            whileHover={{ y: -8 }}
            className="card-border group rounded-lg p-4 transition-shadow hover:shadow-[0_26px_80px_rgba(15,118,110,0.18)]"
          >
            <CertificateImage certification={certification} />

            <div className="p-2 pt-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-md bg-teal-signal/12 px-3 py-1.5 text-sm font-semibold text-teal-700">
                  <Award size={15} aria-hidden="true" />
                  {certification.issuer}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-slate-500">
                  <Calendar size={14} aria-hidden="true" />
                  {certification.date}
                </span>
              </div>

              <h3 className="text-xl font-semibold leading-7 text-ink">
                {certification.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {certification.outcome}
              </p>

              {certification.certificateUrl ? (
                <a
                  href={certification.certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-ink px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-signal"
                >
                  View Certificate
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className={cn(
                    "mt-5 inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-md border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-500",
                    "bg-white/70"
                  )}
                >
                  View Certificate
                  <ExternalLink size={16} aria-hidden="true" />
                </button>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
