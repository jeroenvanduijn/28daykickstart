'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';

export function StickyCTA() {
  const t = useTranslations('stickyCta');

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-[var(--foreground)]/95 text-white shadow-[0_-6px_16px_rgba(0,0,0,0.2)] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1 sm:space-y-1.5">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-white/60 sm:text-xs">
            {t('eyebrow')}
          </p>
          <p className="flex items-center gap-2 text-sm font-semibold sm:text-base">
            <span aria-hidden>📅</span>
            {t('barPrimary')}
            <span className="text-white/30">•</span>
            <span aria-hidden>📱</span>
            {t('barSecondary')}
          </p>
          <p className="hidden text-xs text-white/60 sm:block">{t('subheadline')}</p>
        </div>
        <div className="flex flex-col gap-2 sm:w-auto sm:flex-row">
          <Button href="#booking" size="sm" className="w-full sm:w-auto">
            <span aria-hidden className="mr-2">
              📅
            </span>
            {t('primary')}
          </Button>
          <Button
            href="https://wa.me/31611111111?text=Hi%20CrossFit%20Leiden!%20Ik%20wil%20meer%20weten%20over%20de%2028-daagse%20kickstart."
            variant="whatsapp"
            size="sm"
            className="w-full sm:w-auto"
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
