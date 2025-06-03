
import React, { useEffect, useRef } from 'react';
import { 
  Sparkles, 
  Search, 
  FileText, 
  Link2, 
  Download, 
  Edit, 
  Image, 
  Globe 
} from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="cyber-card flex flex-col gap-4 relative overflow-hidden group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 to-cyber-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="text-cyber-blue bg-cyber-blue/10 p-3 rounded-lg w-fit">
        {icon}
      </div>
      <h3 className="text-xl font-bold font-display">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.feature-item');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="features" className="py-20 px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 mb-4">
            <p className="text-sm font-medium text-cyber-cyan">Free AI Tools Features</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Advanced Free AI Writing <span className="cyber-text-glow">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our free AI-powered tool offers comprehensive features to transform your content 
            while preserving its essence and enhancing its impact - all completely free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature 
            icon={<Sparkles size={24} />}
            title="Style Preservation"
            description="Free AI tool that rewrites content while maintaining the original tone, voice, and style of the author."
            delay={100}
          />
          <Feature 
            icon={<Search size={24} />}
            title="Free SEO Optimization"
            description="Enhances your content for better search engine ranking without compromising readability - completely free."
            delay={200}
          />
          <Feature 
            icon={<FileText size={24} />}
            title="Multiple Format Support"
            description="Free AI tool accepts and processes content from links, uploads, copy-pasted text, or even images."
            delay={300}
          />
          <Feature 
            icon={<Link2 size={24} />}
            title="Custom Link Insertion"
            description="Seamlessly integrates your specified links into the rewritten content for better traffic flow."
            delay={400}
          />
          <Feature 
            icon={<Download size={24} />}
            title="Free Downloadable Results"
            description="Get your rewritten content in a convenient document format for immediate use - no cost."
            delay={500}
          />
          <Feature 
            icon={<Edit size={24} />}
            title="Content Enhancement"
            description="Creates more engaging, entertaining content that surpasses the original while maintaining all essential details."
            delay={600}
          />
          <Feature 
            icon={<Image size={24} />}
            title="Free Image Text Recognition"
            description="Extract text from images of articles for rewriting, saving you time on manual transcription."
            delay={700}
          />
          <Feature 
            icon={<Globe size={24} />}
            title="Audience Targeting"
            description="Adapt content for specific target audiences without losing the original message or details."
            delay={800}
          />
          <Feature 
            icon={<Sparkles size={24} />}
            title="Complete Free Customization"
            description="Personalize and fine-tune the rewritten content according to your specific requirements at no cost."
            delay={900}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
