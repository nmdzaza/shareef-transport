import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
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
            {faqItems.map((item) => {
              const isOpen = openItems.has(item.id);
              return (
                <div
                  key={item.id}
                  className="relative bg-white border-b-zinc-200 border-l-neutral-800 border-r-neutral-800 border-t-neutral-800 box-border caret-transparent flex flex-col break-words border-b"
                >
                  <div className="border-b-zinc-200 border-l-neutral-800 border-r-neutral-800 border-t-neutral-800 box-border caret-transparent min-h-[auto] min-w-[auto] break-words border-b">
                    <button
                      type="button"
                      className="text-blue-950 text-base font-semibold items-center bg-transparent caret-transparent flex leading-[23px] break-words text-left align-middle w-full border p-5 rounded-md border-transparent md:text-xl"
                      onClick={() => toggleItem(item.id)}
                    >
                      <span className="flex-shrink-0 mr-3 text-blue-950">
                        {isOpen ? (
                          <Minus className="h-5 w-5" />
                        ) : (
                          <Plus className="h-5 w-5" />
                        )}
                      </span>
                      {item.question}
                    </button>
                  </div>
                  <div
                    className={
                      isOpen
                        ? "box-border caret-transparent min-h-[auto] min-w-[auto] break-words transition-all duration-300"
                        : "box-border caret-transparent hidden break-words"
                    }
                  >
                    <div
                      className="text-neutral-600 font-medium box-border caret-transparent grow leading-[23px] break-words p-5 md:pl-[70px] md:pr-4 md:pb-10"
                      dangerouslySetInnerHTML={{ __html: item.answerHtml }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
