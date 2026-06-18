import React from "react";
import SEO from "../components/common/SEO";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ExpectSection from "../components/home/ExpectSection";
import ResidentExpectations from "../components/home/ResidentExpectations";
import GallerySection from "../components/home/GallerySection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FAQSection from "../components/home/FAQSection";
import FinalCTA from "../components/home/FinalCTA";

const Home = () => {
  return (
    <>
      <SEO 
        title="The Nest | Safe & Structured Recovery Housing" 
        description="Providing a supportive, structured environment to help individuals rebuild their lives and maintain long-term recovery." 
        keywords="recovery homes, sober living, structured housing" 
      />
      <HeroSection />
      <AboutSection />
      <ExpectSection />
      <ResidentExpectations />
      <GallerySection />
      <TestimonialsSection />
      <FinalCTA />
      <FAQSection />
      
    
    </>
  );
};

export default Home;