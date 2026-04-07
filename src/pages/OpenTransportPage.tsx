import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { DesktopNav } from "../components/layout/DesktopNav";
import { MobileNav } from "../components/layout/MobileNav";
import { Footer } from "../components/layout/Footer";

// ── Inline data ────────────────────────────────────────────────────────────────

const vehicleSizes = [
  { id: "small-car", label: "Small Car" },
  { id: "small-suv", label: "Small SUV" },
  { id: "medium-pickup", label: "Medium Pickup" },
  { id: "mini-van", label: "Mini-van" },
  { id: "midsize-car", label: "Midsize Car" },
  { id: "midsize-suv", label: "Midsize SUV" },
  { id: "large-pickup", label: "Large Pickup" },
  { id: "hypercar", label: "Hypercar" },
  { id: "motorcycle", label: "Motorcycle" },
  { id: "large-car", label: "Large Car" },
  { id: "large-suv", label: "Large SUV" },
];

const openTransportSpecifics = [
  {
    id: "door-to-door",
    imgSrc: "https://c.animaapp.com/mno2pdsqTskUU6/assets/icon-1-2.svg",
    imgAlt: "solution-icon",
    title: "Door-to-Door",
    description:
      "The driver will come as close as possible to your desired pickup and delivery spots. If the trucker cannot enter the exact location, the person releasing or accepting the vehicle might need to meet at a nearby location for safe loading and unloading.",
  },
  {
    id: "communication",
    imgSrc: "https://c.animaapp.com/mno2pdsqTskUU6/assets/icon-2-2.svg",
    imgAlt: "solution-icon",
    title: "Communication",
    description:
      "Our trucking partners usually call 24 hours in advance to schedule the pickup and delivery of your vehicle. Upon arrival, the driver will notify the customer to complete inspections, acquire signatures, and accept payment.",
  },
  {
    id: "vehicle-inspection",
    imgSrc: "https://c.animaapp.com/mno2pdsqTskUU6/assets/icon-3-2.svg",
    imgAlt: "solution-icon",
    title: "Vehicle Inspection",
    description:
      "Shareef Transport open auto carriers perform detailed inspections of all vehicles before pickup and delivery. All previous dings, dents, and damages will be noted for insurance purposes. Our open carrier partners provide a minimum insurance coverage of $100,000.",
  },
  {
    id: "cost-effective",
    imgSrc: "https://c.animaapp.com/mno2pdsqTskUU6/assets/icon-4-1.svg",
    imgAlt: "solution-icon",
    title: "Cost-Effective",
    description:
      "An open auto carrier is the most cost-effective shipping service available. When you're looking to ship a car in the United States, look to open car carrier services for efficiency and budgetary purposes.",
  },
];

const faqItems = [
  {
    id: "how-many-vehicles",
    question: "How many vehicles can a car hauler move at one time?",
    answer:
      "Open car haulers typically transport anywhere from 5 to 10 vehicles at a time. Sometimes, these loads consist of multi-car shipments from one or two clients. Other times, a trucker is tasked with servicing 5 to 10 customers on the same route, plotting a timely web of pickups and deliveries.",
  },
  {
    id: "open-vs-enclosed",
    question: "What is the difference between open and enclosed transport?",
    answer:
      "Open and enclosed transport differ in the types of trailers used and the level of protection provided. Open car shipping is ideal for 95% of vehicles. It exposes them to the elements, but damage is rare. Enclosed transport costs more but provides full protection from weather and road debris.",
  },
  {
    id: "is-open-safe",
    question: "Is open auto transport safe?",
    answer:
      "Yes. Open auto transport is the most popular car shipping method in the US, used by automakers to transport new vehicles. All carriers we work with adhere to state and federal safety regulations, are vetted for driving history, equipment quality, and carry active insurance policies.",
  },
  {
    id: "how-long",
    question: "How long does open auto transport take?",
    answer:
      "Typical open auto transport delivery times range from 1 to 14 days depending on the distance. Cross-country shipments usually take 7 to 14 days. Shorter routes can be completed in 1 to 5 days. Our team will give you an estimated window when you book your shipment.",
  },
  {
    id: "cost",
    question: "How much does open auto transport cost?",
    answer:
      "Open auto transport is the most affordable car shipping option available. Costs vary based on distance, vehicle size, season, and demand. Use our instant quote calculator to get an accurate estimate. For questions, call (602) 555-0100.",
  },
  {
    id: "preparation",
    question: "How do I prepare my vehicle for open transport?",
    answer:
      "Before shipping, remove all personal belongings from the vehicle, leave only a quarter tank of gas, document existing damage with photos, disable alarms, and ensure the car is in running condition. Retractable antennas should be lowered and any custom accessories secured.",
  },
];

