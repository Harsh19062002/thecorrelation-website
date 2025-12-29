"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // ✅ FIXED (App Router)
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Head from 'next/head';

import {  EffectFade } from 'swiper/modules';

import 'swiper/css/effect-fade';


import Hero from '@/components/Hero';
import CommitmentCard from '@/components/CommitmentCard';
import Tools from '@/components/Tools';
import ProcessSection from '@/components/ProcessSection';
import BetterSection from '@/components/BetterSection';
import LogicBoxSection from '@/components/LogicBoxSection';
import FacultySection from '@/components/FacultySection';
import SuccessStoriesSection from '@/components/SuccessStoriesSection';
import PartnerBrands from '@/components/PartnerBrands';
import ReachOutForm from '@/components/ReachOutForm';
import AboutUsSection from '@/components/AboutUsSection';
import courseContent from '@/data/courseContent';
import CourseSlidder from '@/components/CourseSlidder';
import StepsSection from '@/components/StepsSection';
import WhoShouldJoin from '@/components/WhoShouldJoin';
import WhichCourseIsBetter from '@/components/WhichCourseIsBetter';
import HomeHero from '@/components/HomeHero';
import YourJourneySection from '@/components/YourJourneySection';
import DataScienceSection from '@/components/DataScienceSection';
import LeadForm from '@/components/LeadForm'; // Update this path based on your structure
import {
  BookOpen,User,Clipboard,Code2,Database,ChevronRight,BarChart3,LineChart,BrainCircuit,HelpCircle,Rocket,ShoppingCart,Brain,Sparkles,Bot,Monitor,CreditCard,MapPin,Building,Search,ArrowRight,Check,
} from 'lucide-react';





  

const Home = () => {

  return (
    <div >
      <Head>
        <title>TheCorrelation | Industry-Ready Data Science & AI Programs</title>

        <meta
          name="description"
          content="TheCorrelation offers industry-ready Data Science, Machine Learning, Deep Learning and Generative AI programs with real-world projects and expert mentors."
        />

        <meta
          name="keywords"
          content="Data Science Course, Machine Learning Course, AI Course, Generative AI, Data Analytics, TheCorrelation"
        />

        
      </Head>

      {/* Hero Section */}

      <HomeHero></HomeHero>

     <DataScienceSection/>
      


      <AboutUsSection></AboutUsSection>


      <CourseSlidder></CourseSlidder>


      <WhichCourseIsBetter></WhichCourseIsBetter>

      <LeadForm></LeadForm>

       <YourJourneySection/>
      

      {/* Faculty Section */}
      


      <WhoShouldJoin></WhoShouldJoin>


      {/* Success Stories Section */}
      <SuccessStoriesSection />


      
      {/* Logic Box Section */}
      <LogicBoxSection />


      

      
    </div>
  );
};

export default Home;
