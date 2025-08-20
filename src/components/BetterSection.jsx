// components/BetterSection.jsx
'use client';
import React from 'react';
import {
  BookOpen,
  Users,
  Clock,
  Briefcase,
} from 'lucide-react';

const BetterSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-orange-500 text-center mb-12">
          Why We Are Better From Others
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center bg-yellow-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <Briefcase className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Career Support</h3>
            <p className="text-gray-600">
              Benefit from personalized career guidance and job placement assistance.
            </p>
          </div>
          <div className="text-center bg-yellow-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <BookOpen className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Curriculum</h3>
            <p className="text-gray-600">
              Our cutting-edge curriculum equips you with industry-relevant skills.
            </p>
          </div>
          <div className="text-center bg-yellow-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Faculty</h3>
            <p className="text-gray-600">
              Learn from industry experts dedicated to your success.
            </p>
          </div>
          <div className="text-center bg-yellow-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Timings</h3>
            <p className="text-gray-600">
              Enjoy convenient class schedules that fit your lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetterSection;
