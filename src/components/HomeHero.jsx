'use client';

import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import { motion, LazyMotion, domAnimation, m } from 'framer-motion';
import { memo, useMemo } from 'react';

// Memoized hexagon data to prevent recreation on each render
const hexagonPositions = [
  { id: 'hex1', top: '-25%', left: '50%' },
  
  { id: 'hex8', top: '33%', left: '72%' },
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
  'Data Science',
  'Machine Learning',
  'Artificial Intelligence',
  'Data Analytics',
  'Data Visualization',
];

// Memoized Hexagon component for better performance
const HexagonBackground = memo(() => {
  return (
    <div className="absolute inset-0 z-10" role="presentation" aria-hidden="true">       
  {hexagonPositions.slice(0, 2).map(({ id, top, left }, index) => (         
    <Image                
      key={id}                
      src="/Hexagon1.png"                
      alt={`Decorative hexagon ${index + 1}`}                
      width={600}                
      height={600}                
      priority={true} // Both hexagons get priority since there are only 2              
      className={`absolute w-[600px] h-[600px] transition-transform duration-300 ease-in-out hover:scale-105`}                
      style={{ top, left }}                
      loading="eager"            
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

const HomeHero = () => {
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
        className="relative w-full min-h-screen overflow-hidden px-6 py-16 flex flex-col justify-center bg-[linear-gradient(135deg,#7b25d1,#ff2626,#910000)]"
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
          sm:absolute sm:top-[20%] sm:left-[5%] sm:right-0 sm:z-30 sm:flex sm:flex-col sm:justify-start sm:items-start sm:h-full sm:px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-full flex justify-center items-center px-4">
            <h1 className="text-xl md:text-4xl lg:text-4xl font-bold leading-tight text-white flex items-center text-center gap-2">
              <span className="whitespace-nowrap">Become the Future of</span>
              <span className="text-orange-400 whitespace-nowrap">
                <Typewriter
                  words={typewriterWords}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h1>
          </div>

          <p
            className="text-md md:text-lg font-light max-w-2xl text-white"
            itemProp="description"
          >
            Welcome to <strong itemProp="legalName">TheCorrelation</strong>,
            where AI sparks technological revolutions. Explore cutting-edge
            research and development while earning top-tier certifications in
            Data Science. "Aane wale Kal ka Safar" begins here.
          </p>
        </m.div>

        {/* Bottom Cards + Button */}
        <div className="z-30 mt-12 sm:mt-[65vh] flex flex-col items-center space-y-8">
          <FeatureCards />

          {/* SEO Optimized Enquire Button */}
          <button
            type="button"
            className="px-10 py-4 bg-white text-black font-bold text-lg rounded-full shadow-md transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
          >
            ENQUIRE NOW
          </button>
        </div>
      </section>
    </LazyMotion>
  );
};

export default HomeHero;



























         





































         





































         





































         












































    

































































