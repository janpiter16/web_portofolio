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
    id: "backend-db",
    title: {
      id: "Backend, API & Basis Data",
      en: "Backend, API & Databases",
    },
    skills: [
      {
        name: "PHP & Laravel",
        evidence: {
          id: "Pengembangan backend aplikasi web, autentikasi, manajemen data, dan integrasi API",
          en: "Web application backend development, data management, and API integration",
        },
      },
      {
        name: "Python & Flask (RESTful API)",
        evidence: {
          id: "Pembuatan layanan RESTful API dan integrasi model prediksi Machine Learning (Regresi Linear)",
          en: "Building RESTful API services and integrating Linear Regression Machine Learning prediction models",
        },
      },
      {
        name: "SQL (MySQL & PostgreSQL)",
        evidence: {
          id: "Perancangan dan pengelolaan basis data relasional untuk sistem pembayaran, data harga, dan prediksi",
          en: "Relational database design and management for payment systems, pricing data, and prediction outputs",
        },
      },
    ],
  },
  {
    id: "frontend-mobile",
    title: {
      id: "Web Frontend & Mobile",
      en: "Web Frontend & Mobile",
    },
    skills: [
      {
        name: "JavaScript & React",
        evidence: {
          id: "Pengembangan antarmuka pengguna (frontend) aplikasi web interaktif saat magang di Bandung Techno Park",
          en: "Interactive web user interface (frontend) development during internship at Bandung Techno Park",
        },
      },
      {
        name: "HTML5, CSS3 & Bootstrap",
        evidence: {
          id: "Implementasi layout web responsif untuk sistem informasi akademik dan pembayaran sekolah",
          en: "Responsive web layout implementation for academic and school payment information systems",
        },
      },
      {
        name: "Flutter",
        evidence: {
          id: "Pengembangan aplikasi lintas platform (Web & Mobile) pada proyek Sistem Pembayaran SPP",
          en: "Cross-platform application development (Web & Mobile) on the School Tuition Payment System project",
        },
      },
    ],
  },
  {
    id: "tools-workflow",
    title: {
      id: "Tools, Pemodelan Sistem & Soft Skills",
      en: "Tools, System Modeling & Soft Skills",
    },
    skills: [
      {
        name: "Git & Docker",
        evidence: {
          id: "Kontrol versi kode sumber dan kontainerisasi lingkungan pengembangan bersama tim",
          en: "Source code version control and development environment containerization in team workflows",
        },
      },
      {
        name: "UML, Draw.io, Figma & Canva",
        evidence: {
          id: "Penyusunan flowchart, use case diagram, sequence diagram, alur sistem, dan perancangan mockup UI",
          en: "Creating flowcharts, use case diagrams, sequence diagrams, system flows, and UI mockups",
        },
      },
      {
        name: "Problem Solving & Kolaborasi Mitra",
        evidence: {
          id: "Penggalian kebutuhan bersama mitra, kerja sama tim, kemampuan analitis & numerik, serta manajemen waktu",
          en: "Requirement gathering with stakeholders, teamwork, analytical & numerical skills, and time management",
        },
      },
    ],
  },
];
