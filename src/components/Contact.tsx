import { profile } from "@/data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <section id="contact" className="px-6 sm:px-8 py-28 sm:py-32">
      <div className="mx-auto w-full max-w-3xl">
        <SectionLabel command="mail --compose" title="Get in touch" />

        <p className="max-w-lg text-[15px] sm:text-base leading-relaxed text-text-secondary">
          I&apos;m open to internships, collaborations, and interesting
          problems. The fastest way to reach me is email — I read everything.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-text-primary px-5 py-2.5 font-mono text-[13px] text-bg transition-opacity hover:opacity-85"
        >
          {profile.email}
        </a>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[13px] text-text-secondary">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
