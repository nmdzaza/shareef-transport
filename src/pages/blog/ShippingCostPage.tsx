import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";

const PHONE = "(602) 555-0100";

function ArticleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-neutral-800 text-base font-normal bg-white font-montserrat">
      <Header />
      <main role="main" className="mt-[75px] md:mt-40">
        {/* Hero */}
        <section className="bg-blue-950 text-white py-14 px-[15px]">
          <div className="max-w-[800px] mx-auto text-center">
            <p className="text-blue-300 uppercase text-xs font-semibold tracking-widest mb-3">
              Shareef Transport Blog
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              How Much Does It Cost to Ship a Car in 2026?
            </h1>
            <div className="flex justify-center gap-6 text-blue-300 text-sm font-semibold uppercase">
              <span>8 MIN READ</span>
              <span>Mar 15, 2026</span>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-14 px-[15px]">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-10">
            {/* Article */}
            <article className="flex-1 max-w-[740px] prose prose-slate prose-lg">
              {children}
            </article>

            {/* Sidebar */}
            <aside className="w-full md:w-[300px] shrink-0">
              <div className="bg-blue-950 rounded-xl p-7 text-white text-center sticky top-8">
                <h3 className="text-xl font-bold mb-2">Get a Free Quote</h3>
                <p className="text-blue-200 text-sm mb-5">
                  Talk to a Shareef Transport specialist. No obligation, no pressure.
                </p>
                <a
                  href={`tel:${PHONE.replace(/\D/g, "")}`}
                  className="block bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-5 rounded-full text-lg mb-4 transition-colors"
                >
                  {PHONE}
                </a>
                <Link
                  to="/"
                  className="block border border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-5 rounded-full text-sm transition-colors"
                >
                  Get Online Quote
                </Link>
              </div>

              {/* Related articles */}
              <div className="mt-8 border border-zinc-200 rounded-xl p-6">
                <h4 className="text-blue-950 font-bold mb-4">Related Articles</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link to="/blog/open-vs-enclosed-car-transport" className="text-blue-600 hover:underline leading-snug block">
                      Open vs Enclosed Car Transport: Which Should You Choose?
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/5-tips-preparing-car-for-shipping" className="text-blue-600 hover:underline leading-snug block">
                      5 Tips for Preparing Your Car for Shipping
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="text-blue-600 hover:underline leading-snug block">
                      ← All Blog Posts
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function ShippingCostPage() {
  return (
    <ArticleLayout>
      <p className="text-xl text-slate-500 leading-relaxed mb-8">
        If you've never shipped a car before, the first question is almost always the same: <em>how much is this going to cost?</em> The honest answer is: it depends. But "it depends" isn't very useful, so here's everything you need to understand exactly what drives the price — and what you can do to keep it as low as possible.
      </p>

      <h2 className="text-2xl font-bold text-blue-950 mt-10 mb-4">Average Car Shipping Costs by Distance (2026)</h2>
      <p className="text-slate-600 leading-relaxed mb-4">
        Distance is the single biggest pricing factor. Here's what you can expect to pay for open transport of a standard sedan in 2026:
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border border-zinc-200 rounded-lg overflow-hidden">
          <thead className="bg-blue-950 text-white">
            <tr>
              <th className="text-left p-3">Distance</th>
              <th className="text-left p-3">Example Route</th>
              <th className="text-left p-3">Avg. Cost</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {[
              ["Under 500 miles", "Phoenix → Las Vegas", "$299–$450"],
              ["500–1,000 miles", "Phoenix → Denver", "$450–$650"],
              ["1,000–1,500 miles", "Phoenix → Dallas", "$600–$800"],
              ["1,500–2,500 miles", "Phoenix → Chicago", "$750–$1,000"],
              ["2,500+ miles", "Phoenix → New York", "$950–$1,400"],
            ].map(([dist, ex, cost]) => (
              <tr key={dist} className="even:bg-gray-50">
                <td className="p-3 font-medium text-blue-950">{dist}</td>
                <td className="p-3 text-slate-500">{ex}</td>
                <td className="p-3 font-semibold text-green-700">{cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-blue-950 mt-10 mb-4">Vehicle Size and Weight</h2>
      <p className="text-slate-600 leading-relaxed mb-4">
        Carriers price by the space your vehicle takes up on their trailer. A compact sedan costs less than a full-size pickup truck because it takes up less space and weighs less. Here's how common vehicle types compare:
      </p>
      <ul className="space-y-2 mb-8 text-slate-600">
        <li><strong className="text-blue-950">Compact car (Civic, Corolla):</strong> Base price — cheapest to ship</li>
        <li><strong className="text-blue-950">Mid-size sedan/SUV (Accord, RAV4):</strong> +5–10% over base</li>
        <li><strong className="text-blue-950">Full-size SUV/Truck (Tahoe, F-150):</strong> +15–25% over base</li>
        <li><strong className="text-blue-950">Heavy-duty truck, extended van, XL SUV:</strong> +30–50% over base</li>
        <li><strong className="text-blue-950">Non-running vehicles:</strong> Add $100–$200 for winch loading</li>
      </ul>

      <h2 className="text-2xl font-bold text-blue-950 mt-10 mb-4">Open vs. Enclosed Transport</h2>
      <p className="text-slate-600 leading-relaxed mb-4">
        This is the second-biggest cost factor after distance. Open transport (the double-decker car carriers you see on the highway) is the standard and most affordable method. Enclosed transport uses a covered trailer that protects your car from the elements.
      </p>
      <ul className="space-y-2 mb-4 text-slate-600">
        <li><strong className="text-blue-950">Open transport:</strong> 80%+ of all shipments. $299–$1,400 coast-to-coast.</li>
        <li><strong className="text-blue-950">Enclosed transport:</strong> 30–40% more expensive. $500–$1,800 coast-to-coast.</li>
      </ul>
      <p className="text-slate-600 leading-relaxed mb-8">
        Most everyday cars ship open. Luxury vehicles, exotics, classics, and low-clearance sports cars are the primary candidates for enclosed. Read our full comparison: <Link to="/blog/open-vs-enclosed-car-transport" className="text-blue-600 hover:underline">Open vs. Enclosed Car Transport</Link>.
      </p>

      <h2 className="text-2xl font-bold text-blue-950 mt-10 mb-4">Seasonal Pricing</h2>
      <p className="text-slate-600 leading-relaxed mb-4">
        Auto shipping rates fluctuate with supply and demand throughout the year. Here's the general pattern:
      </p>
      <ul className="space-y-2 mb-8 text-slate-600">
        <li><strong className="text-blue-950">Winter (Jan–Feb):</strong> Lowest prices. Fewer moves, more carrier availability.</li>
        <li><strong className="text-blue-950">Spring (Mar–May):</strong> Prices rise as snowbirds head north and college moves begin.</li>
        <li><strong className="text-blue-950">Summer (Jun–Aug):</strong> Peak season. Military moves, college students, families. Highest prices +15–25%.</li>
        <li><strong className="text-blue-950">Fall (Sep–Nov):</strong> Moderate pricing. Good window before holiday slowdown.</li>
      </ul>

      <h2 className="text-2xl font-bold text-blue-950 mt-10 mb-4">Other Factors That Affect Cost</h2>
      <ul className="space-y-2 mb-8 text-slate-600">
        <li><strong className="text-blue-950">Fuel prices:</strong> Carriers add fuel surcharges when diesel spikes. In 2026, diesel averages $4.10/gal nationally, contributing to slightly elevated rates vs. 2024.</li>
        <li><strong className="text-blue-950">Route popularity:</strong> High-traffic lanes (FL↔NY, CA↔TX) are cheaper. Rural or remote pickups cost more.</li>
        <li><strong className="text-blue-950">Terminal vs. door-to-door:</strong> Dropping off/picking up at a terminal saves $50–$100 each way but requires extra logistics on your end.</li>
        <li><strong className="text-blue-950">Insurance coverage:</strong> Most quotes include basic carrier liability ($100K+). Gap coverage is available for high-value vehicles.</li>
      </ul>

      <h2 className="text-2xl font-bold text-blue-950 mt-10 mb-4">5 Tips to Save Money on Car Shipping</h2>
      <ol className="space-y-3 mb-8 text-slate-600 list-decimal pl-5">
        <li><strong className="text-blue-950">Book early.</strong> Last-minute bookings almost always cost more. Give yourself 2–3 weeks.</li>
        <li><strong className="text-blue-950">Ship in winter.</strong> January and February are the cheapest months if you have flexibility.</li>
        <li><strong className="text-blue-950">Choose open transport.</strong> Unless you have a high-value vehicle, open is perfectly safe and significantly cheaper.</li>
        <li><strong className="text-blue-950">Be flexible on pickup/delivery dates.</strong> A ±2-day window gives carriers more scheduling flexibility — and that often translates to lower quotes.</li>
        <li><strong className="text-blue-950">Get multiple quotes.</strong> Prices vary by $100–$300 for the same route. Always compare at least 2–3 carriers.</li>
      </ol>

      <h2 className="text-2xl font-bold text-blue-950 mt-10 mb-4">Bottom Line</h2>
      <p className="text-slate-600 leading-relaxed mb-4">
        For most cross-country shipments in 2026, budget between $800–$1,200 for a standard vehicle on open transport. Shorter hauls run $299–$650. Add 30–40% for enclosed. If you're shipping a luxury, exotic, or classic vehicle, enclosed is worth every penny for the protection it provides.
      </p>
      <p className="text-slate-600 leading-relaxed">
        Shareef Transport provides free, transparent quotes with no hidden fees. Call <a href="tel:6025550100" className="text-blue-600 font-semibold hover:underline">{PHONE}</a> or use our online quote form to get your exact price in minutes.
      </p>
    </ArticleLayout>
  );
}
