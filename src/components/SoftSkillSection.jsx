'use client';

import React from 'react';
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
      gradient: 'bg-gradient-to-br from-indigo-400 to-purple-600',
    },
    {
      icon: <Code2 className="w-6 h-6 text-white" />,
      title: 'Interview Skills',
      desc: 'Learn to present yourself professionally, answer common and complex interview questions effectively, and make a lasting impression on potential employers.',
      gradient: 'bg-gradient-to-br from-pink-400 to-rose-500',
    },
    {
      icon: <LineChart className="w-6 h-6 text-white" />,
      title: 'Resume Building',
      desc: 'Create impactful resumes and digital portfolios that showcase your skills, experience, and personal brand, tailored for your target industry.',
      gradient: 'bg-gradient-to-br from-sky-400 to-cyan-400',
    },
    {
      icon: <Settings className="w-6 h-6 text-white" />,
      title: 'Group Discussion',
      desc: 'Master group communication with active listening, logical structuring, conflict resolution, and assertive yet respectful participation techniques.',
      gradient: 'bg-gradient-to-br from-emerald-400 to-teal-300',
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: 'Personal Branding',
      desc: 'Build a strong professional identity online and offline, understand how to market your unique strengths, and grow your network strategically.',
      gradient: 'bg-gradient-to-br from-pink-400 to-yellow-300',
    },
    {
      icon: <BarChart className="w-6 h-6 text-white" />,
      title: 'Time Management',
      desc: 'Prioritize tasks, set realistic goals, and implement productivity frameworks like Pomodoro and Eisenhower Matrix for efficient daily planning.',
      gradient: 'bg-gradient-to-br from-teal-200 to-pink-200',
    },
  ];

  return (
    <section className="py-16 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Master Communication & Career Readiness
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Develop essential professional and personal skills to stand out and succeed in your career journey.
        </p>
      </div>

      <div className="relative group">
        {/* Navigation Buttons */}
        <div className="hidden md:flex justify-between items-center absolute top-1/2 left-0 right-0 z-10 px-4 -translate-y-1/2 pointer-events-none">
  <div className="swiper-button-prev pointer-events-auto cursor-pointer hover:scale-110 transition duration-200 flex items-center justify-center">
    <ArrowLeft className="w-5 h-5 font-bold text-black" />
  </div>
  <div className="swiper-button-next pointer-events-auto cursor-pointer hover:scale-110 transition duration-200 flex items-center justify-center">
    <ArrowRight className="w-5 h-5 font-bold text-black" />
  </div>
</div>




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
            1024: { slidesPerView: 3 },
          }}
          className="!overflow-visible px-1"
        >
          {cards.map((card, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={`${card.gradient} h-[250px] md:h-[250px] rounded-2xl text-white p-6 px-2 shadow-xl transition-transform transform hover:-translate-y-2`}
              >
                <div className="mb-5 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/30 flex items-center justify-center">
                    {card.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">{card.title}</h3>
                <p className="text-sm text-center leading-relaxed">{card.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
