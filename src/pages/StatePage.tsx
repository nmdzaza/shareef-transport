import React from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/layout/Header";
// StatePage: renders a state-specific car shipping page based on URL slug
import { Footer } from "../components/layout/Footer";
import { HeroSection } from "../components/sections/HeroSection";
import { HowItWorksSection } from "../components/sections/HowItWorksSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { FaqSection } from "../components/sections/FaqSection";
import { ContactSection } from "../components/sections/ContactSection";

// Derives a display-friendly state name from the URL slug
// e.g. "california-car-shipping" → "California"
function stateNameFromSlug(slug: string): string {
  if (!slug) return "";
  // Remove trailing "-car-shipping" or "-auto-transport" if present
  const cleaned = slug
    .replace(/-car-shipping$/, "")
    .replace(/-auto-transport$/, "");
  return cleaned
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

const STATE_FACTS: Record<string, { cities: string[]; blurb: string }> = {
  california: {
    cities: ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "Fresno"],
    blurb:
      "California is the largest auto market in the U.S. Whether you're shipping to LA, the Bay Area, or San Diego, Shareef Transport provides door-to-door service across the state.",
  },
  texas: {
    cities: ["Houston", "Dallas", "Austin", "San Antonio", "El Paso"],
    blurb:
      "Texas has some of the longest distances between cities in the country. Shareef Transport handles both intrastate Texas shipping and cross-country routes efficiently.",
  },
  florida: {
    cities: ["Miami", "Orlando", "Tampa", "Jacksonville", "Fort Lauderdale"],
    blurb:
      "Florida's warm climate makes it a top destination for snowbirds and retirees relocating vehicles. Shareef Transport offers reliable open and enclosed transport throughout Florida.",
  },
  "new-york": {
    cities: ["New York City", "Buffalo", "Rochester", "Albany", "Syracuse"],
    blurb:
      "Shipping to or from New York can be complex with city restrictions. Shareef Transport navigates urban logistics to deliver your vehicle safely and on time.",
  },
};

export default function StatePage() {
  const params = useParams<Record<string, string>>();
  // Get slug from any param (the route uses :stateSlug pattern)
  const slug = Object.values(params)[0] ?? "";
  const stateKey = slug.replace(/-car-shipping$/, "").replace(/-auto-transport$/, "");
  const stateName = stateNameFromSlug(slug) || "Your State";

  const facts = STATE_FACTS[stateKey.toLowerCase()] ?? {
    cities: ["Major cities across the state"],
    blurb: `Shareef Transport provides reliable vehicle shipping to and from ${stateName}. Get a free quote today and experience stress-free auto transport.`,
  };

  return (
    <div className="text-neutral-800 text-base font-normal bg-white font-montserrat">
      <Header />
      <main role="main" className="mt-[75px] md:mt-40">
        {/* State Hero Banner */}
        <section className="relative bg-blue-950 py-20 px-4 text-white text-center">
          <div className="max-w-[1200px] mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {stateName} Car Shipping
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-6">
              {facts.blurb}
            </p>
            <a
              href="/#quote"
              className="inline-block bg-amber-400 text-blue-950 font-bold px-8 py-4 rounded-md text-lg hover:bg-amber-300 transition-colors"
            >
              Get a Free Quote
            </a>
          </div>
        </section>

        {/* Key cities */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-6">
              We Ship To and From All {stateName} Cities
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {facts.cities.map((city) => (
                <span
                  key={city}
                  className="bg-white border border-zinc-200 rounded-full px-5 py-2 text-blue-950 font-semibold shadow-sm"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Reuse existing site sections */}
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        <div id="services">
          <ServicesSection />
        </div>
        <div id="faq">
          <FaqSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 inset-x-0 z-[9999] md:hidden">
        <a
          href="/#quote"
          className="block w-full bg-lime-300 text-blue-950 font-bold text-base py-4 text-center shadow-[0_-2px_12px_rgba(0,0,0,0.15)]"
        >
          Get Free Quote
        </a>
      </div>
    </div>
  );
}
