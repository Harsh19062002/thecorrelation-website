'use client';

import React from 'react';
import { Play } from 'lucide-react';

export default function LogicBoxSection() {
  return (
    <section className="bg-gray-100 flex items-center justify-center px-4 py-10 md:p-8">
  <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden w-full">
    
    <div className="grid grid-cols-1 md:grid-cols-2">
      
      {/* Video Section */}
      <div className="flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md aspect-video">
          <video
            className="w-full h-full object-cover rounded-lg shadow-lg"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/Logic-Box.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center px-4 py-6 sm:p-8 lg:p-14 xl:p-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
          The Logic Box
        </h2>

        <p className="text-base sm:text-lg lg:text-lg xl:text-2xl text-gray-600 font-medium text-justify">
          Unlock your potential with our Logic Box! Includes five essential data
          science books, a task-tracking notebook, a stationery pouch, lemon tea,
          and a chic mug. Boost your productivity and elevate your daily
          experience!
        </p>
      </div>
    </div>
  </div>
</section>

  );
}
