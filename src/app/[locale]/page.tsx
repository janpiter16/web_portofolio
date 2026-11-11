import { notFound } from "next/navigation";
import { isValidLocale, getMessages, locales } from "@/lib/i18n";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { PortfolioShowcaseTabs } from "@/components/sections/PortfolioShowcaseTabs";
import { Contact } from "@/components/sections/Contact";

export const instant = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = getMessages(locale);

  return (
    <>
      <Hero locale={locale} messages={messages} />
      <About locale={locale} messages={messages} />
      <PortfolioShowcaseTabs locale={locale} messages={messages} />
      <Contact locale={locale} messages={messages} />
    </>
  );
}
