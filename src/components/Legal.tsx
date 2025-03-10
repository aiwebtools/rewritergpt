
import React from 'react';
import { Shield, AlertTriangle } from 'lucide-react';

const Legal: React.FC = () => {
  return (
    <section id="disclaimer" className="py-20 px-6 lg:px-12 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 mb-4">
            <p className="text-sm font-medium text-cyber-cyan">Legal Information</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Legal <span className="cyber-text-glow">Disclaimer</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Important legal information regarding the use of Article and Blog Rewriter GPT.
          </p>
        </div>

        <div className="cyber-card space-y-6">
          <div className="flex items-start gap-4">
            <Shield className="text-cyber-blue flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2 font-display">Use Limitations and Responsibilities</h3>
              <p className="text-gray-300">
                Article and Blog Rewriter GPT is provided for legitimate content rewriting purposes only. Users are solely responsible for ensuring that their use of rewritten content complies with all applicable laws, regulations, and third-party rights, including but not limited to laws related to intellectual property, privacy, publicity, and data protection.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <AlertTriangle className="text-cyber-blue flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2 font-display">Copyright and Intellectual Property</h3>
              <p className="text-gray-300">
                This tool is designed to assist in creating derivative works based on content you have the right to modify. AI Web Tools LLC does not claim ownership of the original content submitted or the rewritten output. Users must ensure they have proper rights or permissions to modify and republish the content they submit. Rewriting copyrighted material without permission may constitute copyright infringement.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Shield className="text-cyber-blue flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2 font-display">No Warranties</h3>
              <p className="text-gray-300">
                Article and Blog Rewriter GPT is provided "as is" without any warranties, expressed or implied. While we strive for high-quality output, AI Web Tools LLC makes no guarantees regarding the accuracy, quality, originality, or plagiarism-free nature of the rewritten content. Users should review and edit AI-generated content before publication or distribution.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <AlertTriangle className="text-cyber-blue flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2 font-display">Limitation of Liability</h3>
              <p className="text-gray-300">
                AI Web Tools LLC shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use Article and Blog Rewriter GPT or the content it produces. This includes but is not limited to damages for loss of profits, goodwill, data, or other intangible losses.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Shield className="text-cyber-blue flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2 font-display">Prohibited Uses</h3>
              <p className="text-gray-300">
                Users are prohibited from using Article and Blog Rewriter GPT to produce, distribute, or promote content that is illegal, harmful, fraudulent, infringing, harassing, or objectionable. This includes content that promotes misinformation, hate speech, or violates any person's rights. AI Web Tools LLC reserves the right to terminate access for users who violate these terms.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <AlertTriangle className="text-cyber-blue flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2 font-display">Data Privacy</h3>
              <p className="text-gray-300">
                By using this tool, you acknowledge that content submitted may be processed by AI systems. While we implement reasonable measures to protect user data, we cannot guarantee absolute security. For complete information on data handling practices, please refer to our Privacy Policy.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Shield className="text-cyber-blue flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2 font-display">Terms of Service</h3>
              <p className="text-gray-300">
                Use of Article and Blog Rewriter GPT is subject to OpenAI's <a href="https://aiwebtools.ai/terms-of-services" target="_blank" rel="noopener noreferrer" className="text-cyber-cyan hover:underline">Terms of Service</a> as well as AI Web Tools LLC's terms. By using this tool, you agree to comply with all applicable terms and conditions.
              </p>
            </div>
          </div>

          <div className="pt-4 text-center text-sm text-gray-400">
            <p>
              Last updated: March 2025
            </p>
            <p className="mt-2">
              For questions regarding this disclaimer, please contact: <a href="mailto:Contact@ai-webtools.com" className="text-cyber-blue hover:text-cyber-cyan">Contact@ai-webtools.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legal;
