import { useTranslations } from 'next-intl';

export function Coaches() {
  const t = useTranslations('coaches');

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16">
          {t('heading')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-5xl mx-auto">
          {/* Coach Max */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center text-gray-500">
              <svg className="w-16 h-16 sm:w-20 sm:h-20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-2">
              {t('max.name')}
            </h3>
            <p className="text-base sm:text-lg text-cinnabar font-semibold text-center mb-4">
              {t('max.role')}
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
              {t('max.description')}
            </p>
          </div>

          {/* Coach Annie */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center text-gray-500">
              <svg className="w-16 h-16 sm:w-20 sm:h-20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-2">
              {t('annie.name')}
            </h3>
            <p className="text-base sm:text-lg text-cinnabar font-semibold text-center mb-4">
              {t('annie.role')}
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
              {t('annie.description')}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cinnabar mb-2">2016</p>
            <p className="text-sm sm:text-base text-gray-600">{t('stats.since')}</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cinnabar mb-2">450+</p>
            <p className="text-sm sm:text-base text-gray-600">{t('stats.members')}</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cinnabar mb-2">11</p>
            <p className="text-sm sm:text-base text-gray-600">{t('stats.coaches')}</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cinnabar mb-2">5.0 ★</p>
            <p className="text-sm sm:text-base text-gray-600">{t('stats.reviews')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
