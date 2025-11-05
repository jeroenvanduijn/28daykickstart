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
    <div className="flex items-center gap-2 text-sm">
      <button
        onClick={() => switchLocale('en')}
        className={`px-3 py-1 rounded transition-colors ${
          locale === 'en'
            ? 'bg-[var(--cinnabar)] text-white font-bold'
            : 'text-gray-600 hover:text-[var(--foreground)]'
        }`}
        disabled={isPending}
      >
        EN
      </button>
      <span className="text-gray-400">|</span>
      <button
        onClick={() => switchLocale('nl')}
        className={`px-3 py-1 rounded transition-colors ${
          locale === 'nl'
            ? 'bg-[var(--cinnabar)] text-white font-bold'
            : 'text-gray-600 hover:text-[var(--foreground)]'
        }`}
        disabled={isPending}
      >
        NL
      </button>
    </div>
  );
}
