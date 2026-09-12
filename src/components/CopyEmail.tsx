"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard blocked: the mailto button next to this still works.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="inline-flex items-center gap-2 font-mono text-[12px] text-text-tertiary transition-colors hover:text-text-primary"
    >
      <span
        aria-hidden
        className={`inline-block h-1.5 w-1.5 rounded-full transition-colors ${
          copied ? "bg-success" : "bg-text-tertiary"
        }`}
      />
      {copied ? "Copied!" : `Copy ${email}`}
    </button>
  );
}
