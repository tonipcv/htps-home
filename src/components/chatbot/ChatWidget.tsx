"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatBubbleLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChatMessage } from './ChatMessage';
import { createLead } from '@/services/leadService'

interface Message {
  text: string;
  isUser: boolean;
}

interface Question {
  text: (userData: UserData) => string;
  options?: string[];
  isInput?: boolean;
  key?: 'name' | 'profession';
}

interface UserData {
  name?: string;
  profession?: string;
}

const questions: Question[] = [
  {
    key: 'name',
    text: () => 'Olá! Como posso te chamar? 👋',
    isInput: true
  },
  {
    key: 'profession',
    text: (userData) => `Prazer, ${userData.name}! 👋\n\nVocê é?`,
    options: ['Influencer', 'Infoprodutor(a)', 'Mentor(a)', 'Professor(a)']
  }
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ text: questions[0].text({}), isUser: false }]);
  const [currentStep, setCurrentStep] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [userData, setUserData] = useState<UserData>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const firstQuestion = typeof questions[0].text === 'function' 
        ? questions[0].text(userData)
        : questions[0].text;
      setMessages([{ text: firstQuestion, isUser: false }]);
    }
  }, [isOpen]);

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const currentQuestion = questions[currentStep];
    const updatedUserData = { ...userData };

    if (currentQuestion.key) {
      updatedUserData[currentQuestion.key] = inputValue;
      setUserData(updatedUserData);
    }

    setMessages([...messages, { text: inputValue, isUser: true }]);
    setInputValue('');

    const nextStep = currentStep + 1;
    if (questions[nextStep]) {
      setCurrentStep(nextStep);
      const nextQuestion = questions[nextStep].text(updatedUserData);
      setMessages(prev => [...prev, { text: nextQuestion, isUser: false }]);
    }
  };

  const handleOptionClick = async (option: string) => {
    const currentQuestion = questions[currentStep];
    const updatedUserData = { ...userData };

    if (currentQuestion.key) {
      updatedUserData[currentQuestion.key] = option;
      setUserData(updatedUserData);
    }

    setMessages([...messages, { text: option, isUser: true }]);

    if (currentQuestion.key === 'profession') {
      try {
        const response = await fetch('/api/leads', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: updatedUserData.name,
            profession: option,
          }),
        });

        if (response.ok) {
          window.location.href = '/obrigado';
          return;
        }
      } catch (error) {
        console.error('Error saving lead:', error);
      }
    }

    const nextStep = currentStep + 1;
    if (questions[nextStep]) {
      setCurrentStep(nextStep);
      const nextQuestion = questions[nextStep].text(updatedUserData);
      setMessages(prev => [...prev, { text: nextQuestion, isUser: false }]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleInputSubmit(e);
    }
  };

  const currentQuestion = questions[currentStep];
  const isFinalStep = currentQuestion.key === 'profession';
  const currentQuestionText = typeof currentQuestion.text === 'function'
    ? currentQuestion.text(userData)
    : currentQuestion.text;

  return (
    <>
      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        <ChatBubbleLeftIcon className="h-6 w-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-50 w-96 h-[600px] bg-white rounded-xl shadow-xl overflow-hidden flex flex-col"
          >
            {/* Chat Header */}
            <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <ChatBubbleLeftIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">Med1</h3>
                  <p className="text-sm text-white/80">Como posso ajudar?</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <ChatMessage
                    key={index}
                    message={message.text}
                    isUser={message.isUser}
                  />
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Chat Input or Options */}
            <div className="p-4 border-t border-gray-200">
              {!isFinalStep ? (
                currentQuestion.isInput ? (
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Digite sua resposta..."
                      className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                    />
                    <button
                      onClick={handleInputSubmit}
                      className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {currentQuestion.options?.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className="w-full px-4 py-2 text-left rounded-lg border border-blue-500 bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )
              ) : (
                <button
                  onClick={() => {
                    const message = encodeURIComponent("Olá, sou médico e quero acesso aos prompts!");
                    window.location.href = `https://wa.me/5511999999999?text=${message}`;
                  }}
                  className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Acessar via WhatsApp
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 