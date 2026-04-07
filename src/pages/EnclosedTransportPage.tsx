import React, { useState } from "react";
import { DesktopNav } from "../components/layout/DesktopNav";
import { MobileNav } from "../components/layout/MobileNav";
import { Footer } from "../components/layout/Footer";

// ── Inline data ────────────────────────────────────────────────────────────────

const featureBadges = [
  {
    id: "safe-shipping",
    imgSrc: "https://c.animaapp.com/mno2gu6msrSaPC/assets/icon-1-1.svg",
    imgAlt: "shield",
    title: "Safe Shipping",
    description: "High value vehicle insurance.",
  },
  {
    id: "rapid-transport",
    imgSrc: "https://c.animaapp.com/mno2gu6msrSaPC/assets/icon-3-1.svg",
    imgAlt: "truck",
    title: "Rapid Transport",
    description: "Faster vehicle pickup-delivery.",
  },
  {
    id: "a-plus-service",
    imgSrc: "https://c.animaapp.com/mno2gu6msrSaPC/assets/icon-2-1.svg",
    imgAlt: "ribbon",
    title: "A+ Service",
    description: "High rated transport service.",
  },
];

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

const serviceItems = [
  {
    id: "fully-protected",
    imgSrc: "https://c.animaapp.com/mno2gu6msrSaPC/assets/1.svg",
    imgAlt: "icon 1",
    title: "Fully protected",
    description:
      "Our enclosed car transporter service guarantees that your vehicle is fully protected from any damaging elements, and handled with maximum care. Fully insured from point A to point B, your precious treasure will arrive in the same immaculate condition as it was shipped.",
  },
  {
    id: "perfect-condition",
    imgSrc: "https://c.animaapp.com/mno2gu6msrSaPC/assets/2.svg",
    imgAlt: "icon 2",
    title: "We keep your car in perfect condition",
    description:
      "We understand that your unique automobile is your treasure. It often holds significant financial or sentimental value. You want to ensure your precious vehicle remains in perfect condition from the moment we pick up your car to its arrival at the final destination.",
  },
  {
    id: "qualified-drivers",
    imgSrc: "https://c.animaapp.com/mno2gu6msrSaPC/assets/3.svg",
    imgAlt: "icon 3",
    title: "Qualified drivers",
    description:
      "For our enclosed car transporter services, we hand-picked only the best and most qualified professional drivers. Not only do they have extensive professional experience, but our drivers are specifically trained to handle exclusive cars, taking the utmost care with the meticulous details.",
  },
  {
    id: "proof-qualification",
    imgSrc: "https://c.animaapp.com/mno2gu6msrSaPC/assets/4.svg",
    imgAlt: "icon 4",
    title: "Proof of qualification of drivers with certificates",
    description:
      "Our enclosed car transporter service guarantees that your vehicle is fully protected from any damaging elements, and handled with maximum care. Fully insured from point A to point B, your precious treasure will arrive in the same immaculate condition as it was shipped.",
  },
  {
    id: "accurate-tracking",
    imgSrc: "https://c.animaapp.com/mno2gu6msrSaPC/assets/5.svg",
    imgAlt: "icon 5",
    title: "Accurate load tracking",
    description:
      "We offer 24/7 accurate vehicle tracking through our website. Simply visit our website and enter your order number or name and email address to find up-to-date information about your car's location.",
  },
];

