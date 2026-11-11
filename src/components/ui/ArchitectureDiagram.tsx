"use client";

import { useState } from "react";
import { ArrowRight, Cpu, Layers } from "lucide-react";
import { Locale, t } from "@/lib/i18n";
import { ArchitectureNode } from "@/content/projects";
import { TechIcon } from "@/components/ui/TechIcon";

interface ArchitectureDiagramProps {
  nodes: ArchitectureNode[];
  locale: Locale;
}

export function ArchitectureDiagram({ nodes = [], locale }: ArchitectureDiagramProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  if (!nodes || nodes.length === 0) return null;
  const activeNode = nodes[selectedIndex] ?? nodes[0];

  if (!activeNode) return null;

  return (
    <section className="glass-card mt-12 rounded-2xl p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-token pb-5">
        <div>
          <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-sky">
            <Layers className="h-3.5 w-3.5" aria-hidden="true" />
            <span>
              {locale === "id"
                ? "Alur Arsitektur Sistem Interaktif"
                : "Interactive System Architecture Flow"}
            </span>
          </span>
          <h2 className="mt-1 text-xl font-bold text-foreground sm:text-2xl">
            {locale === "id"
              ? "Klik setiap komponen untuk melihat peran teknis & aliran data"
              : "Click each layer to inspect its technical role & data flow"}
          </h2>
        </div>

        <span className="rounded-full border border-primary/40 bg-primary/15 px-3 py-1 font-mono text-xs font-bold text-sky">
          {nodes.length} {locale === "id" ? "Tahap Alur" : "Pipeline Stages"}
        </span>
      </div>

      {/* Interactive Flow Nodes */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-4">
        {nodes.map((node, idx) => {
          const isSelected = idx === selectedIndex;
          return (
            <div key={node.step} className="relative flex items-stretch">
              <button
                type="button"
                onClick={() => setSelectedIndex(idx)}
                aria-pressed={isSelected}
                className={`flex w-full flex-col justify-between rounded-2xl border p-4 text-left transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky ${
                  isSelected
                    ? "border-sky bg-primary/20 shadow-lg"
                    : "border-border-token bg-white/5 hover:border-sky/60 hover:bg-white/10"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-flex h-7 w-7 items-center justify-center rounded-lg font-mono text-xs font-extrabold ${
                        isSelected
                          ? "glow-btn-primary"
                          : "border border-border-token bg-surface text-sky"
                      }`}
                    >
                      {node.step}
                    </span>
                    {idx < nodes.length - 1 && (
                      <ArrowRight
                        className="hidden h-4 w-4 text-sky lg:block"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <h3 className="mt-3 text-sm font-bold text-foreground">
                    {t(node.layer, locale)}
                  </h3>
                </div>

                <p className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-sky">
                  <TechIcon name={node.tech} className="h-3.5 w-3.5" />
                  <span>{node.tech}</span>
                </p>
              </button>
            </div>
          );
        })}
      </div>

      {/* Selected Layer Detail Panel */}
      <div className="mt-6 rounded-2xl border border-primary/40 bg-surface/85 p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-primary/50 bg-primary/20 text-sky">
              <Cpu className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <p className="font-mono text-xs font-bold uppercase text-sky">
                STAGE {activeNode.step} • {activeNode.tech}
              </p>
              <h4 className="text-base font-bold text-foreground">
                {t(activeNode.layer, locale)}
              </h4>
            </div>
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          {t(activeNode.detail, locale)}
        </p>
      </div>
    </section>
  );
}
