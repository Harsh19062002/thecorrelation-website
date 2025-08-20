'use client';
import React, { useState } from 'react';
import { Target, Clock, Zap, Gift, GraduationCap, ChevronRight, RotateCcw, ExternalLink } from 'lucide-react';

const quizData = [
  {
    id: 1,
    question: "What's your current experience level with data science?",
    type: "single",
    options: [
      { id: "beginner", text: "Complete beginner", weight: { certification: 3, career: 2 } },
      { id: "some", text: "Some experience", weight: { postgrad: 2, applied: 3 } },
      { id: "intermediate", text: "Intermediate level", weight: { chartered: 3, advanced: 2 } },
      { id: "advanced", text: "Advanced practitioner", weight: { advanced: 3, chartered: 2 } }
    ]
  },
  {
    id: 2,
    question: "Which areas interest you most? (Select all that apply)",
    type: "multi",
    options: [
      { id: "ml", text: "Machine Learning", weight: { ml: 3, advanced_ml: 2, ai: 2 } },
      { id: "analytics", text: "Business Analytics", weight: { business: 3, applied: 2 } },
      { id: "ai", text: "Artificial Intelligence", weight: { ai: 3, advanced_ml: 2 } },
      { id: "data_science", text: "Data Science", weight: { applied: 3, chartered_ds: 2 } }
    ]
  },
  {
    id: 3,
    question: "What's your preferred learning commitment?",
    type: "single",
    options: [
      { id: "part_time", text: "Part-time, flexible schedule", weight: { certification: 3, applied: 2 } },
      { id: "intensive", text: "Intensive, full-time", weight: { postgrad: 3, chartered: 2 } },
      { id: "self_paced", text: "Self-paced learning", weight: { certification: 2, applied: 3 } },
      { id: "structured", text: "Structured program", weight: { postgrad: 3, chartered: 3 } }
    ]
  },
  {
    id: 4,
    question: "What's your primary career goal?",
    type: "single",
    options: [
      { id: "switch", text: "Career switch to data field", weight: { career: 3, certification: 2 } },
      { id: "advance", text: "Advance in current role", weight: { applied: 3, business: 2 } },
      { id: "specialize", text: "Deep specialization", weight: { chartered: 3, advanced: 2 } },
      { id: "leadership", text: "Leadership in data teams", weight: { postgrad: 3, business: 3 } }
    ]
  },
  {
    id: 5,
    question: "Which programming languages do you know?",
    type: "multi",
    options: [
      { id: "python", text: "Python", weight: { ml: 2, applied: 3, ai: 2 } },
      { id: "r", text: "R", weight: { applied: 3, business: 2 } },
      { id: "sql", text: "SQL", weight: { business: 3, applied: 2 } },
      { id: "none", text: "None yet", weight: { certification: 3, career: 2 } }
    ]
  },
  {
    id: 6,
    question: "What type of projects excite you most?",
    type: "single",
    options: [
      { id: "predictive", text: "Predictive modeling", weight: { ml: 3, advanced_ml: 2 } },
      { id: "business_insights", text: "Business insights", weight: { business: 3, applied: 2 } },
      { id: "ai_systems", text: "AI systems", weight: { ai: 3, advanced_ml: 2 } },
      { id: "research", text: "Research projects", weight: { chartered: 3, postgrad: 2 } }
    ]
  },
  {
    id: 7,
    question: "How much time can you dedicate weekly?",
    type: "single",
    options: [
      { id: "5_hours", text: "5-10 hours", weight: { certification: 3, applied: 2 } },
      { id: "15_hours", text: "10-15 hours", weight: { applied: 3, business: 2 } },
      { id: "20_hours", text: "15-20 hours", weight: { chartered: 2, postgrad: 3 } },
      { id: "full_time", text: "20+ hours", weight: { postgrad: 3, chartered: 3 } }
    ]
  },
  {
    id: 8,
    question: "What's your educational background?",
    type: "single",
    options: [
      { id: "non_tech", text: "Non-technical field", weight: { career: 3, certification: 2 } },
      { id: "some_tech", text: "Some technical background", weight: { applied: 3, business: 2 } },
      { id: "engineering", text: "Engineering/CS", weight: { ml: 2, advanced: 3 } },
      { id: "advanced_degree", text: "Advanced degree", weight: { chartered: 3, postgrad: 2 } }
    ]
  },
  {
    id: 9,
    question: "Which industries interest you? (Select all that apply)",
    type: "multi",
    options: [
      { id: "finance", text: "Finance & Banking", weight: { business: 3, applied: 2 } },
      { id: "healthcare", text: "Healthcare", weight: { applied: 3, ml: 2 } },
      { id: "tech", text: "Technology", weight: { ai: 3, advanced: 2 } },
      { id: "consulting", text: "Consulting", weight: { business: 3, chartered: 2 } }
    ]
  },
  {
    id: 10,
    question: "What's most important to you in a course?",
    type: "single",
    options: [
      { id: "practical", text: "Hands-on practical skills", weight: { applied: 3, certification: 2 } },
      { id: "theory", text: "Strong theoretical foundation", weight: { chartered: 3, postgrad: 2 } },
      { id: "industry", text: "Industry connections", weight: { career: 3, postgrad: 2 } },
      { id: "flexibility", text: "Learning flexibility", weight: { certification: 3, applied: 2 } }
    ]
  }
];

