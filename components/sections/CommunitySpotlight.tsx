import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function CommunitySpotlight() {
  const t = useTranslations('community');

  const highlights = ['welcome', 'support', 'celebration'];

  return (
    <section className="bg-[#fff4f1] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col-reverse gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-12">
        <div className="lg:w-1/2">
          <div className="relative overflow-hidden rounded-3xl shadow-lg ring-1 ring-black/5">
            <Image
              src="/images/community-celebration.svg"
              alt={t('imageAlt')}
              width={960}
              height={720}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-6 bottom-6 flex items-center gap-3 rounded-2xl bg-white/90 p-4 text-sm text-gray-700 shadow-lg backdrop-blur">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--cinnabar)] text-white font-semibold">
                150+
              </span>
              <div>
                <p className="font-semibold text-[var(--foreground)]">{t('stat.title')}</p>
                <p>{t('stat.subtitle')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--cinnabar)]">
            {t('eyebrow')}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
            {t('heading')}
          </h2>
          <p className="mt-4 text-base text-gray-700 sm:text-lg">{t('subheading')}</p>

          <ul className="mt-8 space-y-5">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--jonquil)] text-xs font-bold text-[var(--foreground)]">
                  {t('list.icon')}
                </span>
                <div>
                  <p className="text-lg font-semibold text-[var(--foreground)]">{t(`list.${item}.title`)}</p>
                  <p className="text-sm text-gray-600">{t(`list.${item}.description`)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
