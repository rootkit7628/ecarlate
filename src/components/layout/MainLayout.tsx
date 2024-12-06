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
    <div className="bg-gradient-to-br from-dark-900 to-dark-800 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-20">
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