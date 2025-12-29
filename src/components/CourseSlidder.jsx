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
    id: 2,
    title: "Post Graduation Program",
    description:
      "Gain in-depth expertise in data science with a curriculum covering Python, SQL, statistics, machine learning, and advanced analytics. Work on live projects, receive 1:1 mentorship, and prepare for top analytical roles with job assistance and industry exposure.",
    duration: "12 months",
    highlights: [
      "100+ Live Projects",
      "1:1 Mentorship",
      "Industry Certification",
      "24/7 Support",
    ],
    tags: ["PGP","Data Science"],
    image: "/Post-Graduate-course.jpg",
    link: "/courses/post-graduation-program",
    alt: "Post Graduation Program - 12 months advanced data science course with job guarantee",
  },
  {
    id: 3,
    title: "Chartered Data Science",
    description:
      "A globally recognized chartered program for data professionals. Master advanced machine learning, deep learning, AI strategy, and data engineering through real-world projects, executive mentorship, and international certification.",
    duration: "12 months",
    highlights: [
      "Executive Training",
      "Global Certification",
      "Industry Connect",
      "Premium Support",
    ],
    tags: ["Chartered","Data Science"],
    image: "/Chartered-Data-course.jpg",
    link: "/courses/chartered-data-science",
    alt: "Chartered Data Science - 18 months international chartered data science program",
  },
  {
    id: 4,
    title: "Chartered Business Analytics",
    description:
      "Build leadership and decision-making expertise with this chartered business analytics program. Learn from industry leaders, analyze real-world business problems, and master data-driven strategies for business growth.",
    duration: "6 months",
    highlights: [
      "C-Suite Mentorship",
      "Strategic Thinking",
      "Business Case Studies",
      "Executive Training",
    ],
    tags: ["Chartered","Business Analytics"],
    image: "/Chartered-Data-course.jpg",
    link: "/courses/chartered-business-analytics", // ✅ FIXED
    alt: "Chartered Business Analytics - 15 months advanced leadership program in analytics",
  },
  {
    id: 5,
    title: "Applied Data Analytics",
    description:
      "Learn to apply data science techniques to solve real-world business challenges. Build expertise in Python, statistics, machine learning, and data visualization through hands-on projects and mentorship.",
    duration: "3 months",
    highlights: [
      "Practical Projects",
      "Mentorship Sessions",
      "Data Visualization",
      "Machine Learning Tools",
    ],
    tags: ["Certification","Analytics",  ],
    image: "/Applied-Data-Analytics-course.jpg",
    link: "/courses/applied-data-analytics",
    alt: "Applied Data Analytics - 10 months practical data science certification program",
  },
  {
    id: 6,
    title: "Foundational Machine Learning",
    description:
      "Start your machine learning journey with supervised, unsupervised, and reinforcement learning fundamentals. Perfect for beginners looking to break into AI and ML roles.",
    duration: "3 months",
    highlights: [
      "ML Fundamentals",
      "Supervised & Unsupervised Learning",
      "Python & Scikit-learn",
      "Real-World Projects",
    ],
    tags: ["Certification", "ML Basics", "Career Growth"],
    image: "/Foundational-Machine-course.jpg",
    link: "/courses/foundational-machine-learning",
    alt: "Foundational Machine Learning - 8 months beginner-friendly ML course",
  },
  {
    id: 7,
    title: "Advanced Machine Learning",
    description:
      "Deepen your AI knowledge with reinforcement learning, NLP, and generative models. Designed for learners with prior ML experience to specialize in high-end AI applications and research.",
    duration: "3 months",
    highlights: [
      "Reinforcement Learning",
      "NLP & Transformers",
      "AI Research",
      "Advanced ML Projects",
    ],
    tags: ["Certification", "Advanced"],
    image: "/Advance-Machine-course.jpg",
    link: "/courses/advanced-machine-learning",
    alt: "Advanced Machine Learning - 12 months research-driven AI specialization program",
  },
  {
    id: 8,
    title: "Deep Learning with Generative AI",
    description:
      "Master deep learning architectures like CNNs, RNNs, and Transformers while exploring Generative AI models such as GANs and diffusion models. Learn to create AI systems that innovate.",
    duration: "4 months",
    highlights: [
      "Deep Neural Networks",
      "Generative AI",
      "Transformer Models",
      "Hands-on Projects",
    ],
    tags: ["Certification", "Deep Learning"],
    image: "/Deep-Learning-course.jpg",
    link: "/courses/deep-learning-with-generative-ai",
    alt: "Deep Learning with Generative AI - 10 months advanced AI and DL certification program",
  },
  {
    id: 9,
    title: "Career Acceleration",
    description:
      "Accelerate your career with focused data and AI learning, resume building, and interview preparation. Ideal for beginners and professionals aiming to quickly transition into the data domain.",
    duration: "4 months",
    highlights: [
      "Intensive Bootcamp",
      "Placement Training",
      "Career Guidance",
      "Resume Building",
    ],
    tags: ["Certification","Career Boost"],
    image: "/Career-Acceleration-course.jpg",
    link: "/courses/career-acceleration",
    alt: "Career Acceleration - 4 months job-focused data career training",
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

  // 🔹 Newly Added Tags
  PGP: "bg-indigo-100 text-indigo-800",
  "Career Boost": "bg-fuchsia-100 text-fuchsia-800",
  Flexible: "bg-sky-100 text-sky-800",
  "Data Science": "bg-violet-100 text-violet-800",
  "Business Analytics": "bg-teal-100 text-teal-800",
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
        className="w-full h-56 object-cover rounded-xl"
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