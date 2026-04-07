import React, { useState } from "react";
import { vehicleSizes } from "../../data/vehicleSizes";

type ActiveTab = "calculate" | "track";

const GOOGLE_ROUTES_API_KEY = "AIzaSyDTVl6vyXTcFYVAFWjClxCC3PG1nKYthXQ";

const VEHICLE_SURCHARGES: Record<string, number> = {
  sedan: 0,
  suv: 50,
  truck: 75,
  pickup: 75,
  van: 50,
  motorcycle: -100,
  oversized: 200,
};

function getVehicleSurcharge(vehicleLabel: string): number {
  const lower = vehicleLabel.toLowerCase();
  if (lower.includes("motorcycle")) return VEHICLE_SURCHARGES.motorcycle;
  if (lower.includes("oversized") || lower.includes("heavy")) return VEHICLE_SURCHARGES.oversized;
  if (lower.includes("suv") || lower.includes("crossover")) return VEHICLE_SURCHARGES.suv;
  if (lower.includes("van") || lower.includes("minivan")) return VEHICLE_SURCHARGES.van;
  if (lower.includes("truck") || lower.includes("pickup")) return VEHICLE_SURCHARGES.truck;
  return VEHICLE_SURCHARGES.sedan;
}

function calcPriceRange(
  distanceMiles: number,
  enclosed: boolean,
  vehicleLabel: string
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

  const surcharge = getVehicleSurcharge(vehicleLabel);
  const enclosedMultiplier = enclosed ? 1.4 : 1.0;
  const margin = 1.15;

  let low = distanceMiles * rateMin * enclosedMultiplier * margin + surcharge;
  let high = distanceMiles * rateMax * enclosedMultiplier * margin + surcharge;

  low = Math.max(250, Math.round(low));
  high = Math.max(250, Math.round(high));

  return { low, high };
}

async function geocodeAddress(address: string): Promise<{ lat: number; lng: number } | null> {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${GOOGLE_ROUTES_API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.status === "OK" && data.results.length > 0) {
    return data.results[0].geometry.location;
  }
  return null;
}

