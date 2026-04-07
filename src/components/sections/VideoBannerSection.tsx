import React from "react";

export function VideoBannerSection() {
  return (
    <section className="relative box-border caret-transparent">
      <a
        title="Play Video"
        href="https://www.youtube.com/watch?v=ZGyusnyCK7U"
        className="text-blue-600 box-border caret-transparent"
      >
        <img
          alt="video banner"
          className="box-border caret-transparent inline min-h-[250px] object-cover w-full md:min-h-0 md:object-fill"
        />
        <img
          alt="video play"
          className="absolute box-border caret-transparent h-[100px] left-[calc(50%_-_50px)] max-w-full top-[calc(50%_-_50px)] w-[100px] md:h-auto md:left-[calc(50%_-_80px)] md:top-[calc(50%_-_80px)] md:w-auto"
        />
      </a>
    </section>
  );
}
