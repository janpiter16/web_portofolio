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
import { MotionFadeIn } from "@/components/ui/MotionSection";

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
      className="scroll-entry-section relative py-20 sm:py-28"
    >
      {/* Ambient Cosmic Section Entry Aura */}
      <div
        className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 h-28 w-3/4 max-w-2xl rounded-full bg-gradient-to-r from-transparent via-sky/15 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <Container>
        <SectionHeading
          eyebrow={messages.contact.eyebrow}
          title={locale === "id" ? "Hubungi Saya" : "Contact Me"}
          subtitle={messages.contact.subtitle}
        />

        <MotionFadeIn className="grid grid-cols-1 gap-8 lg:grid-cols-12">
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

          {/* Right Column: Redesigned FIND ME Cyber Deck */}
          <div className="flex flex-col justify-between py-2 lg:col-span-5 lg:pl-4">
            <div>
              {/* Header with Live Status Beacon */}
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-sky">
                  FIND ME
                </h3>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/50 bg-primary/20 px-2.5 py-0.5 font-mono text-[10px] font-bold text-sky">
                  <span className="cyan-dot h-1.5 w-1.5 rounded-full animate-pulse" aria-hidden="true" />
                  <span>ONLINE & ACTIVE</span>
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">
                {profileData.name} — {t(profileData.title, locale)}
              </p>

              {/* Grid of Interactive Social Cards */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {/* Email Card */}
                {profileData.email && (
                  <a
                    href={`mailto:${profileData.email}`}
                    className="group glass-card relative flex flex-col justify-between rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky/60 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/40 bg-primary/20 text-sky transition-transform duration-300 group-hover:scale-110">
                        <Mail className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky" aria-hidden="true" />
                    </div>
                    <div className="mt-3">
                      <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-muted">
                        Email
                      </p>
                      <p className="truncate font-mono text-xs font-semibold text-foreground group-hover:text-sky transition-colors">
                        {profileData.email}
                      </p>
                    </div>
                  </a>
                )}

                {/* GitHub Card */}
                {isValidExternalUrl(profileData.githubUrl) && (
                  <a
                    href={profileData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group glass-card relative flex flex-col justify-between rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky/60 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/40 bg-primary/20 text-sky transition-transform duration-300 group-hover:scale-110">
                        <GithubIcon className="h-4 w-4" />
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky" aria-hidden="true" />
                    </div>
                    <div className="mt-3">
                      <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-muted">
                        GitHub
                      </p>
                      <p className="font-mono text-xs font-semibold text-foreground group-hover:text-sky transition-colors">
                        @janpiter16
                      </p>
                    </div>
                  </a>
                )}

                {/* LinkedIn Card */}
                {isValidExternalUrl(profileData.linkedinUrl) && (
                  <a
                    href={profileData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group glass-card relative flex flex-col justify-between rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky/60 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/40 bg-primary/20 text-sky transition-transform duration-300 group-hover:scale-110">
                        <LinkedinIcon className="h-4 w-4" />
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky" aria-hidden="true" />
                    </div>
                    <div className="mt-3">
                      <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-muted">
                        LinkedIn
                      </p>
                      <p className="truncate font-mono text-xs font-semibold text-foreground group-hover:text-sky transition-colors">
                        Janpiter Purba
                      </p>
                    </div>
                  </a>
                )}

                {/* Instagram Card */}
                {isValidExternalUrl(profileData.instagramUrl) && (
                  <a
                    href={profileData.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group glass-card relative flex flex-col justify-between rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky/60 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/40 bg-primary/20 text-sky transition-transform duration-300 group-hover:scale-110">
                        <InstagramIcon className="h-4 w-4" />
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky" aria-hidden="true" />
                    </div>
                    <div className="mt-3">
                      <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-muted">
                        Instagram
                      </p>
                      <p className="font-mono text-xs font-semibold text-foreground group-hover:text-sky transition-colors">
                        @janpiterprb_16
                      </p>
                    </div>
                  </a>
                )}
              </div>

              {/* Location Mini Bar */}
              <div className="mt-3.5 flex items-center gap-3 rounded-2xl border border-border-token bg-white/5 p-3.5 text-xs text-muted">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/15 text-sky">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-bold text-foreground">{messages.hero.locationLabel}</p>
                  <p className="text-[11px] text-muted">{t(profileData.location, locale)}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-2">
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
        </MotionFadeIn>
      </Container>
    </section>
  );
}
