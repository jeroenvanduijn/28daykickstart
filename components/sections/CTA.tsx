import { useTranslations } from 'next-intl';

export function CTA() {
  const t = useTranslations('cta');

  return (
    <section id="booking" className="py-20 sm:py-28 bg-[#E34234]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          {t('heading')}
        </h2>
        <p className="text-xl text-white/95 mb-10">
          {t('subtext')}
        </p>

        <a
          href="#highlevel-popup"
          className="inline-block px-10 py-5 bg-white text-[#E34234] font-bold text-xl rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors shadow-2xl mb-8"
        >
          {t('button')}
        </a>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 mt-8">
          <div className="text-center text-white/80">
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-lg font-semibold mb-2">HIGHLEVEL INTRO POPUP EMBED HIER</p>
            <p className="text-sm">Plaats hier de embed code voor booking popup</p>
          </div>
        </div>
      </div>
    </section>
  );
}
