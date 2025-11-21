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
          href="#popup-ZTMHpqwf9WGDQN6VGSnU"
          className="inline-block px-10 py-5 bg-white text-[#E34234] font-bold text-xl rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors shadow-2xl"
        >
          {t('button')}
        </a>
      </div>
    </section>
  );
}
