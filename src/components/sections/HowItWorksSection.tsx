import React from "react";

const steps = [
  {
    number: "01",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Get Your Free Quote",
    description: "Fill out our quick form with your pickup and delivery locations, vehicle type, and preferred dates. Get an instant estimate with no obligation.",
  },
  {
    number: "02",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "Book Your Shipment",
    description: "Confirm your details, lock in your rate, and we'll match you with a vetted carrier. No surprise fees — what you see is what you pay.",
  },
  {
    number: "03",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Vehicle Pickup",
    description: "Your assigned driver arrives at your location on the scheduled date, inspects the vehicle, and loads it securely for transport.",
  },
  {
    number: "04",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: "Delivered Safe",
    description: "Track your shipment in real time. When it arrives, inspect your vehicle and sign off. Delivered to your door — damage-free guaranteed.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 bg-[#0F172A]">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-amber-500 font-semibold uppercase tracking-widest text-sm mb-2">Simple Process</p>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-base">
            Shipping your vehicle is easier than you think. Four steps and your car is on its way.
          </p>
        </div>
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-amber-500/30 z-0" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="w-20 h-20 rounded-full bg-amber-500 flex items-center justify-center shadow-lg">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 bg-[#0F172A] border-2 border-amber-500 text-amber-500 text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href="#quote"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3.5 rounded-lg transition-colors duration-150 text-base shadow-lg"
          >
            Start with a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
