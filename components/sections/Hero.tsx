import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff7f4] via-white to-[#f0fbfa]" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,480px)] lg:items-center lg:px-12 lg:py-28">
        <div className="text-left">
          <p className="mb-4 inline-flex items-center rounded-full bg-[var(--verdigris)]/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--verdigris)]">
            {t('tagline')}
          </p>
          <h1 className="text-4xl font-bold leading-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            {t('headline')}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-700 sm:text-xl">
            {t('subheadline')}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button size="lg" href="#booking">
              {t('cta')}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="#member-stories"
              className="flex items-center gap-2"
            >
              <span aria-hidden>▶</span>
              {t('watchStories')}
            </Button>
          </div>

          <p className="mt-6 text-sm text-gray-600 italic">{t('microCopy')}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2 text-[var(--jonquil)]">
              <span className="text-2xl">★★★★★</span>
              <span className="font-medium text-gray-700">{t('ratingLabel')}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-6 w-6 text-[var(--verdigris)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>{t('affiliateBadge')}</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--verdigris)]/20 via-transparent to-[var(--cinnabar)]/20 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5">
            <Image
              src="/images/hero-coach.svg"
              alt={t('heroImageAlt')}
              width={960}
              height={720}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="absolute -bottom-12 left-4 hidden w-[calc(100%-2rem)] max-w-xs items-center gap-3 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur sm:flex lg:left-8">
            <div className="h-12 w-12 overflow-hidden rounded-full">
              <Image
                src="/images/coach-anne.svg"
                alt={t('coachAlt')}
                width={96}
                height={96}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-sm">
              <p className="font-semibold text-[var(--foreground)]">{t('coachName')}</p>
              <p className="text-gray-600">{t('coachRole')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
