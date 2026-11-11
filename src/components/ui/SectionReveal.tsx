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
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    // Sections stream in after hydration, so scan again whenever the DOM changes.
    const scan = () => {
      document
        .querySelectorAll<HTMLElement>("main section[id]:not([data-reveal])")
        .forEach((el) => {
          el.dataset.reveal = "1";
          // Sections already on screen are covered by the page entrance animation.
          if (el.getBoundingClientRect().top > window.innerHeight * 0.85) {
            el.classList.add("section-reveal");
            io.observe(el);
          }
        });
    };

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
