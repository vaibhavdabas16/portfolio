import { profile } from "@/data/portfolio";
import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center px-6 sm:px-8 pt-24"
    >
      <div className="mx-auto w-full max-w-3xl">
        <a
          href="#contact"
          data-reveal
          className="inline-flex items-center gap-2.5 rounded-full border border-border bg-bg-elevated/60 px-3.5 py-1.5 font-mono text-[12px] text-text-secondary backdrop-blur transition-colors hover:border-accent-dim hover:text-text-primary"
        >
          <span className="live-dot" aria-hidden />
          {profile.availability}
        </a>

        <p
          data-reveal
          style={{ "--d": "80ms" } as React.CSSProperties}
          className="mt-8 font-mono text-[13px] text-text-secondary"
        >
          <span className="text-accent">$</span> whoami
        </p>

        <h1
          data-reveal
          style={{ "--d": "140ms" } as React.CSSProperties}
          className="sheen mt-4 font-[family-name:var(--font-display)] text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl font-semibold tracking-tight"
        >
          {profile.name}
        </h1>

        <p
          data-reveal
          style={{ "--d": "220ms" } as React.CSSProperties}
          className="mt-5 max-w-xl text-lg sm:text-xl text-text-secondary"
        >
          {profile.role}
        </p>

        <p
          data-reveal
          style={{ "--d": "300ms" } as React.CSSProperties}
          className="mt-8 min-h-[1.75em] font-mono text-sm sm:text-base text-text-primary"
        >
          <Typewriter phrases={profile.taglines} />
        </p>

        <div
          data-reveal
          style={{ "--d": "380ms" } as React.CSSProperties}
          className="mt-12 flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
            className="rounded-full bg-text-primary px-5 py-2.5 font-mono text-[13px] text-bg transition-transform hover:-translate-y-0.5 hover:opacity-90"
          >
            view work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border-strong px-5 py-2.5 font-mono text-[13px] text-text-primary transition-colors hover:border-accent hover:text-accent"
          >
            get in touch
          </a>
          <div className="ml-1 flex items-center gap-4 font-mono text-[13px]">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw text-text-secondary hover:text-text-primary"
              >
                {s.label.toLowerCase()}
              </a>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="scroll-hint absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[11px] text-text-tertiary"
      >
        ↓
      </a>
    </section>
  );
}
