'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

export function MemberStories() {
  const t = useTranslations('memberStories');

  useEffect(() => {
    // Load Vimeo player API
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
          {t('heading')}
        </h2>
        <div className="w-24 h-1 bg-[--jonquil] mx-auto mb-8"></div>
        <p className="text-lg sm:text-xl text-gray-200 text-center mb-12 max-w-2xl mx-auto font-medium">
          {t('subheading')}
        </p>

        {/* Member Story Videos - 2 vertical videos side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Video 1: Elcin - 100 visits */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-900">
            <div style={{ padding: '177.78% 0 0 0', position: 'relative' }}>
              <iframe
                src="https://player.vimeo.com/video/1133807494?badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="100 visits strong! Congrats to Elcin"
              />
            </div>
          </div>

          {/* Video 2: Fleur - 300 workouts */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-900">
            <div style={{ padding: '177.78% 0 0 0', position: 'relative' }}>
              <iframe
                src="https://player.vimeo.com/video/1133807460?badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="300 workouts strong! Meet Fleur"
              />
            </div>
          </div>
        </div>

        {/* Stats below video */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl sm:text-6xl font-extrabold text-[--jonquil] mb-2">150+</div>
            <p className="text-gray-300 text-base font-medium">{t('stat1')}</p>
          </div>
          <div>
            <div className="text-5xl sm:text-6xl font-extrabold text-[--jonquil] mb-2">28</div>
            <p className="text-gray-300 text-base font-medium">{t('stat2')}</p>
          </div>
          <div>
            <div className="text-5xl sm:text-6xl font-extrabold text-[--jonquil] mb-2">4.9</div>
            <p className="text-gray-300 text-base font-medium">{t('stat3')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
