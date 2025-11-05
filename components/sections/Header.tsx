'use client';

import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

export function Header() {
  const t = useTranslations('hero');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <h1 className="text-xl sm:text-2xl font-medium text-white" style={{ letterSpacing: '0.05em' }}>
                CrossFit Leiden
              </h1>
            </a>
          </div>

          {/* Language Switcher & CTA */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher variant="header" />
            <a
              href="#booking"
              className="hidden sm:inline-block px-6 py-2 bg-[--jonquil] text-black font-bold rounded-lg hover:bg-[--cinnabar] hover:text-white transition-all shadow-[0_2px_8px_rgba(0,0,0,0.25)] hover:shadow-xl"
            >
              {t('cta')}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
