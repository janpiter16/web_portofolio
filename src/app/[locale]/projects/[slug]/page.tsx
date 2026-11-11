import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { isValidLocale, getMessages, locales, t } from "@/lib/i18n";
import { getProjectBySlug, projects } from "@/content/projects";
import { isValidExternalUrl } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";

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

  return (
    <article className="py-16 sm:py-24">
      <Container>
        <div className="mb-8">
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>{messages.projects.backToProjects}</span>
          </Link>
        </div>

        <header className="max-w-3xl">
          <h1 className="text-[32px] font-bold leading-tight tracking-tight text-navy sm:text-[44px]">
            {t(project.title, locale)}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
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
        </header>

        <div className="relative mt-10 aspect-[16/10] w-full max-w-4xl overflow-hidden rounded-2xl border border-border-token bg-surface-alt">
          <Image
            src={project.image}
            alt={t(project.imageAlt, locale)}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <aside className="space-y-6 lg:col-span-4">
            <div className="rounded-xl border border-border-token bg-surface-alt p-6">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted">
                {labels.role}
              </h2>
              <p className="mt-2 text-base font-bold text-navy">
                {t(project.role, locale)}
              </p>

              <h2 className="mt-6 font-mono text-xs font-semibold uppercase tracking-wider text-muted">
                {labels.technologies}
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} className="bg-surface">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-8 lg:col-span-8">
            <section className="rounded-xl border border-border-token bg-surface p-6 sm:p-8">
              <h2 className="text-xl font-bold text-navy">{labels.problem}</h2>
              <p className="mt-3 text-base leading-relaxed text-foreground">
                {t(project.problem, locale)}
              </p>

              <h2 className="mt-8 text-xl font-bold text-navy">{labels.objective}</h2>
              <p className="mt-3 text-base leading-relaxed text-foreground">
                {t(project.objective, locale)}
              </p>
            </section>

            <section className="rounded-xl border border-border-token bg-surface p-6 sm:p-8">
              <h2 className="text-xl font-bold text-navy">{labels.contribution}</h2>
              <p className="mt-3 text-base leading-relaxed text-foreground">
                {t(project.contribution, locale)}
              </p>

              <h2 className="mt-8 text-xl font-bold text-navy">{labels.approach}</h2>
              <p className="mt-3 text-base leading-relaxed text-foreground">
                {t(project.approach, locale)}
              </p>
            </section>

            <section className="rounded-xl border border-border-token bg-surface p-6 sm:p-8">
              <h2 className="text-xl font-bold text-navy">{labels.features}</h2>
              <ul className="mt-4 space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-1 h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="text-base leading-relaxed text-foreground">
                      {t(feature, locale)}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-xl border border-border-token bg-surface p-6 sm:p-8">
              <h2 className="text-xl font-bold text-navy">{labels.challenge}</h2>
              <p className="mt-3 text-base leading-relaxed text-foreground">
                {t(project.challenge, locale)}
              </p>

              <h2 className="mt-8 text-xl font-bold text-navy">{labels.solution}</h2>
              <p className="mt-3 text-base leading-relaxed text-foreground">
                {t(project.solution, locale)}
              </p>

              <h2 className="mt-8 text-xl font-bold text-navy">{labels.outcome}</h2>
              <p className="mt-3 text-base leading-relaxed text-foreground">
                {t(project.outcome, locale)}
              </p>
            </section>
          </div>
        </div>
      </Container>
    </article>
  );
}
