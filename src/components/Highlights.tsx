import { highlights } from "@/data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Highlights() {
  return (
    <section id="highlights" className="px-6 sm:px-8 py-28 sm:py-32">
      <div className="mx-auto w-full max-w-3xl">
        <SectionLabel command="cat highlights.md" title="Highlights" />

        <ul className="grid gap-4 sm:grid-cols-2">
          {highlights.map((item) => (
            <li
              key={item.label}
              className="rounded-2xl border border-border bg-bg-elevated p-6"
            >
              <p className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-accent">
                {item.value}
              </p>
              <p className="mt-2 text-[15px] font-medium text-text-primary">
                {item.label}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                {item.note}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
