import { useTranslations } from 'next-intl';

export function Testimonials() {
  const t = useTranslations('testimonials');

  const testimonials = [
    { key: 'testimonial1' },
    { key: 'testimonial2' },
    { key: 'testimonial3' },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[var(--foreground)] mb-12">
          {t('heading')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ key }) => (
            <div
              key={key}
              className="bg-gray-50 p-6 rounded-lg border-l-4 border-[color:var(--cinnabar)] hover:shadow-lg transition-shadow"
            >
              {/* Quote Icon */}
              <div className="text-[var(--jonquil)] mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                &ldquo;{t(`${key}.quote`)}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center">
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 rounded-full bg-[var(--verdigris)] flex items-center justify-center text-white font-bold mr-3">
                  {t(`${key}.name`).charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-[var(--foreground)]">{t(`${key}.name`)}</p>
                  <p className="text-sm text-gray-600">{t(`${key}.role`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Social Proof */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">{t('socialProof')}</p>
          <div className="flex justify-center items-center gap-1 text-[var(--jonquil)]">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-gray-700 font-medium">{t('averageRatingLabel')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
