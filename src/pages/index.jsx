'use client'; // Needed because of `useRouter` (Client Component)

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

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
import HomeHero from '@/components/HomeHero'; // Update this path based on your structure

const Home = () => {

  return (
    <div   >

      {/* Hero Section */}

      <HomeHero></HomeHero>


      <AboutUsSection></AboutUsSection>


      <CourseSlidder></CourseSlidder>


      <WhichCourseIsBetter></WhichCourseIsBetter>


      <StepsSection></StepsSection>

      {/* Faculty Section */}
      <FacultySection />


      <WhoShouldJoin></WhoShouldJoin>


      {/* Success Stories Section */}
      <SuccessStoriesSection />


      
      {/* Logic Box Section */}
      <LogicBoxSection />

      
    </div>
  );
};

export default Home;
