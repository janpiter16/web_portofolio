import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { isValidLocale, getMessages, locales } from "@/lib/i18n";
import { projects } from "@/content/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/sections/ProjectsSection";

export const instant = false;

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
    <section className="pt-28 pb-20 sm:pt-32 sm:pb-24">
      <Container>
        <div className="mb-8">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 rounded-xl border border-border-token bg-white/5 px-4 py-2 text-sm font-semibold text-foreground hover:border-sky hover:text-sky transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
          >
            <ArrowLeft className="h-4 w-4 text-sky" aria-hidden="true" />
            <span>{messages.projects.backToHome}</span>
          </Link>
        </div>

        <SectionHeading
          eyebrow={messages.projects.eyebrow}
          title={messages.projects.pageTitle}
          subtitle={messages.projects.pageSubtitle}
          centered={false}
        />

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
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
