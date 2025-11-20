import { useTranslations } from 'next-intl';

export function Benefits() {
  const t = useTranslations('benefits');

  const benefits = [
    {
      key: 'item1',
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-cinnabar" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      key: 'item2',
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-cinnabar" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      key: 'item3',
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-cinnabar" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      key: 'item4',
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-cinnabar" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      key: 'item5',
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-cinnabar" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16">
          {t('heading')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {benefits.map((benefit) => (
            <div key={benefit.key} className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-cinnabar/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                {t(`${benefit.key}.title`)}
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {t(`${benefit.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
