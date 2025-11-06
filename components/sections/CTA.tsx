'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';

export function CTA() {
  const t = useTranslations('cta');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate form submission - in production, integrate with actual booking system
    setTimeout(() => {
      setSubmitMessage(t('successMessage'));
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="booking"
      className="scroll-mt-32 bg-gradient-to-br from-[color:var(--cinnabar)] to-[#d63d2a] py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('ready')}
          </h2>
          <p className="text-lg opacity-90">
            {t('noPressure')}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {t('location')}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M2 12l9 6 9-6-9-6-9 6z" />
                <path d="M2 12l9 6 9-6" />
                <path d="M2 12l9-6 9 6" />
              </svg>
              {t('guarantee')}
            </span>
          </div>
        </div>

        {/* Booking Form */}
        <div className="rounded-3xl bg-white p-6 shadow-xl sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                {t('form.nameLabel')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-[color:var(--cinnabar)]"
                placeholder={t('form.namePlaceholder')}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                {t('form.emailLabel')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-[color:var(--cinnabar)]"
                placeholder={t('form.emailPlaceholder')}
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                {t('form.phoneLabel')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-[color:var(--cinnabar)]"
                placeholder={t('form.phonePlaceholder')}
              />
            </div>

            {/* Optional Message */}
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                {t('form.messageLabel')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-[color:var(--cinnabar)]"
                placeholder={t('form.messagePlaceholder')}
              />
            </div>

            {/* Submit Button */}
            <Button variant="primary" size="lg" className="w-full">
              {isSubmitting ? t('form.submitting') : t('bookNow')}
            </Button>

            {/* Success Message */}
            {submitMessage && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-sm">{submitMessage}</p>
              </div>
            )}

            {/* Privacy Notice */}
            <p className="mt-4 text-center text-xs text-gray-500">{t('form.privacy')}</p>
          </form>

          <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-gray-50 p-4 text-gray-700 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3 text-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--cinnabar)]/10 text-[var(--cinnabar)]">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </span>
              <p className="text-sm leading-snug">{t('promise')}</p>
            </div>
            <Button
              href="https://wa.me/31611111111?text=Hi%20CrossFit%20Leiden!%20Ik%20wil%20meer%20weten%20over%20de%2028-daagse%20kickstart."
              variant="whatsapp"
              size="md"
              className="flex items-center justify-center gap-2"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="h-5 w-5" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
                <path d="M16 .5C7.444.5.5 7.444.5 16a15.4 15.4 0 002.136 7.787L1.5 31.5l7.932-1.097A15.448 15.448 0 0016 31.5C24.556 31.5 31.5 24.556 31.5 16S24.556.5 16 .5zm0 28c-2.395 0-4.743-.644-6.8-1.862l-.486-.288-4.7.649.656-4.586-.31-.488A12.376 12.376 0 013.5 16C3.5 8.602 8.602 3.5 16 3.5S28.5 8.602 28.5 16 23.398 28.5 16 28.5zm7.088-9.653c-.388-.194-2.294-1.13-2.65-1.259-.355-.129-.614-.194-.874.194-.258.388-1.001 1.259-1.226 1.523-.226.258-.451.29-.839.097-.388-.194-1.639-.602-3.124-1.917-1.156-1.031-1.937-2.305-2.163-2.694-.226-.388-.024-.598.17-.79.175-.174.388-.451.582-.677.194-.226.258-.388.387-.646.129-.258.064-.484-.032-.678-.097-.194-.874-2.106-1.197-2.887-.314-.754-.635-.651-.874-.664-.226-.012-.484-.012-.743-.012s-.678.097-1.035.484c-.355.388-1.355 1.323-1.355 3.226 0 1.903 1.386 3.741 1.579 4.005.194.258 2.727 4.164 6.607 5.842.924.399 1.645.637 2.206.816.926.295 1.769.254 2.438.154.744-.111 2.294-.938 2.619-1.844.323-.906.323-1.682.226-1.844-.097-.161-.355-.258-.743-.451z" />
              </svg>
              {t('whatsAppCta')}
            </Button>
          </div>
        </div>

        <div className="mt-8 space-y-2 text-center text-sm text-white/90">
          <p>✓ {t('trustPoints.first')}</p>
          <p>✓ {t('trustPoints.second')}</p>
          <p>✓ {t('trustPoints.third')}</p>
        </div>
      </div>
    </section>
  );
}
