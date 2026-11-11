"use client";

import { useState, FormEvent } from "react";
import { Download, Mail, Send, User, MessageSquare, MapPin, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import { Locale, Messages, t } from "@/lib/i18n";
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
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      locale === "id"
        ? `Pesan Portofolio dari ${name}`
        : `Portfolio Inquiry from ${name}`
    );
    const body = encodeURIComponent(
      `${message}\n\n---\n${locale === "id" ? "Dari" : "From"}: ${name} (${senderEmail})`
    );
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id={messages.anchors.contact}
      className="relative py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow={messages.contact.eyebrow}
          title={locale === "id" ? "Hubungi Saya" : "Contact Me"}
          subtitle={messages.contact.subtitle}
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Panel: Glass Message Panel (alfari.my.id .contact-message-panel) */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 lg:col-span-7">
            <h3 className="text-2xl font-bold text-sky">
              {locale === "id" ? "Hubungi" : "Get in Touch"}
            </h3>
            <p className="mt-1 text-sm text-muted">
              {locale === "id"
                ? "Ada peluang kerja atau proyek yang ingin didiskusikan? Langsung kirim pesan di bawah..."
                : "Have a role or project to discuss? Send a direct message below..."}
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-medium text-foreground"
                >
                  {locale === "id" ? "Nama" : "Name"}
                </label>
                <div className="relative mt-1.5 flex items-center">
                  <User
                    className="pointer-events-none absolute left-3.5 h-4 w-4 text-muted"
                    aria-hidden="true"
                  />
                  <input
                    id="contact-name"
                    type="text"
                    required
                    maxLength={100}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={locale === "id" ? "Nama Anda" : "Your Name"}
                    className="w-full rounded-xl border border-border-token bg-white/5 py-3 pr-4 pl-10 text-sm text-foreground placeholder:text-muted/60 focus:border-sky focus:outline-2 focus:outline-offset-0 focus:outline-sky"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-medium text-foreground"
                >
                  Email
                </label>
                <div className="relative mt-1.5 flex items-center">
                  <Mail
                    className="pointer-events-none absolute left-3.5 h-4 w-4 text-muted"
                    aria-hidden="true"
                  />
                  <input
                    id="contact-email"
                    type="email"
                    required
                    maxLength={200}
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder={locale === "id" ? "Email Anda" : "Your Email"}
                    className="w-full rounded-xl border border-border-token bg-white/5 py-3 pr-4 pl-10 text-sm text-foreground placeholder:text-muted/60 focus:border-sky focus:outline-2 focus:outline-offset-0 focus:outline-sky"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-foreground"
                >
                  {locale === "id" ? "Pesan" : "Message"}
                </label>
                <div className="relative mt-1.5">
                  <MessageSquare
                    className="pointer-events-none absolute top-3.5 left-3.5 h-4 w-4 text-muted"
                    aria-hidden="true"
                  />
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    maxLength={2000}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={locale === "id" ? "Pesan Anda" : "Your Message"}
                    className="w-full rounded-xl border border-border-token bg-white/5 py-3 pr-4 pl-10 text-sm text-foreground placeholder:text-muted/60 focus:border-sky focus:outline-2 focus:outline-offset-0 focus:outline-sky"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="glow-btn-primary inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                <span>{messages.contact.emailCta}</span>
              </button>
            </form>
          </div>

          {/* Right Panel: FIND ME Social Cards & CV Card (alfari.my.id .contact-find-me) */}
          <div className="glass-card flex flex-col justify-between rounded-2xl p-6 sm:p-8 lg:col-span-5">
            <div>
              <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-foreground">
                FIND ME
              </h3>
              <p className="mt-1 text-sm text-muted">
                {profileData.name} — {t(profileData.title, locale)}
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href={`mailto:${profileData.email}`}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-border-token bg-white/5 p-4 transition-all hover:-translate-y-0.5 hover:border-sky hover:bg-primary/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
                >
                  <div className="flex items-center gap-3.5 overflow-hidden">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border-token bg-white/5 text-sky">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="overflow-hidden">
                      <p className="text-sm font-bold text-foreground">Email</p>
                      <p className="truncate font-mono text-xs text-muted">
                        {profileData.email}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted group-hover:text-sky" aria-hidden="true" />
                </a>

                <div className="flex items-center gap-3.5 rounded-xl border border-border-token bg-white/5 p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border-token bg-white/5 text-sky">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      {messages.hero.locationLabel}
                    </p>
                    <p className="text-xs text-muted">
                      {t(profileData.location, locale)}
                    </p>
                  </div>
                </div>

                {isValidExternalUrl(profileData.githubUrl) && (
                  <a
                    href={profileData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 rounded-xl border border-border-token bg-white/5 p-4 transition-all hover:-translate-y-0.5 hover:border-sky hover:bg-primary/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border-token bg-white/5 text-sky">
                        <GithubIcon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-foreground">GitHub</p>
                        <p className="font-mono text-xs text-muted">@janpiter16</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted group-hover:text-sky" aria-hidden="true" />
                  </a>
                )}

                {isValidExternalUrl(profileData.linkedinUrl) && (
                  <a
                    href={profileData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 rounded-xl border border-border-token bg-white/5 p-4 transition-all hover:-translate-y-0.5 hover:border-sky hover:bg-primary/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border-token bg-white/5 text-sky">
                        <LinkedinIcon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-foreground">LinkedIn</p>
                        <p className="text-xs text-muted">Janpiter Pandapotan Purba</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted group-hover:text-sky" aria-hidden="true" />
                  </a>
                )}

                {isValidExternalUrl(profileData.instagramUrl) && (
                  <a
                    href={profileData.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 rounded-xl border border-border-token bg-white/5 p-4 transition-all hover:-translate-y-0.5 hover:border-sky hover:bg-primary/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border-token bg-white/5 text-sky">
                        <InstagramIcon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-foreground">Instagram</p>
                        <p className="font-mono text-xs text-muted">@janpiterprb_16</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted group-hover:text-sky" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>

            <div className="mt-8 border-t border-border-token pt-6">
              <ButtonLink
                href={profileData.cvPath[locale]}
                variant="primary"
                download
                className="w-full"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span>{messages.contact.downloadCvCta}</span>
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
