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
    slug: "spk-harga-panen-ikan-machine-learning",
    featured: true,
    title: {
      id: "Sistem Pendukung Keputusan Penentuan Harga Panen Ikan Air Tawar",
      en: "Decision Support System for Freshwater Fish Harvest Pricing",
    },
    summary: {
      id: "Aplikasi web fullstack berbasis Laravel dan layanan RESTful API Python Flask yang mengimplementasikan Machine Learning (Regresi Linear) untuk memprediksi harga panen ikan air tawar dan analisis kelayakan usaha.",
      en: "Fullstack web application built with Laravel and a Python Flask RESTful API service implementing Linear Regression Machine Learning to predict freshwater fish harvest prices and business feasibility.",
    },
    description: {
      id: "Proyek Tugas Akhir/Skripsi di Politeknik Negeri Indramayu yang mengintegrasikan aplikasi manajemen web berbasis Laravel (PHP) dengan layanan prediksi Machine Learning berbasis Python Flask dan database MySQL.",
      en: "Final Thesis project at Politeknik Negeri Indramayu integrating a Laravel (PHP) web application with a Python Flask Machine Learning prediction service and a MySQL relational database.",
    },
    problem: {
      id: "Pembudidaya ikan air tawar membutuhkan dasar perhitungan yang objektif untuk memperkirakan harga jual panen dan mengevaluasi apakah hasil panen berada pada kondisi untung, impas, atau rugi.",
      en: "Freshwater fish farmers need an objective data-driven basis to estimate harvest selling prices and evaluate whether a harvest cycle will result in profit, break-even, or loss.",
    },
    objective: {
      id: "Membangun sistem pendukung keputusan terintegrasi yang memprediksi harga panen menggunakan metode Regresi Linear serta menyajikan analisis kelayakan usaha secara otomatis.",
      en: "Build an integrated decision support system that predicts harvest prices using Linear Regression and automatically presents business feasibility analysis.",
    },
    role: {
      id: "Fullstack Developer",
      en: "Fullstack Developer",
    },
    contribution: {
      id: "Membangun aplikasi web dan backend menggunakan Laravel, mengembangkan endpoint layanan prediksi menggunakan Python Flask, merancang skema database MySQL, serta mengintegrasikan kedua layanan melalui RESTful API.",
      en: "Built the web application and backend in Laravel, developed the prediction service endpoints in Python Flask, designed the MySQL database schema, and integrated both services via RESTful API.",
    },
    approach: {
      id: "Memisahkan tanggung jawab antara aplikasi utama (Laravel untuk pengelolaan data pengguna, riwayat harga, dan antarmuka) dengan microservice komputasi prediksi (Python Flask untuk eksekusi model Regresi Linear) yang berkomunikasi melalui protokol HTTP/JSON RESTful API.",
      en: "Separated concerns between the main application (Laravel for user management, pricing history, and UI) and the prediction service (Python Flask for executing the Linear Regression model) communicating over HTTP/JSON RESTful API.",
    },
    technologies: [
      "PHP",
      "Laravel",
      "Python",
      "Flask",
      "RESTful API",
      "Machine Learning",
      "MySQL",
    ],
    features: [
      {
        id: "Integrasi arsitektur backend Laravel dengan layanan prediksi Python Flask melalui RESTful API",
        en: "Backend integration between Laravel and a Python Flask prediction service via RESTful API",
      },
      {
        id: "Prediksi harga panen ikan air tawar menggunakan model Machine Learning metode Regresi Linear",
        en: "Freshwater fish harvest price prediction powered by a Linear Regression Machine Learning model",
      },
      {
        id: "Pengelolaan database SQL (MySQL) untuk penyimpanan data historis harga dan riwayat hasil prediksi",
        en: "SQL (MySQL) database management for storing historical pricing records and prediction outputs",
      },
      {
        id: "Analisis kelayakan usaha otomatis (Untung, Impas, Rugi) berdasarkan hasil prediksi harga",
        en: "Automated business feasibility classification (Profit, Break-even, Loss) based on predicted prices",
      },
    ],
    challenge: {
      id: "Menghubungkan proses bisnis aplikasi web berbasis PHP (Laravel) dengan model komputasi Machine Learning yang berjalan di lingkungan Python (Flask) secara konsisten dan cepat.",
      en: "Connecting PHP (Laravel) web application business workflows with a Machine Learning model running in a Python (Flask) environment reliably.",
    },
    solution: {
      id: "Merancang kontrak RESTful API terstruktur antara Laravel dan Flask serta menyimpan hasil prediksi ke dalam tabel relasional MySQL agar dapat dianalisis kembali tanpa membebani server.",
      en: "Designed a structured RESTful API contract between Laravel and Flask and persisted prediction results in MySQL relational tables for fast retrieval and feasibility evaluation.",
    },
    outcome: {
      id: "Menghasilkan sistem pendukung keputusan fungsional yang membantu penentuan harga panen ikan air tawar secara terukur beserta indikator kelayakan usahanya.",
      en: "Delivered a functional decision support system providing measurable harvest price predictions alongside clear business feasibility indicators.",
    },
    image: "/images/projects/portfolio-preview.svg",
    imageAlt: {
      id: "Ilustrasi arsitektur Sistem Pendukung Keputusan Harga Panen Ikan Air Tawar",
      en: "Architecture illustration of the Freshwater Fish Harvest Pricing Decision Support System",
    },
  },
  {
    slug: "sistem-pembayaran-spp-sekolah-alam-indramayu",
    featured: true,
    title: {
      id: "Sistem Pembayaran SPP Sekolah Alam Indramayu (Web & Mobile)",
      en: "Sekolah Alam Indramayu Tuition Payment System (Web & Mobile)",
    },
    summary: {
      id: "Pengembangan sistem informasi pengelolaan data siswa, tagihan, dan pembayaran SPP berbasis Website dan Mobile untuk admin serta wali murid di Sekolah Alam Indramayu.",
      en: "Web and Mobile tuition payment, billing, and student data management system built for administrators and parents at Sekolah Alam Indramayu.",
    },
    description: {
      id: "Proyek perkuliahan dua tahap (Maret–Desember 2024) yang bekerja sama langsung dengan mitra Sekolah Alam Indramayu untuk mendigitalisasi alur pengelolaan data siswa, tagihan, dan pembayaran SPP.",
      en: "Two-phase academic partner project (March–December 2024) collaborating directly with Sekolah Alam Indramayu to digitize student records, tuition billing, and payment workflows.",
    },
    problem: {
      id: "Pihak sekolah dan wali murid membutuhkan sistem terpusat untuk memantau data siswa, rincian tagihan bulanan, serta riwayat pembayaran SPP secara transparan.",
      en: "School administrators and parents needed a centralized platform to track student records, monthly tuition bills, and payment histories transparently.",
    },
    objective: {
      id: "Merancang alur sistem yang sesuai dengan kebutuhan mitra serta membangun modul data siswa, tagihan, dan pembayaran yang dapat diakses melalui platform Website dan Mobile.",
      en: "Design system workflows aligned with stakeholder needs and build student, billing, and payment modules accessible across Web and Mobile platforms.",
    },
    role: {
      id: "System Analyst & Web / Mobile Developer",
      en: "System Analyst & Web / Mobile Developer",
    },
    contribution: {
      id: "Berdiskusi dengan mitra untuk menggali kebutuhan sistem, menyusun diagram UML (flowchart, use case, sequence diagram), serta mengembangkan fitur data siswa, data tagihan, dan data pembayaran pada menu admin serta wali murid.",
      en: "Gathered requirements directly with the school partner, authored UML diagrams (flowchart, use case, sequence diagrams), and developed student, billing, and payment modules for admin and parent portals.",
    },
    approach: {
      id: "Tahap pertama (Mar–Jun 2024) berfokus pada analisis kebutuhan mitra, pemodelan UML, dan pengembangan modul data siswa berbasis web. Tahap kedua (Sep–Des 2024) memperluas sistem ke platform Website & Mobile untuk fitur transaksi pembayaran dan tagihan.",
      en: "Phase 1 (Mar–Jun 2024) focused on stakeholder requirement analysis, UML modeling, and web student data features. Phase 2 (Sep–Dec 2024) expanded the system across Web & Mobile for billing and payment transactions.",
    },
    technologies: [
      "PHP",
      "Laravel",
      "JavaScript",
      "Flutter",
      "MySQL",
      "UML",
      "Draw.io",
    ],
    features: [
      {
        id: "Pemodelan sistem lengkap mencakup flowchart, use case diagram, dan sequence diagram berdasarkan diskusi mitra",
        en: "Comprehensive system modeling including flowcharts, use case diagrams, and sequence diagrams derived from stakeholder interviews",
      },
      {
        id: "Manajemen data pembayaran SPP pada menu admin dan wali murid",
        en: "Tuition payment data management for both administrator and parent portals",
      },
      {
        id: "Manajemen data tagihan dan informasi siswa pada menu admin dan wali murid",
        en: "Tuition billing and student information management across admin and parent menus",
      },
    ],
    challenge: {
      id: "Menyelaraskan kebutuhan operasional nyata dari pihak sekolah ke dalam alur sistem yang mudah dipahami oleh admin maupun wali murid.",
      en: "Translating real operational requirements from the school partner into an intuitive workflow for both administrators and parents.",
    },
    solution: {
      id: "Melakukan sesi diskusi kebutuhan secara langsung dengan mitra dan memvalidasi alur menggunakan flowchart serta sequence diagram sebelum mengimplementasikan kode fitur tagihan dan pembayaran.",
      en: "Conducted direct requirement workshops with the partner and validated workflows using flowcharts and sequence diagrams prior to implementing billing and payment code.",
    },
    outcome: {
      id: "Menyelesaikan modul data siswa, tagihan, dan pembayaran SPP berbasis Website dan Mobile beserta dokumentasi laporan akhir proyek.",
      en: "Successfully delivered Web and Mobile student, billing, and tuition payment modules alongside complete project documentation.",
    },
    image: "/images/projects/project-two-preview.svg",
    imageAlt: {
      id: "Pratinjau Sistem Pembayaran SPP Sekolah Alam Indramayu",
      en: "Preview of Sekolah Alam Indramayu Tuition Payment System",
    },
  },
  {
    slug: "aplikasi-informasi-alumni-smkn1-indramayu",
    featured: true,
    title: {
      id: "Aplikasi Penyedia Informasi Alumni SMK N 1 Indramayu",
      en: "SMK N 1 Indramayu Alumni Information Web Application",
    },
    summary: {
      id: "Aplikasi berbasis website untuk pendataan dan penyediaan informasi alumni SMK N 1 Indramayu, dilengkapi perancangan alur sistem UML dan antarmuka mockup.",
      en: "Web-based application for managing and providing alumni information for SMK N 1 Indramayu, backed by UML system modeling and UI mockup design.",
    },
    description: {
      id: "Proyek perkuliahan (September–Desember 2023) yang bertujuan membangun platform informasi dan pendataan alumni SMK N 1 Indramayu berbasis website.",
      en: "Academic project (September–December 2023) aimed at building a web-based alumni directory and information platform for SMK N 1 Indramayu.",
    },
    problem: {
      id: "Pendataan informasi lulusan dan alumni membutuhkan wadah digital yang terstruktur agar pihak sekolah serta alumni dapat menambahkan dan mengakses data dengan mudah.",
      en: "Managing graduate and alumni records required a structured digital platform so the school and alumni could easily add and access data.",
    },
    objective: {
      id: "Merancang alur sistem, membuat desain mockup antarmuka, dan mengimplementasikan fitur pengelolaan tambah data pada menu alumni berbasis web.",
      en: "Design system workflows, create UI mockups, and implement web-based alumni data entry features.",
    },
    role: {
      id: "Web Developer & System Designer",
      en: "Web Developer & System Designer",
    },
    contribution: {
      id: "Membantu menyusun flowchart, use case diagram, dan alur sistem aplikasi, merancang mockup antarmuka aplikasi, serta mengembangkan fitur tambah data pada menu alumni.",
      en: "Assisted in creating flowcharts, use case diagrams, and system workflows, designed application UI mockups, and developed the add-data feature in the alumni module.",
    },
    approach: {
      id: "Memulai pengembangan dari perancangan diagram alur (UML) dan pembuatan mockup visual di Figma/Canva sebelum mengimplementasikan halaman dan form input data alumni.",
      en: "Started development from UML workflow diagrams and visual mockups in Figma/Canva before implementing the alumni pages and data entry forms.",
    },
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL", "Figma", "UML"],
    features: [
      {
        id: "Dokumentasi perancangan flowchart, use case diagram, dan alur sistem aplikasi",
        en: "System design documentation covering flowcharts, use case diagrams, and application flows",
      },
      {
        id: "Rancangan mockup antarmuka pengguna sebelum tahap penulisan kode",
        en: "User interface mockups designed prior to implementation",
      },
      {
        id: "Fitur tambah data alumni terintegrasi pada menu alumni berbasis website",
        en: "Integrated add-alumni data entry feature within the web alumni portal",
      },
    ],
    challenge: {
      id: "Memastikan form input data alumni sesuai dengan kebutuhan struktur data yang telah dirancang pada tahap pemodelan sistem.",
      en: "Ensuring the alumni data input forms matched the data structures defined during the system modeling phase.",
    },
    solution: {
      id: "Menggunakan use case diagram dan mockup yang telah disepakati tim sebagai acuan langsung saat membangun fitur tambah data pada menu alumni.",
      en: "Used the team-approved use case diagrams and UI mockups as a direct reference when building the alumni data entry feature.",
    },
    outcome: {
      id: "Menghasilkan rancangan sistem, desain mockup, serta modul tambah data alumni yang berfungsi sesuai spesifikasi proyek perkuliahan.",
      en: "Delivered system diagrams, UI mockups, and a functional alumni data entry module meeting academic project specifications.",
    },
    image: "/images/projects/project-three-preview.svg",
    imageAlt: {
      id: "Pratinjau Aplikasi Penyedia Informasi Alumni SMK N 1 Indramayu",
      en: "Preview of SMK N 1 Indramayu Alumni Information Application",
    },
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projects.find((project) => project.slug === slug);
}
