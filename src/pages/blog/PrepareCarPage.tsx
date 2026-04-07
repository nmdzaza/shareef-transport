import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";

const PHONE = "(602) 555-0100";

export default function PrepareCarPage() {
  return (
    <div className="text-neutral-800 text-base font-normal bg-white font-montserrat">
      <Helmet>
        <title>5 Tips for Preparing Your Car for Shipping | Shareef Transport</title>
        <meta name="description" content="A clean car, a quarter tank of gas, photos from every angle — prep your vehicle the right way before the carrier arrives with this step-by-step checklist." />
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
              5 Tips for Preparing Your Car for Shipping
            </h1>
            <div className="flex justify-center gap-6 text-blue-300 text-sm font-semibold uppercase">
              <span>6 MIN READ</span>
              <span>Mar 5, 2026</span>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-14 px-[15px]">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-10">
            {/* Article */}
            <article className="flex-1 max-w-[740px]">
              <p className="text-xl text-slate-500 leading-relaxed mb-10">
                Booking your car shipment is the easy part. Preparing the vehicle correctly is what separates a smooth delivery from a stressful one. Follow these five steps before your carrier shows up — they take less than two hours and can save you a major headache.
              </p>

              {/* Tip 1 */}
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center shrink-0">
                    1
                  </div>
                  <h2 className="text-2xl font-bold text-blue-950">Wash and Photograph Your Car Thoroughly</h2>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  This is the most important step. Before your car is loaded, you and the driver will complete a Bill of Lading — a pre-shipment condition report that documents any existing scratches, dents, chips, or other damage. If your car is dirty, pre-existing damage can be hidden and then disputed after delivery.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Wash your car inside and out. Then take detailed photos from every angle: all four sides, roof, hood, trunk, each corner, and close-ups of any pre-existing marks. Date-stamp the photos if possible. Store them somewhere you can access after delivery.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                  <p className="text-blue-900 text-sm font-medium">
                    Pro Tip: Take photos in good lighting. Scratches invisible in shade become obvious in direct sunlight — photograph both ways.
                  </p>
                </div>
              </div>

              {/* Tip 2 */}
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center shrink-0">
                    2
                  </div>
                  <h2 className="text-2xl font-bold text-blue-950">Keep the Gas Tank at ¼ Full (or Less)</h2>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  You might think a full tank is convenient for whoever receives the car. In auto transport, it's actually a problem. A full 15-gallon tank of gas adds roughly 90 lbs of extra weight to your vehicle. Multiply that across 8–10 cars on a carrier and you're looking at serious load issues.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Most transport companies require no more than a quarter tank. Some specify even less. The driver needs enough fuel to load and unload the vehicle — typically a few miles' worth is sufficient.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  If your car arrives at a different state, you'll want to fill it up immediately anyway to avoid any differences in fuel grade availability.
                </p>
              </div>

              {/* Tip 3 */}
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center shrink-0">
                    3
                  </div>
                  <h2 className="text-2xl font-bold text-blue-950">Remove All Personal Items from the Interior</h2>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  This is both a safety and legal issue. Auto transport carriers are licensed to transport vehicles — not personal property. Anything left inside the car is not covered by the carrier's insurance if it's lost or damaged.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  More practically, loose items become projectiles during transport. A single bumpy road can send a phone charger, coffee mug, or emergency kit sliding across your dashboard and scratching your interior. Remove everything from the cabin, trunk, and cargo area.
                </p>
                <ul className="space-y-2 text-slate-600 list-disc pl-5 mb-4">
                  <li>Removable electronics (dash cams, GPS units, phone mounts)</li>
                  <li>Toll transponders (EZPass, SunPass, FasTrak) — these can charge tolls during transport</li>
                  <li>Clothing, gym bags, boxes</li>
                  <li>Valuables of any kind</li>
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  The only exception: most carriers allow up to 100 lbs of packed items in the trunk, but verify this with your specific carrier before shipping.
                </p>
              </div>

              {/* Tip 4 */}
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center shrink-0">
                    4
                  </div>
                  <h2 className="text-2xl font-bold text-blue-950">Disable Your Alarm System</h2>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  A car alarm that triggers during transport is more than annoying — it can drain your battery completely over a 3–5 day shipment and potentially cause issues with the vehicle's electronics.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Disable or deactivate your alarm before the pickup driver arrives. For most modern vehicles, this can be done through the infotainment system or by following your owner's manual. If you have a third-party alarm, you may need to disconnect the fuse or contact the installer.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                  <p className="text-blue-900 text-sm font-medium">
                    Note: Make sure to leave your car keys with the driver. They need to be able to move the vehicle at loading and delivery. Keep a copy for yourself.
                  </p>
                </div>
              </div>

              {/* Tip 5 */}
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center shrink-0">
                    5
                  </div>
                  <h2 className="text-2xl font-bold text-blue-950">Check Tire Pressure and Fluid Levels</h2>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Your car will be driven short distances during loading and unloading, and it needs to be in basic operating condition. Check that all four tires are properly inflated to the manufacturer's recommended PSI — underinflated tires can develop flat spots during long transport periods.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Do a quick check on major fluid levels: engine oil, coolant, and brake fluid. You don't need a full service, but the car should not have any active leaks. A leaking vehicle can damage other cars on the same carrier and may result in your shipment being refused or delayed.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Also check that all exterior accessories are secured: retractable antennas should be lowered, convertible tops must be up and locked, and any aftermarket accessories (spoilers, bike racks, roof cargo boxes) should be removed or secured tightly.
                </p>
              </div>

              {/* Closing */}
              <div className="bg-gray-50 rounded-xl p-7 mt-10 border border-zinc-200">
                <h2 className="text-xl font-bold text-blue-950 mb-3">Quick Pre-Ship Checklist</h2>
                <ul className="space-y-2 text-slate-600 text-sm">
                  {[
                    "Wash vehicle inside and out",
                    "Take detailed photos from all angles",
                    "Gas tank at ¼ or less",
                    "Remove all personal items from cabin and trunk",
                    "Disable alarm system",
                    "Check tire pressure (all four)",
                    "Check for fluid leaks",
                    "Lower antenna, secure/remove aftermarket accessories",
                    "Have a copy of your keys ready",
                    "Review and sign the Bill of Lading carefully at pickup",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-blue-500 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-slate-600 leading-relaxed mt-8">
                Have questions about what to expect? Call Shareef Transport at{" "}
                <a href="tel:6025550100" className="text-blue-600 font-semibold hover:underline">{PHONE}</a> — we walk every customer through the prep process before pickup day.
              </p>
            </article>

            {/* Sidebar */}
            <aside className="w-full md:w-[300px] shrink-0">
              <div className="bg-blue-950 rounded-xl p-7 text-white text-center sticky top-8">
                <h3 className="text-xl font-bold mb-2">Ready to Ship?</h3>
                <p className="text-blue-200 text-sm mb-5">
                  Get your free quote from Shareef Transport. We guide you through every step.
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
                    <Link to="/blog/open-vs-enclosed-car-transport" className="text-blue-600 hover:underline leading-snug block">
                      Open vs Enclosed Car Transport: Which Should You Choose?
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
