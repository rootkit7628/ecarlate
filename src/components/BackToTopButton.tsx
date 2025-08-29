import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { cn } from '../utils/cn';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 400px from the top
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const heroElement = document.getElementById('hero');
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback to scroll to top if hero element not found
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed right-6 bottom-6 z-50 p-4 rounded-full bg-accent-red/50 shadow-lg",
        "hover:bg-accent-red transition-all duration-300",
        "transform hover:scale-110 active:scale-95"
      )}
      aria-label="Back to top"
    >
      <ChevronUp className="h-6 w-6 text-white" />
    </button>
  );
};

export default BackToTopButton;