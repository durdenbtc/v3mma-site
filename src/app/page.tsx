import Hero from "@/components/Hero";
import Disciplines from "@/components/Disciplines";
import VideoShowcase from "@/components/VideoShowcase";
import Coach from "@/components/Coach";
import Gallery from "@/components/Gallery";
import FreeTrial from "@/components/FreeTrial";
import PricingPreview from "@/components/PricingPreview";
import Reviews from "@/components/Reviews";
import Schedule from "@/components/Schedule";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Disciplines />
      <VideoShowcase />
      <Coach />
      <Gallery />
      <FreeTrial />
      <PricingPreview />
      <Reviews />
      <Schedule />
      <FAQ />
      <Contact />
      <CTA />
    </>
  );
}
