import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import Script from 'next/script';
import "../globals.css";

export const metadata: Metadata = {
  title: "28-Day Kickstart | CrossFit Leiden",
  description: "Jumpstart your fitness in 28 days – no experience needed, no pressure. All levels welcome at CrossFit Leiden.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>

        {/* HighLevel Booking Popup */}
        <iframe
          src="https://kilo.gymleadmachine.com/widget/form/ZTMHpqwf9WGDQN6VGSnU"
          style={{display: 'none', width: '100%', height: '100%', border: 'none', borderRadius: '3px'}}
          id="popup-ZTMHpqwf9WGDQN6VGSnU"
          data-layout="{'id':'POPUP'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="kickstart landingpage"
          data-height="340"
          data-layout-iframe-id="popup-ZTMHpqwf9WGDQN6VGSnU"
          data-form-id="ZTMHpqwf9WGDQN6VGSnU"
          title="kickstart landingpage"
        />
        <Script
          src="https://kilo.gymleadmachine.com/js/form_embed.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
