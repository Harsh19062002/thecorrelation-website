'use client';

import React, { useState } from "react";
import toast from "react-hot-toast";
import { Rocket, Brain, Check, RefreshCw, BarChart3, BookOpen, Users, Briefcase, Award, Send, PhoneCall, CheckCircle, Wallet, User, GraduationCap, Trophy, HelpCircle, Clipboard, ChevronDown, ChevronUp, Phone, List, ArrowRight, MessageCircle, BookText, FileText, Smile, FileSignature, ClipboardCheck, BadgeCheck, BookOpenCheck, Landmark, Users2, FilePen, Volume2, Languages, ClipboardList } from 'lucide-react';




// Adjust paths based on your project structure
import Scholarship from "@/components/Scholarship";
import PlacementOverview from "@/components/PlacementOverview";
import Tools from "@/components/Tools";
import CoursePriceSection from "@/components/CoursePriceSection";
import ReachOutForm from "@/components/ReachOutForm";
import CourseStructure from "@/components/CourseStructure";
import SoftSkillSection from "@/components/SoftSkillSection";
import LogicBoxSection from "@/components/LogicBoxSection";
import CertificateSection from "@/components/CertificateSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import YourJourneySection from "@/components/YourJourneySection";
import AboutUsSection from "@/components/AboutUsSection";
import FacultySection from "@/components/FacultySection";
import WhoShouldJoin from "@/components/WhoShouldJoin";
import BookSection from '@/components/BookSection'

const PostGraduation2 = () => {

  const stats = [
      { title: "95%", label: "Job Placement Rate" },
      { title: "$0", label: "Upfront Payment" },
      { title: "6 Months", label: "Average Program" },
    ];
  
    const progressBars = [
      { course: "Python Fundamentals", percent: 85, color: "bg-blue-500" },
      { course: "Machine Learning", percent: 60, color: "bg-purple-500" },
      { course: "Data Visualization", percent: 40, color: "bg-yellow-500" },
      { course: "Python Fundamentals", percent: 85, color: "bg-blue-500" },
      { course: "Machine Learning", percent: 60, color: "bg-purple-500" },
      { course: "Data Visualization", percent: 40, color: "bg-yellow-500" },
    ];
  
    



  
  
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      icon: <HelpCircle className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-100",
      title: "What is Data Science?",
      content:
        "Data Science is an interdisciplinary field that combines statistics, programming, and domain expertise to extract insights from data. It involves collecting, cleaning, analyzing, and interpreting large datasets to solve business problems and make data-driven decisions.",
    },
    {
      icon: <Clipboard className="w-6 h-6 text-green-600" />,
      bg: "bg-green-100",
      title: "How does this course work?",
      content:
        "Our 9-month intensive program combines live online classes, hands-on projects, and mentorship. You'll learn through practical assignments, work on real industry projects, complete a paid internship, and receive dedicated career support until job placement.",
    },
    {
      icon: <User className="w-6 h-6 text-purple-600" />,
      bg: "bg-purple-100",
      title: "Who can join this course?",
      content:
        "This course is perfect for graduates, working professionals, and career changers. No prior programming experience required - we start from basics. You need basic math skills, logical thinking, and commitment to dedicate 15-20 hours per week.",
    },
  ];


 const topics = [
  
  {
    title: 'English for Communication',
    description: 'Speak clearly and confidently in any setting.',
    icon: <Languages className="text-orange-500 w-8 h-8" />,
  },
  {
    title: 'Vocabulary + Grammar Boost',
    description: 'Expand your word power and build strong grammar.',
    icon: <BookText className="text-yellow-500 w-8 h-8" />,
  },
  {
    title: 'Roleplay Sessions',
    description: 'Practice real-world workplace scenarios.',
    icon: <Users className="text-purple-500 w-8 h-8" />,
  },
  {
    title: 'Soft Skills & Teamwork',
    description: 'Develop strong interpersonal and team skills.',
    icon: <Volume2 className="text-blue-500 w-8 h-8" />,
  },
  {
    title: 'Resume & Job Applications',
    description: 'Craft standout resumes and effective job forms.',
    icon: <FileText className="text-pink-500 w-8 h-8" />,
  },
  {
    title: 'Interview Preparation',
    description: 'Crack every round with expert interview tips.',
    icon: <ClipboardList className="text-green-500 w-8 h-8" />,
  },
  {
    title: 'Career Readiness',
    description: 'Become confident, articulate, and job-ready.',
    icon: <BadgeCheck className="text-red-500 w-8 h-8" />,
  },
];


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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


  



  



  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };



  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-900 to-indigo-900 text-white overflow-hidden">
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
                <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                  Learn Data,
                </h1>
                <div className="text-3xl lg:text-4xl font-bold text-yellow-300 typewriter">
                  with our Study Now Pay Later Program
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
                <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all hover-lift pulse-glow">
                  Start Learning Free Today
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all hover-lift">
                  View Course Catalog
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
            About the CBA Program
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

      <CourseStructure></CourseStructure>

      <SoftSkillSection></SoftSkillSection>

      <LogicBoxSection></LogicBoxSection>

      <CertificateSection></CertificateSection>

      <SuccessStoriesSection></SuccessStoriesSection>
       
      <FacultySection></FacultySection>

      <YourJourneySection></YourJourneySection>

      <CoursePriceSection></CoursePriceSection>

      <Scholarship></Scholarship>


      <BookSection></BookSection>

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

      

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            Frequently Asked Questions
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item bg-gray-50 rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="faq-header w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${faq.bg}`}
                    >
                      {faq.icon}
                    </div>
                    <span className="text-xl font-semibold text-gray-800">
                      {faq.title}
                    </span>
                  </div>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-gray-400 transition-transform" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 transition-transform" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="faq-content px-8 pb-6">
                    <p className="text-gray-600 ml-16">{faq.content}</p>
                  </div>
                )}
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

      

      <Scholarship />
      
      <CoursePriceSection />

    </div>
  );
};



export default PostGraduation2;
