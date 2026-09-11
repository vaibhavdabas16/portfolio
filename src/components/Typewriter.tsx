"use client";

import { useEffect, useState } from "react";

type Props = {
  phrases: string[];
  typingMs?: number;
  deletingMs?: number;
  holdMs?: number;
  className?: string;
};

/** Types each phrase out, holds, deletes, and moves to the next one. */
export default function Typewriter({
  phrases,
  typingMs = 42,
  deletingMs = 22,
  holdMs = 1800,
  className,
}: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = phrases[index % phrases.length];

    // Honour reduced motion: show the first phrase, no animation.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(full);
      return;
    }

    let delay = deleting ? deletingMs : typingMs;
    if (!deleting && text === full) delay = holdMs;
    if (deleting && text === "") delay = 300;

    const t = setTimeout(() => {
      if (!deleting) {
        if (text === full) setDeleting(true);
        else setText(full.slice(0, text.length + 1));
      } else {
        if (text === "") {
          setDeleting(false);
          setIndex((i) => (i + 1) % phrases.length);
        } else setText(full.slice(0, text.length - 1));
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, index, phrases, typingMs, deletingMs, holdMs]);

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="cursor-blink h-4 translate-y-[2px]" aria-hidden />
    </span>
  );
}
