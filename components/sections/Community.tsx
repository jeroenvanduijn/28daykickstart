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
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

          {/* Placeholder image */}
          <div>
            <div className="bg-gray-300 rounded-2xl aspect-[4/3] flex items-center justify-center text-gray-600">
              <div className="text-center p-6">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">Foto: leden lachen, samenwerken<br />of een beginner helpen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
