import { useTranslations } from 'next-intl';

export function MemberStories() {
  const t = useTranslations('memberStories');

  const stories = [
    {
      key: 'story1',
      name: 'Elcin',
      role: 'Moeder van twee',
      summary: 'From solo workouts to discovering the power of structure, coaching, and an incredible community, Elcin has crushed her journey with us!',
      videoEmbed: (
        <div className="relative bg-gray-300 aspect-[9/16] overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/1133807494?badge=0&autopause=0&player_id=0&app_id=58479"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            title="Elcin - 100 visits strong!"
          ></iframe>
        </div>
      ),
    },
    {
      key: 'story2',
      name: 'Fleur',
      role: 'Drukke professional',
      summary: 'From struggling with push-ups and short runs to crushing her first Hyrox and hitting 300 visits.',
      videoEmbed: (
        <div className="relative bg-gray-300 aspect-[9/16] overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/1133807460?badge=0&autopause=0&player_id=0&app_id=58479"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            title="Fleur - 300 workouts strong!"
          ></iframe>
        </div>
      ),
    },
    {
      key: 'story3',
      name: 'Daan',
      role: 'Ouder van drie',
      summary: '527 sessions later, at almost 64 years old, he\'s heading to the Hyrox World Championships in Chicago. Just barely qualified, he says. But that\'s all he needed.',
      videoEmbed: (
        <div className="relative bg-gray-300 aspect-[4/3] overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/1139251716?badge=0&autopause=0&player_id=0&app_id=58479"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            title="Daan - From Leiden to Chicago"
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

              {/* Story Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{story.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{story.role}</p>
                <p className="text-gray-700">{story.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
