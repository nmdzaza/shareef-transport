import React from "react";
import { MapPin, Car, Shield, Calendar, AlertCircle, Route } from "lucide-react";

const factors = [
  {
    icon: MapPin,
    title: "Distance",
    description: "The distance between pickup and delivery is the #1 factor in pricing",
  },
  {
    icon: Car,
    title: "Vehicle Size",
    description: "Larger vehicles take up more space on the carrier",
  },
  {
    icon: Shield,
    title: "Transport Type",
    description: "Open carriers are cheaper, enclosed carriers protect premium vehicles",
  },
  {
    icon: Calendar,
    title: "Time of Year",
    description: "Peak seasons (summer, snowbird) affect availability and pricing",
  },
  {
    icon: AlertCircle,
    title: "Vehicle Condition",
    description: "Non-running vehicles require special equipment",
  },
  {
    icon: Route,
    title: "Route Popularity",
    description: "Major corridors like LA-NY have more carriers and better rates",
  },
];

export function PricingFactorsSection() {
  return (
    <section className="box-border caret-transparent my-[30px] md:my-[90px]">
      <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[1140px]">
        <div className="box-border caret-transparent flex flex-wrap -mx-3">
          <div className="box-border caret-transparent shrink-0 max-w-full min-h-[auto] min-w-[auto] text-center w-full px-3">
            <h2 className="text-blue-950 text-3xl font-semibold box-border caret-transparent leading-[42px] mb-2">
              How is your vehicle transport fee calculated?
            </h2>
            <p className="text-neutral-500 mt-3 mb-8 text-base">
              Six key factors determine the cost of shipping your vehicle with Shareef Transport.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 md:mt-[50px]">
              {factors.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-white border border-zinc-200 rounded-[10px] px-[30px] py-6 flex flex-col items-center text-center"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 mb-4">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <p className="text-blue-950 text-base font-bold leading-snug mb-2">{title}</p>
                  <p className="text-neutral-500 text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent shrink text-center w-auto mt-2 pt-6 md:shrink-0 md:w-full md:mt-12">
          <a
            href="#quote"
            title="Get a free quote"
            className="text-white font-bold bg-blue-500 box-border caret-transparent inline-block leading-[19px] align-middle px-[60px] py-3 rounded-[30px]"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
