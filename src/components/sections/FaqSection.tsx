import React, { useState } from "react";
import { faqItems } from "../../data/faq";

export function FaqSection() {
  const [openItems, setOpenItems] = useState<Set<string>>(
    new Set(["how-long"]),
  );

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section className="box-border caret-transparent py-[15px] md:py-20">
      <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
        <div className="box-border caret-transparent text-center mb-2.5 md:mb-10">
          <span className="text-blue-950 text-[29px] font-semibold box-border caret-transparent leading-[42px]">
            Your Car Shipping Questions Answered
          </span>
        </div>
        <div className="box-border caret-transparent flex justify-center">
          <div className="box-border caret-transparent basis-full min-h-[auto] min-w-[auto] md:basis-9/12">
            {faqItems.map((item, index) => (
              <div
                key={item.id}
                className="relative bg-white border-b-zinc-200 border-l-neutral-800 border-r-neutral-800 border-t-neutral-800 box-border caret-transparent flex flex-col break-words border-b"
              >
                <div className="border-b-zinc-200 border-l-neutral-800 border-r-neutral-800 border-t-neutral-800 box-border caret-transparent min-h-[auto] min-w-[auto] break-words border-b">
                  <button
                    type="button"
                    className="text-blue-950 text-base font-semibold items-center bg-transparent caret-transparent flex leading-[23px] break-words text-left align-middle w-full border p-5 rounded-md border-transparent md:text-xl before:accent-auto before:items-center before:box-border before:caret-transparent before:text-blue-950 before:flex before:text-xl before:not-italic before:normal-nums before:font-bold before:h-6 before:justify-center before:tracking-[normal] before:leading-[23px] before:list-outside before:list-disc before:min-h-[auto] before:min-w-6 before:break-words before:pointer-events-auto before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:mr-2.5 before:border-separate before:font-montserrat"
                    onClick={() => toggleItem(item.id)}
                  >
                    {item.question}
                  </button>
                </div>
                <div
                  className={
                    index === 0 && openItems.has(item.id)
                      ? "box-border caret-transparent min-h-[auto] min-w-[auto] break-words"
                      : "box-border caret-transparent hidden break-words"
                  }
                >
                  <div
                    className="text-neutral-600 font-medium box-border caret-transparent grow leading-[23px] break-words p-5 md:pl-[70px] md:pr-4 md:pb-10"
                    dangerouslySetInnerHTML={{ __html: item.answerHtml }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
