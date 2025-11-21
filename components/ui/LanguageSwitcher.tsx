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
    <div className="flex items-center gap-2">
      <button
        onClick={() => switchLocale('en')}
        className={`px-4 py-2 rounded-md font-semibold text-sm transition-all ${
          locale === 'en'
            ? 'bg-[#43B3AE] text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
        disabled={isPending}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => switchLocale('nl')}
        className={`px-4 py-2 rounded-md font-semibold text-sm transition-all ${
          locale === 'nl'
            ? 'bg-[#43B3AE] text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
        disabled={isPending}
        aria-label="Schakel naar Nederlands"
      >
        NL
      </button>
    </div>
  );
}
