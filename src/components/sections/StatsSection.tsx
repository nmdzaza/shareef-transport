import React from "react";
import { Truck, MapPin, Star, ShieldCheck } from "lucide-react";

export function StatsSection() {
  return (
    <section className="bg-blue-950 box-border caret-transparent">
      <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
        <div className="box-border caret-transparent flex flex-wrap justify-center py-[30px]">
          <div className="box-border caret-transparent basis-full min-h-[auto] min-w-[auto] text-center mt-5 mb-6 mx-5 md:basis-[21%] md:mt-6">
            <div className="box-border caret-transparent flex justify-center mb-2">
              <Truck className="h-10 w-10 text-blue-300" />
            </div>
            <div className="box-border caret-transparent">
              <span className="text-white text-[51px] font-semibold box-border caret-transparent leading-[84px]">
                10,000+
              </span>
            </div>
            <div className="text-white text-lg font-semibold box-border caret-transparent leading-[34px] md:text-[22px]">
              <span className="text-lg box-border caret-transparent md:text-[22px]">
                Vehicles Shipped
              </span>
            </div>
          </div>
          <div className="box-border caret-transparent basis-full min-h-[auto] min-w-[auto] text-center mt-5 mb-6 mx-5 md:basis-[21%] md:mt-6">
            <div className="box-border caret-transparent flex justify-center mb-2">
              <MapPin className="h-10 w-10 text-blue-300" />
            </div>
            <div className="box-border caret-transparent">
              <span className="text-white text-[51px] font-semibold box-border caret-transparent leading-[84px]">
                50
              </span>
            </div>
            <div className="text-white text-lg font-semibold box-border caret-transparent leading-[34px] md:text-[22px]">
              <span className="text-lg box-border caret-transparent md:text-[22px]">
                States Covered
              </span>
            </div>
          </div>
          <div className="box-border caret-transparent basis-full min-h-[auto] min-w-[auto] text-center mt-5 mb-6 mx-5 md:basis-[21%] md:mt-6">
            <div className="box-border caret-transparent flex justify-center mb-2">
              <Star className="h-10 w-10 text-yellow-400 fill-yellow-400" />
            </div>
            <div className="box-border caret-transparent">
              <span className="text-white text-[51px] font-semibold box-border caret-transparent leading-[84px]">
                5-Star
              </span>
            </div>
            <div className="text-white text-lg font-semibold box-border caret-transparent leading-[34px] md:text-[22px]">
              <span className="text-lg box-border caret-transparent md:text-[22px]">
                Reviews
              </span>
            </div>
          </div>
          <div className="box-border caret-transparent basis-full min-h-[auto] min-w-[auto] text-center mt-5 mb-6 mx-5 md:basis-[21%] md:mt-6">
            <div className="box-border caret-transparent flex justify-center mb-2">
              <ShieldCheck className="h-10 w-10 text-green-400" />
            </div>
            <div className="box-border caret-transparent">
              <span className="text-white text-[51px] font-semibold box-border caret-transparent leading-[84px]">
                ✓
              </span>
            </div>
            <div className="text-white text-lg font-semibold box-border caret-transparent leading-[34px] md:text-[22px]">
              <span className="text-lg box-border caret-transparent md:text-[22px]">
                Licensed &amp; Insured
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
