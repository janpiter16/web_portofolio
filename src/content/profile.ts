import { LocalizedString, Locale } from "@/lib/i18n";

export interface ProfileData {
  name: string;
  avatar: string;
  title: LocalizedString;
  roles: Record<Locale, string[]>;
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
  name: "Janpiter Pandapotan Purba",
  avatar: "/images/profile/janpiter-portrait.jpg",
  title: {
    id: "Software Developer | Backend & Fullstack",
    en: "Software Developer | Backend & Fullstack",
  },
  roles: {
    id: [
      "Backend & Fullstack Developer",
      "Laravel & Python Flask Developer",
      "RESTful API & SQL Database Engineer",
      "React & Web Application Developer",
    ],
    en: [
      "Backend & Fullstack Developer",
      "Laravel & Python Flask Developer",
      "RESTful API & SQL Database Engineer",
      "React & Web Application Developer",
    ],
  },
  location: {
    id: "Serang, Banten, Indonesia",
    en: "Serang, Banten, Indonesia",
  },
  availability: {
    id: "Terbuka untuk peluang kerja Backend, Frontend & Fullstack Developer",
    en: "Available for Backend, Frontend & Fullstack Developer roles",
  },
  summary: {
    id: "Lulusan D4 Teknik Informatika (Rekayasa Perangkat Lunak) Politeknik Negeri Indramayu dengan IPK 3,90. Berpengalaman membangun RESTful API, layanan backend, dan aplikasi web menggunakan JavaScript, React, PHP (Laravel), Python (Flask), serta database MySQL dan PostgreSQL.",
    en: "Applied Bachelor (D4) graduate in Informatics Engineering (Software Engineering) from Politeknik Negeri Indramayu with a 3.90 GPA. Experienced in building RESTful APIs, backend services, and web applications using JavaScript, React, PHP (Laravel), Python (Flask), and SQL databases (MySQL & PostgreSQL).",
  },
  about: [
    {
      id: "Saya adalah lulusan D4 (Sarjana Terapan) Teknik Informatika, Program Studi Rekayasa Perangkat Lunak di Politeknik Negeri Indramayu dengan IPK 3,90. Fokus utama saya adalah pengembangan backend, integrasi RESTful API, dan pengembangan aplikasi web fullstack menggunakan JavaScript, React, PHP (Laravel), serta Python (Flask) yang didukung oleh perancangan database relasional MySQL dan PostgreSQL.",
      en: "I am an Applied Bachelor (D4) graduate in Informatics Engineering, Software Engineering study program at Politeknik Negeri Indramayu with a 3.90 GPA. My primary focus is backend development, RESTful API integration, and fullstack web development using JavaScript, React, PHP (Laravel), and Python (Flask), backed by relational database design in MySQL and PostgreSQL.",
    },
    {
      id: "Saya memiliki pengalaman magang sebagai Frontend Developer di Bandung Techno Park serta pengalaman sebagai Fullstack Developer dalam mengintegrasikan aplikasi web Laravel dengan layanan prediksi Machine Learning berbasis Python Flask. Saya terbiasa berkolaborasi dalam tim maupun berdiskusi langsung dengan mitra pengguna, memiliki kemampuan pemecahan masalah yang terstruktur, dan antusias mempelajari teknologi modern termasuk layanan cloud seperti Google Cloud Platform.",
      en: "I have hands-on internship experience as a Frontend Developer at Bandung Techno Park and Fullstack Developer experience integrating Laravel web applications with Python Flask machine learning prediction services. I am accustomed to collaborating in dynamic teams and engaging directly with project partners, backed by strong problem-solving skills and eagerness to learn cloud technologies such as Google Cloud Platform.",
    },
  ],
  email: "janpurba90@gmail.com",
  githubUrl: "",
  linkedinUrl: "",
  cvPath: {
    id: "/cv/resume-id.pdf",
    en: "/cv/resume-en.pdf",
  },
};
