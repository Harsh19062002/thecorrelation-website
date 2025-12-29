import React from 'react'
import {
  Users,
  GraduationCap,
  HelpCircle,
  Clock,
  BarChart3,
  Briefcase,
  CheckCircle2,
  MonitorSmartphone,
  Laptop,
  Wallet,
  Star,
  Building,
  Brain,
  TrendingUp,
  Database,
  Send,
  ArrowRight,
  PhoneCall,
  ChevronDown,
  Rocket,
  BookOpen,
  Award,
  CheckCircle,
  User,
  Trophy,
  Clipboard,
  ChevronUp,
  Phone,
  List,
  RefreshCw
} from "lucide-react";
import Image from "next/image";
import Head from "next/head";


import { useState } from 'react';
import { Check } from 'lucide-react';
import CBAStructure from '@/components/CBAStructure';
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
import CBAPriceSection from '@/components/CBAPriceSection';
import {charteredBusinessAnalyticsConfig} from '@/data/courseData'
import CareerExpertCTA from "@/components/LeadButtonSection";


const CharteredBusinessAnalytics = () => {

 const stats = [
  { title: "100%", label: "Job Assurance" },
  { title: "Online/Offline", label: "Program Mode" },
   { title: "4 Hours", label: "Daily Efforts" },
  { title: "6 Months", label: "Program Duration" },
];
  
    const progressBars = [
      { course: "Python Fundamentals", percent: 85, color: "bg-blue-500" },
      { course: "Machine Learning", percent: 60, color: "bg-purple-500" },
      { course: "Data Visualization", percent: 40, color: "bg-yellow-500" },
      { course: "Python Fundamentals", percent: 85, color: "bg-blue-500" },
      { course: "Machine Learning", percent: 60, color: "bg-purple-500" },
      { course: "Data Visualization", percent: 40, color: "bg-yellow-500" },
    ];
 
  const [mode, setMode] = useState('online');

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

    const plans = {
  online: [
    {
      title: 'Pay Now',
      price: '₹89,999',
      bg: 'from-blue-50 to-blue-100',
      border: 'border-blue-200',
      text: 'text-blue-900',
      button: 'bg-blue-600 hover:bg-blue-700',
      features: ['Save ₹30,000', 'Lifetime access', 'Priority support'],
    },
    {
      title: 'EMI Option',
      price: '₹9,999/month',
      subtitle: 'for 12 months',
      highlight: 'Most Popular',
      bg: 'from-green-50 to-green-100',
      border: 'border-green-200',
      text: 'text-green-900',
      button: 'bg-green-600 hover:bg-green-700',
      features: ['0% interest for 6 months', 'No hidden charges', 'Flexible payment'],
    },
  ],
  offline: [
    {
      title: 'Pay Now',
      price: '₹1,49,999',
      bg: 'from-blue-50 to-blue-100',
      border: 'border-blue-200',
      text: 'text-blue-900',
      button: 'bg-blue-600 hover:bg-blue-700',
      features: ['Save ₹50,000', 'In-person classes', 'Lab access'],
    },
    {
      title: 'EMI Option',
      price: '₹16,666/month',
      subtitle: 'for 12 months',
      highlight: 'Most Popular',
      bg: 'from-green-50 to-green-100',
      border: 'border-green-200',
      text: 'text-green-900',
      button: 'bg-green-600 hover:bg-green-700',
      features: ['0% interest for 6 months', 'Campus facilities', 'Peer networking'],
    },
  ],
};


const [openIndex, setOpenIndex] = useState(null);


  const faqs = [
  {
    icon: <GraduationCap className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What is the Chartered Business Analyst (CBA) Program?",
    content:
      "The CBA is a 6-month part-time program designed to teach Data Analytics, Business Intelligence, and Business Strategy, helping you become job-ready for Business Analyst roles.",
  },
  {
    icon: <HelpCircle className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Do I need technical or coding experience to join?",
    content:
      "No. The program starts from the basics and requires no prior coding or analytics background, making it suitable for beginners.",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Who can enroll in the CBA program?",
    content:
      "Graduates, working professionals, and career changers looking to enter Business Analytics or Data Analytics can join. Basic English understanding is required.",
  },
  {
    icon: <Clock className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What is the learning schedule?",
    content:
      "The program runs part-time with two 1.5-hour sessions each day, Monday to Friday, designed to fit alongside job or college schedules.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What subjects and tools does the CBA program cover?",
    content:
      "The curriculum includes Python, SQL, Excel, EDA, Power BI, Business Strategy, Consulting Frameworks, Agile, SDLC, and soft skills required for Business Analyst roles.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Does the program include real-world projects?",
    content:
      "Yes. You will solve real business problems using analytics, build dashboards, and create insights similar to industry Business Analyst tasks.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Will I receive a certification after completion?",
    content:
      "Yes. You receive a Chartered Business Analyst certification along with Data Analytics and Business Analytics completion certificates.",
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Does the CBA program provide placement support?",
    content:
      "Yes, you get resume building, mock interviews, soft skill training, and direct access to hiring partners for Business Analyst roles.",
  },
  {
    icon: <Laptop className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What laptop specifications are required?",
    content:
      "A laptop with at least an Intel i3/i5 or Ryzen 3/5, 8GB RAM, and a 256GB SSD is recommended for analytics and dashboard work.",
  },
  {
    icon: <Wallet className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What is the program fee and payment structure?",
    content:
      "The fee is ₹80,000 (offline) or ₹55,000 (online), with flexible EMI options and a Study Now, Pay Later option where you pay after placement.",
  },
];



const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <Head>
        {/* Title */}
        <title>Chartered Business Analytics Program | TheCorrelation</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Join TheCorrelation's Chartered Business Analytics Program. Learn SQL, Excel, Power BI, Tableau, and Analytics with real-world projects and expert mentorship."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Chartered Business Analytics, Business Analytics Program, Power BI Course, Tableau Course, SQL Analytics"
        />

       
      </Head>

       <section className="relative text-white">
      
        {/* Optimized Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/CBA-HomeHero.png"
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
                   Transform Your Career in Bussiness Analytics 
                </span>
              </div>
      
              {/* Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl font-black leading-tight">
                 Chartered <br /> Program in
                </h1>
      
                <div className="text-3xl lg:text-4xl font-bold text-yellow-300 typewriter">
                  Bussiness Analytics
                </div>
              </div>
      
              {/* Description */}
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                Develop industry-ready Business Analytics skills with a practical curriculum covering data analysis, business intelligence, dashboarding, consulting frameworks, and decision-making—through hands-on projects and expert mentorship.

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
      About the Chartered Business Analytics Program
    </h2>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div>
        <p className="text-lg text-gray-600 mb-6">
          The Chartered Business Analytics (CBA) program is designed to help
          learners become confident, data-driven business professionals. The
          program blends analytics, business intelligence, and strategic
          thinking to support better decision-making across industries.
        </p>

        <div className="space-y-4">
          {[
            {
              title: "Business-Centric Analytics Curriculum",
              desc: "Learn Excel, SQL, Python for analytics, Power BI, statistics, and business intelligence concepts",
            },
            {
              title: "Industry Expert Guidance",
              desc: "Get trained by experienced industry professionals with strong academic and corporate backgrounds",
            },
            {
              title: "Real-World Business Projects",
              desc: "Work on practical case studies, dashboards, and analytics projects based on real business scenarios",
            },
            {
              title: "Career & Placement Support",
              desc: "Receive resume building, interview preparation, and placement assistance for Business Analyst roles",
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
            6 Months
          </div>
          <p className="text-gray-600 mb-6">Part-Time Professional Program</p>

          <div className="grid grid-cols-2 gap-4 text-center">
            {[
              { label: "Learning Hours", value: "180+" },
              { label: "Business Projects", value: "10+" },
              { label: "Analytics Tools", value: "15+" },
              { label: "Placement Support", value: "Included" },
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
      
            <CBAStructure></CBAStructure>
      
            <SoftSkillSection></SoftSkillSection>

             <BookSection config={charteredBusinessAnalyticsConfig} ></BookSection>


             <LeadForm></LeadForm>


             <CertificateSection></CertificateSection>

              <SuccessStoriesSection></SuccessStoriesSection>

              <Scholarship></Scholarship>


              <YourJourneySection></YourJourneySection>
      
            <LogicBoxSection></LogicBoxSection>
      
            
      
           
             
            
      
            

            
      
            
      
            
      
      
            
                       

      


      
      <CBAPriceSection/>

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

export default CharteredBusinessAnalytics
