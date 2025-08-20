'use client';

import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import { motion, LazyMotion, domAnimation, m } from 'framer-motion';
import { memo, useMemo } from 'react';

// Memoized hexagon data to prevent recreation on each render
const hexagonPositions = [
  { id: 'hex1', top: '7%', left: '56%' },
  { id: 'hex2', top: '7%', left: '73%' },
  { id: 'hex3', top: '7%', left: '90%' },
  { id: 'hex4', top: '30%', left: '65%' },
  { id: 'hex5', top: '30%', left: '82%' },
  { id: 'hex6', top: '53%', left: '56%' },
  { id: 'hex7', top: '53%', left: '73%' },
  { id: 'hex8', top: '53%', left: '90%' },
];

// Memoized card data for better performance
const featureCards = [
  {
    title: 'Real Industry Projects',
    text: 'Work on capstone projects that mimic real-world data problems and business use-cases.',
    schema: {
      "@type": "Service",
      "name": "Real Industry Projects",
      "description": "Work on capstone projects that mimic real-world data problems and business use-cases."
    }
  },
  {
    title: 'Job-Ready Curriculum',
    text: 'Master Data Science from Python to ML algorithms with hands-on tools like Power BI & GitHub.',
    schema: {
      "@type": "Service", 
      "name": "Job-Ready Data Science Curriculum",
      "description": "Master Data Science from Python to ML algorithms with hands-on tools like Power BI & GitHub."
    }
  },
  {
    title: 'Expert Mentorship',
    text: 'Get 1:1 guidance from industry experts and build a strong portfolio that stands out.',
    schema: {
      "@type": "Service",
      "name": "Expert Data Science Mentorship", 
      "description": "Get 1:1 guidance from industry experts and build a strong portfolio that stands out."
    }
  },
];

// Optimized typewriter words for SEO
const typewriterWords = [
  'Skyrocket your career with DATA SCIENCE',
  'Become the Future of AI',
  'Master Data Science Today',
];

// Memoized Hexagon component for better performance
const HexagonBackground = memo(() => {
  return (
    <div className="absolute inset-0 z-10" role="presentation" aria-hidden="true">
      {hexagonPositions.map(({ id, top, left }, index) => (
        <Image
          key={id}
          src="/Hexagon.svg"
          alt={`Decorative hexagon ${index + 1}`}
          width={300}
          height={300}
          priority={index < 3} // Only prioritize first 3 visible hexagons
          className={`absolute w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[300px] xl:h-[300px] transition-transform duration-300 ease-in-out hover:scale-105`}
          style={{ top, left }}
          loading={index < 3 ? 'eager' : 'lazy'}
          sizes="(max-width: 640px) 60px, (max-width: 768px) 100px, (max-width: 1024px) 150px, (max-width: 1280px) 200px, 300px"
        />
      ))}
    </div>
  );
});

HexagonBackground.displayName = 'HexagonBackground';

// Memoized Feature Cards component
const FeatureCards = memo(() => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full min-h-[180px] max-w-6xl px-8">
      {featureCards.map((card, index) => (
        <article
          key={card.title}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/30 shadow-lg transition-transform hover:scale-[1.02]"
          itemScope
          itemType="https://schema.org/Service"
        >
          <h3 
            className="text-xl font-semibold text-white mb-2"
            itemProp="name"
          >
            {card.title}
          </h3>
          <p 
            className="text-white text-sm"
            itemProp="description"
          >
            {card.text}
          </p>
        </article>
      ))}
    </div>
  );
});

FeatureCards.displayName = 'FeatureCards';

const Hero = () => {
  // Memoize structured data to prevent recreation
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TheCorrelation",
    "description": "Leading Data Science and AI education platform offering industry-relevant courses and certifications",
    "url": typeof window !== 'undefined' ? window.location.origin : '',
    "logo": typeof window !== 'undefined' ? `${window.location.origin}/logo.png` : '',
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Education Enquiry",
      "description": "Enquire about Data Science courses"
    },
    "offers": {
      "@type": "AggregateOffer",
      "description": "Data Science and AI courses with industry mentorship",
      "category": "Education"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Data Science Courses",
      "itemListElement": featureCards.map(card => card.schema)
    }
  }), []);

  const handleEnquireClick = () => {
    // Add your enquiry logic here
    console.log('Enquire button clicked');
  };

  return (
    <LazyMotion features={domAnimation}>
      <section
        className="relative w-full min-h-screen bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 overflow-hidden px-6 py-16 flex flex-col justify-center"
        aria-label="Hero section promoting Data Science education at TheCorrelation"
        role="banner"
        itemScope
        itemType="https://schema.org/Organization"
      >
        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Optimized Hexagon Background */}
        <HexagonBackground />

        {/* Main Content with SEO optimization */}
        <m.div
          className="z-20 max-w-3xl text-white space-y-6
          sm:absolute sm:top-[-15%] sm:left-[5%] sm:right-0 sm:z-30 sm:flex sm:flex-col sm:justify-center sm:items-center sm:h-full sm:px-4 sm:text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 
            className="text-3xl md:text-5xl font-bold leading-tight"
            itemProp="name"
          >
            <Typewriter
              words={typewriterWords}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={70}
              delaySpeed={2000}
            />
          </h1>

          <p 
            className="text-md md:text-lg font-light max-w-2xl text-white"
            itemProp="description"
          >
            Welcome to <strong itemProp="legalName">TheCorrelation</strong>, where AI sparks technological revolutions.
            Explore cutting-edge research and development while earning top-tier
            certifications in Data Science. "Aane wale Kal ka Safar" begins here.
          </p>
        </m.div>

        {/* Bottom Cards + Button */}
        <div className="z-30 mt-12 sm:mt-[65vh] flex flex-col items-center space-y-8">
          <FeatureCards />

          {/* SEO Optimized Enquire Button */}
          <m.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleEnquireClick}
            className="px-10 py-4 bg-white text-orange-600 border-2 border-white font-bold text-lg rounded-full hover:bg-orange-100 hover:text-orange-700 transition-all duration-300 shadow-md"
            aria-label="Enquire about Data Science courses and programs at TheCorrelation"
            type="button"
            itemProp="potentialAction"
            itemScope
            itemType="https://schema.org/Action"
          >
            <span itemProp="name">ENQUIRE NOW</span>
          </m.button>
        </div>
      </section>
    </LazyMotion>
  );
};

export default Hero;