const courses = {
  postgrad: {
    name: "Post Graduation Program",
    description: "Comprehensive program designed for career advancement with industry mentorship and capstone projects.",
    link: "/courses/post-graduation-program"
  },
  postgrad1: {
    name: "Post Graduation 1",
    description: "Foundational post-graduate program focusing on core data science principles and methodologies.",
    link: "/courses/post-graduation-1"
  },
  postgrad2: {
    name: "Post Graduation 2",
    description: "Advanced post-graduate program with specialized tracks and research opportunities.",
    link: "/courses/post-graduation-2"
  },
  chartered_ds: {
    name: "Chartered Data Science",
    description: "Professional certification program for data science mastery with industry recognition.",
    link: "/courses/chartered-data-science"
  },
  business: {
    name: "Chartered Business Analytics",
    description: "Strategic analytics program focusing on business intelligence and decision-making frameworks.",
    link: "/courses/chartered-business-analytics"
  },
  certification: {
    name: "Certification Courses",
    description: "Flexible certification programs designed for skill building and career transitions.",
    link: "/courses/certification-courses"
  },
  applied: {
    name: "Applied Data Science",
    description: "Practical, hands-on program focusing on real-world data science applications and projects.",
    link: "/courses/applied-data-science"
  },
  ml: {
    name: "Machine Learning",
    description: "Comprehensive machine learning program covering algorithms, implementation, and deployment.",
    link: "/courses/machine-learning"
  },
  applied_science: {
    name: "Applied Science",
    description: "Interdisciplinary program combining scientific methods with practical applications.",
    link: "/courses/applied-science"
  },
  advanced_ml: {
    name: "Advanced Machine Learning",
    description: "Deep dive into cutting-edge ML techniques, neural networks, and advanced algorithms.",
    link: "/courses/advanced-machine-learning"
  },
  ai: {
    name: "Advanced Artificial Intelligence",
    description: "Comprehensive AI program covering deep learning, NLP, computer vision, and AI ethics.",
    link: "/courses/advanced-artificial-intelligence"
  },
  career: {
    name: "Career Acceleration",
    description: "Fast-track program designed for rapid career transition into data science roles.",
    link: "/courses/career-acceleration"
  }
};

