"use client";

import { useState, useEffect } from "react";
import { Code2, Cpu, Briefcase, GraduationCap, CheckCircle2, Award, ExternalLink } from "lucide-react";
import { Locale, Messages, t } from "@/lib/i18n";
import { projects } from "@/content/projects";
import { skillCategories } from "@/content/skills";
import { experiences, educations, certifications } from "@/content/experience";
import { isValidExternalUrl } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { ProjectCard } from "@/components/sections/ProjectsSection";

interface PortfolioShowcaseTabsProps {
  locale: Locale;
  messages: Messages;
}

type TabKey = "projects" | "skills" | "experience" | "education";

export function PortfolioShowcaseTabs({
  locale,
  messages,
}: PortfolioShowcaseTabsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("projects");

  useEffect(() => {
    const syncTabWithHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === messages.anchors.skills) setActiveTab("skills");
      else if (hash === messages.anchors.experience) setActiveTab("experience");
      else if (hash === messages.anchors.education) setActiveTab("education");
      else if (hash === messages.anchors.projects) setActiveTab("projects");
    };
    syncTabWithHash();
    window.addEventListener("hashchange", syncTabWithHash);
    return () => window.removeEventListener("hashchange", syncTabWithHash);
  }, [messages.anchors]);

  const tabs: Array<{ id: TabKey; label: string; count: number; icon: typeof Code2 }> = [
    {
      id: "projects",
      label: messages.nav.projects,
      count: projects.length,
      icon: Code2,
    },
    {
      id: "skills",
      label: messages.nav.skills,
      count: skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0),
      icon: Cpu,
    },
    {
      id: "experience",
      label: messages.nav.experience,
      count: experiences.length,
      icon: Briefcase,
    },
    {
      id: "education",
      label: messages.nav.education,
      count: educations.length,
      icon: GraduationCap,
    },
  ];

  return (
    <section
      id={messages.anchors.projects}
      className="border-b border-border-token bg-surface-alt py-16 sm:py-24"
    >
      {/* Hidden semantic anchors so navbar direct jumps (#keahlian, #pengalaman, #pendidikan) always resolve */}
      <span id={messages.anchors.skills} className="sr-only" />
      <span id={messages.anchors.experience} className="sr-only" />
      <span id={messages.anchors.education} className="sr-only" />

      <Container>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow={messages.projects.eyebrow}
            title={locale === "id" ? "Portofolio & Rekam Jejak" : "Portfolio Showcase"}
            subtitle={messages.projects.subtitle}
          />
          <div className="mb-10 md:mb-12">
            <ButtonLink href={`/${locale}/projects`} variant="outline">
              <span>{messages.projects.viewAll}</span>
            </ButtonLink>
          </div>
        </div>

        {/* Interactive Showcase Tab Bar (inspired by alfari.my.id) */}
        <div
          role="tablist"
          aria-label="Portfolio Showcase Categories"
          className="mb-10 grid grid-cols-2 gap-2.5 rounded-2xl border border-border-token bg-navy p-2 sm:grid-cols-4"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-2.5 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky ${
                  isActive
                    ? "bg-primary text-white shadow-sm"
                    : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 font-mono text-xs ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-slate-800 text-slate-300"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Projects Grid */}
        {activeTab === "projects" && (
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
        )}

        {/* Tab 2: Tech Stack & Skills Grid */}
        {activeTab === "skills" && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {skillCategories.map((category) => (
              <div
                key={category.id}
                className="rounded-2xl border border-border-token bg-surface p-6 shadow-xs transition-all duration-200 hover:border-primary"
              >
                <h3 className="text-lg font-bold text-navy">
                  {t(category.title, locale)}
                </h3>

                <ul className="mt-5 space-y-4">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-start gap-3 rounded-xl border border-border-token bg-surface-alt p-3.5"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-sm font-bold text-navy">
                          {skill.name}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-muted">
                          {t(skill.evidence, locale)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Work Experience */}
        {activeTab === "experience" && (
          <div className="space-y-5">
            {experiences.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-border-token bg-surface p-6 sm:p-8 shadow-xs transition-all duration-200 hover:border-primary"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-primary">
                      <Briefcase className="h-4 w-4" aria-hidden="true" />
                      <span className="text-sm font-semibold">
                        {item.organization}
                      </span>
                    </div>
                    <h3 className="mt-1 text-xl font-bold text-navy">
                      {t(item.role, locale)}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <Badge>{t(item.employmentType, locale)}</Badge>
                    <span className="font-mono text-xs font-medium text-muted">
                      {t(item.period, locale)}
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
                      {messages.experience.responsibilitiesLabel}
                    </h4>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground">
                      {item.responsibilities.map((resp, idx) => (
                        <li key={idx}>{t(resp, locale)}</li>
                      ))}
                    </ul>
                  </div>

                  {item.achievements.length > 0 && (
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
                        {messages.experience.achievementsLabel}
                      </h4>
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground">
                        {item.achievements.map((ach, idx) => (
                          <li key={idx}>{t(ach, locale)}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Tab 4: Education & Credentials */}
        {activeTab === "education" && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {educations.map((edu) => (
              <article
                key={edu.id}
                className="rounded-2xl border border-border-token bg-surface p-6 sm:p-8 shadow-xs transition-all duration-200 hover:border-primary"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-primary">
                    <GraduationCap className="h-4 w-4" aria-hidden="true" />
                    {edu.period}
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-bold text-navy">
                  {edu.institution}
                </h3>
                <p className="mt-1 text-sm font-semibold text-primary">
                  {t(edu.degree, locale)} — {t(edu.field, locale)}
                </p>
                {edu.notes && (
                  <p className="mt-4 rounded-xl bg-surface-alt p-4 text-sm leading-relaxed text-foreground">
                    {t(edu.notes, locale)}
                  </p>
                )}
              </article>
            ))}

            {certifications.map((cert) => (
              <article
                key={cert.id}
                className="rounded-2xl border border-border-token bg-surface p-6 shadow-xs"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="flex items-center gap-2 text-base font-bold text-navy">
                    <Award className="h-4 w-4 text-primary" aria-hidden="true" />
                    {cert.name}
                  </h4>
                  <span className="font-mono text-xs text-muted">{cert.date}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                {isValidExternalUrl(cert.credentialUrl) && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    <span>{messages.education.viewCredential}</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
              </article>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
