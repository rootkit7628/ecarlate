import React from 'react';
import { Message, MessageType } from '../../types/chat';
import { cn } from '../../utils/cn';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.type === MessageType.Bot;

  return (
    <div
      className={cn(
        "flex",
        isBot ? "justify-start" : "justify-end"
      )}
    >
      <div
        className={cn(
          "max-w-[80%] rounded-lg px-4 py-2",
          isBot ? "bg-dark-700 text-white" : "bg-accent-red text-white"
        )}
      >
        <p className="text-sm">{message.content}</p>
        <span className="text-xs opacity-50 mt-1 block">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;