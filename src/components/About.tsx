import { profile } from "@/data/portfolio";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="px-6 sm:px-8 py-28 sm:py-32">
      <div className="mx-auto w-full max-w-3xl">
        <SectionLabel command="cat about.md" title="About" />

        <div className="grid gap-10 sm:grid-cols-[1fr_auto] sm:gap-16">
          <div className="space-y-5">
            {profile.about.map((para, i) => (
              <p
                key={i}
                className="text-[15px] sm:text-base leading-relaxed text-text-secondary"
              >
                {para}
              </p>
            ))}
          </div>

          <div className="flex sm:flex-col flex-wrap gap-2 sm:min-w-[160px]">
            {profile.focus.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border px-3 py-1.5 font-mono text-xs text-text-secondary whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
