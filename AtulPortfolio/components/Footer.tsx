import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="bg-ink py-8 text-white">
      <div className="section-shell flex flex-col gap-3 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {profile.name}. Data Analyst & BI Portfolio.</p>
        <p>{profile.location} | Open to Gurugram, Delhi NCR, and Pan India.</p>
      </div>
    </footer>
  );
}
