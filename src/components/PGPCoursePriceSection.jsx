"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";

const CoursePriceSection = () => {
  const [mode, setMode] = useState("online");

  const plans = {
    online: [
      {
        title: "Pay Now",
        price: "₹1,20,000",
        razorpayLink: "https://rzp.io/l/online-paynow",
        features: [
          "Save ₹30,000 on full payment",
          "Lifetime access to materials",
          "Priority mentorship & job assistance",
        ],
      },
      {
        title: "EMI Option",
        price: "₹10,000/month",
        subtitle: "for 12 months",
        highlight: "Most Popular",
        razorpayLink: "https://rzp.io/l/online-emi",
        features: [
          "0% interest for 6 months",
          "Flexible EMI payment",
          "Career mentorship support",
        ],
      },
    ],
    offline: [
      {
        title: "Pay Now",
        price: "₹2,45,000",
        razorpayLink: "https://rzp.io/l/offline-paynow",
        features: [
          "100% Job Guarantee",
          "In-person learning experience",
          "Access to labs & networking events",
        ],
      },
      {
        title: "EMI Option",
        price: "₹15,867/month",
        subtitle: "for 12 months",
        highlight: "Most Popular",
        razorpayLink: "https://rzp.io/l/offline-emi",
        features: [
          "Flexible payment plan",
          "Campus facilities & hands-on projects",
          "Career placement support",
        ],
      },
      {
        title: "Pay Now (Job Assurance)",
        price: "₹1,77,000",
        razorpayLink: "https://rzp.io/l/offline-ja-paynow",
        features: [
          "Job assurance post completion",
          "Offline training with mentorship",
          "Access to recorded sessions",
        ],
      },
      {
        title: "EMI Option (Job Assurance)",
        price: "₹11,667/month",
        subtitle: "for 12 months",
        razorpayLink: "https://rzp.io/l/offline-ja-emi",
        features: [
          "No cost EMI available",
          "Flexible payment support",
          "Offline classroom program",
        ],
      },
    ],
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
          Flexible Payment Options
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
          {plans[mode].map((plan, index) => (
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

export default CoursePriceSection;
