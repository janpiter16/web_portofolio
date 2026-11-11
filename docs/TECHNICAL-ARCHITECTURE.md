# Technical Architecture

## 1. Architecture overview

Use a Next.js App Router application with TypeScript. Prefer Server Components by default; use Client Components only for interactive UI such as the mobile navigation, locale switcher if stateful, and theme controls if implemented.

The MVP is primarily static content. A database is not required.

## 2. Recommended stack

| Layer | Technology | Purpose |
|---|---|---|
| Framework | Next.js App Router | Routing and rendering |
| Language | TypeScript | Type safety |
| Styling | Tailwind CSS | Responsive styling |
| Icons | Lucide React | Consistent iconography |
| Content | Typed TS data + locale dictionaries | Profile and project content |
| Version control | Git / GitHub | History and collaboration |
| CI | GitHub Actions | Lint and build checks |
| Hosting | Vercel | Next.js deployment |

Use the current stable versions at project initialization. Do not pin versions copied from old tutorials without checking compatibility.

## 3. Suggested folder structure

```text
personal-portfolio/
├── public/
│   ├── images/
│   │   ├── profile/
│   │   └── projects/
│   └── cv/
│       ├── resume-id.pdf
│       └── resume-en.pdf
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── [locale]/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── projects/
│   │   │       ├── page.tsx
│   │   │       └── [slug]/page.tsx
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── content/
│   │   ├── profile.ts
│   │   ├── skills.ts
│   │   ├── experience.ts
│   │   └── projects.ts
│   ├── messages/
│   │   ├── id.json
│   │   └── en.json
│   └── lib/
│       ├── i18n.ts
│       └── utils.ts
├── docs/
├── .github/
│   └── workflows/
├── .env.example
├── .gitignore
├── README.md
└── package.json
```

Adjust the structure to the actual Next.js version and routing implementation. Avoid creating empty abstractions without a real use case.

## 4. Routing and localization

- Supported locales: `id` and `en`.
- Public routes should be prefixed with locale.
- Root `/` should redirect to the selected default locale (initially `/id`) or use an explicit language landing page.
- Keep translations in `src/messages/id.json` and `src/messages/en.json`.
- Use a typed locale helper to validate locale values.
- Language switch should preserve the current route where a translation exists.
- If a translated project slug differs by locale, maintain an explicit mapping.
- Set `<html lang>` correctly for each locale.
- Provide localized metadata and alternate-language links.

Do not implement custom middleware unless needed by the chosen routing approach and supported by the installed Next.js version.

## 5. Content model

Use typed data objects for profile, skills, experience, and projects.

Suggested project fields:
- `slug`
- `title` per locale
- `summary` per locale
- `description` per locale
- `role`
- `technologies`
- `image`
- `imageAlt` per locale
- `features` per locale
- `challenge` and `solution` per locale
- `repositoryUrl` (optional)
- `demoUrl` (optional)

Validate external URLs and do not render empty action buttons.

## 6. Rendering strategy

- Prefer Server Components for content and static sections.
- Use Client Components only where browser interaction is needed.
- Use static generation for portfolio and project content when feasible.
- Use Next.js metadata API for title, description, Open Graph, and alternates.
- Use `next/image` for local or configured remote images.
- Generate sitemap and robots routes using supported Next.js conventions.

## 7. Security and privacy

- No secrets in source code or `NEXT_PUBLIC_` variables unless the value is explicitly safe to expose.
- Keep `.env.local` and other environment files out of Git.
- Never put private CVs, identity documents, addresses, or confidential employer data in `public/`.
- Only publish project screenshots and code the owner has permission to share.
- Avoid rendering raw HTML from untrusted content.

## 8. Quality checks

Recommended scripts, adjusted to the generated project:
- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`

Do not assume a script exists; inspect `package.json` and add only appropriate scripts.

## 9. Deployment

Recommended deployment: Vercel connected to the GitHub repository.

- Push to feature branch and open a pull request.
- Verify preview deployment.
- Merge after checks pass.
- Verify production URL after deployment.

GitHub Pages is suitable for static exports only and may not support all Next.js server features. Use it only if the application is intentionally configured for static export and has no unsupported server-dependent features.
