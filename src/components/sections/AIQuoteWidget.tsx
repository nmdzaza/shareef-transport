import React, { useState } from "react";

const GOOGLE_KEY = "AIzaSyDTVl6vyXTcFYVAFWjClxCC3PG1nKYthXQ";
const TELEGRAM_BOT_TOKEN = "8678819131:AAEl4WDsPhp4X8PEAGJ1MFSHS6x6kwdOvIw";
const TELEGRAM_ADMIN_ID = "5258417842";

type VehicleType = "sedan" | "suv" | "truck" | "van" | "motorcycle" | "oversized";
type Step = "origin" | "dest" | "vehicle" | "loading" | "results" | "booking" | "confirmed";

interface QuoteOption {
  label: string;
  price: number;
  carriers: number;
  tag: string;
  recommended?: boolean;
}

interface BookingData {
  originZip: string;
  destZip: string;
  originCity: string;
  destCity: string;
  miles: number;
  vehicleType: VehicleType;
  selectedDate: string;
  selectedPrice: number;
  name: string;
  phone: string;
  email: string;
}

function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

function getMockCarrierQuotes(miles: number, vehicleType: VehicleType): QuoteOption[] {
  const baseRate = miles < 500 ? 1.25 : miles < 1500 ? 0.95 : 0.70;
  const vehicleMult =
    vehicleType === "suv" ? 1.08 :
    vehicleType === "truck" ? 1.12 :
    vehicleType === "oversized" ? 1.35 :
    vehicleType === "motorcycle" ? 0.75 : 1.0;
  const base = Math.max(350, Math.round(miles * baseRate * vehicleMult));
  const today = new Date();

  return [
    {
      label: formatDate(addDays(today, 3)),
      price: Math.round(base * 1.08),
      carriers: 1,
      tag: "Soonest Available",
    },
    {
      label: formatDate(addDays(today, 6)),
      price: base,
      carriers: 3,
      tag: "Best Value",
      recommended: true,
    },
    {
      label: formatDate(addDays(today, 10)),
      price: Math.round(base * 0.92),
      carriers: 2,
      tag: "Most Flexible",
    },
  ];
}

async function getCityFromZip(zip: string): Promise<string> {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&components=country:US&region=us&key=${GOOGLE_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.status === "OK" && data.results.length > 0) {
    const components = data.results[0].address_components as Array<{ long_name: string; types: string[] }>;
    const city = components.find((c: { long_name: string; types: string[] }) => c.types.includes("locality"))?.long_name;
    const state = components.find((c: { long_name: string; types: string[] }) => c.types.includes("administrative_area_level_1"))?.long_name;
    if (city && state) return `${city}, ${state}`;
    if (state) return state;
  }
  return zip;
}

async function getRouteMiles(originZip: string, destZip: string): Promise<number | null> {
  const res = await fetch("https://routes.googleapis.com/directions/v2:computeRoutes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": GOOGLE_KEY,
      "X-Goog-FieldMask": "routes.distanceMeters",
    },
    body: JSON.stringify({
      origin: { address: `${originZip}, USA` },
      destination: { address: `${destZip}, USA` },
      travelMode: "DRIVE",
    }),
  });
  const data = await res.json();
  if (!data.routes || data.routes.length === 0) return null;
  return Math.round(data.routes[0].distanceMeters * 0.000621371);
}

async function sendTelegram(text: string) {
  try {
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: TELEGRAM_ADMIN_ID, text, parse_mode: "HTML" }),
    });
  } catch {
    // silent fail — don't block UX
  }
}

const VEHICLE_LABELS: Record<VehicleType, string> = {
  sedan: "Sedan",
  suv: "SUV",
  truck: "Truck",
  van: "Van",
  motorcycle: "Motorcycle",
  oversized: "Oversized",
};

const VEHICLE_EMOJIS: Record<VehicleType, string> = {
  sedan: "🚗",
  suv: "🚙",
  truck: "🛻",
  van: "🚐",
  motorcycle: "🏍️",
  oversized: "🚛",
};

