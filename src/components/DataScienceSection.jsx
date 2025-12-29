import React from 'react';
import { ShoppingCart, Code2, BarChart3, Bot, Sparkles, Brain, Zap, Cpu, TrendingUp, Target, Globe, Award } from 'lucide-react';

// Static data for performance optimization
const WONDERS_DATA = [
  {
    icon: Cpu,
    title: "AI in Healthcare",
    text: "AI models diagnose diseases faster and more accurately than traditional methods, saving millions of lives through early detection and personalized treatment plans.",
    bg: "bg-white",
    textColor: "text-gray-700"
  },
  {
    icon: TrendingUp,
    title: "Financial Forecasting",
    text: "Machine learning algorithms predict market trends, detect fraud in real-time, and optimize investment portfolios with unprecedented accuracy.",
    bg: "bg-white",
    textColor: "text-gray-700"
  },
  {
    icon: Target,
    title: "Smart Recommendations",
    text: "From Netflix to Amazon, recommendation engines analyze billions of data points to personalize your experience and predict what you'll love next.",
    bg: "bg-white",
    textColor: "text-gray-700"
  },
  {
    icon: Globe,
    title: "Climate Prediction",
    text: "Data science models forecast weather patterns, track climate change, and help scientists develop solutions for environmental challenges.",
    bg: "bg-white",
    textColor: "text-gray-700"
  },
  {
    icon: Zap,
    title: "Autonomous Vehicles",
    text: "Self-driving cars use AI to process millions of data points per second, making split-second decisions to navigate safely through complex environments.",
    bg: "bg-white",
    textColor: "text-gray-700"
  },
  {
    icon: Award,
    title: "Personalized Learning",
    text: "Educational platforms use AI to adapt to each student's learning style, pace, and needs, creating customized paths to academic success.",
    bg: "bg-white",
    textColor: "text-gray-700"
  }
];

const SKILLS_DATA = [
  {
    icon: Code2,
    title: "Programming Skills",
    description: "Python, SQL, and essential tools used for data processing, automation, and model building.",
    gradient: "bg-white",
    textColor: "text-black"
  },
  {
    icon: BarChart3,
    title: "Analytics & Visualization",
    description: "Learn to convert complex data into visuals, dashboards, and business insights.",
    gradient: "bg-white",
    textColor: "text-black"
  }
];

const DataScienceSection = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % WONDERS_DATA.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section 
        className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gray-100"
        aria-labelledby="data-science-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 items-start lg:items-center">

            {/* Main Content - Left Section */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              
              {/* Heading and Introduction */}
              <header className="space-y-4 sm:space-y-6">
                <h1 
                  id="data-science-heading"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"
                >
                  What is Data Science?
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Data Science is the{" "}
                  <strong className="font-semibold text-red-600">
                    discipline of understanding, analyzing, and predicting outcomes from data
                  </strong>{" "}
                  using techniques from statistics, programming, analytics, and
                  machine learning. It empowers businesses to solve real-world
                  problems, automate decisions, and extract meaningful insights
                  from massive amounts of information.
                </p>
              </header>

              {/* Real-world Example Card */}
              <article className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-red-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div 
                    className="bg-red-600 rounded-full p-3 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-white" aria-label="Shopping cart icon" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                      Real-World Example: Business Applications
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      Businesses across industries use data science to{" "}
                      <strong className="font-semibold text-red-600">
                        analyze customer behavior
                      </strong>
                      ,{" "}
                      <strong className="font-semibold text-red-600">
                        automate decision-making
                      </strong>
                      , and{" "}
                      <strong className="font-semibold text-red-600">
                        forecast future trends
                      </strong>
                      . From personalization to fraud detection, data science has
                      become the backbone of modern decision systems.
                    </p>
                  </div>
                </div>
              </article>

              {/* Key Skills Grid */}
         <div className="space-y-4">
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
    Essential Data Science Skills
  </h2>
  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6" role="list" aria-label="Key data science skills">
    {SKILLS_DATA.map((skill, index) => {
      const IconComponent = skill.icon;
      return (
        <article 
          key={index}
          className={`${skill.gradient} rounded-lg sm:rounded-xl p-5 sm:p-6 lg:p-7 text-black hover:scale-105 transition-transform duration-300 shadow-lg`}
          role="listitem"
        >
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <div className="bg-red-600 p-2 rounded-full flex-shrink-0">
              <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-base sm:text-lg lg:text-xl">{skill.title}</h3>
          </div>
          <p className={`${skill.textColor} text-sm sm:text-base leading-relaxed`}>
            {skill.description}
          </p>
        </article>
      );
    })}
  </div>
</div>
            </div>

            {/* AI Transformations - Right Section */}
            <aside className="lg:col-span-1 mt-8 lg:mt-0" aria-label="Data science and AI real-world transformations">
              <div className="relative">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl overflow-hidden h-[500px] sm:h-[550px] lg:h-[600px] border border-gray-200">
                  <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                    How Data Science & AI Transform the World
                  </h2>

                  {/* Carousel */}
                  <div className="relative h-full">
                    {WONDERS_DATA.map((item, index) => {
                      const IconComponent = item.icon;
                      const isActive = index === currentSlide;
                      return (
                        <article
                          key={index}
                          className={`absolute inset-0 transition-opacity duration-700 ${
                            isActive ? 'opacity-100' : 'opacity-0'
                          } ${item.bg} rounded-lg sm:rounded-xl p-6 sm:p-8 lg:p-10 h-[380px] sm:h-[420px] lg:h-[450px] flex flex-col justify-center shadow-lg border border-gray-100`}
                          aria-hidden={!isActive}
                        >
                          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <div className="bg-red-600 rounded-full p-2">
                              <IconComponent className="w-8 h-8 flex-shrink-0 text-white" aria-hidden="true" />
                            </div>
                            <h3 className="font-bold text-xl sm:text-2xl text-gray-900">{item.title}</h3>
                          </div>

                          <p className={`text-base sm:text-lg ${item.textColor} leading-relaxed`}>
                            {item.text}
                          </p>
                        </article>
                      );
                    })}
                  </div>

                  {/* Slide Indicators */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                    {WONDERS_DATA.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide ? 'bg-red-600 w-6' : 'bg-gray-300'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Decorative Floating Elements */}
                <div 
                  className="hidden sm:block absolute -top-4 -right-4 bg-red-600 rounded-full p-3 shadow-lg animate-bounce"
                  aria-hidden="true"
                >
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div 
                  className="hidden sm:block absolute -bottom-4 -left-4 bg-red-700 rounded-full p-3 shadow-lg animate-pulse"
                  aria-hidden="true"
                >
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div 
                  className="hidden lg:block absolute top-1/2 -left-6 bg-red-600 rounded-full p-2 shadow-lg animate-bounce"
                  aria-hidden="true"
                  style={{ animationDelay: '0.5s' }}
                >
                  <Brain className="w-4 h-4 text-white" />
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  );
};

export default DataScienceSection;