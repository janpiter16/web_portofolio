import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { isValidLocale, getMessages, locales } from "@/lib/i18n";
import { projects } from "@/content/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/sections/ProjectsSection";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const messages = getMessages(locale);

  return {
    title: messages.projects.pageTitle,
    description: messages.projects.pageSubtitle,
    alternates: {
      canonical: `/${locale}/projects`,
      languages: {
        id: "/id/projects",
        en: "/en/projects",
      },
    },
  };
}

export default async function ProjectsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getMessages(locale);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="mb-8">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>{messages.projects.backToHome}</span>
          </Link>
        </div>

        <SectionHeading
          eyebrow={messages.projects.eyebrow}
          title={messages.projects.pageTitle}
          subtitle={messages.projects.pageSubtitle}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
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
