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
    <section className="relative overflow-hidden border-b border-border-token bg-navy py-16 text-white sm:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-3.5 py-1.5">
              <span className="h-2 w-2 rounded-full bg-sky" aria-hidden="true" />
              <span className="font-mono text-xs font-medium text-slate-200">
                {t(profileData.availability, locale)}
              </span>
            </div>

            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-sky">
              {messages.hero.eyebrow}
            </p>

            <h1 className="mt-2 text-[36px] font-bold leading-[1.1] tracking-tight text-white sm:text-[54px]">
              {profileData.name}
            </h1>

            <div className="mt-3 min-h-[2.25rem]">
              <TypewriterRoles roles={profileData.roles[locale]} />
            </div>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {t(profileData.summary, locale)}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-300">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-sky" aria-hidden="true" />
                <span>{t(profileData.location, locale)}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Award className="h-4 w-4 text-sky" aria-hidden="true" />
                <span>D4 Teknik Informatika — IPK 3,90</span>
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

            <div className="mt-8 flex items-center gap-3">
              {profileData.email && (
                <a
                  href={`mailto:${profileData.email}`}
                  aria-label={`Email ${profileData.name}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/80 text-slate-200 hover:border-sky hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
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
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/80 text-slate-200 hover:border-sky hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
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
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/80 text-slate-200 hover:border-sky hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {/* Interactive Developer Badge Card (inspired by alfari.my.id Lanyard ID Card) */}
          <div className="lg:col-span-5">
            <div className="mx-auto max-w-sm rounded-3xl border border-slate-700 bg-slate-900/90 p-6 shadow-xl transition-transform duration-300 hover:-translate-y-1">
              {/* Lanyard Clip Slot */}
              <div className="mx-auto mb-5 h-2.5 w-16 rounded-full border border-slate-700 bg-slate-950" aria-hidden="true" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary font-mono text-sm font-bold text-white">
                    JP
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Janpiter P. Purba</p>
                    <p className="font-mono text-xs text-sky">ID • DEV-2026</p>
                  </div>
                </div>
                <Terminal className="h-5 w-5 text-sky" aria-hidden="true" />
              </div>

              <dl className="mt-5 space-y-3.5 font-mono text-xs">
                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
                  <dt className="text-slate-400">ROLE</dt>
                  <dd className="mt-1 font-semibold text-white">
                    Backend & Fullstack Developer
                  </dd>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
                  <dt className="text-slate-400">CORE STACK</dt>
                  <dd className="mt-1 text-sky">
                    Laravel • Python Flask • React • MySQL & PostgreSQL
                  </dd>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
                    <dt className="text-slate-400">DEGREE</dt>
                    <dd className="mt-1 font-semibold text-white">D4 RPL</dd>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
                    <dt className="text-slate-400">GPA / IPK</dt>
                    <dd className="mt-1 font-semibold text-sky">3.90 / 4.00</dd>
                  </div>
                </div>
              </dl>

              <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-4 font-mono text-[11px] text-slate-400">
                <span>Politeknik Negeri Indramayu</span>
                <span className="text-sky">VERIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
