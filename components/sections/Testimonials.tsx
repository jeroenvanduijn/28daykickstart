import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function Testimonials() {
  const t = useTranslations('testimonials');

  const testimonials = [
    { key: 'testimonial1', image: '/images/member-sarah.svg' },
    { key: 'testimonial2', image: '/images/member-mark.svg' },
    { key: 'testimonial3', image: '/images/member-lisa.svg' },
  ];

  return (
    <section className="bg-[#f9f9fb] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
          {t('heading')}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-gray-600 sm:text-lg">
          {t('intro')}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map(({ key, image }) => (
            <article
              key={key}
              className="flex h-full flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={image}
                  alt={t(`${key}.imageAlt`)}
                  width={80}
                  height={80}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-lg font-semibold text-[var(--foreground)]">{t(`${key}.name`)}</p>
                  <p className="text-sm text-gray-600">{t(`${key}.role`)}</p>
                </div>
              </div>

              <p className="flex-1 text-base leading-relaxed text-gray-700">
                &ldquo;{t(`${key}.quote`)}&rdquo;
              </p>

              <div className="flex items-center gap-1 text-[var(--jonquil)]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 text-center text-sm text-gray-600 sm:text-base">
          <p>{t('socialProof')}</p>
          <div className="flex items-center gap-2 font-medium text-[var(--foreground)]">
            <span className="text-[var(--jonquil)]">★ 4.9</span>
            <span>{t('averageRatingLabel')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
