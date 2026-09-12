import { skills } from "@/data/portfolio";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" index="04" label="Skills">
      <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <div
            key={group.label}
            data-reveal
            style={{ "--d": `${(i % 3) * 60}ms` } as React.CSSProperties}
            className="border-t border-border pt-5"
          >
            <h3 className="eyebrow text-text-secondary">{group.label}</h3>
            <ul className="mt-5 space-y-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-[15px] text-text-primary/85 transition-colors hover:text-text-primary"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