async function getDistanceMiles(
  origin: { lat: number; lng: number },
  destination: { lat: number; lng: number }
): Promise<number | null> {
  const body = {
    origin: { location: { latLng: { latitude: origin.lat, longitude: origin.lng } } },
    destination: { location: { latLng: { latitude: destination.lat, longitude: destination.lng } } },
    travelMode: "DRIVE",
  };
  const res = await fetch(
    `https://routes.googleapis.com/directions/v2:computeRoutes?key=${GOOGLE_ROUTES_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-FieldMask": "routes.distanceMeters",
      },
      body: JSON.stringify(body),
    }
  );
  const data = await res.json();
  if (data.routes && data.routes.length > 0 && data.routes[0].distanceMeters) {
    return data.routes[0].distanceMeters / 1609.344;
  }
  return null;
}

interface QuoteResult {
  distanceMiles: number;
  low: number;
  high: number;
  enclosed: boolean;
}

const pickupDateOptions = [
  "As soon as possible",
  "Within 7 days",
  "On a particular date",
  "I don't know yet",
];

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("calculate");
  const [pickup, setPickup] = useState("");
  const [delivery, setDelivery] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [enclosed, setEnclosed] = useState(false);
  const [vehicleDropdownOpen, setVehicleDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [quoteResult, setQuoteResult] = useState<QuoteResult | null>(null);
  const [quoteError, setQuoteError] = useState<string | null>(null);

  const handleGetQuote = async () => {
    if (!pickup.trim() || !delivery.trim()) {
      setQuoteError("Please enter both pickup and delivery locations.");
      return;
    }
    setLoading(true);
    setQuoteResult(null);
    setQuoteError(null);

    try {
      const [originCoords, destCoords] = await Promise.all([
        geocodeAddress(pickup),
        geocodeAddress(delivery),
      ]);

      if (!originCoords || !destCoords) {
        setQuoteError("Could not find one or both locations. Please check the addresses.");
        setLoading(false);
        return;
      }

      const distanceMiles = await getDistanceMiles(originCoords, destCoords);

      if (!distanceMiles) {
        setQuoteError("Could not calculate route. Please try different locations.");
        setLoading(false);
        return;
      }

      const vehicleLabel = selectedVehicle || "Sedan";
      const { low, high } = calcPriceRange(distanceMiles, enclosed, vehicleLabel);

      setQuoteResult({
        distanceMiles: Math.round(distanceMiles),
        low,
        high,
        enclosed,
      });
    } catch {
      setQuoteError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-sky-900 bg-none bg-no-repeat bg-cover box-border caret-transparent pt-20 pb-2.5 md:bg-[url('https://c.animaapp.com/mnnx669pIjQjBB/assets/bg-2026.webp')] md:pt-[180px] md:pb-[60px]">
      <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
        <div className="box-border caret-transparent grid [grid-template-areas:'title''calc''phone-wrapper''socials''subtitle'] grid-cols-[1fr] grid-rows-[auto] justify-between gap-y-3 md:[grid-template-areas:'._calc''title_calc''subtitle_calc''phone-wrapper_calc''socials_calc''._calc'] md:grid-cols-[55%_42%] md:grid-rows-[1fr_auto_auto_auto_auto_1fr] md:gap-y-[normal]">
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
                <img
                  src="https://c.animaapp.com/mnnx669pIjQjBB/assets/headset-green.svg"
                  alt="headset icon"
                  className="text-xl box-border caret-transparent leading-[30px] max-w-full min-h-[auto] min-w-[auto] mr-3 md:text-[28px] md:leading-[42px]"
                />
                <span className="text-xl box-border caret-transparent block leading-[30px] min-h-[auto] min-w-[auto] md:text-[28px] md:leading-[42px]">
                  (602) 555-0100
                </span>
              </a>
            </div>
          </div>
          <div className="box-border caret-transparent col-end-[calc] col-start-[calc] row-end-[calc] row-start-[calc] min-h-[auto] min-w-[auto]">
            <div className="box-border caret-transparent">
              <div className="relative bg-slate-50 shadow-[rgba(0,0,0,0.08)_0px_4px_24px_0px] box-border caret-transparent rounded-lg">
                <div className="box-border caret-transparent flex overflow-hidden rounded-t-lg">
                  <button
                    className="relative text-blue-950 text-[13px] font-bold items-center bg-slate-50 caret-transparent gap-x-2 flex basis-[0%] grow justify-center leading-[19.5px] min-h-[auto] min-w-[auto] gap-y-2 text-center overflow-hidden px-4 py-[18px] md:text-base md:leading-6"
                    onClick={() => setActiveTab("calculate")}
                  >
                    <img
                      src="https://c.animaapp.com/mnnx669pIjQjBB/assets/icon-6.svg"
                      alt="Icon"
                      className="text-[13px] box-border caret-transparent h-5 leading-[19.5px] w-5 md:text-base md:leading-6"
                    />
                    Get Instant Quote
                  </button>
                  <button
                    className="relative text-neutral-600 text-[13px] font-bold items-center bg-zinc-200 caret-transparent gap-x-2 flex basis-[0%] grow justify-center leading-[19.5px] min-h-[auto] min-w-[auto] gap-y-2 text-center overflow-hidden px-4 py-[18px] md:text-base md:leading-6"
                    onClick={() => setActiveTab("track")}
                  >
                    <img
                      src="https://c.animaapp.com/mnnx669pIjQjBB/assets/icon-7.svg"
                      alt="Icon"
                      className="text-[13px] box-border caret-transparent h-5 leading-[19.5px] opacity-50 w-5 md:text-base md:leading-6"
                    />
                    Call Now
                  </button>
                </div>

                {activeTab === "calculate" && (
                  <div className="box-border caret-transparent pt-3 px-3 md:pt-7 md:px-[26px]">
                    <div className="box-border caret-transparent">
                      <h2 className="text-blue-950 text-base font-bold box-border caret-transparent leading-[21.6px] mb-[22px] md:text-lg md:leading-[24.3px]">
                        Get Your Instant Shipping Quote
                      </h2>

                      {/* Route inputs */}
                      <div className="text-blue-950 font-bold items-center box-border caret-transparent gap-x-2 flex gap-y-2 mb-3.5">
                        <img
                          src="https://c.animaapp.com/mnnx669pIjQjBB/assets/icon-8.svg"
                          alt="Icon"
                          className="box-border caret-transparent h-6 w-[25px]"
                        />
                        <span className="box-border caret-transparent block min-h-[auto] min-w-[auto]">
                          Route
                        </span>
                      </div>
                      <div className="box-border caret-transparent gap-x-3 flex flex-col gap-y-3 mb-3">
                        <input
                          type="text"
                          placeholder="From (ZIP or City, State)"
                          value={pickup}
                          onChange={(e) => setPickup(e.target.value)}
                          className="text-blue-950 font-semibold box-border caret-auto w-full border border-zinc-300 px-[18px] py-[15px] rounded-[10px] border-solid"
                        />
                        <input
                          type="text"
                          placeholder="To (ZIP or City, State)"
                          value={delivery}
                          onChange={(e) => setDelivery(e.target.value)}
                          className="text-blue-950 font-semibold box-border caret-auto w-full border border-zinc-300 px-[18px] py-[15px] rounded-[10px] border-solid"
                        />
                      </div>

                      {/* Vehicle type */}
                      <div className="text-blue-950 font-bold items-center box-border caret-transparent gap-x-2 flex gap-y-2 mb-3.5">
                        <img
                          src="https://c.animaapp.com/mnnx669pIjQjBB/assets/icon-9.svg"
                          alt="Icon"
                          className="box-border caret-transparent h-6 w-[25px]"
                        />
                        <span className="box-border caret-transparent block min-h-[auto] min-w-[auto]">
                          Vehicle
                        </span>
                      </div>
                      <div className="box-border caret-transparent gap-x-3 flex flex-col gap-y-3 mb-3">
                        <div className="relative box-border caret-transparent">
                          <button
                            type="button"
                            onClick={() => setVehicleDropdownOpen(!vehicleDropdownOpen)}
                            className="text-slate-400 font-medium items-center bg-white caret-transparent gap-x-2.5 flex justify-between gap-y-2.5 text-center w-full border border-zinc-300 px-[18px] py-[15px] rounded-[10px]"
                          >
                            <span className="box-border caret-transparent block min-h-[auto] min-w-[auto]">
                              {selectedVehicle || "Select Vehicle Type"}
                            </span>
                            <img
                              src="https://c.animaapp.com/mnnx669pIjQjBB/assets/icon-10.svg"
                              alt="Icon"
                              className="text-blue-950 box-border caret-transparent shrink-0 h-3 w-3"
                            />
                          </button>
                          {vehicleDropdownOpen && (
                            <div className="absolute bg-white border-b-zinc-300 border-l-zinc-300 border-r-zinc-300 shadow-[rgba(0,0,0,0.08)_0px_8px_16px_0px] box-border caret-transparent max-h-[280px] z-50 overflow-auto py-1.5 rounded-b-[10px] border border-zinc-300 top-full inset-x-0">
                              {vehicleSizes.map((vehicle) => (
                                <div
                                  key={vehicle.id}
                                  onClick={() => {
                                    setSelectedVehicle(vehicle.label);
                                    setVehicleDropdownOpen(false);
                                  }}
                                  className="items-center box-border caret-transparent gap-x-3 flex gap-y-3 px-[18px] py-2.5 cursor-pointer hover:bg-slate-50"
                                >
                                  <img
                                    src={vehicle.imageUrl}
                                    alt="Icon"
                                    className="box-border caret-transparent shrink-0 h-[30px] w-12"
                                  />
                                  <span className="text-blue-950 font-semibold box-border caret-transparent block">
                                    {vehicle.label}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Enclosed option */}
                      <div className="items-center box-border caret-transparent gap-x-2.5 flex gap-y-2.5 mb-[18px]">
                        <input
                          type="checkbox"
                          checked={enclosed}
                          onChange={(e) => setEnclosed(e.target.checked)}
                          className="text-black accent-blue-500 bg-transparent box-border caret-transparent block shrink-0 h-5 min-h-[auto] min-w-[auto] w-5 overflow-visible p-0"
                        />
                        <label className="text-blue-950 text-[15px] font-medium box-border caret-transparent block leading-[22.5px] min-h-[auto] min-w-[auto]">
                          Enclosed transport (+40%)
                        </label>
                      </div>

                      {/* Quote result */}
                      {quoteError && (
                        <div className="text-red-600 text-sm font-semibold bg-red-50 rounded-lg px-4 py-3 mb-4">
                          {quoteError}
                        </div>
                      )}

                      {loading && (
                        <div className="flex items-center justify-center gap-x-3 py-4 mb-4">
                          <svg className="animate-spin h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                          </svg>
                          <span className="text-blue-950 font-semibold text-sm">Calculating your route...</span>
                        </div>
                      )}

                      {quoteResult && !loading && (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-4 mb-4">
                          <p className="text-blue-950 font-bold text-base mb-1">Your Estimated Quote</p>
                          <p className="text-blue-800 text-sm mb-1">
                            Distance: <strong>{quoteResult.distanceMiles.toLocaleString()} miles</strong>
                          </p>
                          <p className="text-blue-800 text-sm mb-1">
                            Transport: <strong>{quoteResult.enclosed ? "Enclosed" : "Open"}</strong>
                          </p>
                          <p className="text-green-700 text-xl font-bold mt-2">
                            ${quoteResult.low.toLocaleString()} – ${quoteResult.high.toLocaleString()}
                          </p>
                          <p className="text-neutral-500 text-xs mt-1">
                            Final price confirmed at booking. No hidden fees.
                          </p>
                        </div>
                      )}

                      <div className="box-border caret-transparent flex flex-col">
                        <button
                          type="button"
                          onClick={handleGetQuote}
                          disabled={loading}
                          className="text-blue-950 font-semibold bg-lime-300 caret-transparent block tracking-[-0.16px] mb-[-1.5px] min-h-[auto] min-w-[auto] text-center w-[calc(100%_+_24px)] -ml-3 p-[18px] rounded-b-lg md:ml-[-26px] md:w-[calc(100%_+_52px)] disabled:opacity-60"
                        >
                          {loading ? "Calculating..." : "Get Instant Quote"}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "track" && (
                  <div className="box-border caret-transparent pt-3 px-3 pb-6 md:pt-7 md:px-[26px]">
                    <div className="text-center py-8">
                      <p className="text-blue-950 font-bold text-lg mb-3">
                        Ready to Ship?
                      </p>
                      <p className="text-neutral-600 text-sm mb-6">
                        Call us directly to speak with a transport coordinator and get your vehicle on the road today.
                      </p>
                      <a
                        href="tel://6025550100"
                        className="inline-flex items-center gap-x-2 text-white font-bold bg-blue-600 px-6 py-4 rounded-lg text-lg"
                      >
                        <img
                          src="https://c.animaapp.com/mnnx669pIjQjBB/assets/headset-green.svg"
                          alt="headset"
                          className="h-6 w-6 brightness-200"
                        />
                        Call Now: (602) 555-0100
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
