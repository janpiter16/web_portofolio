import { ReactNode } from "react";

interface TechVisual {
  colorClass: string;
  bgClass: string;
  icon: ReactNode;
}

export function getTechVisual(rawName: string): TechVisual | null {
  const key = rawName.toLowerCase();

  if (key.includes("laravel")) {
    return {
      colorClass: "text-red-400",
      bgClass: "border-red-500/30 bg-red-500/10",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-full w-full" aria-hidden="true">
          <path d="M4 6.5 9 4l5 2.5v5L9 14l-5-2.5v-5Z" />
          <path d="m14 9 6-3v5.5L14 15" />
          <path d="M9 14v6l5 2.5 6-3v-5" />
        </svg>
      ),
    };
  }

  if (key.includes("python")) {
    return {
      colorClass: "text-amber-400",
      bgClass: "border-amber-500/30 bg-amber-500/10",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-full w-full" aria-hidden="true">
          <path d="M12 3c-3.5 0-4 1.5-4 3.5V9h4v1H6.5C4.5 10 3 11.5 3 14.5S4.5 19 6.5 19H8v-2.5c0-2 1.5-3.5 3.5-3.5h4c1.5 0 2.5-1 2.5-2.5v-4C18 4.5 15.5 3 12 3Z" />
          <path d="M12 21c3.5 0 4-1.5 4-3.5V15h-4v-1h5.5c2 0 3.5-1.5 3.5-4.5S19.5 5 17.5 5H16v2.5c0 2-1.5 3.5-3.5 3.5h-4C7 11 6 12 6 13.5v4C6 19.5 8.5 21 12 21Z" />
        </svg>
      ),
    };
  }

  if (key.includes("flask")) {
    return {
      colorClass: "text-sky-400",
      bgClass: "border-sky-500/30 bg-sky-500/10",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-full w-full" aria-hidden="true">
          <path d="M9 3h6" />
          <path d="M10 3v5.5L5.2 17a2.5 2.5 0 0 0 2.2 3.7h9.2a2.5 2.5 0 0 0 2.2-3.7L14 8.5V3" />
          <path d="M7.5 14h9" />
        </svg>
      ),
    };
  }

  if (key.includes("php")) {
    return {
      colorClass: "text-indigo-400",
      bgClass: "border-indigo-500/30 bg-indigo-500/10",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-full w-full" aria-hidden="true">
          <ellipse cx="12" cy="12" rx="10" ry="6" />
          <path d="M7 14.5 8 9.5h2a1.5 1.5 0 0 1 0 3H7.5" />
          <path d="M12 14.5 13 9.5M15.5 9.5l-1 5M12.5 12h2.5" />
        </svg>
      ),
    };
  }

  if (key.includes("react")) {
    return {
      colorClass: "text-cyan-400",
      bgClass: "border-cyan-500/30 bg-cyan-500/10",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-full w-full" aria-hidden="true">
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="9.5" ry="4" />
          <ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(120 12 12)" />
        </svg>
      ),
    };
  }

  if (key.includes("javascript") || key === "js") {
    return {
      colorClass: "text-yellow-400",
      bgClass: "border-yellow-500/30 bg-yellow-500/10",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-full w-full" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M10.5 10.5v5a1.8 1.8 0 0 1-3.2.5" />
          <path d="M17 11a1.6 1.4 0 0 0-2.8 0c0 1.8 2.8 1.4 2.8 3.2a1.6 1.4 0 0 1-3 .4" />
        </svg>
      ),
    };
  }

  if (key.includes("mysql") || key.includes("postgresql") || key.includes("sql")) {
    return {
      colorClass: "text-blue-400",
      bgClass: "border-blue-500/30 bg-blue-500/10",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-full w-full" aria-hidden="true">
          <ellipse cx="12" cy="6" rx="7.5" ry="3" />
          <path d="M4.5 6v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V6" />
          <path d="M4.5 12v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-6" />
        </svg>
      ),
    };
  }

  if (key.includes("flutter")) {
    return {
      colorClass: "text-cyan-300",
      bgClass: "border-cyan-400/30 bg-cyan-400/10",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-full w-full" aria-hidden="true">
          <path d="M14 3 5 12l3 3 12-12h-6Z" />
          <path d="m14 12-5 5 5 4h6l-5-4 5-5h-6Z" />
        </svg>
      ),
    };
  }

  if (key.includes("html") || key.includes("css") || key.includes("bootstrap")) {
    return {
      colorClass: "text-purple-400",
      bgClass: "border-purple-500/30 bg-purple-500/10",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-full w-full" aria-hidden="true">
          <path d="M4 3h16l-1.5 15L12 21l-6.5-3L4 3Z" />
          <path d="M9.5 8h4.5a1.8 1.8 0 0 1 0 3.6H9.5V8Z" />
          <path d="M9.5 11.6h5a1.9 1.9 0 0 1 0 3.8h-5v-3.8Z" />
        </svg>
      ),
    };
  }

  if (key.includes("git") || key.includes("docker")) {
    return {
      colorClass: "text-orange-400",
      bgClass: "border-orange-500/30 bg-orange-500/10",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-full w-full" aria-hidden="true">
          <circle cx="7" cy="7" r="2.2" />
          <circle cx="17" cy="7" r="2.2" />
          <circle cx="12" cy="17" r="2.2" />
          <path d="M9.2 7h5.6M8.2 9l2.8 6M15.8 9l-2.8 6" />
        </svg>
      ),
    };
  }

  if (key.includes("uml") || key.includes("draw.io") || key.includes("figma") || key.includes("canva")) {
    return {
      colorClass: "text-pink-400",
      bgClass: "border-pink-500/30 bg-pink-500/10",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-full w-full" aria-hidden="true">
          <rect x="3" y="4" width="7" height="6" rx="1.5" />
          <rect x="14" y="4" width="7" height="6" rx="1.5" />
          <rect x="8.5" y="14" width="7" height="6" rx="1.5" />
          <path d="M10 7h4M12 10v4" />
        </svg>
      ),
    };
  }

  if (key.includes("api")) {
    return {
      colorClass: "text-emerald-400",
      bgClass: "border-emerald-500/30 bg-emerald-500/10",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-full w-full" aria-hidden="true">
          <path d="M7 8l-4 4 4 4" />
          <path d="M17 8l4 4-4 4" />
          <path d="M14 4l-4 16" />
        </svg>
      ),
    };
  }

  if (key.includes("machine learning") || key.includes("regresi") || key.includes("problem solving")) {
    return {
      colorClass: "text-sky-400",
      bgClass: "border-sky-500/30 bg-sky-500/10",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-full w-full" aria-hidden="true">
          <path d="M4 19h16" />
          <path d="m5 15 4-4 4 2 6-7" />
          <circle cx="19" cy="6" r="2" fill="currentColor" />
        </svg>
      ),
    };
  }

  return null;
}

export function TechIcon({
  name,
  className = "h-3.5 w-3.5",
}: {
  name: string;
  className?: string;
}) {
  const visual = getTechVisual(name);
  if (!visual) return null;

  return (
    <span className={`inline-flex shrink-0 items-center justify-center ${visual.colorClass} ${className}`}>
      {visual.icon}
    </span>
  );
}
