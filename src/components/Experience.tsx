import { experience } from "@/data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Experience() {
  return (
    <section id="experience" className="px-6 sm:px-8 py-28 sm:py-32">
      <div className="mx-auto w-full max-w-3xl">
        <SectionLabel command="git log --oneline" title="Experience" />

        <ol className="relative border-l border-border pl-6 sm:pl-8">
          {experience.map((item, i) => (
            <li key={i} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[29px] sm:-left-[37px] top-1 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg" />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-text-primary">
                  {item.role}
                  <span className="text-text-tertiary font-normal"> — {item.org}</span>
                </h3>
                <span className="font-mono text-xs text-text-tertiary whitespace-nowrap">
                  {item.period}
                </span>
              </div>

              <p className="mt-2 max-w-xl text-sm leading-relaxed text-text-secondary">
                {item.description}
              </p>

              {item.tags && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
