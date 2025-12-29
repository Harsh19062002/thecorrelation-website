"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";

const CDSPriceSection = () => {
  const [mode, setMode] = useState("online");

  const cdsPlans = {
    online: [
      {
        title: "Pay Now (Assistance)",
        price: "₹66,000",
        subtitle: "One-time full payment",
        razorpayLink: "https://rzp.io/l/cds-online-paynow",
        features: [
          "Offline/Online flexible study access",
          "Complete assistance & mentorship",
          "Lifetime access to materials",
          "Monthly equivalent: ₹6,600",
        ],
      },
      {
        title: "SNPL (Assistance)",
        price: "₹9,650/month",
        subtitle: "Pay Now ₹59,500 • Pay Later ₹37,000",
        highlight: "Most Popular",
        razorpayLink: "https://rzp.io/l/cds-online-snpl",
        features: [
          "Immediate enrollment with partial payment",
          "Flexible pay-later support",
          "Offline + Online blended learning",
          "Total Program Fee: ₹96,500",
        ],
      },
    ],

    offline: [
      {
        title: "Pay Now (Assistance)",
        price: "₹95,000",
        subtitle: "One-time full payment",
        razorpayLink: "https://rzp.io/l/cds-offline-paynow",
        features: [
          "Full offline classroom experience",
          "Access to practical labs & faculty sessions",
          "Mentorship + assistance package",
          "Monthly equivalent: ₹9,500",
        ],
      },
      {
        title: "SNPL (Assistance)",
        price: "₹14,500/month",
        subtitle: "Pay Now ₹79,500 • Pay Later ₹65,500",
        razorpayLink: "https://rzp.io/l/cds-offline-snpl",
        features: [
          "Lower upfront cost with flexible pay-later",
          "Offline classroom-based training",
          "Complete mentorship & assistance",
          "Total Program Fee: ₹1,45,000",
        ],
      },
    ],
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
          Chartered Data Scientist — Payment Options
        </h2>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-gray-100 rounded-full border border-red-100">
            {["online", "offline"].map((tab) => (
              <button
                key={tab}
                onClick={() => setMode(tab)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all
                  ${
                    mode === tab
                      ? "bg-white text-red-600 shadow"
                      : "text-gray-600"
                  }`}
              >
                {tab === "online" ? "Online Program" : "Offline Program"}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]
            gap-6
            justify-center
          "
        >
          {cdsPlans[mode].map((plan, index) => (
            <div
              key={index}
              className="
                relative
                bg-white
                border border-red-100
                rounded-2xl
                p-6
                shadow-sm
                hover:shadow-lg
                hover:-translate-y-2
                transition-all
                flex flex-col
                h-full
              "
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-red-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                    {plan.highlight}
                  </span>
                </div>
              )}

              <div className="flex-grow flex flex-col text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {plan.title}
                </h3>

                <div className="text-3xl font-bold text-black mb-1">
                  {plan.price}
                </div>

                {plan.subtitle && (
                  <p className="text-xs text-gray-500 mb-3">
                    {plan.subtitle}
                  </p>
                )}

                <ul className="text-left space-y-3 my-6 flex-grow">
                  {plan.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Razorpay Button */}
                <a
                  href={plan.razorpayLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full
                    mt-auto
                    bg-red-600
                    hover:shadow-md
                    text-white
                    py-2.5
                    rounded-lg
                    font-semibold
                    transition-all
                    text-center
                    block
                  "
                >
                  Choose Plan
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CDSPriceSection;
