'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  Award,
  Brain,
  BarChart,
  Cpu,
  Database,
  CheckCircle
} from 'lucide-react';

const certificates = [
  {
    icon: <Award className="w-16 h-16 mx-auto mb-4" />,
    title: 'Chartered Data Scientist',
    subtitle: 'Professional Certification',
    bg: 'from-purple-600 to-blue-600',
    id: '#CDS-2024-001',
  },
  {
    icon: <Brain className="w-16 h-16 mx-auto mb-4" />,
    title: 'Machine Learning Expert',
    subtitle: 'Advanced ML Certification',
    bg: 'from-green-600 to-teal-600',
    id: '#MLE-2024-001',
  },
  {
    icon: <BarChart className="w-16 h-16 mx-auto mb-4" />,
    title: 'Data Analytics Pro',
    subtitle: 'Analytics Specialization',
    bg: 'from-orange-600 to-red-600',
    id: '#DAP-2024-001',
  },
  {
    icon: <Cpu className="w-16 h-16 mx-auto mb-4" />,
    title: 'AI & GenAI Specialist',
    subtitle: 'Artificial Intelligence Expert',
    bg: 'from-indigo-600 to-purple-600',
    id: '#AIS-2024-001',
  },
  {
    icon: <Database className="w-16 h-16 mx-auto mb-4" />,
    title: 'Big Data Engineer',
    subtitle: 'Data Engineering Mastery',
    bg: 'from-pink-600 to-rose-600',
    id: '#BDE-2024-001',
  },
];

const CertificateSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % certificates.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Your Certificate
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Slider */}
          <div className="relative overflow-hidden rounded-lg">
            <div
              className="certificate-slider flex transition-transform duration-500 ease-in-out"
              ref={sliderRef}
            >
              {certificates.map((cert, idx) => (
                <div
                  key={idx}
                  className={`certificate-slide min-w-full bg-gradient-to-br ${cert.bg} text-white p-8 rounded-lg shadow-lg`}
                >
                  <div className="text-center">
                    {cert.icon}
                    <h3 className="text-2xl font-bold mb-4">{cert.title}</h3>
                    <p className="text-lg">{cert.subtitle}</p>
                    <div className="mt-6 p-4 bg-white bg-opacity-20 rounded-lg">
                      <p className="text-sm text-black">Certificate {cert.id}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Dots */}
            
          </div>

          {/* Certificate Benefits */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Certificate Benefits</h3>
            <ul className="space-y-4">
              {[
                'Verified by Experts: Industry-recognized certification',
                'LinkedIn Shareable: Boost your professional profile',
                'Resume Booster: Stand out to employers',
                'Career Advancement: Open doors to better opportunities',
              ].map((text, i) => (
                <li key={i} className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" />
                  <span dangerouslySetInnerHTML={{ __html: text.replace(/: /, '</strong>: ') }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
