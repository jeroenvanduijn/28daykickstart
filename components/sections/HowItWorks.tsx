import { useTranslations } from 'next-intl';

export function HowItWorks() {
  const t = useTranslations('howItWorks');

  const steps = [
    { key: 'step1', number: '01' },
    { key: 'step2', number: '02' },
    { key: 'step3', number: '03' },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16">
          {t('heading')}
        </h2>

        <div className="space-y-10 sm:space-y-12">
          {steps.map(({ key, number }) => (
            <div key={key} className="flex flex-col sm:flex-row gap-6 sm:gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-cinnabar text-white rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold">
                  {number}
                </div>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                  {t(`${key}.title`)}
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3">
                  {t(`${key}.description`)}
                </p>

                {/* Step 3 has options list */}
                {key === 'step3' && (
                  <>
                    <ul className="text-base sm:text-lg text-gray-700 leading-relaxed space-y-2 ml-6 mb-3">
                      {(t.raw(`${key}.options`) as string[]).map((option, index) => (
                        <li key={index}>• {option}</li>
                      ))}
                    </ul>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      {t(`${key}.footer`)}
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
