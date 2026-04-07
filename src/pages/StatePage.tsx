import React from "react";
import { Helmet } from "react-helmet-async";
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

interface StateFact {
  cities: string[];
  blurb: string;
  heroHeadline?: string;
  heroSubtext?: string;
  facts?: { label: string; value: string }[];
  shippingNotes?: string[];
}

const STATE_FACTS: Record<string, StateFact> = {
  california: {
    heroHeadline: "California Car Shipping — Door-to-Door Service Statewide",
    heroSubtext:
      "From the Bay Area to San Diego, Shareef Transport delivers your vehicle safely across the nation's largest auto market.",
    cities: [
      "Los Angeles",
      "San Francisco",
      "San Diego",
      "Sacramento",
      "Fresno",
      "San Jose",
      "Long Beach",
      "Oakland",
    ],
    blurb:
      "California is the largest auto market in the U.S. Whether you're shipping to LA, the Bay Area, or San Diego, Shareef Transport provides door-to-door service across the state.",
    facts: [
      { label: "Avg. Transit Time (cross-country)", value: "7–10 days" },
      { label: "Open Transport Rate", value: "From $799" },
      { label: "Enclosed Transport Rate", value: "From $1,199" },
      { label: "Hot Routes", value: "LA ↔ Phoenix, LA ↔ Las Vegas, SF ↔ Portland" },
    ],
    shippingNotes: [
      "California DMV requires a smog certificate for vehicles registered in-state — confirm with your carrier.",
      "Los Angeles metro pickups may require terminal drop-off due to city access restrictions.",
      "Open transport is the most affordable option for standard vehicles in California's mild climate.",
      "Enclosed transport is recommended for luxury and classic cars traveling to/from high-value dealerships.",
    ],
  },
  texas: {
    heroHeadline: "Texas Car Shipping — Statewide & Cross-Country Routes",
    heroSubtext:
      "Texas is big — and so is our carrier network. Shareef Transport moves vehicles across every major Texas city and coast to coast.",
    cities: [
      "Houston",
      "Dallas",
      "Austin",
      "San Antonio",
      "El Paso",
      "Fort Worth",
      "Arlington",
      "Corpus Christi",
    ],
    blurb:
      "Texas has some of the longest distances between cities in the country. Shareef Transport handles both intrastate Texas shipping and cross-country routes efficiently.",
    facts: [
      { label: "Avg. Transit Time (TX to East Coast)", value: "5–8 days" },
      { label: "Open Transport Rate", value: "From $649" },
      { label: "Enclosed Transport Rate", value: "From $999" },
      { label: "Hot Routes", value: "Dallas ↔ Phoenix, Houston ↔ Atlanta, Austin ↔ Denver" },
    ],
    shippingNotes: [
      "Texas does not require emissions testing for out-of-state vehicle transport.",
      "Intrastate Texas routes (e.g., Houston to El Paso) span 750+ miles — plan for a 2–3 day instate transit.",
      "Dallas and Houston are major hub terminals with daily carrier availability.",
      "Military shipping discounts available for personnel stationed at Fort Hood, Fort Bliss, and other TX bases.",
    ],
  },
  florida: {
    heroHeadline: "Florida Car Shipping — Snowbird & Year-Round Service",
    heroSubtext:
      "Whether you're a seasonal snowbird or a permanent Florida resident, Shareef Transport handles your vehicle with care.",
    cities: [
      "Miami",
      "Orlando",
      "Tampa",
      "Jacksonville",
      "Fort Lauderdale",
      "Naples",
      "Sarasota",
      "Tallahassee",
    ],
    blurb:
      "Florida's warm climate makes it a top destination for snowbirds and retirees relocating vehicles. Shareef Transport offers reliable open and enclosed transport throughout Florida.",
    facts: [
      { label: "Avg. Transit Time (FL to Northeast)", value: "4–7 days" },
      { label: "Open Transport Rate", value: "From $699" },
      { label: "Enclosed Transport Rate", value: "From $1,099" },
      { label: "Hot Routes", value: "Miami ↔ New York, Orlando ↔ Chicago, Tampa ↔ Atlanta" },
    ],
    shippingNotes: [
      "Snowbird season (Oct–Apr) sees high demand — book 2–3 weeks in advance for best pricing.",
      "Florida's humid climate means open transport is safe year-round for most standard vehicles.",
      "Miami-Dade and Broward County pickups have terminal options near major interstates.",
      "Enclosed transport is popular for exotic and luxury vehicles imported through Miami's port.",
    ],
  },
  "new-york": {
    heroHeadline: "New York Car Shipping — Urban & Statewide Logistics",
    heroSubtext:
      "Shipping a car to or from New York? Shareef Transport handles the complexity so you don't have to.",
    cities: [
      "New York City",
      "Buffalo",
      "Rochester",
      "Albany",
      "Syracuse",
      "Yonkers",
      "Long Island",
      "White Plains",
    ],
    blurb:
      "Shipping to or from New York can be complex with city restrictions. Shareef Transport navigates urban logistics to deliver your vehicle safely and on time.",
    facts: [
      { label: "Avg. Transit Time (NY to West Coast)", value: "7–10 days" },
      { label: "Open Transport Rate", value: "From $849" },
      { label: "Enclosed Transport Rate", value: "From $1,299" },
      { label: "Hot Routes", value: "NYC ↔ Miami, NYC ↔ Chicago, Buffalo ↔ Boston" },
    ],
    shippingNotes: [
      "New York City has strict street access rules — most carriers use terminal pickup in New Jersey or outer boroughs.",
      "NYC-area terminal locations include Newark, NJ and Yonkers, NY for convenient drop-off.",
      "Winter months (Dec–Feb) may add 1–2 days to transit times due to Northeast weather.",
      "Enclosed transport is strongly recommended for luxury vehicles entering or leaving the NYC metro area.",
    ],
  },
};

