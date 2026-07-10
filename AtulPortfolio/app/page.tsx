import { About } from "@/components/About";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { Skills } from "@/components/Skills";
import { LearningRoadmap } from "@/components/LearningRoadmap";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <LearningRoadmap />
        <Experience />
        <ProjectsExplorer />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
