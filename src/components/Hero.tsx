import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-screen flex-col justify-center px-6 sm:px-8 pt-24"
    >
      <div className="mx-auto w-full max-w-3xl">
        <p className="font-mono text-[13px] text-text-secondary">
          <span className="text-accent">$</span> whoami
        </p>

        <h1 className="mt-5 font-[family-name:var(--font-display)] text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl font-semibold tracking-tight text-text-primary">
          {profile.name}
        </h1>

        <p className="mt-5 max-w-xl text-lg sm:text-xl text-text-secondary">
          {profile.role}
        </p>

        <p className="mt-8 font-mono text-sm sm:text-base text-text-primary">
          {profile.tagline}
          <span className="cursor-blink h-4 translate-y-[2px]" />
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="rounded-full bg-text-primary px-5 py-2.5 font-mono text-[13px] text-bg transition-opacity hover:opacity-85"
          >
            view work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border-strong px-5 py-2.5 font-mono text-[13px] text-text-primary transition-colors hover:border-accent hover:text-accent"
          >
            get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
