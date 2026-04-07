import React from "react";
import { Star, ArrowRight } from "lucide-react";
import { testimonials } from "../../data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="bg-slate-100 box-border caret-transparent py-10">
      <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
        <div className="box-border caret-transparent flex flex-wrap -mx-3">
          <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] w-full px-3">
            <div className="box-border caret-transparent text-center mb-12">
              <h2 className="text-blue-950 text-[29px] font-semibold box-border caret-transparent leading-[42px] mb-2">
                A dependable car shipping company
              </h2>
            </div>
          </div>
        </div>
        <div className="relative box-border caret-transparent list-none z-[1] overflow-clip mx-auto pt-5 pb-[50px] px-2.5 md:pb-5 md:px-10">
          <div className="relative caret-transparent flex h-full translate-x-[-1083px] w-full z-[1] md:translate-x-[-710.667px]">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative box-border caret-transparent shrink-0 min-h-[auto] min-w-[auto] w-[331px] mr-[30px] md:w-[325.333px]"
              >
                <div className="bg-white box-border caret-transparent h-full pt-10 pb-5 px-8">
                  <div className="items-start box-border caret-transparent flex h-[70px] mb-4">
                    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] mr-4">
                      <img
                        src={import.meta.env.BASE_URL + "quote.svg"}
                        alt="quote-icon"
                        className="box-border caret-transparent inline max-w-full"
                      />
                    </div>
                    <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                      <span className="text-blue-900 text-[22px] font-bold box-border caret-transparent leading-[33px]">
                        {testimonial.title}
                      </span>
                    </div>
                  </div>
                  <div className="box-border caret-transparent h-auto overflow-hidden mb-10 md:h-40 md:overflow-auto">
                    <p className="text-sm box-border caret-transparent leading-[21px]">
                      {testimonial.content}
                    </p>
                  </div>
                  <div className="box-border caret-transparent flex justify-between">
                    <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                      <p className="text-sm box-border caret-transparent leading-[21px]">
                        <b className="font-bold box-border caret-transparent">
                          Rated: {testimonial.rating}
                        </b>
                      </p>
                      <p className="text-sm box-border caret-transparent leading-[21px]">
                        {testimonial.author}
                      </p>
                    </div>
                    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] text-right">
                      <div className="text-yellow-400 box-border caret-transparent flex justify-end mt-2 mb-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      </div>
                      <div className="box-border caret-transparent">
                        <span className="text-xs text-neutral-400 font-medium">
                          {testimonial.logoAlt === "google-logo" ? "Google" : testimonial.logoAlt}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute text-blue-600 items-center bg-indigo-50 box-border caret-transparent flex h-8 justify-center left-[calc(50%_-_40px)] mt-[-22px] w-8 z-10 rounded-[50%] top-auto bottom-2 md:h-9 md:w-9 md:left-0.5 md:top-2/4 md:bottom-auto after:accent-auto after:box-border after:caret-transparent after:text-blue-950 after:block after:text-sm after:not-italic after:normal-nums after:font-bold after:tracking-[normal] after:leading-[14px] after:list-outside after:list-none after:min-h-[auto] after:min-w-[auto] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-swiper_icons"></div>
          <div className="absolute text-blue-600 items-center bg-indigo-50 box-border caret-transparent flex h-8 justify-center mt-[-22px] right-[calc(50%_-_40px)] w-8 z-10 rounded-[50%] top-auto bottom-2 md:h-9 md:w-9 md:right-0.5 md:top-2/4 md:bottom-auto after:accent-auto after:box-border after:caret-transparent after:text-blue-950 after:block after:text-sm after:not-italic after:normal-nums after:font-bold after:tracking-[normal] after:leading-[14px] after:list-outside after:list-none after:min-h-[auto] after:min-w-[auto] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-swiper_icons"></div>
        </div>
        <div className="box-border caret-transparent flex flex-wrap -mx-3">
          <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] w-full px-3">
            <div className="box-border caret-transparent mt-12">
              <a
                href="#testimonials"
                title="go reviews page"
                className="text-blue-500 text-[16.4683px] font-bold items-center box-border caret-transparent flex justify-center leading-[27px]"
              >
                Read More Reviews
                <ArrowRight className="box-border caret-transparent h-4 w-4 ml-2.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
