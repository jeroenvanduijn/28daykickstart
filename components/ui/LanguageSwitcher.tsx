'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';

interface LanguageSwitcherProps {
  variant?: 'default' | 'header';
}

export function LanguageSwitcher({ variant = 'default' }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: string) => {
    startTransition(() => {
      // Remove the current locale from the pathname
      const pathWithoutLocale = pathname.replace(/^\/(en|nl)/, '');
      const newPath = `/${newLocale}${pathWithoutLocale || ''}`;
      router.replace(newPath);
    });
  };

  if (variant === 'header') {
    // Compact toggle button for header
    return (
      <div className="flex items-center bg-white/10 border border-white/20 rounded-lg overflow-hidden backdrop-blur-sm">
        <button
          onClick={() => switchLocale('en')}
          className={`px-4 py-2 text-sm font-medium transition-all ${
            locale === 'en'
              ? 'bg-[--jonquil] text-black'
              : 'text-white hover:bg-white/10'
          }`}
          disabled={isPending}
          aria-label="Switch to English"
        >
          English
        </button>
        <button
          onClick={() => switchLocale('nl')}
          className={`px-4 py-2 text-sm font-medium transition-all ${
            locale === 'nl'
              ? 'bg-[--jonquil] text-black'
              : 'text-white hover:bg-white/10'
          }`}
          disabled={isPending}
          aria-label="Schakel naar Nederlands"
        >
          Nederlands
        </button>
      </div>
    );
  }

  // Default style for footer
  return (
    <div className="flex items-center gap-2 text-sm">
      <button
        onClick={() => switchLocale('en')}
        className={`px-3 py-1 rounded transition-colors ${
          locale === 'en'
            ? 'bg-[--cinnabar] text-white font-bold'
            : 'text-gray-400 hover:text-white'
        }`}
        disabled={isPending}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-gray-600">|</span>
      <button
        onClick={() => switchLocale('nl')}
        className={`px-3 py-1 rounded transition-colors ${
          locale === 'nl'
            ? 'bg-[--cinnabar] text-white font-bold'
            : 'text-gray-400 hover:text-white'
        }`}
        disabled={isPending}
        aria-label="Schakel naar Nederlands"
      >
        NL
      </button>
    </div>
  );
}
