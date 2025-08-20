'use client';

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  {
    value: 94,
    label: '% Placement Rate',
    color: 'text-blue-600',
  },
  {
    value: 100,
    label: '+ Hiring Partners',
    color: 'text-green-600',
  },
  {
    value: 12,
    label: 'LPA Highest Package',
    color: 'text-purple-600',
  },
  {
    value: 6,
    label: 'Avg Package (LPA)',
    color: 'text-yellow-500',
  },
];

const PlacementSuccess = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // only trigger once
    threshold: 0.3, // fire when 30% of section is visible
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Placement Success
          </h2>
          <p className="text-xl text-gray-600">
            Our students get hired by top companies
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div className="text-center" key={index}>
              <div className={`text-5xl font-bold mb-2 ${stat.color}`}>
                {inView ? <CountUp end={stat.value} duration={2.5} /> : 0}
              </div>
              <p className="text-xl text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementSuccess;
