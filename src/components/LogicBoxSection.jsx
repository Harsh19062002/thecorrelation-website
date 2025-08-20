'use client';

import React from 'react';
import { Play } from 'lucide-react';

export default function LogicBoxSection() {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
          {/* Video Section */}
          <div className="flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <video
              className="w-full max-w-md h-64 sm:h-72 lg:h-80 object-cover rounded-lg shadow-lg"
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center rounded-lg">
                <div className="text-white text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <p className="text-sm sm:text-lg font-medium">Video Preview</p>
                </div>
              </div>
            </video>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-16 xl:p-20">
            <h2 className="text-xl sm:text-xl lg:text-2xl xl:text-6xl font-bold text-gray-900 mb-6 lg:mb-8 xl:mb-10 leading-tight">
              The Logic Box
            </h2>
            <p className="text-base sm:text-lg lg:text-lg xl:text-2xl text-gray-600 font-medium [text-align:justify]">
  Unlock your potential with our Logic Box! Includes five essential data science books, a task-tracking notebook, a stationery pouch, lemon tea and a chic mug. Boost your productivity and elevate your daily experience!
</p>

          </div>
        </div>
      </div>
    </section>
  );
}
