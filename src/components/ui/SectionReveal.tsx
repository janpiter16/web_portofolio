"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Restarts the entrance animation of a section (used when a navbar menu is clicked).
export function replaySection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove("section-reveal-anim");
  void el.offsetWidth; // force reflow so keyframe animation restarts
  el.classList.add("section-reveal-anim");
}

export function SectionReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-reveal-anim");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -5% 0px" }
    );

    const sections = document.querySelectorAll<HTMLElement>("main section[id]");
    sections.forEach((el) => {
      // If section is already visible in viewport, animate immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("section-reveal-anim");
      } else {
        io.observe(el);
      }
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
