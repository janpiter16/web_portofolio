# GitHub Workflow

## 1. Repository setup

Recommended:
- Repository name: `personal-portfolio`
- Visibility: Public only if all committed content is safe to publish; otherwise start Private.
- Default branch: `main`
- Add README.
- Add Node `.gitignore`.
- Add a license only after deciding how code reuse should be permitted.

## 2. Branch strategy

For a solo portfolio, keep the workflow lightweight:

- `main`: stable, deployable code.
- `feat/<short-name>`: new feature.
- `fix/<short-name>`: bug fix.
- `docs/<short-name>`: documentation updates.

Example:
```bash
git switch -c feat/hero-section
```

Open a Pull Request to `main` when a feature is ready. For a small solo project, direct commits to `main` are possible, but branches and PRs provide useful review history.

## 3. Commit convention

Use clear, imperative messages:

| Prefix | Use |
|---|---|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `style:` | Visual styling |
| `refactor:` | Code restructuring |
| `docs:` | Documentation |
| `chore:` | Maintenance |
| `test:` | Tests |

Examples:
```bash
git add .
git commit -m "feat: add bilingual navigation"
git commit -m "style: improve mobile project cards"
git commit -m "docs: update project setup instructions"
```

## 4. Initial Git commands

Create the repository on GitHub first, then connect the local project:

```bash
git init
git branch -M main
git add .
git commit -m "chore: initialize portfolio project"
git remote add origin https://github.com/USERNAME/personal-portfolio.git
git push -u origin main
```

Replace `USERNAME` with the actual GitHub username. If Git was already initialized by the project generator, do not run `git init` again.

## 5. Daily workflow

```bash
git status
git switch -c feat/section-name

# Make and test changes

git add .
git commit -m "feat: add section name"
git push -u origin feat/section-name
```

Then open a Pull Request, review the diff, wait for CI, and merge when ready.

## 6. GitHub Projects board

Suggested columns:
- Backlog
- Ready
- In Progress
- Review
- Done

Create Issues for work items. Link Issues to Pull Requests and close them when merged.

Suggested initial Issues:
1. Initialize Next.js application.
2. Add design tokens and global styles.
3. Build responsive navigation.
4. Build Hero and About sections.
5. Build Skills and Experience sections.
6. Build Projects listing.
7. Build Project detail page.
8. Add bilingual routing.
9. Add CV and contact links.
10. Add SEO metadata and sitemap.
11. Perform responsive and accessibility QA.
12. Configure Vercel deployment.

## 7. Secrets and `.gitignore`

Never commit:
- `.env`
- `.env.local`
- API keys or access tokens
- Private credentials
- Personal documents not approved for publication
- `node_modules/`
- `.next/`
- build output

Use `.env.example` to document required variable names without real secret values.

If a secret is committed accidentally, removing it in a later commit is not enough. Revoke/rotate the secret immediately and follow GitHub guidance for sensitive data removal.

## 8. Pull Request checklist

- [ ] Scope is clear.
- [ ] No unrelated changes.
- [ ] Lint passes.
- [ ] Type-check passes if configured.
- [ ] Production build passes.
- [ ] Responsive behavior checked.
- [ ] Accessibility basics checked.
- [ ] No secrets or private files.
- [ ] Screenshots added for significant UI changes.
- [ ] Documentation updated where needed.
