import React from "react";
import { stateLinks } from "../../data/states";

const stateAbbreviations: Record<string, string> = {
  alabama: "AL",
  alaska: "AK",
  arizona: "AZ",
  arkansas: "AR",
  california: "CA",
  colorado: "CO",
  connecticut: "CT",
  delaware: "DE",
  florida: "FL",
  georgia: "GA",
  hawaii: "HI",
  idaho: "ID",
  illinois: "IL",
  indiana: "IN",
  iowa: "IA",
  kansas: "KS",
  kentucky: "KY",
  louisiana: "LA",
  maine: "ME",
  maryland: "MD",
  massachusetts: "MA",
  michigan: "MI",
  minnesota: "MN",
  mississippi: "MS",
  missouri: "MO",
  montana: "MT",
  nebraska: "NE",
  nevada: "NV",
  "new-hampshire": "NH",
  "new-jersey": "NJ",
  "new-mexico": "NM",
  "new-york": "NY",
  "north-carolina": "NC",
  "north-dakota": "ND",
  ohio: "OH",
  oklahoma: "OK",
  oregon: "OR",
  pennsylvania: "PA",
  "rhode-island": "RI",
  "south-carolina": "SC",
  "south-dakota": "SD",
  tennessee: "TN",
  texas: "TX",
  utah: "UT",
  vermont: "VT",
  virginia: "VA",
  washington: "WA",
  "west-virginia": "WV",
  wisconsin: "WI",
  wyoming: "WY",
};

export function StatesSection() {
  return (
    <section className="bg-[linear-gradient(rgba(237,240,242,0),rgba(237,240,242,0.7)_53.75%,rgba(237,240,242,0))] box-border caret-transparent py-[30px] md:py-20">
      <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
        <h2 className="text-blue-950 text-3xl font-semibold box-border caret-transparent leading-[42px] text-center mb-2">
          Which state do you want to ship a car to?
        </h2>
        <div className="box-border caret-transparent flex flex-wrap -mx-3">
          <div className="box-border caret-transparent flex shrink-0 flex-wrap justify-between max-w-full min-h-[auto] min-w-[auto] w-full mt-2.5 pl-[30px] pr-3 md:mt-[30px] md:pl-3">
            {stateLinks.map((state) => {
              const abbr = stateAbbreviations[state.id] ?? state.id.slice(0, 2).toUpperCase();
              return (
                <div
                  key={state.id}
                  className="items-center box-border caret-transparent flex basis-full min-h-[auto] min-w-[auto] my-3 md:basis-3/12"
                >
                  <div className="w-8 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold flex-shrink-0">
                    {abbr}
                  </div>
                  <a
                    href={state.href}
                    className="text-slate-400 text-base font-semibold box-border caret-transparent block leading-[22.4px] min-h-[auto] min-w-[auto] ml-2 mr-1 md:text-[15px] md:leading-[21px] md:mr-1.5"
                  >
                    {state.label}
                  </a>
                  {state.isHotRoute && (
                    <span className="text-orange-500 text-base" title="Hot Route">
                      🔥
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
