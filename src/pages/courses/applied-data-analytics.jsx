'use client';

import React, { useState } from "react";
import toast from "react-hot-toast";
import { Rocket, Brain, GraduationCap, HelpCircle, Users, Clock, BarChart3, Briefcase, CheckCircle2, MonitorSmartphone, Laptop, Wallet, ChevronDown, ChevronUp, Check, RefreshCw, BookOpen, Award, Send, PhoneCall, CheckCircle, User, Trophy, Clipboard, Phone, List, ArrowRight, MessageCircle, BookText, FileText, Smile, FileSignature, ClipboardCheck, BadgeCheck, BookOpenCheck, Landmark, Users2, FilePen, Volume2, Languages, ClipboardList } from 'lucide-react';
import Image from "next/image";
import Head from "next/head";

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
import BookSection from '@/components/BookSection'
import ADAstructure from '@/components/ADAstructure'
import ADAPriceSection from "@/components/ADAPriceSection";
import {appliedDataAnalyticsConfig} from '@/data/courseData'
import LeadForm from "@/components/LeadForm";
import CareerExpertCTA from "@/components/LeadButtonSection";

const PostGraduation2 = () => {

 const stats = [
  { title: "100%", label: "Job Assurance" },
  { title: "Online/Offline", label: "Program Mode" },
   { title: "2 Hours", label: "Daily Efforts" },
  { title: "3 Months", label: "Program Duration" },
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
    title: "What is the Applied Data Analytics Certification Program?",
    content:
      "The Applied Data Analytics Program is a 3-month, industry-aligned certification course designed to teach Python, SQL, Excel, Power BI, and core analytical methods. It prepares learners for entry-level roles in Data Analytics, Business Analytics, and Reporting.",
  },
  {
    icon: <HelpCircle className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Do I need prior coding or analytics knowledge?",
    content:
      "No. The program is beginner-friendly and starts from foundational concepts. You do not need programming, mathematics, or analytics experience to join.",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Who is eligible for the Applied Data Analytics program?",
    content:
      "Students, fresh graduates, working professionals, and career changers from any stream can enroll. Basic computer literacy and willingness to learn are enough.",
  },
  {
    icon: <Clock className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What is the duration and daily schedule?",
    content:
      "The program runs for 3 months with 3 hours of class per day, Monday to Friday. The schedule is designed to fit both students and working professionals.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What tools and topics are covered in this program?",
    content:
      "The curriculum includes Python, SQL, Excel, Exploratory Data Analysis, Data Visualization, Power BI, dashboards, real-world case studies, and essential analytics frameworks used across industries.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Does the program include real-world analytics projects?",
    content:
      "Yes. You will work on practical datasets from domains such as finance, e-commerce, retail, and operations. You also learn to prepare dashboards, reports, and insights similar to industry assignments.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Will I receive a certificate after completing the program?",
    content:
      "Yes. You will receive an Applied Data Analytics Certification from TheCorrelation, which is recognized by hiring partners and analytics teams.",
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Is placement or career support included?",
    content:
      "Yes. You receive resume-building support, mock interviews, soft skills training, portfolio creation, and access to hiring partners for analytics roles.",
  },
  {
    icon: <Laptop className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What laptop specifications are required for the course?",
    content:
      "A laptop with an Intel i3/i5 or Ryzen 3/5 processor, 8GB RAM, and 256GB SSD is recommended for Python, SQL, Power BI, and analytics tools.",
  },
  {
    icon: <Wallet className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What is the fee and available payment options?",
    content:
      "The program fee is ₹31,000 (without scholarship). EMI options and limited scholarships may be available based on evaluation and merit.",
  },
];


const toggleFAQ = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};


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
       <Head>
        {/* Title */}
        <title>Certification Program in Applied Data Analytics | TheCorrelation</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Join TheCorrelation's Certification Program in Applied Data Analytics. Master SQL, Python, Power BI, Tableau, and Analytics through real-world projects and expert mentorship."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Applied Data Analytics Course, Data Analytics Certification, SQL, Power BI, Tableau, Python Analytics"
        />

        
      </Head>
    <section className="relative text-white">

  {/* Optimized Background Image */}
  <div className="absolute inset-0 -z-10">
    <Image
      src="/ADA-HomeHero.jpg"
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
            Transform Your Career in Data Analytics
          </span>
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl font-black leading-tight">
            Certification <br /> Program in
          </h1>

          <div className="text-3xl lg:text-4xl font-bold text-yellow-300 typewriter">
            Applied Data Analytics
          </div>
        </div>

        {/* Description */}
        <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl">
          Build a strong foundation in Data Analytics with a cutting-edge curriculum 
          designed for beginners. Learn Python, Statistics, SQL, Power BI, EDA, and 
          industry analytics — all guided by expert data scientists in Indore.
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
      About the Applied Data Analytics Program
    </h2>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div>
        <p className="text-lg text-gray-600 mb-6">
          The Applied Data Analytics Certification is a beginner-friendly 
          3-month program designed to build strong foundations in data analysis. 
          The curriculum covers Python, Statistics, SQL, EDA, Power BI, and data 
          visualization—equipping learners with the skills required to analyze 
          real-world business data. No prior technical background is required.
        </p>

        <div className="space-y-4">
          {[
            {
              title: "Beginner-Friendly Curriculum",
              desc: "Start from basics such as Python, Mathematics, and Statistics—no prior experience needed.",
            },
            {
              title: "Learn Essential Analytics Tools",
              desc: "Gain hands-on experience with Pandas, Numpy, SQL, Matplotlib, Seaborn, Plotly, and Power BI.",
            },
            {
              title: "Real-World Data Projects",
              desc: "Work on practical datasets and learn Exploratory Data Analysis (EDA) used by top industries.",
            },
            {
              title: "Job Assistance Program",
              desc: "Receive continuous career support, resume guidance, and interview preparation.",
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
            3 Months
          </div>
          <p className="text-gray-600 mb-6">Program Duration</p>

          <div className="grid grid-cols-2 gap-4 text-center">
            {[
              { label: "Live Learning Hours", value: "120+" },
              { label: "Hands-on Tools", value: "10+" },
              { label: "Real Projects", value: "5+" },
              { label: "Job Assistance", value: "100%" },
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

      <ADAstructure></ADAstructure>

      <SoftSkillSection></SoftSkillSection>

      

      <BookSection config={appliedDataAnalyticsConfig}></BookSection>

      <LeadForm></LeadForm>

      <CertificateSection></CertificateSection>

       

       <SuccessStoriesSection></SuccessStoriesSection>

      

      

     <Scholarship/>
       
      

      <YourJourneySection></YourJourneySection>

      

      

      

      <LogicBoxSection></LogicBoxSection>

    
     

      <ADAPriceSection/>
      

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            FAQs — Reduce Hesitation
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
                      className= {`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center ${faq.bg}`}
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
