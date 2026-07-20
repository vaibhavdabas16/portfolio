import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="mx-auto max-w-3xl border-t border-border" />
        <About />
      </main>
    </>
  );
}
