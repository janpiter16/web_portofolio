import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { locales, isValidLocale, getMessages, Locale } from "@/lib/i18n";
import { profileData } from "@/content/profile";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    return {};
  }

  const messages = getMessages(locale);

  return {
    title: `${profileData.name} — ${messages.meta.title}`,
    description: messages.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        id: "/id",
        en: "/en",
      },
    },
    openGraph: {
      title: `${profileData.name} — ${messages.meta.title}`,
      description: messages.meta.description,
      url: `/${locale}`,
      siteName: profileData.name,
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const validLocale: Locale = locale;
  const messages = getMessages(validLocale);

  return (
    <div lang={validLocale} className="flex min-h-screen flex-col">
      <Navbar locale={validLocale} messages={messages} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer locale={validLocale} messages={messages} />
    </div>
  );
}
