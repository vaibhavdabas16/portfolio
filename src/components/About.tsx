import { profile } from "@/data/portfolio";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" index="01" label="About">
      <div className="max-w-2xl space-y-6">
        {profile.about.map((para, i) => (
          <p
            key={i}
            data-reveal
            style={{ "--d": `${i * 60}ms` } as React.CSSProperties}
            className={`leading-relaxed ${
              i === 0
                ? "text-lg text-text-primary md:text-xl"
                : "text-base text-text-secondary"
            }`}
          >
            {para}
          </p>
        ))}
      </div>

      <div
        data-reveal
        style={{ "--d": "180ms" } as React.CSSProperties}
        className="mt-12"
      >
        <p className="eyebrow mb-4">Areas</p>
        <ul className="flex flex-wrap gap-2">
          {profile.focus.map((item) => (
            <li key={item} className="tag">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
