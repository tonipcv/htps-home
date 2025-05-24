'use client';

import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Logo } from '../../components/ui/logo';
import { motion, AnimatePresence } from 'framer-motion';
import { BanknotesIcon, CursorArrowRaysIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';

// Declare fbq for TypeScript
declare global {
  interface Window {
    fbq: any;
  }
}

export default function Proposta3MesesPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    profession: '',
    knowsTechnology: '',
    revenue: '',
    name: '',
    email: '',
    whatsapp: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleOptionSelect = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    handleNext();
  };

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/proposta-3meses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redireciona para a página de sucesso com os dados do usuário
        const params = new URLSearchParams({
          name: formData.name,
          profession: formData.profession,
          revenue: formData.revenue
        });
        window.location.replace(`/proposta-3meses/sucesso?${params.toString()}`);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    // Step 0: Introdução
    <motion.div
      key="intro"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center max-w-3xl mx-auto"
    >
      <h1 className="text-3xl md:text-4xl font-light text-white mb-6 leading-tight">
        Utilize a Med1 ferramenta feita para consultórios e profissionais da saúde gerar pacientes por R$0
      </h1>
      <div className="space-y-4 text-xl text-white/80 mb-8">
        <p>Sem custo de tráfego</p>
        <p>Sem depender de tecnologia difícil</p>
        <p>Utilizando somente o Med1</p>
      </div>
      <p className="text-xl text-white/80 mb-8">
        Caso esteja aprovado estamos dispostos a lhe dar 3 meses de acesso grátis.
      </p>
      <Button
        className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl px-8 py-6 text-lg rounded-lg"
        onClick={handleNext}
      >
        Começar
      </Button>
    </motion.div>,

    // Step 1: Profissão
    <motion.div
      key="profession"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center w-full max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-light text-white mb-12">
        Qual sua profissão?
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {[
          'Sou médico',
          'Sou dentista',
          'Sou nutricionista',
          'Sou proprietário de um consultorio ou clinica',
          'Sou funcionário de um consultorio ou clinica',
          'Não trabalho na área da saúde'
        ].map((option) => (
          <button
            key={option}
            onClick={() => handleOptionSelect('profession', option)}
            className="text-left text-xl py-6 px-6 rounded-lg backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 transition-all"
          >
            {option}
          </button>
        ))}
      </div>
    </motion.div>,

    // Step 2: Conhecimento da tecnologia
    <motion.div
      key="technology"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center w-full max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-light text-white mb-12">
        Você já ouviu falar da Tecnologia do Med1?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {['Sim', 'Não'].map((option) => (
          <button
            key={option}
            onClick={() => handleOptionSelect('knowsTechnology', option)}
            className="text-left text-xl py-6 px-6 rounded-lg backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 transition-all"
          >
            {option}
          </button>
        ))}
      </div>
    </motion.div>,

    // Step 3: Explicação
    <motion.div
      key="explanation"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center w-full max-w-3xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-white mb-12">
        A Med1 é uma tecnologia focada em gerar leads para médicos de forma gratuita
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/30 hover:scale-105 transition-transform duration-300">
          <div className="w-16 h-16 mx-auto mb-6 text-white">
            <BanknotesIcon className="w-full h-full" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">Sem custo de tráfego</h3>
          <p className="text-white/80">Economize com anúncios e obtenha leads de forma orgânica</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/30 hover:scale-105 transition-transform duration-300">
          <div className="w-16 h-16 mx-auto mb-6 text-white">
            <CursorArrowRaysIcon className="w-full h-full" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">Tecnologia simples</h3>
          <p className="text-white/80">Interface intuitiva que não exige conhecimento técnico</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/30 hover:scale-105 transition-transform duration-300">
          <div className="w-16 h-16 mx-auto mb-6 text-white">
            <ClockIcon className="w-full h-full" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">Setup em 30 minutos</h3>
          <p className="text-white/80">Configure rapidamente e comece a receber leads</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/30 hover:scale-105 transition-transform duration-300">
          <div className="w-16 h-16 mx-auto mb-6 text-white">
            <UserGroupIcon className="w-full h-full" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">Agenda cheia</h3>
          <p className="text-white/80">Receba um fluxo constante de novos pacientes</p>
        </div>
      </div>
      
      <Button
        className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl px-8 py-6 text-lg rounded-lg mt-12"
        onClick={handleNext}
      >
        Continuar
      </Button>
    </motion.div>,

    // Step 4: Faturamento
    <motion.div
      key="revenue"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center w-full max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-light text-white mb-12">
        Qual é hoje o seu faturamento mensal?
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {[
          'Até 10 mil',
          'de 10 mil a 100 mil',
          'de 100 mil a 1 milhão'
        ].map((option) => (
          <button
            key={option}
            onClick={() => handleOptionSelect('revenue', option)}
            className="text-left text-xl py-6 px-6 rounded-lg backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 transition-all"
          >
            {option}
          </button>
        ))}
      </div>
    </motion.div>,

    // Step 5: Resultados
    <motion.div
      key="results"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center w-full max-w-2xl mx-auto"
    >
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
        <h2 className="text-3xl font-bold text-white mb-8">
          Resultados reais dos nossos clientes
        </h2>
        
        <div className="grid grid-cols-2 gap-4 mb-12">
          <div className="p-4">
            <p className="text-4xl font-bold text-white mb-2">+30</p>
            <p className="text-white/80">pacientes/mês</p>
          </div>
          
          <div className="p-4">
            <p className="text-4xl font-bold text-white mb-2">15k</p>
            <p className="text-white/80">faturamento extra</p>
          </div>
        </div>

        <div className="space-y-3 text-lg text-left text-white/90 mb-8 border-t border-white/10 pt-8">
          <p>• Economia de R$3.000/mês em anúncios</p>
          <p>• ROI positivo em 7 dias</p>
          <p>• Primeiros leads em 48h</p>
        </div>

        <div className="text-xl text-white font-medium border-t border-white/10 pt-8">
          3 meses grátis para os primeiros aprovados
        </div>
      </div>
      
      <Button
        className="bg-green-600 text-white hover:bg-green-700 transition-all duration-300 shadow-xl px-8 py-6 text-lg rounded-lg mt-8 w-full"
        onClick={handleNext}
      >
        Quero Aumentar Meu Faturamento
      </Button>
    </motion.div>,

    // Step 6: Formulário de contato
    <motion.div
      key="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center w-full max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-light text-white mb-12">
        Insira o seu contato para agendarmos uma demonstração gratuita:
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          type="text"
          name="name"
          placeholder="Seu nome"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white text-xl py-6 px-6 rounded-lg placeholder:text-white/60"
        />
        <Input
          type="email"
          name="email"
          placeholder="Seu e-mail"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white text-xl py-6 px-6 rounded-lg placeholder:text-white/60"
        />
        <Input
          type="tel"
          name="whatsapp"
          placeholder="Seu WhatsApp"
          value={formData.whatsapp}
          onChange={handleInputChange}
          required
          className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white text-xl py-6 px-6 rounded-lg placeholder:text-white/60"
        />
        <Button
          type="submit"
          className="w-full bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl px-8 py-6 text-lg rounded-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </Button>
      </form>
    </motion.div>
  ];

  return (
    <div className="min-h-[100dvh] bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-1 flex flex-col">
        <div className="flex justify-center mb-16 pt-8">
          <Logo className="scale-150" variant="light" />
        </div>

        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <AnimatePresence mode="wait">
            {steps[step]}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
} 