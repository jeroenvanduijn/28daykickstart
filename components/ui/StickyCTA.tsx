'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';

export function StickyCTA() {
  const t = useTranslations('stickyCta');

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-[var(--foreground)] text-white shadow-[0_-8px_20px_rgba(0,0,0,0.25)] md:hidden">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
            {t('eyebrow')}
          </p>
          <p className="mt-1 flex items-center gap-2 text-sm font-semibold">
            <span aria-hidden>📅</span>
            {t('barPrimary')}
            <span className="text-white/40">|</span>
            <span aria-hidden>📱</span>
            {t('barSecondary')}
          </p>
          <p className="mt-1 text-xs text-white/70">{t('subheadline')}</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button href="#booking" size="md" className="w-full">
            <span aria-hidden className="mr-2">
              📅
            </span>
            {t('primary')}
          </Button>
          <Button
            href="https://wa.me/31611111111?text=Hi%20CrossFit%20Leiden!%20Ik%20wil%20meer%20weten%20over%20de%2028-daagse%20kickstart."
            variant="whatsapp"
            size="md"
            className="w-full"
            target="_blank"
            rel="noreferrer"
          >
            <span aria-hidden className="mr-2">
              📱
            </span>
            {t('secondary')}
          </Button>
        </div>
      </div>
    </div>
  );
}
