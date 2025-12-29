'use client';

import React, { useState } from "react";
import toast from "react-hot-toast";
import { 
  Rocket, Brain, Check, GraduationCap, Clock, Users, Briefcase, Laptop, 
  BookOpen, CheckCircle2, MonitorSmartphone, Wallet, FileCheck, RefreshCw, 
  BarChart3, Award, Send, PhoneCall, CheckCircle, User, Trophy, HelpCircle, 
  Clipboard, ChevronDown, ChevronUp, Phone, List, ArrowRight, MessageCircle, 
  BookText, FileText, Smile, FileSignature, ClipboardCheck, BadgeCheck, 
  BookOpenCheck, Landmark, Users2, FilePen, Volume2, Languages, ClipboardList 
} from 'lucide-react';
import Image from "next/image";
import Head from 'next/head';



// Adjust paths based on your project structure
import Scholarship from "@/components/Scholarship";
import PlacementOverview from "@/components/PlacementOverview";
import Tools from "@/components/Tools";
import CoursePriceSection from "@/components/PGPCoursePriceSection";
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
import BookSection from '@/components/BookSection';
import LeadForm from "@/components/LeadForm";
import {postGraduationConfig} from '@/data/courseData'
import CareerExpertCTA from "@/components/LeadButtonSection";

const PostGraduation2 = () => {
  
const stats = [
  { title: "100%", label: "Job Assurance" },
  { title: "Offline", label: "Program Mode" },
  { title: "6 Hours", label: "Daily Efforts" },
  { title: "12 Months", label: "Program Duration" },
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
    icon: <GraduationCap className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What is the PGP in Applied Data Science?",
    content:
      "It is a 12-month full-time program that trains you in Data Science, Machine Learning, Deep Learning, and real-world project work. The curriculum blends classroom learning with hands-on experience to make you industry-ready.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Do I need coding or math experience to join?",
    content:
      "No prior coding or advanced math knowledge is required. The program begins with Python, Statistics, and Analytics fundamentals, making it suitable for students from any background.",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Who is eligible for the PGP program?",
    content:
      "Graduates from any stream with up to a two-year gap can join. You must understand basic English and be able to attend full-time sessions in Indore.",
  },
  {
    icon: <Clock className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What is the daily schedule like?",
    content:
      "The program includes 8 hours of daily learning—3 hours of classroom teaching and 5 hours of guided practical work—designed to simulate a real Data Science office environment.",
  },
  {
    icon: <FileCheck className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What kind of projects will I work on?",
    content:
      "You’ll work on live projects with national and international firms, covering data analysis, ML model building, documentation, and reporting.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Does the program include an internship?",
    content:
      "Yes. A 3-month full-time internship is included, where you work with real Data Science teams and receive a work experience certificate.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What certifications will I receive?",
    content:
      "You’ll earn certifications in Applied Data Science, Data Analytics, Machine Learning, and Deep Learning, validating both academic and practical expertise.",
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Is job placement support provided?",
    content:
      "Yes, the program offers job assurance along with resume building, mock interviews, and direct access to hiring partners.",
  },
  {
    icon: <Laptop className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What laptop specifications are required?",
    content:
      "A laptop with at least an Intel i5/Ryzen 5, 8–16 GB RAM, and 256 GB SSD is required. Integrated graphics is sufficient.",
  },
  {
    icon: <Wallet className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What is the program fee and payment structure?",
    content:
      "The total fee is ₹1,87,000 with multiple payment options, including classical monthly installments and a Pay After Placement option.",
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
      {/* 🔥 SEO META TAGS */}
      <Head>
        <title>
          Post Graduate Program in Data Science & AI | TheCorrelation
        </title>

        <meta
          name="description"
          content="Join TheCorrelation’s Post Graduate Program in Data Science & AI. Learn Python, SQL, Machine Learning, Deep Learning and Generative AI with real-world projects and expert mentors."
        />

        <meta
          name="keywords"
          content="PGP Data Science, Post Graduate Program in Data Science, AI PGP Course, Machine Learning PGP, TheCorrelation"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://thecorrelation.in/programs/pgp-data-science"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Post Graduate Program in Data Science & AI | TheCorrelation"
        />
        <meta
          property="og:description"
          content="Become industry-ready with TheCorrelation’s PGP in Data Science, AI & Machine Learning."
        />
        <meta
          property="og:url"
          content="https://thecorrelation.in/programs/pgp-data-science"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://thecorrelation.in/og-pgp.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <section className="relative text-white">
    
      {/* Optimized Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/PGP-HomeHero.jpg"
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
                Transform Your Career in Applied Data Science
              </span>
            </div>
    
            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl font-black leading-tight">
                 Post Graduation  <br /> Program in
              </h1>
    
              <div className="text-3xl lg:text-4xl font-bold text-yellow-300 typewriter">
                Applied Data Science
              </div>
            </div>
    
            {/* Description */}
            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl">
              Develop job-ready Data Science skills with a full-time, immersive curriculum covering Python, analytics, machine learning, deep learning, and cloud deployment—backed by real-world projects, in-office internships, and 1:1 industry mentorship.

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
      About the Applied Data Science Program
    </h2>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div>
        <p className="text-lg text-gray-600 mb-6">
          The Post Graduate Program (PGP) in Applied Data Science is a full-time,
          immersive program designed to bridge the gap between academics and
          industry. It prepares graduates to work as Data Scientists through
          hands-on learning, real-world projects, and guided internships.
        </p>

        <div className="space-y-4">
          {[
            {
              title: "Industry-Aligned Curriculum",
              desc: "Learn Data Science, Machine Learning, Deep Learning, and Model Deployment used in real industry environments",
            },
            {
              title: "Expert Faculty & Mentorship",
              desc: "Learn from experienced Data Scientists and mentors from IIT, IIM, ISI, and industry leaders",
            },
            {
              title: "Real-World Projects & Internship",
              desc: "Work on live national and international projects with guided in-office internship exposure",
            },
            {
              title: "Job Assurance & Career Support",
              desc: "1:1 career mentorship, resume building, mock interviews, and strong placement support",
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
          <p className="text-gray-600 mb-6">Full-Time Immersive Program</p>

          <div className="grid grid-cols-2 gap-4 text-center">
            {[
              { label: "Daily Learning Hours", value: "6 Hrs" },
              { label: "Real-World Projects", value: "10+" },
              { label: "Internship Duration", value: "3 Months" },
              { label: "Job Assurance", value: "Yes" },
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

      <BookSection config={postGraduationConfig}></BookSection>

      <LeadForm></LeadForm>

      <CertificateSection></CertificateSection>

      <SuccessStoriesSection></SuccessStoriesSection>

      <Scholarship />

      <YourJourneySection></YourJourneySection>

      <LogicBoxSection></LogicBoxSection>

      <CoursePriceSection/>
      
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
};



export default PostGraduation2;