// ── Shipping Form ──────────────────────────────────────────────────────────────

function ShippingForm() {
  const [pickupDate, setPickupDate] = useState("");
  const [vehicleSize, setVehicleSize] = useState("");
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showVehicleDropdown, setShowVehicleDropdown] = useState(false);

  return (
    <div className="items-stretch bg-slate-100 flex flex-col h-full justify-center rounded-md">
      <form className="min-h-[auto] min-w-[auto] w-full mb-12 px-5 py-3 md:p-[30px]" onSubmit={(e) => e.preventDefault()}>
        <h2 className="text-blue-950 text-xl font-semibold flex flex-col leading-[26px] pb-2 md:flex-row md:leading-6">
          Estimate your shipping cost
        </h2>
        <p className="font-medium my-6">
          Provide details about your shipping plans for an instant open auto transport cost estimate.
        </p>
        <div className="mt-4 mb-2.5">
          <span className="font-bold">Route</span>
        </div>
        <input
          type="text"
          name="pickup"
          placeholder="From (ZIP or City, State)"
          className="relative text-blue-950 text-[15px] font-medium block h-[62px] leading-[22.5px] text-start w-full border border-slate-300 pl-4 rounded-[11px] border-solid mb-2"
        />
        <input
          type="text"
          name="delivery"
          placeholder="To (ZIP or City, State)"
          className="relative text-blue-950 text-[15px] font-medium block h-[62px] leading-[22.5px] text-start w-full border border-slate-300 pl-4 rounded-[11px] border-solid mb-2"
        />
        <div className="mt-4 mb-2.5">
          <span className="font-bold">Shipping</span>
        </div>
        {/* Pickup date */}
        <div className="relative mb-2">
          <button
            type="button"
            className="appearance-none text-blue-950 text-[15px] font-medium h-[62px] text-start w-full border border-slate-300 pl-4 rounded-[11px] border-solid flex items-center"
            onClick={() => setShowDateDropdown((p) => !p)}
          >
            {pickupDate || "Pickup Date"}
          </button>
          {showDateDropdown && (
            <div className="absolute bg-white border border-sky-900 list-none w-full z-[10000] rounded-b left-0 top-[63px]">
              {["As soon as possible", "Within 7 days", "On a particular date", "I don't know yet"].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  className="text-[14.4px] font-medium block h-[50px] leading-[50px] text-nowrap w-full pl-4 pr-6 border-t border-sky-100 text-left hover:bg-slate-50"
                  onClick={() => { setPickupDate(opt); setShowDateDropdown(false); }}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
        {/* Vehicle size */}
        <div className="relative mb-2">
          <button
            type="button"
            className="appearance-none text-blue-950 text-[15px] font-medium h-[62px] text-start w-full border border-slate-300 pl-4 rounded-[11px] border-solid flex items-center"
            onClick={() => setShowVehicleDropdown((p) => !p)}
          >
            {vehicleSize || "Size of Car"}
          </button>
          {showVehicleDropdown && (
            <div className="absolute bg-white border border-sky-900 list-none w-full z-[10000] rounded-b left-0 top-[63px]">
              {vehicleSizes.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  className="text-[14.4px] font-medium block h-[50px] leading-[50px] text-nowrap w-full pl-4 pr-6 border-t border-sky-100 text-left hover:bg-slate-50"
                  onClick={() => { setVehicleSize(v.label); setShowVehicleDropdown(false); }}
                >
                  {v.label}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="mt-2.5 pl-2.5 mb-16">
          <input type="checkbox" name="is-dealer" value="1" className="accent-blue-950 h-[18px] w-[18px] align-text-top" />
          <label className="font-medium inline-block ml-1.5">Are you an automotive dealer?</label>
        </div>
        <div className="absolute flex w-full left-0 bottom-0">
          <input
            type="submit"
            value="Request a Quote"
            className="font-semibold items-center bg-lime-300 flex basis-full grow h-16 justify-center text-center cursor-pointer rounded-bl rounded-br border border-transparent"
          />
        </div>
      </form>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function OpenTransportPage() {
  return (
    <div className="text-sky-900 text-base font-normal bg-white font-montserrat">
      <Helmet>
        <title>Open Auto Transport | Affordable Car Shipping | Shareef Transport</title>
        <meta name="description" content="Affordable open car hauler service nationwide. Book your vehicle transport today." />
      </Helmet>
      <MobileNav />
      <DesktopNav />

      {/* Hero */}
      <section className="relative items-center bg-[url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1400&q=80')] bg-no-repeat bg-cover flex flex-col min-h-[600px] bg-center pt-[100px] md:pt-[180px] before:bg-blue-950 before:block before:h-full before:opacity-90 before:absolute before:w-full before:left-0 before:top-0">
        <div className="relative max-w-none min-h-[auto] min-w-[auto] w-full mx-auto px-[15px] md:max-w-[1210px]">
          <div className="flex flex-wrap ml-[-15px] mr-[-15px]">
            <div className="relative flex basis-auto flex-col shrink justify-center max-w-none min-h-[auto] min-w-[auto] w-full px-[15px] md:basis-6/12 md:shrink-0 md:max-w-[50%]">
              <div className="min-h-[auto] min-w-[auto] mb-12">
                <h1 className="text-white text-[44px] font-bold leading-[66px] max-w-xs">
                  Open Auto Transport
                </h1>
                <p className="text-white text-[17px] leading-[25.5px] max-w-md mb-4 mt-6">
                  Open auto carrier shipping is the easiest and most affordable method to ship any car, truck, or van across the United States. Open car hauling is both secure and fully insured against all accidental damages.
                </p>
              </div>
            </div>
            <div className="relative basis-auto shrink max-w-none min-h-[auto] min-w-[auto] w-full px-[15px] md:basis-6/12 md:shrink-0 md:max-w-[50%]">
              <div className="relative mb-4 md:mb-12">
                <ShippingForm />
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg-blue-950 flex flex-wrap justify-center min-h-[auto] min-w-[auto] w-full mx-auto py-4">
          {[
            { icon: "https://c.animaapp.com/mno2pdsqTskUU6/assets/icon-1-1.svg", alt: "shield", title: "Safe Shipping", desc: "High value vehicle insurance." },
            { icon: "https://c.animaapp.com/mno2pdsqTskUU6/assets/icon-3-1.svg", alt: "truck", title: "Rapid Transport", desc: "Faster vehicle pickup and delivery." },
            { icon: "https://c.animaapp.com/mno2pdsqTskUU6/assets/icon-2-1.svg", alt: "ribbon", title: "A+ Service", desc: "High rated transport service." },
          ].map((b) => (
            <div key={b.title} className="items-center gap-x-4 flex h-full justify-center min-h-[auto] min-w-[200px] gap-y-4 w-full mx-10 my-4 md:w-auto md:my-2">
              <div className="flex h-full justify-center w-20 md:block md:w-auto">
                <img src={b.icon} alt={b.alt} className="block h-14 max-w-full md:inline" />
              </div>
              <div className="text-white flex flex-col h-full">
                <h5 className="text-xl font-bold uppercase">{b.title}</h5>
                <p>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What is Open Transport */}
      <section className="max-w-none w-full mx-auto my-10 px-[15px] md:max-w-[1210px] md:my-[120px]">
        <div className="text-center">
          <h2 className="text-blue-950 text-[40px] font-semibold leading-[56px] mb-3">What is open transport?</h2>
          <span className="text-slate-400 text-lg font-medium leading-[25.2px]">
            Open auto transport is the most popular car shipping method in the United States. You may even have seen some of our auto transport carriers on the highway. Multiple vehicles are secured on an open trailer, allowing an average open car carrier capacity of 8–10 cars. Your car is exposed to the elements during open car shipping, yet it's rare to sustain even minor cosmetic damage on open car carriers.
          </span>
        </div>
      </section>

      {/* Learn More */}
      <section className="max-w-none w-full mt-10 mx-auto px-[15px] md:max-w-[1210px] md:mt-[120px]">
        <div className="flex flex-wrap ml-[-15px] mr-[-15px]">
          <div className="relative basis-auto shrink max-w-none min-h-[auto] min-w-[auto] w-full px-[15px] md:basis-[66.6667%] md:shrink-0 md:max-w-[66.6667%]">
            <h2 className="text-slate-900 text-[26px] font-semibold leading-[31.2px] mb-2">
              Learn more about open carrier auto transport.
            </h2>
            <p className="text-slate-400 text-lg font-medium leading-[27px] mb-4">
              Open auto transport is the easiest car carrier transport service to schedule in the US. With the right instant car shipping calculator, you can plan open car shipping services within seconds. The car transport efficiency of open transport passes makes it the cheapest form of auto transportation in the US. When you're on a budget, open auto transport carriers are the right option for you.
            </p>
            <div>
              {[
                { icon: "https://c.animaapp.com/mno2pdsqTskUU6/assets/1.svg", title: "EFFICIENT AND AFFORDABLE", desc: "Instant quotes for efficient, affordable car shipping." },
                { icon: "https://c.animaapp.com/mno2pdsqTskUU6/assets/2.svg", title: "RELIABLE OPEN CAR SHIPPING", desc: "We only work with reliable, experienced car carriers with full insurance." },
                { icon: "https://c.animaapp.com/mno2pdsqTskUU6/assets/3.svg", title: "DEDICATED CUSTOMER SERVICE", desc: "Shareef Transport promises complete shipping management for your open auto transport order." },
              ].map((item) => (
                <div key={item.title} className="flex flex-col mb-[30px] md:flex-row">
                  <div className="min-h-[auto] min-w-[auto] mr-3 mb-3 md:mb-0">
                    <img src={item.icon} alt="icon" className="inline h-[55px] max-w-full" />
                  </div>
                  <div>
                    <div className="text-black text-xl font-bold leading-[30px]">{item.title}</div>
                    <div className="text-slate-400 text-lg font-medium leading-[27px]">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative basis-auto shrink max-w-none min-h-[auto] min-w-[auto] w-full px-[15px] md:basis-[33.3333%] md:shrink-0 md:max-w-[33.3333%]">
            <div className="relative">
              <a href="https://www.youtube.com/watch?v=tMhI1eUQU2Q" className="text-blue-600">
                <div className="absolute bg-blue-950/70 h-full w-full rounded-[20px] left-0 top-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/30 flex items-center justify-center">
                    <div className="w-0 h-0 border-l-white border-l-[32px] border-y-transparent border-y-[22px] ml-2"></div>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=500&q=80"
                  alt="open transport truck"
                  className="inline max-w-full rounded-[20px]"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Open vs Enclosed */}
      <section className="bg-gray-50 my-6 py-12">
        <div className="max-w-none w-full mx-auto px-[15px] md:max-w-[1210px]">
          <h2 className="text-slate-900 text-[26px] font-semibold leading-[31.2px] text-center mb-8">
            What is the difference between open and enclosed transport?
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="bg-white rounded border border-zinc-200 p-6 flex-1">
              <h3 className="text-blue-950 text-xl font-bold mb-3">Open Transport</h3>
              <ul className="text-slate-400 text-base space-y-2">
                <li>✓ Most affordable shipping option</li>
                <li>✓ Fastest availability — largest carrier network</li>
                <li>✓ Handles 8–10 vehicles per load</li>
                <li>✓ Fully insured against accidental damage</li>
                <li>✗ Exposed to weather and road debris</li>
              </ul>
            </div>
            <div className="bg-white rounded border border-zinc-200 p-6 flex-1">
              <h3 className="text-blue-950 text-xl font-bold mb-3">Enclosed Transport</h3>
              <ul className="text-slate-400 text-base space-y-2">
                <li>✓ Maximum protection from elements</li>
                <li>✓ Ideal for classic, exotic, or high-value vehicles</li>
                <li>✓ Enhanced security and privacy</li>
                <li>✗ Costs $200–$500 more than open transport</li>
                <li>✗ Fewer available carriers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specifics */}
      <section className="bg-blue-950 pb-12">
        <div className="max-w-none w-full mx-auto px-[15px] md:max-w-[1210px]">
          <h2 className="text-white text-[32px] font-medium leading-[38.4px] text-center mb-2 py-12">
            Open auto transport specifics
          </h2>
          <div className="flex flex-wrap justify-between ml-0 md:ml-[8.33333%] md:mr-[8.33333%]">
            {openTransportSpecifics.map((item) => (
              <div key={item.id} className="bg-gray-50 shadow-[rgba(0,0,0,0.07)_7px_7px_13px_0px] basis-full min-h-[auto] min-w-[auto] border border-zinc-200 mb-5 rounded-[4.23913px] border-solid md:basis-[49%]">
                <div className="items-baseline flex flex-col h-full px-5 py-6">
                  <img src={item.imgSrc} alt={item.imgAlt} className="h-[60px] max-w-full min-h-[auto] min-w-[auto] w-[60px]" />
                  <div className="min-h-[auto] min-w-[auto] mt-5 mb-2">
                    <span className="text-black text-[20.5854px] font-semibold leading-[27px]">{item.title}</span>
                  </div>
                  <div className="grow min-h-[auto] min-w-[auto] mb-6">
                    <span className="text-neutral-600 text-[15.5px] font-medium">{item.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-none w-full mx-auto pb-12 px-[15px] md:max-w-[1210px]">
        <h2 className="text-[32px] font-bold leading-[38.4px] text-center mb-2 py-12">Your Car Shipping Questions Answered</h2>
        <div className="flex justify-center mb-6">
          <div className="basis-full min-h-[auto] min-w-[auto] md:basis-9/12">
            {faqItems.map((item) => (
              <details key={item.id} className="relative bg-white border-b border-zinc-200 flex flex-col break-words overflow-hidden">
                <summary className="text-blue-950 text-base font-semibold bg-transparent block leading-[23px] align-middle w-full p-5 cursor-pointer md:text-xl">
                  {item.question}
                </summary>
                <div className="text-neutral-600 font-medium leading-[23px] p-5 md:pl-[70px] md:pb-10">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="max-w-none w-full mx-auto pt-6 px-[15px] md:max-w-[1210px]">
        <div className="flex flex-wrap ml-[-15px] mr-[-15px]">
          <div className="relative basis-auto shrink max-w-none min-h-[auto] min-w-[auto] w-full px-[15px] md:basis-[41.6667%] md:shrink-0 md:max-w-[41.6667%]">
            <h2 className="text-slate-900 text-[26px] font-bold leading-[31.2px] mb-2">Is open auto transport safe?</h2>
          </div>
          <div className="relative basis-auto shrink max-w-none min-h-[auto] min-w-[auto] w-full px-[15px] md:basis-[58.3333%] md:shrink-0 md:max-w-[58.3333%]">
            <p className="text-slate-400 text-lg font-medium leading-[27px] mb-4">
              Shareef Transport is a premier open transport car shipping provider. We pride ourselves on our reputation for safe, secure, open transport services. Every open car transport carrier we work with adheres to all state and federal safety regulations for commercial transport. We vet all open auto carriers for driving history, equipment quality, customer service, and active insurance policies.
            </p>
            <p className="text-slate-400 text-lg font-medium leading-[27px] mb-4">
              The risks of an open car hauler are minimal. Open carrier car shipping does expose your car to external factors. However, we only work with the safest auto transport carriers in the nation with the experience necessary to navigate all transport challenges.
            </p>
            <p className="text-slate-400 text-lg font-medium leading-[27px] mb-4">
              Our open car haulers offer comprehensive cargo insurance with every open transport car shipping order. We are an A+-rated, BBB-accredited provider of open auto carriers transport, and we earn that reputation from client to client and from vehicle to vehicle.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap ml-[-15px] mr-[-15px] mt-12">
          <div className="relative basis-auto shrink max-w-none min-h-[auto] min-w-[auto] w-full px-[15px] md:basis-[41.6667%] md:shrink-0 md:max-w-[41.6667%]">
            <h2 className="text-slate-900 text-[26px] font-bold leading-[31.2px] mb-2">Why choose Shareef Transport open auto carrier services?</h2>
          </div>
          <div className="relative basis-auto shrink max-w-none min-h-[auto] min-w-[auto] w-full px-[15px] md:basis-[58.3333%] md:shrink-0 md:max-w-[58.3333%]">
            <p className="text-slate-400 text-lg font-medium leading-[27px] mb-4">
              Shareef Transport partners with a modern fleet of open car carriers. All carriers are operated by experienced drivers who transport vehicles with the utmost responsibility and professionalism. We are a leader in complete open car carriers transport management. Our open transport car shipping quotes are competitive and fair, based on current supply and demand.
            </p>
            <p className="text-slate-400 text-lg font-medium leading-[27px] mb-4">
              Shareef Transport ensures that every risk involved with open auto carriers is completely covered. Our quotes include full insurance coverage from experienced, trusted vehicle shipping partners. For vehicles transported long distances or just across state lines, we maintain our stress-free approach to car shipping management to make your life easier.
            </p>
            <p className="text-slate-400 text-lg font-medium leading-[27px] mb-4">
              Shareef Transport distinguishes itself with professionalism, reliability, and comprehensive customer service at affordable, open auto transport prices. Our open auto transport services are trusted by thousands of customers every year.
            </p>
          </div>
        </div>
      </section>

      {/* Cost CTA */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1400&q=80')] bg-no-repeat bg-cover flex flex-wrap justify-center min-h-0 text-center px-1 py-8 md:min-h-[400px] md:text-left md:p-0 before:bg-[linear-gradient(to_right,rgb(9,38,94),rgba(10,37,92,0.7))] before:block before:h-full before:absolute before:w-full before:left-0 before:top-0 mt-12">
        <div className="relative text-white items-start flex flex-col justify-center min-h-[auto] min-w-[auto] text-center mx-10 my-4 md:text-left">
          <div className="max-w-[560px] mb-4">
            <h3 className="text-[32px] font-bold leading-[38.4px] text-center mb-2 md:text-left">How much will my open auto transport cost?</h3>
          </div>
          <div className="max-w-screen-sm">
            <p className="text-base leading-6 text-center md:text-xl md:leading-[30px] md:text-left">Get affordable prices for open auto transport from our moving experts.</p>
          </div>
        </div>
        <div className="relative items-center flex min-h-[auto] min-w-[auto] text-center mx-10 my-4 md:text-left">
          <a
            href="tel:6025550100"
            className="text-blue-950 font-bold items-center bg-lime-300 flex h-16 justify-center min-h-[auto] min-w-[auto] text-center text-nowrap align-middle border px-8 py-1.5 rounded border-transparent"
          >
            Call (602) 555-0100
          </a>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-slate-100 py-10">
        <div className="max-w-none w-full mx-auto px-[15px] md:max-w-[1210px]">
          <div className="text-center mb-8">
            <h2 className="text-blue-950 text-[40px] font-semibold leading-[56px] mb-3">A trusted car shipping company</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-6 py-[35px]">
            {[
              { title: "Quick Response, Smooth Process", text: "Shareef Transport responded quickly to my request and even though I gave them less than a week's notice, they were able to schedule my auto transport. Communication was open and the process was smooth." },
              { title: "Outstanding Service!", text: "Shareef Transport's customer service was outstanding. They anticipated every concern and responded to my questions promptly and courteously. I recommend them without hesitation, as my vehicle was delivered safely and ahead of schedule." },
              { title: "Transparent, Highly Recommended", text: "I was connected with a very reputable auto transport person. My contact was excellent. He answered all my questions and explained how the process would work. I would definitely recommend Shareef Transport to anyone in need of this type of service." },
            ].map((r) => (
              <div key={r.title} className="items-center bg-gray-50 flex flex-col justify-between min-h-px min-w-[auto] border border-zinc-200 px-6 py-9 rounded-md border-solid flex-1">
                <div className="text-blue-950 text-xl font-medium leading-7 text-center mb-4">{r.title}</div>
                <p className="text-slate-400 leading-[22.4px] text-center">{r.text}</p>
                <div className="mt-4 text-yellow-400 text-lg">★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="w-full mt-[90px] mx-auto px-[15px]">
        <div className="flex flex-wrap ml-[-15px] mr-[-15px]">
          <div className="items-stretch flex w-full mt-10 md:mt-0">
            {[
              "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
              "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
              "https://images.unsplash.com/photo-1549924231-f129b911e442?w=800&q=80",
              "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
            ].map((url, i) => (
              <a key={i} title="See Image" href={url} className="relative text-blue-600 block grayscale-[0.6] grow-[2] h-[300px] overflow-hidden">
                <div className="relative bg-no-repeat bg-cover h-full bg-center" style={{ backgroundImage: `url('${url}')` }}></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
