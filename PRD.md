# Product Requirements Document (PRD)
## Personal Portfolio Website

---

## 1. Ringkasan Eksekutif (Executive Summary)
Website portofolio ini dirancang sebagai platform representasi profesional interaktif untuk memamerkan keahlian, proyek unggulan, riwayat pengalaman, dan mempermudah calon perekrut (*recruiter*) atau calon klien untuk menghubungi pemilik situs.

### 1.1 Tujuan Proyek (Goals)
- **Tingkat Keterbacaan & Konversi:** Memudahkan pengunjung memahami keahlian utama dalam waktu < 10 detik dan mempermudah akses ke kontak/CV.
- **Kredibilitas:** Menampilkan 3–5 studi kasus proyek nyata dengan metrik performa/dampak konkret.
- **Performa & Aksesibilitas:** Meraih skor performa minimal >90 di Google Lighthouse (Mobile & Desktop).

---

## 2. Target Audiens & Persona Pengguna

| Persona | Kebutuhan Utama | Kriteria Keberhasilan |
| :--- | :--- | :--- |
| **Recruiter / Talent Acquisition** | Verifikasi cepat kecocokan skill, riwayat kerja, dan link CV format PDF. | Dapat mengunduh CV dan melihat riwayat kerja dalam 1-2 klik. |
| **Engineering / Creative Lead** | Ingin melihat kedalaman teknis, kualitas kode (GitHub), atau interaksi UI/UX. | Adanya live demo, cuplikan arsitektur sistem, atau studi kasus berbasis STAR. |
| **Calon Klien (Freelance)** | Membutuhkan estimasi kapabilitas dan cara mudah menghubungi untuk mendiskusikan proyek. | CTA kontak yang jelas, responsif, dan mencantumkan status ketersediaan (*availability*). |

---

## 3. Struktur Navigasi & Arsitektur Informasi (Site Architecture)

```
[ Navbar: Logo/Nama | About | Projects | Experience | Contact | Resume (CTA) ]
  │
  ├── 1. Hero Section (Nilai utama, peran, status ketersediaan)
  ├── 2. About & Core Competencies (Spesialisasi teknis / alat kerja)
  ├── 3. Featured Projects (Koleksi kartu proyek interaktif + detail)
  ├── 4. Work Experience & Education (Timeline terbalik)
  ├── 5. Contact Section & Social Links (Direct email / form sederhana)
  └── Footer (Hak cipta, tautan sosial media, status update terakhir)
```

---

## 4. Rincian Fitur & Persyaratan Fungsional

### 4.1 Hero Section
- **Headline & Sub-headline:** Pernyataan ringkas mengenai spesialisasi dan proposisi nilai.
- **Badge Ketersediaan:** Indikator visual real-time (contoh: *"🟢 Available for new roles/projects"*).
- **Primary CTA:** Tombol langsung menuju bagian *Projects* atau tombol unduh resume.

### 4.2 Proyek Unggulan (Featured Projects)
- **Tampilan Proyek:** Menampilkan kartu proyek yang mencakup:
  - Cuplikan visual/thumbnail interaktif.
  - Ringkasan masalah dan solusi berbasis metodologi STAR (*Situation, Task, Action, Result*).
  - Badge teknologi yang digunakan (misal: *React*, *Tailwind*, *PostgreSQL*).
  - Tautan aktif ke **Live Preview** dan **Source Code (GitHub)**.
- **Filter Kategori (Opsional):** Filter berdasarkan jenis proyek (Frontend, Fullstack, UI/UX, dll).

### 4.3 About & Skills
- Ringkasan singkat filosofi kerja dan latar belakang.
- Pengelompokan keahlian terstruktur:
  - *Languages & Frameworks*
  - *Tools & Platforms*
  - *Practices / Metodologi*

### 4.4 Riwayat Pengalaman (Experience Timeline)
- Menampilkan posisi, nama perusahaan, durasi kerja, serta poin kontribusi berbasis dampak.
- Akses langsung untuk melihat atau mengunduh versi lengkap CV/Resume (.pdf).

### 4.5 Kontak & Footer
- Formulir kontak ringkas (Nama, Email, Pesan) dengan integrasi API email (seperti Formspree / Resend) ATAU tautan `mailto:` langsung.
- Tautan profil eksternal: LinkedIn, GitHub, X/Twitter.

---

## 5. Persyaratan Non-Fungsional (Non-Functional Requirements)

1. **Performa & Optimasi (Core Web Vitals):**
   - Waktu muat awal (*First Contentful Paint*) < 1.2 detik.
   - Optimasi gambar menggunakan format modern (`.webp` atau `.avif`) dengan *lazy loading*.
2. **Responsivitas:**
   - Desain responsif berbasis *Mobile-First*, berfungsi mulus pada resolusi Smartphone (360px+), Tablet, hingga Desktop (1440px+).
3. **SEO & Metadata:**
   - Tag Open Graph (OG Tag) dan Twitter Cards lengkap agar tampilan link preview rapi saat dibagikan.
   - Struktur metadata JSON-LD untuk data profil/orang.
4. **Tema / Desain:**
   - Dukungan Dark Mode dan Light Mode (dengan toggle yang tersimpan di `localStorage`).

---

## 6. Rekomendasi Tech Stack

| Komponen | Opsi yang Direkomendasikan | Alasan Pemilihan |
| :--- | :--- | :--- |
| **Framework** | Next.js / Astro | Dukungan SSR/SSG untuk SEO optimal dan performa tinggi. |
| **Styling** | Tailwind CSS | Pengembangan styling cepat, modular, dan ukuran bundle kecil. |
| **Animasi** | Framer Motion | Animasi mikro dan transisi halaman yang halus. |
| **Deployment** | Vercel / Netlify | CI/CD otomatis terhubung dengan repositori Git, gratis untuk personal. |

---

## 7. Metrik Keberhasilan (Key Metrics & KPIs)
- **Engagement:** Durasi rata-rata sesi pengunjung di atas 45 detik.
- **Conversion:** Jumlah klik pada tombol *"Download CV"* dan pengiriman pesan via form/kontak.
- **Lighthouse Score:** Minimal 90/100 pada kategori Performance, Accessibility, Best Practices, dan SEO.

---

## 8. Milestone & Rencana Rilis

- **Sprint 1 (Konten & Desain):** Finalisasi copy, gambar proyek, dan sketsa tata letak (wireframe).
- **Sprint 2 (Implementasi Dasar):** Setup repositori, layout global (Hero, Navbar, Footer, Dark Mode).
- **Sprint 3 (Fitur & Interaktivitas):** Integrasi kartu proyek, timeline pengalaman, dan integrasi form kontak.
- **Sprint 4 (Testing & Launch):** Audit Lighthouse, responsivitas mobile, setup custom domain, dan rilis live.