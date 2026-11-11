import { LocalizedString } from "@/lib/i18n";

export interface SkillItem {
  name: string;
  evidence: LocalizedString;
}

export interface SkillCategory {
  id: string;
  title: LocalizedString;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: {
      id: "Frontend & UI",
      en: "Frontend & UI",
    },
    skills: [
      {
        name: "TypeScript / JavaScript (ES6+)",
        evidence: {
          id: "Pengembangan komponen antarmuka bertipe kuat dan modular",
          en: "Strongly-typed and modular user interface component development",
        },
      },
      {
        name: "React & Next.js (App Router)",
        evidence: {
          id: "Server Components, routing dinamis, dan optimasi SEO/performa",
          en: "Server Components, dynamic routing, and SEO/performance optimization",
        },
      },
      {
        name: "HTML5 & Semantic Accessibility (WCAG)",
        evidence: {
          id: "Struktur landmark semantik, navigasi keyboard, dan kontras teruji",
          en: "Semantic landmarks, keyboard navigation, and verified contrast",
        },
      },
      {
        name: "Tailwind CSS",
        evidence: {
          id: "Implementasi design token responsif mobile-first",
          en: "Mobile-first responsive design token implementation",
        },
      },
    ],
  },
  {
    id: "backend",
    title: {
      id: "Backend & Data",
      en: "Backend & Data",
    },
    skills: [
      {
        name: "[TAMBAHKAN KEAHLIAN BACKEND — Misal: Node.js / REST API]",
        evidence: {
          id: "[BUKTI PENGGUNAAN — Misal: Integrasi endpoint API dan validasi skema]",
          en: "[EVIDENCE — e.g., API endpoint integration and schema validation]",
        },
      },
      {
        name: "[TAMBAHKAN DATABASE — Misal: PostgreSQL / Prisma]",
        evidence: {
          id: "[BUKTI PENGGUNAAN — Misal: Perancangan skema relasional dan query teroptimasi]",
          en: "[EVIDENCE — e.g., Relational schema design and optimized queries]",
        },
      },
    ],
  },
  {
    id: "tools",
    title: {
      id: "Alat Kerja & Alur Pengembangan",
      en: "Tools & Engineering Workflow",
    },
    skills: [
      {
        name: "Git & GitHub Actions",
        evidence: {
          id: "Alur kerja branch/PR dan pipeline CI otomatis (lint, type-check, build)",
          en: "Branch/PR workflow and automated CI pipelines (lint, type-check, build)",
        },
      },
      {
        name: "Vercel & Web Deployment",
        evidence: {
          id: "Deployment preview dan produksi dengan konfigurasi environment aman",
          en: "Preview and production deployments with secure environment configuration",
        },
      },
    ],
  },
];
