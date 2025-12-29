"use client";

import React, { useState } from "react";
import { 
  Database, 
  Calculator, 
  ChevronDown,
  BarChart3, 
  BookOpen,
  Target,
  FileSpreadsheet, 
  Box,
  PieChart, 
  Table, 
  Search, 
  BarChart, 
  Brain, 
  Users,
  ChevronRight, 
  FolderOpen, 
  Zap, 
  Code,
  GitBranch, 
  Workflow, 
  Settings, 
  Repeat 
} from "lucide-react";


const CourseCurriculum = () => {
  const [expandedModules, setExpandedModules] = useState(new Set());
  const [activeSection, setActiveSection] = useState("preRequisites");

  const toggleModule = (moduleId) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId);
    } else {
      newExpanded.add(moduleId);
    }
    setExpandedModules(newExpanded);
  };

  // Pre-requisites Section (Image 1)
const preRequisites = [
  {
    id: "intro-data-science",
    title: "Introduction to Data Science and Analytics",
    icon: <Database className="w-8 h-8 text-white" />,
    color: "white",
    description: "Foundation concepts of data science, analytics workflows, and industry applications",
    duration: "1 weeks",
    topics: [
      "What is Data Science?",
      "Data Analytics vs Data Science", 
      "Industry Applications",
      "Career Paths in Data Science",
      "Tools and Technologies Overview"
    ]
  },
  {
    id: "basics-mathematics",
    title: "Basics of Mathematics",
    icon: <Calculator className="w-8 h-8 text-white" />,
    color: "white",
    description: "Essential mathematical foundations for data science and analytics",
    duration: "1 weeks",
    topics: [
      "Number System",
      "Permutation Combinations",
      "Probability"
    ]
  },
  {
    id: "statistics",
    title: "Statistics",
    icon: <BarChart3 className="w-8 h-8 text-white" />,
    color: "white",
    description: "Core statistical concepts and methods for data analysis",
    duration: "1 weeks",
    topics: [
      "Data and types of data",
      "Central tendencies", 
      "Measures of Spread",
      "Normal Distribution",
      "Measures of shape",
      "Central limiting theorem"
    ]
  },
  {
    id: "basics-python",
    title: "Basics of Python",
    icon: <Code className="w-8 h-8 text-white" />,
    color: "white",
    description: "Python programming fundamentals for data science applications",
    duration: "1 weeks",
    topics: [
      "Datatypes",
      "List, Tuple, Dictionaries",
      "Conditional statements",
      "Iterating Statements",
      "Exceptional Handling"
    ]
  },
  {
    id: "statistical-analysis-excel",
    title: "Statistical Analysis with MS Excel",
    icon: <FileSpreadsheet className="w-8 h-8 text-white" />,
    color: "white",
    description: "Data analysis and statistical operations using Microsoft Excel",
    duration: "1 weeks",
    topics: [
      "Data Handling",
      "Statistical Analysis",
      "Report Generation", 
      "Task Automation"
    ]
  }
];

  // Fundamentals of Data Analytics Section (Image 1)
