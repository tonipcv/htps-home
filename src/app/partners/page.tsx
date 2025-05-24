'use client';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function PartnersPage() {
  const [formData, setFormData] = useState({
    agencyName: '',
    website: '',
    contactName: '',
    email: '',
    phone: '',
    clients: '',
    services: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGetStarted = () => {
    // Handle get started logic
    console.log("Get Started button clicked");
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <img src="/logo.png" alt="HTSP Logo" className="h-8 brightness-0 invert" />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <Button 
                onClick={() => window.location.href = 'https://htps.io'}
                className="bg-zinc-900/80 text-white hover:bg-zinc-800 transition-all duration-300 px-4 sm:px-8 py-2.5 sm:py-3 text-sm font-light tracking-[-0.03em] rounded-full border border-zinc-700/50 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:border-zinc-600 hover:scale-105 active:scale-95"
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extralight mb-4 text-white tracking-[-0.03em]">
              Partner with HTSP
            </h1>
            <p className="text-xl text-zinc-400 tracking-[-0.03em]">
              Join our network of high-ticket sales experts
            </p>
          </div>

          <form className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light text-zinc-400 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-zinc-900/50 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-white/10 focus:border-transparent text-white placeholder-zinc-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-light text-zinc-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-zinc-900/50 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-white/10 focus:border-transparent text-white placeholder-zinc-500"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-light text-zinc-400 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-2 bg-zinc-900/50 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-white/10 focus:border-transparent text-white placeholder-zinc-500"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-light text-zinc-400 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-zinc-900/50 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-white/10 focus:border-transparent text-white placeholder-zinc-500"
                  placeholder="Tell us about your partnership interest"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-zinc-900/80 text-white hover:bg-zinc-800 transition-all duration-300 px-4 sm:px-8 py-2.5 sm:py-3 text-sm font-light tracking-[-0.03em] rounded-full border border-zinc-700/50 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:border-zinc-600 hover:scale-105 active:scale-95"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-zinc-800 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <img src="/logo.png" alt="HTSP Logo" className="h-6 brightness-0 invert" />
            <p className="text-zinc-400 text-xs sm:text-sm tracking-[-0.03em]">
              © 2024 HTSP. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 