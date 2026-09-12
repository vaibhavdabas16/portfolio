/**
 * Editorial section frame: a small uppercase label (and optional
 * index) in the left column, content in the right. Collapses to a
 * single column below md.
 */
export default function Section({
  id,
  label,
  index,
  title,
  children,
  className = "",
}: {
  id: string;
  label: string;
  index?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`container-x border-t border-border py-24 md:py-32 ${className}`}
    >
      <div className="grid gap-10 md:grid-cols-[160px_1fr] md:gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
        <div data-reveal className="md:sticky md:top-24 md:self-start">
          <h2>
            {index && (
              <span aria-hidden className="eyebrow block">
                {index}
              </span>
            )}
            <span className="mt-3 block text-2xl font-medium leading-tight tracking-[-0.02em] text-text-primary md:text-[28px] lg:text-3xl">
              {label}
            </span>
          </h2>
          {title && (
            <p className="mt-4 max-w-[220px] text-[15px] leading-relaxed text-text-secondary">
              {title}
            </p>
          )}
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
