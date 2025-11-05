import { useTranslations } from 'next-intl';

export function MemberStories() {
  const t = useTranslations('memberStories');

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
          {t('heading')}
        </h2>
        <div className="w-24 h-1 bg-[--jonquil] mx-auto mb-8"></div>
        <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          {t('subheading')}
        </p>

        {/* Video Container */}
        <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-800 aspect-video max-w-4xl mx-auto">
          {/* Placeholder for video - in production, replace with actual video embed */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[--cinnabar] to-[#d63d2a]">
            <div className="text-center">
              <svg
                className="w-20 h-20 mx-auto mb-4 text-white/90"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z"/>
              </svg>
              <p className="text-white text-lg font-medium">{t('videoPlaceholder')}</p>
              <p className="text-white/80 text-sm mt-2">{t('videoSubtext')}</p>
            </div>
          </div>

          {/* When you have a real video, uncomment and use this:
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Member Story Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          */}
        </div>

        {/* Stats below video */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-[--jonquil] mb-2">150+</div>
            <p className="text-gray-400">{t('stat1')}</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-[--jonquil] mb-2">28</div>
            <p className="text-gray-400">{t('stat2')}</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-[--jonquil] mb-2">4.9</div>
            <p className="text-gray-400">{t('stat3')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
