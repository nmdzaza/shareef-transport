import React, { useState } from "react";
import {
  transportOptions,
  whoWeServeOptions,
  mobileNavLinks,
} from "../../data/navigation";

export function MobileNav() {
  const [transportOpen, setTransportOpen] = useState(false);
  const [whoWeServeOpen, setWhoWeServeOpen] = useState(false);

  return (
    <nav className="fixed bg-white border-b-sky-100 border-l-neutral-800 border-r-neutral-800 border-t-neutral-800 shadow-[rgba(0,0,0,0.1)_7px_7px_13px_0px] box-border caret-transparent block flex-wrap list-none w-full z-[10000] border-b top-0 md:hidden">
      <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
        <div className="items-center box-border caret-transparent inline-flex justify-between w-full py-2.5">
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
            <a href="/" className="text-blue-600 box-border caret-transparent">
              <img
                src="https://c.animaapp.com/mnnx669pIjQjBB/assets/nexus-logo-navy.svg"
                alt="Shareef Transport logo"
                className="box-border caret-transparent inline h-10 max-w-full"
              />
            </a>
          </div>
          <a
            href="/car-shipping-calculator/"
            title="Cost Calculator"
            className="text-blue-600 box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"
          >
            <img
              src="https://c.animaapp.com/mnnx669pIjQjBB/assets/calculator.svg"
              alt="calculator-logo"
              className="box-border caret-transparent max-h-[22px] min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"
            />
            <span className="text-slate-400 text-xs font-semibold box-border caret-transparent block leading-[14.4px] min-h-[auto] min-w-[auto] text-center mt-1.5 md:min-h-0 md:min-w-0">
              Cost
              <br className="box-border caret-transparent" />
              Calculator
            </span>
          </a>
          <a
            href="tel://6025550100"
            title="Call Now"
            className="text-blue-600 box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"
          >
            <img
              src="https://c.animaapp.com/mnnx669pIjQjBB/assets/headset.svg"
              alt="headset-icon"
              className="box-border caret-transparent max-h-[22px] min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"
            />
            <span className="text-slate-400 text-xs font-semibold box-border caret-transparent block leading-[14.4px] min-h-[auto] min-w-[auto] text-center mt-1.5 md:min-h-0 md:min-w-0">
              Call
              <br className="box-border caret-transparent" />
              Now
            </span>
          </a>
          <button
            type="button"
            aria-label="Toggle navigation"
            className="relative bg-transparent caret-transparent flex flex-col justify-center leading-4 min-h-[auto] min-w-[auto] text-center p-0 md:min-h-0 md:min-w-0"
          >
            <img
              src="https://c.animaapp.com/mnnx669pIjQjBB/assets/mobile-menu-line.svg"
              alt="mobile-menu-line"
              className="relative box-border caret-transparent min-h-[auto] min-w-[auto] my-1 md:min-h-0 md:min-w-0"
            />
            <img
              src="https://c.animaapp.com/mnnx669pIjQjBB/assets/mobile-menu-line.svg"
              alt="mobile-menu-line"
              className="relative box-border caret-transparent min-h-[auto] min-w-[auto] my-1 md:min-h-0 md:min-w-0"
            />
          </button>
        </div>
      </div>
      <div className="items-center box-border caret-transparent hidden basis-full grow">
        <ul className="bg-sky-900 box-border caret-transparent flex flex-col h-[1000px] mr-auto p-6">
          <li className="box-border caret-transparent mb-6">
            <a
              href="/how-it-works/"
              title="How it works"
              className="text-white font-medium box-border caret-transparent px-6"
            >
              How it works
            </a>
          </li>
          <li className="box-border caret-transparent mb-6">
            <button
              type="button"
              className="text-white bg-transparent caret-transparent text-left w-full px-6 py-0"
              onClick={() => setTransportOpen(!transportOpen)}
            >
              Transport Options
              <img
                src="https://c.animaapp.com/mnnx669pIjQjBB/assets/caret-white.svg"
                alt="caret-white"
                className="box-border caret-transparent inline ml-1"
              />
            </button>
            <ul className="box-border caret-transparent hidden list-[circle] mt-3 pl-8">
              {transportOptions.map((item) => (
                <li
                  key={item.id}
                  className="box-border caret-transparent mb-1.5"
                >
                  <a
                    href={item.href}
                    title={item.title}
                    className="text-white font-medium box-border caret-transparent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className="box-border caret-transparent mb-6">
            <button
              type="button"
              className="text-white bg-transparent caret-transparent text-left w-full px-6 py-0"
              onClick={() => setWhoWeServeOpen(!whoWeServeOpen)}
            >
              Who We Serve
              <img
                src="https://c.animaapp.com/mnnx669pIjQjBB/assets/caret-white.svg"
                alt="caret-white"
                className="box-border caret-transparent inline ml-1"
              />
            </button>
            <ul className="box-border caret-transparent hidden list-[circle] mt-3 pl-8">
              {whoWeServeOptions.map((item) => (
                <li
                  key={item.id}
                  className="box-border caret-transparent mb-1.5"
                >
                  <a
                    href={item.href}
                    title={item.title}
                    className="text-white font-medium box-border caret-transparent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          {mobileNavLinks
            .filter((l) => !["how-it-works"].includes(l.id))
            .map((item) => (
              <li key={item.id} className="box-border caret-transparent mb-6">
                <a
                  href={item.href}
                  title={item.title}
                  className="text-white font-medium box-border caret-transparent px-6"
                >
                  {item.label}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
}