export default function StatePage() {
  const params = useParams<Record<string, string>>();
  // Get slug from any param (the route uses :stateSlug pattern)
  const slug = Object.values(params)[0] ?? "";
  const stateKey = slug.replace(/-car-shipping$/, "").replace(/-auto-transport$/, "");
  const stateName = stateNameFromSlug(slug) || "Your State";

  const facts: StateFact = STATE_FACTS[stateKey.toLowerCase()] ?? {
    cities: ["Major cities across the state"],
    blurb: `Shareef Transport provides reliable vehicle shipping to and from ${stateName}. Get a free quote today and experience stress-free auto transport.`,
  };

  const heroHeadline = facts.heroHeadline ?? `${stateName} Car Shipping`;
  const heroSubtext = facts.heroSubtext ?? facts.blurb;

  return (
    <div className="text-neutral-800 text-base font-normal bg-white font-montserrat">
      <Helmet>
        <title>{stateName} Car Shipping | Shareef Transport</title>
        <meta name="description" content={`Reliable car shipping to and from ${stateName}. Get a free quote from Shareef Transport for open and enclosed auto transport.`} />
      </Helmet>
      <Header />
      <main role="main" className="mt-[75px] md:mt-40">
        {/* State Hero Banner */}
        <section className="relative bg-blue-950 py-20 px-4 text-white text-center">
          <div className="max-w-[1200px] mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {heroHeadline}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-6">
              {heroSubtext}
            </p>
            <a
              href="#quote"
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

        {/* Shipping rates & stats table */}
        {facts.facts && facts.facts.length > 0 && (
          <section className="py-12 bg-white">
            <div className="max-w-[900px] mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-6 text-center">
                {stateName} Shipping Rates &amp; Stats
              </h2>
              <div className="overflow-x-auto rounded-xl shadow-sm border border-zinc-200">
                <table className="w-full text-left">
                  <thead className="bg-blue-950 text-white">
                    <tr>
                      <th className="px-6 py-3 font-semibold">Detail</th>
                      <th className="px-6 py-3 font-semibold">Info</th>
                    </tr>
                  </thead>
                  <tbody>
                    {facts.facts.map((row, i) => (
                      <tr key={row.label} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="px-6 py-4 font-semibold text-blue-950">{row.label}</td>
                        <td className="px-6 py-4 text-neutral-700">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* State-specific shipping notes */}
        {facts.shippingNotes && facts.shippingNotes.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="max-w-[900px] mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-6 text-center">
                What to Know Before Shipping in {stateName}
              </h2>
              <ul className="space-y-4">
                {facts.shippingNotes.map((note, i) => (
                  <li key={i} className="flex gap-3 items-start bg-white border border-zinc-200 rounded-xl px-5 py-4 shadow-sm">
                    <span className="mt-1 w-5 h-5 flex-shrink-0 bg-amber-400 rounded-full flex items-center justify-center text-blue-950 font-bold text-xs">{i + 1}</span>
                    <span className="text-neutral-700">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

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
          href="#quote"
          className="block w-full bg-lime-300 text-blue-950 font-bold text-base py-4 text-center shadow-[0_-2px_12px_rgba(0,0,0,0.15)]"
        >
          Get Free Quote
        </a>
      </div>
    </div>
  );
}
