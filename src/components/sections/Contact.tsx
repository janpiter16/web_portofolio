"use client";

import { useState, FormEvent } from "react";
import { Download, Mail, Send, User, MessageSquare, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
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
      className="bg-surface py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow={messages.contact.eyebrow}
          title={messages.contact.title}
          subtitle={messages.contact.subtitle}
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Panel: Interactive Quick Message Form (opens verified mailto:) */}
          <div className="rounded-2xl border border-border-token bg-surface-alt p-6 sm:p-8 lg:col-span-7">
            <h3 className="text-xl font-bold text-navy">
              {locale === "id" ? "Kirim Pesan Langsung" : "Send a Direct Message"}
            </h3>
            <p className="mt-1 text-sm text-muted">
              {locale === "id"
                ? "Ada peluang kerja atau proyek yang ingin didiskusikan? Isi pesan di bawah untuk mengirim email langsung."
                : "Have a role or project to discuss? Fill out the form below to open a pre-filled email."}
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-semibold uppercase tracking-wider text-navy"
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
                    className="w-full rounded-xl border border-border-token bg-surface py-2.5 pr-4 pl-10 text-sm text-foreground focus:border-primary focus:outline-2 focus:outline-offset-0 focus:outline-primary"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-semibold uppercase tracking-wider text-navy"
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
                    placeholder={locale === "id" ? "email@perusahaan.com" : "you@company.com"}
                    className="w-full rounded-xl border border-border-token bg-surface py-2.5 pr-4 pl-10 text-sm text-foreground focus:border-primary focus:outline-2 focus:outline-offset-0 focus:outline-primary"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold uppercase tracking-wider text-navy"
                >
                  {locale === "id" ? "Pesan" : "Message"}
                </label>
                <div className="relative mt-1.5">
                  <MessageSquare
                    className="pointer-events-none absolute top-3 left-3.5 h-4 w-4 text-muted"
                    aria-hidden="true"
                  />
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    maxLength={2000}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      locale === "id"
                        ? "Tulis pesan atau detail diskusi proyek Anda..."
                        : "Write your message or role details..."
                    }
                    className="w-full rounded-xl border border-border-token bg-surface py-2.5 pr-4 pl-10 text-sm text-foreground focus:border-primary focus:outline-2 focus:outline-offset-0 focus:outline-primary"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                <span>{messages.contact.emailCta}</span>
              </button>
            </form>
          </div>

          {/* Right Panel: Direct Connect & CV Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-border-token bg-navy p-6 text-white sm:p-8 lg:col-span-5">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-sky">
                CONNECT & RESUME
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                {profileData.name}
              </h3>
              <p className="mt-1 text-sm text-slate-300">
                {t(profileData.title, locale)}
              </p>

              <div className="mt-6 space-y-4 border-t border-slate-800 pt-6">
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/80 p-4 text-sm text-slate-200 hover:border-sky hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
                >
                  <Mail className="h-5 w-5 shrink-0 text-sky" aria-hidden="true" />
                  <div className="overflow-hidden">
                    <p className="text-xs text-slate-400">Email</p>
                    <p className="truncate font-mono font-semibold text-white">
                      {profileData.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/80 p-4 text-sm text-slate-200">
                  <MapPin className="h-5 w-5 shrink-0 text-sky" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-slate-400">
                      {messages.hero.locationLabel}
                    </p>
                    <p className="font-semibold text-white">
                      {t(profileData.location, locale)}
                    </p>
                  </div>
                </div>
              </div>

              {(isValidExternalUrl(profileData.githubUrl) ||
                isValidExternalUrl(profileData.linkedinUrl)) && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {isValidExternalUrl(profileData.githubUrl) && (
                    <a
                      href={profileData.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-semibold text-white hover:border-sky"
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
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-semibold text-white hover:border-sky"
                    >
                      <LinkedinIcon className="h-4 w-4" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="mt-8 border-t border-slate-800 pt-6">
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
