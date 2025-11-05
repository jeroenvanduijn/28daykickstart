import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-16">
      {/* Background image placeholder - in production, add real gym photos */}
      <div className="absolute inset-0 bg-black/5 z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline */}
        <p className="text-sm sm:text-base font-medium text-[--chinese-violet] mb-4 uppercase tracking-wide">
          {t('tagline')}
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[--foreground] mb-6 leading-tight">
          {t('headline')}
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          {t('subheadline')}
        </p>

        {/* CTA Button */}
        <div className="mb-4">
          <Button size="lg" href="#booking">
            {t('cta')}
          </Button>
        </div>

        {/* Micro-copy */}
        <p className="text-sm text-gray-600 italic">
          {t('microCopy')}
        </p>

        {/* Visual Trust Indicator */}
        <div className="mt-12 flex items-center justify-center gap-2 text-[--jonquil]">
          <span className="text-2xl">★★★★★</span>
          <span className="text-sm text-gray-600">{t('rating')}</span>
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
