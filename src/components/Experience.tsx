import { experience, experienceKinds } from "@/data/portfolio";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" index="03" label="Experience">
      <div className="space-y-16">
        {experienceKinds.map((group) => {
          const items = experience.filter((e) => e.kind === group.kind);
          if (items.length === 0) return null;
          const isWork = group.kind === "work";

          return (
            <div key={group.kind}>
              <p data-reveal className="eyebrow mb-6">
                {group.label}
              </p>

              <ol className="relative ml-1.5 border-l border-border">
                {items.map((item, i) => (
                  <li
                    key={item.role + item.org}
                    data-reveal
                    style={{ "--d": `${i * 60}ms` } as React.CSSProperties}
                    className={`relative pl-8 md:pl-10 ${
                      isWork ? "pb-4" : "pb-10 last:pb-0"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full border ${
                        isWork
                          ? "border-accent bg-accent"
                          : "border-border-strong bg-bg"
                      }`}
                    />

                    <div className="grid gap-4 lg:grid-cols-[120px_1fr] lg:gap-8">
                      <span className="font-mono text-[12px] text-text-tertiary lg:pt-1">
                        {item.period}
                      </span>

                      <div className="min-w-0">
                        <h3
                          className={`font-medium tracking-[-0.02em] text-text-primary ${
                            isWork ? "text-2xl md:text-3xl" : "text-lg"
                          }`}
                        >
                          {item.role}
                        </h3>
                        <p className="mt-1.5 text-[15px] text-text-secondary">
                          {item.org}
                        </p>

                        <p
                          className={`mt-4 leading-relaxed text-text-secondary ${
                            isWork ? "max-w-2xl text-base" : "max-w-xl text-[15px]"
                          }`}
                        >
                          {item.description}
                        </p>

                        {item.metrics && isWork && (
                          <ul className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
                            {item.metrics.map((m) => (
                              <li
                                key={m}
                                className="bg-bg-elevated px-4 py-4 text-[13px] leading-snug text-text-primary"
                              >
                                {m}
                              </li>
                            ))}
                          </ul>
                        )}

                        {item.tags && (
                          <p className="mt-6 font-mono text-[12px] text-text-tertiary">
                            {item.tags.join(" · ")}
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
