# Design System — Creative Modern

## 1. Design direction

**Style:** Creative Modern, clean, confident, technical, and professional.

The design should feel distinctive without distracting recruiters from the content. Use generous whitespace, strong typography, restrained decoration, and clear project previews.

## 2. Brand principles

1. Clarity before decoration.
2. Projects and evidence are more important than visual effects.
3. Consistent spacing and typography.
4. Accessible contrast and visible interaction states.
5. Mobile-first responsive behavior.
6. Subtle motion only; respect reduced-motion preferences.

## 3. Color tokens

| Token | Hex | Usage |
|---|---|---|
| Navy | `#0B1F3A` | Primary brand, headings, dark surfaces |
| White | `#FFFFFF` | Main background |
| Blue | `#2563EB` | Primary action and links |
| Sky | `#38BDF8` | Small accent and decorative details |
| Light Gray | `#F1F5F9` | Alternate section / card background |
| Slate | `#64748B` | Secondary text |
| Text | `#0F172A` | Main body text |
| Border | `#E2E8F0` | Dividers and card borders |
| Success | `#15803D` | Success feedback only |
| Error | `#B91C1C` | Error feedback only |

Check text/background contrast before release. Do not use Sky Blue as small text on white unless contrast is verified.

## 4. Typography

Recommended:
- Sans-serif: Geist Sans or Inter.
- Monospace: Geist Mono for code labels only.

| Element | Desktop guidance | Mobile guidance |
|---|---:|---:|
| Hero heading | 48–64 px | 36–44 px |
| Section heading | 32–44 px | 28–34 px |
| Card heading | 20–24 px | 18–22 px |
| Body | 16–18 px | 16 px |
| Caption | 12–14 px | 12–14 px |

Use a readable line-height: approximately 1.1–1.2 for large headings and 1.5–1.75 for body text.

## 5. Layout and spacing

- Content max width: approximately 1120–1200 px.
- Center the main content.
- Use a consistent spacing scale based on 4 px or Tailwind spacing utilities.
- Desktop section vertical spacing: approximately 80–112 px.
- Mobile section vertical spacing: approximately 56–72 px.
- Use a responsive grid; avoid fixed widths that cause overflow.
- Maintain readable line length for paragraphs.

## 6. Responsive breakpoints

Use Tailwind's responsive utilities and test actual layouts rather than assuming breakpoints alone guarantee usability.

- Small mobile: below 640 px.
- Tablet: 640–1023 px.
- Desktop: 1024 px and above.

### Mobile requirements
- Collapse navigation into an accessible menu.
- Stack hero text and portrait vertically.
- Use one-column project cards.
- Keep buttons comfortably tappable.
- Avoid horizontal scrolling.
- Keep headings and paragraphs readable.

### Tablet requirements
- Use two-column layouts where content allows.
- Keep card grids flexible.
- Avoid cramped navigation.

### Desktop requirements
- Use balanced multi-column hero and content layouts.
- Project grid can use two or three columns depending on card width.
- Keep content within the max-width container.

## 7. Component specifications

### Navbar
- Brand/name on the left.
- Section navigation and locale switcher on the right.
- Sticky behavior is optional; if sticky, ensure anchor targets are not obscured.
- Mobile menu must support keyboard and screen-reader use.

### Hero
- Small introduction label.
- Name and professional title.
- One concise value proposition.
- Primary CTA: View Projects.
- Secondary CTA: Download CV.
- Optional profile image or abstract visual.
- Social links with accessible names.

### Section heading
- Short eyebrow label (optional).
- Clear heading.
- Brief supporting description where useful.

### Skill item
- Skill name and optional category.
- Avoid fabricated percentage/proficiency bars.
- Group skills logically.

### Project card
- Image with useful alt text.
- Project title.
- Short summary.
- Technology tags.
- Links for details, repository, or live demo where available.
- Do not show non-functional buttons.

### Experience item
- Role, organization, dates.
- Concise responsibilities.
- Verified outcomes only.

### Contact
- Clear invitation.
- Email link and professional profile links.
- If no working backend exists, use a `mailto:` link rather than a fake form.

### Footer
- Name or brand.
- Short navigation links.
- Copyright year generated appropriately.
- Professional social links.

## 8. Motion and interaction

- Use subtle hover/focus transitions.
- Avoid excessive parallax, bouncing, or scroll-jacking.
- Keep animation short and purposeful.
- Respect `prefers-reduced-motion`.
- All interactive elements need hover, focus-visible, active, and disabled states as applicable.

## 9. Accessibility

- Use semantic landmarks (`header`, `nav`, `main`, `section`, `footer`).
- Maintain logical heading order.
- Provide meaningful image alt text; decorative images should have empty alt.
- All controls must be keyboard accessible.
- Ensure visible focus indicators.
- Label icon-only buttons.
- Do not communicate status using color alone.
- Test text contrast.
- Ensure mobile menu state is announced correctly.

## 10. Image and asset guidance

- Use owner-provided profile photo and project screenshots.
- Do not use unrelated stock images as if they were actual projects.
- Optimize image size and use Next.js image optimization where applicable.
- Use consistent project thumbnail aspect ratios.
- Keep public CV files intentionally public and reviewed before deployment.

## 11. Tailwind implementation guidance

- Centralize repeated color choices as theme tokens or CSS variables.
- Prefer reusable components over duplicated markup.
- Avoid excessive arbitrary values.
- Use responsive utility classes consistently.
- Keep global styles minimal.
- Confirm the installed Tailwind version and follow its matching official documentation.

## 12. Design acceptance checklist

- [ ] Navy/white visual identity is consistent.
- [ ] Typography hierarchy is clear.
- [ ] Layout works at mobile, tablet, and desktop widths.
- [ ] Project cards are consistent.
- [ ] All links and buttons have interaction states.
- [ ] Keyboard focus is visible.
- [ ] Text contrast is checked.
- [ ] Reduced-motion preference is respected.
- [ ] Images are optimized and have correct alt text.
- [ ] No decorative effect obscures content.
