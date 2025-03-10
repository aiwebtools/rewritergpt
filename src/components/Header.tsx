
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 lg:px-12
      ${isScrolled ? 'backdrop-blur-md bg-cyber-black/80 shadow-lg' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="relative z-20">
          <a 
            href="/" 
            className="flex items-center gap-2 group"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r from-cyber-blue to-cyber-purple p-0.5">
              <div className="absolute inset-0.5 bg-cyber-black rounded-full flex items-center justify-center">
                <span className="text-xl text-cyber-blue font-display">A</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider font-display text-white">
                Article and Blog Rewriter <span className="text-cyber-cyan">GPT</span>
              </span>
              <span className="text-xs text-gray-400 tracking-wide">
                Presented by <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-cyber-blue hover:text-cyber-cyan transition-colors">AiWebTools.Ai</a>
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <a 
            href="https://chatgpt.com/g/g-ddwxaX9Pn-article-and-blog-rewriter-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cyber-button"
          >
            <span className="cyber-button-content">USE Article and Blog Rewriter GPT</span>
          </a>
          <a 
            href="#faq" 
            className="text-white hover:text-cyber-cyan transition-colors font-medium"
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="text-white hover:text-cyber-cyan transition-colors font-medium"
          >
            Disclaimer
          </a>
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-cyber-cyan transition-colors font-medium"
          >
            More AI Tools
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative z-20 p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-cyber-black/95 backdrop-blur-md flex items-center justify-center z-10 md:hidden">
            <nav className="flex flex-col items-center gap-8 py-8">
              <a 
                href="https://chatgpt.com/g/g-ddwxaX9Pn-article-and-blog-rewriter-gpt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyber-button"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="cyber-button-content">USE Article and Blog Rewriter GPT</span>
              </a>
              <a 
                href="#faq" 
                className="text-xl text-white hover:text-cyber-cyan transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="#disclaimer" 
                className="text-xl text-white hover:text-cyber-cyan transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Disclaimer
              </a>
              <a 
                href="https://www.aiwebtools.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl text-white hover:text-cyber-cyan transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                More AI Tools
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
