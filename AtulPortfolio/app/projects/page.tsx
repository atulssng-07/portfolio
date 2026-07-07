import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";

export const metadata: Metadata = {
  title: "Projects | Atul Kumar Singh",
  description:
    "Data analysis, BI, ML, and Python projects by Atul Kumar Singh."
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <ProjectsExplorer expanded />
      </main>
      <Footer />
    </>
  );
}
