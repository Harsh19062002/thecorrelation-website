'use client';

import { useEffect, useRef } from 'react';
import { BarChart3, Brain, Briefcase } from 'lucide-react';

export default function CurriculumRoadmap() {
  const containerRef = useRef(null);

  useEffect(() => {
    const updateTimeline = () => {
      const container = containerRef.current;
      if (!container) return;

      const timelineItems = container.querySelectorAll('.timeline-item');
      const progressLine = container.querySelector('.timeline-progress');
      const containerLine = container.querySelector('.timeline-line');

      const containerRect = containerLine.getBoundingClientRect();
      const containerTop = containerRect.top + window.scrollY;
      const containerHeight = containerRect.height;
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      const start = containerTop - windowHeight * 0.8;
      const end = containerTop + containerHeight - windowHeight * 0.2;
      const progress = Math.max(0, Math.min(1, (scrollTop - start) / (end - start)));

      if (progressLine) {
        progressLine.style.height = `${progress * 100}%`;
      }

      timelineItems.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const center = itemRect.top + itemRect.height / 2;
        const isVisible = center < windowHeight * 0.85;
        const icon = item.querySelector('.timeline-icon');

        item.classList.toggle('active', isVisible);
        icon?.classList.toggle('active', isVisible);
      });
    };

    window.addEventListener('scroll', updateTimeline);
    window.addEventListener('resize', updateTimeline);
    setTimeout(updateTimeline, 100);

    return () => {
      window.removeEventListener('scroll', updateTimeline);
      window.removeEventListener('resize', updateTimeline);
    };
  }, []);

  const roadmap = [
    {
      title: 'Data Analytics & BI Tools',
      weeks: 'Month 1–2',
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      color: 'bg-blue-500 text-blue-600',
      points: [
        'Python (NumPy, Pandas, Plotly)',
        'SQL (Joins, Subqueries, Functions)',
        'Power BI Dashboarding',
        'Excel Automation',
      ],
    },
    {
      title: 'Data Science & Statistics',
      weeks: 'Month 3–4',
      icon: <Brain className="w-8 h-8 text-white" />,
      color: 'bg-purple-500 text-purple-600',
      points: [
        'Probability, Permutations, Distributions',
        'Exploratory Data Analysis (EDA)',
        'Supervised & Unsupervised ML',
      ],
    },
    {
      title: 'Business Strategy & Consulting',
      weeks: 'Month 5–6',
      icon: <Briefcase className="w-8 h-8 text-white" />,
      color: 'bg-orange-500 text-orange-600',
      points: [
        'Agile, Scrum, SDLC',
        'Project Management',
        'Business Case Studies',
        'Stakeholder Communication',
      ],
    },
  ];

  return (
    <section className="py-20 bg-white" ref={containerRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          📘 What You'll Learn – Curriculum Roadmap
        </h2>

        <div className="relative max-w-6xl mx-auto timeline-line">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
          <div className="timeline-progress absolute left-1/2 transform -translate-x-1/2 w-1 bg-indigo-500 z-0 transition-all duration-300 ease-linear"></div>

          <div className="space-y-16">
            {roadmap.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="timeline-item flex flex-col md:flex-row items-center gap-8 opacity-30 blur-sm translate-y-8 transition-all duration-700"
                >
                  {/* Left Box */}
                  <div className={`md:w-1/2 ${isLeft ? 'md:text-right' : ''}`}>
                    {isLeft && (
                      <div className="bg-gray-50 rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          {step.points.map((p, i) => (
                            <li key={i}>• {p}</li>
                          ))}
                        </ul>
                        <div className={`mt-3 text-xs font-semibold ${step.color.split(' ')[1]}`}>
                          {step.weeks}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Icon */}
                  <div
                    className={`timeline-icon relative z-10 ${step.color.split(' ')[0]} w-16 h-16 rounded-full flex items-center justify-center shadow-lg`}
                  >
                    {step.icon}
                  </div>

                  {/* Right Box */}
                  <div className={`md:w-1/2 ${!isLeft ? 'md:text-left' : ''}`}>
                    {!isLeft && (
                      <div className="bg-gray-50 rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          {step.points.map((p, i) => (
                            <li key={i}>• {p}</li>
                          ))}
                        </ul>
                        <div className={`mt-3 text-xs font-semibold ${step.color.split(' ')[1]}`}>
                          {step.weeks}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
