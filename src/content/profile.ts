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
  instagramUrl: string;
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
      id: "Lulusan D4 Teknik Informatika (Rekayasa Perangkat Lunak) Politeknik Negeri Indramayu dengan IPK 3,90 yang berfokus pada pengembangan Backend, RESTful API, dan aplikasi Web Fullstack menggunakan PHP (Laravel), Python (Flask), JavaScript (React), serta database MySQL dan PostgreSQL. Berpengalaman magang sebagai Frontend Developer di Bandung Techno Park dan mengintegrasikan sistem web dengan layanan prediksi Machine Learning.",
      en: "Applied Bachelor (D4) graduate in Informatics Engineering (Software Engineering) from Politeknik Negeri Indramayu with a 3.90 GPA, specializing in Backend, RESTful API, and Fullstack Web development using PHP (Laravel), Python (Flask), JavaScript (React), and SQL databases (MySQL & PostgreSQL). Experienced as a Frontend Developer Intern at Bandung Techno Park and in integrating web applications with Machine Learning prediction services.",
    },
  ],
  email: "janpurba90@gmail.com",
  githubUrl: "https://github.com/janpiter16",
  linkedinUrl: "https://www.linkedin.com/in/janpiter-purba-22075b444/",
  instagramUrl: "https://www.instagram.com/janpiterprb_16?exln=MWU2OHB5d3hodmh5MQ==",
  cvPath: {
    id: "/cv/resume-id.pdf",
    en: "/cv/resume-en.pdf",
  },
};
