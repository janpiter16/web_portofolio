# Product Requirements Document (PRD)

- **Project:** Personal Portfolio Website
- **Document status:** Draft for implementation
- **Audience:** Recruiters, HR, IT Managers, Engineering Managers, Tech Leads, and potential clients
- **Primary role:** IT / Web Developer
- **Languages:** Bahasa Indonesia and English

## 1. Product vision

Membangun website portofolio profesional yang menjelaskan siapa pemiliknya, kemampuan yang dimiliki, pengalaman yang relevan, dan bukti pekerjaan melalui proyek yang dapat diperiksa.

Website harus membantu recruiter memahami kecocokan kandidat dengan cepat dan memberi akses mudah ke CV, repository, demo, serta kontak profesional.

## 2. Goals and success criteria

### Goals
1. Memperkenalkan profil profesional secara jelas.
2. Menampilkan keahlian teknis secara jujur dan terukur.
3. Menampilkan minimal tiga proyek nyata ketika konten tersedia.
4. Menyediakan konten lengkap dalam Bahasa Indonesia dan English.
5. Memudahkan pengunjung mengunduh CV dan menghubungi pemilik.
6. Menyediakan source code yang terorganisasi dan dapat dipelihara.

### Success criteria
- Semua halaman utama tersedia dalam `/id` dan `/en`.
- Semua tautan navigasi dan tombol utama berfungsi.
- Layout usable pada mobile, tablet, dan desktop.
- CV dapat diakses melalui tautan yang valid.
- Setiap proyek menampilkan deskripsi dan teknologi yang benar.
- Tidak ada error pada lint, type-check (jika dikonfigurasi), dan production build.
- Metadata dasar, sitemap, dan robots tersedia.
- Tidak ada secret atau data sensitif di repository publik.

## 3. Target users and needs

| User | Need |
|---|---|
| Recruiter / HR | Memahami profil, pengalaman, pendidikan, dan mengunduh CV |
| IT Manager | Menilai kemampuan dan relevansi proyek |
| Tech Lead | Memeriksa kualitas implementasi, repository, dan keputusan teknis |
| Potential client | Melihat layanan, hasil kerja, dan cara menghubungi |

## 4. Scope

### In scope — MVP
- Bilingual routing (`/id` dan `/en`).
- Navbar dan footer.
- Hero / introduction.
- About.
- Skills.
- Experience.
- Education and certifications (jika ada).
- Projects listing.
- Project detail pages.
- CV download.
- Contact links (email, GitHub, LinkedIn).
- Responsive layout.
- SEO metadata, sitemap, robots.
- Basic accessibility and performance checks.
- GitHub repository and Vercel deployment.

### Out of scope — initial release
- Authentication and user accounts.
- Admin dashboard / CMS.
- Database-backed content management.
- Blog platform.
- Complex contact form with message storage.
- E-commerce or payment.
- Analytics requiring personal tracking before privacy requirements are defined.

These may be considered for later releases.

## 5. Functional requirements

| ID | Requirement | Priority | Acceptance criteria |
|---|---|---|---|
| FR-01 | Locale routing | Must | `/id` and `/en` load the corresponding language |
| FR-02 | Language switcher | Must | Switching language keeps the visitor on the equivalent page when available |
| FR-03 | Navigation | Must | Main navigation links scroll or navigate to the correct section |
| FR-04 | Hero | Must | Shows name, professional title, concise summary, and primary actions |
| FR-05 | About | Must | Shows approved professional biography |
| FR-06 | Skills | Must | Skills are grouped and reflect actual proficiency |
| FR-07 | Experience | Should | Shows role, organization, dates, responsibilities, and verified achievements |
| FR-08 | Education | Should | Shows institution, qualification, field, and dates where approved |
| FR-09 | Certifications | Could | Shows credential name, issuer, date, and valid credential URL |
| FR-10 | Projects listing | Must | Each project card shows title, summary, stack, image, and available links |
| FR-11 | Project details | Should | Detail page explains context, role, process, features, and outcome |
| FR-12 | CV download | Must | Correct locale CV opens/downloads successfully |
| FR-13 | Contact | Must | Email and professional profile links work |
| FR-14 | Responsive | Must | Content works without horizontal overflow on common screen sizes |
| FR-15 | SEO | Must | Page title, description, canonical/alternate locale metadata as appropriate, sitemap and robots are configured |
| FR-16 | Accessibility | Must | Semantic landmarks, keyboard access, visible focus, meaningful alt text, sufficient contrast |
| FR-17 | Dark mode | Could | Only implement if it does not delay MVP or compromise consistency |

