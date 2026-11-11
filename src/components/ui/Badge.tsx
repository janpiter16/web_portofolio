import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { TechIcon } from "@/components/ui/TechIcon";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  const techName = typeof children === "string" ? children : null;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg border border-border-token bg-white/5 px-2.5 py-1 font-mono text-xs font-medium text-sky",
        className
      )}
    >
      {techName && <TechIcon name={techName} className="h-3.5 w-3.5" />}
      <span>{children}</span>
    </span>
  );
}
