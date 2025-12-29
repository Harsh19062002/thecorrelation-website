"use client";

import React, { useState } from "react";
import {
  Database,
  BarChart3,
  TrendingUp,
  Code,
  FileSpreadsheet,
  Brain,
  Layers,
  Target,
  LineChart,
  CheckCircle,
  GitBranch,
  MapPin,
  Shield,
  Clock,
  Star,
  Minimize2,
  Zap,
  Hexagon,
  Users,
  Settings,
  Cpu,
  MessageSquare,
  ArrowRight,
  Eye,
  Globe,
  Upload,
  Sparkles,
  BookOpen,
  Image,
  Wrench,
  ChevronDown,
  ChevronRight,
  PieChart,
  Lightbulb,
  Play,
} from "lucide-react";

const CourseCurriculum = () => {
  const [expandedModules, setExpandedModules] = useState(new Set());
  const [activeSection, setActiveSection] = useState("prerequisites");

  const toggleModule = (moduleId) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId);
    } else {
      newExpanded.add(moduleId);
    }
    setExpandedModules(newExpanded);
  };

   const prerequisites = [
       {
         id: "intro-data-science",
         title: "Introduction to Data Science and Analytics",
         icon: <Database className="w-8 h-8 text-white" />,
         color: "white",
         description:
           "Foundation concepts of data science, analytics workflows, and industry applications",
         duration: "1 weeks",
         topics: [
           "What is Data Science?",
           "Data Analytics vs Data Science",
           "Industry Applications",
           "Career Paths in Data Science",
           "Tools and Technologies Overview",
         ],
       },
       {
         id: "statistics",
         title: "Statistics",
         icon: <BarChart3 className="w-8 h-8 text-white " />,
         description:
           "Essential statistical concepts for data analysis and interpretation",
         duration: "1 weeks",
         topics: [
           "Data and types of data",
           "Central tendencies (Mean, Median, Mode)",
           "Measures of Spread (Variance, Standard Deviation)",
           "Normal Distribution",
           "Measure of shape (Skewness, Kurtosis)",
           "Central Limiting Theorem",
         ],
         color: "white",
       },
       {
         id: "mathematics",
         title: "Basics of Mathematics",
         icon: <TrendingUp className="w-8 h-8 text-white " />,
         description:
           "Mathematical foundations required for data science algorithms",
         duration: "1 weeks",
         topics: [
           "Number System and Operations",
           "Permutation and Combinations",
           "Probability Theory",
           "Basic Linear Algebra",
           "Set Theory",
         ],
         color: "white",
       },
       {
         id: "python-basics",
         title: "Basics of Python",
         icon: <Code className="w-8 h-8 text-white" />,
         description:
           "Python programming fundamentals for data manipulation and analysis",
         duration: "1 weeks",
         topics: [
           "Python Syntax and Variables",
           "Data Types (int, float, string, boolean)",
           "Lists, Tuples, and Dictionaries",
           "Conditional Statements (if, elif, else)",
           "Loops (for, while)",
           "Functions and Modules",
           "Exception Handling",
           "File Operations",
         ],
         color: "white",
       },
       {
         id: "excel-analysis",
         title: "Statistical Analysis with MS Excel",
         icon: <FileSpreadsheet className="w-8 h-8 text-white" />,
         description:
           "Advanced Excel techniques for data analysis and visualization",
         duration: "1 weeks",
         topics: [
           "Data Processing and Cleaning",
           "Statistical Functions",
           "Pivot Tables and Charts",
           "Statistical Analysis Tools",
           "Report Generation",
           "VBA for Task Automation",
           "Dashboard Creation",
         ],
         color: "white",
       },
     ];


  const fundamentals = [
      {
        id: "numpy",
        title: "NumPy - Numerical Computing",
        icon: <Database className="w-8 h-8 text-white" />,
        description:
          "Master numerical computing with NumPy arrays and operations",
        duration: "1 weeks",
        topics: [
          "NumPy Arrays Creation and Indexing",
          "Array Operations and Broadcasting",
          "Mathematical Functions",
          "Strategic Array Construction",
          "Array-based Functions and Methods",
          "Performance Optimization",
        ],
        color: "white",
      },
      {
        id: "pandas",
        title: "Pandas - Data Manipulation",
        icon: <FileSpreadsheet className="w-8 h-8 text-white" />,
        description: "Comprehensive data manipulation and analysis with Pandas",
        duration: "1 weeks",
        topics: [
          "Pandas Series and DataFrames",
          "Data Loading from Various Sources",
          "Data Cleaning and Preprocessing",
          "Data Profiling and Quality Assessment",
          "Concatenation and Merging",
          "GroupBy Operations",
          "Pivot Tables and Cross-tabulation",
          "Time Series Analysis",
        ],
        color: "white",
      },
      {
        id: "visualization",
        title: "Data Visualization",
        icon: <Eye className="w-8 h-8 text-white" />,
        description:
          "Create compelling visualizations to communicate insights effectively",
        duration: "1 weeks",
        topics: [
          "Principles of Data Visualization",
          "Types of Plots and When to Use Them",
          "Matplotlib for Static Plots",
          "Seaborn for Statistical Visualizations",
          "Plotly for Interactive Visualizations",
          "Advanced Customization",
          "Dashboard Creation",
        ],
        color: "white",
      },
      {
        id: "eda",
        title: "Exploratory Data Analysis",
        icon: <BarChart3 className="w-8 h-8 text-white" />,
        description:
          "Systematic approach to exploring and understanding datasets",
        duration: "2 weeks",
        topics: [
          "EDA Process and Methodology",
          "Univariate Analysis Techniques",
          "Bivariate Analysis and Correlation",
          "Multivariate Analysis",
          "Outlier Detection and Treatment",
          "Feature Engineering",
          "Data Storytelling",
        ],
        color: "white",
      },
      {
        id: "powerbi",
        title: "Power BI - Business Intelligence",
        icon: <Zap className="w-8 h-8 text-white" />,
        description:
          "Create interactive dashboards and business intelligence solutions",
        duration: "1 weeks",
        topics: [
          "Power BI Desktop Interface",
          "Data Import and Transformation",
          "Data Modeling and Relationships",
          "DAX (Data Analysis Expressions)",
          "Interactive Visualizations",
          "Dynamic Dashboarding",
          "Report Publishing and Sharing",
          "Power BI Service Features",
        ],
        color: "white",
      },
      {
        id: "sql",
        title: "SQL - Database Querying",
        icon: <Database className="w-8 h-8 text-white" />,
        description: "Master database querying and data extraction with SQL",
        duration: "1 weeks",
        topics: [
          "SQL Fundamentals and Syntax",
          "SELECT Statements and Filtering",
          "JOIN Operations (Inner, Outer, Cross)",
          "Subqueries and CTEs",
          "Window Functions",
          "Aggregate Functions",
          "Database Design Principles",
          "Performance Optimization",
        ],
        color: "white",
      },
    ];


  const ModuleCard = ({ module, index, section }) => {
    const isExpanded = expandedModules.has(module.id);

    return (
      <div className="group">
        <div
          className={`
          relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl transition-all duration-500 transform hover:scale-[1.01] lg:hover:scale-[1.02]
          ${
            isExpanded
              ? "shadow-2xl scale-[1.01] lg:scale-[1.02]"
              : "shadow-lg hover:shadow-xl"
          }
        `}
        >
          {/* Main Card */}
          <div
            className={`
            relative bg-gradient-to-br ${module.color} p-4 sm:p-6 lg:p-8
            cursor-pointer transition-all duration-300
          `}
            onClick={() => toggleModule(module.id)}
          >
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4 sm:mb-6">
                {/* Icon, Title, and Description in one line */}
                <div className="flex items-center gap-3 sm:gap-2 flex-1">
                  <div className="p-2 sm:p-3 lg:p-4 bg-red-600 backdrop-blur-sm rounded-xl sm:rounded-2xl flex-shrink-0 flex items-center justify-center">
                    <div className="w-6 h-6 sm:w-9 sm:h-8 lg:w-8 lg:h-8 flex items-center justify-center">
                      {module.icon}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-black font-bold text-lg sm:text-xl lg:text-2xl leading-tight mb-1">
                      {module.title}
                    </h3>
                    <p className="text-black text-sm sm:text-base leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                </div>

                {/* Duration and Chevron */}
                <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 ml-4">
                  <span className="px-2 sm:px-3 py-1 bg-black/10 rounded-full text-xs sm:text-sm font-medium text-black">
                    {module.duration}
                  </span>
                  <div
                    className={`
        p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-full transition-transform duration-300
        ${isExpanded ? "rotate-180" : "hover:rotate-90"}
      `}
                  >
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  </div>
                </div>
              </div>

              {/* Topics info moved to bottom */}
              <div className="flex mx-20 items-center gap-2 text-black text-xs sm:text-sm">
                <BookOpen className=" w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
                <span>{module.topics?.length || 0} Topics</span>
              </div>
            </div>
          </div>

          {/* Expanded Content */}
          <div
            className={`
            bg-white border-t-4 border-white/20 transition-all duration-500 overflow-hidden
            ${isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}
          `}
          >
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                <h4 className="text-lg sm:text-xl font-bold text-gray-800">
                  Learning Objectives
                </h4>
              </div>

              <div className="grid  gap-2 sm:gap-4">
                {module.topics?.map((topic, topicIndex) => (
                  <div
                    key={topicIndex}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors duration-200 group/topic"
                  >
                    <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                      {topicIndex + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-gray-800 font-medium leading-relaxed block text-sm sm:text-base">
                        {topic}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SectionContent = ({ modules, sectionTitle, sectionDescription }) => (
    <section>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12 gap-4">
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 relative z-10">
            {sectionTitle}
          </h2>
        </div>
        <div className="text-left sm:text-right">
          <p className="text-gray-600 text-base sm:text-lg">
            {sectionDescription}
          </p>
          <p className="text-xl sm:text-2xl font-bold text-gray-800">
            {modules.length} Modules
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
        {modules.map((module, index) => (
          <ModuleCard
            key={module.id}
            module={module}
            index={index}
            section={activeSection}
          />
        ))}
      </div>
    </section>
  );

  const getSectionData = () => {
    switch (activeSection) {
      case "prerequisites":
        return {
          modules: prerequisites,
          title: "Prerequisites",
          description: "Build your foundation",
        };
      case "fundamentals":
        return {
          modules: fundamentals,
          title: "Fundamentals of Analytics",
          description: "Master the essentials",
        };
      default:
        return {
          modules: prerequisites,
          title: "Prerequisites",
          description: "Build your foundation",
        };
    }
  };

  const currentSection = getSectionData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-black ">
              Course Curriculum
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex bg-gray-100 rounded-2xl p-2">
              <button
                onClick={() => setActiveSection("prerequisites")}
                className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeSection === "prerequisites"
                    ? "bg-white text-red-600 shadow-md"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Prerequisites
              </button>
              <button
                onClick={() => setActiveSection("fundamentals")}
                className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeSection === "fundamentals"
                    ? "bg-white text-red-600 shadow-md"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Fundamentals
              </button>
            </div>

            {/* Mobile Navigation - Horizontal Scroll */}
            <div className="lg:hidden gap-2 mt-2">
              <div className="flex bg-gray-100 rounded-xl p-1 overflow-x-auto scrollbar-hide">
                <button
                  onClick={() => setActiveSection("prerequisites")}
                  className={`px-3 py-2 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap text-sm ${
                    activeSection === "prerequisites"
                      ? "bg-white text-blue-600 shadow-md"
                      : "text-gray-600"
                  }`}
                >
                  Prerequisites
                </button>
                <button
                  onClick={() => setActiveSection("fundamentals")}
                  className={`px-3 py-2 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap text-sm ${
                    activeSection === "fundamentals"
                      ? "bg-white text-blue-600 shadow-md"
                      : "text-gray-600"
                  }`}
                >
                  Fundamentals
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <SectionContent
          modules={currentSection.modules}
          sectionTitle={currentSection.title}
          sectionDescription={currentSection.description}
        />

        {/* Progress Indicator */}
        <div className="mt-12 sm:mt-16 lg:mt-20 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
              Your Learning Journey
            </h3>
            <p className="text-gray-600 text-base sm:text-lg">
              Complete all sections to become a certified data analyst
            </p>
          </div>

          {/* Desktop Progress Flow */}
          <div className="hidden lg:flex items-center justify-center gap-4 mb-8 overflow-x-auto pb-4">
            <div className="text-center flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-2">
                {prerequisites.length || 0}
              </div>
              <p className="text-gray-600 font-medium text-xs sm:text-sm">
                Prerequisites
              </p>
            </div>
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-400 flex-shrink-0" />
            <div className="text-center flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-2">
                {fundamentals.length || 0}
              </div>
              <p className="text-gray-600 font-medium text-xs sm:text-sm">
                Fundamentals
              </p>
            </div>
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-400 flex-shrink-0" />
            <div className="text-center flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-2">
                🎓
              </div>
              <p className="text-gray-600 font-medium text-xs sm:text-sm">
                Certification
              </p>
            </div>
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-400 flex-shrink-0" />
            <div className="text-center flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-2">
                💼
              </div>
              <p className="text-gray-600 font-medium text-xs sm:text-sm">
               Job Assurance
              </p>
            </div>
          </div>

          {/* Mobile Progress Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:hidden gap-4 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2 mx-auto">
                {prerequisites.length || 0}
              </div>
              <p className="text-gray-600 font-medium text-xs">Prerequisites</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2 mx-auto">
                {fundamentals.length || 0}
              </div>
              <p className="text-gray-600 font-medium text-xs">Fundamentals</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2 mx-auto">
                🎓
              </div>
              <p className="text-gray-600 font-medium text-xs">Certification</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2 mx-auto">
                💼
              </div>
              <p className="text-gray-600 font-medium text-xs"> Job Assurance</p>
            </div>
          </div>

          <div className="text-center">
            <button
             onClick={() => {
                    const formElement = document.getElementById("contact-form");
                    if (formElement) formElement.scrollIntoView({ behavior: "smooth" });
                  }}
            className="inline-flex items-center gap-3 sm:gap-4 bg-green-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center">
              <span>Enroll Now</span>
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCurriculum;