import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import {
  desktopTopLinks,
  transportOptions,
  whoWeServeOptions,
} from "../../data/navigation";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function DesktopNav() {
  const navigate = useNavigate();

  const handleTopLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#/")) return; // Route link — let it navigate normally
    e.preventDefault();
    const sectionId = href.replace(/^#/, "");
    const hash = window.location.hash;
    const onSubRoute = hash.startsWith("#/") && hash.length > 2;
    if (onSubRoute) {
      navigate("/");
      setTimeout(() => scrollTo(sectionId), 200);
    } else {
      scrollTo(sectionId);
    }
  };

  return (
    <>
      {/* Top utility bar */}
      <nav className="fixed bg-sky-950 box-border caret-transparent hidden flex-wrap list-none w-full z-[30] pt-[18px] pb-2.5 top-0 inset-x-0 md:block">
        <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
          <div className="items-center box-border caret-transparent flex flex-wrap -mx-3">
            <div className="items-center box-border caret-transparent flex basis-[70%] justify-between max-w-[70%] min-h-0 min-w-0 w-full ml-auto px-3 md:min-h-[auto] md:min-w-[auto]">
              {desktopTopLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  title={item.title}
                  className="text-slate-400 text-sm font-semibold box-border caret-transparent block leading-[21px] min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]"
                  onClick={(e) => handleTopLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:6025550100"
                className="text-white font-bold items-center box-border caret-transparent flex min-h-0 min-w-0 px-2 py-1 md:min-h-[auto] md:min-w-[auto]"
              >
                <Phone className="h-4 w-4 mr-2" />
                (602) 555-0100
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main nav bar */}
      <nav className="fixed bg-sky-900 box-border caret-transparent hidden flex-wrap list-none w-full z-[29] top-[52px] inset-x-0 md:block">
        <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
          <div className="items-center box-border caret-transparent flex justify-between">
            <li className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              <Link
                to="/"
                className="text-white text-[13px] font-semibold box-border caret-transparent leading-[19.5px] md:text-base md:leading-6"
              >
                <img
                  src={import.meta.env.BASE_URL + "logo-white.svg"}
                  alt="Shareef Transport logo"
                  className="text-[13px] box-border caret-transparent leading-[19.5px] pb-2 md:text-base md:leading-6"
                />
              </Link>
            </li>
            <li className="box-border caret-transparent min-h-0 min-w-0 py-2.5 md:min-h-[auto] md:min-w-[auto]">
              <button
                type="button"
                onClick={() => scrollTo("home")}
                className="text-white text-[13px] font-semibold bg-transparent border-0 cursor-pointer leading-[19.5px] px-4 py-2 md:text-base md:leading-6"
              >
                Home
              </button>
            </li>
            <li className="box-border caret-transparent min-h-0 min-w-0 py-2.5 md:min-h-[auto] md:min-w-[auto]">
              <button
                type="button"
                onClick={() => scrollTo("quote")}
                className="text-white text-[13px] font-semibold bg-transparent border-0 cursor-pointer leading-[19.5px] px-4 py-2 md:text-base md:leading-6"
              >
                Get a Quote
              </button>
            </li>
            <li className="box-border caret-transparent min-h-0 min-w-0 py-2.5 md:min-h-[auto] md:min-w-[auto]">
              <button
                type="button"
                onClick={() => scrollTo("services")}
                className="text-white text-[13px] font-semibold bg-transparent border-0 cursor-pointer leading-[19.5px] px-4 py-2 md:text-base md:leading-6"
              >
                Services
              </button>
            </li>
            <li className="box-border caret-transparent min-h-0 min-w-0 py-2.5 md:min-h-[auto] md:min-w-[auto]">
              <button
                type="button"
                onClick={() => scrollTo("about")}
                className="text-white text-[13px] font-semibold bg-transparent border-0 cursor-pointer leading-[19.5px] px-4 py-2 md:text-base md:leading-6"
              >
                About Us
              </button>
            </li>
            <li className="box-border caret-transparent min-h-0 min-w-0 py-2.5 md:min-h-[auto] md:min-w-[auto]">
              <button
                type="button"
                onClick={() => scrollTo("testimonials")}
                className="text-white text-[13px] font-semibold bg-transparent border-0 cursor-pointer leading-[19.5px] px-4 py-2 md:text-base md:leading-6"
              >
                Testimonials
              </button>
            </li>
            <li className="box-border caret-transparent min-h-0 min-w-0 py-2.5 md:min-h-[auto] md:min-w-[auto]">
              <button
                type="button"
                onClick={() => scrollTo("faq")}
                className="text-white text-[13px] font-semibold bg-transparent border-0 cursor-pointer leading-[19.5px] px-4 py-2 md:text-base md:leading-6"
              >
                FAQ
              </button>
            </li>
            <li className="box-border caret-transparent min-h-0 min-w-0 py-2.5 md:min-h-[auto] md:min-w-[auto]">
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="text-lime-300 text-[13px] font-semibold items-center bg-transparent border-0 cursor-pointer inline-flex leading-[19.5px] md:text-base md:leading-6"
              >
                <span className="text-[13px] box-border caret-transparent block leading-[19.5px] min-h-0 min-w-0 md:text-base md:leading-6 md:min-h-[auto] md:min-w-[auto]">
                  Contact
                </span>
                <ArrowRight className="h-4 w-4 ml-2.5" />
              </button>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}
