# Sitemap and Information Architecture

## 1. Route map

```text
/
├── /id
│   ├── /id#tentang
│   ├── /id#keahlian
│   ├── /id#pengalaman
│   ├── /id#pendidikan
│   ├── /id#proyek
│   ├── /id#kontak
│   └── /id/projects
│       └── /id/projects/[slug]
│
└── /en
    ├── /en#about
    ├── /en#skills
    ├── /en#experience
    ├── /en#education
    ├── /en#projects
    ├── /en#contact
    └── /en/projects
        └── /en/projects/[slug]
```

`/` should redirect to the default locale or render a language selection/landing experience. Choose one behavior and document it in the implementation.

## 2. Main page sections

| Section | ID locale | EN locale | Purpose |
|---|---|---|---|
| Hero | Beranda | Home | Role, value proposition, primary CTA |
| About | Tentang | About | Professional background |
| Skills | Keahlian | Skills | Technical and relevant soft skills |
| Experience | Pengalaman | Experience | Verified work history |
| Education | Pendidikan | Education | Formal education |
| Certifications | Sertifikasi | Certifications | Verified credentials, if any |
| Projects | Proyek | Projects | Work samples |
| Contact | Kontak | Contact | Contact options |

## 3. Navigation behavior

- Desktop: visible navigation links and language switcher.
- Mobile: accessible menu button with clear expanded/collapsed state.
- Section links should use stable IDs.
- On project detail pages, provide a clear route back to the projects listing.
- Language switcher should map the current page to the equivalent locale route when possible; otherwise go to the locale homepage.

## 4. Project detail page content

1. Project title and short summary.
2. Preview image / gallery.
3. Problem or context.
4. Objective.
5. Role and actual contribution.
6. Technology stack.
7. Key features.
8. Development approach.
9. Challenges and solutions.
10. Results / lessons learned.
11. Repository and live demo links, if public.
12. Related projects or back-to-projects link.

## 5. SEO route considerations

- Use localized title and description metadata.
- Provide canonical and alternate-language metadata where appropriate.
- Include only canonical, indexable public routes in sitemap.
- Do not index drafts or placeholder project pages.
