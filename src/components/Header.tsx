
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const AIWEBTOOLS_URL = "https://aiwebtools.lovable.app/?via=aiwebtools";

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 px-4 sm:px-6 lg:px-12
      ${isScrolled ? 'backdrop-blur-md bg-cyber-black/80 shadow-lg' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="relative z-20 min-w-0 flex-shrink">
          <a 
            href="/" 
            className="flex items-center gap-2 group"
          >
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gradient-to-r from-cyber-blue to-cyber-purple p-0.5 flex-shrink-0">
              <div className="absolute inset-0.5 bg-cyber-black rounded-full flex items-center justify-center">
                <span className="text-lg sm:text-xl text-cyber-blue font-display">A</span>
              </div>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm sm:text-lg lg:text-xl font-bold tracking-wider font-display text-white truncate">
                Article and Blog Rewriter <span className="text-cyber-cyan">GPT</span>
              </span>
              <span className="text-[10px] sm:text-xs text-gray-400 tracking-wide">
                Presented by <a href={AIWEBTOOLS_URL} target="_blank" rel="noopener noreferrer" className="text-cyber-blue hover:text-cyber-cyan transition-colors">AiWebTools.Ai</a>
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink-0">
          <a 
            href="https://chatgpt.com/g/g-ddwxaX9Pn-article-and-blog-rewriter-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cyber-button"
          >
            <span className="cyber-button-content text-sm">USE Article and Blog Rewriter GPT</span>
          </a>
          <a 
            href="#faq" 
            className="text-white hover:text-cyber-cyan transition-colors font-medium text-sm"
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="text-white hover:text-cyber-cyan transition-colors font-medium text-sm"
          >
            Disclaimer
          </a>
          <a 
            href={AIWEBTOOLS_URL}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-cyber-cyan transition-colors font-medium text-sm"
          >
            More AI Tools
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden relative z-20 p-2 text-white active:scale-90 transition-transform duration-150"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-cyber-black/95 backdrop-blur-md flex items-center justify-center z-10 lg:hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        >
          <nav className="flex flex-col items-center gap-6 sm:gap-8 py-8 w-full px-6">
            <a 
              href="https://chatgpt.com/g/g-ddwxaX9Pn-article-and-blog-rewriter-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cyber-button"
              onClick={closeMobileMenu}
            >
              <span className="cyber-button-content text-sm sm:text-base">USE Article and Blog Rewriter GPT</span>
            </a>
            <a 
              href="#faq" 
              className="text-lg sm:text-xl text-white hover:text-cyber-cyan transition-colors font-medium"
              onClick={closeMobileMenu}
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-lg sm:text-xl text-white hover:text-cyber-cyan transition-colors font-medium"
              onClick={closeMobileMenu}
            >
              Disclaimer
            </a>
            <a 
              href={AIWEBTOOLS_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg sm:text-xl text-white hover:text-cyber-cyan transition-colors font-medium"
              onClick={closeMobileMenu}
            >
              More AI Tools
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
