'use client';

import React, { useState } from "react";
import toast from "react-hot-toast";
import { Rocket, Brain, Check, RefreshCw, GraduationCap, HelpCircle, Users, Clock, BarChart3, Briefcase, CheckCircle2, MonitorSmartphone, Laptop, Wallet, ChevronDown, ChevronUp, BookOpen, Award, Send, PhoneCall, CheckCircle, User, Trophy, Clipboard, Phone, List, ArrowRight, MessageCircle, BookText, FileText, Smile, FileSignature, ClipboardCheck, BadgeCheck, BookOpenCheck, Landmark, Users2, FilePen, Volume2, Languages, ClipboardList } from 'lucide-react';
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
import AMLstructure from "@/components/AMLstructure";
import AMLPriceSection from "@/components/AMLPriceSection";
import {advancedMachineLearningConfig} from "@/data/courseData";
import LeadForm from "@/components/LeadForm";
import CareerExpertCTA from "@/components/LeadButtonSection";

const PostGraduation2 = () => {

  const stats = [
  { title: "100%", label: "Job Assurance" },
 { title: "Online/Offline", label: "Program Mode" },
   { title: "2 Hours", label: "Daily Efforts" },
  { title: "4 Months", label: "Program Duration" },
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
    title: "What is the Advanced Machine Learning (AML) Program?",
    content:
      "The AML program is a 4-month advanced-level course designed for learners who already understand the basics of machine learning. It focuses on building deep expertise in complex algorithms, optimization techniques, XAI, NLP, ensemble learning, and model productionization, preparing you for real-world ML engineering roles.",
  },
  {
    icon: <HelpCircle className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Do I need prior experience before joining the AML course?",
    content:
      "Yes. Students must understand foundational ML concepts such as regression, classification, clustering, PCA, and evaluation metrics. The brochure recommends completing the Foundational ML program or having equivalent prior ML knowledge before starting AML.",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Who should enroll in the Advanced ML Program?",
    content:
      "Data science learners, ML practitioners, software engineers, analytics professionals, and anyone aiming to transition into machine learning engineering, ML research, or advanced AI product roles will benefit from the AML program.",
  },
  {
    icon: <Clock className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What is the duration and schedule of the AML program?",
    content:
      "The program runs for 4 months and includes extensive ML theory, guided workflows, hands-on labs, and industry projects. The learning approach follows the same structured academic model as other programs, featuring regular live classes, evaluations, and project checkpoints.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What advanced ML topics and skills will I learn?",
    content:
      "The AML course covers SVM with kernels, gradient boosting, XGBoost, hyperparameter optimization, ensemble stacking, model interpretability (XAI), NLP with vectorization, dimensionality reduction at scale, mathematical foundations of ML, and production-ready ML workflows.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Does the AML program include real industry projects?",
    content:
      "Yes. You will work on domain-specific ML case studies in finance, retail, healthcare, banking, supply chain, and e-commerce. Projects include model optimization, NLP tasks, ensemble solutions, and interpretable ML pipelines using industry datasets.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Will I get a certificate after completing the AML course?",
    content:
      "Yes. You will receive an Advanced Machine Learning Certificate from TheCorrelation upon successful completion of the program. Every project is reviewed and certified, making your portfolio industry-ready.",
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "Does the AML program offer placement or career support?",
    content:
      "Yes. You receive structured placement support including resume building, mock interviews, technical reviews, communication training, and assistance connecting with hiring partners for ML and data science roles.",
  },
  {
    icon: <Laptop className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What tools and software are used during the course?",
    content:
      "The program uses Python, Scikit-Learn, StatsModels, Jupyter, NLP toolkits, model interpretability libraries like SHAP & LIME, and production-ready ML workflows. These tools mirror real-world ML engineering environments.",
  },
  {
    icon: <Wallet className="w-6 h-6 text-white" />,
    bg: "bg-red-600",
    title: "What is the fee structure for the AML program?",
    content:
      "The AML course fee is ₹48,000 (online) and ₹68,000 (offline) plus GST. The fee includes admission, certification, learning resources, and evaluation. EMI options and scholarships are available as per the institute’s policies.",
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
      <Head>
        {/* Title */}
        <title>Certification Program in Advanced Machine Learning | TheCorrelation</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Join TheCorrelation's Certification Program in Advanced Machine Learning. Master deep learning, ML algorithms, model deployment, and real-world projects with industry guidance."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Advanced Machine Learning, AML Program, Deep Learning Course, ML Certification, TheCorrelation"
        />

        {/* Canonical URL */}
        
      </Head>
      <section className="relative text-white">
      
        {/* Optimized Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/AML-HomeHero.jpg"
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
                  Transform Your Career in Advanced Machine Learning 
                </span>
              </div>
      
              {/* Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl font-black leading-tight">
                  Certification <br /> Program in
                </h1>
      
                <div className="text-3xl lg:text-4xl font-bold text-yellow-300 typewriter">
                 Advanced Machine Learning
                </div>
              </div>
      
              {/* Description */}
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                Master advanced Machine Learning techniques including Deep Learning, 
          CNNs, RNNs, LSTMs, Transformers, NLP, Ensemble Models, Dimensionality 
          Reduction, Hyperparameter Tuning, and AI model optimization — powered 
          by TensorFlow and PyTorch. Learn through projects, case studies, and 
          industry-focused applications.
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
      About the AML Program
    </h2>

    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* Left Content */}
      <div>
        <p className="text-lg text-gray-600 mb-6">
          The Advanced Machine Learning (AML) program is designed for learners 
          who already understand ML basics and want to transition into 
          industry-level machine learning expertise. This program focuses on 
          building high-performing models, mastering advanced algorithms, 
          optimizing workflows, and preparing for real-world ML challenges.
        </p>

        <div className="space-y-4">
          {[
            {
              title: "Advanced ML Algorithms",
              desc: "Master SVM, Random Forest, XGBoost, Gradient Boosting, Ensemble Models, and advanced optimization techniques."
            },
            {
              title: "Feature Engineering & Model Tuning",
              desc: "Learn dimensionality reduction, PCA, LDA, hyperparameter tuning, cross-validation, and ML pipelines."
            },
            {
              title: "Real-World ML Projects",
              desc: "Work on case studies in finance, healthcare, e-commerce, NLP preprocessing, and predictive analytics."
            },
            {
              title: "Career Support",
              desc: "Get resume enhancement, interview prep, industry mentorship, and complete job assistance."
            }
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
      <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-2xl">
        <div className="text-center">
          <div className="text-4xl font-bold text-purple-700 mb-2">
            4 Months
          </div>
          <p className="text-gray-600 mb-6">Advanced ML Program</p>

          <div className="grid grid-cols-2 gap-4 text-center">
            {[
              { label: "Hours of Learning", value: "80+" },
              { label: "ML Projects", value: "10+" },
              { label: "Tools & Techniques", value: "20+" },
              { label: "Career Assistance", value: "100%" },
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

      <AMLstructure></AMLstructure>

      <SoftSkillSection></SoftSkillSection>

      <BookSection config={advancedMachineLearningConfig}></BookSection>

      <LeadForm></LeadForm>

      

      <CertificateSection></CertificateSection>

      <SuccessStoriesSection></SuccessStoriesSection>
       
     <Scholarship></Scholarship>

      <YourJourneySection></YourJourneySection>

      

      


      

      <LogicBoxSection></LogicBoxSection>

      <AMLPriceSection/>

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
