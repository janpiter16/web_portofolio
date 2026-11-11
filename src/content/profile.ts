import { LocalizedString, Locale } from "@/lib/i18n";

export interface ProfileData {
  name: string;
  title: LocalizedString;
  location: LocalizedString;
  availability: LocalizedString;
  summary: LocalizedString;
  about: LocalizedString[];
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  cvPath: Record<Locale, string>;
}

export const profileData: ProfileData = {
  name: "[YOUR NAME]",
  title: {
    id: "[PERAN PROFESIONAL — Misal: Full-Stack Web Developer]",
    en: "[PROFESSIONAL TITLE — e.g., Full-Stack Web Developer]",
  },
  location: {
    id: "[KOTA, NEGARA — Misal: Jakarta, Indonesia]",
    en: "[CITY, COUNTRY — e.g., Jakarta, Indonesia]",
  },
  availability: {
    id: "Terbuka untuk peluang kerja & proyek Web Development",
    en: "Available for Web Development roles & projects",
  },
  summary: {
    id: "[RINGKASAN PROFIL: Jelaskan dalam 1-2 kalimat fokus keahlian Anda dalam membangun aplikasi web yang cepat, mudah diakses, dan terstruktur dengan baik.]",
    en: "[PROFILE SUMMARY: Describe in 1-2 sentences your core focus on building fast, accessible, and well-structured web applications.]",
  },
  about: [
    {
      id: "[PARAGRAF 1 BIOGRAFI: Jelaskan latar belakang profesional Anda di bidang IT / Web Development, fokus teknologi yang dikuasai, serta pendekatan Anda dalam menyelesaikan masalah teknis.]",
      en: "[BIOGRAPHY PARAGRAPH 1: Describe your professional background in IT / Web Development, core technologies you work with, and your approach to solving technical problems.]",
    },
    {
      id: "[PARAGRAF 2 BIOGRAFI: Jelaskan bagaimana Anda bekerja dalam tim, perhatian terhadap kualitas kode, aksesibilitas, performa, serta tujuan karier yang sedang Anda tuju.]",
      en: "[BIOGRAPHY PARAGRAPH 2: Explain how you collaborate in teams, your attention to code quality, accessibility, performance, and the career goals you are pursuing.]",
    },
  ],
  email: "your.email@example.com",
  githubUrl: "https://github.com/yourusername",
  linkedinUrl: "https://www.linkedin.com/in/yourusername",
  cvPath: {
    id: "/cv/resume-id.pdf",
    en: "/cv/resume-en.pdf",
  },
};
