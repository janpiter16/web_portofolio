import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ChevronRight, Code2, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { isValidLocale, getMessages, locales, t } from "@/lib/i18n";
import { getProjectBySlug, projects } from "@/content/projects";
import { isValidExternalUrl } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((project) => ({
      locale,
      slug: project.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) return {};

  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: t(project.title, locale),
    description: t(project.summary, locale),
    alternates: {
      canonical: `/${locale}/projects/${project.slug}`,
      languages: {
        id: `/id/projects/${project.slug}`,
        en: `/en/projects/${project.slug}`,
      },
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  const messages = getMessages(locale);
  const labels = messages.projects.detailLabels;
  const relatedProjects = projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 2);

  return (
    <article className="pt-28 pb-20 sm:pt-32 sm:pb-28">
      <Container>
        {/* Breadcrumbs (inspired by alfari.my.id .project-detail-breadcrumbs) */}
        <div className="mb-10 flex flex-wrap items-center gap-3 text-sm">
          <Link
            href={`/${locale}#${messages.anchors.projects}`}
            className="inline-flex items-center gap-2 rounded-xl border border-border-token bg-white/5 px-4 py-2 font-semibold text-foreground hover:border-sky hover:text-sky transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
          >
            <ArrowLeft className="h-4 w-4 text-sky" aria-hidden="true" />
            <span>{locale === "id" ? "Kembali" : "Back"}</span>
          </Link>

          <span className="text-muted">{messages.nav.projects}</span>
          <ChevronRight className="h-4 w-4 text-muted" aria-hidden="true" />
          <span className="font-semibold text-foreground">
            {t(project.title, locale)}
          </span>
        </div>

        {/* Hero Split Layout (Copy & Tech Left | Preview Frame Right) */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h1 className="text-gradient-silver text-[32px] font-extrabold leading-tight tracking-tight sm:text-[44px]">
              {t(project.title, locale)}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {t(project.description, locale)}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {isValidExternalUrl(project.demoUrl) && (
                <ButtonLink href={project.demoUrl!} variant="primary" external>
                  <span>{messages.projects.liveDemo}</span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
              )}
              {isValidExternalUrl(project.repositoryUrl) && (
                <ButtonLink href={project.repositoryUrl!} variant="outline" external>
                  <GithubIcon className="h-4 w-4" />
                  <span>{messages.projects.sourceCode}</span>
                </ButtonLink>
              )}
            </div>

            <div className="mt-8 rounded-2xl border border-border-token bg-white/5 p-6">
              <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                <Code2 className="h-4 w-4 text-sky" aria-hidden="true" />
                <span>
                  {labels.role}:{" "}
                  <span className="text-sky">{t(project.role, locale)}</span>
                </span>
              </div>

              <h2 className="mt-5 font-mono text-xs font-bold uppercase tracking-wider text-muted">
                {labels.technologies}
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="glass-card overflow-hidden rounded-2xl p-3">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border-token bg-surface">
                <Image
                  src={project.image}
                  alt={t(project.imageAlt, locale)}
                  fill
                  sizes="100vw"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Interactive System Architecture Pipeline (Point 2) */}
        <ArchitectureDiagram nodes={project.architecture} locale={locale} />

        {/* Detailed Case Study Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <section className="glass-card rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-sky">{labels.problem}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {t(project.problem, locale)}
            </p>

            <h2 className="mt-6 text-xl font-bold text-sky">{labels.objective}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {t(project.objective, locale)}
            </p>
          </section>

          <section className="glass-card rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-sky">{labels.contribution}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {t(project.contribution, locale)}
            </p>

            <h2 className="mt-6 text-xl font-bold text-sky">{labels.approach}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {t(project.approach, locale)}
            </p>
          </section>

          <section className="glass-card rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-sky">{labels.features}</h2>
            <ul className="mt-4 space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-1 h-4 w-4 shrink-0 text-sky"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-muted sm:text-base">
                    {t(feature, locale)}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="glass-card rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-sky">{labels.challenge}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {t(project.challenge, locale)}
            </p>

            <h2 className="mt-6 text-xl font-bold text-sky">{labels.solution}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {t(project.solution, locale)}
            </p>

            <h2 className="mt-6 text-xl font-bold text-sky">{labels.outcome}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {t(project.outcome, locale)}
            </p>
          </section>
        </div>

        {relatedProjects.length > 0 && (
          <div className="mt-16 border-t border-border-token pt-12">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-2xl font-bold text-foreground">
                {locale === "id" ? "Proyek Lainnya" : "Other Projects"}
              </h2>
              <Link
                href={`/${locale}/projects`}
                className="text-sm font-semibold text-sky hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky rounded-sm"
              >
                {messages.projects.viewAll} →
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/${locale}/projects/${rel.slug}`}
                  className="glass-card group rounded-2xl p-6 transition-all hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
                >
                  <h3 className="text-lg font-bold text-foreground group-hover:text-sky transition-colors">
                    {t(rel.title, locale)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t(rel.summary, locale)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </article>
  );
}
