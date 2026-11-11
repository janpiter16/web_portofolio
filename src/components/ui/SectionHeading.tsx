interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 md:mb-12 ${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {eyebrow && (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-3.5 py-1">
          <span className="cyan-dot h-1.5 w-1.5 rounded-full" aria-hidden="true" />
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-sky">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-gradient-silver text-[32px] font-extrabold leading-[1.1] tracking-tight sm:text-[44px]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
