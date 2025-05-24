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
  CheckIcon
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function HomePage() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDemoClick = () => {
    router.push('/inside-sales');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-satoshi tracking-[-0.03em]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Logo className="h-8" variant="light" />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <a href="#features" className="text-white/70 hover:text-white transition-colors text-sm tracking-[-0.03em]">
                Funcionalidades
              </a>
              <a href="#benefits" className="text-white/70 hover:text-white transition-colors text-sm tracking-[-0.03em]">
                Benefícios
              </a>
              <Button 
                onClick={handleDemoClick}
                className="bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20 px-6 py-2 text-sm font-black tracking-[-0.03em]"
              >
                Entrar
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2.5 text-gray-900 hover:text-gray-600 transition-colors bg-white rounded-full shadow-sm"
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
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-xl overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <Logo className="h-8" variant="dark" />
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="flex flex-col space-y-6">
                  <a
                    href="#features"
                    className="text-lg text-gray-900 hover:text-gray-600 transition-colors tracking-[-0.03em] py-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Funcionalidades
                  </a>
                  <a
                    href="#benefits"
                    className="text-lg text-gray-900 hover:text-gray-600 transition-colors tracking-[-0.03em] py-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Benefícios
                  </a>
                  <Button
                    onClick={() => {
                      handleDemoClick();
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-gray-900 text-white hover:bg-gray-800 transition-colors py-6 text-lg tracking-[-0.03em] rounded-2xl mt-4"
                  >
                    Agendar demonstração
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center pt-20 pb-32 px-4 sm:px-6 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_var(--tw-gradient-stops))] from-blue-300/10 via-transparent to-transparent" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl mx-auto px-4 sm:px-6"
          >
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="space-y-4"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-[-0.04em] leading-[0.95]">
                CRESÇA SEU 
                <span className="bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent"> CONSULTÓRIO </span>
                EM ATÉ 10X
      </h1>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-xl sm:text-2xl md:text-3xl text-blue-100/90 mt-6 mb-10 max-w-4xl leading-tight tracking-[-0.03em] font-medium"
            >
              O primeiro CRM focado em aquisição e fidelização de pacientes por indicação
            </motion.p>
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start"
            >
              <Button 
                onClick={handleDemoClick}
                className="bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20 px-6 sm:px-8 py-4 text-sm font-black tracking-[-0.03em] rounded-full backdrop-blur-sm"
              >
                Começar agora
              </Button>
      <Button 
                variant="outline"
                className="border border-white/20 text-white hover:bg-white/10 transition-colors px-6 sm:px-8 py-4 text-sm font-black tracking-[-0.03em] rounded-full backdrop-blur-sm"
              >
                Saiba mais
      </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 text-9xl font-bold text-blue-900/20 tracking-[-0.03em]">4x</div>
          <div className="absolute bottom-20 right-10 text-8xl font-bold bg-gradient-to-r from-blue-400/10 to-blue-500/10 bg-clip-text text-transparent tracking-[-0.03em]">
            +300%
          </div>
        </div>

        <div className="container mx-auto max-w-7xl relative">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Main Content */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
    >
              <div className="space-y-4">
                <h2 className="text-4xl font-extrabold text-white tracking-[-0.03em]">
                  MED1 — o futuro chegou para clínicas e consultórios
      </h2>
                <p className="text-xl font-semibold text-blue-100/80 tracking-[-0.03em] leading-relaxed">
                  O primeiro CRM focado em aquisição e fidelização de pacientes por indicação.
                </p>
      </div>

    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-blue-900/30 p-8 rounded-2xl border border-blue-800/30"
              >
                <p className="text-lg text-blue-100/90 leading-relaxed tracking-[-0.03em]">
                  Criado para transformar seu consultório em uma máquina previsível de agendamentos, 
                  ele te ajuda a se tornar referência no seu nicho, aumentar em até 4x o faturamento, 
                  e escalar sem depender de tráfego pago.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Benefits */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute -left-8 top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"
              />
              
              <div className="space-y-6">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-xl font-semibold text-white mb-8 tracking-[-0.03em]"
                >
                  Com a MED1, você:
                </motion.h3>

                <div className="space-y-4">
                  {[
                    {
                      icon: <ChartBarIcon className="w-6 h-6 text-white" />,
                      title: 'Aumenta a geração de leads',
                      color: 'from-blue-400/10 to-blue-500/10'
                    },
                    {
                      icon: <ArrowTrendingUpIcon className="w-6 h-6 text-white" />,
                      title: 'Melhora a conversão de agendamentos',
                      color: 'from-green-400/10 to-green-500/10'
                    },
                    {
                      icon: <MagnifyingGlassIcon className="w-6 h-6 text-white" />,
                      title: 'Descobre exatamente de onde vem seus pacientes',
                      color: 'from-purple-400/10 to-purple-500/10'
                    },
                    {
                      icon: <UserGroupIcon className="w-6 h-6 text-white" />,
                      title: 'Transforma cada paciente em um promotor do seu serviço',
                      color: 'from-yellow-400/10 to-yellow-500/10'
                    }
                  ].map((benefit, index) => (
    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                           style={{ background: `linear-gradient(to right, ${benefit.color})` }}
                      />
                      <div className="relative bg-blue-900/30 hover:shadow-lg transition-shadow duration-300 p-6 rounded-xl border border-blue-800/30">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
                            {benefit.icon}
                          </div>
                          <div className="flex-grow">
                            <p className="text-white font-medium leading-relaxed tracking-[-0.03em]">
                              {benefit.title}
                            </p>
                          </div>
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
                    className="bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20 px-8 py-4 text-sm font-medium tracking-[-0.03em] rounded-xl w-full"
                  >
                    Quero saber mais
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
      </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="container mx-auto max-w-6xl">
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-12 sm:mb-16"
    >
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 sm:mb-4 text-white tracking-[-0.03em]">
              Funcionalidades do MED1
      </h2>
            <p className="text-blue-100/80 max-w-2xl mx-auto text-sm sm:text-base font-medium tracking-[-0.03em]">
              Tudo que você precisa para transformar seu consultório em uma máquina de agendamentos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: <LinkIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />,
                title: 'Link de agendamento inteligente',
                description: 'Com múltiplas origens e redirecionamentos'
              },
              {
                icon: <ChartPieIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />,
                title: 'Tecnologia de rastreamento',
                description: 'De origem dos leads (Instagram, Google, Indicação, etc.)'
              },
              {
                icon: <ShareIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />,
                title: 'Geração de links personalizados',
                description: 'Para pacientes, com metrificação de indicações e premiação dos mais engajados'
              },
              {
                icon: <QrCodeIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />,
                title: 'Gerador de QR Code rastreável',
                description: 'Ideal para cartões, recepção ou redes sociais'
              },
              {
                icon: <PresentationChartLineIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />,
                title: 'Dashboard Profissional',
                description: 'Com todos os dados em tempo real'
              },
              {
                icon: <FunnelIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />,
                title: 'Pipeline visual completo',
                description: 'Mostrando em que etapa cada lead está na jornada de compra'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-blue-900/30 p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow group border border-blue-800/30"
              >
                <div className="mb-4 transition-transform group-hover:scale-110 duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white tracking-[-0.03em]">{feature.title}</h3>
                <p className="text-blue-100/80 text-sm sm:text-base tracking-[-0.03em]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flywheel Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white tracking-[-0.03em]">Como funciona o Flywheel da MED1</h2>
            <p className="text-blue-100/80 max-w-2xl mx-auto text-sm sm:text-base tracking-[-0.03em]">
              Uma jornada contínua de crescimento orgânico, baseada em dados e impulsionada por quem mais confia no seu serviço: seus próprios pacientes.
            </p>
          </motion.div>

          <div className="relative">
            {/* Flywheel Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  step: 1,
                  title: 'Paciente agenda e origem é registrada automaticamente',
                  icon: <UserGroupIcon className="w-6 h-6 text-blue-400" />
                },
                {
                  step: 2,
                  title: 'Você acompanha a jornada até o agendamento',
                  icon: <ChartBarIcon className="w-6 h-6 text-blue-400" />
                },
                {
                  step: 3,
                  title: 'Após atendimento, ele recebe link rastreável para indicar amigos',
                  icon: <ShareIcon className="w-6 h-6 text-blue-400" />
                },
                {
                  step: 4,
                  title: 'Você cria campanhas de incentivo para quem mais indicar',
                  icon: <GiftIcon className="w-6 h-6 text-blue-400" />
                },
                {
                  step: 5,
                  title: 'Você vê quais canais geram mais pacientes',
                  icon: <ChartPieIcon className="w-6 h-6 text-blue-400" />
                },
                {
                  step: 6,
                  title: 'Reinveste nos canais com melhor ROI',
                  icon: <ArrowTrendingUpIcon className="w-6 h-6 text-blue-400" />
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative bg-blue-900/30 p-6 rounded-lg border border-blue-800/30 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Arrow connector */}
                  {i < 5 && (
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                      <ChevronDownIcon className="w-6 h-6 text-blue-400/30" />
                    </div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-800/50 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="text-blue-400 font-semibold mr-2 tracking-[-0.03em]">Passo {item.step}</span>
                      </div>
                      <p className="text-blue-100/90 text-sm sm:text-base tracking-[-0.03em]">{item.title}</p>
                    </div>
              </div>
                </motion.div>
              ))}
            </div>
          </div>
      </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="container mx-auto max-w-6xl text-center">
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16"
    >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white tracking-[-0.03em]">
              O que outros profissionais dizem
      </h2>
            <p className="text-blue-100/80 max-w-2xl mx-auto text-sm sm:text-base tracking-[-0.03em]">
              Veja como a MED1 está transformando a gestão de consultórios médicos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                quote: "Desde que comecei a usar a MED1, triplicamos os agendamentos e sabemos exatamente de onde cada paciente veio. A fidelização aumentou significativamente.",
                author: "Dr. Carlos Silva",
                specialty: "Cardiologista",
                location: "São Paulo, SP"
              },
              {
                quote: "O sistema de indicações premiadas foi um divisor de águas. Nossos pacientes se tornaram verdadeiros promotores do consultório.",
                author: "Dra. Ana Oliveira",
                specialty: "Dermatologista",
                location: "Rio de Janeiro, RJ"
              },
              {
                quote: "A visibilidade que temos hoje sobre a origem dos pacientes nos permitiu otimizar nossos investimentos em marketing.",
                author: "Dr. Marcos Santos",
                specialty: "Ortopedista",
                location: "Belo Horizonte, MG"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-blue-900/30 p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-blue-800/30"
              >
                <div className="flex flex-col h-full">
                  <p className="text-blue-100/90 italic mb-4 sm:mb-6 flex-grow text-sm sm:text-base tracking-[-0.03em]">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="text-white font-semibold text-base sm:text-lg tracking-[-0.03em]">{testimonial.author}</p>
                    <p className="text-blue-100/80 text-sm tracking-[-0.03em]">{testimonial.specialty}</p>
                    <p className="text-blue-100/60 text-xs sm:text-sm tracking-[-0.03em]">{testimonial.location}</p>
              </div>
            </div>
              </motion.div>
        ))}
      </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="container mx-auto max-w-6xl">
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white tracking-[-0.03em]">
              Por que escolher a MED1?
            </h2>
            <p className="text-blue-100/80 max-w-2xl mx-auto text-sm sm:text-base tracking-[-0.03em]">
              Compare como a MED1 transforma a gestão do seu consultório
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-900/30 p-6 sm:p-8 rounded-lg border border-blue-800/30 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-red-900/30 flex items-center justify-center mr-4">
                  <XMarkIcon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white tracking-[-0.03em]">
                  Sem a MED1
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  {
                    title: 'Origem dos pacientes',
                    description: 'Não sabe de onde vêm os pacientes e perde oportunidades de otimização'
                  },
                  {
                    title: 'Indicações',
                    description: 'Sistema de indicação improvisado e sem incentivos para pacientes'
                  },
                  {
                    title: 'Custos de aquisição',
                    description: 'CAC alto e sem controle sobre os investimentos em marketing'
                  },
                  {
                    title: 'Gestão de leads',
                    description: 'Leads se perdem no WhatsApp e não há acompanhamento da jornada'
                  },
                  {
                    title: 'Tomada de decisão',
                    description: 'Decisões baseadas em suposições, sem dados concretos'
                  }
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-red-400 text-sm">•</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm sm:text-base tracking-[-0.03em]">{item.title}</h4>
                      <p className="text-blue-100/80 text-sm tracking-[-0.03em]">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-900/30 p-6 sm:p-8 rounded-lg border border-blue-800/30 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-green-900/30 flex items-center justify-center mr-4">
                  <CheckIcon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white tracking-[-0.03em]">
                  Com a MED1
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  {
                    title: 'Rastreamento completo',
                    description: 'Sabe exatamente a origem de cada paciente e otimiza os canais mais eficientes'
                  },
                  {
                    title: 'Sistema de indicações',
                    description: 'Links rastreáveis e sistema de premiação que incentiva indicações'
                  },
                  {
                    title: 'Custos otimizados',
                    description: 'Aquisição orgânica e previsível, com redução significativa do CAC'
                  },
                  {
                    title: 'Pipeline profissional',
                    description: 'Acompanhamento completo da jornada do lead até a conversão'
                  },
                  {
                    title: 'Decisões baseadas em dados',
                    description: 'Dashboard completo com métricas em tempo real para tomada de decisão'
                  }
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mr-3 mt-0.5">
                      <CheckIcon className="w-3 h-3 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm sm:text-base tracking-[-0.03em]">{item.title}</h4>
                      <p className="text-blue-100/80 text-sm tracking-[-0.03em]">{item.description}</p>
            </div>
                  </li>
        ))}
              </ul>
            </motion.div>
          </div>
      </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="container mx-auto max-w-6xl">
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-white tracking-[-0.03em]">
              Benefícios de transformar seu consultório com a MED1
        </h2>
            <p className="text-blue-100/80 max-w-2xl mx-auto tracking-[-0.03em]">
              Descubra como a MED1 pode revolucionar a gestão do seu consultório
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Aumento real na taxa de agendamentos',
                description: 'Transforme cada paciente em um promotor do seu serviço e veja seus agendamentos crescerem organicamente'
              },
              {
                title: 'Redução do custo por paciente',
                description: 'Com aquisição orgânica e previsível, reduza significativamente seu CAC'
              },
              {
                title: 'Mais fidelização e mais indicações',
                description: 'Sistema de premiação que incentiva seus pacientes a indicarem mais'
              },
              {
                title: 'Visão completa da performance',
                description: 'Dashboard profissional com todos os dados em tempo real'
              },
              {
                title: 'Time com mais controle',
                description: 'Pipeline visual completo para acompanhar cada lead na jornada'
              },
              {
                title: 'Menos improviso',
                description: 'Processos claros e automatizados para toda a equipe'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-blue-900/30 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-blue-800/30"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-800/50 flex items-center justify-center mr-4">
                    <span className="text-blue-400 text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 tracking-[-0.03em]">{benefit.title}</h3>
                    <p className="text-blue-100/80 tracking-[-0.03em]">{benefit.description}</p>
                  </div>
      </div>
    </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white tracking-[-0.03em]">
              Pronto para transformar seu consultório?
            </h2>
            <p className="text-blue-100/80 mb-6 sm:mb-8 text-sm sm:text-base tracking-[-0.03em]">
              Agende uma demonstração gratuita e descubra como podemos ajudar seu negócio a crescer
            </p>
            <Button 
              onClick={handleDemoClick}
              className="bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto tracking-[-0.03em]"
            >
              Agendar demonstração
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-blue-800/30 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <Logo className="h-6 mb-4 sm:mb-0" variant="light" />
            <p className="text-blue-100/60 text-xs sm:text-sm tracking-[-0.03em]">
              © 2024 MED1. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 