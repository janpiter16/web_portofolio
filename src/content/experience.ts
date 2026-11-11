import { LocalizedString } from "@/lib/i18n";

export interface ExperienceItem {
  id: string;
  role: LocalizedString;
  organization: string;
  employmentType: LocalizedString;
  period: LocalizedString;
  responsibilities: LocalizedString[];
  achievements: LocalizedString[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: LocalizedString;
  field: LocalizedString;
  period: string;
  notes?: LocalizedString;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "exp-btp",
    role: {
      id: "Frontend Developer",
      en: "Frontend Developer",
    },
    organization: "Bandung Techno Park",
    employmentType: {
      id: "Magang",
      en: "Internship",
    },
    period: {
      id: "Juli 2025 – Des 2025",
      en: "Jul 2025 – Dec 2025",
    },
    responsibilities: [
      {
        id: "Mengembangkan antarmuka pengguna (frontend) aplikasi web menggunakan HTML, CSS, JavaScript, dan React.",
        en: "Developed web application user interfaces (frontend) using HTML, CSS, JavaScript, and React.",
      },
      {
        id: "Berkolaborasi dengan tim pengembang dalam lingkungan kerja yang dinamis untuk mengembangkan dan menyempurnakan fitur aplikasi.",
        en: "Collaborated with the development team in a dynamic environment to build and refine application features.",
      },
    ],
    achievements: [
      {
        id: "Menyelesaikan pengembangan dan penyempurnaan modul antarmuka web berbasis React sesuai kebutuhan tim pengembang.",
        en: "Delivered and refined React-based web interface modules aligned with engineering team requirements.",
      },
    ],
  },
  {
    id: "exp-thesis",
    role: {
      id: "Fullstack Developer (Tugas Akhir / Skripsi)",
      en: "Fullstack Developer (Final Thesis Project)",
    },
    organization: "Politeknik Negeri Indramayu",
    employmentType: {
      id: "Proyek Tugas Akhir",
      en: "Thesis Project",
    },
    period: {
      id: "2025 – 2026",
      en: "2025 – 2026",
    },
    responsibilities: [
      {
        id: "Membangun backend dan aplikasi web menggunakan Laravel (PHP), serta layanan prediksi berbasis Python Flask yang terintegrasi melalui RESTful API.",
        en: "Built the web application and backend using Laravel (PHP) integrated with a Python Flask prediction service via RESTful API.",
      },
      {
        id: "Merancang dan mengelola database SQL (MySQL) untuk menyimpan data harga dan hasil prediksi.",
        en: "Designed and managed the SQL (MySQL) database to store pricing records and prediction outputs.",
      },
    ],
    achievements: [
      {
        id: "Mengimplementasikan model Machine Learning (Regresi Linear) untuk memprediksi harga panen ikan air tawar beserta analisis kelayakan usaha (Untung, Impas, Rugi).",
        en: "Implemented a Linear Regression Machine Learning model to predict freshwater fish harvest prices complete with business feasibility analysis (Profit, Break-even, Loss).",
      },
    ],
  },
  {
    id: "exp-spp-2",
    role: {
      id: "Web & Mobile Developer — Sistem Pembayaran SPP",
      en: "Web & Mobile Developer — Tuition Payment System",
    },
    organization: "Sekolah Alam Indramayu (Proyek Perkuliahan)",
    employmentType: {
      id: "Proyek Perkuliahan",
      en: "Academic Partner Project",
    },
    period: {
      id: "Sep 2024 – Des 2024",
      en: "Sep 2024 – Dec 2024",
    },
    responsibilities: [
      {
        id: "Mengembangkan fitur pengelolaan data pembayaran pada menu admin dan wali murid berbasis Website & Mobile.",
        en: "Developed payment data management features for both admin and parent portals across Web and Mobile.",
      },
      {
        id: "Mengembangkan fitur data tagihan pada menu admin dan wali murid serta membantu penyusunan laporan akhir proyek.",
        en: "Built billing data features for admin and parent menus and contributed to final project documentation.",
      },
    ],
    achievements: [],
  },
  {
    id: "exp-spp-1",
    role: {
      id: "System Analyst & Web Developer — Sistem Pembayaran SPP",
      en: "System Analyst & Web Developer — Tuition Payment System",
    },
    organization: "Sekolah Alam Indramayu (Proyek Perkuliahan)",
    employmentType: {
      id: "Proyek Perkuliahan",
      en: "Academic Partner Project",
    },
    period: {
      id: "Mar 2024 – Jun 2024",
      en: "Mar 2024 – Jun 2024",
    },
    responsibilities: [
      {
        id: "Menyusun flowchart, use case diagram, sequence diagram, dan alur sistem aplikasi.",
        en: "Created flowcharts, use case diagrams, sequence diagrams, and application system flows.",
      },
      {
        id: "Berdiskusi langsung dengan pihak mitra (Sekolah Alam Indramayu) untuk menggali kebutuhan sistem dan mengembangkan fitur data siswa pada menu wali murid.",
        en: "Conducted requirement-gathering sessions with the partner institution (Sekolah Alam Indramayu) and developed student data features for the parent portal.",
      },
    ],
    achievements: [],
  },
  {
    id: "exp-alumni",
    role: {
      id: "Web Developer & UI Designer — Aplikasi Informasi Alumni",
      en: "Web Developer & UI Designer — Alumni Information System",
    },
    organization: "SMK N 1 Indramayu (Proyek Perkuliahan)",
    employmentType: {
      id: "Proyek Perkuliahan",
      en: "Academic Project",
    },
    period: {
      id: "Sep 2023 – Des 2023",
      en: "Sep 2023 – Dec 2023",
    },
    responsibilities: [
      {
        id: "Membantu menyusun flowchart, use case diagram, alur sistem aplikasi, serta merancang mockup aplikasi.",
        en: "Assisted in preparing flowcharts, use case diagrams, system flows, and designing application UI mockups.",
      },
      {
        id: "Mengembangkan fitur tambah data pada menu alumni berbasis website.",
        en: "Developed the add-alumni data entry feature for the web-based alumni portal.",
      },
    ],
    achievements: [],
  },
];

export const educations: EducationItem[] = [
  {
    id: "edu-polindra",
    institution: "Politeknik Negeri Indramayu",
    degree: {
      id: "D4 (Sarjana Terapan) Teknik Informatika",
      en: "Applied Bachelor (D4) in Informatics Engineering",
    },
    field: {
      id: "Program Studi Rekayasa Perangkat Lunak — IPK: 3,90",
      en: "Software Engineering Study Program — GPA: 3.90 / 4.00",
    },
    period: "Sep 2022 – 2026",
    notes: {
      id: "Tugas Akhir: Sistem Pendukung Keputusan Penentuan Harga Panen Ikan Air Tawar Menggunakan Machine Learning dengan Metode Regresi Linear.",
      en: "Final Thesis: Decision Support System for Determining Freshwater Fish Harvest Prices Using Machine Learning with Linear Regression Method.",
    },
  },
  {
    id: "edu-sma",
    institution: "SMA Abdi Sejati Perdagangan, Sumatera Utara",
    degree: {
      id: "Sekolah Menengah Atas (SMA)",
      en: "Senior High School",
    },
    field: {
      id: "Jurusan Ilmu Pengetahuan Alam (IPA)",
      en: "Natural Sciences (IPA)",
    },
    period: "Juli 2019 – Juni 2022",
  },
];

export const certifications: CertificationItem[] = [];
