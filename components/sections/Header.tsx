'use client';

import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

export function Header() {
  const t = useTranslations('hero');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-[#0B0E11]">
              CrossFit Leiden
            </a>
          </div>

          {/* Language Switcher - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <LanguageSwitcher />
          </div>

          {/* CTA - Right */}
          <div className="flex-shrink-0">
            <a
              href="#popup-ZTMHpqwf9WGDQN6VGSnU"
              className="px-6 py-3 bg-[#E34234] text-white font-bold rounded-lg hover:bg-[#c23529] active:bg-[#a12e23] transition-colors shadow-md"
            >
              {t('cta')}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
