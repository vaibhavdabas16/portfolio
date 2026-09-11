"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animates the first number inside a string like "$15,000", "#14 / 143+"
 * or "~5M" from 0 up to its value. Anything around the number is left
 * untouched. Starts when the nearest [data-reveal] ancestor is revealed
 * by Effects, or immediately if there is no such ancestor.
 */
export default function Counter({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const match = value.match(/(\d[\d,]*)/);
    const el = ref.current;
    if (!match || !el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const raw = match[1];
    const target = parseInt(raw.replace(/,/g, ""), 10);
    const useCommas = raw.includes(",");
    const before = value.slice(0, match.index);
    const after = value.slice((match.index ?? 0) + raw.length);
    const fmt = (n: number) =>
      before + (useCommas ? n.toLocaleString("en-US") : String(n)) + after;

    let frame = 0;
    const run = () => {
      const duration = 1100;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(fmt(Math.round(target * eased)));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const host = el.closest<HTMLElement>("[data-reveal]");
    if (!host || host.classList.contains("is-visible")) {
      run();
      return () => cancelAnimationFrame(frame);
    }

    setDisplay(fmt(0));
    host.addEventListener("reveal", run, { once: true });
    return () => {
      host.removeEventListener("reveal", run);
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
