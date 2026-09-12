import { highlights } from "@/data/portfolio";
import Section from "./Section";
import Counter from "./Counter";

export default function Highlights() {
  return (
    <Section id="highlights" index="05" label="Proof of work">
      <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item, i) => (
          <li
            key={item.label}
            data-reveal
            style={{ "--d": `${(i % 3) * 60}ms` } as React.CSSProperties}
            className="border-t border-border pt-6"
          >
            <Counter
              value={item.value}
              className="stat-value block text-5xl font-medium leading-none text-text-primary md:text-6xl"
            />
            <p className="mt-4 text-[15px] font-medium text-text-primary">
              {item.label}
            </p>
            <p className="mt-1.5 text-[13px] leading-relaxed text-text-secondary">
              {item.note}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
