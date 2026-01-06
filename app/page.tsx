import Header from "@/components/header";
//import HeroSection from "@/components/hero-section"
import MissionSection from "@/components/mission-section";
import RiderTechSection from "@/components/rider-tech-section";
import BikeShowcase from "@/components/bike-showcase";
import HelmetHall from "@/components/helmet-hall";
import SocialSection from "@/components/social-section";
import Footer from "@/components/footer";
import MasonryGallerySection from "@/components/masonry-gallery-section";
import Image from "next/image";
import { RaceDayCountdown } from "@/components/race-day-countdown";
import { InteractiveSchedule } from "@/components/interactive-schedule";
import { HistoricalResultsAccordion } from "@/components/historical-results-accordion";

export default function Home() {
  return (
    <main className="relative dark:-black">
      <Header />
      <SocialSection />
      {/*<HeroSection />*/}
      <div className="relative z-10">
        <MissionSection />
        <MasonryGallerySection />
        <RiderTechSection />
        <HelmetHall />

        {/*<RaceDayCountdown />*/}
        {/*<InteractiveSchedule />*/}
      { /*  <HistoricalResultsAccordion /> */ }

        {/*<Footer />*/}
      </div>
    </main>
  );
}
