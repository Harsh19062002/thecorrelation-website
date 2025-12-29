'use client';

import React from 'react'
import { useEffect,useState } from 'react';
import {
  Users,
  Star,
  GraduationCap,
  BookOpen,
  Clock,
  BarChart3,
  Briefcase,
  CheckCircle2,
  MonitorSmartphone,
  Laptop,
  Wallet,
  Check,
  Building,
  Brain,
  TrendingUp,
  Database,
  Send,
  ArrowRight,
  PhoneCall,
  ChevronDown,
  Rocket,
  Award,
  CheckCircle,
  User,
  Trophy,
  HelpCircle,
  Clipboard,
  ChevronUp,
  Phone,
  List,
  RefreshCw
} from "lucide-react";
import Image from "next/image";
import Head from "next/head";


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
import CDSPriceSection from '@/components/CDSPriceSection';
import {charteredDataScienceConfig} from '@/data/courseData';
import CareerExpertCTA from "@/components/LeadButtonSection";

const CharteredDataScience = () => {

  const stats = [
  { title: "100%", label: "Job Assurance" },
  { title: "Online/Offline", label: "Program Mode" },
   { title: "4 Hours", label: "Daily Efforts" },
  { title: "10 Months", label: "Program Duration" },
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


  const [openIndex, setOpenIndex] = useState(null);


  const faqs = [
  {
    icon: <GraduationCap className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What is the Chartered Data Scientist (CDS) Program?",
    content:
      "The CDS program is a 10-month part-time training designed to help you master Data Science, Machine Learning, Deep Learning, and AI with hands-on practical learning and industry-focused projects.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Do I need technical or coding knowledge to join?",
    content:
      "No prior knowledge is required. The program starts from Python, Statistics, and Analytics basics, making it beginner-friendly for all backgrounds.",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Who can join the CDS program?",
    content:
      "Students, fresh graduates, and working professionals from any field can join. The only requirement is willingness to learn and attend regular sessions.",
  },
  {
    icon: <Clock className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What is the learning schedule?",
    content:
      "The course runs part-time with two 1.5-hour live sessions daily (Monday–Friday), designed to fit alongside studies or a job.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What topics does the curriculum cover?",
    content:
      "You’ll learn Python, Statistics, EDA, ML, Deep Learning, NLP, Computer Vision, SQL, Power BI, Cloud Deployment, and real-world project execution.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Does the program include real projects?",
    content:
      "Yes. You will work on multiple guided projects plus applied assignments to build a strong industry-ready portfolio.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What certifications will I receive?",
    content:
      "You’ll receive certifications in Data Analytics, Foundational ML, Advanced ML, Deep Learning, and the Chartered Data Scientist credential.",
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Does the CDS program provide placement support?",
    content:
      "Yes. You get resume building, interview preparation, mock interviews, and direct access to hiring partners.",
  },
  {
    icon: <Laptop className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What are the laptop requirements?",
    content:
      "A laptop with at least Intel i5/Ryzen 5, 8–16GB RAM, and a 256GB SSD is recommended for smooth ML and AI practice.",
  },
  {
    icon: <Wallet className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What is the course fee and payment structure?",
    content:
      "The total fee is ₹1,45,000 with multiple options—Classical Monthly Payments or the Pay After Placement option for flexibility.",
  },
];


const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <Head>
        {/* Page Title */}
        <title>Chartered Data Science Program | TheCorrelation</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Join TheCorrelation's Chartered Data Science Program. Master Python, Machine Learning, Deep Learning, and AI with real-world projects and industry mentorship."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Chartered Data Science, Data Science Program, AI Course, Machine Learning, TheCorrelation"
        />

        {/* Canonical URL */}
        
      </Head>
       <section className="relative text-white">
      
        {/* Optimized Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/CDS-HomeHero.jpg"
            alt="ADA Hero Banner"
            fill
            priority
            className="object-cover object-right md:object-center"
          />
        </div>
      
      
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      
        {/* Content Wrapper */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
      
            {/* LEFT SIDE */}
            <div className="space-y-8">
      
              {/* Badge */}
              <div className="inline-flex items-center bg-black/40 rounded-full px-6 py-3 backdrop-blur-sm">
                <span className="text-yellow-300 mr-2"></span>
                <span className="text-sm text-white font-medium">
                  Transform Your Career in Data Science
                </span>
              </div>
      
              {/* Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl font-black leading-tight">
                  Chartered  <br /> Program in
                </h1>
      
                <div className="text-3xl lg:text-4xl font-bold text-yellow-300 typewriter">
                 Chartered Data Science 
                </div>
              </div>
      
              {/* Description */}
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                Build end-to-end Data Science expertise with a structured curriculum covering Python, statistics, machine learning, deep learning, NLP, and real-world AI projects—guided by experienced industry professionals.

              </p>
      
              {/* ⭐ FIXED STATS (Perfect alignment) ⭐ */}
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 
        gap-4 sm:gap-8 lg:gap-26 py-6">
      
        {stats.map((item, idx) => (
          <div 
            key={idx}
            className="flex flex-col items-center justify-center min-h-[90px] text-center"
          >
            {/* TITLE (single line, always centered) */}
            <div className="text-2xl md:text-3xl lg:text-3xl font-bold text-yellow-300 leading-none whitespace-nowrap">
        {item.title}
      </div>
      
      
            {/* LABEL (centered under title) */}
            <div className="text-sm text-gray-300 leading-none mt-2 whitespace-nowrap">
              {item.label}
            </div>
          </div>
        ))}
      
      </div>
      
      
      
              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 mb-4">
                <button
                  onClick={() => {
                    const formElement = document.getElementById("contact-form");
                    if (formElement) formElement.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all hover-lift pulse-glow"
                >
                  Apply Now
                </button>
              </div>
      
            </div>
      
            {/* RIGHT SIDE VISUAL — unchanged */}
            <div></div>
      
          </div>
        </div>
      
        {/* Bottom Wave */}
        <div className="absolute bottom-[-1px] left-0 right-0">
  <svg
    className="block"
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
          The Chartered Data Science (CDS) program is designed to build a strong
          foundation in Data Science and Artificial Intelligence. It combines
          core theory with practical implementation to prepare learners for
          real-world data-driven roles across industries.
        </p>

        <div className="space-y-4">
          {[
            {
              title: "Comprehensive Data Science Curriculum",
              desc: "Master Python, Statistics, SQL, Exploratory Data Analysis, Machine Learning, and Deep Learning concepts",
            },
            {
              title: "Expert-Led Learning",
              desc: "Learn from experienced Data Scientists and mentors with strong academic and industry backgrounds",
            },
            {
              title: "Hands-on Projects & Case Studies",
              desc: "Apply concepts through real-world datasets, ML models, and practical business use cases",
            },
            {
              title: "Career & Skill Development Support",
              desc: "Get guidance on resumes, interviews, and industry best practices for Data Science roles",
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
            10 Months
          </div>
          <p className="text-gray-600 mb-6">Structured Learning Program</p>

          <div className="grid grid-cols-2 gap-4 text-center">
            {[
              { label: "Learning Hours", value: "180+" },
              { label: "Hands-on Projects", value: "10+" },
              { label: "Core DS Tools", value: "25+" },
              { label: "Career Guidance", value: "Included" },
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

            <BookSection config={charteredDataScienceConfig} ></BookSection>

            <LeadForm></LeadForm>

             <CertificateSection></CertificateSection>

             <SuccessStoriesSection></SuccessStoriesSection>

              <Scholarship></Scholarship>

              <YourJourneySection></YourJourneySection>
      
            <LogicBoxSection></LogicBoxSection>
      
            <CDSPriceSection/>
      
            
             
            
      
            

            
      
            
      
           
      
      
            
              



      
      

      

      

      <section className="py-20 bg-white">
              <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
                  Frequently Asked Questions
                </h2>
      
                <div className="max-w-6xl mx-auto space-y-4">
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
                            className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center ${faq.bg}`}
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


     

      <CareerExpertCTA/>
    </div>
  );
}

export default CharteredDataScience