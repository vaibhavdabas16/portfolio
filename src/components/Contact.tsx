import { profile } from "@/data/portfolio";
import CopyEmail from "./CopyEmail";
import Arrow from "./Arrow";

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-band border-t border-border py-28 md:py-40"
    >
      <div className="container-x">
        <p data-reveal className="eyebrow">
          06 · Contact
        </p>

        <h2
          data-reveal
          style={{ "--d": "60ms" } as React.CSSProperties}
          className="mt-6 max-w-3xl text-4xl font-medium leading-[1.08] tracking-[-0.03em] text-text-primary sm:text-5xl md:text-6xl"
        >
          Let&rsquo;s build something that survives contact with reality.
        </h2>

        <p
          data-reveal
          style={{ "--d": "120ms" } as React.CSSProperties}
          className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg"
        >
          Open to early-stage startups, research collaborations, and open
          source. If you&rsquo;re building something real and need someone who
          ships, I&rsquo;d like to hear about it.
        </p>

        <div
          data-reveal
          style={{ "--d": "180ms" } as React.CSSProperties}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a href={`mailto:${profile.email}`} className="btn btn-primary arrow-link">
            Email me
            <Arrow dir="r" />
          </a>
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary arrow-link"
            >
              {s.label}
              <Arrow dir="ne" />
            </a>
          ))}
        </div>

        <div
          data-reveal
          style={{ "--d": "240ms" } as React.CSSProperties}
          className="mt-6"
        >
          <CopyEmail email={profile.email} />
        </div>
      </div>
    </section>
  );
}
