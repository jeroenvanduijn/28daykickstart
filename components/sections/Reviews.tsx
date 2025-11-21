'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

export function Reviews() {
  const t = useTranslations('reviews');

  useEffect(() => {
    // Load the review widget script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://reputationhub.site/reputation/assets/review-widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 sm:mb-20">
          {t('heading')}
        </h2>

        {/* Google Reviews Widget */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <iframe
            className='lc_reviews_widget'
            src='https://reputationhub.site/reputation/widgets/review_widget/s0YuoK12A9YPXCKsfUp3?widgetId=690b468e0591d2ab3477c77a'
            frameBorder='0'
            scrolling='no'
            style={{minWidth: '100%', width: '100%', border: 'none'}}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
