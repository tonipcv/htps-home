'use client';

import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Logo } from '../../components/ui/logo';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRightIcon, CheckIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { CalendarIcon, ClockIcon, UserIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

export default function DemoPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    speciality: '',
    bestTime: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string, field: string) => {
    setFormData((prev) => {
      const updatedData = {
        ...prev,
        [field]: value
      };
      
      setTimeout(() => {
        if (field === 'speciality') {
          setStep(5);
        } else if (field === 'bestTime') {
          submitFormData();
        }
      }, 500);
      
      return updatedData;
    });
  };

  const handleNext = () => {
    if (step === 0) {
      setStep(1);
    } else if (step === 1 && formData.name.trim() !== '') {
      setStep(2);
    } else if (step === 2 && formData.email.trim() !== '') {
      setStep(3);
    } else if (step === 3 && formData.whatsapp.trim() !== '') {
      setStep(4);
    } else if (step === 4 && formData.speciality !== '') {
      setStep(5);
    } else if (step === 5 && formData.bestTime !== '') {
      submitFormData();
    }
  };

  const submitFormData = async () => {
    try {
      setIsSubmitting(true);
      setSubmitError('');
      
      const response = await fetch('/api/demo-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.whatsapp,
          specialty: formData.speciality
        }),
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit demo request');
      }
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to submit demo request');
      }

      setShowConfirmation(true);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit demo request');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && step < 4) {
      handleNext();
    }
  };

  const steps = [
    // Step 0: Headline e botão inicial
    <motion.div 
      key="intro" 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      className="text-center max-w-3xl mx-auto"
    >
      <h1 className="text-3xl md:text-4xl font-light text-white mb-6 leading-tight">
        Agende uma demonstração gratuita da Med1
      </h1>
      <p className="text-xl text-white/80 mb-8 leading-relaxed">
        Veja como nossa plataforma pode transformar seu consultório
      </p>
      <Button 
        className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl px-8 py-6 text-lg rounded-lg"
        variant="default"
        onClick={handleNext}
      >
        <span className="mr-2">Continuar</span>
        <span className="bg-white/20 rounded-full p-1.5">
          <ChevronRightIcon className="h-4 w-4 text-white" />
        </span>
      </Button>
    </motion.div>,

    // Step 1: Qual seu nome
    <motion.div 
      key="name" 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      className="text-center w-full max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-light text-white mb-12">
        Qual é o seu nome?
      </h2>
      <div className="mb-10 px-4">
        <Input 
          type="text" 
          name="name"
          value={formData.name} 
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white text-3xl py-8 px-6 placeholder:text-white/60 placeholder:text-3xl w-full focus:ring-2 focus:ring-white/50 focus:border-transparent"
          placeholder="Digite seu nome"
          autoFocus
          style={{ fontSize: '1.875rem', color: 'white' }}
        />
      </div>
      <Button 
        className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl mt-6 px-8 py-6 text-lg rounded-lg"
        variant="default"
        onClick={handleNext}
        disabled={formData.name.trim() === ''}
      >
        <span className="mr-2">Continuar</span>
        <span className="bg-white/20 rounded-full p-1.5">
          <ChevronRightIcon className="h-4 w-4 text-white" />
        </span>
      </Button>
    </motion.div>,

    // Step 2: Qual seu e-mail
    <motion.div 
      key="email" 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      className="text-center w-full max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-light text-white mb-12">
        Qual seu e-mail?
      </h2>
      <div className="mb-10 px-4">
        <Input 
          type="email" 
          name="email"
          value={formData.email} 
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white text-3xl py-8 px-6 placeholder:text-white/60 placeholder:text-3xl w-full focus:ring-2 focus:ring-white/50 focus:border-transparent"
          placeholder="Digite seu e-mail"
          autoFocus
          style={{ fontSize: '1.875rem', color: 'white' }}
        />
      </div>
      <Button 
        className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl mt-6 px-8 py-6 text-lg rounded-lg"
        variant="default"
        onClick={handleNext}
        disabled={formData.email.trim() === ''}
      >
        <span className="mr-2">Continuar</span>
        <span className="bg-white/20 rounded-full p-1.5">
          <ChevronRightIcon className="h-4 w-4 text-white" />
        </span>
      </Button>
    </motion.div>,

    // Step 3: Qual seu WhatsApp
    <motion.div 
      key="whatsapp" 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      className="text-center w-full max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-light text-white mb-12">
        Qual seu WhatsApp?
      </h2>
      <div className="mb-10 px-4">
        <Input 
          type="tel" 
          name="whatsapp"
          value={formData.whatsapp} 
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white text-3xl py-8 px-6 placeholder:text-white/60 placeholder:text-3xl w-full focus:ring-2 focus:ring-white/50 focus:border-transparent"
          placeholder="(00) 00000-0000"
          autoFocus
          style={{ fontSize: '1.875rem', color: 'white' }}
        />
      </div>
      <Button 
        className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl mt-6 px-8 py-6 text-lg rounded-lg"
        variant="default"
        onClick={handleNext}
        disabled={formData.whatsapp.trim() === ''}
      >
        <span className="mr-2">Continuar</span>
        <span className="bg-white/20 rounded-full p-1.5">
          <ChevronRightIcon className="h-4 w-4 text-white" />
        </span>
      </Button>
    </motion.div>,

    // Step 4: Qual sua especialidade
    <motion.div 
      key="speciality" 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      className="text-center w-full max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-light text-white mb-12">
        Qual sua especialidade?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 mb-10">
        {['Odontologia', 'Medicina', 'Psicologia', 'Outra'].map((option) => (
          <button
            key={option}
            onClick={() => handleSelectChange(option, 'speciality')}
            className={`text-left text-2xl py-6 px-6 rounded-lg backdrop-blur-sm border-2 transition-all ${
              formData.speciality === option
                ? 'bg-white/30 border-white text-white'
                : 'bg-white/10 border-white/30 text-white'
            }`}
          >
            <div className="flex items-center">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                formData.speciality === option ? 'bg-white text-blue-700' : 'border-2 border-white/60'
              }`}>
                {formData.speciality === option && <CheckIcon className="h-4 w-4" />}
              </div>
              {option}
            </div>
          </button>
        ))}
      </div>
    </motion.div>,

    // Step 5: Melhor horário para contato
    <motion.div 
      key="bestTime" 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      className="text-center w-full max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-light text-white mb-12">
        Melhor horário para contato?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 mb-10">
        {['Manhã', 'Tarde', 'Noite', 'Qualquer horário'].map((option) => (
          <button
            key={option}
            onClick={() => handleSelectChange(option, 'bestTime')}
            className={`text-left text-2xl py-6 px-6 rounded-lg backdrop-blur-sm border-2 transition-all ${
              formData.bestTime === option
                ? 'bg-white/30 border-white text-white'
                : 'bg-white/10 border-white/30 text-white'
            }`}
          >
            <div className="flex items-center">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                formData.bestTime === option ? 'bg-white text-blue-700' : 'border-2 border-white/60'
              }`}>
                {formData.bestTime === option && <CheckIcon className="h-4 w-4" />}
              </div>
              {option}
            </div>
          </button>
        ))}
      </div>
      <Button 
        className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl mt-6 px-8 py-6 text-lg rounded-lg"
        variant="default"
        onClick={handleNext}
        disabled={formData.bestTime === ''}
      >
        <span className="mr-2">Agendar demonstração</span>
        <span className="bg-white/20 rounded-full p-1.5">
          <ChevronRightIcon className="h-4 w-4 text-white" />
        </span>
      </Button>
    </motion.div>,

    // Step 6: Confirmação
    <motion.div 
      key="confirmation" 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      className="text-center w-full max-w-2xl mx-auto"
    >
      <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl p-8 mb-10">
        <div className="w-20 h-20 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-6">
          <CheckIcon className="h-12 w-12 text-white" />
        </div>
        <h2 className="text-3xl font-light text-white mb-4">
          Demonstração agendada!
        </h2>
        <p className="text-xl text-white/80 mb-8">
          {isSubmitting ? (
            "Processando seu agendamento..."
          ) : submitError ? (
            <>Erro ao agendar: {submitError}</>
          ) : (
            "Nossa equipe entrará em contato em breve para confirmar sua demonstração gratuita."
          )}
        </p>
        {!isSubmitting && !submitError && (
          <Button 
            className="bg-green-600 text-white hover:bg-green-700 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl mt-6 px-8 py-6 text-lg rounded-lg inline-flex items-center"
            variant="default"
            onClick={() => {
              const message = encodeURIComponent(`Olá me chamo ${formData.name} e quero acesso a minha demonstração do Med1!`);
              window.location.href = `https://wa.me/5511937064833?text=${message}`;
            }}
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Acessar WhatsApp</span>
          </Button>
        )}
        {submitError && (
          <Button 
            className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl mt-6 px-8 py-6 text-lg rounded-lg"
            variant="default"
            onClick={submitFormData}
            disabled={isSubmitting}
          >
            <span className="mr-2">Tentar novamente</span>
            <span className="bg-white/20 rounded-full p-1.5">
              <ChevronRightIcon className="h-4 w-4 text-white" />
            </span>
          </Button>
        )}
      </div>
    </motion.div>
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <img src="/logo.png" alt="HTSP Logo" className="h-8 brightness-0 invert" />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <a href="/partners" className="text-zinc-400 hover:text-white transition-colors text-sm tracking-[-0.03em]">
                Partners
              </a>
              <Button 
                onClick={() => window.location.href = 'https://htps.io'}
                className="bg-zinc-900/80 text-white hover:bg-zinc-800 transition-all duration-300 px-4 sm:px-8 py-2.5 sm:py-3 text-sm font-light tracking-[-0.03em] rounded-full border border-zinc-700/50 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:border-zinc-600 hover:scale-105 active:scale-95"
              >
                Sign In
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2.5 text-white hover:text-zinc-400 transition-colors bg-zinc-900/80 rounded-full border border-zinc-800"
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
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-zinc-900 z-50 shadow-xl overflow-y-auto border-l border-zinc-800"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <img src="/logo.png" alt="HTSP Logo" className="h-8 brightness-0 invert" />
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-white hover:text-zinc-400 transition-colors"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="flex flex-col space-y-4">
                  <a
                    href="/partners"
                    className="text-base text-zinc-400 hover:text-white transition-colors tracking-[-0.03em] py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Partners
                  </a>
                  <Button
                    onClick={() => {
                      window.location.href = 'https://htps.io';
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-zinc-900/80 text-white hover:bg-zinc-800 transition-all duration-300 px-4 sm:px-8 py-2.5 sm:py-3 text-sm font-light tracking-[-0.03em] rounded-full border border-zinc-700/50 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:border-zinc-600 hover:scale-105 active:scale-95"
                  >
                    Sign In
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <section className="pt-32 pb-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl font-extralight text-white tracking-[-0.03em] leading-tight">
                Schedule Your Free Demo
              </h1>
              <p className="text-xl text-zinc-400 tracking-[-0.03em]">
                Discover how HTSP can transform your high-ticket sales process.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-900/50 border border-zinc-800 flex items-center justify-center">
                    <ClockIcon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-zinc-300">30-minute personalized session</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-900/50 border border-zinc-800 flex items-center justify-center">
                    <UserIcon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-zinc-300">One-on-one with our sales experts</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-900/50 border border-zinc-800 flex items-center justify-center">
                    <BuildingOfficeIcon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-zinc-300">Tailored to your business needs</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
            >
              <form className="space-y-6" onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                
                try {
                  const response = await fetch('/api/demo-requests', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      name: formData.get('name'),
                      email: formData.get('email'),
                      phone: formData.get('phone'),
                      specialty: formData.get('specialty')
                    }),
                  });

                  const result = await response.json();

                  if (!response.ok) {
                    throw new Error(result.error || 'Failed to submit demo request');
                  }

                  if (!result.success) {
                    throw new Error(result.error || 'Failed to submit demo request');
                  }

                  setShowConfirmation(true);
                } catch (error) {
                  console.error('Error submitting form:', error);
                  alert(error instanceof Error ? error.message : 'Failed to submit demo request. Please try again.');
                }
              }}>
                <div>
                  <label htmlFor="name" className="block text-sm font-light text-zinc-400 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-2 bg-zinc-900/50 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-white/10 focus:border-transparent text-white placeholder-zinc-500"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-light text-zinc-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 bg-zinc-900/50 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-white/10 focus:border-transparent text-white placeholder-zinc-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-light text-zinc-400 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    className="w-full px-4 py-2 bg-zinc-900/50 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-white/10 focus:border-transparent text-white placeholder-zinc-500"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="specialty" className="block text-sm font-light text-zinc-400 mb-1">
                    Business Type
                  </label>
                  <input
                    type="text"
                    name="specialty"
                    id="specialty"
                    required
                    className="w-full px-4 py-2 bg-zinc-900/50 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-white/10 focus:border-transparent text-white placeholder-zinc-500"
                    placeholder="e.g., Consulting, Agency, SaaS"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-zinc-900/80 text-white hover:bg-zinc-800 transition-all duration-300 px-4 sm:px-8 py-2.5 sm:py-3 text-sm font-light tracking-[-0.03em] rounded-full border border-zinc-700/50 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:border-zinc-600 hover:scale-105 active:scale-95"
                >
                  Schedule Demo
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 px-4 sm:px-6 bg-black border-t border-zinc-800">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extralight mb-4 text-white tracking-[-0.03em]">
              What to Expect in Your Demo
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Get a comprehensive overview of how HTSP can help your business scale
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Platform Overview',
                description: 'See how our intuitive interface streamlines your sales process'
              },
              {
                title: 'Custom Solutions',
                description: 'Learn how we adapt to your specific business needs'
              },
              {
                title: 'ROI Analysis',
                description: 'Understand the potential revenue impact for your business'
              },
              {
                title: 'Feature Deep-Dive',
                description: 'Explore the key features that will transform your sales'
              },
              {
                title: 'Implementation Plan',
                description: 'Get a clear roadmap for getting started with HTSP'
              },
              {
                title: 'Q&A Session',
                description: 'Get all your questions answered by our sales experts'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:bg-zinc-900/80 transition-all duration-300"
              >
                <h3 className="text-lg font-light text-white mb-2 tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="text-zinc-400 tracking-[-0.03em]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 bg-black border-t border-zinc-800">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extralight mb-4 text-white tracking-[-0.03em]">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'How long is the demo?',
                answer: 'Our demos typically last 30 minutes, with additional time for questions if needed.'
              },
              {
                question: 'Is the demo personalized to my business?',
                answer: 'Yes, we tailor each demo to your specific business needs and goals.'
              },
              {
                question: 'What should I prepare for the demo?',
                answer: 'Just come with your questions! Our team will guide you through everything else.'
              },
              {
                question: 'Can I invite my team members?',
                answer: 'Absolutely! We encourage including key stakeholders in the demo.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800"
              >
                <h3 className="text-lg font-light text-white mb-2 tracking-[-0.03em]">
                  {item.question}
                </h3>
                <p className="text-zinc-400 tracking-[-0.03em]">{item.answer}</p>
              </motion.div>
            ))}
          </div>
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

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirmation && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center"
              onClick={() => setShowConfirmation(false)}
            >
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-sm bg-zinc-900 rounded-xl border border-zinc-800 shadow-2xl z-[101] p-8 mx-4"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-light text-white mb-4">
                    Request Received!
                  </h3>
                  <p className="text-zinc-400">
                    We'll contact you soon to schedule your demo.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
} 