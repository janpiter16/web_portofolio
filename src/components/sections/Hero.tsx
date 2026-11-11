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

          {/* Right Column: Interactive Hanging Lanyard ID Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              {/* Lanyard Strap & Metal Clip */}
              <div className="mx-auto flex flex-col items-center" aria-hidden="true">
                <div className="h-10 w-7 rounded-t-sm border-x border-border-token bg-surface-alt" />
                <div className="h-3.5 w-11 rounded-md border border-border-token bg-slate-800 shadow-sm" />
              </div>

              {/* Glossy Lanyard Card */}
              <div className="glass-card relative -mt-1 rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1.5">
                <div className="mx-auto mb-5 h-2.5 w-16 rounded-full border border-border-token bg-surface" aria-hidden="true" />

                <div className="flex items-center justify-between border-b border-border-token pb-4">
                  <div className="flex items-center gap-3">
                    <div className="glow-btn-primary flex h-11 w-11 items-center justify-center rounded-xl font-mono text-sm font-extrabold">
                      JP
                    </div>
                    <div>
                      <p className="text-base font-bold text-foreground">
                        Janpiter P. Purba
                      </p>
                      <p className="font-mono text-xs text-sky">
                        Software Developer
                      </p>
                    </div>
                  </div>
                  <Terminal className="h-5 w-5 text-sky" aria-hidden="true" />
                </div>

                <dl className="mt-5 space-y-3 font-mono text-xs">
                  <div className="rounded-xl border border-border-token bg-surface/75 p-3.5">
                    <dt className="text-muted">SPECIALIZATION</dt>
                    <dd className="mt-1 font-semibold text-foreground">
                      Backend, RESTful API & Fullstack Web
                    </dd>
                  </div>

                  <div className="rounded-xl border border-border-token bg-surface/75 p-3.5">
                    <dt className="text-muted">TECH STACK</dt>
                    <dd className="mt-1 text-sky">
                      Laravel • Python Flask • React • MySQL & PostgreSQL
                    </dd>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-border-token bg-surface/75 p-3.5">
                      <dt className="text-muted">DEGREE</dt>
                      <dd className="mt-1 font-semibold text-foreground">D4 RPL</dd>
                    </div>
                    <div className="rounded-xl border border-border-token bg-surface/75 p-3.5">
                      <dt className="text-muted">GPA / IPK</dt>
                      <dd className="mt-1 font-semibold text-sky">3.90 / 4.00</dd>
                    </div>
                  </div>
                </dl>

                <div className="mt-5 flex items-center justify-between border-t border-border-token pt-4 font-mono text-[11px] text-muted">
                  <span>Politeknik Negeri Indramayu</span>
                  <span className="inline-flex items-center gap-1.5 text-sky">
                    <span className="cyan-dot h-1.5 w-1.5 rounded-full" aria-hidden="true" />
                    ACTIVE
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
