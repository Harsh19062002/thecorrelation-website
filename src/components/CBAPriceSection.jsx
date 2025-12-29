"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";

const CBAPriceSection = () => {
  const [mode, setMode] = useState("online");

  const cbaPlans = {
    online: [
      {
        title: "Pay Now (Job Assurance)",
        price: "₹41,200",
        subtitle: "One-time full payment",
        razorpayLink: "https://rzp.io/l/cba-online-paynow",
        features: [
          "Job Assurance program",
          "Complete business analytics training",
          "Access to recorded materials",
        ],
      },
      {
        title: "SNPL (Job Assurance)",
        price: "₹8,333/month",
        subtitle: "Pay Now ₹34,500 • Pay Later ₹20,500",
        highlight: "Most Popular",
        razorpayLink: "https://rzp.io/l/cba-online-snpl",
        features: [
          "Start with lower upfront cost",
          "Job assurance after completion",
          "Flexible pay-later option",
          "Total Program Fee: ₹50,000",
        ],
      },
    ],

    offline: [
      {
        title: "Pay Now (Job Assurance)",
        price: "₹56,200",
        subtitle: "One-time full payment",
        razorpayLink: "https://rzp.io/l/cba-offline-paynow",
        features: [
          "Offline classroom experience",
          "Hands-on business analytics training",
          "Mentorship + Job Assurance",
          "Program Fee Equivalent: ₹9,367",
        ],
      },
      {
        title: "SNPL (Job Assurance)",
        price: "₹11,667/month",
        subtitle: "Pay Now ₹49,500 • Pay Later ₹30,500",
        razorpayLink: "https://rzp.io/l/cba-offline-snpl",
        features: [
          "Lower upfront payment option",
          "Job assurance included",
          "Offline interactive training",
          "Total Program Fee: ₹70,000",
        ],
      },
    ],
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
          Chartered Business Analyst — Payment Options
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
          {cbaPlans[mode].map((plan, index) => (
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

export default CBAPriceSection;
