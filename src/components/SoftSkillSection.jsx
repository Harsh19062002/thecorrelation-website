'use client';

import { useState, useEffect } from 'react';
import {
  Code2,
  LineChart,
  BarChart,
  Brain,
  Settings,
  Zap,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function CommunicationCarousel() {
  const cards = [
    {
      icon: <Brain className="w-6 h-6 text-white" />,
      title: 'Soft Skills',
      desc: 'Develop confidence, leadership, public speaking, emotional intelligence, and interpersonal communication to thrive in team environments and build meaningful relationships.',
    },
    {
      icon: <Code2 className="w-6 h-6 text-white" />,
      title: 'Interview Skills',
      desc: 'Learn to present yourself professionally, answer common and complex interview questions effectively, and make a lasting impression on potential employers.',
    },
    {
      icon: <LineChart className="w-6 h-6 text-white" />,
      title: 'Resume Building',
      desc: 'Create impactful resumes and digital portfolios that showcase your skills, experience, and personal brand, tailored for your target industry.',
    },
    {
      icon: <Settings className="w-6 h-6 text-white" />,
      title: 'Group Discussion',
      desc: 'Master group communication with active listening, logical structuring, conflict resolution, and assertive yet respectful participation techniques.',
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: 'Personal Branding',
      desc: 'Build a strong professional identity online and offline, understand how to market your unique strengths, and grow your network strategically.',
    },
    {
      icon: <BarChart className="w-6 h-6 text-white" />,
      title: 'Time Management',
      desc: 'Prioritize tasks, set realistic goals, and implement productivity frameworks like Pomodoro and Eisenhower Matrix for efficient daily planning.',
    },
  ];

  return (
    <section className="py-16 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Master Communication & Career Readiness
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Develop essential professional and personal skills to stand out and succeed in your career journey.
        </p>
      </div>

      <div className="relative group  px-6 sm:px-8 lg:px-12">
        {/* Navigation Buttons */}
        

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="!overflow-visible px-1"
        >
          {cards.map((card, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white  h-[250px] md:h-[250px] rounded-2xl p-6 px-2 shadow-xl transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="mb-5 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center">
                    {card.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center text-gray-900">
                  {card.title}
                </h3>
                <p className="text-sm text-center leading-relaxed text-gray-600">
                  {card.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}