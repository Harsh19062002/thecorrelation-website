"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const certificates = [
  { image: "/PGP-E-Certificate.png", name: "Post Graduate Program" },
  {
    image: "/Foundation-ML-E-Certificate.png",
    name: "Foundation in Machine Learning",
  },
  { image: "/Adv-ML-E-Certificate.png", name: "Advanced Machine Learning" },
  { image: "/Data-Analytics-E-Certificate.png", name: "Data Analytics" },
  { image: "/DL-and-GenAI-E-Certificate.png", name: "Deep Learning & GenAI" },
  {
    image: "/Business-Analytics-Analytics-E-Certificate.png",
    name: "Business Analytics",
  },
];

const CertificateSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certificates.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + certificates.length) % certificates.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const getVisibleCertificates = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index =
        (currentIndex + i + certificates.length) % certificates.length;
      visible.push({ ...certificates[index], offset: i, index });
    }
    return visible;
  };

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Your Certificates
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Industry-recognized certifications to boost your career
        </p>

        {/* Carousel Container */}
        <div className="relative mb-16">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all"
            aria-label="Previous certificate"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all"
            aria-label="Next certificate"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
          </button>

          {/* Certificates Display - Responsive: Mobile (1 cert), Tablet (2-3 certs), Desktop (4 certs) */}
          <div className="relative h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] flex items-center justify-center overflow-hidden px-4">
            {getVisibleCertificates().map((cert, idx) => {
              const isCenter = cert.offset === 0;
              const isNearby = Math.abs(cert.offset) === 1;

              // Responsive scaling and positioning
              let scale, opacity, translateX, translateY;

              // Mobile: Show only center certificate prominently
              if (window.innerWidth < 640) {
                scale = isCenter ? 1 : 0.6;
                opacity = isCenter ? 1 : 0.3;
                translateX = cert.offset * 200;
                translateY = 0;
              }
              // Tablet: Show 2-3 certificates
              else if (window.innerWidth < 1024) {
                scale = isCenter ? 1 : isNearby ? 0.75 : 0.5;
                opacity = isCenter ? 1 : isNearby ? 0.6 : 0.2;
                translateX = cert.offset * 240;
                translateY = isCenter ? -10 : 0;
              }
              // Desktop: Show 4 certificates
              else {
                scale = isCenter ? 1.1 : isNearby ? 0.85 : 0.7;
                opacity = isCenter ? 1 : isNearby ? 0.7 : 0.3;
                translateX = cert.offset * 280;
                translateY = isCenter ? -20 : 0;
              }

              const zIndex = 10 - Math.abs(cert.offset);

              return (
                <div
                  key={`${cert.index}-${idx}`}
                  className="absolute transition-all duration-500 ease-out cursor-pointer"
                  style={{
                    transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
                    opacity: opacity,
                    zIndex: zIndex,
                  }}
                  onClick={() => !isCenter && goToSlide(cert.index)}
                >
                  <div
                    className={`inline-block rounded-lg md:rounded-xl shadow-xl overflow-hidden transition-all ${
                      isCenter
                        ? "ring-2 md:ring-4 ring-yellow-500 shadow-2xl"
                        : ""
                    }`}
                  >
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="block object-cover w-full
               max-w-[220px]
               sm:max-w-[220px]
               md:max-w-[300px]
               lg:max-w-[320px]"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Certificate Name */}
          <div className="text-center mt-6 md:mt-8 px-4">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">
              {certificates[currentIndex].name}
            </h3>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4 md:mt-6">
            {certificates.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2 md:h-3 rounded-full transition-all ${
                  idx === currentIndex
                    ? "bg-red-600 w-6 md:w-8"
                    : "bg-gray-300 hover:bg-gray-400 w-2 md:w-3"
                }`}
                aria-label={`Go to certificate ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Certificate Benefits */}
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800 text-center">
            Certificate Benefits
          </h3>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {[
              "Verified by Experts: Industry-recognized certification",
              "LinkedIn Shareable: Boost your professional profile",
              "Resume Booster: Stand out to employers",
              "Career Advancement: Open doors to better opportunities",
            ].map((text, i) => (
              <div key={i} className="flex items-start">
                <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                <span className="text-sm md:text-base text-gray-700">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
