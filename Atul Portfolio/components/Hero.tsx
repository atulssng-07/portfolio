"use client";

import dynamic from "next/dynamic";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform
} from "framer-motion";
import {
  ArrowDownRight,
  Database,
  Download,
  Mail,
  MapPin,
  RadioTower
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cardReveal, sectionReveal, tagReveal } from "@/lib/animations";
import { heroKpis, heroMetrics, profile, proofPoints } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const DynamicHeroDataScene = dynamic(
  () => import("@/components/HeroDataScene").then((module) => module.HeroDataScene),
  {
    ssr: false,
    loading: () => null
  }
);

function AnimatedCounter({
  value,
  suffix = ""
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 72, damping: 18 });
  const display = useTransform(springValue, (latest) => `${Math.round(latest)}${suffix}`);

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export function Hero() {
  const reducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const showScene = !reducedMotion && !isMobile;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateViewport = () => setIsMobile(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-ink pt-28 text-white sm:pt-32">
      <div className="absolute inset-0 -z-30">
        <Image
          src="/atul-analytics-hero.png"
          alt="Data dashboard visual with analytics panels"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
      </div>
      {showScene && (
        <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-full opacity-95 md:block lg:w-[68%]">
          <DynamicHeroDataScene />
        </div>
      )}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_68%_26%,rgba(34,211,238,0.18),transparent_30rem),linear-gradient(90deg,#07111f_0%,rgba(7,17,31,0.96)_42%,rgba(7,17,31,0.76)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-mist to-transparent" />
      <div className="absolute inset-0 -z-10 bg-data-grid dashboard-grid opacity-24" />

      <motion.div
        variants={sectionReveal}
        initial="hidden"
        animate="visible"
        className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-12 pb-20 lg:grid-cols-[1.02fr_0.98fr]"
      >
        <motion.div
          variants={cardReveal}
          className="min-w-0 max-w-3xl"
        >
          <motion.div
            variants={tagReveal}
            className="mb-6 inline-flex max-w-full min-w-0 items-center gap-2 rounded-md border border-white/12 bg-white/8 px-3 py-2 text-sm text-slate-200 backdrop-blur"
          >
            <MapPin size={16} className="shrink-0 text-teal-signal" />
            <span className="min-w-0 truncate">
              {profile.location} | Preferred: Gurugram / Delhi NCR / Pan India
            </span>
          </motion.div>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-full text-xl font-medium leading-8 text-cyan-glow sm:text-2xl">
            {profile.headline}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            {profile.subheadline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.a
              href="#projects"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-cyan-glow px-5 py-3 text-sm font-semibold text-ink shadow-[0_18px_48px_rgba(34,211,238,0.24)] transition hover:bg-white"
            >
              View Projects
              <ArrowDownRight size={18} aria-hidden="true" />
            </motion.a>
            <motion.a
              href={profile.resume}
              download
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-white/18 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Download Resume
              <Download size={18} aria-hidden="true" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-teal-signal/50 px-5 py-3 text-sm font-semibold text-teal-100 transition hover:bg-teal-signal/16"
            >
              Contact Me
              <Mail size={18} aria-hidden="true" />
            </motion.a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {proofPoints.map((point) => {
              const Icon = point.icon;
              return (
                <motion.div
                  variants={cardReveal}
                  whileHover={{ y: -4, borderColor: "rgba(34,211,238,0.45)" }}
                  key={point.label}
                  className="rounded-md border border-white/10 bg-white/8 p-4 backdrop-blur"
                >
                  <Icon size={18} className="mb-3 text-teal-signal" />
                  <p className="text-sm font-semibold text-white">{point.value}</p>
                  <p className="mt-1 text-xs text-slate-300">{point.label}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          variants={cardReveal}
          className="relative min-w-0"
          aria-label="Animated data capability cards"
        >
          <div className="absolute -left-4 top-8 hidden rounded-md border border-cyan-glow/25 bg-cyan-glow/10 px-3 py-2 text-xs font-semibold text-cyan-100 shadow-glow backdrop-blur lg:block">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-cyan-glow shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
            Streaming events
          </div>

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="dark-card rounded-lg p-4 sm:p-5"
          >
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm text-slate-400">Capability Snapshot</p>
                <p className="mt-1 text-lg font-semibold text-white">
                  Analytics stack readiness
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-md bg-teal-signal/16 px-3 py-2 text-sm font-semibold text-teal-100">
                <span className="h-2 w-2 animate-pulse rounded-full bg-teal-signal" />
                Live
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {heroKpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-md border border-white/10 bg-white/[0.07] p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    {kpi.label}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-white">
                    <AnimatedCounter value={kpi.value} suffix={kpi.suffix} />
                  </p>
                  <p className="mt-1 text-sm text-slate-400">{kpi.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {heroMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  variants={cardReveal}
                  transition={{ duration: 0.45, delay: 0.22 + index * 0.08 }}
                  whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.1)" }}
                  className={cn(
                    "rounded-md border border-white/10 bg-white/[0.07] p-4",
                    index === heroMetrics.length - 1 && "sm:col-span-2"
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold text-slate-300">
                      {metric.label}
                    </p>
                    <span className="h-2 w-2 rounded-full bg-cyan-glow shadow-[0_0_16px_rgba(34,211,238,0.8)]" />
                  </div>
                  <p className="mt-5 text-xl font-semibold text-white">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">{metric.detail}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 rounded-md border border-cyan-glow/20 bg-cyan-glow/8 p-4">
              <div className="mb-3 flex items-center justify-between text-xs text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <Database size={14} />
                  Raw data
                </span>
                <span className="inline-flex items-center gap-2">
                  <RadioTower size={14} />
                  Insights
                </span>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-2">
                {["SQL", "Python", "Power BI", "Insights"].map((label, index) => (
                  <div key={label} className="contents">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="rounded-md bg-white/10 px-2 py-3 text-center text-xs font-semibold text-white sm:text-sm"
                    >
                      {label}
                    </motion.div>
                    {index < 3 && (
                      <div className="relative h-px w-4 overflow-hidden bg-cyan-glow/30 sm:w-5">
                        <span className="absolute inset-y-0 left-0 w-1/2 animate-data-flow bg-cyan-glow" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