## 6. Non-functional requirements

- **Performance:** Optimize images, avoid unnecessary client components, minimize third-party scripts.
- **Accessibility:** Target WCAG 2.2 AA practices where practical; do not rely on color alone.
- **Security:** No secrets in client bundles or public repository. Validate external links and avoid unsafe HTML injection.
- **Maintainability:** Reusable components, typed content models, consistent naming, documented setup.
- **Reliability:** No broken internal routes or missing assets.
- **Compatibility:** Test current stable versions of major browsers and common mobile viewport sizes.
- **Privacy:** Publish only information and contact details the owner explicitly approves.

## 7. Content requirements

All content must be factual and approved by the owner. Use explicit placeholders such as `[YOUR NAME]` and `[ADD VERIFIED EXPERIENCE]` until supplied.

### Profile
- Full name / preferred professional name
- Professional title
- Location (optional; city/country only if desired)
- Short summary in both languages
- Profile photo (optional and owner-provided)
- Email and professional links

### Skills
- Skill name
- Category
- Optional proficiency description supported by evidence
- Do not invent proficiency percentages.

### Experience
- Organization
- Role
- Employment type (optional)
- Start/end date
- Responsibilities
- Verified achievements and measurable outcomes, if available

### Projects
- Slug
- Title in both languages
- Summary and detailed description in both languages
- Problem / objective
- Owner's actual role and contribution
- Technology stack
- Features
- Challenges and solutions
- Outcome / lessons learned
- Screenshot or thumbnail with alt text
- Repository URL and live demo URL, if available

### CV
- Indonesian and English PDF if both versions exist.
- Ensure documents are intended for public distribution before placing them in `public/`.

## 8. UX requirements

- A visitor should understand the person's role and primary value proposition immediately.
- Main CTA: view projects. Secondary CTA: download CV.
- Navigation should remain clear and usable on mobile.
- Project cards should provide enough context without overwhelming the page.
- Language switch should be easy to find.
- Contact options should be visible near the end of the page and in the footer.

## 9. Analytics and measurement

Analytics are optional for MVP. If added later:
- Choose a privacy-conscious provider.
- Document what is collected.
- Add consent handling if required by applicable law and provider policy.
- Do not collect sensitive visitor data.

## 10. Risks and mitigations

| Risk | Mitigation |
|---|---|
| Missing profile content | Use clearly labeled placeholders and a content checklist |
| Too many features delay launch | Protect MVP scope; defer blog, CMS, and dark mode |
| Fake or weak project evidence | Build small real projects and document actual contribution |
| Translation mismatch | Keep locale dictionaries in sync and review both languages |
| Performance issues | Optimize assets and test production build |
| Secret accidentally committed | Use `.gitignore`, `.env.example`, and repository secret scanning |
| Broken deployment | Verify build locally and use deployment preview before production |

## 11. Definition of Done

A release is complete when:
- [ ] Required sections render in both languages.
- [ ] Locale switcher works and preserves equivalent route where possible.
- [ ] No fabricated personal details remain.
- [ ] All navigation, project, CV, email, GitHub, and LinkedIn links are verified.
- [ ] Images have appropriate dimensions and alt text.
- [ ] Mobile, tablet, and desktop layouts are checked.
- [ ] Keyboard navigation and visible focus are checked.
- [ ] Lint and production build pass.
- [ ] Metadata, sitemap, and robots are configured.
- [ ] README setup instructions are accurate.
- [ ] GitHub repository contains no secrets or private files.
- [ ] Production deployment is verified.
