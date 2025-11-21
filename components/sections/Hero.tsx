'use client';

import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/msgsndr/s0YuoK12A9YPXCKsfUp3/media/69203b77d9b07d3289f63218.jpg"
          alt="Warm trainingsmoment in CrossFit Leiden box"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-gray-100/60"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
          {t('taglinePrefix')}<br />{t('taglineEmphasis')}
        </h1>

        <p className="text-xl sm:text-2xl text-gray-800 mb-6 leading-relaxed max-w-3xl mx-auto">
          {t('headline')}<br />
          {t('subheadline')}
        </p>

        <button
          onClick={() => {
            if (typeof window !== 'undefined' && (window as any).openBookingPopup) {
              (window as any).openBookingPopup();
            }
          }}
          className="inline-block px-10 py-5 bg-[#E34234] text-white font-bold text-xl rounded-lg hover:bg-[#c23529] active:bg-[#a12e23] transition-colors shadow-2xl mb-4"
        >
          {t('cta')}
        </button>

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
