import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import { socialLinks } from "../../data/footerLinks";

const socialIconMap: Record<string, React.ReactNode> = {
  facebook: <Facebook className="h-5 w-5" />,
  instagram: <Instagram className="h-5 w-5" />,
  twitter: <Twitter className="h-5 w-5" />,
  youtube: <Youtube className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
};

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const comingSoon = () => alert("Coming Soon!");

const linkBtnClass =
  "text-neutral-200 text-[15px] box-border caret-transparent leading-[31px] bg-transparent border-none p-0 cursor-pointer text-left hover:text-amber-400 transition-colors";

const linkAnchorClass =
  "text-neutral-200 text-[15px] box-border caret-transparent leading-[31px] cursor-pointer hover:text-amber-400 transition-colors";

const quickLinkItems = [
  { label: "Car Shipping Calculator", action: () => scrollTo("quote") },
  { label: "Moving Cost Calculator", action: () => scrollTo("quote") },
  { label: "Car Value Calculator", action: () => scrollTo("quote") },
  { label: "How it works", action: () => scrollTo("how-it-works") },
  { label: "About Us", action: () => scrollTo("about") },
  { label: "Contact", action: () => scrollTo("contact") },
  { label: "Blog", routeTo: "/blog" },
  { label: "Team", action: () => scrollTo("about") },
  { label: "Press", action: comingSoon },
  { label: "Sitemap", action: comingSoon },
  { label: "Help", action: () => scrollTo("faq") },
];

const whoWeServeItems: { label: string; action: () => void }[] = [
  { label: "Auto Auctions", action: () => scrollTo("quote") },
  { label: "Online Car Sellers", action: () => scrollTo("quote") },
  { label: "Best Car Dealerships", action: () => scrollTo("contact") },
  { label: "Military Members", action: () => scrollTo("quote") },
  { label: "Car Relocation Services", action: () => scrollTo("quote") },
];

type TransportItem =
  | { label: string; action: () => void; routeTo?: never }
  | { label: string; routeTo: string; action?: never };

const transportOptionItems: TransportItem[] = [
  { label: "Door-to-Door Car Shipping", action: () => scrollTo("services") },
  { label: "Open Car Hauler", routeTo: "/open-auto-transport" },
  { label: "Enclosed Car Hauler", routeTo: "/enclosed-auto-transport" },
  { label: "Expedited Car Shipping", action: () => scrollTo("quote") },
  { label: "Cross Country Car Shipping", action: () => scrollTo("quote") },
  { label: "Ship Car to Another State", action: () => scrollTo("quote") },
  { label: "Classic Car Shipping", routeTo: "/enclosed-auto-transport" },
];

