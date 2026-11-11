import { ArrowRight, ArrowUpRight, Download, Mail, MapPin, Award } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import { Locale, Messages, t } from "@/lib/i18n";
import { profileData } from "@/content/profile";
import { isValidExternalUrl } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { TypewriterRoles } from "@/components/ui/TypewriterRoles";
import { BouncingLanyardCard } from "@/components/ui/BouncingLanyardCard";
import { MotionFadeIn } from "@/components/ui/MotionSection";

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
          <div className="hero-stagger lg:col-span-7">
            {/* Status Pill with Pulsing Cyan Dot (alfari.my.id style) */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-primary/50 bg-primary/15 px-4 py-1.5 backdrop-blur-md">
              <span className="cyan-dot h-2 w-2 rounded-full animate-pulse" aria-hidden="true" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-sky">
                {t(profileData.availability, locale)}
              </span>
            </div>

            {/* Dual-Line Headline ("Welcome to" + "My Portfolio") */}
            <div className="flex flex-col gap-0.5">
              <span className="text-gradient-alfari text-3xl font-extrabold leading-[1.08] tracking-tight min-[420px]:text-4xl sm:text-5xl lg:text-[60px] xl:text-[64px]">
                {locale === "id" ? "Selamat Datang di" : "Welcome to"}
              </span>
              <h1 className="text-3xl font-extrabold leading-[1.08] tracking-tight text-foreground min-[420px]:text-4xl sm:text-5xl lg:text-[60px] xl:text-[64px]">
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

            {/* FIND ME Connect Dock */}
            <div className="mt-9 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-sky">
                  FIND ME
                </span>
                <span className="h-px w-10 bg-gradient-to-r from-sky/60 to-transparent" aria-hidden="true" />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {isValidExternalUrl(profileData.githubUrl) && (
                  <a
                    href={profileData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="group inline-flex items-center gap-2 rounded-xl border border-border-token bg-white/5 px-3 py-2 text-xs font-medium text-foreground transition-all duration-200 hover:-translate-y-1 hover:border-sky hover:bg-primary/20 hover:text-sky focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-md bg-white/5 text-muted transition-colors group-hover:text-sky" aria-hidden="true">
                      <GithubIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-mono text-xs font-semibold">GitHub</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky" aria-hidden="true" />
                  </a>
                )}
                {isValidExternalUrl(profileData.linkedinUrl) && (
                  <a
                    href={profileData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="group inline-flex items-center gap-2 rounded-xl border border-border-token bg-white/5 px-3 py-2 text-xs font-medium text-foreground transition-all duration-200 hover:-translate-y-1 hover:border-sky hover:bg-primary/20 hover:text-sky focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-md bg-white/5 text-muted transition-colors group-hover:text-sky" aria-hidden="true">
                      <LinkedinIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-mono text-xs font-semibold">LinkedIn</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky" aria-hidden="true" />
                  </a>
                )}
                {isValidExternalUrl(profileData.instagramUrl) && (
                  <a
                    href={profileData.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Profile"
                    className="group inline-flex items-center gap-2 rounded-xl border border-border-token bg-white/5 px-3 py-2 text-xs font-medium text-foreground transition-all duration-200 hover:-translate-y-1 hover:border-sky hover:bg-primary/20 hover:text-sky focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-md bg-white/5 text-muted transition-colors group-hover:text-sky" aria-hidden="true">
                      <InstagramIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-mono text-xs font-semibold">Instagram</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky" aria-hidden="true" />
                  </a>
                )}
                {profileData.email && (
                  <a
                    href={`mailto:${profileData.email}`}
                    aria-label={`Email ${profileData.name}`}
                    className="group inline-flex items-center gap-2 rounded-xl border border-border-token bg-white/5 px-3 py-2 text-xs font-medium text-foreground transition-all duration-200 hover:-translate-y-1 hover:border-sky hover:bg-primary/20 hover:text-sky focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-md bg-white/5 text-muted transition-colors group-hover:text-sky" aria-hidden="true">
                      <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs font-semibold">Email</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Bouncing Hanging Lanyard ID Card */}
          <MotionFadeIn delay={0.2} className="lg:col-span-5">
            <BouncingLanyardCard />
          </MotionFadeIn>
        </div>
      </Container>
    </section>
  );
}
