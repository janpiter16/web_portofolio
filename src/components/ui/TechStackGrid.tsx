import { Locale } from "@/lib/i18n";

interface TechBrandItem {
  name: string;
  role: { id: string; en: string };
  colorClass: string;
  badgeBgClass: string;
  svg: React.ReactNode;
}

const techBrands: TechBrandItem[] = [
  {
    name: "Laravel",
    role: { id: "Backend Web Framework", en: "Backend Web Framework" },
    colorClass: "text-red-400",
    badgeBgClass: "border-red-500/30 bg-red-500/10",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7" aria-hidden="true">
        <path d="M4 6.5 9 4l5 2.5v5L9 14l-5-2.5v-5Z" />
        <path d="m14 9 6-3v5.5L14 15" />
        <path d="M9 14v6l5 2.5 6-3v-5" />
        <path d="m4 11.5 5 2.5 5-2.5" />
      </svg>
    ),
  },
  {
    name: "Python",
    role: { id: "Machine Learning & Backend", en: "Machine Learning & Backend" },
    colorClass: "text-amber-400",
    badgeBgClass: "border-amber-500/30 bg-amber-500/10",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7" aria-hidden="true">
        <path d="M12 3c-3.5 0-4 1.5-4 3.5V9h4v1H6.5C4.5 10 3 11.5 3 14.5S4.5 19 6.5 19H8v-2.5c0-2 1.5-3.5 3.5-3.5h4c1.5 0 2.5-1 2.5-2.5v-4C18 4.5 15.5 3 12 3Z" />
        <path d="M12 21c3.5 0 4-1.5 4-3.5V15h-4v-1h5.5c2 0 3.5-1.5 3.5-4.5S19.5 5 17.5 5H16v2.5c0 2-1.5 3.5-3.5 3.5h-4C7 11 6 12 6 13.5v4C6 19.5 8.5 21 12 21Z" />
        <circle cx="10" cy="6" r="0.8" fill="currentColor" />
        <circle cx="14" cy="18" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Flask REST API",
    role: { id: "Microservice & Endpoint ML", en: "Microservice & ML Endpoint" },
    colorClass: "text-sky-400",
    badgeBgClass: "border-sky-500/30 bg-sky-500/10",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7" aria-hidden="true">
        <path d="M9 3h6" />
        <path d="M10 3v5.5L5.2 17a2.5 2.5 0 0 0 2.2 3.7h9.2a2.5 2.5 0 0 0 2.2-3.7L14 8.5V3" />
        <path d="M7.5 14h9" />
      </svg>
    ),
  },
  {
    name: "PHP",
    role: { id: "Pemrograman Server-Side", en: "Server-Side Programming" },
    colorClass: "text-indigo-400",
    badgeBgClass: "border-indigo-500/30 bg-indigo-500/10",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7" aria-hidden="true">
        <ellipse cx="12" cy="12" rx="10" ry="6" />
        <path d="M6.5 14.5 7.5 9.5h2a1.5 1.5 0 0 1 0 3H7.2" />
        <path d="M11.5 14.5 12.5 9.5M14.5 9.5l-1 5M12 12h2" />
        <path d="M16.2 14.5 17.2 9.5h1.6a1.5 1.5 0 0 1 0 3h-1.8" />
      </svg>
    ),
  },
  {
    name: "React",
    role: { id: "Frontend UI Interaktif", en: "Interactive Frontend UI" },
    colorClass: "text-cyan-400",
    badgeBgClass: "border-cyan-500/30 bg-cyan-500/10",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7" aria-hidden="true">
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="9.5" ry="4" />
        <ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    role: { id: "Logika Web & DOM", en: "Web Logic & Interactivity" },
    colorClass: "text-yellow-400",
    badgeBgClass: "border-yellow-500/30 bg-yellow-500/10",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M11 11v5a1.8 1.8 0 0 1-3.5.5" />
        <path d="M17.5 11.5a1.8 1.5 0 0 0-3 0c0 2 3 1.5 3 3.5a1.8 1.5 0 0 1-3.2.5" />
      </svg>
    ),
  },
  {
    name: "MySQL",
    role: { id: "Basis Data Relasional", en: "Relational SQL Database" },
    colorClass: "text-blue-400",
    badgeBgClass: "border-blue-500/30 bg-blue-500/10",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7" aria-hidden="true">
        <ellipse cx="12" cy="6" rx="7.5" ry="3" />
        <path d="M4.5 6v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V6" />
        <path d="M4.5 12v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-6" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    role: { id: "Manajemen Data SQL", en: "Advanced SQL Database" },
    colorClass: "text-sky-300",
    badgeBgClass: "border-sky-400/30 bg-sky-400/10",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7" aria-hidden="true">
        <path d="M12 3C7.5 3 4 5.2 4 8v8c0 2.8 3.5 5 8 5s8-2.2 8-5V8c0-2.8-3.5-5-8-5Z" />
        <path d="M4 12c0 2.8 3.5 5 8 5s8-2.2 8-5" />
        <path d="M8.5 8.5h7" />
      </svg>
    ),
  },
  {
    name: "Flutter",
    role: { id: "Aplikasi Mobile Lintas Platform", en: "Cross-Platform Mobile" },
    colorClass: "text-cyan-300",
    badgeBgClass: "border-cyan-400/30 bg-cyan-400/10",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7" aria-hidden="true">
        <path d="M14 3 5 12l3 3 12-12h-6Z" />
        <path d="m14 12-5 5 5 4h6l-5-4 5-5h-6Z" />
      </svg>
    ),
  },
  {
    name: "HTML5, CSS3 & Bootstrap",
    role: { id: "Layout & Desain Responsif", en: "Responsive Web Styling" },
    colorClass: "text-purple-400",
    badgeBgClass: "border-purple-500/30 bg-purple-500/10",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7" aria-hidden="true">
        <path d="M4 3h16l-1.5 15L12 21l-6.5-3L4 3Z" />
        <path d="M9.5 8h4.5a1.8 1.8 0 0 1 0 3.6H9.5V8Z" />
        <path d="M9.5 11.6h5a1.9 1.9 0 0 1 0 3.8h-5v-3.8Z" />
      </svg>
    ),
  },
  {
    name: "Git & Docker",
    role: { id: "Version Control & Container", en: "Version Control & Container" },
    colorClass: "text-orange-400",
    badgeBgClass: "border-orange-500/30 bg-orange-500/10",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7" aria-hidden="true">
        <circle cx="7" cy="7" r="2.2" />
        <circle cx="17" cy="7" r="2.2" />
        <circle cx="12" cy="17" r="2.2" />
        <path d="M9.2 7h5.6M8.2 9l2.8 6M15.8 9l-2.8 6" />
      </svg>
    ),
  },
  {
    name: "UML, Draw.io & Figma",
    role: { id: "Pemodelan Sistem & UI/UX", en: "System Modeling & UI/UX" },
    colorClass: "text-pink-400",
    badgeBgClass: "border-pink-500/30 bg-pink-500/10",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7" aria-hidden="true">
        <rect x="3" y="4" width="7" height="6" rx="1.5" />
        <rect x="14" y="4" width="7" height="6" rx="1.5" />
        <rect x="8.5" y="14" width="7" height="6" rx="1.5" />
        <path d="M10 7h4M12 10v4" />
      </svg>
    ),
  },
];

export function TechStackGrid({ locale }: { locale: Locale }) {
  return (
    <div className="mb-10 grid grid-cols-1 min-[420px]:grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
      {techBrands.map((item) => (
        <div
          key={item.name}
          className="glass-card group flex items-center gap-3 rounded-2xl p-3 sm:gap-3.5 sm:p-4 transition-all duration-200 hover:-translate-y-1 hover:border-sky"
        >
          <span
            className={`flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110 ${item.badgeBgClass} ${item.colorClass}`}
          >
            {item.svg}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-foreground group-hover:text-sky transition-colors">
              {item.name}
            </p>
            <p className="mt-0.5 truncate font-mono text-[11px] text-muted">
              {item.role[locale]}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
