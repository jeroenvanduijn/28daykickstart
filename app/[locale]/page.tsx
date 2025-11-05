import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Hero } from '@/components/sections/Hero';
import { Benefits } from '@/components/sections/Benefits';
import { CommunitySpotlight } from '@/components/sections/CommunitySpotlight';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { MemberStories } from '@/components/sections/MemberStories';
import { TrustSignals } from '@/components/sections/TrustSignals';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';
import { StickyCTA } from '@/components/ui/StickyCTA';

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
      <main className="min-h-screen">
        <Hero />
        <Benefits />
        <CommunitySpotlight />
        <HowItWorks />
        <MemberStories />
        <TrustSignals />
        <Testimonials />
        <CTA />
        <FAQ />
        <Footer />
      </main>
      <StickyCTA />
    </>
  );
}
