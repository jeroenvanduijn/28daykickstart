import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-100 pt-20">
      {/* Background placeholder - replace with actual gym photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 z-0" />

      {/* Optional: Uncomment and add hero image */}
      {/* <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-background.jpg"
          alt="Warm trainingsmoment in CrossFit Leiden box"
          className="w-full h-full object-cover opacity-20"
        />
      </div> */}

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
          Gewone mensen,<br />buitengewoon sterk.
        </h1>

        <p className="text-xl sm:text-2xl text-gray-800 mb-6 leading-relaxed max-w-3xl mx-auto">
          De 28-daagse Kickstart voor drukke ouders en professionals.<br />
          Meer energie, meer structuur, meer vertrouwen – ook als je nog nooit CrossFit hebt gedaan.
        </p>

        <a
          href="#booking"
          className="inline-block px-10 py-5 bg-orange-500 text-white font-bold text-xl rounded-lg hover:bg-orange-600 active:bg-orange-700 transition-colors shadow-2xl mb-4"
        >
          {t('cta')}
        </a>

        <p className="text-base text-gray-700 italic mb-12">
          {t('trustLine')}
        </p>

        <div className="inline-flex items-center gap-3 bg-white/95 px-8 py-4 rounded-full shadow-xl">
          <span className="text-3xl text-yellow-400">★★★★★</span>
          <span className="text-lg font-semibold text-gray-900">{t('reviews')}</span>
        </div>
      </div>
    </section>
  );
}
