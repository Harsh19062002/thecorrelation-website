'use client'; // Only needed if you're using animations or client-side interactivity in App Router

import React from 'react';
import { Phone, BookCheck, Clock } from 'lucide-react';

const steps = [
  {
    icon: <Phone className="w-12 h-12 text-orange-500 mb-4 mx-auto" />,
    title: 'Book a Call',
    description:
      'Schedule a personalized consultation to discuss your data science learning goals and needs.',
  },
  {
    icon: <BookCheck className="w-12 h-12 text-orange-500 mb-4 mx-auto" />,
    title: 'Career Counselling',
    description:
      'Receive expert advice tailored to your career aspirations in data science and development.',
  },
  {
    icon: <Clock className="w-12 h-12 text-orange-500 mb-4 mx-auto" />,
    title: 'Flexible Payment Option',
    description:
      'Choose from various payment plans to suit your financial situation and preferences.',
  },
];

const ProcessSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Process — How To Enroll
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-yellow-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              {step.icon}
              <h3 className="text-xl font-semibold text-orange-600 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
