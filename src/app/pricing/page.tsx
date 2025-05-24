'use client';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

export default function PricingPage() {
  const handleGetStarted = (tier: any) => {
    if (tier.price === 'Custom') {
      window.location.href = '/demo';
    } else {
      window.location.href = '/auth/signup';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <img src="/logo.png" alt="Logo" className="h-8" />
            <Button 
              variant="outline"
              className="border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300 px-6 py-2 text-sm font-medium tracking-[-0.03em] rounded-full"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-[-0.03em]">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto tracking-[-0.03em]">
              Choose the plan that best fits your practice needs
            </p>
          </motion.div>

          {/* Pricing Tiers */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                name: 'Starter',
                price: '$99',
                description: 'Perfect for individual practitioners',
                features: [
                  'Basic patient tracking',
                  'Referral system',
                  'Email support',
                  'Basic analytics',
                  'Up to 100 patients'
                ]
              },
              {
                name: 'Professional',
                price: '$199',
                description: 'Ideal for growing practices',
                features: [
                  'Advanced patient tracking',
                  'Enhanced referral system',
                  'Priority support',
                  'Advanced analytics',
                  'Up to 500 patients',
                  'Team collaboration'
                ],
                popular: true
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                description: 'For large medical groups',
                features: [
                  'Custom patient tracking',
                  'White-label solutions',
                  '24/7 dedicated support',
                  'Custom analytics',
                  'Unlimited patients',
                  'API access',
                  'Custom integrations'
                ]
              }
            ].map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`bg-gray-50 p-8 rounded-lg border ${tier.popular ? 'border-[#eaf212] shadow-lg' : 'border-gray-100'} relative`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#eaf212] text-gray-800 px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-[-0.03em]">
                    {tier.name}
                  </h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2 tracking-[-0.03em]">
                    {tier.price}
                    {tier.price !== 'Custom' && <span className="text-lg text-gray-600">/month</span>}
                  </div>
                  <p className="text-gray-600 tracking-[-0.03em]">
                    {tier.description}
                  </p>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-gray-900 mr-3 mt-0.5" />
                      <span className="text-gray-600 tracking-[-0.03em]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => handleGetStarted(tier)}
                  className="bg-zinc-900/80 text-white hover:bg-zinc-800 transition-all duration-300 px-4 sm:px-8 py-2.5 sm:py-3 text-sm font-light tracking-[-0.03em] rounded-full border border-zinc-700/50 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:border-zinc-600 hover:scale-105 active:scale-95 w-full"
                >
                  {tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* FAQ Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-[-0.03em]">
              Have Questions?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto tracking-[-0.03em]">
              Our team is here to help you choose the right plan for your practice
            </p>
            <Button 
              variant="outline"
              className="border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300 px-8 py-4 text-lg font-medium tracking-[-0.03em] rounded-full"
            >
              Contact Sales
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 