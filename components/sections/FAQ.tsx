'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';

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
    <section className="bg-[#f8f6ff] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-3 text-center text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
          {t('heading')}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-base text-gray-600 sm:text-lg">
          {t('subheading')}
        </p>

        <div className="space-y-4">
          {faqs.map(({ key }, index) => (
            <div
              key={key}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-gray-50"
              >
                <span className="pr-4 font-bold text-[var(--foreground)]">
                  {t(`${key}.question`)}
                </span>
                <svg
                  className={`w-5 h-5 text-[var(--cinnabar)] transform transition-transform flex-shrink-0 ${
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
                <div className="px-6 pb-4 leading-relaxed text-gray-600">
                  {t(`${key}.answer`)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA after FAQ */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-700">{t('supportTitle')}</p>
          <Button variant="secondary" href="#booking">
            {t('supportCta')}
          </Button>
        </div>
      </div>
    </section>
  );
}
