import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Highlights from "@/components/Highlights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="mx-auto max-w-3xl border-t border-border" />
        <About />
        <div className="mx-auto max-w-3xl border-t border-border" />
        <Projects />
        <div className="mx-auto max-w-3xl border-t border-border" />
        <Experience />
        <div className="mx-auto max-w-3xl border-t border-border" />
        <Skills />
        <div className="mx-auto max-w-3xl border-t border-border" />
        <Highlights />
        <div className="mx-auto max-w-3xl border-t border-border" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
