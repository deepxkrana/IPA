import React from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const formattedTime = message.timestamp.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div
      className={`mb-4 max-w-[85%] ${
        message.sender === 'user' ? 'ml-auto' : 'mr-auto'
      }`}
    >
      <div
        className={`rounded-lg p-3 ${
          message.sender === 'user'
            ? 'bg-blue-600 text-white rounded-br-none'
            : 'bg-gray-100 text-gray-800 rounded-bl-none'
        }`}
        style={{ whiteSpace: 'pre-line' }}
      >
        {message.text}
      </div>
      <div
        className={`text-xs text-gray-500 mt-1 ${
          message.sender === 'user' ? 'text-right' : 'text-left'
        }`}
      >
        {formattedTime}
      </div>
    </div>
  );
};

export default ChatMessage;