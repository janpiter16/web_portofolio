import Link from "next/link";
import { Mail, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import { Locale, Messages, t } from "@/lib/i18n";
import { profileData } from "@/content/profile";
import { isValidExternalUrl } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { BackToTopButton } from "@/components/ui/BackToTopButton";

interface FooterProps {
  locale: Locale;
  messages: Messages;
}

export function Footer({ locale, messages }: FooterProps) {
  const year = 2026;

  return (
    <footer className="border-t border-border-token bg-surface/90 pt-16 pb-12 backdrop-blur-md">
      <Container>
        {/* 3-Column Top Grid (alfari.my.id inspired) */}
        <div className="grid grid-cols-1 gap-10 pb-12 md:grid-cols-12 md:gap-8">
          {/* Column 1: Brand Logo & Tagline */}
          <div className="md:col-span-6">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2.5 font-bold tracking-tight text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky rounded-full"
            >
              <span className="relative flex h-8 w-8 items-center justify-center rounded-xl border border-primary/50 bg-primary/20 text-sky">
                <Code2 className="h-4 w-4" aria-hidden="true" />
                <span className="cyan-dot absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full" aria-hidden="true" />
              </span>
              <span className="text-base font-bold">JanpiterDev.</span>
            </Link>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              {t(profileData.summary, locale)}
            </p>

            <div className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-sky">
              <span className="cyan-dot h-1.5 w-1.5 rounded-full" aria-hidden="true" />
              <span>{t(profileData.availability, locale)}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-sky">
              {locale === "id" ? "Navigasi Cepat" : "Quick Navigation"}
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href={`/${locale}#home`}
                  className="text-muted hover:text-sky transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky rounded-sm"
                >
                  {locale === "id" ? "Beranda" : "Home"}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}#${messages.anchors.about}`}
                  className="text-muted hover:text-sky transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky rounded-sm"
                >
                  {messages.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}#${messages.anchors.projects}`}
                  className="text-muted hover:text-sky transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky rounded-sm"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/projects`}
                  className="text-muted hover:text-sky transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky rounded-sm"
                >
                  {messages.nav.allProjects}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}#${messages.anchors.contact}`}
                  className="text-muted hover:text-sky transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky rounded-sm"
                >
                  {messages.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect & Social Media */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-sky">
              {locale === "id" ? "Terhubung" : "Connect"}
            </h4>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {profileData.email && (
                <a
                  href={`mailto:${profileData.email}`}
                  aria-label={`Email ${profileData.name}`}
                  title={profileData.email}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-token bg-white/5 text-sky hover:-translate-y-0.5 hover:border-sky hover:bg-primary/20 hover:text-foreground transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
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
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-token bg-white/5 text-sky hover:-translate-y-0.5 hover:border-sky hover:bg-primary/20 hover:text-foreground transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
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
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-token bg-white/5 text-sky hover:-translate-y-0.5 hover:border-sky hover:bg-primary/20 hover:text-foreground transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              )}
              {isValidExternalUrl(profileData.instagramUrl) && (
                <a
                  href={profileData.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-token bg-white/5 text-sky hover:-translate-y-0.5 hover:border-sky hover:bg-primary/20 hover:text-foreground transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
              )}
            </div>

            <p className="mt-4 font-mono text-xs text-muted">
              {profileData.email}
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border-token pt-8 sm:flex-row">
          <div>
            <p className="text-xs text-muted">
              © {year} {profileData.name}. {messages.footer.rights}
            </p>
            <p className="mt-0.5 text-[11px] text-muted/70">
              {messages.footer.builtWith}
            </p>
          </div>

          <BackToTopButton label={messages.footer.backToTop} />
        </div>
      </Container>
    </footer>
  );
}
