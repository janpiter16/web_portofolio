interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl md:mb-12">
      {eyebrow && (
        <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-navy sm:text-[36px]">
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
