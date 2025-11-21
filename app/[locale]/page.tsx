import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Benefits } from '@/components/sections/Benefits';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Coaches } from '@/components/sections/Coaches';
import { Community } from '@/components/sections/Community';
import { MemberStories } from '@/components/sections/MemberStories';
import { Reviews } from '@/components/sections/Reviews';
import { CTA } from '@/components/sections/CTA';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';
import { BookingPopup } from '@/components/ui/BookingPopup';

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Benefits />
        <HowItWorks />
        <Coaches />
        <Community />
        <MemberStories />
        <Reviews />
        <CTA />
        <FAQ />
        <Footer />
      </main>
      <BookingPopup />
    </>
  );
}
