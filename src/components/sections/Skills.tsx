import { CheckCircle2 } from "lucide-react";
import { Locale, Messages, t } from "@/lib/i18n";
import { skillCategories } from "@/content/skills";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface SkillsProps {
  locale: Locale;
  messages: Messages;
}

export function Skills({ locale, messages }: SkillsProps) {
  return (
    <section
      id={messages.anchors.skills}
      className="border-b border-border-token bg-surface py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow={messages.skills.eyebrow}
          title={messages.skills.title}
          subtitle={messages.skills.subtitle}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-xl border border-border-token bg-surface p-6 shadow-xs"
            >
              <h3 className="text-lg font-bold text-navy">
                {t(category.title, locale)}
              </h3>

              <ul className="mt-5 space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {skill.name}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted">
                        {t(skill.evidence, locale)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
