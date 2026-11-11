"use client";

import { ArrowUp } from "lucide-react";

export function BackToTopButton({ label }: { label: string }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="inline-flex items-center gap-1.5 rounded-full border border-border-token bg-white/5 px-4 py-2 font-mono text-xs font-semibold text-muted hover:-translate-y-0.5 hover:border-sky hover:bg-primary/20 hover:text-foreground transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
      aria-label={label}
    >
      <span>{label}</span>
      <ArrowUp className="h-3.5 w-3.5 text-sky" aria-hidden="true" />
    </button>
  );
}
