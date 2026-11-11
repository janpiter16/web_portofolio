import { Locale, Messages, t } from "@/lib/i18n";
import { profileData } from "@/content/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface AboutProps {
  locale: Locale;
  messages: Messages;
}

export function About({ locale, messages }: AboutProps) {
  return (
    <section
      id={messages.anchors.about}
      className="border-b border-border-token bg-surface-alt py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow={messages.about.eyebrow}
          title={messages.about.title}
          subtitle={messages.about.subtitle}
        />

        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-foreground sm:text-lg">
          {profileData.about.map((paragraph, index) => (
            <p key={index}>{t(paragraph, locale)}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}
