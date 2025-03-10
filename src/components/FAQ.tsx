
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 px-6 lg:px-12 relative bg-cyber-black/50 backdrop-blur-md">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-cyber-blue/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-cyber-cyan/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 mb-4">
            <p className="text-sm font-medium text-cyber-cyan">Support</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Frequently Asked <span className="cyber-text-glow">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about Article and Blog Rewriter GPT.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border border-cyber-blue/20 rounded-lg overflow-hidden backdrop-blur-md bg-cyber-black/30">
            <AccordionTrigger className="px-6 py-4 text-left font-medium hover:text-cyber-cyan transition-colors">
              How does Article and Blog Rewriter GPT preserve the original style?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              Our AI analyzes the original content's tone, sentence structure, vocabulary choice, and rhetorical patterns to create a fingerprint of the author's style. When rewriting, it maintains these stylistic elements while changing the specific wording and sentence construction, ensuring the rewritten content feels authentic to the original voice.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-cyber-blue/20 rounded-lg overflow-hidden backdrop-blur-md bg-cyber-black/30">
            <AccordionTrigger className="px-6 py-4 text-left font-medium hover:text-cyber-cyan transition-colors">
              What formats can I submit for rewriting?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              Article and Blog Rewriter GPT accepts multiple input formats: direct text pasting, URL links to published articles, uploaded document files (.docx, .pdf, .txt), and even images containing text. The AI will extract and process content from any of these sources with equal effectiveness.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-cyber-blue/20 rounded-lg overflow-hidden backdrop-blur-md bg-cyber-black/30">
            <AccordionTrigger className="px-6 py-4 text-left font-medium hover:text-cyber-cyan transition-colors">
              How does the SEO optimization feature work?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              After rewriting your content, the AI can analyze it for SEO opportunities without compromising readability. It strategically incorporates relevant keywords, optimizes header structure, improves meta descriptions, and enhances readability scores. You can specify target keywords or let the AI identify opportunities based on the content subject matter.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-cyber-blue/20 rounded-lg overflow-hidden backdrop-blur-md bg-cyber-black/30">
            <AccordionTrigger className="px-6 py-4 text-left font-medium hover:text-cyber-cyan transition-colors">
              Is the rewritten content plagiarism-free?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              Yes, Article and Blog Rewriter GPT creates completely new content that passes plagiarism checks. While preserving the information and style of the original, it rebuilds sentences and paragraphs from the ground up, ensuring the output is unique. However, it's always good practice to review and add your personal touch to any AI-generated content.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border border-cyber-blue/20 rounded-lg overflow-hidden backdrop-blur-md bg-cyber-black/30">
            <AccordionTrigger className="px-6 py-4 text-left font-medium hover:text-cyber-cyan transition-colors">
              Can I specify different writing styles or tones?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              Absolutely! You can request specific styles such as formal, conversational, persuasive, informative, or humorous. The AI can also adapt content for different platforms (academic, business, social media) or audiences (technical, general public, industry-specific). Simply specify your preferences when submitting content for rewriting.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border border-cyber-blue/20 rounded-lg overflow-hidden backdrop-blur-md bg-cyber-black/30">
            <AccordionTrigger className="px-6 py-4 text-left font-medium hover:text-cyber-cyan transition-colors">
              How long does the rewriting process take?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              Processing time depends on the length and complexity of the original content, but most articles (up to 2000 words) are rewritten within minutes. Longer pieces or those requiring specialized knowledge may take slightly longer. The tool is designed to be efficient without sacrificing quality.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border border-cyber-blue/20 rounded-lg overflow-hidden backdrop-blur-md bg-cyber-black/30">
            <AccordionTrigger className="px-6 py-4 text-left font-medium hover:text-cyber-cyan transition-colors">
              Is there a limit to how much content I can rewrite?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              Article and Blog Rewriter GPT can handle content of various lengths, from short blog posts to comprehensive articles. While there are practical limits based on the OpenAI model, most standard articles and blog posts are well within the tool's capabilities. For very long pieces, we recommend breaking them into sections for optimal results.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="border border-cyber-blue/20 rounded-lg overflow-hidden backdrop-blur-md bg-cyber-black/30">
            <AccordionTrigger className="px-6 py-4 text-left font-medium hover:text-cyber-cyan transition-colors">
              How do I access Article and Blog Rewriter GPT?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              You can access the tool directly through OpenAI's ChatGPT platform by clicking the "USE Article and Blog Rewriter GPT" button on this page. This will take you to the specialized GPT where you can immediately start submitting content for rewriting.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