const fundamentalsOfDataAnalytics = [
  {
    id: "numpy",
    title: "Numpy",
    icon: <Box className="w-8 h-8 text-white" />,
    color: "white",
    description: "Numerical computing library for efficient array operations and mathematical functions",
    duration: "1 week",
    topics: [
      "Numpy Arrays",
      "Strategical Array Construction",
      "Array based Functions and Methods"
    ]
  },
  {
    id: "visualization",
    title: "Visualization", 
    icon: <PieChart className="w-8 h-8  text-white" />,
    color: "white",
    description: "Data visualization techniques and libraries for creating insightful charts",
    duration: "1 weeks",
    topics: [
      "Types of Plots",
      "Matplotlib",
      "Seaborn",
      "Plotly"
    ]
  },
  {
    id: "pandas",
    title: "Pandas",
    icon: <Table className="w-8 h-8  text-white" />,
    color: "white", 
    description: "Data manipulation and analysis library for structured data processing",
    duration: "1 weeks",
    topics: [
      "Pandas Series",
      "Pandas Dataframes",
      "Data Profiling/Cleaning",
      "Concatenation",
      "Merging",
      "Groupby and Pivot Tables"
    ]
  },
  {
    id: "exploratory-data-analysis",
    title: "Exploratory Data Analysis",
    icon: <Search className="w-8 h-8 text-white" />,
    color: "white",
    description: "Techniques for exploring and understanding datasets through statistical methods",
    duration: "2 weeks", 
    topics: [
      "Univariate Analysis",
      "Bivariate Analysis",
      "Multivariate Analysis"
    ]
  },
  {
    id: "power-bi",
    title: "Power BI",
    icon: <BarChart className="w-8 h-8  text-white" />,
    color: "white",
    description: "Business intelligence tool for creating interactive dashboards and reports",
    duration: "1 weeks",
    topics: [
      "Interactive Plotting",
      "Data Transformation", 
      "Data Modeling",
      "Dynamic Dashboarding",
      "Dax query"
    ]
  },
  {
    id: "sql",
    title: "SQL",
    icon: <Database className="w-8 h-8  text-white" />,
    color: "white",
    description: "Database querying language for data extraction and manipulation",
    duration: "1 weeks",
    topics: [
      "Sub query",
      "Common table expression",
      "SQL function",
      "Joins"
    ]
  }
];


  // Advance Business Analytics Section (Image 2)  
