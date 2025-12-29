'use client';
import React from 'react';
import {
  Brain,
  RefreshCw,
  Network,
  BarChart3,
  Briefcase,
  User,
  GraduationCap,
} from 'lucide-react';

const WhoShouldJoin = () => {

  const cards = [
    {
      title: 'Final-year Students & Freshers',
      desc: 'Begin your Data Science and AI journey with beginner-friendly lessons and hands-on projects that help you build a strong first portfolio.',
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      bg: 'bg-white',
      iconBg: 'bg-red-600',
    },
    {
      title: 'Working Professionals',
      desc: 'Advance your career with in-demand AI, ML, and GenAI skills. Learn Python, Power BI, and TensorFlow to unlock new high-growth opportunities.',
      icon: <Briefcase className="w-8 h-8 text-white" />,
      bg: 'bg-white',
      iconBg: 'bg-red-600',
    },
    {
      title: 'Non-tech Graduates',
      desc: 'Move into the tech industry with structured training in Data Analytics, Machine Learning, and BI tools — no coding experience required.',
      icon: <User className="w-8 h-8 text-white" />,
      bg: 'bg-white',
      iconBg: 'bg-red-600',
    },
    {
      title: 'Career Switchers',
      desc: 'Shift into Data Science and AI with guided learning, real-world projects, and expert mentorship designed for a smooth career transition.',
      icon: <RefreshCw className="w-8 h-8 text-white" />,
      bg: 'bg-white',
      iconBg: 'bg-red-600',
    }
  ];

  const highlights = [
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: 'AI-Powered Learning Experience',
      desc: 'Learn through an adaptive, AI-enhanced platform with personalized feedback, real-world simulations, and GenAI-based practice.',
    },
    {
      icon: <Briefcase className="w-8 h-8 text-white" />,
      title: 'Placement-Driven Career Support',
      desc: 'Get 1:1 career mentoring, resume building, mock interviews, and exclusive job referrals from leading AI and Data Science companies.',
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      title: 'Flexible Payment Options — No Hidden Fees',
      desc: 'Choose transparent pay-as-you-learn plans and flexible EMIs designed to make quality AI education accessible.',
    },
    {
      icon: <User className="w-8 h-8 text-white" />,
      title: 'Learn From Industry Experts',
      desc: 'Train with IIT faculty, senior AI engineers, and GenAI practitioners working on real enterprise-grade solutions.',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Hands-on Learning with Real Projects',
      desc: 'Work on deployable AI, ML, and analytics projects using Python, TensorFlow, SQL, and Power BI to build practical expertise.',
    },
    {
      icon: <Network className="w-8 h-8 text-white" />,
      title: 'Collaborative AI Community',
      desc: 'Connect with mentors, peers, and AI professionals through hackathons, workshops, and community-driven projects.',
    },
  ];

  return (
    <div>

      {/* WHY CHOOSE US – RED GRADIENT */}
      <section className="py-20 bg-[linear-gradient(135deg,#7b25d1,#ff2626,#910000)]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Why Choose Our Program?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-black/20 backdrop-blur-lg rounded-xl p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto bg-white/20">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mb-4 text-white">
                  {item.title}
                </h3>
                <p className="text-white/90">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO SHOULD JOIN – WHITE WITH RED TOUCH */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Who Should Join?
            </h2>
            <p className="text-xl text-gray-600">
              Perfect for ambitious individuals ready to transform their career
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-8xl mx-auto">
            {cards.map((card, index) => (
              <div
                key={index}
                className="text-center p-6  bg-white   rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl "
              >
                <div className={`${card.iconBg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {card.icon}
                </div>

                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default WhoShouldJoin;