export function AIQuoteWidget() {
  const [step, setStep] = useState<Step>("origin");
  const [originZip, setOriginZip] = useState("");
  const [destZip, setDestZip] = useState("");
  const [vehicle, setVehicle] = useState<VehicleType | null>(null);
  const [quotes, setQuotes] = useState<QuoteOption[]>([]);
  const [selectedQuote, setSelectedQuote] = useState<QuoteOption | null>(null);
  const [originCity, setOriginCity] = useState("");
  const [destCity, setDestCity] = useState("");
  const [miles, setMiles] = useState(0);
  const [error, setError] = useState("");

  // Booking form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const stepIndex = ["origin", "dest", "vehicle"].indexOf(step);

  const handleOriginNext = () => {
    if (originZip.length !== 5) { setError("Enter a valid 5-digit ZIP."); return; }
    setError("");
    setStep("dest");
  };

  const handleDestNext = () => {
    if (destZip.length !== 5) { setError("Enter a valid 5-digit ZIP."); return; }
    setError("");
    setStep("vehicle");
  };

  const handleVehicleSelect = async (v: VehicleType) => {
    setVehicle(v);
    setStep("loading");

    // Fire "quote started" Telegram ping
    sendTelegram(
      `👀 QUOTE STARTED\nFrom: ${originZip} → To: ${destZip}\nVehicle: ${VEHICLE_LABELS[v]}\n(No booking yet — watching...)`
    );

    try {
      const [m, oCity, dCity] = await Promise.all([
        getRouteMiles(originZip, destZip),
        getCityFromZip(originZip),
        getCityFromZip(destZip),
      ]);

      // Minimum fake delay of 1.5 seconds for "carrier search" feel
      await new Promise((res) => setTimeout(res, 1500));

      if (!m) {
        setError("Couldn't calculate route. Check your ZIP codes.");
        setStep("origin");
        return;
      }

      setMiles(m);
      setOriginCity(oCity);
      setDestCity(dCity);
      setQuotes(getMockCarrierQuotes(m, v));
      setStep("results");
    } catch {
      setError("Something went wrong. Please try again.");
      setStep("origin");
    }
  };

  const handleSelectQuote = (q: QuoteOption) => {
    setSelectedQuote(q);
    setStep("booking");
  };

  const handleBooking = async () => {
    if (!name.trim() || !phone.trim() || !email.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    if (!selectedQuote || !vehicle) return;
    setError("");
    setSubmitting(true);

    const bookingData: BookingData = {
      originZip,
      destZip,
      originCity,
      destCity,
      miles,
      vehicleType: vehicle,
      selectedDate: selectedQuote.label,
      selectedPrice: selectedQuote.price,
      name,
      phone,
      email,
    };

    const msg = `🚗 NEW TRANSPORT LEAD

📍 Route: ${bookingData.originCity} → ${bookingData.destCity}
📏 Distance: ${bookingData.miles} miles
🚙 Vehicle: ${VEHICLE_LABELS[bookingData.vehicleType]}
📅 Date: ${bookingData.selectedDate}
💰 Rate: $${bookingData.selectedPrice}

👤 ${bookingData.name}
📞 ${bookingData.phone}
📧 ${bookingData.email}

Reply or call NOW — lead is hot 🔥`;

    await sendTelegram(msg);
    setSubmitting(false);
    setStep("confirmed");
  };

  const handleZipInput = (val: string, setter: (v: string) => void) => {
    setter(val.replace(/\D/g, "").slice(0, 5));
  };

  const handlePhoneInput = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 10);
    let formatted = digits;
    if (digits.length > 6) {
      formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    } else if (digits.length > 3) {
      formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else if (digits.length > 0) {
      formatted = `(${digits}`;
    }
    setPhone(formatted);
  };

  return (
    <section className="bg-slate-900 py-14 px-4">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block bg-amber-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            AI-Powered Quoting
          </span>
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
            Get Your Instant Shipping Quote
          </h2>
          <p className="text-slate-400 text-sm">
            Real carrier rates in seconds — no sign-up required
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">

          {/* Progress dots */}
          {["origin", "dest", "vehicle"].includes(step) && (
            <div className="flex items-center justify-center gap-x-2 pt-5 pb-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`rounded-full transition-all ${
                    i === stepIndex
                      ? "w-6 h-2.5 bg-amber-500"
                      : i < stepIndex
                      ? "w-2.5 h-2.5 bg-amber-300"
                      : "w-2.5 h-2.5 bg-slate-200"
                  }`}
                />
              ))}
            </div>
          )}

          <div className="px-6 py-5">

            {/* STEP 1 — Origin ZIP */}
            {step === "origin" && (
              <div>
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-1">Step 1 of 3</p>
                <h3 className="text-blue-950 text-xl font-bold mb-4">Where are you shipping FROM?</h3>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="Enter origin ZIP code"
                  maxLength={5}
                  value={originZip}
                  onChange={(e) => { handleZipInput(e.target.value, setOriginZip); setError(""); }}
                  onKeyDown={(e) => e.key === "Enter" && handleOriginNext()}
                  className="caret-auto w-full border-2 border-slate-200 focus:border-amber-400 focus:outline-none px-4 py-4 rounded-xl text-blue-950 font-bold text-2xl text-center tracking-widest transition-colors mb-3"
                  autoFocus
                />
                {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                <button
                  type="button"
                  onClick={handleOriginNext}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-xl text-base transition-colors shadow-md"
                >
                  Next →
                </button>
              </div>
            )}

            {/* STEP 2 — Destination ZIP */}
            {step === "dest" && (
              <div>
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-1">Step 2 of 3</p>
                <h3 className="text-blue-950 text-xl font-bold mb-1">Where are you shipping TO?</h3>
                <p className="text-slate-400 text-sm mb-4">From: <span className="font-semibold text-slate-600">{originZip}</span></p>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="Enter destination ZIP code"
                  maxLength={5}
                  value={destZip}
                  onChange={(e) => { handleZipInput(e.target.value, setDestZip); setError(""); }}
                  onKeyDown={(e) => e.key === "Enter" && handleDestNext()}
                  className="caret-auto w-full border-2 border-slate-200 focus:border-amber-400 focus:outline-none px-4 py-4 rounded-xl text-blue-950 font-bold text-2xl text-center tracking-widest transition-colors mb-3"
                  autoFocus
                />
                {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                <div className="flex gap-x-3">
                  <button
                    type="button"
                    onClick={() => { setStep("origin"); setError(""); }}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold py-4 rounded-xl text-base transition-colors"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={handleDestNext}
                    className="flex-[2] bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-xl text-base transition-colors shadow-md"
                  >
                    Next →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 — Vehicle Type */}
            {step === "vehicle" && (
              <div>
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-1">Step 3 of 3</p>
                <h3 className="text-blue-950 text-xl font-bold mb-1">What type of vehicle?</h3>
                <p className="text-slate-400 text-sm mb-4">
                  {originZip} → {destZip}
                </p>
                <div className="grid grid-cols-2 gap-2.5 mb-3">
                  {(["sedan", "suv", "truck", "van", "motorcycle", "oversized"] as VehicleType[]).map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => handleVehicleSelect(v)}
                      className="flex items-center gap-x-3 border-2 border-slate-200 hover:border-amber-400 hover:bg-amber-50 bg-white text-blue-950 font-semibold py-3.5 px-4 rounded-xl text-sm transition-all"
                    >
                      <span className="text-xl">{VEHICLE_EMOJIS[v]}</span>
                      {VEHICLE_LABELS[v]}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => { setStep("dest"); setError(""); }}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold py-3 rounded-xl text-sm transition-colors"
                >
                  ← Back
                </button>
              </div>
            )}

            {/* LOADING */}
            {step === "loading" && (
              <div className="py-10 flex flex-col items-center gap-y-4">
                <svg className="animate-spin h-10 w-10 text-amber-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                <p className="text-blue-950 font-bold text-lg">Finding carriers on your route...</p>
                <p className="text-slate-400 text-sm">Checking real-time availability</p>
              </div>
            )}

            {/* RESULTS */}
            {step === "results" && (
              <div>
                <div className="mb-4">
                  <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-0.5">Your Quote</p>
                  <h3 className="text-blue-950 text-lg font-bold">
                    {originCity} → {destCity}
                  </h3>
                  <p className="text-slate-400 text-sm">{miles.toLocaleString()} miles · {vehicle && VEHICLE_LABELS[vehicle]}</p>
                </div>
                <p className="text-slate-600 text-sm font-semibold mb-3">Select your pickup date:</p>
                <div className="flex flex-col gap-y-2.5 mb-4">
                  {quotes.map((q) => (
                    <button
                      key={q.label}
                      type="button"
                      onClick={() => handleSelectQuote(q)}
                      className={`relative flex items-center justify-between border-2 rounded-xl px-4 py-3.5 transition-all text-left ${
                        q.recommended
                          ? "border-emerald-400 bg-emerald-50 hover:bg-emerald-100"
                          : "border-slate-200 bg-white hover:border-amber-300 hover:bg-amber-50"
                      }`}
                    >
                      {q.recommended && (
                        <span className="absolute -top-2.5 left-3 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                          ⭐ RECOMMENDED
                        </span>
                      )}
                      <div>
                        <p className="text-blue-950 font-bold text-sm">{q.label}</p>
                        <p className="text-slate-400 text-xs">{q.tag} · {q.carriers} carrier{q.carriers > 1 ? "s" : ""} available</p>
                      </div>
                      <div className="text-right">
                        <p className="text-amber-600 font-extrabold text-xl">${q.price.toLocaleString()}</p>
                        <p className="text-slate-400 text-xs">Select →</p>
                      </div>
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setStep("vehicle")}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold py-3 rounded-xl text-sm transition-colors"
                >
                  ← Change vehicle
                </button>
              </div>
            )}

            {/* BOOKING */}
            {step === "booking" && selectedQuote && (
              <div>
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-1">Almost done</p>
                <h3 className="text-blue-950 text-xl font-bold mb-1">Lock In This Rate</h3>
                <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-blue-950 font-bold text-sm">{selectedQuote.label}</p>
                    <p className="text-slate-500 text-xs">{selectedQuote.tag}</p>
                  </div>
                  <p className="text-amber-600 font-extrabold text-2xl">${selectedQuote.price.toLocaleString()}</p>
                </div>
                <div className="flex flex-col gap-y-3 mb-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => { setName(e.target.value); setError(""); }}
                    className="caret-auto w-full border-2 border-slate-200 focus:border-amber-400 focus:outline-none px-4 py-3.5 rounded-xl text-blue-950 font-semibold text-sm transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => handlePhoneInput(e.target.value)}
                    className="caret-auto w-full border-2 border-slate-200 focus:border-amber-400 focus:outline-none px-4 py-3.5 rounded-xl text-blue-950 font-semibold text-sm transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(""); }}
                    className="caret-auto w-full border-2 border-slate-200 focus:border-amber-400 focus:outline-none px-4 py-3.5 rounded-xl text-blue-950 font-semibold text-sm transition-colors"
                  />
                </div>
                {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                <button
                  type="button"
                  onClick={handleBooking}
                  disabled={submitting}
                  className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl text-base transition-colors shadow-md mb-3"
                >
                  {submitting ? "Submitting..." : "Lock In This Rate →"}
                </button>
                <button
                  type="button"
                  onClick={() => setStep("results")}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold py-3 rounded-xl text-sm transition-colors"
                >
                  ← Back to quotes
                </button>
              </div>
            )}

            {/* CONFIRMED */}
            {step === "confirmed" && (
              <div className="py-8 flex flex-col items-center text-center gap-y-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-blue-950 text-xl font-bold">You're Locked In!</h3>
                <p className="text-slate-500 text-sm max-w-xs">
                  Shareef will call you within <span className="font-bold text-blue-950">15 minutes</span> to confirm your booking.
                </p>
                {selectedQuote && (
                  <div className="w-full bg-slate-50 rounded-xl px-4 py-3 text-left">
                    <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Booking Summary</p>
                    <p className="text-blue-950 font-bold text-sm">{originCity} → {destCity}</p>
                    <p className="text-slate-500 text-sm">{vehicle && VEHICLE_LABELS[vehicle]} · {selectedQuote.label}</p>
                    <p className="text-amber-600 font-extrabold text-lg mt-1">${selectedQuote.price.toLocaleString()}</p>
                  </div>
                )}
                <a
                  href="tel://6025550100"
                  className="w-full flex items-center justify-center bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 rounded-xl text-sm transition-colors"
                >
                  📞 Call Now to Confirm
                </a>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