const faqItems = [
  {
    id: "open-vs-enclosed",
    question: "What is the difference between open transport and enclosed shipping?",
    answer:
      "Open car transport and enclosed transport differ based on the types of haulers and trailers used, as well as the levels of protection each provides. Open car shipping is ideal for 95% of vehicles, but it does expose them to potential road hazards. Enclosed car transport costs more than open, but it provides premium protection from hazards and the elements.",
  },
  {
    id: "when-to-ship-enclosed",
    question: "When should you ship a car in an enclosed trailer?",
    answer:
      "Our experts recommend shipping classic cars, muscle cars, antiques, vehicles of high personal significance, and high-value vehicles valued at $70,000 or more via an enclosed trailer. If the added peace of mind of complete enclosure is worth the added couple hundred dollars to you, be sure to ship enclosed.",
  },
  {
    id: "enclosed-cost-more",
    question: "Does enclosed car transport cost more?",
    answer:
      "Yes. On average, enclosed car shipping costs $200 to $500 more than open car transport for the exact shipping route. This added expenditure is due to the nature of the equipment, the quality of the services, the level of protection, and the simple fact that enclosed car haulers can typically only ship one or two cars at a time.",
  },
  {
    id: "shareef-offers-enclosed",
    question: "Does Shareef Transport offer enclosed auto transport?",
    answer:
      "Yes. Shareef Transport works with independent enclosed car haulers across the US. When you secure a free, instant car shipping quote via our car transport cost calculator, you will have the option to add enclosed shipping. You may also add other premium services, such as inoperable vehicle shipping.",
  },
  {
    id: "added-protection",
    question: "What added protection does enclosed auto shipping provide?",
    answer:
      "Enclosed vehicle shipping uses full overhead, side, and bottom coverage to completely encapsulate a car during transit. By placing your car under lock and key in an enclosed trailer, you mitigate damage from outside road factors, such as rocks, rain, hail, smoke, and dust.",
  },
  {
    id: "get-quote",
    question: "Where can I obtain a quote for shipping an enclosed vehicle?",
    answer:
      "Use our instant car shipping cost calculator to obtain accurate and affordable quotes for enclosed car shipping. First, provide us with your desired pickup and delivery zip codes, your preferred shipping window, and the type of vehicle you're shipping.",
  },
  {
    id: "multiple-cars",
    question: "Can you ship multiple cars via enclosed shipping?",
    answer:
      "It's more challenging to ship multiple vehicles via enclosed shipping than with open transport, but it's not impossible. Most enclosed car haulers can only carry one to two vehicles at a time. However, one of our talented shipping coordinators can help you consolidate multiple shipments.",
  },
  {
    id: "discounts",
    question: "Are there any discounts for enclosed car transportation?",
    answer:
      "Shareef Transport offers a variety of car shipping discounts to students, senior citizens, military members, car dealers, and more. We also provide multi-vehicle discounts and various promotions throughout the year. If you're looking to save money on your enclosed car shipment, contact one of our knowledgeable reps at (602) 555-0100.",
  },
];

// ── Shipping Form ──────────────────────────────────────────────────────────────

