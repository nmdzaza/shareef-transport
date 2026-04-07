import React from "react";
import {
  desktopTopLinks,
  transportOptions,
  whoWeServeOptions,
} from "../../data/navigation";

export function DesktopNav() {
  return (
    <>
      <nav className="absolute box-border caret-transparent hidden flex-wrap list-none w-full z-[3] pt-[18px] pb-2.5 top-0 inset-x-0 md:block">
        <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
          <div className="items-center box-border caret-transparent flex flex-wrap -mx-3">
            <div className="items-center box-border caret-transparent flex basis-[70%] justify-between max-w-[70%] min-h-0 min-w-0 w-full ml-auto px-3 md:min-h-[auto] md:min-w-[auto]">
              {desktopTopLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  title={item.title}
                  className="text-slate-400 text-sm font-semibold box-border caret-transparent block leading-[21px] min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel://6025550100"
                className="text-white font-bold items-center box-border caret-transparent flex min-h-0 min-w-0 px-2 py-1 md:min-h-[auto] md:min-w-[auto]"
              >
                <img
                  src="https://c.animaapp.com/mnnx669pIjQjBB/assets/headphone.svg"
                  alt="headphones-icon"
                  className="box-border caret-transparent min-h-0 min-w-0 mr-2 md:min-h-[auto] md:min-w-[auto]"
                />
                (602) 555-0100
              </a>
            </div>
          </div>
        </div>
      </nav>
      <nav className="absolute box-border caret-transparent hidden flex-wrap list-none w-full z-[4] top-[60px] inset-x-0 md:block">
        <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
          <div className="items-center box-border caret-transparent flex justify-between">
            <li className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              <a
                href="/"
                className="text-white text-[13px] font-semibold box-border caret-transparent leading-[19.5px] md:text-base md:leading-6"
              >
                <img
                  src="https://c.animaapp.com/mnnx669pIjQjBB/assets/nexus-logo.svg"
                  alt="Shareef Transport logo"
                  className="text-[13px] box-border caret-transparent leading-[19.5px] pb-2 md:text-base md:leading-6"
                />
                <img
                  src="https://c.animaapp.com/mnnx669pIjQjBB/assets/nexus-logo-navy.svg"
                  alt="Shareef Transport logo"
                  className="text-[13px] box-border caret-transparent hidden leading-[19.5px] pb-2 md:text-base md:leading-6"
                />
              </a>
            </li>
            <li className="box-border caret-transparent min-h-0 min-w-0 py-2.5 md:min-h-[auto] md:min-w-[auto]">
              <a
                href="/how-it-works/"
                title="how-it-works"
                className="text-white text-[13px] font-semibold box-border caret-transparent block leading-[19.5px] px-4 py-2 md:text-base md:leading-6"
              >
                How it works
              </a>
            </li>
            <li className="relative box-border caret-transparent min-h-0 min-w-0 py-2.5 md:min-h-[auto] md:min-w-[auto]">
              <button
                type="button"
                title="Transport Options"
                className="text-white text-[13px] font-semibold bg-transparent caret-transparent leading-[19.5px] text-center p-0 md:text-base md:leading-6"
              >
                Transport Options
                <img
                  src="https://c.animaapp.com/mnnx669pIjQjBB/assets/icon-1.svg"
                  alt="Icon"
                  className="text-[13px] box-border caret-transparent inline h-3 leading-[19.5px] w-3 md:text-base md:leading-6"
                />
              </button>
            </li>
            <li className="relative box-border caret-transparent min-h-0 min-w-0 py-2.5 md:min-h-[auto] md:min-w-[auto]">
              <button
                type="button"
                title="Who We Serve"
                className="text-white text-[13px] font-semibold bg-transparent caret-transparent leading-[19.5px] text-center p-0 md:text-base md:leading-6"
              >
                Who We Serve
                <img
                  src="https://c.animaapp.com/mnnx669pIjQjBB/assets/icon-1.svg"
                  alt="Icon"
                  className="text-[13px] box-border caret-transparent inline h-3 leading-[19.5px] w-3 md:text-base md:leading-6"
                />
              </button>
            </li>
            <li className="box-border caret-transparent min-h-0 min-w-0 py-2.5 md:min-h-[auto] md:min-w-[auto]">
              <a
                href="/about-us/"
                title="About Us"
                className="text-white text-[13px] font-semibold box-border caret-transparent block leading-[19.5px] px-4 py-2 md:text-base md:leading-6"
              >
                About Us
              </a>
            </li>
            <li className="box-border caret-transparent min-h-0 min-w-0 py-2.5 md:min-h-[auto] md:min-w-[auto]">
              <a
                href="/car-shipping-calculator/"
                title="Cost Calculator"
                className="text-lime-300 text-[13px] font-semibold items-center box-border caret-transparent inline-flex leading-[19.5px] md:text-base md:leading-6"
              >
                <span className="text-[13px] box-border caret-transparent block leading-[19.5px] min-h-0 min-w-0 md:text-base md:leading-6 md:min-h-[auto] md:min-w-[auto]">
                  Cost Calculator
                </span>
                <img
                  src="https://c.animaapp.com/mnnx669pIjQjBB/assets/right-arrow.svg"
                  alt="right-arrow-circle"
                  className="text-[13px] box-border caret-transparent leading-[19.5px] min-h-0 min-w-0 ml-2.5 md:text-base md:leading-6 md:min-h-[auto] md:min-w-[auto]"
                />
              </a>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}
