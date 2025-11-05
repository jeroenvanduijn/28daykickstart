'use client';

import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { Button } from '@/components/ui/Button';

export function Header() {
  const t = useTranslations('hero');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-[--foreground]">
              CrossFit Leiden
            </a>
          </div>

          {/* Right side: Language Switcher + CTA */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button
              variant="primary"
              size="md"
              href="#booking"
              className="shadow-md hover:shadow-lg"
            >
              {t('cta')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
