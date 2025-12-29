'use client';

import {
  BadgeCheck,
  Crosshair,
  GraduationCap,
  LineChart,
  Shield,
  BrainCircuit,
  Leaf,
  Home,
  FileScan,
  Eye,
  Sparkles
} from 'lucide-react';

export default function AboutTheCorrelation() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 border-t-2 border-b-2 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            About{' '}
            <span className="text-black">
              TheCorrelation
            </span>
          </h1>
        </div>

        {/* About & Image */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              At TheCorrelation, we don't just teach Data Science—we create industry-ready AI professionals. As a Centre of Excellence in Probability, Statistics, and Machine Learning, we deliver a cutting-edge curriculum designed to meet the demands of today's data-driven world.
            </p>

            {/* Why Choose Us */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <BadgeCheck className="w-6 h-6 text-red-600 mr-3" />
                Why Choose TheCorrelation?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Industry-Aligned Learning',
                    description: 'Practical, hands-on training built around real-world challenges.',
                    icon: <Crosshair className="w-6 h-6 text-white" />,
                  },
                  {
                    title: 'Expert-Led Curriculum',
                    description: 'Taught by top AI and Data Science practitioners.',
                    icon: <GraduationCap className="w-6 h-6 text-white" />,
                  },
                  {
                    title: 'Career-Focused Approach',
                    description: 'Equipping learners with the skills to lead in AI-driven industries.',
                    icon: <LineChart className="w-6 h-6 text-white" />,
                  },
                  {
                    title: 'Proven Track Record',
                    description: 'Success stories from learners who transformed their careers.',
                    icon: <Shield className="w-6 h-6 text-white" />,
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl p-6 bg-white  shadow-md hover:shadow-xl transition duration-300"
                  >
                    <div className="flex items-start">
                      <div className="bg-red-600 p-3 rounded-full mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full max-w-md mx-auto">
            <img
              src="/Projects.png"
              alt="Team working on AI solutions at TheCorrelation"
              className="relative w-[36rem] h-[36rem] object-cover rounded-2xl shadow-2xl border-2 border-gray-200"
            />
          </div>
        </div>

        {/* Backed by Industry Leaders */}
        <div className="mb-16">
          <div className="bg-[linear-gradient(135deg,#7b25d1,#ff2626,#910000)] rounded-2xl p-8 border-2 border-white/30 shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Shield className="w-6 h-6 text-white mr-3" />
              Backed by Industry Leaders
            </h2>
            <p className="text-lg text-white leading-relaxed">
              TheCorrelation is powered by Sophos Knowledge Services, an AI and Data Science powerhouse driving real-world innovation. Through its consulting and research divisions, Sophos is at the forefront of AI applications across industries.
            </p>
          </div>
        </div>

        {/* Real-World Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <BrainCircuit className="w-8 h-8 text-red-600 mr-3" />
            Real-World AI in Action
          </h2>

          <p className="text-center text-gray-600 mb-12">
            In-House Projects built by our Data Science & AI team to give learners exposure to practical, industry-level problem solving.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Eucalyptus",
                desc: "Using Data Science and ML to support environmental analysis, tree health monitoring, and sustainability solutions.",
                icon: <Leaf className="w-6 h-6 text-white" />,
              },
              {
                title: "SketchMyHome.AI",
                desc: "An AI-driven architectural modeling system that converts sketches into structured house designs and 3D layouts.",
                icon: <Home className="w-6 h-6 text-white" />,
              },
              {
                title: "Akshar",
                desc: "Automating text extraction and digitization of legacy documents using OCR, NLP, and intelligent data capture.",
                icon: <FileScan className="w-6 h-6 text-white" />,
              },
              {
                title: "OnLook",
                desc: "AI-powered CCTV analytics platform delivering real-time security, footfall insights, and behavioral pattern detection.",
                icon: <Eye className="w-6 h-6 text-white" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6  shadow-lg hover:shadow-2xl hover:scale-[1.02] transition duration-300"
              >
                <div className="flex items-start">
                  <div className="bg-red-600 p-3 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transition duration-300 bg-[linear-gradient(135deg,#7b25d1,#ff2626,#910000)] border-2 border-white/30">
            <p className="text-xl md:text-2xl font-bold mb-4 leading-relaxed">
              At Sophos Research Labs, we drive AI solutions that optimize business, society, and the environment—transforming ideas into impact.
            </p>
            <p className="text-lg font-semibold flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" />
              Join us and shape the future with AI!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
