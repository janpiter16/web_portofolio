import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border-token bg-surface-alt px-2.5 py-1 font-mono text-xs font-medium text-navy",
        className
      )}
    >
      {children}
    </span>
  );
}
