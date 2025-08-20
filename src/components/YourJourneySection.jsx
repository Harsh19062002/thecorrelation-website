'use client';

import React from 'react';
import {
  UserCheck,
  ClipboardList,
  BadgePercent,
  CreditCard,
  BookOpen,
  Briefcase,
  ShieldCheck,
} from 'lucide-react';

const YourJourneySection = () => {
  const steps = [
    {
      title: 'Step 1',
      heading: 'Connect with Our Experts',
      desc: 'Schedule a free one-on-one consultation with our experienced mentors. They’ll guide you through career possibilities, explain the curriculum structure, and ensure the program aligns with your aspirations.',
      color: 'bg-blue-500',
      icon: <UserCheck className="w-14 h-14 text-white" />,
    },
    {
      title: 'Step 2',
      heading: 'Registration & Profile Evaluation',
      desc: 'Complete your registration and submit your profile. Our admission team will thoroughly assess your background, interests, and goals to ensure you’re a strong fit for the program.',
      color: 'bg-green-500',
      icon: <ClipboardList className="w-14 h-14 text-white" />,
    },
    {
      title: 'Step 3',
      heading: 'Scholarship Assessment',
      desc: 'Participate in an aptitude and profile-based assessment to unlock merit scholarships. This step helps determine your eligibility for financial aid and awards based on your skills and potential.',
      color: 'bg-yellow-500',
      icon: <BadgePercent className="w-14 h-14 text-white" />,
    },
    {
      title: 'Step 4',
      heading: 'Fee & EMI Options',
      desc: 'Explore personalized fee structures and benefit from flexible EMI options tailored to your budget. We’ll ensure that finances don’t become a barrier to your learning journey.',
      color: 'bg-red-500',
      icon: <CreditCard className="w-14 h-14 text-white" />,
    },
    {
      title: 'Step 5',
      heading: '9 Months Curriculum',
      desc: 'Dive into an intensive 9-month learning journey featuring live classes, real-world projects, capstones, assignments, and peer learning. Stay industry-ready through hands-on experience.',
      color: 'bg-purple-500',
      icon: <BookOpen className="w-14 h-14 text-white" />,
    },
    {
      title: 'Step 6',
      heading: 'Paid Internship',
      desc: 'Apply your skills in real-world environments through our paid internship programs. Work with live clients, solve actual business problems, and build an impressive portfolio.',
      color: 'bg-pink-500',
      icon: <Briefcase className="w-14 h-14 text-white" />,
    },
    {
      title: 'Step 7',
      heading: 'Job Placement & Certification',
      desc: 'Get placed in top-tier companies with our 100% job guarantee. Walk away with recognized industry certification and the experience needed to excel in your new role.',
      color: 'bg-indigo-500',
      icon: <ShieldCheck className="w-14 h-14 text-white" />,
    },
  ];

  return (
   <section id="steps-journey" className="relative">
      {/* Header */}
      <div className="bg-gray-100 py-8 px-4 mt-5 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-center ">Your Journey With Us</h1>
      </div>

      {/* Steps */}
      <div className="relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`${step.color} h-[50vh] sticky top-0 flex items-center justify-center transition-all duration-300`}
            style={{
              zIndex: 10 + index,
              marginTop: index > 0 ? '-5vh' : '0',
            }}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start justify-start max-w-5xl w-full px-4 md:px-8 text-center md:text-left">
              
              {/* Icon - Fixed container */}
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <div className="bg-white/30 backdrop-blur-sm rounded-full p-4 shadow-lg border border-white/20">
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <div className="text-white">
                <h2 className="text-lg md:text-xl font-semibold mb-1">{step.title}</h2>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{step.heading}</h3>
                <p className="text-base md:text-lg leading-relaxed opacity-90">{step.desc}</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YourJourneySection;
