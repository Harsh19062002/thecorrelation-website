'use client';

import {
  CheckCircle,
  Target,
  GraduationCap,
  TrendingUp,
  ShieldCheck,
  Brain,
  Leaf,
  Home,
  FileText,
  Eye
} from 'lucide-react';

export default function AboutTheCorrelation() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Heading */}
        <div className="text-center mb-16 opacity-100 translate-y-0 transition-all duration-700">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-transparent bg-clip-text bg-[linear-gradient(135deg,#7b25d1,#ff2626,#910000)] ">TheCorrelation</span>
          </h1>
        </div>

        {/* About & Image Side-by-Side */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center opacity-100 translate-y-0 transition-all duration-700">
          {/* Text */}
          <div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              At TheCorrelation, we don't just teach Data Science—we create industry-ready AI professionals. As a Centre of Excellence in Probability, Statistics, and Machine Learning, we deliver a cutting-edge curriculum designed to meet the demands of today's data-driven world.
            </p>

            {/* Why Choose Us */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                Why Choose TheCorrelation?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Industry-Aligned Learning',
                    description: 'Practical, hands-on training built around real-world challenges.',
                    icon: <Target className="w-6 h-6 text-green-600" />,
                    bg: 'bg-green-100'
                  },
                  {
                    title: 'Expert-Led Curriculum',
                    description: 'Taught by top AI and Data Science practitioners.',
                    icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
                    bg: 'bg-blue-100'
                  },
                  {
                    title: 'Career-Focused Approach',
                    description: 'Equipping learners with the skills to lead in AI-driven industries.',
                    icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
                    bg: 'bg-purple-100'
                  },
                  {
                    title: 'Career-Focused Approach',
                    description: 'Equipping learners with the skills to lead in AI-driven industries.',
                    icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
                    bg: 'bg-purple-100'
                  }
                ].map((item, index) => (
                  <div key={index} className="rounded-xl p-6 bg-white shadow-md  hover:shadow-xl transition duration-300">
                    <div className="flex items-start">
                      <div className={`${item.bg} p-3 rounded-lg mr-4`}>{item.icon}</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full max-w-md mx-auto opacity-100 translate-y-0 transition-all duration-700">
            <img
              src="/Dummy.png"
              alt="Team working on AI solutions at TheCorrelation"
              className="relative w-[36rem] h-[36rem] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Backed by Industry Leaders */}
        <div className="mb-16 opacity-100 translate-y-0 transition-all duration-700 delay-300">
          <div className="bg-white rounded-2xl p-8 shadow-lg  hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <ShieldCheck className="w-6 h-6 text-blue-500 mr-3" />
              Backed by Industry Leaders
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              TheCorrelation is powered by Sophos Knowledge Services, an AI and Data Science powerhouse driving real-world innovation. Through its consulting and research divisions, Sophos is at the forefront of AI applications across industries.
            </p>
          </div>
        </div>

        {/* Real-World Projects */}
        <div className="mb-16 opacity-100 translate-y-0 transition-all duration-700 delay-400">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <Brain className="w-8 h-8 text-purple-500 mr-3" />
            Real-World AI in Action
          </h2>
          <p className="text-center text-gray-600 mb-12">In-House Projects</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Eucalyptus',
                desc: 'Data Science for environmental preservation',
                icon: <Leaf className="w-6 h-6 text-green-600" />,
                bg: 'bg-green-100'
              },
              {
                title: 'SketchMyHome.AI',
                desc: 'AI-driven architectural design',
                icon: <Home className="w-6 h-6 text-blue-600" />,
                bg: 'bg-blue-100'
              },
              {
                title: 'Akshar',
                desc: 'Automating data capture from legacy documents',
                icon: <FileText className="w-6 h-6 text-orange-600" />,
                bg: 'bg-orange-100'
              },
              {
                title: 'OnLook',
                desc: 'AI-powered CCTV analytics for security and business insights',
                icon: <Eye className="w-6 h-6 text-purple-600" />,
                bg: 'bg-purple-100'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg  hover:shadow-2xl hover:scale-[1.02] transition duration-300">
                <div className="flex items-start">
                  <div className={`${item.bg} p-3 rounded-lg mr-4`}>{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        
        <div className="text-center opacity-100 translate-y-0 transition-all duration-700 delay-500">
  <div className="rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transition duration-300 bg-[linear-gradient(135deg,#7b25d1,#ff2626,#910000)]">
    <p className="text-xl md:text-2xl font-bold mb-4 leading-relaxed">
      At Sophos Research Labs, we drive AI solutions that optimize business, society, and the environment—transforming ideas into impact.
    </p>
    <p className="text-lg font-semibold">Join us and shape the future with AI!</p>
  </div>
</div>

        

      </div>
    </section>
  );
}
