import { useTranslations } from 'next-intl';

export function MemberStories() {
  const t = useTranslations('memberStories');

  const stories = [
    { key: 'story1' },
    { key: 'story2' },
    { key: 'story3' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 sm:mb-20">
          {t('heading')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map(({ key }) => (
            <div key={key} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              {/* Video Placeholder */}
              <div className="relative bg-gray-300 aspect-video flex items-center justify-center cursor-pointer group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-orange-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Story Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{t(`${key}.name`)}</h3>
                <p className="text-sm text-gray-600 mb-3">{t(`${key}.role`)}</p>
                <p className="text-gray-700">{t(`${key}.summary`)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note about video embeds */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>Video embeds kunnen hier worden toegevoegd (YouTube, Vimeo, etc.)</p>
        </div>
      </div>
    </section>
  );
}
