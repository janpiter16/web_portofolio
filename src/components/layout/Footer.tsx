import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import { Locale, Messages } from "@/lib/i18n";
import { profileData } from "@/content/profile";
import { isValidExternalUrl } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

interface FooterProps {
  locale: Locale;
  messages: Messages;
}

export function Footer({ locale, messages }: FooterProps) {
  const year = 2026;

  return (
    <footer className="border-t border-border-token bg-surface/80 py-12 backdrop-blur-md">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Link
            href={`/${locale}`}
            className="text-lg font-bold tracking-tight text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky rounded-sm"
          >
            JanpiterDev.
          </Link>
          <p className="mt-2 text-sm text-muted">
            © {year} {profileData.name}. {messages.footer.rights}
          </p>
          <p className="mt-1 text-xs text-muted/70">{messages.footer.builtWith}</p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <Link
            href={`/${locale}#${messages.anchors.about}`}
            className="text-sm text-muted hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky rounded-sm"
          >
            {messages.nav.about}
          </Link>
          <Link
            href={`/${locale}/projects`}
            className="text-sm text-muted hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky rounded-sm"
          >
            {messages.nav.allProjects}
          </Link>
          <Link
            href={`/${locale}#${messages.anchors.contact}`}
            className="text-sm text-muted hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky rounded-sm"
          >
            {messages.nav.contact}
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {profileData.email && (
            <a
              href={`mailto:${profileData.email}`}
              aria-label={`Email ${profileData.name}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-token bg-white/5 text-sky hover:border-sky hover:bg-primary/20 hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
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
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-token bg-white/5 text-sky hover:border-sky hover:bg-primary/20 hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
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
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-token bg-white/5 text-sky hover:border-sky hover:bg-primary/20 hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
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
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-token bg-white/5 text-sky hover:border-sky hover:bg-primary/20 hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          )}
        </div>
      </Container>
    </footer>
  );
}
