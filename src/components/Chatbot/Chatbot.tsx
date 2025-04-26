import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minimize2, Maximize2 } from 'lucide-react';
import ChatMessage from './ChatMessage';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your injury prevention assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Gemini API call for real AI response
    ;(async () => {
      try {
        const apiKey = "AIzaSyDC8JMreI-HyeW2IU5vk4iIWEheT6D0CZQ";
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    {
                      text: `You are an expert injury prevention advisor chatbot. If the user's question is about any kind of injury, injury treatment, or injury prevention, reply with a helpful, medium-length answer as a plain numbered list. Limit your answer to the 4–5 most important steps or recommendations. Each point should be clear and focused, and include a brief explanation (1–2 sentences) for clarity. Do not provide overly brief or overly lengthy answers. Use only newlines (\\n) between points, do not use HTML tags or bullet symbols. Only if the question is completely unrelated to injuries or prevention, reply: Sorry, that topic is outside my area of expertise. I can only answer questions about injuries and how to prevent them.\n\nUser: ${inputValue}`
                    }
                  ]
                }
              ]
            })
          }
        );
        const data = await response.json();
        let botMsg = "Sorry, I couldn't get a response.";
        if (
          data &&
          data.candidates &&
          data.candidates[0] &&
          data.candidates[0].content &&
          data.candidates[0].content.parts &&
          data.candidates[0].content.parts[0].text
        ) {
          botMsg = data.candidates[0].content.parts[0].text;
        } else if (data && data.error && data.error.message) {
          botMsg = `Gemini API error: ${data.error.message}`;
        }
        // Remove all <br> tags from Gemini response, keep only real newlines
        let cleanText = botMsg.replace(/<br\s*\/?>/gi, '');
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: cleanText,
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
      } catch (e: any) {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: `Error contacting Gemini AI: ${e.message || e}`,
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
      } finally {
        setIsTyping(false);
      }
    })();
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsMinimized(false);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className={`fixed z-50 bottom-6 right-6 bg-blue-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:bg-blue-700 ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat window */}
      <div
        className={`fixed z-50 bottom-6 right-6 bg-white rounded-lg shadow-xl transition-all duration-300 overflow-hidden ${
          isOpen
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
        } ${
          isMinimized ? 'h-16' : 'h-[480px]'
        } w-full max-w-sm`}
      >
        {/* Chat header */}
        <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
          <div className="flex items-center">
            <MessageCircle className="h-5 w-5 mr-2 self-center" />
            <h3 className="font-medium align-middle">Injury Prevention Assistant</h3>
          </div>
          <div className="flex">
            <button onClick={toggleMinimize} className="text-white mr-2">
              {isMinimized ? <Maximize2 className="h-5 w-5" /> : <Minimize2 className="h-5 w-5" />}
            </button>
            <button onClick={toggleChat} className="text-white">
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Chat messages */}
        {!isMinimized && (
          <div className="p-4 h-[360px] overflow-y-auto">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isTyping && (
              <div className="flex items-center text-gray-500 text-sm">
                <div className="typing-indicator space-x-1">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <span className="ml-2">Assistant is typing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Chat input */}
        {!isMinimized && (
          <form
            onSubmit={handleSubmit}
            className="border-t p-4 flex items-center"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors"
              disabled={!inputValue.trim()}
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        )}
      </div>

      {/* CSS for typing indicator */}
      <style>{`
        .typing-indicator {
          display: flex;
          align-items: center;
        }
        .dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #9ca3af;
          animation: typing 1.4s infinite both;
        }
        .dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        .dot:nth-child(3) {
          animation-delay: 0.4s;
        }
        @keyframes typing {
          0% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default Chatbot;