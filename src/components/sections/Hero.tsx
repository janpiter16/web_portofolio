import Image from "next/image";
import { ArrowRight, Download, Mail, MapPin, Terminal, Award } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { Locale, Messages, t } from "@/lib/i18n";
import { profileData } from "@/content/profile";
import { isValidExternalUrl } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { TypewriterRoles } from "@/components/ui/TypewriterRoles";

interface HeroProps {
  locale: Locale;
  messages: Messages;
}

export function Hero({ locale, messages }: HeroProps) {
  return (
    <section
      id="home"
      className="relative flex min-h-[90svh] items-center pt-28 pb-16 sm:pt-32 sm:pb-24"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {/* Status Pill with Pulsing Cyan Dot (alfari.my.id style) */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-primary/50 bg-primary/15 px-4 py-1.5 backdrop-blur-md">
              <span className="cyan-dot h-2 w-2 rounded-full animate-pulse" aria-hidden="true" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-sky">
                {t(profileData.availability, locale)}
              </span>
            </div>

            {/* Dual-Line Headline ("Welcome to" + "My Portfolio") */}
            <div className="flex flex-col gap-0.5">
              <span className="text-gradient-alfari text-[42px] font-extrabold leading-[1.05] tracking-tight sm:text-[64px]">
                {locale === "id" ? "Selamat Datang di" : "Welcome to"}
              </span>
              <h1 className="text-[42px] font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-[64px]">
                {locale === "id" ? "Portofolio Saya" : "My Portfolio"}
              </h1>
            </div>

            {/* Typewriter Role Row */}
            <div className="mt-4 flex min-h-[2.25rem] items-center">
              <TypewriterRoles roles={profileData.roles[locale]} />
            </div>

            <p className="mt-5 max-w-xl text-base font-normal leading-relaxed text-muted sm:text-lg">
              {t(profileData.summary, locale)}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-medium text-muted sm:text-sm">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-sky" aria-hidden="true" />
                <span>{t(profileData.location, locale)}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Award className="h-4 w-4 text-sky" aria-hidden="true" />
                <span>Politeknik Negeri Indramayu • IPK 3,90</span>
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href={`/${locale}#${messages.anchors.projects}`} variant="primary">
                <span>{messages.hero.primaryCta}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>

              <ButtonLink
                href={profileData.cvPath[locale]}
                variant="outline"
                download
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span>{messages.hero.secondaryCta}</span>
              </ButtonLink>
            </div>

            {/* FIND ME Row */}
            <div className="mt-9 flex items-center gap-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-sky">
                FIND ME
              </span>
              <div className="flex items-center gap-2.5">
                {profileData.email && (
                  <a
                    href={`mailto:${profileData.email}`}
                    aria-label={`Email ${profileData.name}`}
                    title={profileData.email}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-token bg-white/5 text-sky hover:-translate-y-0.5 hover:border-sky hover:bg-primary/25 hover:text-foreground transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
                {isValidExternalUrl(profileData.githubUrl) && (
                  <a
                    href={profileData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-token bg-white/5 text-sky hover:-translate-y-0.5 hover:border-sky hover:bg-primary/25 hover:text-foreground transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                )}
                {isValidExternalUrl(profileData.linkedinUrl) && (
                  <a
                    href={profileData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-token bg-white/5 text-sky hover:-translate-y-0.5 hover:border-sky hover:bg-primary/25 hover:text-foreground transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Hanging Lanyard ID Card with Portrait */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              {/* Lanyard Strap & Metal Clip */}
              <div className="mx-auto flex flex-col items-center" aria-hidden="true">
                <div className="h-12 w-7 rounded-t-sm border-x border-border-token bg-surface-alt" />
                <div className="h-3.5 w-12 rounded-md border border-border-token bg-slate-800 shadow-sm" />
              </div>

              {/* Glossy Lanyard ID Card */}
              <div className="glass-card group relative -mt-1 rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1.5">
                <div className="mx-auto mb-4 h-2.5 w-16 rounded-full border border-border-token bg-surface" aria-hidden="true" />

                {/* Portrait Photo Window inside ID Badge */}
                <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-border-token bg-surface-alt">
                  <Image
                    src={profileData.avatar}
                    alt={profileData.name}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="portrait-fade absolute inset-0" aria-hidden="true" />

                  <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-primary/50 bg-surface/80 px-2.5 py-1 font-mono text-[10px] font-bold text-sky backdrop-blur-md">
                    <span className="cyan-dot h-1.5 w-1.5 rounded-full" aria-hidden="true" />
                    <span>ID VERIFIED</span>
                  </div>

                  <div className="absolute right-4 bottom-3 left-4 flex items-end justify-between">
                    <div>
                      <p className="text-lg font-extrabold tracking-tight text-foreground">
                        Janpiter P. Purba
                      </p>
                      <p className="font-mono text-xs font-semibold text-sky">
                        Backend & Fullstack Developer
                      </p>
                    </div>
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/50 bg-primary/25 text-sky backdrop-blur-md">
                      <Terminal className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>

                <dl className="mt-4 space-y-2.5 font-mono text-xs">
                  <div className="rounded-xl border border-border-token bg-surface/75 p-3">
                    <dt className="text-[10px] text-muted">CORE STACK</dt>
                    <dd className="mt-0.5 font-semibold text-foreground">
                      Laravel • Python Flask • React • MySQL & PostgreSQL
                    </dd>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="rounded-xl border border-border-token bg-surface/75 p-3">
                      <dt className="text-[10px] text-muted">DEGREE</dt>
                      <dd className="mt-0.5 font-semibold text-foreground">D4 RPL</dd>
                    </div>
                    <div className="rounded-xl border border-border-token bg-surface/75 p-3">
                      <dt className="text-[10px] text-muted">GPA / IPK</dt>
                      <dd className="mt-0.5 font-semibold text-sky">3.90 / 4.00</dd>
                    </div>
                  </div>
                </dl>

                <div className="mt-4 flex items-center justify-between border-t border-border-token pt-3.5 font-mono text-[11px] text-muted">
                  <span>Politeknik Negeri Indramayu</span>
                  <span className="inline-flex items-center gap-1.5 text-sky">
                    <span className="cyan-dot h-1.5 w-1.5 rounded-full" aria-hidden="true" />
                    AVAILABLE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
