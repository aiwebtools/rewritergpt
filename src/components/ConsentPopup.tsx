
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ConsentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has already agreed
    const hasAgreed = localStorage.getItem('userConsent');
    
    if (!hasAgreed) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAgree = () => {
    // Save consent to localStorage
    localStorage.setItem('userConsent', 'true');
    setIsVisible(false);
    
    // Show confirmation toast
    toast({
      title: "Consent Accepted",
      description: "Thank you for accepting our terms.",
      duration: 3000,
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="cyber-card max-w-md w-full p-6 relative">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-cyber-blue hover:text-cyber-cyan transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>
        
        <h2 className="text-xl font-display mb-4 text-cyber-cyan">Disclaimer</h2>
        
        <div className="text-sm text-white/80 mb-6 space-y-2">
          <p>
            By using Article and Blog Rewriter GPT, you agree to our terms of service and privacy policy. 
            This tool is provided "as is" without warranties of any kind.
          </p>
          <p>
            You are responsible for ensuring you have the right to rewrite any content you submit, 
            and you acknowledge that the generated content may require additional review.
          </p>
        </div>
        
        <div className="flex justify-center">
          <button 
            onClick={handleAgree}
            className="cyber-button"
          >
            <span className="cyber-button-content font-display">I AGREE</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentPopup;
