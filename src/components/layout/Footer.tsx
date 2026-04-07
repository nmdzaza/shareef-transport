import React from "react";
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import {
  quickLinks,
  whoWeServeLinks,
  transportOptionLinks,
  socialLinks,
} from "../../data/footerLinks";

const socialIconMap: Record<string, React.ReactNode> = {
  facebook: <Facebook className="h-5 w-5" />,
  instagram: <Instagram className="h-5 w-5" />,
  twitter: <Twitter className="h-5 w-5" />,
  youtube: <Youtube className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
};

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
              <img
                src="/shareef-transport-logo.svg"
                alt="Shareef Transport logo"
                className="box-border caret-transparent inline max-w-full"
              />
            </div>
            <div className="box-border caret-transparent gap-x-[30px] flex flex-col justify-between min-h-[auto] min-w-[auto] gap-y-[30px] md:gap-x-[50px] md:flex-row md:gap-y-[normal]">
              <div className="items-center box-border caret-transparent flex flex-col justify-between min-h-[auto] min-w-[auto] w-36">
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                  <img
                    src="/google.svg"
                    alt="google logo"
                    className="box-border caret-transparent inline h-[30px] max-w-full"
                  />
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
                  <img
                    src="/trustpilot.svg"
                    alt="trustpilot logo"
                    className="box-border caret-transparent inline h-[30px] max-w-full"
                  />
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
                  <img
                    src="/bbb.svg"
                    alt="bbb logo"
                    className="box-border caret-transparent inline h-[30px] max-w-full"
                  />
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
                  {quickLinks.map((link) => (
                    <li key={link.id} className="box-border caret-transparent">
                      <a
                        href={link.href}
                        title={link.title}
                        className="text-neutral-200 text-[15px] box-border caret-transparent leading-[31px]"
                      >
                        {link.label}
                      </a>
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
                  {whoWeServeLinks.map((link) => (
                    <li key={link.id} className="box-border caret-transparent">
                      <a
                        href={link.href}
                        title={link.title}
                        className="text-neutral-200 text-[15px] box-border caret-transparent leading-[31px]"
                      >
                        {link.label}
                      </a>
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
                  {transportOptionLinks.map((link) => (
                    <li key={link.id} className="box-border caret-transparent">
                      <a
                        href={link.href}
                        title={link.title}
                        className="text-neutral-200 text-[15px] box-border caret-transparent leading-[31px]"
                      >
                        {link.label}
                      </a>
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
                  <img
                    src="/fmcsa-logo-f.svg"
                    alt="fmcsa-logo"
                    className="box-border caret-transparent inline max-w-[220px]"
                  />
                  <p className="text-neutral-200 box-border caret-transparent mt-4">
                    Federal Motor Carrier Safety Administration MC #: 933173
                  </p>
                  <p className="text-neutral-200 box-border caret-transparent mb-4">
                    U.S.DOT #: 2801954
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
                  <a
                    href="/terms-and-conditions/"
                    title="Terms & Conditions"
                    className="text-white text-[15px] box-border caret-transparent leading-5 text-center mb-3 md:text-right"
                  >
                    Terms & Conditions
                  </a>
                  <a
                    href="/privacy-policy/"
                    title="Privacy Policy"
                    className="text-white text-[15px] box-border caret-transparent leading-5 text-center ml-4 mb-3 md:text-right"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
