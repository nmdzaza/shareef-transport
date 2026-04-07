import React from "react";

export function LoadingOverlay() {
  return (
    <div className="fixed bg-white/100 box-border caret-transparent hidden h-full w-full z-[999]">
      <h2 className="text-indigo-900 text-3xl font-semibold box-border caret-transparent leading-[42px] mb-2 pb-2"></h2>
      <div className="box-border caret-transparent">
        <div
          role="status"
          className="border-b-neutral-800 border-l-neutral-800 border-t-neutral-800 box-border caret-transparent inline-block shrink-0 h-8 text-center w-8 rounded-[50%] border-r-transparent border-4 border-solid"
        ></div>
      </div>
    </div>
  );
}
