import React from "react";
import { ArrowRight } from "lucide-react";

export function SolutionsSection() {
  return (
    <section className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
      <div className="box-border caret-transparent flex flex-wrap justify-between mt-12 md:flex-nowrap">
        <div className="bg-gray-50 shadow-[rgba(0,0,0,0.07)_7px_7px_13px_0px] box-border caret-transparent basis-full min-h-[auto] min-w-[auto] border border-zinc-200 mb-6 rounded-[4.23913px] border-solid md:basis-[32%] md:mb-0">
          <div className="items-baseline box-border caret-transparent flex flex-col h-full px-5 py-6">
            <img
              src={import.meta.env.BASE_URL + "solution-car.svg"}
              alt="solution-icon"
              className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto]"
            />
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] mt-5 mb-2">
              <a
                href="#quote"
                title="See More about Travelers Like You"
                className="text-blue-600 box-border caret-transparent"
              >
                <span className="text-black text-[20.5854px] font-semibold box-border caret-transparent leading-[27px]">
                  Ship your car safe & secure
                </span>
              </a>
            </div>
            <div className="box-border caret-transparent grow min-h-[auto] min-w-[auto] mb-6">
              <span className="text-neutral-600 text-[15.5px] font-medium box-border caret-transparent">
                Get a quote through our state-of-the-art car shipping cost
                calculator, and we'll connect you with an experienced, reputable
                driver.
              </span>
            </div>
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
              <a
                href="#quote"
                title="See more about car transport"
                className="text-blue-500 text-[16.4683px] font-bold items-center box-border caret-transparent flex leading-[27px]"
              >
                More About Car Transport
                <ArrowRight className="box-border caret-transparent h-4 w-4 ml-2.5" />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 shadow-[rgba(0,0,0,0.07)_7px_7px_13px_0px] box-border caret-transparent basis-full min-h-[auto] min-w-[auto] border border-zinc-200 mb-6 rounded-[4.23913px] border-solid md:basis-[32%] md:mb-0">
          <div className="items-baseline box-border caret-transparent flex flex-col h-full px-5 py-6">
            <img
              src={import.meta.env.BASE_URL + "solution-enclosed.svg"}
              alt="solution-icon"
              className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto]"
            />
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] mt-5 mb-2">
              <a
                href="#quote"
                title="See more about door-to-door shipping"
                className="text-blue-600 box-border caret-transparent"
              >
                <span className="text-black text-[20.5854px] font-semibold box-border caret-transparent leading-[27px]">
                  No-hassle car transport
                </span>
              </a>
            </div>
            <div className="box-border caret-transparent grow min-h-[auto] min-w-[auto] mb-6">
              <span className="text-neutral-600 text-[15.5px] font-medium box-border caret-transparent">
                We coordinate your
                <a
                  href="#quote"
                  className="text-blue-950 box-border caret-transparent"
                >
                  door-to-door car shipping
                </a>
                order from start to finish and manage your car transportation
                with care and respect.
              </span>
            </div>
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
              <a
                href="#quote"
                title="See more about car transport"
                className="text-blue-500 text-[16.4683px] font-bold items-center box-border caret-transparent flex leading-[27px]"
              >
                Door-to-door Service
                <ArrowRight className="box-border caret-transparent h-4 w-4 ml-2.5" />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 shadow-[rgba(0,0,0,0.07)_7px_7px_13px_0px] box-border caret-transparent basis-full grow min-h-[auto] min-w-[auto] border border-zinc-200 mb-6 rounded-[4.23913px] border-solid md:basis-[32%] md:grow-0 md:mb-0">
          <div className="items-baseline box-border caret-transparent flex flex-col h-full px-5 py-6">
            <img
              src={import.meta.env.BASE_URL + "solution-motorcycle.svg"}
              alt="solution-icon"
              className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto]"
            />
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] mt-5 mb-2">
              <a
                href="#quote"
                title="see more about relocation"
                className="text-blue-600 box-border caret-transparent"
              >
                <span className="text-black text-[20.5854px] font-semibold box-border caret-transparent leading-[27px]">
                  More than an auto transport company
                </span>
              </a>
            </div>
            <div className="box-border caret-transparent grow min-h-[auto] min-w-[auto] mb-6">
              <span className="text-neutral-600 text-[15.5px] font-medium box-border caret-transparent">
                Shareef Transport offers resources for
                <a
                  href="https://shareeftransport.com/sell-my-car/"
                  className="text-blue-950 box-border caret-transparent"
                >
                  local car sellers
                </a>
                ,
                <a
                  href="https://www.shareeftransport.com/dealer/"
                  className="text-blue-950 box-border caret-transparent"
                >
                  car dealerships
                </a>
                , and clients looking to connect with moving companies.
              </span>
            </div>
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
              <a
                href="#quote"
                title="see more about relocation"
                className="text-blue-500 text-[16.4683px] font-bold items-center box-border caret-transparent flex leading-[27px]"
              >
                Moving Calculator
                <ArrowRight className="box-border caret-transparent h-4 w-4 ml-2.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
