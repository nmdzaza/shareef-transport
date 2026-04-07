import React from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

export default function NotFoundPage() {
  return (
    <div className="text-neutral-800 text-base font-normal bg-white font-montserrat">
      <Header />
      <main
        role="main"
        className="box-border caret-transparent mt-[75px] md:mt-40"
      >
        <section className="box-border caret-transparent py-[70px] md:py-[120px]">
          <div className="box-border caret-transparent max-w-[1200px] text-center w-full mx-auto px-[15px] flex flex-col items-center">
            <h1 className="text-slate-900 text-2xl font-semibold box-border caret-transparent leading-[28.8px] mb-4 md:text-[44px] md:leading-[52.8px]">
              Page Not Found
            </h1>
            <p className="text-slate-400 text-base box-border caret-transparent leading-6 mb-8 md:text-xl md:leading-[30px]">
              The page you're looking for doesn't exist or has moved.
            </p>
            <a
              href="#/"
              className="inline-block bg-slate-900 text-white font-semibold px-8 py-3 rounded hover:bg-slate-700 transition-colors duration-200"
            >
              Back to Home
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
