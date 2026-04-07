import React from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { LoadingOverlay } from "./components/sections/LoadingOverlay";
import { PhoneBanner } from "./components/sections/PhoneBanner";
import { HeroSection } from "./components/sections/HeroSection";
import { HowItWorksSection } from "./components/sections/HowItWorksSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { TrustBadgesSection } from "./components/sections/TrustBadgesSection";
import { VideoSection } from "./components/sections/VideoSection";
import { SolutionsSection } from "./components/sections/SolutionsSection";
import { ReasonsSection } from "./components/sections/ReasonsSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { StatsSection } from "./components/sections/StatsSection";
import { VideoBannerSection } from "./components/sections/VideoBannerSection";
import { FiveWaysSection } from "./components/sections/FiveWaysSection";
import { StatesSection } from "./components/sections/StatesSection";
import { CalculatorPromoSection } from "./components/sections/CalculatorPromoSection";
import { PricingFactorsSection } from "./components/sections/PricingFactorsSection";
import { WhyChooseSection } from "./components/sections/WhyChooseSection";
import { FaqSection } from "./components/sections/FaqSection";
import { BlogSection } from "./components/sections/BlogSection";
import { ContactSection } from "./components/sections/ContactSection";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function App() {
  return (
    <body className="text-neutral-800 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-montserrat">
      <LoadingOverlay />
      <PhoneBanner />
      <Header />
      <main role="main" className="box-border caret-transparent">
        <div id="home">
          <HeroSection />
        </div>
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        <div id="services">
          <ServicesSection />
        </div>
        <TrustBadgesSection />
        <VideoSection />
        <SolutionsSection />
        <div id="about">
          <ReasonsSection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <StatsSection />
        <VideoBannerSection />
        <FiveWaysSection />
        <div id="states">
          <StatesSection />
        </div>
        <CalculatorPromoSection />
        <PricingFactorsSection />
        <WhyChooseSection />
        <div id="faq">
          <FaqSection />
        </div>
        <BlogSection />
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />

      {/* Mobile sticky "Get Free Quote" bar */}
      <div className="fixed bottom-0 inset-x-0 z-[9999] md:hidden">
        <button
          type="button"
          onClick={() => scrollTo("quote")}
          className="w-full bg-lime-300 text-blue-950 font-bold text-base py-4 text-center shadow-[0_-2px_12px_rgba(0,0,0,0.15)]"
        >
          Get Free Quote
        </button>
      </div>
    </body>
  );
}
