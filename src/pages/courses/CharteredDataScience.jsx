'use client';

import React from 'react'
import { useEffect } from 'react';
import { Users, Star,Check, Building, BarChart3, Brain, TrendingUp, Database, Send, ArrowRight, PhoneCall, ChevronDown, Rocket, BookOpen, Briefcase, Award, CheckCircle, Wallet, User, GraduationCap, Trophy, HelpCircle, Clipboard, ChevronUp, Phone, List, RefreshCw, } from 'lucide-react';


import CDSPstructure from '@/components/CDSPstructure';
import WhoShouldJoin from "@/components/WhoShouldJoin";
import Tools from "@/components/Tools";
import CourseStructure from "@/components/CourseStructure";
import SoftSkillSection from "@/components/SoftSkillSection";
import LogicBoxSection from "@/components/LogicBoxSection";
import CertificateSection from "@/components/CertificateSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import FacultySection from "@/components/FacultySection";
import YourJourneySection from "@/components/YourJourneySection";
import Scholarship from "@/components/Scholarship";
import BookSection from "@/components/BookSection";
import LeadForm from '@/components/LeadForm';


const CharteredDataScience = () => {

  const stats = [
      { title: "95%", label: "Job Placement Rate" },
      { title: "₹ 0", label: "Upfront Payment" },
      { title: "10 Months", label: "Average Program" },
    ];
  
    const progressBars = [
      { course: "Python Fundamentals", percent: 85, color: "bg-blue-500" },
      { course: "Machine Learning", percent: 60, color: "bg-purple-500" },
      { course: "Data Visualization", percent: 40, color: "bg-yellow-500" },
      { course: "Python Fundamentals", percent: 85, color: "bg-blue-500" },
      { course: "Machine Learning", percent: 60, color: "bg-purple-500" },
      { course: "Data Visualization", percent: 40, color: "bg-yellow-500" },
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
      <section
        className="relative bg-[linear-gradient(90deg,#cb0000,#fbd90d)]
 text-white overflow-hidden"
      >
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div className="space-y-8">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-3 backdrop-blur-sm">
                <span className="text-yellow-300 mr-2">🚀</span>
                <span className="text-sm text-gray-900 font-medium">
                  Transform Your Career in Data Science
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-5xl font-black leading-tight">
                  Post Graduation Program in
                </h1>
                <div className="text-3xl lg:text-4xl font-bold text-yellow-300 typewriter">
                  Chartered Data Science
                </div>
              </div>

              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                Master data science, machine learning, and analytics with zero
                upfront costs. Start learning today, pay only when you land your
                dream job.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 py-6">
                {stats.map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-300">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                 onClick={() => {
                  const formElement = document.getElementById("contact-form");
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: "smooth" });
                  }
                }} 
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all hover-lift pulse-glow">
                 Apply Now
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all hover-lift">
                  Download Brochure
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-8">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-sm text-gray-300">
                    2,500+ students enrolled
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  <span className="text-sm text-gray-300">4.9/5 rating</span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 hover-lift space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-800">
                    {" "}
                    Job Requirement{" "}
                  </h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                {/* Progress Bars */}
                {progressBars.map((bar, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>{bar.course}</span>
                      <span>{bar.percent}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`${bar.color} h-2 rounded-full`}
                        style={{ width: `${bar.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}

                {/* Chart */}

                {/* Payment Status */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">✅</span>
                    <span className="text-green-800 font-medium">
                      Study Now, Pay Later Active
                    </span>
                  </div>
                  <p className="text-green-600 text-sm mt-1">
                    No payments until you get hired!
                  </p>
                </div>
              </div>

              {/* Floating Visuals */}
              <div className="absolute -top-6 -right-6 bg-yellow-400 rounded-full p-4 shadow-lg floating-animation">
                <span className="text-2xl">🎯</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 rounded-full p-3 shadow-lg floating-animation">
                <span className="text-white text-xl">📈</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom SVG Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            About the Chartered Data Science Program
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <p className="text-lg text-gray-600 mb-6">
                The Chartered Business Analyst (CBA) certification is designed
                to transform professionals into data-driven decision makers. Our
                comprehensive curriculum combines theoretical knowledge with
                practical application.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Industry-Relevant Curriculum",
                    desc: "Learn the latest tools and techniques used by top companies",
                  },
                  {
                    title: "Expert Mentorship",
                    desc: "Learn from faculty and industry experts from IIT, IIM, and ISI",
                  },
                  {
                    title: "Hands-on Projects",
                    desc: "Work on real-world projects with live datasets",
                  },
                  {
                    title: "Career Support",
                    desc: "Dedicated placement assistance and career guidance",
                  },
                ].map((item, idx) => (
                  <div className="flex items-start gap-3" key={idx}>
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Stats Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  12 Months
                </div>
                <p className="text-gray-600 mb-6">Comprehensive Program</p>

                <div className="grid grid-cols-2 gap-4 text-center">
                  {[
                    { label: "Hours of Learning", value: "200+" },
                    { label: "Live Projects", value: "15+" },
                    { label: "Tools & Techniques", value: "50+" },
                    { label: "Placement Support", value: "100%" },
                  ].map((card, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="text-2xl font-bold text-gray-900">
                        {card.value}
                      </div>
                      <p className="text-sm text-gray-600">{card.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhoShouldJoin></WhoShouldJoin>
      
            <Tools />
      
            <CDSPstructure></CDSPstructure>
      
            <SoftSkillSection></SoftSkillSection>
      
            <LogicBoxSection></LogicBoxSection>
      
            <CertificateSection></CertificateSection>
      
            <SuccessStoriesSection></SuccessStoriesSection>
             
            <FacultySection></FacultySection>
      
            <YourJourneySection></YourJourneySection>

            <LeadForm></LeadForm>
      
            
      
            <Scholarship></Scholarship>
      
      
            <BookSection></BookSection>
              



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
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
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
                  className={`bg-gradient-to-br from-${step.color}-50 to-${
                    step.color
                  }-100 rounded-xl shadow-lg p-8 card-hover border border-${
                    step.color
                  }-200 transform hover:-translate-y-2 transition-all duration-300 ${
                    step.fullWidth ? "lg:col-span-3" : ""
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-sm transition-all"
              >
                <button className="faq-toggle w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors">
                  <div className="flex items-center">
                    {faq.icon}
                    <h3 className="text-lg font-semibold text-gray-800">
                      {faq.question}
                    </h3>
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
            <button 
             onClick={() => {
                  const formElement = document.getElementById("contact-form");
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: "smooth" });
                  }
                }} 
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 hover:scale-105 animate-pulse-slow flex items-center justify-center gap-2">
              <Send className="w-6 h-6" />
             Apply Now
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
  );
}

export default CharteredDataScience