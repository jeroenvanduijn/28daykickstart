'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

export function Testimonials() {
  const t = useTranslations('testimonials');

  useEffect(() => {
    // Load the review widget script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://reputationhub.site/reputation/assets/review-widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[--foreground] mb-4">
          {t('heading')}
        </h2>
        <div className="w-24 h-1 bg-[--jonquil] mx-auto mb-16"></div>

        {/* Google Reviews Widget */}
        <div className="max-w-5xl mx-auto">
          <iframe
            className="lc_reviews_widget"
            src="https://reputationhub.site/reputation/widgets/review_widget/s0YuoK12A9YPXCKsfUp3"
            frameBorder="0"
            scrolling="no"
            style={{ minWidth: '100%', width: '100%', minHeight: '600px', border: 'none' }}
            title="Google Reviews"
          />
        </div>
      </div>
    </section>
  );
}
