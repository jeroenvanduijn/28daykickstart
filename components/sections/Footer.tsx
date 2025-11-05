import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[--foreground] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Tagline */}
          <div>
            <h3 className="text-2xl font-bold mb-3">CrossFit Leiden</h3>
            <p className="text-sm text-gray-400 mb-3">{t('tagline')}</p>
            <p className="text-xs text-gray-500 leading-relaxed">{t('taglineExtended')}</p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-3">Contact</h4>
            <p className="text-sm text-gray-400 mb-2">{t('address')}</p>
            <a href="tel:+31612345678" className="text-sm text-[--cinnabar] hover:underline block mb-1">
              +31 6 1234 5678
            </a>
            <a href="mailto:info@crossfitleiden.nl" className="text-sm text-[--cinnabar] hover:underline block">
              info@crossfitleiden.nl
            </a>
          </div>

          {/* Language Switcher & Links */}
          <div>
            <h4 className="font-bold mb-3">Language</h4>
            <LanguageSwitcher />
            <div className="mt-6">
              <a href="/privacy" className="text-sm text-gray-400 hover:text-white block mb-2">
                {t('privacy')}
              </a>
              <a href="/contact" className="text-sm text-gray-400 hover:text-white block">
                {t('contact')}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} CrossFit Leiden. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
