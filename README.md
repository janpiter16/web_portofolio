# Personal Portfolio Website

Website portofolio profesional bilingual (Bahasa Indonesia dan English) untuk menampilkan profil, keahlian, pengalaman, pendidikan, dan proyek Web Development.

## Project goals
- Memperkuat personal branding untuk melamar pekerjaan di bidang IT / Web Development.
- Menampilkan proyek nyata beserta konteks, kontribusi, teknologi, dan hasilnya.
- Menyediakan pengalaman yang responsif, mudah diakses, dan cepat.
- Mendukung bahasa Indonesia (`/id`) dan English (`/en`).

## Technology
- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide React
- Git dan GitHub
- Vercel untuk deployment

> Versi dependency dan konfigurasi final harus mengikuti dokumentasi resmi serta hasil `create-next-app` yang digunakan saat inisialisasi.

## Quick start

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` (otomatis mengarahkan ke `/id`, tersedia juga dalam `/en`).

## Quality checks

```bash
npm run lint
npx tsc --noEmit
node src/lib/self-check.mjs
npm run build
```

## Documentation
- [Product Requirements (PRD)](docs/PRD.md)
- [Sitemap](docs/SITEMAP.md)
- [Design System](docs/DESIGN-SYSTEM.md)
- [Technical Architecture](docs/TECHNICAL-ARCHITECTURE.md)
- [Development Roadmap](docs/ROADMAP.md)
- [GitHub Workflow](docs/GITHUB-WORKFLOW.md)
- [References](docs/REFERENCES.md)

## Project principles
1. Jangan mengarang identitas, pengalaman, pendidikan, sertifikasi, atau pencapaian pemilik.
2. Gunakan placeholder yang jelas sampai data asli tersedia.
3. Jangan menyimpan secret, token, password, atau file privat di repository.
4. Prioritaskan aksesibilitas, performa, keamanan, dan kemudahan pemeliharaan.
5. Jalankan lint, type-check (jika tersedia), dan production build sebelum merge/deploy.

## Environment variables
Jangan commit file `.env*` yang berisi nilai rahasia. Jika integrasi eksternal diperlukan, dokumentasikan nama variabel di `.env.example` dengan nilai kosong atau contoh non-rahasia.

## License
Pilih lisensi sebelum membuat repository publik. MIT dapat digunakan jika pemilik memang ingin mengizinkan penggunaan ulang kode; lisensi tidak otomatis mencakup foto, CV, atau konten pribadi.
