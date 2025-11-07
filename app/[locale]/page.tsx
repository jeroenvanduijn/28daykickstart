import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Hero } from '@/components/sections/Hero';
import { Benefits } from '@/components/sections/Benefits';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { TrustSignals } from '@/components/sections/TrustSignals';
import { CommunitySpotlight } from '@/components/sections/CommunitySpotlight';
import { MemberStories } from '@/components/sections/MemberStories';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';
import { StickyCTA } from '@/components/ui/StickyCTA';
import { SiteHeader } from '@/components/ui/SiteHeader';

type PageProps = {
  params: { locale: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pb-24 md:pb-0">
        <Hero />
        <Benefits />
        <HowItWorks />
        <TrustSignals />
        <CommunitySpotlight />
        <MemberStories />
        <Testimonials />
        <CTA />
        <FAQ />
        <Footer />
      </main>
      <StickyCTA />
    </>
  );
}
