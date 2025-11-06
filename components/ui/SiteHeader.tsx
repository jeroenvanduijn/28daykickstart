'use client';

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
          </div>
        </div>
      </div>
    </header>
  );
}
