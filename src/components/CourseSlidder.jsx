"use client";

import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Eye,
} from "lucide-react";

// Course data with SEO-optimized content
const courses = [
  {
    id: 1,
    title: "Post Graduate Program in Applied Data Science",
    description:
      "Master data science with hands‑on projects and industry mentorship",
    duration: "12 months",
    highlights: [
      "100+ Live Projects",
      "1:1 Mentorship",
      "Industry Certification",
      "24/7 Support",
    ],
    tags: ["Job Guarantee", "Certification", "Live Projects"],
    image: "/Dummy.png",
    link: "/courses/applied-data-science",
    alt: "Post Graduate Program in Applied Data Science - 12 months course with job guarantee",
  },
  {
    id: 2,
    title: "Certification Program in Data Analytics",
    description: "Learn analytics fundamentals with real‑world case studies",
    duration: "6 months",
    highlights: [
      "50+ Case Studies",
      "Industry Tools",
      "Career Support",
      "Doubt Sessions",
    ],
    tags: ["Internship", "Career Growth", "Certification"],
    image: "/Dummy.png",
    link: "/courses/data-analytics",
    alt: "Certification Program in Data Analytics - 6 months with internship opportunity",
  },
  {
    id: 3,
    title: "Post Graduate Program in Machine Learning",
    description: "Deep dive into ML algorithms and AI applications",
    duration: "10 months",
    highlights: [
      "Deep Learning",
      "Neural Networks",
      "AI Projects",
      "Research Papers",
    ],
    tags: ["Job Guarantee", "Advanced", "AI Focus"],
    image: "/Dummy.png",
    link: "/courses/machine-learning",
    alt: "Post Graduate Program in Machine Learning - Advanced 10 months AI course",
  },
  {
    id: 4,
    title: "Chartered Data Science",
    description: "Comprehensive program for data science mastery",
    duration: "18 months",
    highlights: [
      "Executive Training",
      "Industry Connect",
      "Premium Support",
      "Global Recognition",
    ],
    tags: ["Chartered", "Premium", "Certification"],
    image: "/Dummy.png",
    link: "/courses/chartered-data-science",
    alt: "Chartered Data Science - Premium 18 months program with global recognition",
  },
  {
    id: 5,
    title: "Chartered Business Analytics",
    description: "Strategic analytics for business transformation",
    duration: "15 months",
    highlights: [
      "Business Strategy",
      "Leadership Skills",
      "Case Studies",
      "C‑Suite Mentoring",
    ],
    tags: ["Business Focus", "Strategy", "Leadership"],
    image: "/Dummy.png",
    link: "/courses/chartered-business-analytics",
    alt: "Chartered Business Analytics - 15 months strategic analytics program",
  },
  {
    id: 6,
    title: "Advanced AI & ML",
    description: "Cutting‑edge artificial intelligence and machine learning",
    duration: "14 months",
    highlights: [
      "Research Projects",
      "AI Innovation",
      "Publication Support",
      "Tech Leadership",
    ],
    tags: ["AI", "Research", "Innovation"],
    image: "/Dummy.png",
    link: "/courses/advanced-ai-ml",
    alt: "Advanced AI & ML - 14 months cutting-edge artificial intelligence program",
  },
  {
    id: 7,
    title: "Career Acceleration Program",
    description: "Fast‑track your data career with intensive training",
    duration: "4 months",
    highlights: [
      "Intensive Training",
      "Job Placement",
      "Resume Building",
      "Interview Prep",
    ],
    tags: ["Fast Track", "Career Focus", "Job Ready"],
    image: "/Dummy.png",
    link: "/courses/career-acceleration",
    alt: "Career Acceleration Program - 4 months fast-track training with job placement",
  },
];

