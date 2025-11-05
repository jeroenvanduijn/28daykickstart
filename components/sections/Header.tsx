'use client';

import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

export function Header() {
  const t = useTranslations('hero');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center group">
              <h1
                className="text-xl sm:text-2xl font-bold text-white group-hover:text-[--jonquil] transition-colors"
                style={{ letterSpacing: '0.05em', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
              >
                CrossFit Leiden
              </h1>
            </a>
          </div>

          {/* Language Switcher & CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            <LanguageSwitcher variant="header" />
            <a
              href="#booking"
              className="hidden sm:inline-flex items-center px-6 py-2.5 bg-[--jonquil] text-black font-extrabold text-sm rounded-lg hover:bg-[--cinnabar] hover:text-white transition-all shadow-[0_4px_12px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.5)] transform hover:scale-105 active:scale-100"
            >
              {t('cta')}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
