import { profile } from "@/data/portfolio";
import SectionLabel from "./SectionLabel";
import CopyEmail from "./CopyEmail";

export default function Contact() {
  return (
    <section id="contact" className="px-6 sm:px-8 py-28 sm:py-32">
      <div className="mx-auto w-full max-w-3xl">
        <SectionLabel command="mail --compose" title="Get in touch" />

        <p
          data-reveal
          className="max-w-xl text-[15px] sm:text-base leading-relaxed text-text-secondary"
        >
          I am looking for a research internship, and I am happy to talk about
          agent systems, evaluation, or anything on this page. Email is the
          fastest way to reach me. I read every one.
        </p>

        <div data-reveal style={{ "--d": "80ms" } as React.CSSProperties}>
          <CopyEmail email={profile.email} />
        </div>

        <div
          data-reveal
          style={{ "--d": "160ms" } as React.CSSProperties}
          className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[13px] text-text-secondary"
        >
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw hover:text-accent"
            >
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
