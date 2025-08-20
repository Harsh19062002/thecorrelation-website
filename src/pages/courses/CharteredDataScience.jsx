'use client';

import React from 'react'
import { useEffect } from 'react';
import { Users, Star, Building, BarChart3, Brain, TrendingUp, Database, Send, ArrowRight, PhoneCall, ChevronDown, Rocket, BookOpen, Briefcase, Award, CheckCircle, Wallet, User, GraduationCap, Trophy, HelpCircle, Clipboard, ChevronUp, Phone, List, RefreshCw, } from 'lucide-react';


import CDSPstructure from '@/components/CDSPstructure';

const CharteredDataScience = () => {

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
  
  const steps = [
      {
        icon: Phone,
        color: 'blue',
        step: 'Step 1',
        title: 'Connect with Our Experts',
        desc: 'Schedule a free consultation to discuss your career goals and program fit.',
      },
      {
        icon: List,
        color: 'green',
        step: 'Step 2',
        title: 'Registration & Profile Evaluation',
        desc: 'Complete your registration and get your profile evaluated by our admission team.',
      },
      {
        icon: Award,
        color: 'purple',
        step: 'Step 3',
        title: 'Scholarship Assessment',
        desc: 'Take our aptitude test and profile assessment for scholarship opportunities.',
      },
      {
        icon: Wallet,
        color: 'orange',
        step: 'Step 4',
        title: 'Fee & EMI Options',
        desc: 'Receive personalized fee structure and flexible EMI payment options.',
      },
      {
        icon: GraduationCap,
        color: 'red',
        step: 'Step 5',
        title: '9 Months Curriculum',
        desc: 'Intensive learning with live classes, projects, and hands-on experience.',
      },
      {
        icon: Briefcase,
        color: 'indigo',
        step: 'Step 6',
        title: 'Paid Internship',
        desc: 'Gain real industry experience with our paid internship program.',
      },
      {
        icon: Trophy,
        color: 'yellow',
        step: 'Step 7',
        title: 'Job Placement & Certification',
        desc: 'Get placed in top companies with our 100% job guarantee and receive your certification.',
        fullWidth: true,
      },
    ];

    useEffect(() => {
    const toggles = document.querySelectorAll('.faq-toggle');

    toggles.forEach((btn) => {
      btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        const chevron = btn.querySelector('.faq-chevron');

        if (content.classList.contains('hidden')) {
          content.classList.remove('hidden');
          chevron.style.transform = 'rotate(180deg)';
        } else {
          content.classList.add('hidden');
          chevron.style.transform = 'rotate(0deg)';
        }
      });
    });
  }, []);

  const faqs = [
    {
      icon: <HelpCircle className="w-6 h-6 text-purple-600 mr-4" />,
      question: 'What is the Chartered Data Science Program?',
      answer:
        'Our Chartered Data Science Program is a comprehensive 9-month course designed to take you from beginner to job-ready data scientist. It covers everything from basic analytics to advanced AI and machine learning.',
    },
    {
      icon: <Clipboard className="w-6 h-6 text-purple-600 mr-4" />,
      question: 'How is it different from other programs?',
      answer:
        'Unlike other programs, we offer 100% job assistance, industry-recognized certification, and a curriculum designed by IIT faculty. Our focus is on practical, hands-on learning with real projects.',
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-purple-600 mr-4" />,
      question: 'Do I need a coding background?',
      answer:
        'No coding background is required! Our program starts from the basics and gradually builds up your skills. We welcome students from all backgrounds including non-technical graduates.',
    },
  ];





  return (
    <div>
<section className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-bounce" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full opacity-10 animate-pulse" />
        <div
          className="absolute bottom-40 left-20 w-24 h-24 bg-purple-300 rounded-full opacity-15 animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 right-10 w-12 h-12 bg-indigo-300 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Floating Icons */}
        <div className="absolute top-32 left-1/4 opacity-20 animate-float">
          <BarChart3 className="w-8 h-8" />
        </div>
        <div
          className="absolute top-60 right-1/4 opacity-15 animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          <Brain className="w-10 h-10" />
        </div>
        <div
          className="absolute bottom-60 left-1/3 opacity-20 animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <TrendingUp className="w-6 h-6" />
        </div>
        <div
          className="absolute bottom-32 right-1/3 opacity-15 animate-float"
          style={{ animationDelay: "2.5s" }}
        >
          <Database className="w-8 h-8" />
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-10" />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Stats Banner */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/30">
              <div className="flex items-center gap-2 ">
                <Users className="w-5 h-5 text-yellow-300" />
                <span className="text-sm text-white font-medium ">5000+ Students Placed</span>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/30">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-300" />
                <span className="text-sm text-white font-medium">4.8/5 Rating</span>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/30">
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5 text-yellow-300" />
                <span className="text-sm text-white font-medium">500+ Hiring Partners</span>
              </div>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in leading-tight">
            Become a Certified Data Scientist with Our{" "}
            <span className="text-yellow-300">Chartered Data Science Program!</span>
          </h1>

          {/* Subheadline */}
          <h2 className="text-xl md:text-2xl mb-8 animate-slide-up text-purple-100 font-medium">
            Master the full stack of Data Analytics to AI in just 9 months...
          </h2>

          {/* Key Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
            <span className="bg-green-500 bg-opacity-20 text-green-200 px-4 py-2 rounded-full text-sm font-medium border border-green-400 border-opacity-30">
              ✓ 100% Job Guarantee
            </span>
            <span className="bg-blue-500 bg-opacity-20 text-blue-200 px-4 py-2 rounded-full text-sm font-medium border border-blue-400 border-opacity-30">
              ✓ Live Projects
            </span>
            <span className="bg-purple-500 bg-opacity-20 text-purple-200 px-4 py-2 rounded-full text-sm font-medium border border-purple-400 border-opacity-30">
              ✓ IIT Faculty
            </span>
            <span className="bg-yellow-500 bg-opacity-20 text-yellow-200 px-4 py-2 rounded-full text-sm font-medium border border-yellow-400 border-opacity-30">
              ✓ Industry Certification
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 hover-scale transition-all duration-300 pulse-animation shadow-2xl">
              <Send className="w-5 h-5" />
              Enroll Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 hover-scale transition-all duration-300 backdrop-blur-sm">
              <PhoneCall className="w-5 h-5" />
              Talk to Career Expert
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center text-white opacity-60">
              <span className="text-sm mb-2">Scroll to explore</span>
              <ChevronDown className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>



    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          Why Choose Our Program?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${item.bg}`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


    <CDSPstructure></CDSPstructure>
       

      <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Who Should Join?</h2>
          <p className="text-xl text-gray-600">Perfect for ambitious individuals ready to transform their career</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`text-center p-6 bg-gradient-to-br ${card.bg} rounded-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <div className={`${card.iconBg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          Your Journey with Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br from-${step.color}-50 to-${step.color}-100 rounded-xl shadow-lg p-8 card-hover border border-${step.color}-200 transform hover:-translate-y-2 transition-all duration-300 ${
                  step.fullWidth ? 'lg:col-span-3' : ''
                }`}
              >
                <div
                  className={`bg-${step.color}-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <div
                    className={`bg-${step.color}-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4`}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>


     <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Get answers to common questions</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm transition-all">
              <button className="faq-toggle w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors">
                <div className="flex items-center">
                  {faq.icon}
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-500 faq-chevron transition-transform duration-300" />
              </button>
              <div className="faq-content hidden px-6 pb-6">
                <p className="text-gray-600 ml-10">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="container mx-auto px-6 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Your success is our goal — from day one to your job placement.
            </h2>
    
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 hover:scale-105 animate-pulse-slow flex items-center justify-center gap-2">
                <Send className="w-6 h-6" />
                Enroll Now
                <ArrowRight className="w-6 h-6" />
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <PhoneCall className="w-6 h-6" />
                Talk to Career Expert
              </button>
            </div>
          </div>
        </section>


    </div>
  )
}

export default CharteredDataScience