import { ArrowRight, Download, Mail, MapPin, Award } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import { Locale, Messages, t } from "@/lib/i18n";
import { profileData } from "@/content/profile";
import { isValidExternalUrl } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { TypewriterRoles } from "@/components/ui/TypewriterRoles";
import { BouncingLanyardCard } from "@/components/ui/BouncingLanyardCard";

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

            {/* FIND ME Row (Unboxed / Frameless Icons) */}
            <div className="mt-9 flex items-center gap-5">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-sky">
                FIND ME
              </span>
              <span className="h-px w-8 bg-border-token" aria-hidden="true" />
              <div className="flex items-center gap-5">
                {profileData.email && (
                  <a
                    href={`mailto:${profileData.email}`}
                    aria-label={`Email ${profileData.name}`}
                    title={profileData.email}
                    className="inline-flex items-center justify-center text-muted hover:-translate-y-1 hover:scale-110 hover:text-sky transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky"
                  >
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </a>
                )}
                {isValidExternalUrl(profileData.githubUrl) && (
                  <a
                    href={profileData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="inline-flex items-center justify-center text-muted hover:-translate-y-1 hover:scale-110 hover:text-sky transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </a>
                )}
                {isValidExternalUrl(profileData.linkedinUrl) && (
                  <a
                    href={profileData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="inline-flex items-center justify-center text-muted hover:-translate-y-1 hover:scale-110 hover:text-sky transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                )}
                {isValidExternalUrl(profileData.instagramUrl) && (
                  <a
                    href={profileData.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Profile"
                    className="inline-flex items-center justify-center text-muted hover:-translate-y-1 hover:scale-110 hover:text-sky transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky"
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Bouncing Hanging Lanyard ID Card */}
          <div className="lg:col-span-5">
            <BouncingLanyardCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
