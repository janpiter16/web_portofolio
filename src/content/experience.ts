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
    id: "exp-1",
    role: {
      id: "[POSISI / JABATAN — Misal: Web Developer]",
      en: "[ROLE TITLE — e.g., Web Developer]",
    },
    organization: "[NAMA PERUSAHAAN / ORGANISASI]",
    employmentType: {
      id: "[Penuh Waktu / Magang / Freelance]",
      en: "[Full-time / Internship / Freelance]",
    },
    period: {
      id: "[Bulan Tahun – Bulan Tahun / Sekarang]",
      en: "[Month Year – Month Year / Present]",
    },
    responsibilities: [
      {
        id: "[TANGGUNG JAWAB TERVERIFIKASI 1: Jelaskan tugas utama yang benar-benar Anda kerjakan.]",
        en: "[VERIFIED RESPONSIBILITY 1: Describe the primary responsibility you actually performed.]",
      },
      {
        id: "[TANGGUNG JAWAB TERVERIFIKASI 2: Jelaskan kolaborasi dengan tim desain atau backend.]",
        en: "[VERIFIED RESPONSIBILITY 2: Describe collaboration with design or backend teams.]",
      },
    ],
    achievements: [
      {
        id: "[PENCAPAIAN TERUKUR: Cantumkan hasil nyata yang dapat diverifikasi tanpa mengarang angka.]",
        en: "[VERIFIED OUTCOME: State concrete, verifiable outcomes without fabricating metrics.]",
      },
    ],
  },
];

export const educations: EducationItem[] = [
  {
    id: "edu-1",
    institution: "[NAMA UNIVERSITAS / INSTITUSI PENDIDIKAN]",
    degree: {
      id: "[GELAR / KUALIFIKASI — Misal: Sarjana Komputer (S.Kom)]",
      en: "[DEGREE / QUALIFICATION — e.g., Bachelor of Computer Science]",
    },
    field: {
      id: "[BIDANG STUDI — Misal: Teknik Informatika / Sistem Informasi]",
      en: "[FIELD OF STUDY — e.g., Informatics Engineering / Information Systems]",
    },
    period: "[Tahun Mulai – Tahun Lulus]",
    notes: {
      id: "[OPSIONAL: Fokus studi, tugas akhir relevan, atau kegiatan akademik terverifikasi]",
      en: "[OPTIONAL: Relevant thesis, study focus, or verified academic activities]",
    },
  },
];

export const certifications: CertificationItem[] = [
  {
    id: "cert-1",
    name: "[NAMA SERTIFIKASI TERVERIFIKASI]",
    issuer: "[LEMBAGA PENERBIT]",
    date: "[Tahun]",
  },
];
