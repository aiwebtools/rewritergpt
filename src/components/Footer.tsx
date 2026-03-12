
import React from 'react';
import { PhoneCall, Mail, Twitter, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const AIWEBTOOLS_URL = "https://aiwebtools.lovable.app/?via=aiwebtools";

const Footer: React.FC = () => {
  return (
    <footer className="pt-20 pb-10 px-6 lg:px-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-cyber-purple/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo and About */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
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
                  Presented by <a href={AIWEBTOOLS_URL} target="_blank" rel="noopener noreferrer" className="text-cyber-blue hover:text-cyber-cyan transition-colors">AiWebTools.Ai</a>
                </span>
              </div>
            </div>
            <p className="text-gray-300">
              Advanced AI-powered content rewriting that preserves style, enhances quality, and optimizes for engagement.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold font-display text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://chatgpt.com/g/g-ddwxaX9Pn-article-and-blog-rewriter-gpt" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyber-cyan transition-colors flex items-center gap-2">
                  <ArrowRight size={16} />
                  Use Article and Blog Rewriter GPT
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-cyber-cyan transition-colors flex items-center gap-2">
                  <ArrowRight size={16} />
                  FAQ
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-300 hover:text-cyber-cyan transition-colors flex items-center gap-2">
                  <ArrowRight size={16} />
                  Disclaimer
                </a>
              </li>
              <li>
                <a href={AIWEBTOOLS_URL} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyber-cyan transition-colors flex items-center gap-2">
                  <ArrowRight size={16} />
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold font-display text-white">Legal</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyber-cyan transition-colors flex items-center gap-2">
                  <ArrowRight size={16} />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href={AIWEBTOOLS_URL} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyber-cyan transition-colors flex items-center gap-2">
                  <ArrowRight size={16} />
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-300 hover:text-cyber-cyan transition-colors flex items-center gap-2">
                  <ArrowRight size={16} />
                  Legal Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold font-display text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:4758008096" className="text-gray-300 hover:text-cyber-cyan transition-colors flex items-center gap-2">
                  <PhoneCall size={16} className="text-cyber-blue" />
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a href="mailto:Contact@ai-webtools.com" className="text-gray-300 hover:text-cyber-cyan transition-colors flex items-center gap-2">
                  <Mail size={16} className="text-cyber-blue" />
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>

            {/* More AI Tools Button */}
            <a 
              href={AIWEBTOOLS_URL}
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-medium hover:shadow-lg hover:shadow-cyber-blue/20 transition-all mt-4"
            >
              More AI Tools
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div>
            <a 
              href={AIWEBTOOLS_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyber-cyan transition-colors"
            >
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </a>
          </div>
          <div className="mt-4 md:mt-0">
            Powered by advanced AI language models.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
