import { useTranslations } from 'next-intl';

export function MemberStories() {
  const t = useTranslations('memberStories');

  const stories = [
    {
      key: 'story1',
      name: 'Elcin',
      videoEmbed: (
        <div className="relative bg-black aspect-[9/16] overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/1133807494?badge=0&autopause=0&player_id=0&app_id=58479"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            title="Elcin"
          ></iframe>
        </div>
      ),
    },
    {
      key: 'story2',
      name: 'Fleur',
      videoEmbed: (
        <div className="relative bg-black aspect-[9/16] overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/1133807460?badge=0&autopause=0&player_id=0&app_id=58479"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            title="Fleur"
          ></iframe>
        </div>
      ),
    },
    {
      key: 'story3',
      name: 'Daan',
      videoEmbed: (
        <div className="relative bg-black aspect-[9/16] overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/1139251716?badge=0&autopause=0&player_id=0&app_id=58479"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            title="Daan"
          ></iframe>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 sm:mb-20">
          {t('heading')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story.key} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              {/* Video Embed */}
              {story.videoEmbed}

              {/* Story Name Only */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold">{story.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
