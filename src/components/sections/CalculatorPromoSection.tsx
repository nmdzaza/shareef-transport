import React from "react";

export function CalculatorPromoSection() {
  return (
    <section className="bg-slate-50 box-border caret-transparent mt-5 md:mt-20">
      <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
        <div className="box-border caret-transparent flex flex-wrap -mx-3">
          <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] w-full px-3">
            <div className="items-center box-border caret-transparent flex flex-col-reverse justify-between md:flex-row">
              <div className="box-border caret-transparent basis-full min-h-[auto] min-w-[auto] md:basis-[48%]">
                <div className="box-border caret-transparent px-[15px] py-3 md:p-0">
                  <div className="box-border caret-transparent mt-5 md:mt-0">
                    <span className="text-blue-950 text-[29px] font-semibold box-border caret-transparent leading-[42px]">
                      Instantly calculate
                      <br className="box-border caret-transparent" />
                      your car shipping cost.
                    </span>
                  </div>
                  <div className="box-border caret-transparent basis-full mt-5 md:basis-[48%]">
                    <p className="text-neutral-600 text-[15px] font-medium box-border caret-transparent leading-[22.5px] mb-4">
                      We've designed our on-site car transport calculator to
                      deliver accurate, personalized quotes at any time of day.
                      All comprehensive auto shipping quotes include access to
                      complete door-to-door car transportation services from one
                      of our private transportation service partners, complete
                      in-house management from our expert support staff, taxes
                      and fees, and top service from the independent car movers
                      we partner with.
                    </p>
                    <p className="text-neutral-600 text-[15px] font-medium box-border caret-transparent leading-[22.5px]">
                      Shareef Transport is dedicated to being a customer-first
                      vehicle transport company. That means we'll be with you
                      every step of the way, whether you're shipping a car
                      across the country or moving it just across state lines.
                      FMCSA verified carriers, door-to-door service, and
                      absolutely no hidden fees — it's our privilege to make
                      your auto transport simple and worry-free.
                    </p>
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent basis-full min-h-[auto] min-w-[auto] md:basis-6/12">
                <img
                  alt="car 1"
                  className="box-border caret-transparent inline max-w-full w-full"
                />
              </div>
            </div>
            <div className="items-center box-border caret-transparent flex flex-col justify-between md:flex-row">
              <div className="box-border caret-transparent basis-full min-h-[auto] min-w-[auto] mt-10 md:basis-6/12 md:mt-0">
                <img
                  alt="car 2"
                  className="box-border caret-transparent inline max-w-full w-full"
                />
              </div>
              <div className="box-border caret-transparent basis-full min-h-[auto] min-w-[auto] md:basis-[48%]">
                <div className="box-border caret-transparent px-[15px] py-3 md:p-0">
                  <div className="box-border caret-transparent mt-5 md:mt-0">
                    <span className="text-blue-950 text-[29px] font-semibold box-border caret-transparent leading-[42px]">
                      A dependable auto transport company.
                    </span>
                  </div>
                  <div className="box-border caret-transparent basis-full mt-5 md:basis-[48%]">
                    <p className="text-neutral-600 text-[15px] font-medium box-border caret-transparent leading-[22.5px]">
                      Our vehicle shipping cost calculator offers auto transport
                      quotes for standard open transport, enclosed transport,
                      and expedited car shipping services. The price to ship a
                      car varies based on the make and model of your vehicle,
                      driver availability, the length of your shipping route,
                      the time of year, and current market conditions. We stay
                      upfront with you about all car shipping costs and remain
                      transparent about the time it takes to ship a car. We'll
                      also coordinate with your driver to ensure you get what
                      you deserve from a car shipping company -- reliability,
                      efficiency, and a high level of service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
