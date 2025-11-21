import { useTranslations } from 'next-intl';

export function Community() {
  const t = useTranslations('community');

  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          {t('heading')}
        </h2>
        <p className="text-xl sm:text-2xl text-center text-gray-700 mb-16 sm:mb-20">
          {t('subheading')}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-8">
              {/* Bullet 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#fef1f0] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#E34234]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {t('bullet1.title')}
                  </h3>
                  <p className="text-lg text-gray-700">
                    {t('bullet1.description')}
                  </p>
                </div>
              </div>

              {/* Bullet 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#fef1f0] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#E34234]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {t('bullet2.title')}
                  </h3>
                  <p className="text-lg text-gray-700">
                    {t('bullet2.description')}
                  </p>
                </div>
              </div>

              {/* Bullet 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#fef1f0] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#E34234]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {t('bullet3.title')}
                  </h3>
                  <p className="text-lg text-gray-700">
                    {t('bullet3.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Community Image */}
          <div>
            <div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-lg">
              <img
                src="https://storage.googleapis.com/msgsndr/s0YuoK12A9YPXCKsfUp3/media/69203bc6d9b07d1398f639fd.jpg"
                alt="CrossFit Leiden leden lachen en werken samen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
