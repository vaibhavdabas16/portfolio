import { skills } from "@/data/portfolio";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" index="04" label="Skills">
      <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => {
          // The first group is the core one: brighter, larger tags.
          const lead = i === 0;
          return (
            <div
              key={group.label}
              data-reveal
              style={{ "--d": `${i * 50}ms` } as React.CSSProperties}
              className="skill-cell bg-bg p-6 md:p-7"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="eyebrow text-text-secondary">{group.label}</h3>
                <span className="font-mono text-[11px] text-text-tertiary">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className={`tag ${lead ? "h-8 px-3 text-[13px] text-text-primary" : ""}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
