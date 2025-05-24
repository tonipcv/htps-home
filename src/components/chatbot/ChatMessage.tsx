"use client";

import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

interface ChatMessageProps {
  message: string;
  isUser?: boolean;
}

export function ChatMessage({ message, isUser = false }: ChatMessageProps) {
  return (
    <div className={`flex items-start space-x-2 ${isUser ? 'justify-end' : ''}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
          <ChatBubbleLeftIcon className="h-4 w-4 text-blue-600" />
        </div>
      )}
      <div
        className={`p-3 rounded-lg shadow-sm max-w-[80%] ${
          isUser
            ? 'bg-blue-600 text-white'
            : 'bg-white text-gray-700'
        }`}
      >
        <p className="text-sm">{message}</p>
      </div>
      {isUser && (
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </div>
  );
} 