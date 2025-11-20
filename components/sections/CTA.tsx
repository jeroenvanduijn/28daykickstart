import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';

export function CTA() {
  const t = useTranslations('cta');

  return (
    <section id="booking" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-cinnabar to-red-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          {t('heading')}
        </h2>
        <p className="text-lg sm:text-xl text-white/95 mb-8 sm:mb-10">
          {t('subtext')}
        </p>

        <Button
          variant="secondary"
          size="lg"
          href="#highlevel-popup"
          className="mb-8 bg-white text-cinnabar hover:bg-gray-100"
        >
          {t('button')}
        </Button>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 mt-8">
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
