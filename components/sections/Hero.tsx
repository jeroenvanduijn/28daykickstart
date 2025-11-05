import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center pt-16"
      style={{
        backgroundImage: 'url(/images/hero-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for text readability - 50% for stronger contrast */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-[15vh] pb-8">
        {/* Tagline with accent color on "buitengewoon sterk" */}
        <p className="text-base sm:text-lg font-semibold mb-4 uppercase tracking-wide">
          <span
            className="text-white"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}
          >
            Gewone mensen,{' '}
          </span>
          <span
            className="text-[--jonquil] font-extrabold"
            style={{
              textShadow: '0 0 8px rgba(0,0,0,1), 0 0 16px rgba(0,0,0,0.9), 0 3px 12px rgba(0,0,0,0.8)',
              WebkitTextStroke: '1px rgba(0,0,0,0.3)'
            }}
          >
            buitengewoon sterk
          </span>
        </p>

        {/* Main Headline - extra bold and high contrast */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
          style={{ textShadow: '0 3px 10px rgba(0,0,0,0.8)' }}
        >
          {t('headline')}
        </h1>

        {/* Subheadline - improved contrast */}
        <p
          className="text-xl sm:text-2xl text-white mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}
        >
          {t('subheadline')}
        </p>

        {/* CTA Button */}
        <div className="mb-4">
          <Button size="lg" href="#booking" variant="primary">
            {t('cta')}
            <svg
              className="inline-block ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </div>

        {/* Micro-copy */}
        <p
          className="text-sm text-white/90 italic"
          style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}
        >
          {t('microCopy')}
        </p>

        {/* Visual Trust Indicator */}
        <div className="mt-12 flex items-center justify-center gap-2 text-[--jonquil]">
          <span className="text-2xl" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}>★★★★★</span>
          <span
            className="text-sm text-white"
            style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}
          >
            {t('rating')}
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.5))' }}
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
