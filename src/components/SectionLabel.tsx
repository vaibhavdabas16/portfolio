export default function SectionLabel({
  command,
  title,
}: {
  command: string;
  title: string;
}) {
  return (
    <div className="mb-10 flex flex-col gap-2">
      <span className="font-mono text-[13px] text-accent">
        <span className="text-text-tertiary">$</span> {command}
      </span>
      <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary">
        {title}
      </h2>
    </div>
  );
}
