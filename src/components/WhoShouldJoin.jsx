'use client';
import React from 'react'
import { Rocket, Brain, Check, RefreshCw, BarChart3, BookOpen, Users, Briefcase, Award, Send, PhoneCall, CheckCircle, Wallet, User, GraduationCap, Trophy, HelpCircle, Clipboard, ChevronDown, ChevronUp, Phone, List, ArrowRight, MessageCircle, BookText, FileText, Smile, FileSignature, ClipboardCheck, BadgeCheck, BookOpenCheck, Landmark, Users2, FilePen, Volume2, Languages, ClipboardList } from 'lucide-react';

const WhoShouldJoin = () => {
     const cards = [
            {
              title: 'Final-year students & Freshers',
              desc: 'Launch your career in data science',
              icon: <GraduationCap className="w-8 h-8 text-white" />,
              bg: 'from-blue-50 to-blue-100',
              iconBg: 'bg-blue-500',
            },
            {
              title: 'Working Professionals',
              desc: 'Upskill for better opportunities',
              icon: <Briefcase className="w-8 h-8 text-white" />,
              bg: 'from-green-50 to-green-100',
              iconBg: 'bg-green-500',
            },
            {
              title: 'Non-tech Graduates',
              desc: 'Transition into tech seamlessly',
              icon: <User className="w-8 h-8 text-white" />,
              bg: 'from-purple-50 to-purple-100',
              iconBg: 'bg-purple-500',
            },
            {
              title: 'Career Switchers',
              desc: 'Make the switch with confidence',
              icon: <RefreshCw className="w-8 h-8 text-white" />,
              bg: 'from-orange-50 to-orange-100',
              iconBg: 'bg-orange-500',
            },
          ];

           const highlights = [
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      bg: 'bg-green-100',
      title: 'Guaranteed Placement or Your Money Back',
      desc: '100% job guarantee with full refund if we don’t place you within 6 months of course completion.',
    },
    {
      icon: <Wallet className="w-8 h-8 text-blue-600" />,
      bg: 'bg-blue-100',
      title: 'Paid Internship During Program',
      desc: 'Earn while you learn with our paid internship opportunities during the course.',
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
      bg: 'bg-purple-100',
      title: 'Pay During the Program — No Hidden Charges',
      desc: 'Transparent pricing with flexible payment options and no surprise fees.',
    },
    {
      icon: <User className="w-8 h-8 text-orange-600" />,
      bg: 'bg-orange-100',
      title: 'Taught by Industry Experts (IIT Faculty)',
      desc: 'Learn from the best with our faculty from top IIT institutions and industry leaders.',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-600" />,
      bg: 'bg-red-100',
      title: 'Hands-on Learning with Real Projects',
      desc: 'Build your portfolio with real-world projects from day one of the program.',
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-600" />,
      bg: 'bg-yellow-100',
      title: 'Globally Recognized Certifications',
      desc: 'Earn industry-recognized certifications that employers value worldwide.',
    },
  ];


  return (
    <div>
        <section className="py-20 bg-[linear-gradient(135deg,#7b25d1,#ff2626,#910000)]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Why Choose Our Program?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-black/20 backdrop-blur-lg rounded-xl p-6  transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto ${item.bg}`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  {item.title}
                </h3>
                <p className="text-white">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Who Should Join?
            </h2>
            <p className="text-xl text-gray-600">
              Perfect for ambitious individuals ready to transform their career
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-gradient-to-br ${card.bg} rounded-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-xl`}
              >
                <div
                  className={`${card.iconBg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhoShouldJoin