'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function PromptPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  })
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Track lead conversion - Facebook
    if ((window as any).fbq) {
      (window as any).fbq('track', 'Lead')
    }

    // Track lead conversion - Google Analytics
    if ((window as any).gtag) {
      (window as any).gtag('event', 'generate_lead', {
        'event_category': 'conversion',
        'event_label': 'prompt_form'
      })
    }

    try {
      // Save to database
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          profession: 'Médico',
          segment: 'prompt',
          budget: 'N/A'
        }),
      })

      if (response.ok) {
        // Redirect to thank you page
        router.push('/obrigado')
      }
    } catch (error) {
      console.error('Error saving lead:', error)
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-lg rounded-2xl -m-8"></div>
          <div className="relative px-12 py-10 text-center">
            <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-6"></div>
            <p className="text-white/90 font-medium text-lg">Preparando...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              10 Prompts de IA para Médicos
            </h1>
            <p className="text-lg text-white/90 font-medium">
              Ganhe tempo e atraia mais pacientes por indicação
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-white mb-2">
                WhatsApp
              </label>
              <input
                type="tel"
                id="whatsapp"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                placeholder="(11) 99999-9999"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-blue-600 font-bold py-4 px-6 rounded-lg hover:bg-white/90 transition-colors"
            >
              Receber Prompts
            </button>
          </form>
        </div>
      </main>
    </div>
  )
} 