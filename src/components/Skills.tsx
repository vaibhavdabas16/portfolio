import { skills } from "@/data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Skills() {
  return (
    <section id="skills" className="px-6 sm:px-8 py-28 sm:py-32">
      <div className="mx-auto w-full max-w-3xl">
        <SectionLabel command="cat skills.json" title="Skills" />

        <dl className="space-y-8">
          {skills.map((group) => (
            <div
              key={group.label}
              className="grid gap-3 sm:grid-cols-[150px_1fr] sm:gap-6"
            >
              <dt className="font-mono text-[13px] text-text-tertiary sm:pt-1.5">
                {group.label}
              </dt>
              <dd className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-bg-elevated px-3 py-1.5 text-[13px] text-text-secondary"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
