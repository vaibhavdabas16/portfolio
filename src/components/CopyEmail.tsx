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
      // Clipboard blocked: the mailto link next to this still works.
    }
  };

  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      <a
        href={`mailto:${email}`}
        className="inline-flex items-center gap-2 rounded-full bg-text-primary px-5 py-2.5 font-mono text-[13px] text-bg transition-transform hover:-translate-y-0.5 hover:opacity-90"
      >
        {email}
      </a>
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2.5 font-mono text-[13px] text-text-primary transition-colors hover:border-accent hover:text-accent"
        aria-live="polite"
      >
        <span
          className={`inline-block h-1.5 w-1.5 rounded-full transition-colors ${
            copied ? "bg-green-400" : "bg-text-tertiary"
          }`}
          aria-hidden
        />
        {copied ? "copied" : "copy"}
      </button>
    </div>
  );
}
