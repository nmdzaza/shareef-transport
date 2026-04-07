import React, { useState } from "react";

export function PhoneBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-amber-500 text-[#0F172A] text-sm font-semibold py-2.5 px-4 flex items-center justify-between gap-4">
      <div className="flex-1 text-center">
        <span>
          Call for instant quote:{" "}
          <a href="tel:+16025550100" className="underline font-bold hover:text-white transition-colors">
            (602) 555-0100
          </a>
          {" "}| Available 7 days a week
        </span>
      </div>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss banner"
        className="shrink-0 text-[#0F172A] hover:text-white transition-colors text-lg leading-none font-bold"
      >
        &times;
      </button>
    </div>
  );
}
