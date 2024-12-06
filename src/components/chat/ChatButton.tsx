import React from 'react';
import { MessageSquare } from 'lucide-react';
import { cn } from '../../utils/cn';

interface ChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const ChatButton: React.FC<ChatButtonProps> = ({ onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "fixed left-6 bottom-6 z-50 p-4 rounded-full bg-accent-red/50 shadow-lg",
        "hover:bg-accent-red transition-all duration-300",
        "transform hover:scale-110 active:scale-95",
        isOpen && "rotate-90 bg-accent-red"
      )}
      aria-label="Chat with AI"
    >
      <MessageSquare className="h-6 w-6 text-white" />
    </button>
  );
};

export default ChatButton;