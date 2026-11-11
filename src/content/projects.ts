import { LocalizedString } from "@/lib/i18n";

export interface ProjectItem {
  slug: string;
  featured: boolean;
  title: LocalizedString;
  summary: LocalizedString;
  description: LocalizedString;
  problem: LocalizedString;
  objective: LocalizedString;
  role: LocalizedString;
  contribution: LocalizedString;
  approach: LocalizedString;
  technologies: string[];
  features: LocalizedString[];
  challenge: LocalizedString;
  solution: LocalizedString;
  outcome: LocalizedString;
  image: string;
  imageAlt: LocalizedString;
  repositoryUrl?: string;
  demoUrl?: string;
}

export const projects: ProjectItem[] = [
  {
    slug: "bilingual-personal-portfolio",
    featured: true,
    title: {
      id: "Website Portofolio Profesional Bilingual",
      en: "Bilingual Professional Portfolio Website",
    },
    summary: {
      id: "Platform portofolio dwibahasa (ID/EN) berbasis Next.js App Router dengan arsitektur data bertipe kuat, aksesibilitas WCAG 2.2 AA, dan desain Creative Modern.",
      en: "Bilingual (ID/EN) portfolio platform built with Next.js App Router, featuring strongly-typed content models, WCAG 2.2 AA accessibility, and Creative Modern design.",
    },
    description: {
      id: "Proyek ini dibangun untuk menampilkan profil profesional, keahlian, pengalaman, dan studi kasus proyek secara terstruktur dalam Bahasa Indonesia dan Inggris.",
      en: "This project was built to present professional profile, skills, experience, and structured project case studies in both Indonesian and English.",
    },
    problem: {
      id: "Perekrut dan manajer teknis membutuhkan akses cepat untuk memverifikasi keahlian kandidat, melihat kode asli, dan mengunduh CV tanpa terhalang antarmuka yang lambat atau membingungkan.",
      en: "Recruiters and engineering managers need fast access to verify candidate skills, inspect source code, and download CVs without being slowed down by cluttered interfaces.",
    },
    objective: {
      id: "Membangun aplikasi web statis yang cepat, responsif di semua ukuran layar, mendukung lokalisasi rute `/id` dan `/en`, serta memiliki pipeline CI otomatis.",
      en: "Build a fast, responsive static-first web application supporting `/id` and `/en` localized routes with an automated CI quality pipeline.",
    },
    role: {
      id: "Frontend / Full-Stack Web Developer",
      en: "Frontend / Full-Stack Web Developer",
    },
    contribution: {
      id: "Merancang arsitektur informasi, mengimplementasikan sistem token desain Tailwind CSS, membangun rute dwibahasa App Router, serta mengonfigurasi pemeriksaan kualitas otomatis.",
      en: "Designed information architecture, implemented Tailwind CSS design tokens, built bilingual App Router pages, and configured automated quality checks.",
    },
    approach: {
      id: "Mengutamakan Server Components secara default untuk meminimalkan JavaScript di sisi klien, memisahkan konten ke dalam modul TypeScript bertipe ketat, dan menerapkan landmark HTML semantik.",
      en: "Prioritized Server Components by default to minimize client-side JavaScript, separated content into strictly-typed TypeScript modules, and enforced semantic HTML landmarks.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide React", "GitHub Actions"],
    features: [
      {
        id: "Lokalisasi penuh Bahasa Indonesia (`/id`) dan Inggris (`/en`) dengan pemetaan rute otomatis saat berganti bahasa",
        en: "Full Indonesian (`/id`) and English (`/en`) localization with automatic route mapping on language switch",
      },
      {
        id: "Halaman studi kasus proyek mendalam yang memuat masalah, solusi, peran, dan hasil",
        en: "In-depth project case study pages covering problem, solution, role, and outcomes",
      },
      {
        id: "Navigasi aksesibel dengan dukungan penuh keyboard dan fokus visual yang jelas",
        en: "Accessible navigation with full keyboard support and high-contrast focus indicators",
      },
    ],
    challenge: {
      id: "Menjaga sinkronisasi konten antara dua bahasa sekaligus memastikan perpindahan halaman tetap mempertahankan konteks rute yang sedang dibuka pengguna.",
      en: "Keeping content synchronized across two languages while ensuring language switching preserves the visitor's current route context.",
    },
    solution: {
      id: "Membangun helper lokalisasi bertipe (`LocalizedString`) dan komponen pengalih bahasa yang memetakan path aktif secara dinamis.",
      en: "Built a strongly-typed localization helper (`LocalizedString`) and a language switcher component that dynamically maps active paths.",
    },
    outcome: {
      id: "Menghasilkan fondasi portofolio yang bersih, lolos pemeriksaan lint/type-check/build, dan mudah diperbarui tanpa menyentuh kode komponen UI.",
      en: "Delivered a clean portfolio foundation passing lint, type-check, and production build checks, easily maintainable without touching UI component markup.",
    },
    image: "/images/projects/portfolio-preview.svg",
    imageAlt: {
      id: "Pratinjau antarmuka Website Portofolio Profesional Bilingual",
      en: "Interface preview of the Bilingual Professional Portfolio Website",
    },
    repositoryUrl: "https://github.com/yourusername/personal-portfolio",
  },
  {
    slug: "project-placeholder-two",
    featured: true,
    title: {
      id: "[PROYEK 2: Nama Aplikasi / Sistem Web Anda]",
      en: "[PROJECT 2: Your Web Application / System Title]",
    },
    summary: {
      id: "[RINGKASAN PROYEK 2: Jelaskan secara singkat tujuan aplikasi ini dan masalah utama yang diselesaikan.]",
      en: "[PROJECT 2 SUMMARY: Briefly explain the purpose of this application and the core problem it solves.]",
    },
    description: {
      id: "[DESKRIPSI LENGKAP PROYEK 2: Ganti placeholder ini dengan deskripsi nyata dari proyek kedua yang pernah Anda bangun.]",
      en: "[PROJECT 2 FULL DESCRIPTION: Replace this placeholder with the verified description of your second real project.]",
    },
    problem: {
      id: "[MASALAH / KONTEKS: Jelaskan latar belakang masalah sebelum proyek ini dibuat.]",
      en: "[PROBLEM / CONTEXT: Describe the background problem before this project was built.]",
    },
    objective: {
      id: "[TUJUAN: Apa target utama yang ingin dicapai oleh proyek ini?]",
      en: "[OBJECTIVE: What was the primary target this project aimed to achieve?]",
    },
    role: {
      id: "[PERAN ANDA — Misal: Frontend Developer]",
      en: "[YOUR ROLE — e.g., Frontend Developer]",
    },
    contribution: {
      id: "[KONTRIBUSI NYATA: Bagian mana yang Anda kerjakan secara langsung?]",
      en: "[ACTUAL CONTRIBUTION: Which parts did you personally build and deliver?]",
    },
    approach: {
      id: "[PENDEKATAN PENGEMBANGAN: Bagaimana arsitektur dan langkah pengerjaannya?]",
      en: "[DEVELOPMENT APPROACH: What architecture and implementation steps were taken?]",
    },
    technologies: ["TypeScript", "React", "Tailwind CSS", "REST API"],
    features: [
      {
        id: "[FITUR UTAMA 1]",
        en: "[KEY FEATURE 1]",
      },
      {
        id: "[FITUR UTAMA 2]",
        en: "[KEY FEATURE 2]",
      },
    ],
    challenge: {
      id: "[TANTANGAN TEKNIS: Kendala apa yang dihadapi selama pengembangan?]",
      en: "[TECHNICAL CHALLENGE: What obstacle was encountered during development?]",
    },
    solution: {
      id: "[SOLUSI: Bagaimana Anda menyelesaikan kendala tersebut?]",
      en: "[SOLUTION: How did you resolve that obstacle?]",
    },
    outcome: {
      id: "[HASIL / PELAJARAN: Dampak nyata atau pelajaran teknis yang diperoleh.]",
      en: "[OUTCOME / LESSONS LEARNED: Real impact or technical lessons gained.]",
    },
    image: "/images/projects/project-two-preview.svg",
    imageAlt: {
      id: "Pratinjau placeholder Proyek 2",
      en: "Placeholder preview for Project 2",
    },
  },
  {
    slug: "project-placeholder-three",
    featured: true,
    title: {
      id: "[PROYEK 3: Nama Aplikasi / Proyek Ketiga Anda]",
      en: "[PROJECT 3: Your Third Web Project Title]",
    },
    summary: {
      id: "[RINGKASAN PROYEK 3: Jelaskan secara singkat nilai guna proyek ketiga Anda.]",
      en: "[PROJECT 3 SUMMARY: Briefly explain the value proposition of your third project.]",
    },
    description: {
      id: "[DESKRIPSI LENGKAP PROYEK 3: Ganti dengan detail proyek ketiga Anda.]",
      en: "[PROJECT 3 FULL DESCRIPTION: Replace with details of your third real project.]",
    },
    problem: {
      id: "[MASALAH / KONTEKS PROYEK 3]",
      en: "[PROJECT 3 PROBLEM / CONTEXT]",
    },
    objective: {
      id: "[TUJUAN PROYEK 3]",
      en: "[PROJECT 3 OBJECTIVE]",
    },
    role: {
      id: "[PERAN ANDA]",
      en: "[YOUR ROLE]",
    },
    contribution: {
      id: "[KONTRIBUSI NYATA ANDA]",
      en: "[YOUR ACTUAL CONTRIBUTION]",
    },
    approach: {
      id: "[PENDEKATAN TEKNIS]",
      en: "[TECHNICAL APPROACH]",
    },
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    features: [
      {
        id: "[FITUR UTAMA 1]",
        en: "[KEY FEATURE 1]",
      },
      {
        id: "[FITUR UTAMA 2]",
        en: "[KEY FEATURE 2]",
      },
    ],
    challenge: {
      id: "[TANTANGAN TEKNIS PROYEK 3]",
      en: "[PROJECT 3 TECHNICAL CHALLENGE]",
    },
    solution: {
      id: "[SOLUSI TEKNIS PROYEK 3]",
      en: "[PROJECT 3 TECHNICAL SOLUTION]",
    },
    outcome: {
      id: "[HASIL AKHIR PROYEK 3]",
      en: "[PROJECT 3 OUTCOME]",
    },
    image: "/images/projects/project-three-preview.svg",
    imageAlt: {
      id: "Pratinjau placeholder Proyek 3",
      en: "Placeholder preview for Project 3",
    },
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projects.find((project) => project.slug === slug);
}
