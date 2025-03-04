import React, { useState } from 'react';
import { Send, X } from 'lucide-react';
import { cn } from '../../utils/cn';
import ChatMessage from './ChatMessage';
import { Message, MessageType } from '../../types/chat';

interface ChatInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: MessageType.Bot,
      content: "こんにちは ! I'm Jinkxy. Build to be an AI Assistant for my master's website ? He's still struggling building me so be patient Hihi. Sayonara",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      type: MessageType.User,
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        type: MessageType.Bot,
        content: generateResponse(input),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const generateResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('experience') || input.includes('work')) {
      return "I have over 5 years of experience in full-stack development, currently working as a Senior Developer at Tech Solutions Inc. I specialize in React, Node.js, and cloud technologies.";
    }
    
    if (input.includes('anime') || input.includes('manga')) {
      return "I'm a huge fan of anime and manga! Some of my favorites include One Piece, Berserk, and Vinland Saga. I particularly enjoy seinen series with deep storytelling.";
    }
    
    if (input.includes('game') || input.includes('gaming')) {
      return "I love RPGs and action games! Final Fantasy, Persona, and Devil May Cry are some of my favorites. I also enjoy strategy games like Fire Emblem.";
    }
    
    if (input.includes('tech') || input.includes('programming')) {
      return "I'm passionate about web development, particularly React and TypeScript. I also enjoy working with cloud technologies and contributing to open-source projects.";
    }
    
    return "Feel free to ask me about my experience in tech, my projects, or my interests in gaming and anime!";
  };

  return (
    <div
      className={cn(
        "fixed left-6 bottom-24 z-50 w-80 bg-dark-800 rounded-lg shadow-xl border border-dark-600",
        "transform transition-all duration-300",
        isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-dark-600">
        <h3 className="text-lg font-semibold text-white">Jinkxy (⌒‿⌒)</h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-dark-600">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-1 bg-dark-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-red"
          />
          <button
            onClick={handleSend}
            className="p-2 bg-accent-red rounded-lg hover:bg-accent-redDark transition-colors"
          >
            <Send className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;