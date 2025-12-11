
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parallaxEffect = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      heroRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    };

    window.addEventListener('scroll', parallaxEffect);
    return () => window.removeEventListener('scroll', parallaxEffect);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-cyber-grid opacity-40"></div>
        <div className="absolute top-0 right-0 w-1/3 h-screen bg-cyber-blue/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-screen bg-cyber-purple/10 blur-[150px] rounded-full"></div>
      </div>

      <div ref={heroRef} className="max-w-7xl mx-auto px-6 lg:px-8 z-10 pt-20 pb-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="flex flex-col gap-6 md:gap-8">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 mb-4">
                <p className="text-sm font-medium text-cyber-cyan">Free AI Writing Assistant</p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-4">
                Transform Your <span className="cyber-text-glow">Content</span> with Free AI Tools
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Rewrite articles and blogs with perfect preservation of tone, style, and detail using our free AI tools. 
                Enhanced for SEO, engagement, and uniqueness - completely free to use.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a 
                href="https://chatgpt.com/g/g-ddwxaX9Pn-article-and-blog-rewriter-gpt" 
                target="_blank"
                rel="noopener noreferrer" 
                className="cyber-button"
                aria-label="Try Article and Blog Rewriter GPT - Free AI Writing Tool"
              >
                <span className="cyber-button-content">Try Free AI Article Rewriter</span>
              </a>
              <a 
                href="#how-it-works" 
                className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden
                text-white font-bold transition-all duration-300 border border-cyber-blue/30
                hover:border-cyber-blue/70 rounded-md bg-cyber-black/50"
                aria-label="Learn more about our free AI tools"
              >
                <span className="flex items-center gap-2">
                  Learn More <ArrowDown size={16} />
                </span>
              </a>
            </div>

            <div className="flex items-center gap-4 mt-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-cyber-blue flex items-center justify-center text-xs font-bold shadow-lg">AI</div>
                <div className="w-8 h-8 rounded-full bg-cyber-purple flex items-center justify-center text-xs font-bold shadow-lg">GP</div>
                <div className="w-8 h-8 rounded-full bg-cyber-cyan flex items-center justify-center text-xs font-bold shadow-lg">T</div>
              </div>
              <p className="text-sm text-gray-400">
                Trusted by <span className="text-white font-medium">thousands</span> of content creators using free AI tools
              </p>
            </div>
          </div>

          {/* Hero Video */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden border border-cyber-blue/20 shadow-[0_0_30px_rgba(62,104,255,0.15)] hover:shadow-[0_0_40px_rgba(62,104,255,0.25)] transition-all duration-500">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/5n1RHKoQ-Ds?autoplay=1&mute=0&loop=1&playlist=5n1RHKoQ-Ds&controls=1&rel=0&vq=hd1080&hd=1"
                  title="Article and Blog Rewriter GPT - Free AI Tool Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Floating feature badges */}
            <div className="absolute -top-6 -right-6 glass-panel px-3 py-2 animate-float shadow-lg z-30">
              <p className="text-sm font-medium text-cyber-cyan">SEO Optimized</p>
            </div>
            <div className="absolute -bottom-6 -left-6 glass-panel px-3 py-2 animate-float animation-delay-500 shadow-lg z-30">
              <p className="text-sm font-medium text-cyber-purple">Maintains Original Style</p>
            </div>
            <div className="absolute top-1/2 -right-4 glass-panel px-3 py-2 animate-float animation-delay-1000 shadow-lg z-30">
              <p className="text-sm font-medium text-cyber-blue">100% Free AI Tool</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#features" className="text-cyber-blue hover:text-cyber-cyan transition-colors" aria-label="Scroll to features">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
