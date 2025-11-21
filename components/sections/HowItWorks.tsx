import { useTranslations } from 'next-intl';

export function HowItWorks() {
  const t = useTranslations('howItWorks');

  const steps = [
    { key: 'step1', number: '01' },
    { key: 'step2', number: '02' },
    { key: 'step3', number: '03' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-20">
          {t('heading')}
        </h2>

        <div className="flex flex-col gap-12">
          {steps.map(({ key, number }) => (
            <div key={key} className="flex flex-col sm:flex-row gap-8 text-center sm:text-left">
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <div className="w-24 h-24 bg-[#F4C430] text-[#0B0E11] rounded-full flex items-center justify-center text-3xl font-bold">
                  {number}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4">
                  {t(`${key}.title`)}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  {t(`${key}.description`)}
                </p>

                {key === 'step3' && (
                  <>
                    <ul className="text-lg text-gray-700 leading-relaxed space-y-2 sm:ml-6 mb-3">
                      {(t.raw(`${key}.options`) as string[]).map((option, index) => (
                        <li key={index}>• {option}</li>
                      ))}
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed">
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
