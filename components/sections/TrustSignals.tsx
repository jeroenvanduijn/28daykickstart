import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function TrustSignals() {
  const t = useTranslations('trust');

  const badges = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M12 2l7 4v6c0 5-3.5 9.5-7 10-3.5-.5-7-5-7-10V6l7-4z" />
        </svg>
      ),
      title: t('affiliate.title'),
      description: t('affiliate.description'),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M3 11l3-3 3 3 4-4 4 4 4-4" />
          <path d="M21 21H3v-7l4-4 4 4 4-4 6 6z" />
        </svg>
      ),
      title: t('community.title'),
      description: t('community.description'),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M12 20l-7-4V8l7-4 7 4v8l-7 4z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: t('coaches.title'),
      description: t('coaches.description'),
    },
  ];

  return (
    <section id="trust" className="scroll-mt-32 bg-[var(--verdigris)]/10 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="lg:w-2/5">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--verdigris)]">
            {t('eyebrow')}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
            {t('heading')}
          </h2>
          <p className="mt-4 text-base text-gray-700 sm:text-lg">{t('subheading')}</p>

          <div className="mt-8 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
            <Image
              src="/images/coach-anne.svg"
              alt={t('coachAlt')}
              width={96}
              height={96}
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-[var(--foreground)]">{t('coachName')}</p>
              <p className="text-sm text-gray-600">{t('coachRole')}</p>
              <p className="mt-1 text-sm text-gray-600">{t('coachQuote')}</p>
            </div>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-3">
          {badges.map(({ icon, title, description }) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--verdigris)]/10 text-[var(--verdigris)]">
                {icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)]">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
