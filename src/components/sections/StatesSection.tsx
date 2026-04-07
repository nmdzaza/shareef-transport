import React from "react";
import { stateLinks } from "../../data/states";

export function StatesSection() {
  return (
    <section className="bg-[linear-gradient(rgba(237,240,242,0),rgba(237,240,242,0.7)_53.75%,rgba(237,240,242,0))] box-border caret-transparent py-[30px] md:py-20">
      <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
        <h2 className="text-blue-950 text-3xl font-semibold box-border caret-transparent leading-[42px] text-center mb-2">
          Which state do you want to ship a car to?
        </h2>
        <div className="box-border caret-transparent flex flex-wrap -mx-3">
          <div className="box-border caret-transparent flex shrink-0 flex-wrap justify-between max-w-full min-h-[auto] min-w-[auto] w-full mt-2.5 pl-[30px] pr-3 md:mt-[30px] md:pl-3">
            {stateLinks.map((state) => (
              <div
                key={state.id}
                className="items-center box-border caret-transparent flex basis-full min-h-[auto] min-w-[auto] my-3 md:basis-3/12"
              >
                <img
                  alt="state flag"
                  className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] w-[25px] md:w-6"
                />
                <a
                  href={state.href}
                  className="text-slate-400 text-base font-semibold box-border caret-transparent block leading-[22.4px] min-h-[auto] min-w-[auto] ml-2 mr-1 md:text-[15px] md:leading-[21px] md:mr-1.5"
                >
                  {state.label}
                </a>
                {state.isHotRoute && (
                  <img
                    alt="hot route icon"
                    className="box-border caret-transparent min-h-[auto] min-w-[auto]"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
