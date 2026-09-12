import { profile } from "@/data/portfolio";
import Pipeline from "./Pipeline";
import Arrow from "./Arrow";

const d = (ms: number) => ({ "--d": `${ms}ms` } as React.CSSProperties);

export default function Hero() {
  return (
    <section
      id="top"
      className="container-x flex min-h-[100svh] flex-col justify-center pb-16 pt-28 md:pt-32"
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-24">
        <div className="max-w-2xl">
          <p data-reveal className="eyebrow">
            {profile.eyebrow}
          </p>

          <h1
            data-reveal
            style={d(60)}
            className="mt-6 text-[2.5rem] font-medium leading-[1.05] tracking-[-0.03em] text-text-primary sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            {profile.headline}
          </h1>

          <p
            data-reveal
            style={d(120)}
            className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg"
          >
            {profile.summary}
          </p>

          <p
            data-reveal
            style={d(180)}
            className="mt-8 inline-flex items-center gap-2.5 font-mono text-[12px] text-text-secondary"
          >
            <span className="live-dot" aria-hidden />
            {profile.availability}
          </p>

          <div
            data-reveal
            style={d(240)}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a href="#work" className="btn btn-primary arrow-link">
              View selected work
              <Arrow dir="r" />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in touch
            </a>
          </div>

          <div
            data-reveal
            style={d(300)}
            className="mt-8 flex items-center gap-6 font-mono text-[12px] text-text-tertiary"
          >
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw arrow-link hover:text-text-primary"
              >
                {s.label}
                <Arrow dir="ne" className="ml-1 inline align-[-2px]" />
              </a>
            ))}
          </div>
        </div>

        {/* Agent pipeline. Vertical beside the copy on desktop, a wrapped
            horizontal strip beneath it on smaller screens. */}
        <div data-reveal style={d(200)} className="lg:pr-4">
          <p className="eyebrow mb-5">Agent loop</p>
          <Pipeline
            steps={profile.pipeline}
            direction="responsive"
            periodic
            label="Agent loop"
          />
        </div>
      </div>
    </section>
  );
}
