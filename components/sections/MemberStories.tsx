import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';

const stories = [
  {
    key: 'sarah',
    image: '/images/member-sarah.svg',
    videoUrl: 'https://youtu.be/dQw4w9WgXcQ',
    duration: '0:36',
  },
  {
    key: 'mark',
    image: '/images/member-mark.svg',
    videoUrl: 'https://youtu.be/dQw4w9WgXcQ',
    duration: '0:42',
  },
  {
    key: 'lisa',
    image: '/images/member-lisa.svg',
    videoUrl: 'https://youtu.be/dQw4w9WgXcQ',
    duration: '0:41',
  },
];

export function MemberStories() {
  const t = useTranslations('memberStories');

  return (
    <section id="member-stories" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--cinnabar)]">
            {t('eyebrow')}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
            {t('heading')}
          </h2>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">{t('subheading')}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {stories.map(({ key, image, videoUrl, duration }) => (
            <article
              key={key}
              className="group relative overflow-hidden rounded-3xl bg-gray-900 text-white shadow-lg"
            >
              <Image
                src={image}
                alt={t(`${key}.imageAlt`)}
                width={400}
                height={320}
                className="h-64 w-full object-cover opacity-90 transition-opacity group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" aria-hidden />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/80">
                  <span className="flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-white">
                    <svg
                      className="h-3 w-3"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    {duration}
                  </span>
                  <span>{t(`${key}.tag`)}</span>
                </div>
                <h3 className="mt-3 text-2xl font-semibold">{t(`${key}.title`)}</h3>
                <p className="mt-2 text-sm text-white/80">{t(`${key}.description`)}</p>
                <Button
                  href={videoUrl}
                  variant="ghost"
                  className="mt-6 inline-flex items-center gap-2 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span aria-hidden>▶</span>
                  {t('watchStory')}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
