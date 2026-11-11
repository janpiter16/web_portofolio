"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, Download, Code2 } from "lucide-react";
import { Locale, Messages, getOppositeLocale } from "@/lib/i18n";
import { profileData } from "@/content/profile";

interface NavbarProps {
  locale: Locale;
  messages: Messages;
}

export function Navbar({ locale, messages }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("home");
  const pathname = usePathname();
  const targetLocale = getOppositeLocale(locale);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const sectionIds = [
      "home",
      messages.anchors.about,
      messages.anchors.projects,
      messages.anchors.contact,
    ];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) {
          setActiveHash(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: 0.05 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [messages.anchors, pathname]);

  const switchedPath = pathname
    ? pathname.replace(new RegExp(`^/${locale}(?=/|$)`), `/${targetLocale}`)
    : `/${targetLocale}`;

  const navItems = [
    { id: "home", label: locale === "id" ? "Beranda" : "Home", href: `/${locale}#home` },
    { id: messages.anchors.about, label: messages.nav.about, href: `/${locale}#${messages.anchors.about}` },
    { id: messages.anchors.projects, label: "Portfolio", href: `/${locale}#${messages.anchors.projects}` },
    { id: messages.anchors.contact, label: messages.nav.contact, href: `/${locale}#${messages.anchors.contact}` },
  ];

  return (
    <header className="fixed top-3 right-0 left-0 z-50 flex justify-center px-3 sm:px-5">
      <div className="glass-pill flex w-full max-w-fit items-center justify-between gap-2 rounded-full px-3 py-2 sm:gap-3 sm:px-4">
        {/* Brand Icon + Name */}
        <Link
          href={`/${locale}`}
          onClick={() => setActiveHash("home")}
          className="flex items-center gap-2.5 pr-2 font-bold tracking-tight text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky rounded-full"
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-xl border border-primary/50 bg-primary/20 text-sky">
            <Code2 className="h-4 w-4" aria-hidden="true" />
            <span className="cyan-dot absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full" aria-hidden="true" />
          </span>
          <span className="text-sm font-bold sm:inline">JanpiterDev.</span>
        </Link>

        {/* Desktop Pill Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex md:items-center md:gap-1">
          {navItems.map((item) => {
            const isActive = activeHash === item.id;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActiveHash(item.id)}
                className={`relative rounded-full px-4 py-2 text-sm font-bold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky ${
                  isActive
                    ? "border border-white/20 bg-white/10 text-foreground shadow-sm"
                    : "text-muted hover:bg-white/5 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden h-5 w-px bg-border-token md:block" aria-hidden="true" />

        {/* Right Actions: Language Switcher & CV CTA */}
        <div className="flex items-center gap-2">
          <Link
            href={switchedPath}
            aria-label={messages.nav.switchLanguage}
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border-token bg-white/5 px-3 font-mono text-xs font-bold uppercase text-foreground hover:border-sky hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
          >
            <Globe className="h-3.5 w-3.5 text-sky" aria-hidden="true" />
            <span>{targetLocale.toUpperCase()}</span>
          </Link>

          <a
            href={profileData.cvPath[locale]}
            download
            className="glow-btn-primary hidden items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 sm:inline-flex focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{messages.nav.downloadCv}</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={mobileOpen ? messages.nav.closeMenu : messages.nav.openMenu}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-token bg-white/5 text-foreground hover:bg-white/10 cursor-pointer md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
          >
            {mobileOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Glass Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-navigation-menu"
          aria-label="Mobile Navigation"
          className="glass-card fixed top-16 right-4 left-4 rounded-2xl p-4 md:hidden"
        >
          <ul className="flex flex-col space-y-1.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => {
                    setActiveHash(item.id);
                    setMobileOpen(false);
                  }}
                  className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
                >
                  <span>{item.label}</span>
                  {activeHash === item.id && (
                    <span className="cyan-dot h-2 w-2 rounded-full" aria-hidden="true" />
                  )}
                </Link>
              </li>
            ))}
            <li className="border-t border-border-token pt-2.5">
              <a
                href={profileData.cvPath[locale]}
                download
                onClick={() => setMobileOpen(false)}
                className="glow-btn-primary flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold"
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
