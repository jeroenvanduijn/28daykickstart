import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--foreground)] py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Logo & Tagline */}
          <div>
            <h3 className="mb-2 text-2xl font-bold">CrossFit Leiden</h3>
            <p className="max-w-xs text-sm text-gray-400">{t('tagline')}</p>
            <div className="mt-6 flex items-center gap-3 text-sm text-gray-300">
              <svg className="h-5 w-5 text-[var(--jonquil)]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <span>{t('reviewHighlight')}</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-3 font-bold">{t('contactHeading')}</h4>
            <p className="mb-2 text-sm text-gray-400">{t('address')}</p>
            <a href="tel:+31612345678" className="mb-1 block text-sm text-[var(--jonquil)] hover:underline">
              {t('phone')}
            </a>
            <a href="mailto:info@crossfitleiden.nl" className="block text-sm text-[var(--jonquil)] hover:underline">
              info@crossfitleiden.nl
            </a>
            <p className="mt-4 text-xs text-gray-500">{t('chamberInfo')}</p>
          </div>

          {/* Language Switcher & Links */}
          <div>
            <h4 className="mb-3 font-bold">{t('languageHeading')}</h4>
            <LanguageSwitcher />
            <div className="mt-6 space-y-2">
              <Link href="/privacy" className="block text-sm text-gray-400 transition hover:text-white">
                {t('privacy')}
              </Link>
              <Link href="/contact" className="block text-sm text-gray-400 transition hover:text-white">
                {t('contact')}
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          &copy; {currentYear} CrossFit Leiden. {t('rights')}.
        </div>
      </div>
    </footer>
  );
}
