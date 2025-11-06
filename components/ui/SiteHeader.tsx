'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

const navLinks = [
  { href: '#benefits', key: 'benefits' },
  { href: '#how-it-works', key: 'howItWorks' },
  { href: '#community', key: 'community' },
  { href: '#member-stories', key: 'stories' },
  { href: '#faq', key: 'faq' },
];

export function SiteHeader() {
  const t = useTranslations('nav');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileNavOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-black/50 px-4 py-3 text-white shadow-lg backdrop-blur">
          <div className="flex items-center gap-6">
            <Link href="#hero" className="text-sm font-semibold tracking-wide uppercase">
              {t('brand')}
            </Link>
            <nav aria-label={t('ariaLabel')} className="hidden items-center gap-5 text-sm font-medium md:flex">
              {navLinks.map(({ href, key }) => (
                <a
                  key={key}
                  href={href}
                  className="transition-colors hover:text-white/90"
                >
                  {t(`links.${key}`)}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <LanguageSwitcher appearance="onDark" />
            <Button
              href="#booking"
              size="sm"
              className="hidden whitespace-nowrap sm:inline-flex"
            >
              {t('cta')}
            </Button>
            <Button
              href="#booking"
              size="sm"
              className="sm:hidden"
            >
              {t('ctaShort')}
            </Button>
            <button
              type="button"
              onClick={toggleMobileNav}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black md:hidden"
              aria-expanded={isMobileNavOpen}
              aria-controls="mobile-nav"
            >
              <span className="sr-only">
                {isMobileNavOpen ? t('menuToggle.close') : t('menuToggle.open')}
              </span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                {isMobileNavOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <>
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMobileNavOpen ? (
          <div
            id="mobile-nav"
            className="mt-3 space-y-4 rounded-3xl border border-white/10 bg-black/80 p-5 text-sm text-white shadow-2xl backdrop-blur md:hidden"
          >
            <nav aria-label={t('ariaLabel')} className="flex flex-col gap-3">
              {navLinks.map(({ href, key }) => (
                <a
                  key={key}
                  href={href}
                  className="rounded-lg px-2 py-2 font-medium transition hover:bg-white/10"
                  onClick={closeMobileNav}
                >
                  {t(`links.${key}`)}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <Button href="#booking" onClick={closeMobileNav}>
                {t('cta')}
              </Button>
              <Button variant="ghost" href="#booking" onClick={closeMobileNav}>
                {t('ctaShort')}
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
