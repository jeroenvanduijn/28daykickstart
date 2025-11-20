import { useTranslations } from 'next-intl';

export function Coaches() {
  const t = useTranslations('coaches');

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-20">
          {t('heading')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {/* Coach Max */}
          <div className="bg-gray-50 rounded-3xl p-10">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-20 h-20 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-center mb-2">
              {t('max.name')}
            </h3>
            <p className="text-xl text-orange-500 font-semibold text-center mb-6">
              {t('max.role')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Max is de coach die zelfs tijdens burpees blijft glimlachen. Rustig, duidelijk en positief – en hij zorgt dat jij je meteen thuis voelt.
            </p>
          </div>

          {/* Coach Annie */}
          <div className="bg-gray-50 rounded-3xl p-10">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-20 h-20 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-center mb-2">
              {t('annie.name')}
            </h3>
            <p className="text-xl text-orange-500 font-semibold text-center mb-6">
              {t('annie.role')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Annie is onze rustige kracht. Geen gedoe, geen drama – gewoon praktische tips die passen in je drukke leven.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <p className="text-5xl font-bold text-orange-500 mb-2">2016</p>
            <p className="text-base text-gray-600">Sinds</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-orange-500 mb-2">450+</p>
            <p className="text-base text-gray-600">actieve leden</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-orange-500 mb-2">11</p>
            <p className="text-base text-gray-600">gecertificeerde coaches</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-orange-500 mb-2">5.0 ★</p>
            <p className="text-base text-gray-600">265+ Google Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
