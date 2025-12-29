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

  const foundationalML = [
    {
      id: "supervised-ml",
      title: "Supervised ML",
      icon: <Brain className="w-8 h-8 text-white" />,
      color: "white",
      description:
        "Learn supervised learning algorithms and their applications",
      duration: "2 weeks",
      topics: [
        "Introduction to Supervised Learning",
        "Training and Testing Data",
        "Model Performance Evaluation",
        "Overfitting and Underfitting",
        "Cross-validation Techniques",
      ],
    },
    {
      id: "unsupervised-ml",
      title: "Unsupervised ML",
      icon: <Layers className="w-8 h-8 text-white" />,
      color: "white",
      description:
        "Explore clustering, dimensionality reduction, and pattern discovery",
      duration: "2 weeks",
      topics: [
        "Clustering Algorithms (K-means, Hierarchical)",
        "Principal Component Analysis (PCA)",
        "Association Rules",
        "Anomaly Detection",
        "Market Basket Analysis",
      ],
    },
    {
      id: "reinforcement-learning",
      title: "Reinforcement Learning",
      icon: <Target className="w-8 h-8 text-white" />,
      color: "white",
      description: "Introduction to reward-based learning systems",
      duration: "2 weeks",
      topics: [
        "Agent-Environment Interaction",
        "Rewards and Penalties",
        "Q-Learning Basics",
        "Exploration vs Exploitation",
        "Simple RL Applications",
      ],
    },
    {
      id: "parametric-supervised",
      title: "Parametric Supervised Learning Approaches",
      icon: <LineChart className="w-8 h-8 text-white" />,
      color: "white",
      description: "Linear and logistic regression techniques",
      duration: "3 weeks",
      topics: [
        "Linear Regression",
        "Multiple Linear Regression",
        "Polynomial Regression",
        "Logistic Regression",
        "Model Assumptions and Diagnostics",
      ],
    },
    {
      id: "model-evaluation",
      title: "Model Evaluation Techniques",
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      color: "white",
      description: "Methods to assess and compare model performance",
      duration: "1 weeks",
      topics: [
        "Types of Errors",
        "Confusion Matrix",
        "ROC-AUC Curves",
        "Precision, Recall, F1-Score",
        "Cross-validation Strategies",
      ],
    },
    {
      id: "decision-trees",
      title: "Decision Trees",
      icon: <GitBranch className="w-8 h-8 text-white" />,
      color: "white",
      description: "Tree-based algorithms for classification and regression",
      duration: "1 weeks",
      topics: [
        "Entropy and Information Gain",
        "Gini Impurity",
        "Pruning Techniques",
        "Random Forest",
        "Decision Tree Visualization",
      ],
    },
    {
      id: "instance-based",
      title: "Instance Based Approaches and Dimensionality Reduction",
      icon: <MapPin className="w-8 h-8 text-white" />,
      color: "white",
      description:
        "Nearest neighbor algorithms and dimensionality reduction techniques",
      duration: "1 weeks",
      topics: [
        "K-Nearest Neighbors",
        "Distance Metrics",
        "K-Means Clustering",
        "Principal Component Analysis (PCA)",
        "Dimensionality Curse",
      ],
    },
    {
      id: "data-handling",
      title: "Data Handling",
      icon: <Database className="w-8 h-8 text-white" />,
      color: "white",
      description: "Data preprocessing and feature engineering techniques",
      duration: "1 weeks",
      topics: [
        "Null Value Treatment",
        "Outlier Detection",
        "Feature Engineering and Selection",
        "Data Binding",
        "Imbalance Treatment",
      ],
    },
    {
      id: "ethics-ml",
      title: "Ethics for Data Science & Model Handling",
      icon: <Shield className="w-8 h-8 text-white" />,
      color: "white",
      description: "Ethical considerations and responsible AI practices",
      duration: "1 week",
      topics: [
        "Bias in Machine Learning",
        "Fairness and Transparency",
        "Privacy and Data Protection",
        "Model Interpretability",
        "Responsible AI Guidelines",
      ],
    },
  ];

  // Advanced Machine Learning Topics
  const advancedML = [
    {
      id: "data-structures-algorithms",
      title: "Data Structures and Algorithms",
      icon: <Code className="w-8 h-8 text-white" />,
      color: "white",
      description:
        "Essential programming concepts for efficient ML implementations",
      duration: "1 weeks",
      topics: [
        "Array, List",
        "Queues, Hashing and Searching Algorithms",
        "Sorting Algorithms and Trees",
        "Graphs",
        "Algorithm Complexity Analysis",
      ],
    },
    {
      id: "time-series",
      title: "Time Series Analysis",
      icon: <Clock className="w-8 h-8 text-white" />,
      color: "white",
      description: "Analyze and forecast temporal data patterns",
      duration: "2 weeks",
      topics: [
        "Smoothing and Trend Analysis",
        "Types of Smoothing",
        "ARIMA, SARIMA, ARMA",
        "Seasonal Decomposition",
        "Forecasting Techniques",
      ],
    },
    {
      id: "advanced-recommendation",
      title: "Advanced Recommendation Systems",
      icon: <Star className="w-8 h-8 text-white" />,
      color: "white",
      description: "Build sophisticated recommendation engines",
      duration: "1 weeks",
      topics: [
        "Collaborative Filtering",
        "Apriori Algorithm",
        "Content Based",
        "User Based, Item Based",
        "Matrix Factorization",
      ],
    },
    {
      id: "advanced-dimensionality",
      title: "Advanced Dimensionality Reduction",
      icon: <Minimize2 className="w-8 h-8 text-white" />,
      color: "white",
      description: "Advanced techniques for high-dimensional data",
      duration: "1 weeks",
      topics: [
        "Linear Discriminant Analysis",
        "t-SNE",
        "UMAP",
        "Feature Selection Methods",
        "Manifold Learning",
      ],
    },
    {
      id: "svm",
      title: "Support Vector Machines",
      icon: <Zap className="w-8 h-8 text-white" />,
      color: "white",
      description: "Powerful classification and regression technique",
      duration: "1 weeks",
      topics: [
        "Soft and Hard Margin",
        "Kernel Functions",
        "Kernel Trick",
        "SVM for Classification",
        "SVM for Regression",
      ],
    },
    {
      id: "advanced-clustering",
      title: "Advanced Clustering",
      icon: <Hexagon className="w-8 h-8 text-white" />,
      color: "white",
      description: "Sophisticated clustering algorithms and techniques",
      duration: "1 weeks",
      topics: [
        "DBSCAN",
        "Hierarchical Clustering",
        "Gaussian Mixture Models",
        "Spectral Clustering",
        "Cluster Validation",
      ],
    },
    {
      id: "ensemble-learning",
      title: "Ensemble Learning",
      icon: <Users className="w-8 h-8 text-white" />,
      color: "white",
      description: "Combine multiple models for better performance",
      duration: "2 weeks",
      topics: [
        "Bagging",
        "Boosting",
        "Stacking",
        "Voting Classifiers",
        "Model Selection and Combination",
      ],
    },
    {
      id: "optimization-regularization",
      title: "Optimization and Regularization Techniques",
      icon: <Settings className="w-8 h-8 text-white" />,
      color: "white",
      description: "Advanced optimization methods and regularization",
      duration: "2 weeks",
      topics: [
        "Grid, Random Search",
        "Gradient Descent",
        "L1, L2 Regularization",
        "Ridge(L1), Lasso(L2)",
        "Elastic Net",
      ],
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

  const deepLearning = [
    {
      id: "intro-neural-networks",
      title: "Introduction to Neural Networks",
      icon: <Brain className="w-8 h-8" />,
      color: "white",
      description: "Fundamental concepts of neural networks and deep learning",
      duration: "1 weeks",
      topics: [
        "Multi Layered Perceptrons",
        "Types of Activation Functions",
        "Types of Optimizers",
        "Backpropagation Algorithm",
        "Neural Network Architecture",
      ],
    },
    {
      id: "tensorflow",
      title: "TensorFlow",
      icon: <Cpu className="w-8 h-8" />,
      color: "white",
      description: "Deep learning framework for building and training models",
      duration: "1 weeks",
      topics: [
        "Tensors",
        "Keras",
        "NN Modeling",
        "Model Evaluation",
        "GPU Acceleration",
      ],
    },
    {
      id: "classical-nlp",
      title: "Classical NLP",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "white",
      description: "Natural language processing fundamentals and techniques",
      duration: "1 weeks",
      topics: [
        "Bag of Words",
        "Word2Vec",
        "TF-IDF",
        "Text Preprocessing",
        "Sentiment Analysis",
      ],
    },
    {
      id: "sequence-models",
      title: "Sequence Models",
      icon: <ArrowRight className="w-8 h-8 text-white" />,
      color: "white",
      description: "Advanced models for sequential data processing",
      duration: "2 weeks",
      topics: [
        "RNN",
        "LSTM",
        "GRU",
        "Sequence to Sequence",
        "Attention Mechanisms",
      ],
    },
    {
      id: "computer-vision",
      title: "Computer Vision",
      icon: <Eye className="w-8 h-8 text-white" />,
      color: "white",
      description: "Image processing and computer vision techniques",
      duration: "1 weeks",
      topics: [
        "Image Processing",
        "OpenCV",
        "CNN",
        "Object Detection",
        "Image Classification",
      ],
    },
    {
      id: "web-scraping",
      title: "Web Scraping",
      icon: <Globe className="w-8 h-8 text-white" />,
      color: "white",
      description: "Extract data from websites for analysis and modeling",
      duration: "1 weeks",
      topics: [
        "HTTP Request Method",
        "BeautifulSoup",
        "Scrapy",
        "API Integration",
        "Data Extraction Techniques",
      ],
    },
    {
      id: "model-deployment",
      title: "Model Deployment",
      icon: <Upload className="w-8 h-8 text-white" />,
      color: "white",
      description: "Deploy machine learning models to production",
      duration: "1 weeks",
      topics: [
        "Deployment using Flask",
        "REST API Development",
        "Cloud Deployment",
        "Model Serving",
        "Monitoring and Maintenance",
      ],
    },
  ];

  const generativeAI = [
    {
      id: "intro-genai",
      title: "Introduction to Generative AI",
      icon: <Sparkles className="w-8 h-8 text-white" />,
      color: "white",
      description:
        "Fundamentals of generative artificial intelligence and its applications",
      duration: "1 weeks",
      topics: [
        "What is Generative AI",
        "Types of Generative Models",
        "Generative vs Discriminative Models",
        "Applications and Use Cases",
        "Ethical Considerations",
      ],
    },
    {
      id: "llm-fundamentals",
      title: "Large Language Models (LLMs)",
      icon: <BookOpen className="w-8 h-8 text-white" />,
      color: "white",
      description: "Understanding and working with large language models",
      duration: "2 weeks",
      topics: [
        "Transformer Architecture",
        "Pre-training and Fine-tuning",
        "GPT, BERT, T5 Models",
        "Prompt Engineering",
        "Model Evaluation and Benchmarks",
      ],
    },
    {
      id: "image-generation",
      title: "AI Image Generation",
      icon: <Image className="w-8 h-8 text-white" />, 
      color: "white",
      description: "Generate and manipulate images using AI models",
      duration: "1 weeks",
      topics: [
        "Diffusion Models",
        "GANs (Generative Adversarial Networks)",
        "VAEs (Variational Autoencoders)",
        "DALL-E, Midjourney, Stable Diffusion",
        "Image-to-Image Translation",
      ],
    },
    {
      id: "ai-applications",
      title: "AI Applications & Tools",
      icon: <Wrench className="w-8 h-8 text-white" />,
      color: "white",
      description:
        "Practical applications and tools for implementing generative AI",
      duration: "2 weeks",
      topics: [
        "OpenAI API Integration",
        "Hugging Face Transformers",
        "LangChain Framework",
        "RAG (Retrieval Augmented Generation)",
        "AI-Powered Chatbots and Assistants",
      ],
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
                  <div className="p-2 sm:p-3 lg:p-4 bg-red-600 backdrop-blur-sm rounded-full sm:rounded-2xl flex-shrink-0 flex items-center justify-center">
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
                  <span className="px-2 sm:px-3 py-1 bg-black/10 rounded-full text-xs sm:text-sm font-medium ">
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
      case "foundational-ml":
        return {
          modules: foundationalML,
          title: "Foundational Machine Learning",
          description: "Core ML concepts",
        };
      case "advanced-ml":
        return {
          modules: advancedML,
          title: "Advanced Machine Learning",
          description: "Sophisticated techniques",
        };
      case "deep-learning":
        return {
          modules: deepLearning,
          title: "Deep Learning",
          description: "Neural networks & AI",
        };
      case "generative-ai":
        return {
          modules: generativeAI,
          title: "Generative AI",
          description: "Create with AI",
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
    <div className="min-h-screen bg-gray-100">
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
              <button
                onClick={() => setActiveSection("foundational-ml")}
                className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeSection === "foundational-ml"
                    ? "bg-white text-red-600 shadow-md"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Foundational ML
              </button>
              <button
                onClick={() => setActiveSection("advanced-ml")}
                className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeSection === "advanced-ml"
                    ? "bg-white text-red-600 shadow-md"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Advanced ML
              </button>
              <button
                onClick={() => setActiveSection("deep-learning")}
                className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeSection === "deep-learning"
                    ? "bg-white text-red-600 shadow-md"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Deep Learning
              </button>
              <button
                onClick={() => setActiveSection("generative-ai")}
                className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeSection === "generative-ai"
                    ? "bg-white text-red-600 shadow-md"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Generative AI
              </button>
            </div>

            {/* Mobile Navigation - Horizontal Scroll */}
            <div className="lg:hidden  gap-2 mt-2">
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
                <button
                  onClick={() => setActiveSection("foundational-ml")}
                  className={`px-3 py-2 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap text-sm ${
                    activeSection === "foundational-ml"
                      ? "bg-white text-blue-600 shadow-md"
                      : "text-gray-600"
                  }`}
                >
                  Foundational ML
                </button>
                <button
                  onClick={() => setActiveSection("advanced-ml")}
                  className={`px-3 py-2 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap text-sm ${
                    activeSection === "advanced-ml"
                      ? "bg-white text-blue-600 shadow-md"
                      : "text-gray-600"
                  }`}
                >
                  Advanced ML
                </button>
                <button
                  onClick={() => setActiveSection("deep-learning")}
                  className={`px-3 py-2 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap text-sm ${
                    activeSection === "deep-learning"
                      ? "bg-white text-blue-600 shadow-md"
                      : "text-gray-600"
                  }`}
                >
                  Deep Learning
                </button>
                <button
                  onClick={() => setActiveSection("generative-ai")}
                  className={`px-3 py-2 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap text-sm ${
                    activeSection === "generative-ai"
                      ? "bg-white text-blue-600 shadow-md"
                      : "text-gray-600"
                  }`}
                >
                  Generative AI
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
              Complete all sections to become a certified data scientist
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
                {foundationalML.length || 0}
              </div>
              <p className="text-gray-600 font-medium text-xs sm:text-sm">
                Foundational ML
              </p>
            </div>
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-400 flex-shrink-0" />
            <div className="text-center flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-red-600  rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-2">
                {advancedML.length || 0}
              </div>
              <p className="text-gray-600 font-medium text-xs sm:text-sm">
                Advanced ML
              </p>
            </div>
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-400 flex-shrink-0" />
            <div className="text-center flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-2">
                {deepLearning.length || 0}
              </div>
              <p className="text-gray-600 font-medium text-xs sm:text-sm">
                Deep Learning
              </p>
            </div>
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-400 flex-shrink-0" />
            <div className="text-center flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-2">
                {generativeAI.length || 0}
              </div>
              <p className="text-gray-600 font-medium text-xs sm:text-sm">
                Generative AI
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
                🎓
              </div>
              <p className="text-gray-600 font-medium text-xs sm:text-sm">
                Internship
              </p>
            </div>
          </div>

          {/* Mobile Progress Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:hidden gap-4 mb-8">
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
                {foundationalML.length || 0}
              </div>
              <p className="text-gray-600 font-medium text-xs">
                Foundational ML
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2 mx-auto">
                {advancedML.length || 0}
              </div>
              <p className="text-gray-600 font-medium text-xs">Advanced ML</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2 mx-auto">
                {deepLearning.length || 0}
              </div>
              <p className="text-gray-600 font-medium text-xs">Deep Learning</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2 mx-auto">
                {generativeAI.length || 0}
              </div>
              <p className="text-gray-600 font-medium text-xs">Generative AI</p>
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
