import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";

const PHONE = "(602) 555-0100";

export default function OpenVsEnclosedPage() {
  return (
    <div className="text-neutral-800 text-base font-normal bg-white font-montserrat">
      <Helmet>
        <title>Open vs Enclosed Car Transport: Which Should You Choose? | Shareef Transport</title>
        <meta name="description" content="Open transport is cheaper and faster. Enclosed protects luxury and classic cars. Here's exactly when to use each and what the cost difference looks like." />
      </Helmet>
      <Header />
      <main role="main" className="mt-[75px] md:mt-40">
        {/* Hero */}
        <section className="bg-blue-950 text-white py-14 px-[15px]">
          <div className="max-w-[800px] mx-auto text-center">
            <p className="text-blue-300 uppercase text-xs font-semibold tracking-widest mb-3">
              Shareef Transport Blog
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Open vs Enclosed Car Transport: Which Should You Choose?
            </h1>
            <div className="flex justify-center gap-6 text-blue-300 text-sm font-semibold uppercase">
              <span>7 MIN READ</span>
              <span>Mar 10, 2026</span>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-14 px-[15px]">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-10">
            {/* Article */}
            <article className="flex-1 max-w-[740px]">
              <p className="text-xl text-slate-500 leading-relaxed mb-8">
                When you request a car shipping quote, one of the first decisions you'll make is choosing between open and enclosed transport. Both methods safely deliver vehicles every day, but they serve different needs and budgets. Here's everything you need to know to make the right call.
              </p>

              <h2 className="text-2xl font-bold text-blue-950 mt-10 mb-4">What Is Open Transport?</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Open transport is exactly what it sounds like: your vehicle is loaded onto an open-air trailer — typically the double- or single-deck carriers you see hauling cars on the interstate. These carriers move 6–10 vehicles at a time and are the backbone of the auto transport industry.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Open carriers are widely available, which means faster pickup times and lower prices. The vast majority of new and used vehicles are delivered to dealerships this way every single day — it's a proven, reliable method.
              </p>

              <h2 className="text-2xl font-bold text-blue-950 mt-10 mb-4">What Is Enclosed Transport?</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Enclosed transport uses a fully covered trailer that protects your vehicle from weather, road debris, and visibility. These trailers typically carry 2–6 vehicles and offer significantly more protection during transit.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Enclosed carriers are the standard for exotic cars, luxury vehicles, classic cars, and anything with a value or condition that justifies extra care. The tradeoff is cost — enclosed transport runs 30–40% more than open — and slightly longer wait times for dispatch.
              </p>

              {/* Comparison table */}
              <h2 className="text-2xl font-bold text-blue-950 mt-10 mb-4">Open vs. Enclosed: Side-by-Side</h2>
              <div className="overflow-x-auto mb-10">
                <table className="w-full text-sm border border-zinc-200 rounded-lg overflow-hidden">
                  <thead className="bg-blue-950 text-white">
                    <tr>
                      <th className="text-left p-3">Factor</th>
                      <th className="text-left p-3">Open Transport</th>
                      <th className="text-left p-3">Enclosed Transport</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {[
                      ["Cost", "$299–$1,400", "$499–$1,900"],
                      ["Weather protection", "Exposed to elements", "Fully protected"],
                      ["Availability", "High — dispatches fast", "Lower — fewer carriers"],
                      ["Vehicles per load", "6–10", "2–6"],
                      ["Pickup speed", "1–3 days avg.", "2–5 days avg."],
                      ["Best for", "Standard vehicles", "Luxury, exotic, classic"],
                      ["Market share", "~85% of shipments", "~15% of shipments"],
                    ].map(([factor, open, enc]) => (
                      <tr key={factor} className="even:bg-gray-50">
                        <td className="p-3 font-semibold text-blue-950">{factor}</td>
                        <td className="p-3 text-slate-600">{open}</td>
                        <td className="p-3 text-slate-600">{enc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-blue-950 mt-10 mb-4">When Should You Choose Open Transport?</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Open transport is the right choice for most people. Consider it if:
              </p>
              <ul className="space-y-2 mb-8 text-slate-600 list-disc pl-5">
                <li>You're shipping a standard everyday vehicle (sedan, minivan, midsize SUV)</li>
                <li>Budget is a primary concern</li>
                <li>You want the fastest possible pickup time</li>
                <li>Your vehicle is less than 5 years old and has no special cosmetic needs</li>
                <li>You're shipping within a common high-traffic lane (FL↔NY, CA↔TX, AZ↔IL)</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-8">
                Open transport is safe. Millions of vehicles ship this way every year without incident. Any reputable carrier maintains cargo insurance that covers damage during transit.
              </p>

              <h2 className="text-2xl font-bold text-blue-950 mt-10 mb-4">When Should You Choose Enclosed Transport?</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Enclosed transport is worth the premium when the stakes are higher. Choose it if:
              </p>
              <ul className="space-y-2 mb-8 text-slate-600 list-disc pl-5">
                <li>You're shipping a luxury vehicle (Mercedes, BMW, Audi, Lexus, etc.)</li>
                <li>You own an exotic or supercar (Ferrari, Lamborghini, Porsche 911, McLaren)</li>
                <li>Your vehicle is a classic or collector car with irreplaceable value</li>
                <li>The car has a custom paint job, body kit, or low-clearance kit that requires extra care</li>
                <li>You're shipping during severe weather season to a destination with extreme conditions</li>
                <li>You simply want peace of mind — there's nothing wrong with that</li>
              </ul>

              <h2 className="text-2xl font-bold text-blue-950 mt-10 mb-4">What About Luxury Car Recommendations?</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Industry standard guidance for luxury vehicles:
              </p>
              <ul className="space-y-2 mb-8 text-slate-600 list-disc pl-5">
                <li><strong className="text-blue-950">Under $40K value:</strong> Open transport is fine.</li>
                <li><strong className="text-blue-950">$40K–$80K:</strong> Either works. Enclosed gives peace of mind.</li>
                <li><strong className="text-blue-950">Over $80K:</strong> Strongly recommend enclosed.</li>
                <li><strong className="text-blue-950">Exotics and classics (any value):</strong> Enclosed, always.</li>
              </ul>

              <h2 className="text-2xl font-bold text-blue-950 mt-10 mb-4">The Bottom Line</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                For everyday cars, open transport is safe, affordable, and fast. If you own something special — whether that means financial value, emotional value, or both — enclosed transport gives you the protection and peace of mind that's worth the extra cost.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Not sure which is right for your situation? Call Shareef Transport at{" "}
                <a href="tel:6025550100" className="text-blue-600 font-semibold hover:underline">{PHONE}</a>. We'll assess your vehicle and give you an honest recommendation — not an upsell.
              </p>
            </article>

            {/* Sidebar */}
            <aside className="w-full md:w-[300px] shrink-0">
              <div className="bg-blue-950 rounded-xl p-7 text-white text-center sticky top-8">
                <h3 className="text-xl font-bold mb-2">Get a Free Quote</h3>
                <p className="text-blue-200 text-sm mb-5">
                  Tell us about your vehicle and we'll recommend the right transport option.
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

              <div className="mt-8 border border-zinc-200 rounded-xl p-6">
                <h4 className="text-blue-950 font-bold mb-4">Related Articles</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link to="/blog/how-much-does-it-cost-to-ship-a-car" className="text-blue-600 hover:underline leading-snug block">
                      How Much Does It Cost to Ship a Car in 2026?
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
