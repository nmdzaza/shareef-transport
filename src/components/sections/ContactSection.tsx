import React, { useState } from "react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    originZip: "",
    destinationZip: "",
    vehicleType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const response = await fetch("https://formspree.io/f/xjkwdqrn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        phone: form.phone,
        email: form.email,
        message: form.message,
        pickupLocation: form.originZip,
        deliveryLocation: form.destinationZip,
        vehicleType: form.vehicleType,
      }),
    });
    setSending(false);
    if (response.ok) {
      setSubmitted(true);
    } else {
      alert("There was an error. Please try again or call us directly.");
    }
  };

  return (
    <section id="contact" className="bg-slate-50 box-border caret-transparent py-16">
      <div className="box-border caret-transparent max-w-none w-full mx-auto px-3 md:max-w-[700px]">
        <div className="text-center mb-10">
          <h2 className="text-blue-950 text-[29px] font-semibold leading-[42px] mb-2">
            Get in Touch
          </h2>
          <p className="text-neutral-600 text-base">
            Fill out the form below and a transport coordinator will call you within 15 minutes.
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-50 border border-green-300 rounded-xl text-center py-12 px-6">
            <div className="text-green-600 text-5xl mb-4">&#10003;</div>
            <p className="text-green-800 text-xl font-bold mb-2">
              We'll call you within 15 minutes!
            </p>
            <p className="text-green-700 text-sm">
              Our team has received your request and will reach out to you shortly.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-zinc-200 shadow-[rgba(0,0,0,0.07)_0px_4px_24px_0px] rounded-xl p-8 flex flex-col gap-y-4"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col flex-1 gap-y-1">
                <label className="text-blue-950 text-sm font-semibold">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="text-blue-950 font-medium border border-zinc-300 caret-auto px-4 py-3 rounded-lg w-full"
                />
              </div>
              <div className="flex flex-col flex-1 gap-y-1">
                <label className="text-blue-950 text-sm font-semibold">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(602) 555-0000"
                  className="text-blue-950 font-medium border border-zinc-300 caret-auto px-4 py-3 rounded-lg w-full"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-1">
              <label className="text-blue-950 text-sm font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="text-blue-950 font-medium border border-zinc-300 caret-auto px-4 py-3 rounded-lg w-full"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col flex-1 gap-y-1">
                <label className="text-blue-950 text-sm font-semibold">Origin ZIP *</label>
                <input
                  type="text"
                  name="originZip"
                  required
                  value={form.originZip}
                  onChange={handleChange}
                  placeholder="85001"
                  className="text-blue-950 font-medium border border-zinc-300 caret-auto px-4 py-3 rounded-lg w-full"
                />
              </div>
              <div className="flex flex-col flex-1 gap-y-1">
                <label className="text-blue-950 text-sm font-semibold">Destination ZIP *</label>
                <input
                  type="text"
                  name="destinationZip"
                  required
                  value={form.destinationZip}
                  onChange={handleChange}
                  placeholder="90001"
                  className="text-blue-950 font-medium border border-zinc-300 caret-auto px-4 py-3 rounded-lg w-full"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-1">
              <label className="text-blue-950 text-sm font-semibold">Vehicle Type</label>
              <select
                name="vehicleType"
                value={form.vehicleType}
                onChange={handleChange}
                className="text-blue-950 font-medium border border-zinc-300 caret-auto px-4 py-3 rounded-lg w-full bg-white"
              >
                <option value="">Select Vehicle Type</option>
                <option>Sedan</option>
                <option>SUV / Crossover</option>
                <option>Pickup Truck</option>
                <option>Van / Minivan</option>
                <option>Motorcycle</option>
                <option>Oversized / Heavy Equipment</option>
                <option>Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-y-1">
              <label className="text-blue-950 text-sm font-semibold">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Any additional details about your shipment..."
                className="text-blue-950 font-medium border border-zinc-300 caret-auto px-4 py-3 rounded-lg w-full resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="text-blue-950 font-bold bg-lime-300 text-center py-4 rounded-lg mt-2 hover:bg-lime-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? "Sending..." : "Send My Request"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