export function Footer() {
  return (
    <>
      <section className="box-border caret-transparent w-full mt-[90px] mx-auto px-3">
        <div className="box-border caret-transparent flex flex-wrap -mx-3">
          <div className="items-stretch box-border caret-transparent flex shrink-0 max-w-full min-h-[auto] min-w-[auto] w-full mt-10 md:mt-0">
            <a
              title="See Image"
              href="#"
              className="relative text-blue-600 box-border caret-transparent hidden grayscale-[0.6] grow-[2] h-[300px] min-h-0 min-w-0 overflow-hidden md:block md:min-h-[auto] md:min-w-[auto] before:accent-auto before:bg-[linear-gradient(rgb(250,251,252)_0px,rgba(0,212,251,0)_81%)] before:box-border before:caret-transparent before:text-blue-600 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[225px] before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-[1] before:border-separate before:font-montserrat"
            >
              <div className="relative bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80')] bg-no-repeat bg-cover box-border caret-transparent h-full bg-center"></div>
            </a>
            <a
              title="See Image"
              href="#"
              className="relative text-blue-600 box-border caret-transparent block grayscale-[0.6] grow-[2] h-[300px] min-h-[auto] min-w-[auto] overflow-hidden before:accent-auto before:bg-[linear-gradient(rgb(250,251,252)_0px,rgba(0,212,251,0)_81%)] before:box-border before:caret-transparent before:text-blue-600 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[225px] before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-[1] before:border-separate before:font-montserrat"
            >
              <div className="relative bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80')] bg-no-repeat bg-cover box-border caret-transparent h-full bg-center"></div>
            </a>
            <a
              title="See Image"
              href="#"
              className="relative text-blue-600 box-border caret-transparent hidden grayscale-[0.6] grow-[2] h-[300px] min-h-0 min-w-0 overflow-hidden md:block md:min-h-[auto] md:min-w-[auto] before:accent-auto before:bg-[linear-gradient(rgb(250,251,252)_0px,rgba(0,212,251,0)_81%)] before:box-border before:caret-transparent before:text-blue-600 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[225px] before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-[1] before:border-separate before:font-montserrat"
            >
              <div className="relative bg-[url('https://images.unsplash.com/photo-1549924231-f129b911e442?w=800&q=80')] bg-no-repeat bg-cover box-border caret-transparent h-full bg-center"></div>
            </a>
            <a
              title="See Image"
              href="#"
              className="relative text-blue-600 box-border caret-transparent block grayscale-[0.6] grow-[2] h-[300px] min-h-[auto] min-w-[auto] overflow-hidden before:accent-auto before:bg-[linear-gradient(rgb(250,251,252)_0px,rgba(0,212,251,0)_81%)] before:box-border before:caret-transparent before:text-blue-600 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[225px] before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-[1] before:border-separate before:font-montserrat"
            >
              <div className="relative bg-[url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80')] bg-no-repeat bg-cover box-border caret-transparent h-full bg-center"></div>
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-blue-950 box-border caret-transparent pt-5">
        <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
          <div className="items-center border-l-neutral-800 border-r-neutral-800 border-t-neutral-800 box-border caret-transparent gap-x-10 flex flex-col justify-between gap-y-10 py-3 border-b-white border-b md:gap-x-[normal] md:flex-row md:gap-y-[normal] md:py-6">
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
              <div className="flex items-center gap-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="8" fill="#F59E0B"/>
                  <path d="M5 25 L15 25 L15 20 L25 20 L30 15 L35 25 L35 27 L5 27 Z" fill="#0F172A"/>
                  <circle cx="12" cy="27" r="3" fill="#0F172A"/>
                  <circle cx="30" cy="27" r="3" fill="#0F172A"/>
                </svg>
                <span className="text-white font-bold text-xl">Shareef Transport</span>
              </div>
            </div>
            <div className="box-border caret-transparent gap-x-[30px] flex flex-col justify-between min-h-[auto] min-w-[auto] gap-y-[30px] md:gap-x-[50px] md:flex-row md:gap-y-[normal]">
              <div className="items-center box-border caret-transparent flex flex-col justify-between min-h-[auto] min-w-[auto] w-36">
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                  <div className="flex items-center gap-1 h-[30px]">
                    <span className="font-bold" style={{color:'#4285F4'}}>G</span>
                    <span className="font-bold" style={{color:'#EA4335'}}>o</span>
                    <span className="font-bold" style={{color:'#FBBC05'}}>o</span>
                    <span className="font-bold" style={{color:'#4285F4'}}>g</span>
                    <span className="font-bold" style={{color:'#34A853'}}>l</span>
                    <span className="font-bold" style={{color:'#EA4335'}}>e</span>
                  </div>
                </div>
                <div className="box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] w-full mt-2 md:mt-0.5">
                  <p className="relative text-white text-[15px] font-bold box-border caret-transparent leading-[22.5px] min-h-[auto] min-w-[auto]">
                    (4.3)
                  </p>
                  <p className="relative text-white text-[15px] box-border caret-transparent leading-[22.5px] min-h-[auto] min-w-[auto]">
                    6,150 Review
                  </p>
                </div>
              </div>
              <div className="items-center box-border caret-transparent flex flex-col justify-between min-h-[auto] min-w-[auto] w-36">
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                  <div className="h-[30px] flex items-center">
                    <span className="text-green-500 font-bold text-lg">★ Trustpilot</span>
                  </div>
                </div>
                <div className="box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] w-full mt-2 md:mt-0.5">
                  <p className="relative text-white text-[15px] font-bold box-border caret-transparent leading-[22.5px] min-h-[auto] min-w-[auto]">
                    (4.6)
                  </p>
                  <p className="relative text-white text-[15px] box-border caret-transparent leading-[22.5px] min-h-[auto] min-w-[auto]">
                    2,005 Reviews
                  </p>
                </div>
              </div>
              <div className="items-center box-border caret-transparent flex flex-col justify-between min-h-[auto] min-w-[auto] w-36">
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                  <div className="h-[30px] flex items-center">
                    <span className="text-blue-700 font-bold">BBB A+</span>
                  </div>
                </div>
                <div className="box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] w-full mt-2 md:mt-0.5">
                  <p className="relative text-white text-[15px] font-bold box-border caret-transparent leading-[22.5px] min-h-[auto] min-w-[auto]">
                    (A+)
                  </p>
                  <p className="relative text-white text-[15px] box-border caret-transparent leading-[22.5px] min-h-[auto] min-w-[auto]">
                    Rated by BBB
                  </p>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent flex min-h-[auto] min-w-[auto] mt-5 md:mt-0">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  title={social.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={social.className}
                >
                  {socialIconMap[social.id] ?? (
                    <img
                      src={social.iconSrc}
                      alt={social.alt}
                      className="box-border caret-transparent inline h-5 w-5"
                    />
                  )}
                </a>
              ))}
            </div>
          </div>
          <div className="border-l-neutral-800 border-r-neutral-800 border-t-neutral-800 box-border caret-transparent py-6 border-b-white border-b">
            <div className="box-border caret-transparent flex flex-wrap -mx-3">
              <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] w-full px-3 md:w-3/12">
                <div className="box-border caret-transparent mb-3">
                  <span className="text-white text-[17px] font-bold box-border caret-transparent leading-[26px]">
                    QUICK LINKS
                  </span>
                </div>
                <ul className="box-border caret-transparent list-none mb-4 pl-0">
                  {quickLinkItems.map((link) => (
                    <li key={link.label} className="box-border caret-transparent">
                      {link.routeTo ? (
                        <Link to={link.routeTo} className={linkAnchorClass}>
                          {link.label}
                        </Link>
                      ) : (
                        <button onClick={link.action} className={linkBtnClass}>
                          {link.label}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] w-full px-3 md:w-3/12">
                <div className="box-border caret-transparent mb-3">
                  <span className="text-white text-[17px] font-bold box-border caret-transparent leading-[26px]">
                    WHO WE SERVE
                  </span>
                </div>
                <ul className="box-border caret-transparent list-none mb-4 pl-0">
                  {whoWeServeItems.map((item) => (
                    <li key={item.label} className="box-border caret-transparent">
                      <button onClick={item.action} className={linkBtnClass}>
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] w-full px-3 md:w-3/12">
                <div className="box-border caret-transparent mb-3">
                  <span className="text-white text-[17px] font-bold box-border caret-transparent leading-[26px]">
                    TRANSPORT OPTIONS
                  </span>
                </div>
                <ul className="box-border caret-transparent list-none mb-4 pl-0">
                  {transportOptionItems.map((item) => (
                    <li key={item.label} className="box-border caret-transparent">
                      {item.routeTo ? (
                        <Link to={item.routeTo} className={linkAnchorClass}>
                          {item.label}
                        </Link>
                      ) : (
                        <button onClick={item.action} className={linkBtnClass}>
                          {item.label}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] w-full px-3 md:w-3/12">
                <div className="box-border caret-transparent mb-3">
                  <span className="text-white text-[17px] font-bold box-border caret-transparent leading-[26px]">
                    SHAREEF TRANSPORT
                  </span>
                </div>
                <div className="box-border caret-transparent">
                  <a
                    href="tel://6025550100"
                    className="text-white text-[15px] box-border caret-transparent block leading-5 mb-3"
                  >
                    (602) 555-0100
                  </a>
                  <a
                    href="mailto:shareeftransport@gmail.com"
                    className="text-white text-[15px] box-border caret-transparent block leading-5 mb-3"
                  >
                    shareeftransport@gmail.com
                  </a>
                </div>
                <div className="box-border caret-transparent mt-6">
                  <span className="text-white text-xs border border-white px-2 py-1 rounded">FMCSA Licensed</span>
                  <p className="text-neutral-200 box-border caret-transparent mt-4">
                    Federal Motor Carrier Safety Administration MC #: [PENDING]
                  </p>
                  <p className="text-neutral-200 box-border caret-transparent mb-4">
                    U.S.DOT #: [PENDING] <span className="text-neutral-400 text-xs">(Apply at FMCSA.dot.gov)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent py-6">
            <div className="box-border caret-transparent flex flex-wrap -mx-3">
              <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] text-center w-full px-3 md:text-left md:w-6/12">
                <p className="text-white text-[17px] font-semibold box-border caret-transparent leading-[26px] text-center md:text-left">
                  Shareef Transport 2026. All Rights Reserved
                </p>
              </div>
              <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] text-center w-full px-3 md:text-right md:w-6/12">
                <div className="box-border caret-transparent text-center mt-6 md:text-right md:mt-0">
                  <Link
                    to="/terms-and-conditions"
                    title="Terms & Conditions"
                    className="text-white text-[15px] box-border caret-transparent leading-5 text-center mb-3 md:text-right hover:underline"
                  >
                    Terms & Conditions
                  </Link>
                  <Link
                    to="/privacy-policy"
                    title="Privacy Policy"
                    className="text-white text-[15px] box-border caret-transparent leading-5 text-center ml-4 mb-3 md:text-right hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
