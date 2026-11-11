"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, Download } from "lucide-react";
import { Locale, Messages, getOppositeLocale } from "@/lib/i18n";
import { profileData } from "@/content/profile";
import { Container } from "@/components/ui/Container";

interface NavbarProps {
  locale: Locale;
  messages: Messages;
}

export function Navbar({ locale, messages }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const targetLocale = getOppositeLocale(locale);

  // Close mobile drawer when route changes or Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const switchedPath = pathname
    ? pathname.replace(new RegExp(`^/${locale}(?=/|$)`), `/${targetLocale}`)
    : `/${targetLocale}`;

  const navItems = [
    { label: messages.nav.about, href: `/${locale}#${messages.anchors.about}` },
    { label: messages.nav.skills, href: `/${locale}#${messages.anchors.skills}` },
    { label: messages.nav.experience, href: `/${locale}#${messages.anchors.experience}` },
    { label: messages.nav.education, href: `/${locale}#${messages.anchors.education}` },
    { label: messages.nav.projects, href: `/${locale}#${messages.anchors.projects}` },
    { label: messages.nav.contact, href: `/${locale}#${messages.anchors.contact}` },
  ];

  return (
    <header className="sticky top-0 z-40 h-[var(--header-height)] w-full border-b border-border-token bg-surface/95 backdrop-blur">
      <Container className="flex h-full items-center justify-between">
        <Link
          href={`/${locale}`}
          className="font-bold text-lg tracking-tight text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
        >
          {profileData.name}
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden md:flex md:items-center md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
            >
              {item.label}
            </Link>
          ))}

          <div className="h-4 w-px bg-border-token" aria-hidden="true" />

          <Link
            href={switchedPath}
            aria-label={messages.nav.switchLanguage}
            className="inline-flex items-center gap-1.5 rounded-md border border-border-token bg-surface-alt px-2.5 py-1.5 font-mono text-xs font-semibold uppercase text-navy hover:border-primary hover:text-primary transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Globe className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{targetLocale.toUpperCase()}</span>
          </Link>

          <a
            href={profileData.cvPath[locale]}
            download
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-xs font-semibold text-white hover:bg-primary-hover transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{messages.nav.downloadCv}</span>
          </a>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href={switchedPath}
            aria-label={messages.nav.switchLanguage}
            className="inline-flex items-center gap-1 rounded-md border border-border-token bg-surface-alt px-2.5 py-1.5 font-mono text-xs font-semibold uppercase text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Globe className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{targetLocale.toUpperCase()}</span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={mobileOpen ? messages.nav.closeMenu : messages.nav.openMenu}
            className="inline-flex items-center justify-center rounded-md border border-border-token p-2 text-navy hover:bg-surface-alt cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-navigation-menu"
          aria-label="Mobile Navigation"
          className="border-b border-border-token bg-surface px-4 pt-3 pb-6 shadow-md md:hidden"
        >
          <ul className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-2 py-1.5 text-base font-medium text-foreground hover:bg-surface-alt hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={profileData.cvPath[locale]}
                download
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span>{messages.nav.downloadCv}</span>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
