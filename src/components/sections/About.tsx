import Image from "next/image";
import { Code2, Mail, Sparkles, Award, Layers, Cpu, Briefcase } from "lucide-react";
import { Locale, Messages, t } from "@/lib/i18n";
import { profileData } from "@/content/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

interface AboutProps {
  locale: Locale;
  messages: Messages;
}

export function About({ locale, messages }: AboutProps) {
  const stats = [
    {
      value: "3.90 / 4.00",
      label: locale === "id" ? "IPK Sarjana Terapan (D4 RPL)" : "Applied Bachelor GPA (D4 RPL)",
      sub: "Politeknik Negeri Indramayu",
      icon: Award,
    },
    {
      value: "4+",
      label: locale === "id" ? "Proyek Web, Mobile & ML" : "Web, Mobile & ML Projects",
      sub: locale === "id" ? "Terintegrasi & Teruji" : "Integrated & Delivered",
      icon: Layers,
    },
    {
      value: "1",
      label: locale === "id" ? "Pengalaman Industri" : "Industry Internship",
      sub: "Bandung Techno Park (2025)",
      icon: Briefcase,
    },
    {
      value: "12+",
      label: locale === "id" ? "Teknologi Backend, UI & DB" : "Backend, UI & DB Technologies",
      sub: "Laravel, Flask, React, SQL, Flutter",
      icon: Cpu,
    },
  ];

  return (
    <section
      id={messages.anchors.about}
      className="scroll-entry-section relative py-20 sm:py-28"
    >
      {/* Ambient Cosmic Section Entry Aura */}
      <div
        className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 h-28 w-3/4 max-w-2xl rounded-full bg-gradient-to-r from-transparent via-sky/15 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <Container>
        <SectionHeading
          eyebrow={messages.about.eyebrow}
          title={locale === "id" ? "Tentang Saya" : "About Me"}
          subtitle={messages.about.subtitle}
        />

        {/* 3-Column Stage inspired by alfari.my.id (Intro Left | Portrait Orbit Center | Bio Right) */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Column 1: Greeting + Big Name + Contact Action */}
          <div className="text-center lg:col-span-4 lg:text-left">
            <p className="text-gradient-alfari text-xl font-extrabold tracking-tight sm:text-2xl">
              {locale === "id" ? "Halo, Saya" : "Hi, I'm"}
            </p>
            <h3 className="text-gradient-silver mt-2 text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              Janpiter
              <br />
              Pandapotan Purba
            </h3>
            <p className="mt-4 font-mono text-xs font-semibold uppercase tracking-wider text-sky">
              {t(profileData.title, locale)}
            </p>

            <div className="mt-7">
              <ButtonLink
                href={`/${locale}#${messages.anchors.contact}`}
                variant="primary"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>{locale === "id" ? "Hubungi Saya" : "Contact Me"}</span>
              </ButtonLink>
            </div>
          </div>

          {/* Column 2: Portrait Stage with Cosmic Orbit Rings (alfari.my.id .about-portrait-stage) */}
          <div className="relative flex items-center justify-center py-4 lg:col-span-4">
            {/* Outer & Inner Cosmic Orbit Rings */}
            <div
              className="pointer-events-none absolute h-72 w-72 rounded-full border border-sky/20 sm:h-80 sm:w-80"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute h-60 w-60 rounded-full border border-primary/35 sm:h-64 sm:w-64"
              aria-hidden="true"
            />
            <span
              className="cyan-dot pointer-events-none absolute top-6 right-10 h-2.5 w-2.5 rounded-full"
              aria-hidden="true"
            />
            <span
              className="cyan-dot pointer-events-none absolute bottom-10 left-10 h-2 w-2 rounded-full"
              aria-hidden="true"
            />

            <div className="glass-card group relative z-10 w-full max-w-[290px] overflow-hidden rounded-3xl p-3">
              <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-surface-alt">
                <Image
                  src={profileData.avatar}
                  alt={profileData.name}
                  fill
                  sizes="100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="portrait-fade absolute inset-0" aria-hidden="true" />

                <div className="absolute right-3 bottom-3 left-3 text-center">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/50 bg-surface/85 px-3.5 py-1 font-mono text-xs font-bold text-sky backdrop-blur-md">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>IPK 3,90 / 4.00 • D4 RPL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Biography Paragraphs + View Projects Action */}
          <div className="space-y-4 text-center lg:col-span-4 lg:text-left">
            {profileData.about.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm leading-relaxed text-muted sm:text-base"
              >
                {t(paragraph, locale)}
              </p>
            ))}

            <div className="pt-3">
              <ButtonLink
                href={`/${locale}#${messages.anchors.projects}`}
                variant="outline"
              >
                <Code2 className="h-4 w-4 text-sky" aria-hidden="true" />
                <span>{messages.hero.primaryCta}</span>
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* 4-Card Experience & Impact Stats Grid (alfari.my.id .experience-stats) */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="glass-card flex items-center justify-between gap-4 rounded-2xl p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <div>
                  <p className="text-gradient-alfari font-mono text-3xl font-extrabold tracking-tight sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-sm font-bold text-foreground">
                    {stat.label}
                  </p>
                  <p className="mt-0.5 font-mono text-xs text-muted">
                    {stat.sub}
                  </p>
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/40 bg-primary/15 text-sky">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
