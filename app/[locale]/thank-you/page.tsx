'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

export default function ThankYouPage() {
  const t = useTranslations('thankYou');

  useEffect(() => {
    // Load the GymLeadMachine booking embed script
    const script = document.createElement('script');
    script.src = 'https://kilo.gymleadmachine.com/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[--foreground] mb-6">
            {t('heading')}
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-700 mb-4 max-w-2xl mx-auto">
            {t('subheading')}
          </p>

          {/* Message */}
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('message')}
          </p>

          {/* Decorative line */}
          <div className="w-24 h-1 bg-[--cinnabar] mx-auto mb-16"></div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Next Step Heading */}
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-[--foreground] mb-4">
              {t('nextStepHeading')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('nextStepSubheading')}
            </p>
          </div>

          {/* Booking Widget */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <iframe
              src="https://kilo.gymleadmachine.com/widget/booking/rcNXO9PBrW3gx8CtKZhO"
              style={{
                width: '100%',
                border: 'none',
                overflow: 'hidden',
                minHeight: '600px'
              }}
              scrolling="no"
              id="d9d7uQs5tOhPz5OqJzYD_1762346905784"
              title="Book Your Appointment"
            />
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center space-y-4">
            <h3 className="text-xl font-bold text-[--foreground]">
              {t('whatToExpectHeading')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-[--cinnabar] mb-3">
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-[--foreground] mb-2">{t('step1Title')}</h4>
                <p className="text-sm text-gray-600">{t('step1Description')}</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-[--cinnabar] mb-3">
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-[--foreground] mb-2">{t('step2Title')}</h4>
                <p className="text-sm text-gray-600">{t('step2Description')}</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-[--cinnabar] mb-3">
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-[--foreground] mb-2">{t('step3Title')}</h4>
                <p className="text-sm text-gray-600">{t('step3Description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
