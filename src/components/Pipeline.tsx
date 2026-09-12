"use client";

import { useEffect, useState } from "react";

type Props = {
  steps: string[];
  /** Vertical stacks nodes top to bottom (hero). Horizontal runs left to right and wraps. */
  direction?: "vertical" | "horizontal" | "responsive";
  /** Run a pulse down the pipeline every few seconds, not just on hover. */
  periodic?: boolean;
  /** Smaller nodes and shorter connectors, for inside project rows. */
  compact?: boolean;
  className?: string;
  label?: string;
};

/**
 * A minimal system diagram: mono labels joined by 1px connectors.
 * A single pulse steps through the nodes on hover (and periodically
 * when asked). Static under prefers-reduced-motion.
 */
export default function Pipeline({
  steps,
  direction = "horizontal",
  periodic = false,
  compact = false,
  className = "",
  label,
}: Props) {
  const [active, setActive] = useState(-1);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!periodic && !hover) return;

    let i = -1;
    let timer = 0;
    const stepMs = 260;
    const restMs = periodic ? 4200 : 900;

    const tick = () => {
      i += 1;
      if (i < steps.length) {
        setActive(i);
        timer = window.setTimeout(tick, stepMs);
      } else {
        setActive(-1);
        i = -1;
        timer = window.setTimeout(tick, restMs);
      }
    };
    timer = window.setTimeout(tick, hover ? 0 : 900);
    return () => {
      window.clearTimeout(timer);
      setActive(-1);
    };
  }, [periodic, hover, steps.length]);

  // "responsive" runs horizontally and switches to vertical from lg up.
  const wrap = {
    vertical: "flex flex-col items-start",
    horizontal: "flex flex-wrap items-center gap-y-3",
    responsive: "flex flex-wrap items-center gap-y-3 lg:flex-col lg:items-start",
  }[direction];
  const item = {
    vertical: "flex flex-col items-start",
    horizontal: "flex items-center",
    responsive: "flex items-center lg:flex-col lg:items-start",
  }[direction];
  const line = {
    vertical: "ml-4 h-6 w-px",
    horizontal: compact ? "mx-1.5 h-px w-4 sm:w-5" : "mx-2 h-px w-6 sm:w-8",
    responsive: "mx-2 h-px w-6 sm:w-8 lg:mx-0 lg:ml-4 lg:h-6 lg:w-px",
  }[direction];

  return (
    <div
      role="img"
      aria-label={`${label ? label + ": " : ""}${steps.join(" to ")}`}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      className={`${wrap} ${compact ? "pipe-compact gap-y-2" : ""} ${className}`}
    >
      {steps.map((step, i) => {
        const nodeActive = i === active;
        const lineActive = i < active;
        return (
          <div key={step} className={item}>
            <span className={`pipe-node ${nodeActive ? "is-active" : ""}`}>
              {step}
            </span>
            {i < steps.length - 1 && (
              <span
                aria-hidden
                className={`pipe-line ${lineActive ? "is-active" : ""} ${line}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
