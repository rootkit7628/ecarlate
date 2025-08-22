import React, { useState } from 'react';
import Navbar from '../Navbar';
import BackgroundDecorations from '../BackgroundDecorations';
import ChatButton from '../chat/ChatButton';
import ChatInterface from '../chat/ChatInterface';

interface MainLayoutProps {
  children: React.ReactNode;
  showNavbar?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, showNavbar = true }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-light-50 to-light-100 dark:from-dark-900 dark:to-dark-800 min-h-screen relative overflow-hidden transition-all duration-300">
      <div className="absolute inset-0">
        <BackgroundDecorations />
      </div>
      {showNavbar && <Navbar />}
      <main className={`${showNavbar ? "pt-16" : ""} relative z-10`}>
        {children}
      </main>
      <ChatButton isOpen={isChatOpen} onClick={() => setIsChatOpen(!isChatOpen)} />
      <ChatInterface isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default MainLayout;