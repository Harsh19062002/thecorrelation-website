"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Import technology icons (✅ verified names)
import {
  SiPython,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
  SiPytorch,
  SiTableau,
  SiMysql,
  SiMongodb,
  SiJupyter,
  SiGit,
  SiGithub,
  SiAnaconda,
  SiGooglecloud,
  SiAmazon,
  SiVisualstudio, // ✅ Corrected icon
  SiKaggle,
  SiOpencv,
} from "react-icons/si";
import { FaChartLine, FaChartBar, FaBrain, FaRobot } from "react-icons/fa";
import { PiMathOperationsBold } from "react-icons/pi";

const Tools = () => {
  const tools = [
    { icon: <SiPython className="text-blue-500 text-5xl" />, name: "Python" },
    { icon: <SiNumpy className="text-blue-400 text-5xl" />, name: "NumPy" },
    { icon: <SiPandas className="text-purple-500 text-5xl" />, name: "Pandas" },
    { icon: <SiScikitlearn className="text-orange-500 text-5xl" />, name: "Scikit-Learn" },
    { icon: <SiTensorflow className="text-orange-600 text-5xl" />, name: "TensorFlow" },
    { icon: <SiKeras className="text-red-500 text-5xl" />, name: "Keras" },
    { icon: <SiPytorch className="text-red-600 text-5xl" />, name: "PyTorch" },
    { icon: <SiMysql className="text-blue-600 text-5xl" />, name: "MySQL" },
    { icon: <SiMongodb className="text-green-600 text-5xl" />, name: "MongoDB" },
    { icon: <SiJupyter className="text-orange-400 text-5xl" />, name: "Jupyter Notebook" },
    { icon: <SiTableau className="text-blue-700 text-5xl" />, name: "Tableau" },
    { icon: <FaChartBar className="text-yellow-500 text-5xl" />, name: "Power BI" },
    { icon: <SiAnaconda className="text-green-500 text-5xl" />, name: "Anaconda" },
    { icon: <SiGit className="text-orange-600 text-5xl" />, name: "Git" },
    { icon: <SiGithub className="text-gray-800 text-5xl" />, name: "GitHub" },
    { icon: <SiGooglecloud className="text-blue-500 text-5xl" />, name: "Google Cloud" },
    { icon: <SiAmazon className="text-yellow-600 text-5xl" />, name: "AWS" },
   
    { icon: <SiKaggle className="text-blue-400 text-5xl" />, name: "Kaggle" },
    { icon: <SiOpencv className="text-green-500 text-5xl" />, name: "OpenCV" },
    { icon: <FaRobot className="text-gray-600 text-5xl" />, name: "AI Robotics" },
    { icon: <FaBrain className="text-pink-500 text-5xl" />, name: "Deep Learning" },
    { icon: <PiMathOperationsBold className="text-purple-600 text-5xl" />, name: "Mathematics" },
    { icon: <FaChartLine className="text-green-700 text-5xl" />, name: "Business Analytics" },
  ];

  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black  mb-12  ">
          Tools and Technologies Covered
        </h2>

        {/* Swiper Section */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={30}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
          }}
        >
          {tools.map((tool, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center p-4 bg-white rounded-xl hover:shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer">
                {tool.icon}
                <p className="text-sm mt-2 text-gray-700 font-semibold text-center">
                  {tool.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Tools;
