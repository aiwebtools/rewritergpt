
import React from 'react';
import { FileText, Wand2, FileCheck, ChevronRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 px-6 lg:px-12 relative bg-cyber-black/50 backdrop-blur-md">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-1/2 right-0 w-1/2 h-full bg-cyber-purple/5 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-1/2 left-0 w-1/2 h-full bg-cyber-blue/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 mb-4">
            <p className="text-sm font-medium text-cyber-cyan">Simple Process</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            How It <span className="cyber-text-glow">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your content in three simple steps with our powerful AI-driven rewriting tool.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line between steps */}
          <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-cyber-blue via-cyber-cyan to-cyber-purple hidden md:block"></div>
          
          {/* Step 1 */}
          <div className="cyber-card relative z-10 h-full flex flex-col items-center text-center">
            <div className="absolute -top-8 w-16 h-16 rounded-full bg-cyber-black border border-cyber-blue flex items-center justify-center animate-pulse-glow">
              <FileText size={28} className="text-cyber-blue" />
            </div>
            <div className="pt-8 pb-4">
              <div className="bg-cyber-blue/10 rounded-full px-4 py-1 mb-4 inline-block">
                <span className="text-cyber-cyan font-medium">Step 1</span>
              </div>
              <h3 className="text-xl font-bold font-display mb-4">Submit Your Content</h3>
              <p className="text-gray-400">
                Paste your article, upload a file, provide a link, or even share an image of text. Our AI accepts multiple formats.
              </p>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="cyber-card relative z-10 h-full flex flex-col items-center text-center">
            <div className="absolute -top-8 w-16 h-16 rounded-full bg-cyber-black border border-cyber-cyan flex items-center justify-center animate-pulse-glow">
              <Wand2 size={28} className="text-cyber-cyan" />
            </div>
            <div className="pt-8 pb-4">
              <div className="bg-cyber-blue/10 rounded-full px-4 py-1 mb-4 inline-block">
                <span className="text-cyber-cyan font-medium">Step 2</span>
              </div>
              <h3 className="text-xl font-bold font-display mb-4">AI Processing</h3>
              <p className="text-gray-400">
                Our advanced AI analyzes the content, preserving the original tone, style, and all essential details while enhancing quality.
              </p>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="cyber-card relative z-10 h-full flex flex-col items-center text-center">
            <div className="absolute -top-8 w-16 h-16 rounded-full bg-cyber-black border border-cyber-purple flex items-center justify-center animate-pulse-glow">
              <FileCheck size={28} className="text-cyber-purple" />
            </div>
            <div className="pt-8 pb-4">
              <div className="bg-cyber-blue/10 rounded-full px-4 py-1 mb-4 inline-block">
                <span className="text-cyber-cyan font-medium">Step 3</span>
              </div>
              <h3 className="text-xl font-bold font-display mb-4">Get Enhanced Content</h3>
              <p className="text-gray-400">
                Receive your completely rewritten, SEO-optimized content ready for immediate use, available for download in document format.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://chatgpt.com/g/g-ddwxaX9Pn-article-and-blog-rewriter-gpt" 
            target="_blank"
            rel="noopener noreferrer" 
            className="cyber-button"
          >
            <span className="cyber-button-content flex items-center gap-2">
              Try It Now <ChevronRight size={16} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
