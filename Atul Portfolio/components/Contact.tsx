"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { Section } from "@/components/Section";
import { contactCards, profile } from "@/data/portfolio";
import { cardReveal, sectionReveal } from "@/lib/animations";

type FormStatus = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message")
      })
    });

    const result = (await response.json()) as { message?: string };

    if (response.ok) {
      setStatus("success");
      setMessage(result.message ?? "Message received.");
      form.reset();
      return;
    }

    setStatus("error");
    setMessage(result.message ?? "Please try again.");
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Ready for Data Analyst, BI, and reporting opportunities"
      description="Use the form or reach out through the profile links. Current location is Dehradun, with preference for Gurugram / Delhi NCR and flexibility across Pan India."
      className="bg-mist"
    >
      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <motion.div variants={sectionReveal} className="grid gap-4">
          {contactCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                variants={cardReveal}
                whileHover={{ y: -5 }}
                className="card-border rounded-lg p-5"
              >
                <Icon size={21} className="text-teal-signal" aria-hidden="true" />
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {card.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-ink">{card.value}</p>
              </motion.div>
            );
          })}

          <motion.div variants={cardReveal} whileHover={{ y: -5 }} className="card-border rounded-lg p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              Profile Links
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="focus-ring inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white"
              >
                <Mail size={16} aria-hidden="true" />
                Email
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-teal-signal"
              >
                <Linkedin size={16} aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-teal-signal"
              >
                <Github size={16} aria-hidden="true" />
                GitHub
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.form
          variants={cardReveal}
          onSubmit={handleSubmit}
          className="card-border grid gap-5 rounded-lg p-6 transition-shadow focus-within:shadow-[0_24px_90px_rgba(20,184,166,0.18)] sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Name
              <input
                required
                name="name"
                type="text"
                autoComplete="name"
                className="focus-ring rounded-md border border-slate-200 bg-white px-4 py-3 text-base font-normal text-ink transition focus:border-teal-signal focus:bg-teal-signal/5"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Email
              <input
                required
                name="email"
                type="email"
                autoComplete="email"
                className="focus-ring rounded-md border border-slate-200 bg-white px-4 py-3 text-base font-normal text-ink transition focus:border-teal-signal focus:bg-teal-signal/5"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Message
            <textarea
              required
              name="message"
              rows={7}
              className="focus-ring resize-y rounded-md border border-slate-200 bg-white px-4 py-3 text-base font-normal leading-7 text-ink transition focus:border-teal-signal focus:bg-teal-signal/5"
              placeholder="Tell me about the role, project, or reporting problem."
            />
          </label>
          <motion.button
            type="submit"
            disabled={status === "sending"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-teal-signal px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
            <Send size={17} aria-hidden="true" />
          </motion.button>
          {message && (
            <p
              className={
                status === "error"
                  ? "text-sm font-medium text-red-600"
                  : "text-sm font-medium text-teal-700"
              }
              role="status"
            >
              {message}
            </p>
          )}
        </motion.form>
      </motion.div>
    </Section>
  );
}
