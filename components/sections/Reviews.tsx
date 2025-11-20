import { useTranslations } from 'next-intl';

export function Reviews() {
  const t = useTranslations('reviews');

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16">
          {t('heading')}
        </h2>

        {/* HighLevel Reviews Embed Placeholder */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg">
          <div className="text-center text-gray-500 py-12">
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p className="text-lg font-semibold mb-2">HIGHLEVEL REVIEWS EMBED HIER</p>
            <p className="text-sm">Plaats hier de embed code voor reviews</p>
          </div>
          {/*
            INSTRUCTIES: Vervang bovenstaande placeholder met je HighLevel reviews widget
            Bijvoorbeeld:
            <script src="https://widgets.leadconnectorhq.com/loader.js"></script>
            <div class="ghl-reviews-widget" data-id="YOUR_WIDGET_ID"></div>
          */}
        </div>
      </div>
    </section>
  );
}
