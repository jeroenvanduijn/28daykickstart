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
      setSubmitMessage('Thank you! We\'ll contact you within 24 hours to schedule your free intro.');
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
    <section id="booking" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[--cinnabar] to-[#d63d2a] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('ready')}
          </h2>
          <p className="text-lg opacity-90">
            {t('noPressure')}
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-lg p-6 sm:p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--cinnabar] focus:border-transparent text-gray-900"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--cinnabar] focus:border-transparent text-gray-900"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--cinnabar] focus:border-transparent text-gray-900"
                placeholder="+31 6 12345678"
              />
            </div>

            {/* Optional Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Anything you&apos;d like us to know? (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[--cinnabar] focus:border-transparent text-gray-900"
                placeholder="Tell us about your goals, concerns, or questions..."
              />
            </div>

            {/* Submit Button */}
            <Button
              variant="primary"
              size="lg"
              className="w-full"
            >
              {isSubmitting ? 'Submitting...' : t('bookNow')}
            </Button>

            {/* Success Message */}
            {submitMessage && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-sm">{submitMessage}</p>
              </div>
            )}

            {/* Privacy Notice */}
            <p className="text-xs text-gray-500 text-center mt-4">
              We&apos;ll never spam you or share your info. Your privacy is important to us.
            </p>
          </form>
        </div>

        {/* Trust Signals Below Form */}
        <div className="mt-8 text-center text-white/90 text-sm space-y-2">
          <p>✓ Free, no obligation intro session</p>
          <p>✓ We&apos;ll respond within 24 hours</p>
          <p>✓ No workout on your first visit – just a friendly chat</p>
        </div>
      </div>
    </section>
  );
}
