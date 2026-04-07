import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

const PHONE = "(602) 555-0100";
const COMPANY = "Shareef Transport";

export default function MotorcycleShippingPage() {
  return (
    <div className="text-neutral-800 text-base font-normal bg-white font-montserrat">
      <Helmet>
        <title>Motorcycle Shipping | Shareef Transport</title>
        <meta name="description" content="Safe, reliable motorcycle shipping nationwide. Open and enclosed options available." />
      </Helmet>
      <Header />

      {/* Hero */}
      <section
        className="relative mt-[75px] md:mt-40 bg-cover bg-center min-h-[420px] flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #0a2852 0%, #1e4db7 100%)",
        }}
      >
        <div className="max-w-[1200px] w-full mx-auto px-[15px] py-16 text-white">
          <p className="uppercase text-blue-300 font-semibold tracking-widest text-sm mb-3">
            Specialized Shipping Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 max-w-2xl">
            Motorcycle Shipping You Can Trust
          </h1>
          <p className="text-blue-100 text-lg md:text-xl leading-relaxed max-w-xl mb-8">
            {COMPANY} delivers door-to-door motorcycle transport across the country — safely crated, fully insured, and on time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-7 py-4 rounded-full text-center transition-colors"
            >
              Call {PHONE}
            </a>
            <Link
              to="/"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-7 py-4 rounded-full text-center transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-blue-950 text-white py-5">
        <div className="max-w-[1200px] mx-auto px-[15px] flex flex-wrap justify-center gap-8 text-sm font-semibold uppercase tracking-wider">
          {["Licensed &amp; Insured", "Door-to-Door Pickup", "Real-Time Tracking", "5-Star Rated", "Free Quotes"].map(
            (item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </span>
            )
          )}
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1200px] w-full mx-auto px-[15px]">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center mb-3">
            How Motorcycle Shipping Works
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
            We handle every detail from first call to final delivery.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Get a Quote",
                desc: "Call us or fill out our online form for a free, no-obligation motorcycle shipping quote.",
              },
              {
                step: "2",
                title: "Schedule Pickup",
                desc: "We dispatch a driver to your location. No need to drop off at a terminal.",
              },
              {
                step: "3",
                title: "Safe Transport",
                desc: "Your bike is secured in a crate or soft-tie system and tracked in real time.",
              },
              {
                step: "4",
                title: "Delivered to You",
                desc: "We deliver directly to your destination address and inspect the bike with you.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-blue-950 font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] w-full mx-auto px-[15px]">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center mb-3">
            Our Motorcycle Transport Options
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
            Whether you ride a cruiser, sport bike, or vintage classic — we have the right solution.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏍️",
                title: "Open Transport",
                price: "From $299",
                features: [
                  "Most affordable option",
                  "Soft-tie securing system",
                  "Ideal for standard bikes",
                  "Door-to-door delivery",
                  "Real-time GPS tracking",
                ],
              },
              {
                icon: "📦",
                title: "Enclosed Transport",
                price: "From $499",
                features: [
                  "Full weather protection",
                  "Crated or soft-tie",
                  "Best for luxury & vintage",
                  "White-glove handling",
                  "Photo inspection at pickup",
                ],
                featured: true,
              },
              {
                icon: "⚡",
                title: "Expedited Shipping",
                price: "From $699",
                features: [
                  "Priority dispatch",
                  "Fastest available pickup",
                  "Dedicated driver option",
                  "24/7 support line",
                  "Guaranteed delivery window",
                ],
              },
            ].map((svc) => (
              <div
                key={svc.title}
                className={`rounded-xl p-8 border ${
                  svc.featured
                    ? "border-blue-600 bg-blue-950 text-white shadow-xl scale-105"
                    : "border-zinc-200 bg-gray-50 text-neutral-800"
                }`}
              >
                <div className="text-4xl mb-4">{svc.icon}</div>
                <h3 className={`text-xl font-bold mb-1 ${svc.featured ? "text-white" : "text-blue-950"}`}>
                  {svc.title}
                </h3>
                <p className={`text-sm font-semibold mb-5 ${svc.featured ? "text-blue-300" : "text-blue-600"}`}>
                  {svc.price}
                </p>
                <ul className="space-y-2">
                  {svc.features.map((f) => (
                    <li
                      key={f}
                      className={`text-sm flex items-center gap-2 ${svc.featured ? "text-blue-100" : "text-slate-500"}`}
                    >
                      <span className={svc.featured ? "text-blue-400" : "text-blue-500"}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`tel:${PHONE.replace(/\D/g, "")}`}
                  className={`mt-6 block text-center font-semibold py-3 px-5 rounded-full transition-colors ${
                    svc.featured
                      ? "bg-blue-500 hover:bg-blue-400 text-white"
                      : "bg-blue-950 hover:bg-blue-800 text-white"
                  }`}
                >
                  Call for Pricing
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bike types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1200px] w-full mx-auto px-[15px]">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center mb-3">
            We Ship Every Type of Motorcycle
          </h2>
          <p className="text-slate-400 text-center mb-10 max-w-xl mx-auto">
            From Harleys to Ducatis, dirt bikes to trikes — {COMPANY} ships them all.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              "Cruisers",
              "Sport Bikes",
              "Touring Bikes",
              "Dirt Bikes",
              "Choppers",
              "Vintage / Classic",
              "Electric Bikes",
              "Trikes & Sidecars",
            ].map((type) => (
              <div key={type} className="bg-white rounded-lg border border-zinc-200 py-5 px-3 text-blue-950 font-medium text-sm shadow-sm">
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="max-w-[900px] w-full mx-auto px-[15px]">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center mb-12">
            Motorcycle Shipping FAQs
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How much does it cost to ship a motorcycle?",
                a: "Motorcycle shipping typically costs between $299 and $700+ depending on distance, transport type (open vs. enclosed), and time of year. Short hauls under 500 miles start around $299. Cross-country routes (2,000+ miles) range from $550–$900.",
              },
              {
                q: "How is my motorcycle secured during transport?",
                a: "We use a professional soft-tie system that secures the frame without touching wheels, forks, or exhaust. For enclosed shipments, we offer full crating. Every bike is photographed before and after loading.",
              },
              {
                q: "Do I need to drain the gas tank before shipping?",
                a: "For most transports, you do not need to completely drain the tank — we recommend keeping it at ¼ full or less to reduce weight and prevent leaks. We'll give you specific prep instructions when you book.",
              },
              {
                q: "How long does motorcycle shipping take?",
                a: "Transit times vary by distance: 1–3 days for under 1,000 miles, 3–6 days for cross-country routes. Expedited options are available if you need faster delivery.",
              },
              {
                q: "Is my motorcycle insured during shipping?",
                a: `Yes. ${COMPANY} is fully licensed and insured. Your motorcycle is covered throughout transit. We recommend reviewing your own policy as well since some personal auto policies extend to transported vehicles.`,
              },
            ].map((item) => (
              <details key={item.q} className="border border-zinc-200 rounded-lg group">
                <summary className="cursor-pointer flex justify-between items-center p-5 font-semibold text-blue-950 list-none">
                  {item.q}
                  <span className="text-blue-600 text-xl font-light ml-4">+</span>
                </summary>
                <p className="px-5 pb-5 text-slate-500 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-16 text-white text-center">
        <div className="max-w-[800px] mx-auto px-[15px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Ship Your Motorcycle?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Call {COMPANY} today for a free, no-obligation quote. We pick up nationwide.
          </p>
          <a
            href={`tel:${PHONE.replace(/\D/g, "")}`}
            className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-bold px-10 py-4 rounded-full text-xl transition-colors"
          >
            {PHONE}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
