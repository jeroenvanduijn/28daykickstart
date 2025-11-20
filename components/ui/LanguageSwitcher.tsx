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
    <div className="flex items-center gap-3 text-sm">
      <button
        onClick={() => switchLocale('en')}
        className={`transition-colors ${
          locale === 'en'
            ? 'text-orange-600 font-semibold underline'
            : 'text-gray-500 hover:text-gray-700'
        }`}
        disabled={isPending}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => switchLocale('nl')}
        className={`transition-colors ${
          locale === 'nl'
            ? 'text-orange-600 font-semibold underline'
            : 'text-gray-500 hover:text-gray-700'
        }`}
        disabled={isPending}
        aria-label="Schakel naar Nederlands"
      >
        NL
      </button>
    </div>
  );
}
