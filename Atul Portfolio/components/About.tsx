import { Section } from "@/components/Section";
import { profile } from "@/data/portfolio";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="Profile"
      title="Early-career data professional with business systems exposure"
      description="Atul Kumar Singh is a Computer Science Engineering student and early-career data professional with experience in data analysis, reporting, dashboard creation, ERP/CRM operations, and business process monitoring."
      className="bg-mist"
    >
      <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="card-border rounded-lg p-6 sm:p-8">
          <p className="text-lg leading-9 text-slate-700">
            He has worked with SQL, Python, Excel, Power BI, ERPNext, and
            machine learning basics to convert raw data into useful insights and
            operational reports. His work connects analysis with the daily
            business workflows where reports, dashboards, and KPI trackers are
            actually used.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {[
            ["Education", profile.education],
            ["Graduation", profile.graduationYear],
            ["CGPA", profile.cgpa]
          ].map(([label, value]) => (
            <div key={label} className="card-border rounded-lg p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                {label}
              </p>
              <p className="mt-3 text-xl font-semibold text-ink">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
