"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { profileData } from "@/content/profile";
import { TechIcon } from "@/components/ui/TechIcon";

const lanyardTechs = [
  "Laravel",
  "Python",
  "Flask",
  "React",
  "MySQL",
  "PostgreSQL",
];

export function BouncingLanyardCard() {
  const [bouncing, setBouncing] = useState(false);

  const triggerBounce = () => {
    setBouncing(false);
    requestAnimationFrame(() => {
      setBouncing(true);
    });
  };

  return (
    <div className="lanyard-pendulum relative mx-auto max-w-sm select-none">
      {/* Lanyard Strap & Metal Clip */}
      <div className="mx-auto flex flex-col items-center" aria-hidden="true">
        <div
          className={`w-7 rounded-t-sm border-x border-border-token bg-surface-alt transition-all duration-300 ${
            bouncing ? "h-16" : "h-12"
          }`}
        />
        <div className="h-3.5 w-12 rounded-md border border-border-token bg-slate-800 shadow-sm" />
      </div>

      {/* Glossy Bouncing Lanyard ID Card */}
      <motion.div
        role="button"
        tabIndex={0}
        aria-label="Interactive Developer ID Card — click to bounce"
        onClick={triggerBounce}
        whileHover={{ y: 8, rotate: 1.2, transition: { duration: 0.25 } }}
        whileTap={{ scale: 0.98 }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            triggerBounce();
          }
        }}
        onAnimationEnd={() => setBouncing(false)}
        className={`glass-card group relative -mt-1 rounded-3xl p-5 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky ${
          bouncing ? "lanyard-spring-active" : ""
        }`}
      >
        <div
          className="mx-auto mb-4 h-2.5 w-16 rounded-full border border-border-token bg-surface"
          aria-hidden="true"
        />

        {/* Portrait Photo Window inside ID Badge */}
        <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-border-token bg-surface-alt">
          <Image
            src={profileData.avatar}
            alt={profileData.name}
            fill
            priority
            sizes="100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className="portrait-fade absolute inset-0" aria-hidden="true" />

          <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-primary/50 bg-surface/80 px-2.5 py-1 font-mono text-[10px] font-bold text-sky backdrop-blur-md">
            <span className="cyan-dot h-1.5 w-1.5 rounded-full" aria-hidden="true" />
            <span>ID VERIFIED</span>
          </div>

          <div className="absolute right-4 bottom-3 left-4 flex items-end justify-between">
            <div>
              <p className="text-lg font-extrabold tracking-tight text-foreground">
                Janpiter P. Purba
              </p>
              <p className="font-mono text-xs font-semibold text-sky">
                Backend & Fullstack Developer
              </p>
            </div>
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/50 bg-primary/25 text-sky backdrop-blur-md">
              <Terminal className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
        </div>

        <dl className="mt-4 space-y-2.5 font-mono text-xs">
          <div className="rounded-xl border border-border-token bg-surface/75 p-3">
            <dt className="text-[10px] text-muted">CORE STACK</dt>
            <dd className="mt-2 flex flex-wrap gap-1.5">
              {lanyardTechs.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border-token bg-white/5 px-2 py-1 text-[11px] font-semibold text-foreground"
                >
                  <TechIcon name={tech} className="h-3.5 w-3.5" />
                  <span>{tech}</span>
                </span>
              ))}
            </dd>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="rounded-xl border border-border-token bg-surface/75 p-3">
              <dt className="text-[10px] text-muted">DEGREE</dt>
              <dd className="mt-0.5 font-semibold text-foreground">D4 RPL</dd>
            </div>
            <div className="rounded-xl border border-border-token bg-surface/75 p-3">
              <dt className="text-[10px] text-muted">GPA / IPK</dt>
              <dd className="mt-0.5 font-semibold text-sky">3.90 / 4.00</dd>
            </div>
          </div>
        </dl>

        <div className="mt-4 flex items-center justify-between border-t border-border-token pt-3.5 font-mono text-[11px] text-muted">
          <span>Politeknik Negeri Indramayu</span>
          <span className="inline-flex items-center gap-1.5 text-sky">
            <span className="cyan-dot h-1.5 w-1.5 rounded-full" aria-hidden="true" />
            AVAILABLE
          </span>
        </div>
      </motion.div>
    </div>
  );
}
