'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export function FAQ() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First question open by default

  const faqs = [
    { key: 'q1' },
    { key: 'q2' },
    { key: 'q3' },
    { key: 'q4' },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[--foreground] mb-12">
          {t('heading')}
        </h2>

        <div className="space-y-4">
          {faqs.map(({ key }, index) => (
            <div
              key={key}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-[--foreground] pr-4">
                  {t(`${key}.question`)}
                </span>
                <svg
                  className={`w-5 h-5 text-[--cinnabar] transform transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {t(`${key}.answer`)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA after FAQ */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">Still have questions?</p>
          <a
            href="#booking"
            className="inline-block px-6 py-3 bg-white border-2 border-[--foreground] text-[--foreground] font-bold rounded-lg hover:bg-gray-50 transition-colors"
          >
            Book a Free Intro to Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
