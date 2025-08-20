'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

const facultyList = [
  {
    name: 'Deepesh Wadhwani',
    role: 'Director & Principal Faculty',
    description: 'With 10+ years of experience in leadership and mentoring students for tech careers.',
    image: '/Dummy.png',
  },
  {
    name: 'Shivesh Kumar',
    role: 'Senior Faculty',
    description: 'Expert in Data Structures and Algorithms, with hands-on industry knowledge.',
    image: '/Dummy.png',
  },
  {
    name: 'Manish Lohar',
    role: 'Senior Faculty',
    description: 'Specializes in backend development and system design concepts.',
    image: '/Dummy.png',
  },
  {
    name: 'Ayush Raj',
    role: 'Senior Faculty',
    description: 'Front-end enthusiast with a flair for building interactive UI experiences.',
    image: '/Dummy.png',
  },
];

const FacultySection = () => {
  return (
    <section className="py-16 bg-yellow-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-orange-500 text-center mb-12">
          About Faculty
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
        >
          {facultyList.map((faculty, index) => (
            <SwiperSlide key={index}>
              <div className="text-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 h-full mx-2">
                <div className="relative w-60 h-60 mx-auto mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={faculty.image}
                    alt={faculty.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{faculty.name}</h3>
                <p className="text-gray-600">{faculty.role}</p>
                <p className="text-gray-500 mt-2 text-sm">{faculty.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FacultySection;
