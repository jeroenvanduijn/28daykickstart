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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[--foreground] mb-16">
          {t('heading')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map(({ key, number }, index) => (
            <div key={key} className="relative">
              {/* Connector Line (hidden on mobile, shown on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-[--verdigris] -z-10" style={{ width: 'calc(100% - 2rem)' }} />
              )}

              {/* Step Number */}
              <div className="w-16 h-16 rounded-full bg-[--cinnabar] text-white flex items-center justify-center text-2xl font-bold mb-4 mx-auto md:mx-0">
                {number}
              </div>

              {/* Step Content */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-[--foreground] mb-3">
                  {t(`${key}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Timeline for Mobile */}
        <div className="md:hidden mt-12 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[--cinnabar]" />
            <div className="w-12 h-0.5 bg-[--verdigris]" />
            <div className="w-3 h-3 rounded-full bg-[--cinnabar]" />
            <div className="w-12 h-0.5 bg-[--verdigris]" />
            <div className="w-3 h-3 rounded-full bg-[--cinnabar]" />
          </div>
        </div>
      </div>
    </section>
  );
}
