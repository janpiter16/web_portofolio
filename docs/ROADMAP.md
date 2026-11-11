# Development Roadmap

## Delivery approach

Build the MVP in small phases. Each phase should end with a review, tests, and a Git commit. Estimate effort after inspecting the actual environment and available content; the phase order matters more than fixed dates.

## Phase 0 — Discovery and content collection

Tasks:
- Confirm professional name and title.
- Collect approved bio in Indonesian and English.
- List real skills and proficiency evidence.
- Collect work experience and education details.
- Select 3 initial projects or define projects to build.
- Prepare approved profile image, screenshots, and CV files.
- Confirm which contact links may be public.

Deliverables:
- Approved content checklist.
- Asset inventory.
- No invented personal information.

Exit criteria:
- Required content is available or marked with explicit placeholders.

## Phase 1 — Repository and application setup

Tasks:
- Create GitHub repository.
- Initialize Next.js with TypeScript, App Router, and Tailwind CSS.
- Confirm lint/build scripts.
- Add `.gitignore`, README, and docs.
- Create initial folder structure.
- Run local development server.

Deliverables:
- Running starter application.
- Initial repository commit.

Exit criteria:
- App starts locally.
- Lint and production build pass.

## Phase 2 — Design system and shared layout

Tasks:
- Implement color and typography tokens.
- Build responsive container and section primitives.
- Build Navbar, mobile navigation, Footer, Button, and SectionHeading.
- Add accessible focus and interaction states.

Deliverables:
- Shared layout and UI foundation.

Exit criteria:
- Layout works on mobile, tablet, desktop.
- Keyboard navigation is usable.

## Phase 3 — Main portfolio sections

Tasks:
- Hero.
- About.
- Skills.
- Experience.
- Education / certifications when available.
- Projects listing.
- Contact.

Deliverables:
- Complete homepage structure.

Exit criteria:
- Sections render with approved content or explicit placeholders.
- No fake links or fabricated claims.

## Phase 4 — Localization and project details

Tasks:
- Implement `/id` and `/en`.
- Add translation dictionaries.
- Add language switcher.
- Add projects index and dynamic project detail pages.
- Localize metadata and page labels.

Deliverables:
- Bilingual portfolio and project detail routes.

Exit criteria:
- Both locales work.
- Language switcher maps routes correctly.
- Missing translations are identified.

## Phase 5 — Content, assets, and SEO

Tasks:
- Replace placeholders with approved profile content.
- Add project screenshots and descriptions.
- Add public CV PDFs.
- Add metadata, Open Graph image, sitemap, robots.
- Verify external links.

Deliverables:
- Content-complete portfolio.

Exit criteria:
- All displayed facts are verified.
- Assets and links work.

## Phase 6 — QA and optimization

Tasks:
- Test mobile, tablet, desktop.
- Test keyboard and screen-reader basics.
- Check contrast and reduced motion.
- Run lint, type-check, and production build.
- Check image optimization and performance.
- Fix broken links and console errors.

Deliverables:
- Release candidate.

Exit criteria:
- All Must requirements pass.
- No known critical or high-severity issues.

## Phase 7 — Deployment and launch

Tasks:
- Connect GitHub repository to Vercel.
- Configure environment variables only if required.
- Deploy preview.
- Verify preview.
- Merge to main and deploy production.
- Verify production routes, CV, images, and metadata.

Deliverables:
- Public portfolio URL.
- Updated README with live URL.

Exit criteria:
- Production site is accessible and all core flows work.

## Backlog — post-MVP

- Dark mode.
- Blog / technical writing.
- CMS.
- Contact form with backend.
- Analytics with privacy review.
- Additional case studies.
- Custom domain.
