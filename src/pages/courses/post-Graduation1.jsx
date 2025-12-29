'use client';

import React, { useState,useEffect } from "react";
import toast from "react-hot-toast";


import PlacementSuccess from "@/components/PlacementSuccess";
import CountDownTimer from "@/components/CountDownTimer";
import CertificateSection from "@/components/CertificateSection";
import LeadForm from "@/components/LeadForm"; 

import {
  BookOpen,User,Clipboard,Code2,Database,ChevronRight,BarChart3,LineChart,BrainCircuit,HelpCircle,Rocket,ShoppingCart,Brain,Sparkles,Bot,Monitor,CreditCard,MapPin,Building,Search,ArrowRight,Check,
} from 'lucide-react';



const PostGraduation1 = () => {

const stats = [
    { title: "95%", label: "Job Placement Rate" },
    { title: "$0", label: "Upfront Payment" },
    { title: "6 Months", label: "Average Program" },
  ];

  const progressBars = [
    { course: "Python Fundamentals", percent: 85, color: "bg-blue-500" },
    { course: "Machine Learning", percent: 60, color: "bg-purple-500" },
    { course: "Data Visualization", percent: 40, color: "bg-yellow-500" },
  ];

  const weeklyChart = [
    { height: "60%", color: "bg-blue-400" },
    { height: "80%", color: "bg-purple-400" },
    { height: "45%", color: "bg-yellow-400" },
    { height: "90%", color: "bg-green-400" },
    { height: "70%", color: "bg-red-400" },
  ];

  const features = [
    {
      title: 'Live Interactive Classes',
      description: 'Learn from industry experts in real-time with Q&A sessions',
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      bg: 'bg-blue-100',
    },
    {
      title: '1:1 Mentorship',
      description: 'Personal guidance from data science professionals',
      icon: <User className="w-6 h-6 text-green-600" />,
      bg: 'bg-green-100',
    },
    {
      title: 'Real Projects',
      description: 'Build portfolio with industry-relevant projects',
      icon: <Clipboard className="w-6 h-6 text-purple-600" />,
      bg: 'bg-purple-100',
    },
  ];

  const curriculum = [
    {
      icon: <Code2 className="w-8 h-8 text-blue-600" />,
      title: 'Python Programming',
      desc: 'Master Python for data handling, manipulation, and analysis with hands-on coding practice.',
      border: 'border-blue-200',
      bg: 'from-blue-50 to-blue-100',
    },
    {
      icon: <Database className="w-8 h-8 text-green-600" />,
      title: 'SQL for Databases',
      desc: 'Learn to work with databases, write complex queries, and extract meaningful insights from data.',
      border: 'border-green-200',
      bg: 'from-green-50 to-green-100',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
      title: 'Statistics & Probability',
      desc: 'Build strong foundations in statistical analysis for data-driven decision-making.',
      border: 'border-purple-200',
      bg: 'from-purple-50 to-purple-100',
    },
    {
      icon: <LineChart className="w-8 h-8 text-yellow-600" />,
      title: 'Data Visualization',
      desc: 'Create compelling visualizations using Power BI, Matplotlib, and other industry-standard tools.',
      border: 'border-yellow-200',
      bg: 'from-yellow-50 to-yellow-100',
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-red-600" />,
      title: 'Machine Learning Algorithms',
      desc: 'Implement Linear Regression, Decision Trees, and other ML algorithms for predictive analytics.',
      border: 'border-red-200',
      bg: 'from-red-50 to-red-100',
    },
    {
      icon: <Rocket className="w-8 h-8 text-indigo-600" />,
      title: 'Capstone Projects',
      desc: 'Build real-world projects to showcase your skills and create an impressive portfolio.',
      border: 'border-indigo-200',
      bg: 'from-indigo-50 to-indigo-100',
    },
  ];

  const wonders = [
    {
      icon: <Bot className="w-16 h-16 text-white mb-3" />,
      title: 'AI Recommendations',
      text: 'Data powers personalized recommendations in your favorite apps.',
      bg: 'from-blue-500 to-purple-600',
      textColor: 'text-blue-100',
    },
    {
      icon: <Sparkles className="w-16 h-16 text-white mb-3" />,
      title: 'Smart Assistants',
      text: 'AI assistants like Siri and Alexa use NLP and data models.',
      bg: 'from-purple-500 to-pink-500',
      textColor: 'text-purple-100',
    },
    {
      icon: <Brain className="w-16 h-16 text-white mb-3" />,
      title: 'Predictive Analytics',
      text: 'Companies forecast trends and behavior using ML algorithms.',
      bg: 'from-yellow-400 to-orange-500',
      textColor: 'text-yellow-100',
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % wonders.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [wonders.length]);

const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      category: 'General Questions',
      items: [
        {
          question: 'What is SNPL?',
          answer:
            'SNPL (Study Now, Pay Later) is our flexible payment system that allows you to start learning immediately and pay in installments during your course duration.',
        },
        {
          question: 'How does pay-after-placement work?',
          answer:
            'You pay a small enrollment fee to start, then complete payments in monthly installments. We provide 100% placement support and guarantee job assistance.',
        },
        {
          question: 'Are there hidden charges?',
          answer:
            'No hidden charges! The total fee is ₹49,999 with 0% interest on EMIs. What you see is what you pay.',
        },
        {
          question: "What if I don't get placed?",
          answer:
            "We provide 100% placement support with continuous career coaching, interview preparation, and job assistance until you get placed.",
        },
      ],
    },
    {
      category: 'Chartered Data Scientist Program',
      items: [
        {
          question: 'What skills will I learn?',
          answer:
            'Python, SQL, Machine Learning, Power BI, NLP, GenAI, Statistics, Data Visualization, and hands-on project experience with portfolio development.',
        },
        {
          question: 'Who is eligible?',
          answer:
            'Final year students, non-tech graduates (B.Com, MBA, B.Sc.), career switchers, and tech professionals looking to upskill in AI/ML are all welcome.',
        },
      ],
    },
  ];



  const [mode, setMode] = useState("online");

  const cards = {
    online: [
      {
        title: "SNPL Online",
        subtitle: "Pay only after placement",
        description: "Learn from anywhere with our comprehensive online program.",
        icon: <Monitor className="w-6 h-6 text-black" />,
        badge: "Most Popular",
        badgeColor: "bg-green-500",
        gradient: "bg-gradient-to-br from-purple-600 to-blue-600",
      },
      {
        title: "Pay Now Online",
        subtitle: "0% EMI Available",
        description: "Immediate access to all premium features.",
        icon: <CreditCard className="w-6 h-6 text-black" />,
        badge: "0% EMI",
        badgeColor: "bg-blue-500",
        gradient: "bg-gradient-to-br from-purple-600 to-blue-600",
      },
    ],
    offline: [
      {
        title: "SNPL Offline",
        subtitle: "Pay only after placement",
        description: "Hands-on learning at premium centers.",
        icon: <MapPin className="w-6 h-6 text-black" />,
        badge: "Premium Centers",
        badgeColor: "bg-purple-500",
        gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
      },
      {
        title: "Pay Now Offline",
        subtitle: "0% EMI Available",
        description: "Direct enrollment with classroom access.",
        icon: <Building className="w-6 h-6 text-black" />,
        badge: "Instant Access",
        badgeColor: "bg-orange-500",
        gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
      },
    ],
  };



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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const brochureLink = "/brochures/applied-data-science.pdf";
      const link = document.createElement("a");
      link.href = brochureLink;
      link.download = "Applied-Data-Science-Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success("Brochure downloaded!");
      setShowForm(false);
      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      console.error("Download error:", error);
      toast.error("Something went wrong while downloading.");
    } finally {
      setLoading(false);
    }
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
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">Learn Data,</h1>
              <div className="text-3xl lg:text-4xl font-bold text-yellow-300 typewriter">
                with our Study Now Pay Later Program
              </div>
            </div>

            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl">
              Master data science, machine learning, and analytics with zero upfront costs.
              Start learning today, pay only when you land your dream job.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 py-6">
              {stats.map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">{item.title}</div>
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
                <span className="text-sm text-gray-300">2,500+ students enrolled</span>
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
                <h3 className="text-xl font-bold text-gray-800">Your Learning Dashboard</h3>
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
                    <div className={`${bar.color} h-2 rounded-full`} style={{ width: `${bar.percent}%` }}></div>
                  </div>
                </div>
              ))}

              {/* Chart */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-end justify-between h-24 space-x-2">
                  {weeklyChart.map((bar, idx) => (
                    <div
                      key={idx}
                      className={`${bar.color} w-4 rounded-t`}
                      style={{ height: bar.height }}
                    ></div>
                  ))}
                </div>
                <div className="text-xs text-gray-500 mt-2 text-center">Weekly Progress</div>
              </div>

              {/* Payment Status */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✅</span>
                  <span className="text-green-800 font-medium">Study Now, Pay Later Active</span>
                </div>
                <p className="text-green-600 text-sm mt-1">No payments until you get hired!</p>
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
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>



    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Program?
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to become job-ready
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Features */}
          <div className="space-y-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-4 card-hover p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className={`${feature.bg} p-3 rounded-full`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side Box */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-400 to-purple-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">6-Month Program</h3>
              <div className="text-4xl font-bold mb-2">₹0</div>
              <p className="text-lg mb-4">Upfront Payment</p>
              <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                <p className="text-lg text-gray-900">
                  Pay only after getting placed
                </p>
                <p className="text-xs mt-2 text-gray-900">
                  Starting from ₹15,000/month
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <PlacementSuccess/>

    <LeadForm></LeadForm>



    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Will You Learn in This Course?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Here's a snapshot of the curriculum:
          </p>
        </div>

        {/* Curriculum Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curriculum.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${item.bg} rounded-xl p-8 border ${item.border} hover:shadow-lg transition-all hover-lift`}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Additional Info Box */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Complete Industry-Ready Curriculum</h3>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Our comprehensive curriculum is designed by industry experts and covers everything you
              need to become a successful data scientist. From fundamentals to advanced concepts,
              you'll gain practical skills that employers value.
            </p>
          </div>
        </div>
      </div>
    </section>



    <section className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                What is Data Science?
              </h2>
              <div className="text-xl text-gray-700 leading-relaxed space-y-4">
                <p>
                  Data Science is the{' '}
                  <span className="font-semibold text-blue-600">
                    art of extracting useful insights from raw data
                  </span>{' '}
                  using statistics, programming, and machine learning. It
                  combines skills like Python, SQL, data analysis, and
                  visualization to help companies make better decisions.
                </p>
              </div>
            </div>

            {/* Real-world Example */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <ShoppingCart className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Real-World Example:
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    E-commerce companies use data science to{' '}
                    <span className="font-semibold text-blue-600">
                      recommend products
                    </span>
                    ,{' '}
                    <span className="font-semibold text-green-600">
                      optimize prices
                    </span>
                    , and{' '}
                    <span className="font-semibold text-purple-600">
                      predict sales trends
                    </span>
                    . This helps them increase revenue while providing better
                    customer experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Skills */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                <Code2 className="w-8 h-8 mb-3" />
                <h4 className="font-bold text-lg mb-2">Programming Skills</h4>
                <p className="text-blue-100">
                  Python, SQL, and other tools for data manipulation
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
                <BarChart3 className="w-8 h-8 mb-3" />
                <h4 className="font-bold text-lg mb-2">
                  Analytics & Visualization
                </h4>
                <p className="text-purple-100">
                  Transform data into actionable insights
                </p>
              </div>
            </div>
          </div>

          {/* Right Wonders Section */}
          <div className="lg:col-span-1">
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-2xl overflow-hidden relative h-[600px]">
                <h4 className="text-lg font-bold text-gray-800 mb-4 text-center">
                  Wonders of Data Science & AI
                </h4>

                {/* Rotating Cards */}
                <div className="relative h-120">
                  {wonders.map((item, i) => (
                    <div
                      key={i}
                      className={`wonder-card absolute inset-0 bg-gradient-to-br ${item.bg} rounded-xl p-10 text-white transform transition-all duration-1000 ${
                        i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    >
                      {item.icon}
                      <h5 className="font-bold text-2xl mb-2">{item.title}</h5>
                      <p className={`text-lg ${item.textColor}`}>{item.text}</p>
                    </div>
                  ))}
                </div>

                {/* Progress Dots */}
                <div className="flex justify-center space-x-2 mt-4">
                  {wonders.map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === current ? 'bg-gray-800' : 'bg-gray-300'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full p-3 shadow-lg floating-animation">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-3 shadow-lg floating-animation">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="absolute top-1/2 -left-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-2 shadow-lg floating-animation">
                <Brain className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <CertificateSection></CertificateSection>

    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why SNPL is Better
          </h2>
          <p className="text-xl text-gray-600">
            Compare traditional vs SNPL approach
          </p>
        </div>

      
        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Traditional Fees */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Traditional Fees
            </h3>
            <div className="space-y-4">
              {[
                ['Course Fee', '₹80,000'],
                ['Upfront Payment', '₹80,000'],
                ['Job Guarantee', '❌ No'],
                ['Risk', 'High'],
              ].map(([label, value], idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="text-gray-600">{label}</span>
                  <span className="font-bold text-red-600">{value}</span>
                </div>
              ))}
            </div>
          </div>

          
          {/* SNPL Program */}
          <div className="bg-gradient-to-br from-green-400 to-blue-600 p-8 rounded-xl shadow-lg text-white relative">
            <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
              RECOMMENDED
            </div>
            <h3 className="text-2xl font-bold mb-6 text-center">
              SNPL Program
            </h3>
            <div className="space-y-4">
              {[
                ['Course Fee', '₹0'],
                ['Upfront Payment', '₹0'],
                ['Job Guarantee', '✅ Yes'],
                ['Risk', 'Zero'],
              ].map(([label, value], idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span>{label}</span>
                  <span className="font-bold">{value}</span>
                </div>
              ))}

              {/* Highlight Box */}
              <div className="bg-white bg-opacity-20 p-4 rounded-lg text-center">
                <p className="text-lg text-gray-900">
                  Pay only after getting placed
                </p>
                <p className="text-xs mt-2 text-gray-900">
                  Starting from ₹15,000/month
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mt-16 text-center">
          <CountDownTimer />
        </div>
      </div>
    </section>


    <section className="py-12 px-4 bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition duration-300">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Choose Your Mode of Learning
          </h1>
          <p className="text-gray-600">
            Select your preferred learning style and explore our programs
          </p>
        </div>

        {/* Toggle buttons */}
        <div className="flex gap-3 justify-center mb-8 bg-gray-100 p-2 rounded-2xl max-w-md mx-auto">
          <button
            onClick={() => setMode("online")}
            className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
              mode === "online"
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            🟣 Online
          </button>
          <button
            onClick={() => setMode("offline")}
            className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
              mode === "offline"
                ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            🔵 Offline
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards[mode].map((card, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl text-white relative ${card.gradient} transition-transform hover:scale-[1.02]`}
            >
              <div className="absolute top-3 right-3">
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${card.badgeColor}`}
                >
                  {card.badge}
                </span>
              </div>
              <div className="mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mb-3">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-1">{card.title}</h3>
                <p className="text-sm font-semibold text-white text-opacity-90 mb-2">
                  {card.subtitle}
                </p>
                <p className="text-sm text-white text-opacity-80">
                  {card.description}
                </p>
              </div>

              {/* Apply button only */}
              <div className="mt-4">
                <button
                  onClick={() => {}}
                  className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition"
                >
                  <span className="flex items-center justify-center gap-1">
                    <ArrowRight className="w-4 h-4" /> Apply
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Always-visible Still Confused Button */}
        <div className="text-center mt-10">
          <button
            className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md hover:shadow-lg transition"
            onClick={() => {}}
          >
            ❓ Still Confused?
          </button>
        </div>
      </div>
    </section>

    <LeadForm></LeadForm>


    {/* FAQ SECTION */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            FAQs — Reduce Hesitation
          </h2>

          {faqData.map((group, groupIdx) => (
            <div key={group.category} className="space-y-4 mb-12">
              <h3 className="text-xl font-bold text-purple-600 mb-6">{group.category}</h3>
              {group.items.map((item, itemIdx) => {
                const index = `${groupIdx}-${itemIdx}`;
                const isOpen = openIndex === index;

                return (
                  <div key={index} className="bg-white rounded-lg shadow-md">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 accordion-btn"
                    >
                      <span className="font-semibold">{item.question}</span>
                      <ChevronRight
                        className={`accordion-icon text-gray-400 transition-transform duration-300 ${
                          isOpen ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`accordion-content px-6 overflow-hidden transition-all duration-300 ${
                        isOpen ? 'max-h-60 py-4' : 'max-h-0'
                      }`}
                    >
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default PostGraduation1;