const advanceBusinessAnalytics = [
  {
    id: "machine-learning-fundamentals",
    title: "Machine Learning Fundamentals for BA",
    icon: <Brain className="w-8 h-8  text-white" />,
    color: "white",
    description: "Core machine learning concepts and techniques for business analytics",
    duration: "2 weeks",
    topics: [
      "Supervised ML",
      "Unsupervised ML", 
      "Evaluation Techniques"
    ]
  },
  {
    id: "business-consulting",
    title: "Business Consulting Essentials",
    icon: <Users className="w-8 h-8  text-white" />,
    color: "white",
    description: "Essential skills for business consulting and stakeholder management",
    duration: "1 weeks",
    topics: [
      "Problem Structuring",
      "Stakeholder Handling"
    ]
  },
  {
    id: "project-management", 
    title: "Project Management Fundamentals",
    icon: <FolderOpen className="w-8 h-8 text-white" />,
    color: "white",
    description: "Project management methodologies and tools for analytics projects",
    duration: "1 weeks",
    topics: [
      "Scoping & Scheduling",
      "Risk & Communication", 
      "Budgeting"
    ]
  },
  {
    id: "agile-methodology",
    title: "Agile Methodology",
    icon: <Zap className="w-8 h-8 text-white" />,
    color: "white",
    description: "Agile project management frameworks and implementation strategies",
    duration: "1 week", 
    topics: [
      "Scrum framework, roles, and sprint planning",
      "User stories, backlog grooming and sprint retrospectives"
    ]
  },
  {
    id: "jira-confluence",
    title: "Jira and Confluence",
    icon: <GitBranch className="w-8 h-8 text-white" />,
    color: "white",
    description: "Project tracking and collaboration tools for team management",
    duration: "1 week",
    topics: [
      "Task & Sprint Management",
      "Documentation & Collaboration"
    ]
  },
  {
    id: "power-automate-visio",
    title: "Power Automate and Visio", 
    icon: <Workflow className="w-8 h-8 text-white" />,
    color: "white",
    description: "Process automation and workflow visualization tools",
    duration: "1 week",
    topics: [
      "Workflow Automation",
      "Process Mapping"
    ]
  },
  {
    id: "alteryx-ui-path",
    title: "Alteryx and UI Path",
    icon: <Settings className="w-8 h-8 text-white" />,
    color: "white", 
    description: "Advanced data preparation and robotic process automation tools",
    duration: "1 weeks",
    topics: [
      "Data Prep & Blending",
      "Task Automation"
    ]
  },
  {
    id: "sdlc",
    title: "Software Development Life Cycle (SDLC)",
    icon: <Repeat className="w-8 h-8 text-white" />,
    color: "white",
    description: "Software development methodologies and lifecycle management",
    duration: "1 week", 
    topics: [
      "SDLC phases and methodologies",
      "Requirements gathering and documentation",
      "Testing and deployment strategies"
    ]
  }
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
              <div className="flex mx-20 items-center gap-2 text-black/80 text-xs sm:text-sm">
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
      case "preRequisites":
        return {
          modules: preRequisites,
          title: "Pre-requisites",
          description: "Essential foundational knowledge and skills",
        };
      case "fundamentalsOfDataAnalytics":
        return {
          modules: fundamentalsOfDataAnalytics,
          title: "Fundamentals of Data Analytics",
          description: "Core technical skills and tools for data analysis",
        };
      case "advanceBusinessAnalytics":
        return {
          modules: advanceBusinessAnalytics,
          title: "Advance Business Analytics",
          description: "Advanced tools and methodologies for business analytics",
        };
      default:
        return {
          modules: preRequisites,
          title: "Pre-requisites",
          description: "Essential foundational knowledge and skills",
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
            <h1 className="text-2xl sm:text-3xl font-bold">
              Course Curriculum
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex bg-gray-100 rounded-2xl p-2">
              <button
                onClick={() => setActiveSection("preRequisites")}
                className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeSection === "preRequisites"
                    ? "bg-white text-red-600 shadow-md"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Pre-requisites
              </button>
              <button
                onClick={() => setActiveSection("fundamentalsOfDataAnalytics")}
                className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeSection === "fundamentalsOfDataAnalytics"
                    ? "bg-white text-red-600 shadow-md"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Fundamentals of Data Analytics
              </button>
              <button
                onClick={() => setActiveSection("advanceBusinessAnalytics")}
                className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeSection === "advanceBusinessAnalytics"
                    ? "bg-white text-red-600 shadow-md"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Advance Business Analytics
              </button>
            </div>

            {/* Mobile Navigation - Horizontal Scroll */}
            <div className="lg:hidden gap-2 mt-2">
              <div className="flex bg-gray-100 rounded-xl p-1 overflow-x-auto scrollbar-hide">
                <button
                  onClick={() => setActiveSection("preRequisites")}
                  className={`px-3 py-2 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap text-sm ${
                    activeSection === "preRequisites"
                      ? "bg-white text-blue-600 shadow-md"
                      : "text-gray-600"
                  }`}
                >
                  Pre-requisites
                </button>
                <button
                  onClick={() => setActiveSection("fundamentalsOfDataAnalytics")}
                  className={`px-3 py-2 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap text-sm ${
                    activeSection === "fundamentalsOfDataAnalytics"
                      ? "bg-white text-blue-600 shadow-md"
                      : "text-gray-600"
                  }`}
                >
                  Fundamentals
                </button>
                <button
                  onClick={() => setActiveSection("advanceBusinessAnalytics")}
                  className={`px-3 py-2 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap text-sm ${
                    activeSection === "advanceBusinessAnalytics"
                      ? "bg-white text-blue-600 shadow-md"
                      : "text-gray-600"
                  }`}
                >
                  Advance Analytics
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
                {preRequisites.length || 0}
              </div>
              <p className="text-gray-600 font-medium text-xs sm:text-sm">
                Pre-requisites
              </p>
            </div>
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-400 flex-shrink-0" />
            <div className="text-center flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-2">
                {fundamentalsOfDataAnalytics.length || 0}
              </div>
              <p className="text-gray-600 font-medium text-xs sm:text-sm">
                Fundamentals
              </p>
            </div>
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-400 flex-shrink-0" />
            <div className="text-center flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-2">
                {advanceBusinessAnalytics.length || 0}
              </div>
              <p className="text-gray-600 font-medium text-xs sm:text-sm">
                Advance Analytics
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:hidden gap-4 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2 mx-auto">
                {preRequisites.length || 0}
              </div>
              <p className="text-gray-600 font-medium text-xs">Pre-requisites</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2 mx-auto">
                {fundamentalsOfDataAnalytics.length || 0}
              </div>
              <p className="text-gray-600 font-medium text-xs">Fundamentals</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2 mx-auto">
                {advanceBusinessAnalytics.length || 0}
              </div>
              <p className="text-gray-600 font-medium text-xs">
                Advance Analytics
              </p>
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
              <p className="text-gray-600 font-medium text-xs">Job Assurance</p>
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