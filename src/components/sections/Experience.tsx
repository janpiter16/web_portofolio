import { Briefcase } from "lucide-react";
import { Locale, Messages, t } from "@/lib/i18n";
import { experiences } from "@/content/experience";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

interface ExperienceProps {
  locale: Locale;
  messages: Messages;
}

export function Experience({ locale, messages }: ExperienceProps) {
  return (
    <section
      id={messages.anchors.experience}
      className="border-b border-border-token bg-surface-alt py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow={messages.experience.eyebrow}
          title={messages.experience.title}
          subtitle={messages.experience.subtitle}
        />

        <div className="space-y-6">
          {experiences.map((item) => (
            <article
              key={item.id}
              className="rounded-xl border border-border-token bg-surface p-6 sm:p-8 shadow-xs"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-primary">
                    <Briefcase className="h-4 w-4" aria-hidden="true" />
                    <span className="font-semibold text-sm">{item.organization}</span>
                  </div>
                  <h3 className="mt-1 text-xl font-bold text-navy">
                    {t(item.role, locale)}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <Badge>{t(item.employmentType, locale)}</Badge>
                  <span className="font-mono text-xs font-medium text-muted">
                    {t(item.period, locale)}
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {messages.experience.responsibilitiesLabel}
                  </h4>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx}>{t(resp, locale)}</li>
                    ))}
                  </ul>
                </div>

                {item.achievements.length > 0 && (
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
                      {messages.experience.achievementsLabel}
                    </h4>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground">
                      {item.achievements.map((ach, idx) => (
                        <li key={idx}>{t(ach, locale)}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
