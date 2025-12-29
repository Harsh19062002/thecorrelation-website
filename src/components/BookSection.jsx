// components/BookSlider.jsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { defaultSliderConfig } from '@/data/courseData';

const BookSlider = ({ config = defaultSliderConfig }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const timerRef = useRef(null);

  const { mainHeading, subheading, books, autoPlayInterval } = {
    ...defaultSliderConfig,
    ...config,
    books: config.books || defaultSliderConfig.books,
  };

  // Auto-play functionality
  useEffect(() => {
    if (autoPlayInterval) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentSlide, autoPlayInterval]);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % books.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + books.length) % books.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStartX.current - touchEndX.current > 50) nextSlide();
    if (touchEndX.current - touchStartX.current > 50) prevSlide();
  };

  const currentBook = books[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white/80 via-gray-100 to-gray-200 py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            {mainHeading}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto px-4">
            {subheading}
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative bg-white/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-2xl">
          <div
            className="min-h-[300px] sm:min-h-[400px] md:min-h-[500px]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Slide Content */}
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center transition-opacity duration-600 ${
                isAnimating ? 'opacity-0' : 'opacity-100'
              }`}
              style={{
                animation: isAnimating ? 'slideIn 0.6s ease-out forwards' : 'none'
              }}
            >
              {/* Left Side: Content */}
              <div className="order-2 lg:order-1 text-gray-900 space-y-4 sm:space-y-6 px-2 sm:px-0">
                <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-200/60 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold text-gray-900">
  {currentBook.highlight}
</div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  {currentBook.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  {currentBook.description}
                </p>
              </div>

              {/* Right Side: Book Cover */}
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="w-full max-w-[280px] sm:max-w-sm aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl transition-all duration-[400ms] ease-in-out hover:scale-105 hover:rotate-2 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.2)]">
                  <Image
                    src={currentBook.imageUrl}
                    alt={currentBook.title}
                    width={400}
                    height={533}
                    className="w-full h-full object-cover"
                    priority={currentSlide === 0}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="hidden sm:flex absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-gray-200/60 text-gray-900 p-2 sm:p-3 md:p-4 rounded-full hover:bg-gray-300/80 focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-gray-400 z-10 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed items-center justify-center"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="hidden sm:flex absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-gray-200/60 text-gray-900 p-2 sm:p-3 md:p-4 rounded-full hover:bg-gray-300/80 focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-gray-400 z-10 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed items-center justify-center"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Mobile Navigation Buttons */}
          <div className="flex sm:hidden justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className="flex items-center justify-center bg-gray-200/60 text-gray-900 p-3 rounded-full hover:bg-gray-300/80 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className="flex items-center justify-center bg-gray-200/60 text-gray-900 p-3 rounded-full hover:bg-gray-300/80 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-6">
            {books.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 hover:bg-gray-400 disabled:cursor-not-allowed ${
                  index === currentSlide ? 'bg-gray-900 scale-125' : 'bg-gray-400/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default BookSlider;
