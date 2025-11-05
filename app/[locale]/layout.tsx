import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n';
import "../globals.css";

export const metadata: Metadata = {
  title: "28-Day Kickstart | CrossFit Leiden",
  description: "Jumpstart your fitness in 28 days – no experience needed, no pressure. All levels welcome at CrossFit Leiden.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  const normalizedLocale = locale as Locale;

  // Validate locale
  if (!locales.includes(normalizedLocale)) {
    notFound();
  }

  const messages = await getMessages({ locale: normalizedLocale });

  return (
    <html lang={normalizedLocale}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
