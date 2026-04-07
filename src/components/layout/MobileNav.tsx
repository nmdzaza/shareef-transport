import React, { useState } from "react";
import { Menu, X, Phone, Calculator } from "lucide-react";
import {
  transportOptions,
  whoWeServeOptions,
} from "../../data/navigation";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [transportOpen, setTransportOpen] = useState(false);
  const [whoWeServeOpen, setWhoWeServeOpen] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
    setTransportOpen(false);
    setWhoWeServeOpen(false);
  };

  const handleAnchorClick = (id: string) => {
    closeAll();
    setTimeout(() => scrollTo(id), 100);
  };

  return (
    <nav className="fixed bg-white border-b-sky-100 border-l-neutral-800 border-r-neutral-800 border-t-neutral-800 shadow-[rgba(0,0,0,0.1)_7px_7px_13px_0px] box-border caret-transparent block flex-wrap list-none w-full z-[10000] border-b top-0 md:hidden">
      <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
        <div className="items-center box-border caret-transparent inline-flex justify-between w-full py-2.5">
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
            <a href="#" className="text-blue-600 box-border caret-transparent">
              <img
                src="/logo.svg"
                alt="Shareef Transport logo"
                className="box-border caret-transparent inline h-10 max-w-full"
              />
            </a>
          </div>
          <button
            type="button"
            onClick={() => handleAnchorClick("quote")}
            title="Get a Quote"
            className="text-blue-600 box-border caret-transparent flex flex-col items-center min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0 bg-transparent border-0 p-0 cursor-pointer"
          >
            <Calculator className="h-[22px] w-[22px] text-blue-600" />
            <span className="text-slate-400 text-xs font-semibold box-border caret-transparent block leading-[14.4px] min-h-[auto] min-w-[auto] text-center mt-1.5 md:min-h-0 md:min-w-0">
              Cost
              <br className="box-border caret-transparent" />
              Calculator
            </span>
          </button>
          <a
            href="tel:6025550100"
            title="Call Now"
            className="text-blue-600 box-border caret-transparent flex flex-col items-center min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"
          >
            <Phone className="h-[22px] w-[22px] text-blue-600" />
            <span className="text-slate-400 text-xs font-semibold box-border caret-transparent block leading-[14.4px] min-h-[auto] min-w-[auto] text-center mt-1.5 md:min-h-0 md:min-w-0">
              Call
              <br className="box-border caret-transparent" />
              Now
            </span>
          </a>
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative bg-transparent caret-transparent flex flex-col justify-center leading-4 min-h-[auto] min-w-[auto] text-center p-2 md:min-h-0 md:min-w-0 border-0 cursor-pointer"
          >
            {menuOpen ? (
              <X className="h-6 w-6 text-blue-950" />
            ) : (
              <Menu className="h-6 w-6 text-blue-950" />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="items-center box-border caret-transparent basis-full grow">
          <ul className="bg-sky-900 box-border caret-transparent flex flex-col mr-auto p-6">
            <li className="box-border caret-transparent mb-6">
              <button
                type="button"
                onClick={() => handleAnchorClick("home")}
                className="text-white font-medium bg-transparent border-0 text-left px-6 py-0 w-full cursor-pointer"
              >
                Home
              </button>
            </li>
            <li className="box-border caret-transparent mb-6">
              <button
                type="button"
                onClick={() => handleAnchorClick("quote")}
                className="text-white font-medium bg-transparent border-0 text-left px-6 py-0 w-full cursor-pointer"
              >
                Get a Quote
              </button>
            </li>
            <li className="box-border caret-transparent mb-6">
              <button
                type="button"
                onClick={() => handleAnchorClick("services")}
                className="text-white font-medium bg-transparent border-0 text-left px-6 py-0 w-full cursor-pointer"
              >
                Services
              </button>
            </li>
            <li className="box-border caret-transparent mb-6">
              <button
                type="button"
                className="text-white bg-transparent border-0 caret-transparent text-left w-full px-6 py-0 cursor-pointer"
                onClick={() => setTransportOpen(!transportOpen)}
              >
                Transport Options
                <span className="inline ml-1">{transportOpen ? "▲" : "▼"}</span>
              </button>
              {transportOpen && (
                <ul className="box-border caret-transparent list-[circle] mt-3 pl-8">
                  {transportOptions.map((item) => (
                    <li key={item.id} className="box-border caret-transparent mb-1.5">
                      <a
                        href={item.href}
                        title={item.title}
                        className="text-white font-medium box-border caret-transparent"
                        onClick={closeAll}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="box-border caret-transparent mb-6">
              <button
                type="button"
                className="text-white bg-transparent border-0 caret-transparent text-left w-full px-6 py-0 cursor-pointer"
                onClick={() => setWhoWeServeOpen(!whoWeServeOpen)}
              >
                Who We Serve
                <span className="inline ml-1">{whoWeServeOpen ? "▲" : "▼"}</span>
              </button>
              {whoWeServeOpen && (
                <ul className="box-border caret-transparent list-[circle] mt-3 pl-8">
                  {whoWeServeOptions.map((item) => (
                    <li key={item.id} className="box-border caret-transparent mb-1.5">
                      <a
                        href={item.href}
                        title={item.title}
                        className="text-white font-medium box-border caret-transparent"
                        onClick={closeAll}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="box-border caret-transparent mb-6">
              <button
                type="button"
                onClick={() => handleAnchorClick("about")}
                className="text-white font-medium bg-transparent border-0 text-left px-6 py-0 w-full cursor-pointer"
              >
                About Us
              </button>
            </li>
            <li className="box-border caret-transparent mb-6">
              <button
                type="button"
                onClick={() => handleAnchorClick("testimonials")}
                className="text-white font-medium bg-transparent border-0 text-left px-6 py-0 w-full cursor-pointer"
              >
                Testimonials
              </button>
            </li>
            <li className="box-border caret-transparent mb-6">
              <button
                type="button"
                onClick={() => handleAnchorClick("faq")}
                className="text-white font-medium bg-transparent border-0 text-left px-6 py-0 w-full cursor-pointer"
              >
                FAQ
              </button>
            </li>
            <li className="box-border caret-transparent mb-6">
              <button
                type="button"
                onClick={() => handleAnchorClick("contact")}
                className="text-white font-medium bg-transparent border-0 text-left px-6 py-0 w-full cursor-pointer"
              >
                Contact
              </button>
            </li>
            <li className="box-border caret-transparent mb-2">
              <a
                href="tel:6025550100"
                className="text-lime-300 font-bold px-6 text-lg"
                onClick={closeAll}
              >
                (602) 555-0100
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
