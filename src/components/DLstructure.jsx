import React, { useState } from "react";
import {
  Brain,
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
  Target,
} from "lucide-react";

const CourseCurriculum = () => {
  const [expandedModules, setExpandedModules] = useState(new Set());
  const [activeSection, setActiveSection] = useState("deep-learning");

  const toggleModule = (moduleId) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId);
    } else {
      newExpanded.add(moduleId);
    }
    setExpandedModules(newExpanded);
  };

  const deepLearning = [
    {
      id: "intro-neural-networks",
      title: "Introduction to Neural Networks",
      icon: Brain,
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
      icon: Cpu,
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
      icon: MessageSquare,
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
      icon: ArrowRight,
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
      icon: Eye,
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
      icon: Globe,
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
      icon: Upload,
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
      icon: Sparkles,
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
      icon: BookOpen,
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
      icon: Image,
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
      icon: Wrench,
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

  const ModuleCard = ({ module }) => {
    const isExpanded = expandedModules.has(module.id);
    const Icon = module.icon;

    return (
      <div className="group">
        <div
          className={`relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl transition-all duration-500 transform hover:scale-[1.01] lg:hover:scale-[1.02] ${
            isExpanded ? "shadow-2xl scale-[1.01] lg:scale-[1.02]" : "shadow-lg hover:shadow-xl"
          }`}
        >
          <div
            className={`relative bg-gradient-to-br ${module.color} p-4 sm:p-6 lg:p-8 cursor-pointer transition-all duration-300`}
            onClick={() => toggleModule(module.id)}
          >
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-3 sm:gap-2 flex-1">
                  <div className="p-2 sm:p-3 lg:p-4 bg-red-600 backdrop-blur-sm rounded-xl sm:rounded-2xl flex-shrink-0 flex items-center justify-center">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
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
                  <div className={`p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-full transition-transform duration-300 ${isExpanded ? "rotate-180" : "hover:rotate-90"}`}>
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  </div>
                </div>
              </div>
              <div className="flex mx-20 items-center gap-2 text-black text-xs sm:text-sm">
                <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
                <span>{module.topics?.length || 0} Topics</span>
              </div>
            </div>
          </div>
          <div className={`bg-white border-t-4 border-white/20 transition-all duration-500 overflow-hidden ${isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                <h4 className="text-lg sm:text-xl font-bold text-gray-800">Learning Objectives</h4>
              </div>
              <div className="grid gap-2 sm:gap-4">
                {module.topics?.map((topic, topicIndex) => (
                  <div
                    key={topicIndex}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors duration-200"
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
        {modules.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </div>
    </section>
  );

  const getSectionData = () => {
    switch (activeSection) {
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
          modules: deepLearning,
          title: "Deep Learning",
          description: "Neural networks & AI",
        };
    }
  };

  const currentSection = getSectionData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-black">
              Course Curriculum
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex bg-gray-100 rounded-2xl p-2">
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

            {/* Mobile Navigation */}
            <div className="lg:hidden gap-2 mt-2">
              <div className="flex bg-gray-100 rounded-xl p-1 overflow-x-auto scrollbar-hide">
                <button
                  onClick={() => setActiveSection("deep-learning")}
                  className={`px-3 py-2 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap text-sm ${
                    activeSection === "deep-learning"
                      ? "bg-white text-red-600 shadow-md"
                      : "text-gray-600"
                  }`}
                >
                  Deep Learning
                </button>
                <button
                  onClick={() => setActiveSection("generative-ai")}
                  className={`px-3 py-2 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap text-sm ${
                    activeSection === "generative-ai"
                      ? "bg-white text-red-600 shadow-md"
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
                {deepLearning.length}
              </div>
              <p className="text-gray-600 font-medium text-xs sm:text-sm">
                Deep Learning
              </p>
            </div>
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-400 flex-shrink-0" />
            <div className="text-center flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-2">
                {generativeAI.length}
              </div>
              <p className="text-gray-600 font-medium text-xs sm:text-sm">
                Generative AI
              </p>
            </div>
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-400 flex-shrink-0" />
            <div className="text-center flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-red-600 rounded-full flex items-center justify-center text-2xl mb-2">
                🎓
              </div>
              <p className="text-gray-600 font-medium text-xs sm:text-sm">
                Certification
              </p>
            </div>
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-400 flex-shrink-0" />
            <div className="text-center flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-red-600 rounded-full flex items-center justify-center text-2xl mb-2">
                💼
              </div>
              <p className="text-gray-600 font-medium text-xs sm:text-sm">
               Job assurance
              </p>
            </div>
          </div>

          {/* Mobile Progress Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:hidden gap-4 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2 mx-auto">
                {deepLearning.length}
              </div>
              <p className="text-gray-600 font-medium text-xs">Deep Learning</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2 mx-auto">
                {generativeAI.length}
              </div>
              <p className="text-gray-600 font-medium text-xs">Generative AI</p>
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