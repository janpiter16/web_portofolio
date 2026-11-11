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
    <article className="flex flex-col overflow-hidden rounded-xl border border-border-token bg-surface shadow-xs transition-shadow duration-200 hover:shadow-md">
      <div className="relative aspect-[16/10] w-full border-b border-border-token bg-surface-alt">
        <Image
          src={project.image}
          alt={t(project.imageAlt, locale)}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold leading-snug text-navy">
          <Link
            href={detailHref}
            className="hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
          >
            {t(project.title, locale)}
          </Link>
        </h3>

        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
          {t(project.summary, locale)}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border-token pt-4">
          <Link
            href={detailHref}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
          >
            <span>{messages.projects.viewDetails}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <div className="flex items-center gap-3">
            {isValidExternalUrl(project.repositoryUrl) && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${messages.projects.sourceCode}: ${t(project.title, locale)}`}
                className="inline-flex items-center gap-1 text-xs font-medium text-muted hover:text-navy transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
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
                className="inline-flex items-center gap-1 text-xs font-medium text-muted hover:text-navy transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
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
      className="border-b border-border-token bg-surface-alt py-16 sm:py-24"
    >
      <Container>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow={messages.projects.eyebrow}
            title={messages.projects.title}
            subtitle={messages.projects.subtitle}
          />
          <div className="mb-10 md:mb-12">
            <ButtonLink href={`/${locale}/projects`} variant="outline">
              <span>{messages.projects.viewAll}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>

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
      </Container>
    </section>
  );
}
