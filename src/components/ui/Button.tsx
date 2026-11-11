import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-hover shadow-sm",
  secondary:
    "bg-navy text-white hover:bg-navy/90 shadow-sm",
  outline:
    "border border-border-token bg-surface text-navy hover:bg-surface-alt",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  download?: boolean;
  className?: string;
  ariaLabel?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
  className,
  ariaLabel,
}: ButtonLinkProps) {
  const classes = cn(baseStyles, variantStyles[variant], className);

  if (external || download || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        download={download || undefined}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
