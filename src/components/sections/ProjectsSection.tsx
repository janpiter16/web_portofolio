import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { Locale, Messages, t } from "@/lib/i18n";
import { ProjectItem, projects } from "@/content/projects";
import { isValidExternalUrl } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";

interface ProjectCardProps {
  project: ProjectItem;
  locale: Locale;
  messages: Messages;
}

export function ProjectCard({ project, locale, messages }: ProjectCardProps) {
  const detailHref = `/${locale}/projects/${project.slug}`;

  return (
    <article className="glass-card group flex flex-col overflow-hidden rounded-2xl p-4 transition-all duration-200 hover:-translate-y-1">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border-token bg-surface">
        <Image
          src={project.image}
          alt={t(project.imageAlt, locale)}
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col px-2 pt-5 pb-2">
        <h3 className="text-xl font-bold leading-snug text-foreground">
          <Link
            href={detailHref}
            className="hover:text-sky transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky rounded-sm"
          >
            {t(project.title, locale)}
          </Link>
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {t(project.summary, locale)}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-2">
          <Link
            href={detailHref}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-border-token bg-white/5 px-4 py-2 text-sm font-semibold text-foreground hover:border-sky hover:bg-primary/20 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
          >
            <span>{messages.projects.viewDetails}</span>
            <ArrowRight className="h-4 w-4 text-sky" aria-hidden="true" />
          </Link>

          <div className="flex items-center gap-3">
            {isValidExternalUrl(project.repositoryUrl) && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${messages.projects.sourceCode}: ${t(project.title, locale)}`}
                className="inline-flex items-center gap-1 text-xs font-medium text-muted hover:text-sky transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky rounded-sm"
              >
                <GithubIcon className="h-4 w-4" />
                <span>{messages.projects.sourceCode}</span>
              </a>
            )}

            {isValidExternalUrl(project.demoUrl) && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${messages.projects.liveDemo}: ${t(project.title, locale)}`}
                className="inline-flex items-center gap-1 text-xs font-medium text-muted hover:text-sky transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky rounded-sm"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                <span>{messages.projects.liveDemo}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

interface ProjectsSectionProps {
  locale: Locale;
  messages: Messages;
}

export function ProjectsSection({ locale, messages }: ProjectsSectionProps) {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section
      id={messages.anchors.projects}
      className="py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow={messages.projects.eyebrow}
          title={messages.projects.title}
          subtitle={messages.projects.subtitle}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              locale={locale}
              messages={messages}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <ButtonLink href={`/${locale}/projects`} variant="outline">
            <span>{messages.projects.viewAll}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
