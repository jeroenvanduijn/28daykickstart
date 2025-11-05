'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';

export function StickyCTA() {
  const t = useTranslations('stickyCta');

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-md rounded-2xl bg-white/95 p-4 shadow-xl ring-1 ring-black/5 backdrop-blur md:hidden">
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--cinnabar)]">
            {t('eyebrow')}
          </p>
          <p className="text-base font-semibold text-[var(--foreground)]">{t('headline')}</p>
          <p className="text-sm text-gray-600">{t('subheadline')}</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button href="#booking" size="md" className="w-full">
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
            {t('secondary')}
          </Button>
        </div>
      </div>
    </div>
  );
}
