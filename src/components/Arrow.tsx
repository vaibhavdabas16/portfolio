/**
 * Inline arrow icon. "r" points right (internal / mailto links),
 * "ne" points up-right (external links). SVG rather than the ↗ glyph,
 * which some platforms render as an emoji. Animates via .arrow-link.
 */
export default function Arrow({
  dir = "r",
  className = "",
}: {
  dir?: "r" | "ne";
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`arrow ${dir === "r" ? "arrow-r" : "arrow-ne"} shrink-0 ${className}`}
    >
      {dir === "r" ? (
        <>
          <path d="M3 8h10" />
          <path d="M9 4l4 4-4 4" />
        </>
      ) : (
        <>
          <path d="M5 11l6-6" />
          <path d="M6 5h5v5" />
        </>
      )}
    </svg>
  );
}
