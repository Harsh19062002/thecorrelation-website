'use client';
import React from 'react';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';

const SuccessStoriesSection = () => {
  const stories = [
    {
      name: 'Akash Goyal',
      qualification: 'Gap of 2 years',
      position: 'AI/ML Engineer',
      company: 'TCS',
      salary: '6.5 LPA',
      image: '/Dummy.png',
      testimonial:
        'It was wonderful to be a part of the journey of being a Data Scientist. Everyone was so kind & helpful. The institute has a positive environment. I am truly blessed to be here. I got to learn a lot.',
    },
    {
      name: 'Sakshi Gupta',
      qualification: 'Fresher (B.Com, MBA)',
      position: 'Data Scientist',
      company: 'HighNest',
      salary: '5 LPA',
      image: '/Dummy.png',
      testimonial:
        "In my experience, TheCorrelation's data science program provides thorough training that sets you up for a successful career. The supportive instructors and practical workshops make complex topics easy to grasp. I'm truly grateful for the opportunity to learn here and highly recommend it to anyone looking to excel in data science.",
    },
    {
      name: 'Palak Gangwani',
      qualification: 'Academics (School Teacher)',
      position: 'Data Scientist',
      company: 'SketchMyHome.AI',
      salary: '5 LPA',
      image: '/Dummy.png',
      testimonial:
        'TheCorrelation is the perfect place to kickstart your academic and professional journey. The welcoming atmosphere makes you feel right at home, and the supportive community helps you pave the way for success. With hands-on workshops and expert guidance, you’ll gain the skills and confidence needed to achieve your goals in the world of data science.',
    },
    {
      name: 'Rohit Nagtode',
      qualification: 'Fresher (Frontend)',
      position: 'ML Engineer',
      company: 'HighNest',
      salary: '5 LPA',
      image: '/Dummy.png',
      testimonial:
        'Joining TheCorrelation has transformed how I view the world. I learned to use data for a comprehensive, 360-degree analysis, uncovering true insights beyond surface-level information. This data-driven approach has made me more analytical and informed, providing a deeper understanding of complex issues. The skills and knowledge gained here have been invaluable, enhancing my ability to think critically and make informed decisions.',
    },
    {
      name: 'Shivam Acharya',
      qualification: 'Mechanical Engineering',
      position: 'Data Scientist',
      company: 'Cognizant',
      salary: '19 LPA',
      image: '/Dummy.png',
      testimonial:
        'Coming from a Mechanical Engineering background with 9 years in After-Sales Services and no coding experience, I never imagined transitioning into Data Science. But TheCorrelation’s PGP program made it possible with its practical curriculum and strong mentor support. While working full-time, I upskilled and secured a Data Scientist role at Cognizant with a 50% salary hike. The journey proved that background doesn’t limit growth — mindset does.',
    },
  ];

  return (
    <section className="py-16 bg-[linear-gradient(135deg,#7b25d1,#ff2626,#910000)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Success Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {stories.map((story, index) => (
            <div
              key={index}
              className="relative bg-black/20 backdrop-blur-lg rounded-xl p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Hexagon Image */}
              

              {/* Content */}
     <div className="mt-6 ml-20">
  <h3 className="text-lg font-bold text-white">{story.name}</h3>

  <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-white mt-1">
    <span>{story.qualification}</span>
    <MoveRight className="w-4 h-4 text-white" />
    <span>{story.position}</span>
  </div>

  {/* Company */}
  <div className="mt-1 text-sm text-white font-medium">
    @ {story.company}
  </div>

  <p className="text-sm text-white mt-3 leading-relaxed text-justify">
    {story.testimonial}
  </p>

  <div className="text-right text-lg font-extrabold text-white mt-3">
    {story.salary}
  </div>
</div>
            </div>
          ))}
        </div>
      </div>

      {/* Hexagon clip path */}
      <style jsx>{`
        .clip-hexagon {
          clip-path: polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%);
        }
      `}</style>
    </section>
  );
};

export default SuccessStoriesSection;
