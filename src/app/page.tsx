'use client';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRightIcon, 
  Bars3Icon, 
  XMarkIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
  LinkIcon,
  ChartPieIcon,
  ShareIcon,
  QrCodeIcon,
  PresentationChartLineIcon,
  FunnelIcon,
  ChevronDownIcon,
  GiftIcon,
  CheckIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDemoClick = () => {
    router.push('/demo');
  };

  return (
    <div className="min-h-screen bg-black text-white font-satoshi tracking-[-0.03em]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <img src="/logo.png" alt="Logo" className="h-8 brightness-0 invert" />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="/partners" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 tracking-[-0.03em]">
                Partners
              </a>
              <a href="/pricing" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 tracking-[-0.03em]">
                Pricing
              </a>
              <div className="flex items-center gap-4 bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800">
                <Button 
                  onClick={() => window.location.href = 'https://www.htsp.app/auth/signin'}
                  className="text-sm text-white hover:text-zinc-300 transition-colors duration-200 flex items-center gap-1 tracking-[-0.03em]"
                >
                  Sign In
                  <ArrowRightIcon className="w-3 h-3" />
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2.5 text-white bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars3Icon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-black z-50 shadow-xl overflow-y-auto border-l border-zinc-800"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <img src="/logo.png" alt="Logo" className="h-8" />
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-white bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="flex flex-col space-y-6">
                  <a
                    href="/partners"
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 tracking-[-0.03em]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Partners
                  </a>
                  <a
                    href="/pricing"
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 tracking-[-0.03em]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pricing
                  </a>
                  <div className="flex items-center gap-4 bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800">
                    <Button
                      onClick={() => {
                        handleDemoClick();
                        setIsMenuOpen(false);
                      }}
                      className="text-sm text-white hover:text-zinc-300 transition-colors duration-200 flex items-center gap-1 tracking-[-0.03em]"
                    >
                      Sign In
                      <ArrowRightIcon className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center pt-20 pb-32 px-4 sm:px-6 bg-black relative overflow-hidden">
        {/* Geometric Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Main background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900/30 to-black" />
          
          {/* Large circles */}
          <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] border border-zinc-800/50 rounded-full blur-2xl" />
          <div className="absolute -bottom-48 -right-32 w-[800px] h-[800px] border border-zinc-800/50 rounded-full blur-2xl" />
          
          {/* Accent circles */}
          <div className="absolute top-1/3 right-1/4 w-64 h-64 border border-zinc-800/50 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 border border-zinc-800/50 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Decorative lines */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
            <div className="absolute inset-0 border border-zinc-800 rounded-full" />
            <div className="absolute inset-8 border border-zinc-800 rounded-full" />
            <div className="absolute inset-16 border border-zinc-800 rounded-full" />
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-zinc-800 rotate-45 blur-lg" />
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-zinc-800 rotate-12 blur-lg" />

          {/* Additional light elements */}
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-zinc-800 rounded-full blur-2xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-zinc-800 rounded-full blur-2xl" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto px-4 sm:px-6"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="space-y-8"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extralight tracking-[-0.04em] leading-[1.1]">
                <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">ELEVATE YOUR</span>
                <br />
                <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">HIGH-TICKET SALES</span>
              </h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-base sm:text-lg md:text-xl text-zinc-400 font-light mt-4 sm:mt-8 mb-6 sm:mb-10 max-w-2xl leading-relaxed tracking-[-0.03em]"
              >
                The ultimate platform for managing and scaling your high-ticket sales process with precision and efficiency
              </motion.p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-start mt-8 sm:mt-12"
            >
              <Button 
                onClick={handleDemoClick}
                className="bg-zinc-900/80 text-white hover:bg-zinc-800 transition-all duration-300 px-4 sm:px-8 py-2.5 sm:py-3 text-sm font-light tracking-[-0.03em] rounded-full border border-zinc-700/50 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:border-zinc-600 hover:scale-105 active:scale-95"
              >
                Get Started
              </Button>
              <Button 
                variant="outline"
                className="bg-black/50 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900/50 transition-all duration-300 px-4 sm:px-8 py-2.5 sm:py-3 text-sm font-light tracking-[-0.03em] rounded-full hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] hover:scale-105 active:scale-95"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-black border-t border-zinc-800">
        <div className="container mx-auto max-w-7xl relative">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            {/* Left Column - Main Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-extralight text-white tracking-[-0.03em] leading-tight">
                  + 10,000 deals closed
                </h2>
                <p className="text-xl font-light text-zinc-400 tracking-[-0.03em] leading-relaxed">
                  The premier platform for managing and closing high-ticket sales with confidence.
                </p>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-zinc-900/50 p-6 sm:p-8 rounded-2xl border border-zinc-800"
              >
                <p className="text-lg text-zinc-400 font-light leading-relaxed tracking-[-0.03em]">
                  Built to transform your sales process into a predictable revenue machine, 
                  helping you become a leader in your industry, increase deal values by up to 300%, 
                  and scale your high-ticket sales operation efficiently.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Benefits */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute -left-8 top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent"
              />
              
              <div className="space-y-6">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-2xl font-extralight text-white mb-8 tracking-[-0.03em]"
                >
                  With HTSP, you:
                </motion.h3>

                <div className="space-y-4">
                  {[
                    {
                      icon: <ChartBarIcon className="w-6 h-6 text-white" />,
                      title: 'Increase deal value',
                      description: 'Optimize your sales process to maximize revenue per deal'
                    },
                    {
                      icon: <ArrowTrendingUpIcon className="w-6 h-6 text-white" />,
                      title: 'Improve conversion rates',
                      description: 'Track and optimize your sales pipeline at every stage'
                    },
                    {
                      icon: <MagnifyingGlassIcon className="w-6 h-6 text-white" />,
                      title: 'Get deep insights into your sales process',
                      description: 'Understand exactly what drives your successful deals'
                    },
                    {
                      icon: <UserGroupIcon className="w-6 h-6 text-white" />,
                      title: 'Build lasting client relationships',
                      description: 'Turn satisfied clients into long-term partners'
                    }
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="group relative bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 hover:bg-zinc-900/80 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-800/50 flex items-center justify-center">
                          {benefit.icon}
                        </div>
                        <div className="flex-grow">
                          <h4 className="text-white font-light text-lg mb-1 tracking-[-0.03em]">
                            {benefit.title}
                          </h4>
                          <p className="text-zinc-400 text-sm tracking-[-0.03em]">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="pt-8"
                >
                  <Button 
                    onClick={handleDemoClick}
                    className="bg-zinc-900/80 text-white hover:bg-zinc-800 transition-all duration-300 px-4 sm:px-8 py-2.5 sm:py-3 text-sm font-light tracking-[-0.03em] rounded-full border border-zinc-700/50 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:border-zinc-600 hover:scale-105 active:scale-95"
                  >
                    Get Started
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-black border-t border-zinc-800">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extralight mb-2 sm:mb-3 text-white tracking-[-0.03em]">
              HTSP Features
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base font-light tracking-[-0.03em]">
              Everything you need to streamline and scale your high-ticket sales process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: <LinkIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
                title: 'Smart Deal Pipeline',
                description: 'Customizable stages and automated workflows'
              },
              {
                icon: <ChartPieIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
                title: 'Advanced Analytics',
                description: 'Track conversion rates, deal values, and sales velocity'
              },
              {
                icon: <ShareIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
                title: 'Client Communication Hub',
                description: 'Centralized messaging and document sharing'
              },
              {
                icon: <QrCodeIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
                title: 'Proposal Generator',
                description: 'Create professional proposals with dynamic pricing'
              },
              {
                icon: <PresentationChartLineIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
                title: 'Performance Dashboard',
                description: 'Real-time metrics and forecasting'
              },
              {
                icon: <FunnelIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
                title: 'Sales Funnel Optimization',
                description: 'Identify and eliminate bottlenecks in your sales process'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 hover:bg-zinc-900/80 transition-all duration-300"
              >
                <div className="mb-3 sm:mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-base sm:text-lg font-light mb-2 text-white tracking-[-0.03em]">{feature.title}</h3>
                <p className="text-zinc-400 text-sm tracking-[-0.03em]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-black border-t border-zinc-800">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-extralight mb-3 sm:mb-4 text-white tracking-[-0.03em]">
              What Our Clients Say
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base tracking-[-0.03em]">
              See how HTSP is transforming high-ticket sales processes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                quote: "Since implementing HTSP, we've doubled our average deal size and reduced our sales cycle by 40%. The insights we get are invaluable.",
                author: "James Wilson",
                specialty: "Sales Director",
                location: "Enterprise Solutions Inc."
              },
              {
                quote: "The proposal generation and pipeline management features have transformed how we handle high-ticket deals. Our close rate has improved significantly.",
                author: "Sarah Chen",
                specialty: "VP of Sales",
                location: "Global Tech Services"
              },
              {
                quote: "HTSP has given us complete visibility into our sales process. We can now predict and scale our revenue with confidence.",
                author: "Michael Rodriguez",
                specialty: "Chief Revenue Officer",
                location: "Innovation Labs"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-zinc-900/50 p-6 sm:p-8 rounded-xl border border-zinc-800 hover:bg-zinc-900/80 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]"
              >
                <div className="flex flex-col h-full">
                  <p className="text-zinc-300 italic mb-4 sm:mb-6 flex-grow text-sm sm:text-base tracking-[-0.03em] font-light">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="text-white font-light text-base sm:text-lg tracking-[-0.03em]">{testimonial.author}</p>
                    <p className="text-zinc-400 text-sm tracking-[-0.03em]">{testimonial.specialty}</p>
                    <p className="text-zinc-500 text-xs sm:text-sm tracking-[-0.03em]">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-black border-t border-zinc-800">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-white tracking-[-0.03em]">
              Benefits
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto tracking-[-0.03em]">
              Discover how HTSP can revolutionize your high-ticket sales process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Real increase in appointment rates',
                description: 'Transform each patient into a service promoter and watch your appointments grow organically'
              },
              {
                title: 'Reduced cost per patient',
                description: 'With organic and predictable acquisition, significantly reduce your CAC'
              },
              {
                title: 'More retention and more referrals',
                description: 'Reward system that encourages your patients to refer more'
              },
              {
                title: 'Complete performance view',
                description: 'Professional dashboard with all data in real-time'
              },
              {
                title: 'Team with more control',
                description: 'Complete visual pipeline to track each lead in the journey'
              },
              {
                title: 'Less improvisation',
                description: 'Clear and automated processes for the entire team'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-zinc-900/50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-zinc-800"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mr-4">
                    <CheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 tracking-[-0.03em]">{benefit.title}</h3>
                    <p className="text-zinc-400 tracking-[-0.03em]">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-black border-t border-zinc-800">
        <div className="container mx-auto max-4xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-extralight mb-4 sm:mb-6 text-white tracking-[-0.03em]">
              Ready to Transform Your Sales Process?
            </h2>
            <p className="text-zinc-400 mb-6 sm:mb-8 text-sm sm:text-base tracking-[-0.03em]">
              Schedule a demo and discover how we can help scale your high-ticket sales
            </p>
            <Button 
              onClick={handleDemoClick}
              className="bg-zinc-900/80 text-white hover:bg-zinc-800 transition-all duration-300 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto tracking-[-0.03em] rounded-full border border-zinc-700/50 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:border-zinc-600 hover:scale-105 active:scale-95 font-light"
            >
              Schedule Demo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-zinc-800 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <img src="/logo.png" alt="Logo" className="h-6 mb-4 sm:mb-0 brightness-0 invert" />
            <p className="text-zinc-400 text-xs sm:text-sm tracking-[-0.03em]">
              © 2024 HTSP. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 