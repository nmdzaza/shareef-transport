import React from "react";
import { Play } from "lucide-react";

const videos = [
  {
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=640&q=80",
    title: "How Shareef Transport Works",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=640&q=80",
    title: "Open Car Transport Explained",
  },
  {
    src: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=640&q=80",
    title: "Why Choose Enclosed Transport?",
  },
];

export function VideoSection() {
  const handlePlay = (title: string) => {
    alert("Video coming soon!");
  };

  return (
    <section className="bg-slate-100 box-border caret-transparent py-[30px] md:py-[50px]">
      <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
        <div className="box-border caret-transparent gap-x-3.5 flex justify-center gap-y-3.5 md:gap-x-6 md:gap-y-6">
          {videos.map((video) => (
            <button
              key={video.title}
              onClick={() => handlePlay(video.title)}
              title={video.title}
              className="text-blue-600 shadow-[rgba(0,0,0,0.1)_0px_4px_20px_0px] box-border caret-transparent block min-h-[auto] min-w-[auto] w-[calc(50%_-_7px)] overflow-hidden rounded-xl md:w-[260px] p-0 border-0 bg-transparent cursor-pointer"
            >
              <div className="relative aspect-[9_/_16] bg-blue-950 box-border caret-transparent w-full">
                <img
                  alt={video.title}
                  src={video.src}
                  className="box-border caret-transparent inline h-full object-cover w-full"
                />
                <div className="absolute items-center bg-blue-950/80 box-border caret-transparent flex h-11 justify-center translate-x-[-50.0%] translate-y-[-50.0%] w-11 rounded-[50%] left-2/4 top-2/4 md:h-14 md:w-14">
                  <Play className="text-white h-5 w-5 ml-0.5 md:h-6 md:w-6 fill-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-blue-950/70 px-2 py-1.5 text-white text-xs font-semibold text-center">
                  {video.title}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
