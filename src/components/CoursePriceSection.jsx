"use client"; // Needed if using Next.js App Router

import React, { useState } from 'react';
import {Check} from 'lucide-react';

const CoursePriceSection = () => {

  const [mode, setMode] = useState('online');

  const plans = {
  online: [
    {
      title: 'Pay Now',
      price: '₹89,999',
      bg: 'from-blue-50 to-blue-100',
      border: 'border-blue-200',
      text: 'text-blue-900',
      button: 'bg-blue-600 hover:bg-blue-700',
      features: ['Save ₹30,000', 'Lifetime access', 'Priority support'],
    },
    {
      title: 'EMI Option',
      price: '₹9,999/month',
      subtitle: 'for 12 months',
      highlight: 'Most Popular',
      bg: 'from-green-50 to-green-100',
      border: 'border-green-200',
      text: 'text-green-900',
      button: 'bg-green-600 hover:bg-green-700',
      features: ['0% interest for 6 months', 'No hidden charges', 'Flexible payment'],
    },
  ],
  offline: [
    {
      title: 'Pay Now',
      price: '₹1,49,999',
      bg: 'from-blue-50 to-blue-100',
      border: 'border-blue-200',
      text: 'text-blue-900',
      button: 'bg-blue-600 hover:bg-blue-700',
      features: ['Save ₹50,000', 'In-person classes', 'Lab access'],
    },
    {
      title: 'EMI Option',
      price: '₹16,666/month',
      subtitle: 'for 12 months',
      highlight: 'Most Popular',
      bg: 'from-green-50 to-green-100',
      border: 'border-green-200',
      text: 'text-green-900',
      button: 'bg-green-600 hover:bg-green-700',
      features: ['0% interest for 6 months', 'Campus facilities', 'Peer networking'],
    },
  ],
};

  return (
    <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
              Flexible Payment Options
            </h2>
    
            {/* Toggle Button */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex p-1 bg-gray-200 rounded-full">
                {['online', 'offline'].map((tab) => (
                  <button
                    key={tab}
                    className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      mode === tab ? 'bg-white shadow text-blue-600' : 'text-gray-600'
                    }`}
                    onClick={() => setMode(tab)}
                  >
                    {tab === 'online' ? 'Online Program' : 'Offline Program'}
                  </button>
                ))}
              </div>
            </div>
    
            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {plans[mode].map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br ${plan.bg} p-8 rounded-2xl border-2 ${plan.border} transform transition-transform hover:-translate-y-2 shadow-lg`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        {plan.highlight}
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className={`text-2xl font-bold mb-2 ${plan.text}`}>{plan.title}</h3>
                    <div className={`text-4xl font-bold mb-1 ${plan.text}`}>{plan.price}</div>
                    {plan.subtitle && <p className={`text-sm mb-4 ${plan.text}`}>{plan.subtitle}</p>}
                    <ul className="text-left space-y-3 my-6">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <Check className="w-5 h-5 text-green-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`w-full ${plan.button} text-white py-3 rounded-lg font-semibold transition-colors`}
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    
  );
}



export default CoursePriceSection;