const tagColors = {
  "Job Guarantee": "bg-green-100 text-green-800",
  Internship: "bg-blue-100 text-blue-800",
  "Career Growth": "bg-purple-100 text-purple-800",
  Certification: "bg-orange-100 text-orange-800",
  Advanced: "bg-red-100 text-red-800",
  "AI Focus": "bg-indigo-100 text-indigo-800",
  Chartered: "bg-yellow-100 text-yellow-800",
  Premium: "bg-pink-100 text-pink-800",
  "Business Focus": "bg-teal-100 text-teal-800",
  Strategy: "bg-cyan-100 text-cyan-800",
  Leadership: "bg-emerald-100 text-emerald-800",
  AI: "bg-violet-100 text-violet-800",
  Research: "bg-slate-100 text-slate-800",
  Innovation: "bg-lime-100 text-lime-800",
  "Fast Track": "bg-rose-100 text-rose-800",
  "Career Focus": "bg-amber-100 text-amber-800",
  "Job Ready": "bg-green-100 text-green-800",
  "Live Projects": "bg-blue-100 text-blue-800",
};

// Memoized CourseCard component for performance optimization
const CourseCard = memo(({ course }) => (
  <article 
    className="bg-black/20 backdrop-blur-lg rounded-xl p-6 mt-4 mb-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full min-h-[600px]"
    itemScope
    itemType="https://schema.org/Course"
  >
    <div className="relative mb-4">
      <Image
        src={course.image}
        alt={course.alt}
        width={320}
        height={192}
        className="w-full h-48 object-cover rounded-xl"
        loading="lazy"
        quality={85}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute top-3 left-3 flex flex-wrap gap-1" role="list" aria-label="Course tags">
        {course.tags.slice(0, 2).map((tag, i) => (
          <span
            key={i}
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              tagColors[tag] || "bg-gray-100 text-gray-800"
            }`}
            role="listitem"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
    
    <div className="mb-4 flex-grow">
      <h3 className="text-2xl font-semibold text-white mb-2" itemProp="name">
        {course.title}
      </h3>
      <p className="text-white text-sm leading-relaxed mb-3" itemProp="description">
        {course.description}
      </p>
      <div className="flex items-center text-white text-sm mb-4">
        <Clock className="w-4 h-4" aria-hidden="true" />
        <span className="ml-2" itemProp="timeRequired">{course.duration}</span>
      </div>
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-white mb-2">
          Key Highlights:
        </h4>
        <ul className="grid grid-cols-2 gap-1 text-xs text-white" itemProp="coursePrerequisites">
          {course.highlights.map((h, i) => (
            <li key={i} className="flex items-center">
              <span className="w-1.5 h-1.5 bg-white rounded-full mr-2" aria-hidden="true"></span>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
    
    <div className="flex justify-center mt-auto">
      <Link 
        href={course.link}
        className="flex items-center gap-2 px-6 py-2 bg-white text-black border-2 border-white font-bold text-md rounded-full shadow-md transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
        aria-label={`Explore ${course.title} course details`}
        itemProp="url"
      >
        <Eye className="w-4 h-4" aria-hidden="true" />
        <span>Explore</span>
      </Link>
    </div>
    
    {/* Schema.org structured data */}
    <meta itemProp="provider" content="Your Company Name" />
    <meta itemProp="educationalLevel" content="Professional" />
  </article>
));

CourseCard.displayName = 'CourseCard';

const CourseSlider = () => {
  return (
    <section 
      className="py-16 bg-[linear-gradient(135deg,#7b25d1,#ff2626,#910000)]"
      aria-labelledby="courses-heading"
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 
            id="courses-heading" 
            className="text-3xl font-bold text-center text-white mb-4"
          >
            Our Popular Courses
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Transform your career with industry-leading programs designed by
            experts and trusted by professionals worldwide.
          </p>
        </header>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          autoplay={{ 
            delay: 2500, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true 
          }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          aria-label="Course carousel"
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id} className="h-auto">
              <CourseCard course={course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default memo(CourseSlider);