import React, { useState } from "react";
import { Phone } from "lucide-react";

const GOOGLE_KEY = "AIzaSyDTVl6vyXTcFYVAFWjClxCC3PG1nKYthXQ";

type VehicleType = "Sedan" | "SUV" | "Truck/Pickup" | "Van" | "Motorcycle" | "Oversized";
type TransportType = "open" | "enclosed";

const VEHICLE_TYPES: VehicleType[] = ["Sedan", "SUV", "Truck/Pickup", "Van", "Motorcycle", "Oversized"];

const VEHICLE_SURCHARGES: Record<VehicleType, number> = {
  Sedan: 0,
  SUV: 50,
  "Truck/Pickup": 75,
  Van: 50,
  Motorcycle: -100,
  Oversized: 200,
};

function calcPriceRange(
  distanceMiles: number,
  enclosed: boolean,
  vehicle: VehicleType
): { low: number; high: number } {
  let rateMin: number;
  let rateMax: number;

  if (distanceMiles < 500) {
    rateMin = 1.0;
    rateMax = 1.5;
  } else if (distanceMiles <= 1500) {
    rateMin = 0.75;
    rateMax = 1.2;
  } else {
    rateMin = 0.6;
    rateMax = 0.9;
  }

  const surcharge = VEHICLE_SURCHARGES[vehicle];
  const enclosedMultiplier = enclosed ? 1.4 : 1.0;
  const margin = 1.15;

  let low = distanceMiles * rateMin * enclosedMultiplier * margin + surcharge;
  let high = distanceMiles * rateMax * enclosedMultiplier * margin + surcharge;

  low = Math.max(250, Math.round(low));
  high = Math.max(250, Math.round(high));

  return { low, high };
}

async function getCityFromZip(zip: string): Promise<string> {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&components=country:US&region=us&key=${GOOGLE_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.status === "OK" && data.results.length > 0) {
    const components = data.results[0].address_components as Array<{ long_name: string; types: string[] }>;
    const city = components.find((c) => c.types.includes("locality"))?.long_name;
    const state = components.find((c) => c.types.includes("administrative_area_level_1"))?.long_name;
    if (city && state) return `${city}, ${state}`;
    if (state) return state;
  }
  return zip;
}

async function getRouteInfo(originZip: string, destZip: string): Promise<{ miles: number; hours: number } | null> {
  const res = await fetch("https://routes.googleapis.com/directions/v2:computeRoutes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": GOOGLE_KEY,
      "X-Goog-FieldMask": "routes.distanceMeters,routes.duration",
    },
    body: JSON.stringify({
      origin: { address: `${originZip}, USA` },
      destination: { address: `${destZip}, USA` },
      travelMode: "DRIVE",
    }),
  });
  const data = await res.json();
  if (!data.routes || data.routes.length === 0) return null;
  const meters = data.routes[0].distanceMeters;
  const durationStr: string = data.routes[0].duration ?? "0s";
  const seconds = parseInt(durationStr.replace("s", ""), 10);
  const miles = Math.round(meters * 0.000621371);
  const hours = Math.round((seconds / 3600) * 10) / 10;
  return { miles, hours };
}

interface QuoteResult {
  originLabel: string;
  destLabel: string;
  miles: number;
  hours: number;
  low: number;
  high: number;
  enclosed: boolean;
  vehicle: VehicleType;
}

