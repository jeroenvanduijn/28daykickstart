'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';

export function LanguageSwitcher() {
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

  return (
    <div className="flex items-center gap-2 text-sm font-medium">
      <button
        onClick={() => switchLocale('en')}
        className={`px-4 py-2 rounded-md transition-all duration-200 ${
          locale === 'en'
            ? 'bg-[--cinnabar] text-white font-bold shadow-md scale-105'
            : 'text-[--foreground] hover:bg-gray-100 hover:scale-105 hover:shadow-sm border border-gray-300'
        }`}
        disabled={isPending}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-gray-400 font-normal">|</span>
      <button
        onClick={() => switchLocale('nl')}
        className={`px-4 py-2 rounded-md transition-all duration-200 ${
          locale === 'nl'
            ? 'bg-[--cinnabar] text-white font-bold shadow-md scale-105'
            : 'text-[--foreground] hover:bg-gray-100 hover:scale-105 hover:shadow-sm border border-gray-300'
        }`}
        disabled={isPending}
        aria-label="Schakel naar Nederlands"
      >
        NL
      </button>
    </div>
  );
}
