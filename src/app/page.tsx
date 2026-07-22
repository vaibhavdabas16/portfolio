import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

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
      </main>
    </>
  );
}
