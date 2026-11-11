import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { Locale, Messages, t } from "@/lib/i18n";
import { profileData } from "@/content/profile";
import { isValidExternalUrl } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

interface HeroProps {
  locale: Locale;
  messages: Messages;
}

export function Hero({ locale, messages }: HeroProps) {
  return (
    <section className="border-b border-border-token bg-surface py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border-token bg-surface-alt px-3.5 py-1.5">
              <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
              <span className="font-mono text-xs font-medium text-navy">
                {t(profileData.availability, locale)}
              </span>
            </div>

            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              {messages.hero.eyebrow}
            </p>

            <h1 className="mt-2 text-[36px] font-bold leading-[1.12] tracking-tight text-navy sm:text-[52px]">
              {profileData.name}
            </h1>

            <p className="mt-3 text-xl font-semibold text-primary sm:text-2xl">
              {t(profileData.title, locale)}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {t(profileData.summary, locale)}
            </p>

            <div className="mt-4 flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>
                <strong className="font-medium text-foreground">
                  {messages.hero.locationLabel}:
                </strong>{" "}
                {t(profileData.location, locale)}
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
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-token bg-surface text-navy hover:border-primary hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-token bg-surface text-navy hover:border-primary hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-token bg-surface text-navy hover:border-primary hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-border-token bg-navy p-6 text-white shadow-sm">
              <div className="mb-4 flex items-center gap-2 border-b border-slate-800 pb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-sky" aria-hidden="true" />
                <span className="font-mono text-xs text-slate-300">profile.config.ts</span>
              </div>
              <dl className="space-y-3 font-mono text-xs">
                <div>
                  <dt className="text-slate-400">developer</dt>
                  <dd className="mt-0.5 font-semibold text-white">{profileData.name}</dd>
                </div>
                <div>
                  <dt className="text-slate-400">focus</dt>
                  <dd className="mt-0.5 text-sky">Laravel • Python Flask • React • SQL</dd>
                </div>
                <div>
                  <dt className="text-slate-400">education</dt>
                  <dd className="mt-0.5 text-slate-200">D4 Rekayasa Perangkat Lunak (IPK 3,90)</dd>
                </div>
                <div>
                  <dt className="text-slate-400">locales</dt>
                  <dd className="mt-0.5 text-slate-200">Bahasa Indonesia (/id) & English (/en)</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
