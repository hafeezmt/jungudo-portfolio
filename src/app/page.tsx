import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { BuildingInPublic } from "@/components/BuildingInPublic";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingBubbles } from "@/components/FloatingBubbles";

export default function Home() {
  return (
    <>
      {/* Global floating bubbles — sits behind everything */}
      <FloatingBubbles />

      <Navbar />
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <BuildingInPublic />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
