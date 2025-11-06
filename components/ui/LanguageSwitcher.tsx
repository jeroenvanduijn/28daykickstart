'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';

type LanguageSwitcherProps = {
  appearance?: 'default' | 'onDark';
};

export function LanguageSwitcher({ appearance = 'default' }: LanguageSwitcherProps) {
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

  const activeClasses =
    appearance === 'onDark'
      ? 'bg-white text-[var(--foreground)] shadow-sm focus:ring-white focus:ring-offset-black'
      : 'bg-[var(--cinnabar)] text-white focus:ring-[color:var(--cinnabar)] focus:ring-offset-white';

  const inactiveClasses =
    appearance === 'onDark'
      ? 'text-white/80 hover:text-white focus:ring-white/60 focus:ring-offset-black'
      : 'text-gray-600 hover:text-[var(--foreground)] focus:ring-[color:var(--cinnabar)]/40 focus:ring-offset-white';

  const separatorClass = appearance === 'onDark' ? 'text-white/40' : 'text-gray-400';

  return (
    <div
      className={`flex items-center gap-2 text-sm ${
        appearance === 'onDark' ? 'text-white' : 'text-gray-600'
      }`}
    >
      <button
        onClick={() => switchLocale('en')}
        className={`rounded px-3 py-1 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          locale === 'en' ? activeClasses : inactiveClasses
        }`}
        disabled={isPending}
      >
        EN
      </button>
      <span className={separatorClass}>|</span>
      <button
        onClick={() => switchLocale('nl')}
        className={`rounded px-3 py-1 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          locale === 'nl' ? activeClasses : inactiveClasses
        }`}
        disabled={isPending}
      >
        NL
      </button>
    </div>
  );
}
