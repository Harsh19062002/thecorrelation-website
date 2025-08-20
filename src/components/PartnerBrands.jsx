'use client'; // for App Router – remove this line if using Pages Router

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const partnerLogos = [
  {
    src: "/Dummy.png",
    alt: "Microsoft",
  },
  {
    src: "/Dummy.png",
    alt: "Google",
  },
  {
    src: "/Dummy.png",
    alt: "Amazon",
  },
  {
    src: "/Dummy.png",
    alt: "Accenture",
  },
  {
    src: "/Dummy.png",
    alt: "Infosys",
  },
  {
    src: "/Dummy.png",
    alt: "IBM",
  },
  {
    src: "/Dummy.png",
    alt: "TCS",
  },
  {
    src: "/Dummy.png",
    alt: "Deloitte",
  },
  {
    src: "/Dummy.png",
    alt: "Wipro",
  },
  {
    src: "/Dummy.png",
    alt: "Capgemini",
  },
];

const PartnerBrands = () => {
  return (
    <section className="py-16 bg-yellow-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-orange-500 mb-10">
          Our Trusted Partners
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {partnerLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={64}
                  className="object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnerBrands;
