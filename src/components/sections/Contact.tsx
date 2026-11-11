import { Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { Locale, Messages } from "@/lib/i18n";
import { profileData } from "@/content/profile";
import { isValidExternalUrl } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

interface ContactProps {
  locale: Locale;
  messages: Messages;
}

export function Contact({ locale, messages }: ContactProps) {
  return (
    <section
      id={messages.anchors.contact}
      className="bg-surface py-16 sm:py-24"
    >
      <Container>
        <div className="rounded-2xl border border-border-token bg-surface-alt p-8 sm:p-12">
          <SectionHeading
            eyebrow={messages.contact.eyebrow}
            title={messages.contact.title}
            subtitle={messages.contact.subtitle}
          />

          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink href={`mailto:${profileData.email}`} variant="primary">
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>{messages.contact.emailCta}: {profileData.email}</span>
            </ButtonLink>

            <ButtonLink
              href={profileData.cvPath[locale]}
              variant="outline"
              download
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>{messages.contact.downloadCvCta}</span>
            </ButtonLink>
          </div>

          {(isValidExternalUrl(profileData.githubUrl) ||
            isValidExternalUrl(profileData.linkedinUrl)) && (
            <div className="mt-10 border-t border-border-token pt-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
                {messages.contact.profilesHeading}
              </h3>
              <div className="mt-4 flex flex-wrap gap-4">
                {isValidExternalUrl(profileData.githubUrl) && (
                  <a
                    href={profileData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border-token bg-surface px-4 py-2 text-sm font-medium text-navy hover:border-primary hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <GithubIcon className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                )}
                {isValidExternalUrl(profileData.linkedinUrl) && (
                  <a
                    href={profileData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border-token bg-surface px-4 py-2 text-sm font-medium text-navy hover:border-primary hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
