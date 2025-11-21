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
            <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full">
              <img
                src="https://storage.googleapis.com/msgsndr/s0YuoK12A9YPXCKsfUp3/media/67a1e253aaffd3e4434d93b3.png"
                alt="Coach Max"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-3xl font-bold text-center mb-2">
              {t('max.name')}
            </h3>
            <p className="text-xl text-[#E34234] font-semibold text-center mb-6">
              {t('max.role')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Max is de coach die zelfs tijdens burpees blijft glimlachen. Rustig, duidelijk en positief – en hij zorgt dat jij je meteen thuis voelt.
            </p>
          </div>

          {/* Coach Annie */}
          <div className="bg-gray-50 rounded-3xl p-10">
            <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full">
              <img
                src="https://storage.googleapis.com/msgsndr/s0YuoK12A9YPXCKsfUp3/media/690ddfa4b23abd77a66a3e1b.png"
                alt="Coach Annie"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-3xl font-bold text-center mb-2">
              {t('annie.name')}
            </h3>
            <p className="text-xl text-[#E34234] font-semibold text-center mb-6">
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
            <p className="text-5xl font-bold text-[#E34234] mb-2">2016</p>
            <p className="text-base text-gray-600">Sinds</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-[#E34234] mb-2">450+</p>
            <p className="text-base text-gray-600">actieve leden</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-[#E34234] mb-2">11</p>
            <p className="text-base text-gray-600">gecertificeerde coaches</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-[#E34234] mb-2">5.0 ★</p>
            <p className="text-base text-gray-600">265+ Google Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
