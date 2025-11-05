import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20">
      {/* Background image placeholder - in production, add real gym photos */}
      <div className="absolute inset-0 bg-black/5 z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline with emphasized "BUITENGEWOON STERK" */}
        <p className="text-base sm:text-lg font-bold mb-4 uppercase tracking-wide">
          <span className="text-[#5a5167]">{t('taglinePrefix')}</span>
          <span className="text-[--cinnabar] text-lg sm:text-xl">{t('taglineEmphasis')}</span>
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[--foreground] mb-6 leading-tight">
          {t('headline')}
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          {t('subheadline')}
        </p>

        {/* CTA Button with "Alle niveaus welkom" */}
        <div className="mb-3">
          <Button
            variant="primary"
            size="lg"
            href="#booking"
            className="shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {t('cta')}
          </Button>
        </div>

        {/* "Alle niveaus welkom" trust message */}
        <div className="inline-block bg-[--jonquil] px-6 py-2 rounded-full mb-2">
          <p className="text-base font-bold text-[--foreground]">
            {t('allLevelsWelcome')}
          </p>
        </div>

        {/* Micro-copy */}
        <p className="text-sm text-gray-600 italic">
          {t('microCopy')}
        </p>

        {/* Visual Trust Indicator with improved star visibility */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <span className="text-3xl" style={{ color: '#F7CB15' }}>★★★★★</span>
          <span className="text-base font-medium text-gray-700">{t('rating')}</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-[--cinnabar]"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
