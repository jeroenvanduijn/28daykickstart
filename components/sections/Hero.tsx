import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white pt-20">
      {/* Background placeholder - replace with actual gym photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 z-0" />

      {/* Optional: Add background image here */}
      {/* <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-background.jpg"
          alt="CrossFit Leiden gym"
          className="w-full h-full object-cover opacity-20"
        />
      </div> */}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
        {/* Tagline with emphasized part */}
        <p className="text-base sm:text-lg font-bold mb-3 uppercase tracking-wide">
          <span className="text-[#5a5167]">{t('taglinePrefix')} </span>
          <span className="text-[--cinnabar] text-lg sm:text-xl">{t('taglineEmphasis')}</span>
        </p>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[--foreground] mb-6 leading-tight max-w-3xl mx-auto">
          {t('headline')}
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t('subheadline')}
        </p>

        {/* CTA Button */}
        <div className="mb-4">
          <Button
            variant="primary"
            size="lg"
            href="#booking"
            className="shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {t('cta')}
          </Button>
        </div>

        {/* Trust Line */}
        <p className="text-sm text-gray-600 italic mb-10">
          {t('trustLine')}
        </p>

        {/* Reviews */}
        <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md">
          <span className="text-2xl" style={{ color: '#F7CB15' }}>★★★★★</span>
          <span className="text-sm sm:text-base font-semibold text-gray-900">{t('reviews')}</span>
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