function ShippingForm() {
  const [pickupDate, setPickupDate] = useState("");
  const [vehicleSize, setVehicleSize] = useState("");
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showVehicleDropdown, setShowVehicleDropdown] = useState(false);

  return (
    <div className="relative box-border caret-transparent">
      <div className="items-stretch bg-slate-100 box-border caret-transparent flex flex-col h-full justify-center rounded-md">
        <div className="relative box-border caret-transparent basis-[0%] grow min-h-[auto] min-w-[auto] w-full">
          <form className="box-border caret-transparent min-h-[auto] min-w-[auto] w-full mb-12 px-5 py-3 md:p-[30px]" onSubmit={(e) => e.preventDefault()}>
            <h2 className="text-blue-950 text-xl font-semibold box-border caret-transparent flex flex-col leading-[26px] pb-2 md:flex-row md:leading-6">
              Estimate your shipping cost
            </h2>
            <p className="font-medium box-border caret-transparent my-6">
              Enter your information to receive an instant enclosed auto transport cost estimate
            </p>
            <div className="box-border caret-transparent mt-4 mb-2.5">
              <span className="font-bold box-border caret-transparent">Route</span>
            </div>
            <input
              type="text"
              name="pickup"
              placeholder="From (ZIP or City, State)"
              className="relative text-blue-950 text-[15px] font-medium box-border caret-transparent block h-[62px] leading-[22.5px] min-h-[auto] min-w-[auto] text-start w-full border border-slate-300 pl-4 rounded-[11px] border-solid mb-2"
            />
            <input
              type="text"
              name="delivery"
              placeholder="To (ZIP or City, State)"
              className="relative text-blue-950 text-[15px] font-medium box-border caret-transparent block h-[62px] leading-[22.5px] min-h-[auto] min-w-[auto] text-start w-full border border-slate-300 pl-4 rounded-[11px] border-solid mb-2"
            />
            <div className="box-border caret-transparent mt-4 mb-2.5">
              <span className="font-bold box-border caret-transparent">Shipping</span>
            </div>
            {/* Pickup date */}
            <div className="relative mb-2">
              <button
                type="button"
                className="appearance-none text-blue-950 text-[15px] font-medium box-border caret-transparent h-[62px] text-start w-full border border-slate-300 pl-4 rounded-[11px] border-solid flex items-center"
                onClick={() => setShowDateDropdown((p) => !p)}
              >
                {pickupDate || "Pickup Date"}
              </button>
              {showDateDropdown && (
                <div className="absolute bg-white border border-sky-900 box-border caret-transparent list-none w-full z-[10000] rounded-b left-0 top-[63px]">
                  {["As soon as possible", "Within 7 days", "On a particular date", "I don't know yet"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      className="text-[14.4px] font-medium box-border caret-transparent block h-[50px] leading-[50px] text-nowrap w-full pl-4 pr-6 border-t border-sky-100 text-left hover:bg-slate-50"
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
                className="appearance-none text-blue-950 text-[15px] font-medium box-border caret-transparent h-[62px] text-start w-full border border-slate-300 pl-4 rounded-[11px] border-solid flex items-center"
                onClick={() => setShowVehicleDropdown((p) => !p)}
              >
                {vehicleSize || "Size of Car"}
              </button>
              {showVehicleDropdown && (
                <div className="absolute bg-white border border-sky-900 box-border caret-transparent list-none w-full z-[10000] rounded-b left-0 top-[63px]">
                  {vehicleSizes.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      className="text-[14.4px] font-medium box-border caret-transparent block h-[50px] leading-[50px] text-nowrap w-full pl-4 pr-6 border-t border-sky-100 text-left hover:bg-slate-50"
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
              <label className="font-medium box-border caret-transparent inline-block ml-1.5">Are you an automotive dealer?</label>
            </div>
            <div className="absolute box-border caret-transparent flex w-full left-0 bottom-0">
              <input
                type="submit"
                value="Request a Quote"
                className="font-semibold items-center bg-lime-300 box-border caret-transparent flex basis-full grow h-16 justify-center min-h-[auto] min-w-[auto] text-center cursor-pointer rounded-bl rounded-br border border-transparent"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function EnclosedTransportPage() {
  return (
    <div className="text-sky-900 text-base font-normal bg-white font-montserrat">
      <MobileNav />
      <DesktopNav />

      {/* Hero */}
      <section className="relative items-center bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80')] bg-no-repeat bg-cover flex flex-col min-h-[600px] bg-center pt-[100px] md:pt-[180px] before:bg-blue-950 before:block before:h-full before:opacity-90 before:absolute before:w-full before:left-0 before:top-0">
        <div className="relative max-w-none min-h-[auto] min-w-[auto] w-full mx-auto px-[15px] md:max-w-[1210px]">
          <div className="flex flex-wrap ml-[-15px] mr-[-15px]">
            <div className="relative flex basis-auto flex-col shrink justify-center max-w-none min-h-[auto] min-w-[auto] w-full px-[15px] md:basis-6/12 md:shrink-0 md:max-w-[50%]">
              <div className="min-h-[auto] min-w-[auto] mb-12">
                <h1 className="text-white text-[44px] font-bold leading-[66px] max-w-[400px]">
                  Enclosed Auto Transport
                </h1>
                <p className="text-white text-[17px] leading-[25.5px] max-w-md mb-4 mt-6">
                  Are you shipping an antique car which needs special care? Are you worried about potential damages to your classic or muscle car in standard open auto transport? An enclosed auto carrier is the car transport service for you! Enclosed car carriers provide added protection for your vehicle. They also mean less stress for you.
                </p>
              </div>
            </div>
            <div className="relative basis-auto shrink max-w-none min-h-[auto] min-w-[auto] w-full px-[15px] md:basis-6/12 md:shrink-0 md:max-w-[50%]">
              <div className="mb-4 md:mb-12">
                <ShippingForm />
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg-blue-950 flex flex-wrap justify-center min-h-[auto] min-w-[auto] w-full mx-auto py-4">
          {featureBadges.map((badge) => (
            <div key={badge.id} className="items-center gap-x-4 flex h-full justify-center min-h-[auto] min-w-[200px] gap-y-4 w-full mx-10 my-4 md:w-auto md:my-2">
              <div className="flex h-full justify-center min-h-[auto] min-w-[auto] w-20 md:block md:justify-normal md:w-auto">
                <img src={badge.imgSrc} alt={badge.imgAlt} className="block h-14 max-w-full min-h-[auto] min-w-[auto] md:inline md:min-h-0 md:min-w-0" />
              </div>
              <div className="text-white flex flex-col h-full min-h-[auto] min-w-[auto]">
                <h5 className="text-xl font-bold uppercase">{badge.title}</h5>
                <p>{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video / What is enclosed */}
      <section className="bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1400&q=80')] bg-no-repeat bg-cover max-w-none min-h-[600px] w-full mx-auto my-10 px-[15px] md:max-w-[1210px] md:min-h-[500px] md:mt-[60px] md:mb-[120px]">
        <div className="items-center flex flex-col justify-evenly min-h-[500px] md:flex-row md:justify-around">
          <div className="basis-[45%] min-h-[auto] min-w-[auto] text-center py-12 md:py-0">
            <a title="Play Video" href="https://www.youtube.com/watch?v=dV0HA_D9pwU" className="text-blue-600">
              <div className="w-20 h-20 rounded-full bg-white/30 flex items-center justify-center mx-auto">
                <div className="w-0 h-0 border-l-white border-l-[32px] border-y-transparent border-y-[22px]"></div>
              </div>
            </a>
          </div>
          <div className="basis-[45%] min-h-[auto] min-w-[auto]">
            <div className="bg-white p-8 rounded">
              <h2 className="text-blue-950 text-3xl font-semibold leading-[42px] mb-2">
                What is Enclosed auto transport?
              </h2>
              <p className="text-slate-400 leading-[22.4px]">
                Enclosed car carriers are the right choice if you want the safety of your vehicle guaranteed. Although it often requires a bit more of an investment, enclosed automobile carriers provide the ultimate protection for your precious cargo. Completely enclosed, your vehicle will be safe from the elements and environmental hazards such as flying rocks or debris.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enclosed Info */}
      <section className="max-w-none w-full mt-10 mx-auto px-[15px] md:max-w-[1210px] md:mt-[120px]">
        <div className="flex flex-wrap ml-[-15px] mr-[-15px]">
          <div className="flex flex-col min-h-[auto] min-w-[auto] md:flex-row">
            <div className="bg-slate-100 basis-2/5 min-h-[auto] min-w-[auto] p-8 rounded">
              <div className="text-blue-950 text-3xl font-semibold leading-[42px] mb-4">Enclosed car carriers</div>
              <p className="text-slate-400 leading-[22.4px]">
                are the right choice if you want the safety of your vehicle guaranteed. Although it often requires a bit more of an investment, enclosed carriers provide the ultimate protection for your precious cargo. Completely enclosed, your vehicle will be safe from the elements and environmental hazards such as flying rocks or debris.
              </p>
            </div>
            <div className="items-center bg-white flex basis-3/5 justify-center min-h-[auto] min-w-[auto] p-10">
              <div>
                <h2 className="text-blue-950 text-3xl font-semibold leading-[42px] mb-2 md:text-[40px] md:leading-[56px]">
                  Enclosed Car Hauler Shipping Service: The Ideal Transport Solution for Your Vehicle
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="max-w-none w-full mx-auto px-[15px] md:max-w-[1210px]">
        <div className="bg-slate-100 my-20 pt-[30px]">
          <div className="text-center">
            <span className="text-blue-950 text-[34px] font-bold leading-[51px] md:text-[64px] md:leading-[96px]">THE PROS AND CONS</span>
            <div><span className="relative text-blue-950 text-3xl font-bold bg-lime-300 leading-[45px] px-10 md:text-5xl md:leading-[72px]">OF DIFFERENT</span></div>
            <span className="text-blue-950 text-[34px] font-bold leading-[51px] md:text-[64px] md:leading-[96px]">CAR HAULER TRAILERS</span>
            <div className="text-blue-950 text-xl font-semibold flex justify-center leading-[30px] mt-2">
              <div className="max-w-full min-h-[auto] min-w-[auto] px-[15px] md:max-w-[60%] md:px-0">
                <span>When deciding on the method of auto transport, you have several options available. Some offer more protection and versatility, and others are more efficient and cost-effective.</span>
              </div>
            </div>
          </div>
          <div className="relative bg-[url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80')] bg-no-repeat bg-cover flex min-h-[200px] mt-10 md:min-h-[300px]">
            <div className="items-end flex justify-around min-h-[auto] min-w-[auto] w-full p-8">
              <img src="https://c.animaapp.com/mno2gu6msrSaPC/assets/truck-1.svg" alt="enclosed truck" className="max-w-40 min-h-[auto] min-w-[auto] md:max-w-[350px]" />
              <img src="https://c.animaapp.com/mno2gu6msrSaPC/assets/truck-2.svg" alt="open truck" className="max-w-40 min-h-[auto] min-w-[auto] md:max-w-[350px]" />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="relative text-white text-[46px] font-bold items-center bg-blue-950 flex basis-full justify-center leading-[69px] text-center px-6 py-12 md:basis-6/12 md:px-24 md:rounded-tr-[40px]">ENCLOSED CAR TRAILERS</div>
            <div className="relative text-white text-[46px] font-bold items-center bg-blue-500 flex basis-full justify-center leading-[69px] text-center px-6 py-12 md:basis-6/12 md:px-24 md:rounded-tl-[40px]">OPEN CAR TRAILERS</div>
            <div className="text-white text-lg font-medium items-center bg-slate-900 flex basis-full justify-center leading-[27px] text-center px-6 py-12 md:basis-6/12 md:px-24">Enclosed car hauler trailers are small hauler trailers that can only transport up to 2 or 3 cars at once</div>
            <div className="text-white text-lg font-medium items-center bg-blue-500 flex basis-full justify-center leading-[27px] text-center px-6 py-12 md:basis-6/12 md:px-24">Open car hauler trailers transport cars without exterior covering, accommodating up to 10 vehicles at once depending on size and weight</div>
            <div className="text-white text-lg font-medium items-center bg-blue-950 flex basis-full justify-center leading-[27px] text-center px-6 py-12 md:basis-6/12 md:px-24">Enclosed car hauler trailers offer full protection from the elements, reduce the risk of damage to the exterior from road debris, and security against theft</div>
            <div className="text-white text-lg font-medium items-center bg-blue-500 flex basis-full justify-center leading-[27px] text-center px-6 py-12 md:basis-6/12 md:px-24">The cons of open trailers include no protection from debris or bad weather and less security against theft</div>
            <div className="text-white text-lg font-medium items-center bg-slate-900 flex basis-full justify-center leading-[27px] text-center px-6 py-12 md:basis-6/12 md:px-24">However, enclosed car hauler trailers can take longer to transport, are less fuel efficient, and are more expensive</div>
            <div className="text-white text-lg font-medium items-center bg-blue-500 flex basis-full justify-center leading-[27px] text-center px-6 py-12 md:basis-6/12 md:px-24">Open car trailers are more fuel efficient, faster, more affordable, and offer more transport options</div>
          </div>
        </div>
      </section>

      {/* When to Use */}
      <section className="max-w-none w-full mx-auto px-[15px] md:max-w-[1210px]">
        <div className="flex flex-col-reverse justify-between md:flex-row">
          <div className="basis-3/5 min-h-[auto] min-w-[auto] pt-2.5 md:pt-[100px]">
            <div className="mb-5 md:mb-12">
              <h2 className="text-blue-950 text-3xl font-semibold leading-[42px] mt-5 mb-2 md:text-[40px] md:leading-[56px] md:mt-0">
                When is it advisable to use Enclosed Car Hauler Services?
              </h2>
            </div>
            <div className="max-w-none md:max-w-[550px]">
              <span className="text-blue-950 text-xl font-medium leading-7">As mentioned before</span>
              <p className="text-slate-400 leading-[22.4px] mb-4">
                open car carriers are the most popular automobile shipping option. However, in some instances, the best solution is enclosed auto transport. This is especially true if your vehicle is exceptionally fragile, and a minor dent or ding could end up costing hundreds if not thousands of dollars.
              </p>
              <span className="text-blue-950 text-xl font-medium leading-7">Exclusive and highly expensive cars as well as racing vehicles</span>
              <p className="text-slate-400 leading-[22.4px] mb-4">
                are typically shipped in enclosed car carriers. Car owners that need to ship exotic, classic, custom, or high-end vehicles should take full advantage of the security and protection which sealed car carriers provide.
              </p>
              <span className="text-blue-950 text-xl font-medium leading-7">The price is often higher</span>
              <p className="text-slate-400 leading-[22.4px] mb-4">
                than standard open carrier auto transport, but the advantages far surpass the cost. If you consider both the amount of money invested and the time and effort put into a classic or custom vehicle, you can rest easy knowing an enclosed automobile carrier is a sound investment.
              </p>
            </div>
          </div>
          <div className="basis-[39%] min-h-[auto] min-w-[auto]">
            <img
              src="https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&q=80"
              alt="car in enclosed truck"
              className="sticky inline max-w-full z-[1020] pt-2.5 top-0 md:pt-[100px]"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-none w-full mx-auto my-10 px-[15px] md:max-w-[1210px] md:my-[120px]">
        <div className="flex flex-wrap ml-[-15px] mr-[-15px]">
          <div className="relative basis-auto shrink max-w-none min-h-[auto] min-w-[auto] w-full ml-0 px-[15px] md:basis-[66.6667%] md:shrink-0 md:max-w-[66.6667%] md:ml-[16.6667%]">
            <div className="text-center">
              <h2 className="text-blue-950 text-[40px] font-semibold leading-[56px] mb-3">Enclosed Car Hauler Services</h2>
              <span className="text-slate-400 leading-[22.4px]">
                We understand that your unique automobile is your treasure. It often holds significant financial or sentimental value. You want to ensure your precious vehicle remains in perfect condition from the moment we pick up your car to its arrival at the final destination.
              </span>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="flex flex-col flex-wrap justify-between md:flex-row">
            {serviceItems.map((item) => (
              <div key={item.id} className="bg-gray-50 basis-[32%] min-h-[auto] min-w-[auto] border border-zinc-200 mb-12 p-5 rounded border-solid">
                <div className="mb-4">
                  <img src={item.imgSrc} alt={item.imgAlt} className="inline" />
                </div>
                <div><span className="text-blue-950 text-xl font-bold leading-7">{item.title}</span></div>
                <div className="mt-4"><p className="text-slate-400 leading-[22.4px]">{item.description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost CTA */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80')] bg-no-repeat bg-cover flex flex-wrap justify-center min-h-0 text-center px-1 py-8 md:min-h-[400px] md:text-left md:p-0 before:bg-[linear-gradient(to_right,rgb(9,38,94),rgba(10,37,92,0.7))] before:block before:h-full before:absolute before:w-full before:left-0 before:top-0">
        <div className="relative text-white items-start flex flex-col justify-center min-h-[auto] min-w-[auto] text-center mx-10 my-4 md:text-left">
          <div className="max-w-[560px] mb-4">
            <h3 className="text-[32px] font-bold leading-[38.4px] text-center mb-2 md:text-left">How much will my enclosed auto shipping cost?</h3>
          </div>
          <div className="max-w-screen-sm">
            <p className="text-base leading-6 text-center md:text-xl md:leading-[30px] md:text-left">Get affordable prices for enclosed auto shipping from our moving experts.</p>
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
              { title: "Hassle-Free Car Delivery", text: "Great service. Fast delivery time. Hassle free car delivery. And great prices. Will definitely continue to use them." },
              { title: "Calmed My Nerves", text: "I used Shareef Transport to send my car from Washington to Florida and back again. Both times they were up front with the pricing, took very good care of my car and delivered the car earlier than expected." },
              { title: "Easy, Unexpected Deal", text: "Arranged to have my 1982 Volvo 242 shipped over the phone. The shipping company called and made it easy to schedule the pickup. The driver was great. Will definitely use Shareef Transport next time!" },
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

      {/* FAQ */}
      <section className="max-w-none w-full mx-auto pb-12 px-[15px] md:max-w-[1210px]">
        <h2 className="text-[32px] font-bold leading-[38.4px] text-center mb-2 py-12">Your Enclosed Shipping Questions Answered</h2>
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
