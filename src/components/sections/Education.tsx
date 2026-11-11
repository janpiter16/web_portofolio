import { Award, ExternalLink, GraduationCap } from "lucide-react";
import { Locale, Messages, t } from "@/lib/i18n";
import { educations, certifications } from "@/content/experience";
import { isValidExternalUrl } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface EducationProps {
  locale: Locale;
  messages: Messages;
}

export function Education({ locale, messages }: EducationProps) {
  return (
    <section
      id={messages.anchors.education}
      className="border-b border-border-token bg-surface py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow={messages.education.eyebrow}
          title={messages.education.title}
          subtitle={messages.education.subtitle}
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className={certifications.length > 0 ? "lg:col-span-7" : "lg:col-span-12"}>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-navy">
              <GraduationCap className="h-5 w-5 text-primary" aria-hidden="true" />
              <span>{messages.education.educationHeading}</span>
            </h3>

            <div className="space-y-4">
              {educations.map((edu) => (
                <article
                  key={edu.id}
                  className="rounded-xl border border-border-token bg-surface-alt p-6"
                >
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <h4 className="text-base font-bold text-navy">
                      {edu.institution}
                    </h4>
                    <span className="font-mono text-xs text-muted">
                      {edu.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-primary">
                    {t(edu.degree, locale)} — {t(edu.field, locale)}
                  </p>
                  {edu.notes && (
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {t(edu.notes, locale)}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>

          {certifications.length > 0 && (
            <div className="lg:col-span-5">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-navy">
                <Award className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>{messages.education.certificationHeading}</span>
              </h3>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <article
                    key={cert.id}
                    className="rounded-xl border border-border-token bg-surface-alt p-6"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-base font-bold text-navy">{cert.name}</h4>
                      <span className="font-mono text-xs text-muted">
                        {cert.date}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted">{cert.issuer}</p>

                    {isValidExternalUrl(cert.credentialUrl) && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
                      >
                        <span>{messages.education.viewCredential}</span>
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
