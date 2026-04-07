import React from "react";

export function BlogSection() {
  return (
    <section className="box-border caret-transparent mt-0 pb-10 md:mt-10">
      <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
        <div className="box-border caret-transparent text-center mb-5 md:mb-[60px]">
          <span className="text-blue-950 text-[29px] font-semibold box-border caret-transparent leading-[42px]">
            Most Recent Articles
          </span>
        </div>
        <div className="box-border caret-transparent flex flex-wrap -mx-3">
          <div className="box-border caret-transparent flex flex-col shrink-0 justify-between max-w-full min-h-[auto] min-w-[auto] w-full mb-9 px-5 md:w-[33.3333%] md:mb-0">
            <a
              href="https://shareeftransport.com/how-a-car-vending-machine-works-what-steps-to-take-before-you-buy/"
              title="See How a Car Vending Machine Works & What Steps to Take Before You Buy"
              className="text-blue-600 box-border caret-transparent block min-h-[auto] min-w-[auto]"
            >
              <img
                alt="How a Car Vending Machine Works What Steps to Take Before You Bu"
                className="box-border caret-transparent inline h-[220px] max-w-full object-cover w-full mb-5 rounded-lg"
              />
              <div className="box-border caret-transparent">
                <div className="text-blue-950 text-xl font-semibold box-border caret-transparent leading-[23px] text-center mt-[30px] mb-[18px] md:mt-0">
                  How a Car Vending Machine Works & What Steps to Take Before
                  You Buy
                </div>
                <div className="text-neutral-600 font-medium box-border caret-transparent leading-[23px] text-center mb-4">
                  Learn how Carvana's car vending machines work, what to expect
                  during pickup, and the key steps to take before buying a car
                  online in 2026.
                </div>
              </div>
            </a>
          </div>
          <div className="box-border caret-transparent flex flex-col shrink-0 justify-between max-w-full min-h-[auto] min-w-[auto] w-full mb-9 px-5 md:w-[33.3333%] md:mb-0">
            <a
              href="https://shareeftransport.com/buying-a-car-from-california/"
              title="See Buying a Car from California: What Out-of-State Buyers Need to Know"
              className="text-blue-600 box-border caret-transparent block min-h-[auto] min-w-[auto]"
            >
              <img
                alt="CA MAIN"
                className="box-border caret-transparent inline h-[220px] max-w-full object-cover w-full mb-5 rounded-lg"
              />
              <div className="box-border caret-transparent">
                <div className="text-blue-950 text-xl font-semibold box-border caret-transparent leading-[23px] text-center mt-[30px] mb-[18px] md:mt-0">
                  Buying a Car from California: What Out-of-State Buyers Need to
                  Know
                </div>
                <div className="text-neutral-600 font-medium box-border caret-transparent leading-[23px] text-center mb-4">
                  Thinking about buying a car from California? Discover how the
                  country's biggest auto market affects pricing, taxes,
                  inspections, and vehicle shipping.
                </div>
              </div>
            </a>
          </div>
          <div className="box-border caret-transparent flex flex-col shrink-0 justify-between max-w-full min-h-[auto] min-w-[auto] w-full mb-9 px-5 md:w-[33.3333%] md:mb-0">
            <a
              href="https://shareeftransport.com/how-market-demand-affects-used-car-values/"
              title="See How Market Demand Affects Used Car Values"
              className="text-blue-600 box-border caret-transparent block min-h-[auto] min-w-[auto]"
            >
              <img
                alt="Market demand in the used car"
                className="box-border caret-transparent inline h-[220px] max-w-full object-cover w-full mb-5 rounded-lg"
              />
              <div className="box-border caret-transparent">
                <div className="text-blue-950 text-xl font-semibold box-border caret-transparent leading-[23px] text-center mt-[30px] mb-[18px] md:mt-0">
                  How Market Demand Affects Used Car Values
                </div>
                <div className="text-neutral-600 font-medium box-border caret-transparent leading-[23px] text-center mb-4">
                  Discover the key demand factors that affect used car pricing
                  and how you can use market trends to sell your vehicle at the
                  right time.
                </div>
              </div>
            </a>
          </div>
          <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] text-center w-full mt-2 pt-6 px-3 md:mt-12">
            <a
              href="/blog/"
              title="go blog page"
              className="text-white font-bold bg-blue-500 box-border caret-transparent inline-block leading-[19px] align-middle px-[60px] py-3 rounded-[30px]"
            >
              See All
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
