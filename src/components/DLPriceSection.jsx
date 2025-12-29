"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";

const DeepLearningPriceSection = () => {
  const [mode, setMode] = useState("online");

  const plans = {
    online: [
      {
        title: "Pay Now",
        price: "₹15,000",
        subtitle: "One-time full payment",
        razorpayLink: "https://rzp.io/l/dl-online-paynow",
        features: [
          "Expected Cost: ₹22,000",
          "Program Fee: ₹6,000",
          "Complete Deep Learning Coverage",
          "Foundations of Neural Networks",
          "Basic Generative AI Concepts",
        ],
      },
    ],

    offline: [
      {
        title: "Pay Now",
        price: "₹23,000",
        subtitle: "One-time full payment",
        razorpayLink: "https://rzp.io/l/dl-offline-paynow",
        features: [
          "Expected Cost: ₹35,000",
          "Program Fee: ₹9,200",
          "Advanced DL Architectures (Offline)",
          "CNNs, RNNs, Autoencoders",
          "Generative Modeling Foundations",
        ],
      },
    ],
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
          Deep Learning with Generative AI — Payment Options
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
            place-items-center
          "
        >
          {plans[mode].map((plan, index) => (
            <div
              key={index}
              className="
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
                w-full
                max-w-[560px]
              "
            >
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {plan.title}
              </h3>

              <div className="text-3xl font-bold text-black mb-1">
                {plan.price}
              </div>

              <p className="text-xs text-gray-500 mb-3">
                {plan.subtitle}
              </p>

              <ul className="text-sm space-y-3 my-6 text-gray-700 flex-grow">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
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
          ))}
        </div>

      </div>
    </section>
  );
};

export default DeepLearningPriceSection;
