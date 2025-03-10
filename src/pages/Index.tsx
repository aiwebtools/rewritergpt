
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Legal from '@/components/Legal';
import Footer from '@/components/Footer';
import ThreeBackground from '@/components/ThreeBackground';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    // Update document title
    document.title = "Article and Blog Rewriter GPT | AI-Powered Content Transformation";
    
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-cyber-black">
      {/* 3D Background (only on desktop) */}
      {!isMobile && <ThreeBackground />}
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Legal />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