export default function CourseQuiz() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [recommendedCourse, setRecommendedCourse] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const progress = ((currentQuestion) / quizData.length) * 100;

  const handleOptionSelect = (optionId) => {
    const question = quizData[currentQuestion];
    
    if (question.type === 'single') {
      setSelectedOptions([optionId]);
    } else {
      setSelectedOptions(prev => 
        prev.includes(optionId) 
          ? prev.filter(id => id !== optionId)
          : [...prev, optionId]
      );
    }
  };

  const handleNext = () => {
    if (selectedOptions.length === 0) return;

    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: selectedOptions
    }));

    setIsTransitioning(true);
    
    setTimeout(() => {
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedOptions([]);
      } else {
        calculateRecommendation();
        setShowResults(true);
      }
      setIsTransitioning(false);
    }, 300);
  };

  const calculateRecommendation = () => {
    const scores = {};
    
    Object.keys(courses).forEach(key => {
      scores[key] = 0;
    });

    Object.entries(answers).forEach(([questionIndex, selectedAnswers]) => {
      const question = quizData[questionIndex];
      selectedAnswers.forEach(answerId => {
        const option = question.options.find(opt => opt.id === answerId);
        if (option && option.weight) {
          Object.entries(option.weight).forEach(([courseKey, weight]) => {
            if (scores.hasOwnProperty(courseKey)) {
              scores[courseKey] += weight;
            }
          });
        }
      });
    });

    selectedOptions.forEach(answerId => {
      const option = quizData[currentQuestion].options.find(opt => opt.id === answerId);
      if (option && option.weight) {
        Object.entries(option.weight).forEach(([courseKey, weight]) => {
          if (scores.hasOwnProperty(courseKey)) {
            scores[courseKey] += weight;
          }
        });
      }
    });

    const recommendedKey = Object.entries(scores).reduce((a, b) => 
      scores[a[0]] > scores[b[0]] ? a : b
    )[0];

    setRecommendedCourse(courses[recommendedKey]);
  };

  const startQuiz = () => {
    setShowWelcome(false);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setSelectedOptions([]);
    setShowResults(false);
    setRecommendedCourse(null);
    setIsTransitioning(false);
    setShowWelcome(true);
  };

  if (showWelcome) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl w-full text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12">
            <div className="mb-10">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                Find Your Perfect Course
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
                Take our quick 10-question quiz to get a personalized course recommendation.
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm text-gray-500 mb-8">
                <span className="flex items-center">
                  <Clock className="w-4 h-4 text-green-500 mr-1" />
                  5 minutes
                </span>
                <span className="flex items-center">
                  <Zap className="w-4 h-4 text-blue-500 mr-1" />
                  Personalized
                </span>
                <span className="flex items-center">
                  <Gift className="w-4 h-4 text-purple-500 mr-1" />
                  Free
                </span>
              </div>
            </div>

            <button
              onClick={startQuiz}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 md:px-12 py-3 md:py-4 rounded-2xl font-semibold text-lg md:text-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse"
            >
              Let's Find Your Course!
              <ChevronRight className="w-5 h-5 ml-2 inline" />
            </button>
            
            <p className="text-gray-500 text-sm mt-4">
              Free • No signup required • Instant results
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-500 to-purple-600">
        <div className="max-w-2xl w-full rounded-3xl bg-white/10 backdrop-blur-lg p-6 md:p-8 text-white text-center animate-in slide-in-from-bottom duration-500">
          <div className="mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Perfect Match Found!</h2>
            <p className="text-lg opacity-90">Based on your responses, we recommend:</p>
          </div>
          
          <div className="bg-white/10 rounded-2xl p-6 mb-6">
            <h3 className="text-xl md:text-2xl font-bold mb-3">{recommendedCourse?.name}</h3>
            <p className="text-base md:text-lg opacity-90 mb-4">{recommendedCourse?.description}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open(recommendedCourse?.link, '_blank')}
                className="bg-white text-indigo-600 px-6 md:px-8 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                View Course Details
                <ExternalLink className="w-4 h-4 ml-2" />
              </button>
              <button 
                onClick={resetQuiz}
                className="border-2 border-white text-white px-6 md:px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 flex items-center justify-center"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Retake Quiz
              </button>
            </div>
          </div>
          
          <p className="text-sm opacity-75">
            <Target className="w-4 h-4 inline mr-1" />
            This recommendation is based on your learning preferences and career goals
          </p>
        </div>
      </div>
    );
  }

  const question = quizData[currentQuestion];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">Course Recommendation Quiz</h1>
            <span className="text-sm text-gray-600">
              Question {currentQuestion + 1} of {quizData.length}
            </span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className={`max-w-3xl w-full transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'}`}>
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl md:text-2xl font-bold">{currentQuestion + 1}</span>
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-2">
                {question.question}
              </h2>
              {question.type === 'multi' && (
                <p className="text-gray-600">Select all that apply</p>
              )}
            </div>

            <div className="space-y-4 mb-8">
              {question.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionSelect(option.id)}
                  className={`w-full p-4 md:p-6 rounded-2xl border-2 text-left transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg ${
                    selectedOptions.includes(option.id)
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-transparent shadow-lg'
                      : 'border-gray-200 hover:border-indigo-300 bg-white'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center flex-shrink-0 ${
                      selectedOptions.includes(option.id)
                        ? 'border-white bg-white'
                        : 'border-gray-300'
                    }`}>
                      {selectedOptions.includes(option.id) && (
                        <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                      )}
                    </div>
                    <span className="text-base md:text-lg font-medium">{option.text}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={handleNext}
                disabled={selectedOptions.length === 0}
                className={`px-8 md:px-12 py-3 md:py-4 rounded-2xl font-semibold text-base md:text-lg transition-all duration-300 flex items-center justify-center mx-auto ${
                  selectedOptions.length > 0
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 shadow-lg'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {currentQuestion === quizData.length - 1 ? 'Get My Recommendation' : 'Next Question'}
                {selectedOptions.length > 0 && <ChevronRight className="w-5 h-5 ml-2" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}