
import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, delay }) => {
  return (
    <div 
      className="cyber-card relative overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Quote size={24} className="text-cyber-blue mb-4 opacity-50" />
      <p className="text-gray-300 mb-6">{quote}</p>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-purple flex items-center justify-center">
          <span className="font-bold text-white">{author.charAt(0)}</span>
        </div>
        <div>
          <p className="font-medium text-white">{author}</p>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 mb-4">
            <p className="text-sm font-medium text-cyber-cyan">Success Stories</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            What Our Users <span className="cyber-text-glow">Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how Article and Blog Rewriter GPT has transformed content creation for professionals across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial 
            quote="This AI tool is a game-changer for my content marketing agency. It maintains the style and tone perfectly while giving everything a fresh perspective. We've cut our content production time in half!"
            author="Sarah Johnson"
            role="Content Marketing Director"
            delay={100}
          />
          <Testimonial 
            quote="As a blogger juggling multiple projects, Article and Blog Rewriter GPT has become my secret weapon. The SEO optimization features have helped boost my organic traffic by 40% in just two months."
            author="Michael Chen"
            role="Professional Blogger"
            delay={200}
          />
          <Testimonial 
            quote="I was skeptical at first, but this tool genuinely preserves the nuance and detail of academic content while making it more engaging. Perfect for repurposing my research for different publications."
            author="Dr. Emily Rodriguez"
            role="Academic Researcher"
            delay={300}
          />
          <Testimonial 
            quote="The ability to extract text from images of articles saved me countless hours of transcription. The rewritten content captures exactly what I need while sounding completely fresh."
            author="David Park"
            role="Digital Entrepreneur"
            delay={400}
          />
          <Testimonial 
            quote="We use Article Rewriter GPT for localization projects, adapting content for different cultural contexts. It maintains the core message while making the content resonate with specific audiences."
            author="Sophia Martinez"
            role="Global Marketing Strategist"
            delay={500}
          />
          <Testimonial 
            quote="The customization options are incredible. I can specify exactly how I want the tone shifted for different platforms. My LinkedIn articles and Medium posts now have distinct voices but consistent information."
            author="Alex Thompson"
            role="Freelance Writer"
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