export function HeroSection() {
  const [originZip, setOriginZip] = useState("");
  const [destZip, setDestZip] = useState("");
  const [vehicle, setVehicle] = useState<VehicleType>("Sedan");
  const [transport, setTransport] = useState<TransportType>("open");
  const [loading, setLoading] = useState(false);
  const [quoteResult, setQuoteResult] = useState<QuoteResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleZipInput = (val: string, setter: (v: string) => void) => {
    const numeric = val.replace(/\D/g, "").slice(0, 5);
    setter(numeric);
  };

  const handleGetQuote = async () => {
    if (originZip.length !== 5 || destZip.length !== 5) {
      setError("Please enter valid 5-digit ZIP codes for both origin and destination.");
      return;
    }

    setLoading(true);
    setQuoteResult(null);
    setError(null);

    try {
      const [routeInfo, originLabel, destLabel] = await Promise.all([
        getRouteInfo(originZip, destZip),
        getCityFromZip(originZip),
        getCityFromZip(destZip),
      ]);

      if (!routeInfo) {
        setError("Please check your ZIP codes and try again.");
        setLoading(false);
        return;
      }

      const { low, high } = calcPriceRange(routeInfo.miles, transport === "enclosed", vehicle);

      setQuoteResult({
        originLabel,
        destLabel,
        miles: routeInfo.miles,
        hours: routeInfo.hours,
        low,
        high,
        enclosed: transport === "enclosed",
        vehicle,
      });
    } catch {
      setError("Please check your ZIP codes and try again.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-sky-900 bg-no-repeat bg-cover box-border caret-transparent pt-20 pb-2.5 md:pt-[180px] md:pb-[60px]" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}hero-bg.jpg)` }}>
      <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
        <div className="box-border caret-transparent grid [grid-template-areas:'title''calc''phone-wrapper''socials''subtitle'] grid-cols-[1fr] grid-rows-[auto] justify-between gap-y-3 md:[grid-template-areas:'._calc''title_calc''subtitle_calc''phone-wrapper_calc''socials_calc''._calc'] md:grid-cols-[55%_42%] md:grid-rows-[1fr_auto_auto_auto_auto_1fr] md:gap-y-[normal]">

          {/* Left column: headline + description + phone */}
          <div className="box-border caret-transparent col-end-[title] col-start-[title] row-end-[title] row-start-[title] min-h-[auto] min-w-[auto] text-center mt-3 md:text-start md:mt-0">
            <h1 className="text-white text-2xl font-bold box-border caret-transparent leading-9 text-center mb-0 md:text-[44px] md:leading-[66px] md:text-start md:mb-5">
              Ship Your Vehicle Anywhere in the US
            </h1>
          </div>

          <div className="box-border caret-transparent col-end-[subtitle] col-start-[subtitle] row-end-[subtitle] row-start-[subtitle] min-h-[auto] min-w-[auto]">
            <span className="text-white text-[17px] box-border caret-transparent leading-[34px]">
              Trusted auto transport by Shareef Transport — FMCSA verified
              carriers, door-to-door service, no hidden fees. Get your instant
              quote and we'll handle the rest.
            </span>
          </div>

          <div className="box-border caret-transparent gap-x-3 flex flex-col-reverse col-end-[phone-wrapper] col-start-[phone-wrapper] row-end-[phone-wrapper] row-start-[phone-wrapper] justify-between min-h-[auto] min-w-[auto] gap-y-3 mt-4 md:gap-x-[normal] md:flex-row md:gap-y-[normal] md:mt-[30px]">
            <div className="text-white font-semibold box-border caret-transparent basis-[51%] leading-[19.2px] min-h-[auto] min-w-[auto] md:text-neutral-800 md:font-normal">
              <span className="text-white text-[13px] font-bold box-border caret-transparent leading-[15.6px]">
                Talk to a senior transport coordinator with 5+ years of hands-on
                shipping experience — call now for expert guidance.
              </span>
            </div>
            <div className="font-bold items-center box-border caret-transparent flex basis-[45%] justify-center min-h-[auto] min-w-[auto] border-lime-200 p-1 rounded-bl rounded-br rounded-tl rounded-tr border-[3px] border-solid md:font-normal">
              <a
                href="tel://6025550100"
                className="text-lime-200 text-xl font-bold items-center box-border caret-transparent flex justify-center leading-[30px] min-h-[auto] min-w-[auto] md:text-[28px] md:leading-[42px]"
              >
                <Phone className="h-6 w-6 mr-3 text-lime-200 flex-shrink-0" />
                <span className="text-xl box-border caret-transparent block leading-[30px] min-h-[auto] min-w-[auto] md:text-[28px] md:leading-[42px]">
                  (602) 555-0100
                </span>
              </a>
            </div>
          </div>

          {/* Right column: quote calculator card */}
          <div className="box-border caret-transparent col-end-[calc] col-start-[calc] row-end-[calc] row-start-[calc] min-h-[auto] min-w-[auto]">
            <div id="quote" className="relative bg-white shadow-[rgba(0,0,0,0.18)_0px_8px_32px_0px] box-border caret-transparent rounded-2xl overflow-hidden">

              {/* Card header */}
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-6 py-5">
                <h2 className="text-white text-lg font-bold leading-tight mb-0.5">
                  Get Your Instant Shipping Quote
                </h2>
                <p className="text-blue-200 text-sm font-medium">
                  Real-time pricing · No hidden fees · 48-hour rate lock
                </p>
              </div>

              <div className="px-5 pt-5 pb-0">

                {/* ZIP inputs */}
                <div className="mb-4">
                  <label className="block text-blue-950 text-xs font-bold uppercase tracking-wider mb-2">
                    Route
                  </label>
                  <div className="flex gap-x-3">
                    <div className="flex-1 relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 text-xs font-bold pointer-events-none">FROM</span>
                      <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        placeholder="00000"
                        maxLength={5}
                        value={originZip}
                        onChange={(e) => handleZipInput(e.target.value, setOriginZip)}
                        className="caret-auto text-blue-950 font-bold w-full border-2 border-zinc-200 focus:border-blue-500 focus:outline-none pl-12 pr-3 py-3.5 rounded-xl text-sm transition-colors"
                      />
                    </div>
                    <div className="flex items-center text-blue-300 font-bold text-lg">→</div>
                    <div className="flex-1 relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 text-xs font-bold pointer-events-none">TO</span>
                      <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        placeholder="00000"
                        maxLength={5}
                        value={destZip}
                        onChange={(e) => handleZipInput(e.target.value, setDestZip)}
                        className="caret-auto text-blue-950 font-bold w-full border-2 border-zinc-200 focus:border-blue-500 focus:outline-none pl-12 pr-3 py-3.5 rounded-xl text-sm transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Vehicle type buttons */}
                <div className="mb-4">
                  <label className="block text-blue-950 text-xs font-bold uppercase tracking-wider mb-2">
                    Vehicle Type
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {VEHICLE_TYPES.map((v) => (
                      <button
                        key={v}
                        type="button"
                        onClick={() => setVehicle(v)}
                        className={`py-2 px-1 rounded-lg text-xs font-semibold border-2 transition-all ${
                          vehicle === v
                            ? "border-blue-600 bg-blue-600 text-white shadow-sm"
                            : "border-zinc-200 bg-white text-blue-950 hover:border-blue-300"
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Transport type toggle */}
                <div className="mb-5">
                  <label className="block text-blue-950 text-xs font-bold uppercase tracking-wider mb-2">
                    Transport Type
                  </label>
                  <div className="flex rounded-xl border-2 border-zinc-200 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setTransport("open")}
                      className={`flex-1 py-3 text-sm font-semibold transition-all ${
                        transport === "open"
                          ? "bg-blue-600 text-white"
                          : "bg-white text-blue-950 hover:bg-slate-50"
                      }`}
                    >
                      Open Carrier
                      <span className="block text-xs font-normal opacity-80">Most popular</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setTransport("enclosed")}
                      className={`flex-1 py-3 text-sm font-semibold border-l-2 border-zinc-200 transition-all ${
                        transport === "enclosed"
                          ? "bg-blue-600 text-white"
                          : "bg-white text-blue-950 hover:bg-slate-50"
                      }`}
                    >
                      Enclosed Carrier
                      <span className="block text-xs font-normal opacity-80">+40% · premium</span>
                    </button>
                  </div>
                </div>

                {/* Error state */}
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 mb-4 flex items-start gap-x-2">
                    <span className="text-red-500 font-bold text-base leading-none mt-0.5">!</span>
                    <p className="text-red-700 text-sm font-medium">{error}</p>
                  </div>
                )}

                {/* Loading state */}
                {loading && (
                  <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-4 mb-4 flex items-center justify-center gap-x-3">
                    <svg className="animate-spin h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    <span className="text-blue-800 font-semibold text-sm">Calculating your route...</span>
                  </div>
                )}

                {/* Quote result */}
                {quoteResult && !loading && (
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl px-4 py-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-blue-950 font-bold text-sm">
                        {quoteResult.originLabel} → {quoteResult.destLabel}
                      </p>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${quoteResult.enclosed ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"}`}>
                        {quoteResult.enclosed ? "Enclosed" : "Open"}
                      </span>
                    </div>
                    <p className="text-neutral-500 text-xs mb-3">
                      {quoteResult.miles.toLocaleString()} miles · ~{quoteResult.hours} hour drive
                    </p>
                    <p className="text-amber-600 text-2xl font-extrabold tracking-tight mb-1">
                      ${quoteResult.low.toLocaleString()} – ${quoteResult.high.toLocaleString()}
                    </p>
                    <p className="text-neutral-400 text-xs mb-3">
                      This quote is valid for 48 hours
                    </p>
                    <a
                      href="tel://6025550100"
                      className="flex items-center justify-center gap-x-2 w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg text-sm transition-colors"
                    >
                      Book This Rate →
                    </a>
                  </div>
                )}
              </div>

              {/* Get My Quote button */}
              <div className="px-5 pb-5 pt-0">
                <button
                  type="button"
                  onClick={handleGetQuote}
                  disabled={loading}
                  className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl text-base tracking-wide transition-colors shadow-md hover:shadow-lg"
                >
                  {loading ? "Calculating..." : "Get My Quote"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
