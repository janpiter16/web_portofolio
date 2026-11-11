"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Restarts the entrance animation of a section (used when a navbar menu is clicked).
export function replaySection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove("is-visible");
  void el.offsetWidth; // force reflow so the keyframe animation restarts
  el.classList.add("section-reveal", "is-visible");
}

export function SectionReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]")
    );
    if (sections.length === 0) return;

    sections.forEach((el) => el.classList.add("section-reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
