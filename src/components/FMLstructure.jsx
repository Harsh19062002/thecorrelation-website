import React, { useState } from "react";
import {
  Database,
  Brain,
  Layers,
  Target,
  LineChart,
  CheckCircle,
  GitBranch,
  MapPin,
  Shield,
  BookOpen,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const CourseCurriculum = () => {
  const [expandedModules, setExpandedModules] = useState(new Set());

  const toggleModule = (moduleId) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId);
    } else {
      newExpanded.add(moduleId);
    }
    setExpandedModules(newExpanded);
  };

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

  const ModuleCard = ({ module, index }) => {
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
          <div
            className={`
            relative bg-gradient-to-br ${module.color} p-4 sm:p-6 lg:p-8
            cursor-pointer transition-all duration-300
          `}
            onClick={() => toggleModule(module.id)}
          >
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4 sm:mb-6">
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

              <div className="flex mx-20 items-center gap-2 text-black text-xs sm:text-sm">
                <BookOpen className=" w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
                <span>{module.topics?.length || 0} Topics</span>
              </div>
            </div>
          </div>

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-black">
              Course Curriculum
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12 gap-4">
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 relative z-10">
                Foundational Machine Learning
              </h2>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-gray-600 text-base sm:text-lg">
                Core ML concepts
              </p>
              <p className="text-xl sm:text-2xl font-bold text-gray-800">
                {foundationalML.length} Modules
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
            {foundationalML.map((module, index) => (
              <ModuleCard key={module.id} module={module} index={index} />
            ))}
          </div>
        </section>

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

          {/* Desktop Progress Flow - Single row with all items */}
          <div className="hidden lg:flex items-center justify-center gap-4 mb-8 overflow-x-auto pb-4">
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
          <div className="grid grid-cols-3 lg:hidden gap-4 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2 mx-auto">
                {foundationalML.length || 0}
              </div>
              <p className="text-gray-600 font-medium text-xs">
                Foundational ML
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-2xl mb-2 mx-auto">
                🎓
              </div>
              <p className="text-gray-600 font-medium text-xs">Certification</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-2xl mb-2 mx-auto">
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