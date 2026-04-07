import React from "react";
import { Play } from "lucide-react";

export function VideoBannerSection() {
  const handleScrollToQuote = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const el = document.getElementById("quote");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative box-border caret-transparent">
      <div className="relative">
        <img
          alt="Shareef Transport vehicle shipping"
          src="/video-banner-bg.jpg"
          className="box-border caret-transparent inline min-h-[250px] object-cover w-full md:min-h-0 md:object-fill"
        />
        <div className="absolute inset-0 bg-blue-950/50 flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center justify-center bg-white/20 border-2 border-white rounded-full h-[80px] w-[80px] md:h-[120px] md:w-[120px] cursor-pointer hover:bg-white/30 transition-colors"
              onClick={() => alert("Video coming soon!")}
            >
              <Play className="text-white h-8 w-8 ml-1 md:h-12 md:w-12 fill-white" />
            </div>
            <p className="text-white text-lg md:text-2xl font-bold drop-shadow-lg">
              See How Shareef Transport Delivers
            </p>
          </div>
          <button
            onClick={handleScrollToQuote}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg text-base md:text-lg transition-colors shadow-lg"
          >
            Get a Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}
