'use client';
import Image from "next/image";
import React, { memo } from 'react';
import { Rocket, Target, Lightbulb, BookOpen, Users, Clock, CheckCircle, Heart, Handshake, Zap, Star } from 'lucide-react';
import Head from "next/head";

// Memoized card components for better performance
const FeatureCard = memo(({ icon: Icon, title, description, gradient }) => (
  <article className={`${gradient} p-6 sm:p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}>
    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6" role="img" aria-label={title}>
      <Icon className="w-8 h-8 text-white" aria-hidden="true" />
    </div>
    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-sm sm:text-base text-gray-700">{description}</p>
  </article>
));

FeatureCard.displayName = 'FeatureCard';

const FacultyCard = memo(({ initials, name, role, expertise, experience, specialization, gradient }) => (
  <article className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-red-100">
    <div className={`w-20 h-20 ${gradient} rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold`} role="img" aria-label={name}>
      {initials}
    </div>
    <h3 className="text-lg sm:text-xl font-bold text-center mb-2">{name}</h3>
    <p className="text-red-600 text-center mb-4 font-semibold text-sm sm:text-base">
      {role}
    </p>
    <dl className="space-y-2 text-xs sm:text-sm text-gray-600">
      <div>
        <dt className="inline font-bold">Expertise: </dt>
        <dd className="inline">{expertise}</dd>
      </div>
      <div>
        <dt className="inline font-bold">Experience: </dt>
        <dd className="inline">{experience}</dd>
      </div>
      <div>
        <dt className="inline font-bold">Specialization: </dt>
        <dd className="inline">{specialization}</dd>
      </div>
    </dl>
  </article>
));

FacultyCard.displayName = 'FacultyCard';

const ValueCard = memo(({ icon: Icon, title, description, gradient }) => (
  <article className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center border border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
    <div className={`w-20 h-20 ${gradient} rounded-full flex items-center justify-center mx-auto mb-6`} role="img" aria-label={title}>
      <Icon className="w-10 h-10 text-white" aria-hidden="true" />
    </div>
    <h3 className="text-xl sm:text-2xl font-bold mb-4">{title}</h3>
    <p className="text-sm sm:text-base text-white/90 leading-relaxed">{description}</p>
  </article>
));

ValueCard.displayName = 'ValueCard';

export default function AboutUs() {
  const features = [
    {
      icon: BookOpen,
      title: 'Industry-Aligned Curriculum',
      description: 'Cutting-edge content designed with industry leaders, ensuring you learn what employers actually need.',
      gradient: 'bg-white border border-red-100',
    },
    {
      icon: Target,
      title: 'Career-First Approach',
      description: 'From resume building to interview prep, we\'re invested in your career success beyond graduation.',
      gradient: 'bg-white border border-red-100',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Learn from industry veterans and academic experts who bring real-world experience to every lesson.',
      gradient: 'bg-white border border-red-100',
    },
    {
      icon: Clock,
      title: 'Flexible Learning',
      description: 'Weekend and evening batches designed for working professionals and busy schedules.',
      gradient: 'bg-white border border-red-100',
    },
  ];

  const faculty = [
    {
      initials: 'DW',
      name: 'Deepesh Wadhwani',
      role: 'Director & Lead Instructor',
      expertise: 'Data Science, Machine Learning, AI Strategy',
      experience: '15+ years in Analytics & Consulting',
      specialization: 'Enterprise AI Implementation',
      gradient: 'bg-red-600',
    },
    {
      initials: 'ML',
      name: 'Machine Learning Expert',
      role: 'Senior ML Engineer',
      expertise: 'Deep Learning, Neural Networks',
      experience: '10+ years in ML Engineering',
      specialization: 'Computer Vision & NLP',
      gradient: 'bg-red-600',
    },
    {
      initials: 'DS',
      name: 'Data Science Specialist',
      role: 'Senior Data Scientist',
      expertise: 'Statistical Analysis, Python, R',
      experience: '8+ years in Data Analytics',
      specialization: 'Business Intelligence & Visualization',
      gradient: 'bg-red-600',
    },
  ];

  const values = [
    {
      icon: Handshake,
      title: 'Integrity',
      description: 'Honest, transparent education that builds trust and delivers on every promise we make to our students.',
      gradient: 'bg-white/20',
    },
    {
      icon: CheckCircle,
      title: 'Responsibility',
      description: 'We take ownership of your success, providing support and guidance every step of your learning journey.',
      gradient: 'bg-white/20',
    },
    {
      icon: Heart,
      title: 'Unity',
      description: 'Building a collaborative community where students, faculty, and industry professionals grow together.',
      gradient: 'bg-white/20',
    },
    {
      icon: Rocket,
      title: 'Pioneering',
      description: 'Always at the forefront of technology, bringing you the latest innovations in Data Science and AI.',
      gradient: 'bg-white/20',
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'Uncompromising commitment to quality in education, support, and career outcomes for every student.',
      gradient: 'bg-white/20',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuously evolving our methods and curriculum to stay ahead of industry trends and student needs.',
      gradient: 'bg-white/20',
    },
  ];

  return (
    <>
    <Head>
        {/* Title */}
        <title>About TheCorrelation | Data Science & AI </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Learn about TheCorrelation – a Centre of Excellence in Data Science, Statistics, Machine Learning, and AI. Discover our mission, faculty, and industry-driven approach."
        />

        {/* Canonical */}
        
      </Head>
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-[linear-gradient(135deg,#7b25d1,#ff2626,#910000)] text-white">
        <div className="absolute inset-0 bg-black opacity-20" aria-hidden="true"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6" role="status">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" aria-hidden="true"></span>
            <span className="text-sm font-medium">Transforming Careers Since 2020</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Shaping the Future with
            <span className="block text-white">Data Science & AI</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed px-4 text-white/90">
            Where cutting-edge technology meets human potential. We're not just teaching Data Science, Machine Learning, and Artificial Intelligence – we're empowering the next generation to solve humanity's greatest challenges.
          </p>
          <nav className="flex flex-wrap justify-center gap-3 sm:gap-4 text-base sm:text-lg px-4" aria-label="Key features">
            <div className="flex items-center bg-white/10 rounded-full px-3 sm:px-4 py-2">
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5 mr-2" aria-hidden="true" />
              <span className="text-sm sm:text-base">Career Transformation</span>
            </div>
            <div className="flex items-center bg-white/10 rounded-full px-3 sm:px-4 py-2">
              <Target className="w-4 h-4 sm:w-5 sm:h-5 mr-2" aria-hidden="true" />
              <span className="text-sm sm:text-base">Industry-Ready Skills</span>
            </div>
            <div className="flex items-center bg-white/10 rounded-full px-3 sm:px-4 py-2">
              <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 mr-2" aria-hidden="true" />
              <span className="text-sm sm:text-base">Innovation Focus</span>
            </div>
          </nav>
        </div>
      </header>

      {/* Mission Statement */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16" aria-labelledby="mission-heading">
        <div className="text-center mb-16">
          <h2 id="mission-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto px-4">
            In an era where data drives decisions and AI shapes the future, we bridge the gap between academic theory and industry reality. Our mission is to democratize access to world-class Data Science and AI education, making these transformative technologies accessible to everyone, everywhere.
          </p>
        </div>
      </section>

      {/* Why We Are Better */}
      

      {/* Director Profile */}
      <section className="bg-[linear-gradient(135deg,#7b25d1,#ff2626,#910000)] text-white py-16 sm:py-20" aria-labelledby="director-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div>
            <div className="text-center mb-12">
              <h2 id="director-heading" className="text-3xl sm:text-4xl font-bold mb-4">Meet Our Visionary Leader</h2>
              <p className="text-lg sm:text-xl text-white/90 px-4">The driving force behind our educational excellence</p>
            </div>

            <article className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-8 sm:gap-12">
                <div className="flex-1 lg:pr-8">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">Deepesh Wadhwani</h3>
                  <p className="text-lg sm:text-xl text-white/90 mb-6">Founder & Director</p>
                  
                  <div className="space-y-4 text-base sm:text-lg leading-relaxed">
                    <p>
                      With over <strong className="text-white">15 years</strong> of transformative experience in Data Science and Analytics, Deepesh Wadhwani isn't just an educator – he's a visionary who saw the future of technology education and made it accessible to everyone.
                    </p>
                    <p>
                      His journey spans from <strong className="text-white">Fortune 500 consulting</strong> to founding TheCorrelation Institute, where his passion for democratizing AI education has already impacted thousands of careers worldwide.
                    </p>
                    <blockquote className="border-l-4 border-white/40 pl-4 italic">
                      <p className="text-white/90">"Every student who walks through our doors carries the potential to solve tomorrow's biggest challenges. Our job is to unlock that potential."</p>
                    </blockquote>
                  </div>

                  <ul className="flex flex-wrap gap-3 mt-6" aria-label="Deepesh Wadhwani qualifications">
                    <li className="bg-white/20 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm">15+ Years Experience</li>
                    <li className="bg-white/20 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm">Fortune 500 Consultant</li>
                    <li className="bg-white/20 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm">Industry Visionary</li>
                  </ul>
                </div>
                <div className="flex-shrink-0 lg:w-80 flex justify-center lg:justify-end">
                  <div
                    className="w-64 h-100 bg-white/10 rounded-2xl border-2 border-white/20 flex flex-col items-center justify-center text-center p-4 overflow-hidden"
                    role="img"
                    aria-label="Deepesh Wadhwani profile photo"
                  >
                    <div className="relative w-90 h-90  overflow-hidden mb-4 ">
                      <Image
                        src="/Director1-Photo.png"
                        alt="Deepesh Wadhwani - Founder & Data Science Mentor"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>

                    <p className="text-white font-semibold text-lg">
                      Deepesh Wadhwani
                    </p>
                    <p className="text-white/80 text-sm">
                      Founder & Lead Mentor
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="why-choose-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 id="why-choose-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose TheCorrelation Institute?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">What makes us the preferred choice for ambitious learners</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Pledge */}
      <section className="bg-[linear-gradient(135deg,#7b25d1,#ff2626,#910000)] text-white py-16 sm:py-20" aria-labelledby="values-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 id="values-heading" className="text-3xl sm:text-4xl font-bold mb-4">Our Pledge to You</h2>
            <p className="text-lg sm:text-xl text-white/90 px-4">The values that guide everything we do</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-16 sm:py-20" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div>
            <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 px-4">
              Join thousands of successful graduates who've launched their Data Science and AI careers with TheCorrelation Institute.
            </p>
            
          </div>
        </div>
      </section>
    </div>
    </>
  );
}