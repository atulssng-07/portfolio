"use client";

import { motion } from "framer-motion";
import { BarChart3, Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 18);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <motion.header
      animate={{
        backgroundColor: scrolled ? "rgba(7,17,31,0.92)" : "rgba(7,17,31,0.78)",
        boxShadow: scrolled
          ? "0 18px 60px rgba(2, 6, 23, 0.26)"
          : "0 8px 24px rgba(2, 6, 23, 0.12)"
      }}
      transition={{ duration: 0.25 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 text-white backdrop-blur-xl"
    >
      <nav
        className="section-shell flex h-16 items-center justify-between"
        aria-label="Primary navigation"
      >
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-md">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-cyan-glow text-ink">
            <BarChart3 size={19} aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold">Atul Kumar Singh</span>
            <span className="block text-xs text-slate-300">BI Portfolio</span>
          </span>
        </Link>

        <div className="hidden items-center gap-4 lg:flex xl:gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md text-sm font-medium text-slate-200 transition hover:text-cyan-glow"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={profile.resume}
            download
            className="focus-ring inline-flex items-center gap-2 rounded-md border border-cyan-glow/40 px-4 py-2 text-sm font-semibold text-cyan-glow transition hover:bg-cyan-glow hover:text-ink"
          >
            <Download size={16} aria-hidden="true" />
            Resume
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        className={cn(
          "section-shell grid overflow-hidden transition-all duration-300 lg:hidden",
          open ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0">
          <div className="grid gap-2 rounded-md border border-white/10 bg-white/5 p-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-slate-100 hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.resume}
              download
              className="focus-ring inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-cyan-glow hover:bg-white/10"
            >
              <Download size={16} aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
