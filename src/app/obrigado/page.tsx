'use client'

import { useEffect, useState } from 'react'

export default function ThankYouPage() {
  const [countdown, setCountdown] = useState(10)

  useEffect(() => {
    // Track lead conversion - Facebook
    if ((window as any).fbq) {
      (window as any).fbq('track', 'Lead')
    }

    // Track lead conversion - Google Analytics
    if ((window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'event_category': 'lead',
        'event_label': 'thank_you_page_view'
      })
    }

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          const message = encodeURIComponent("Olá, sou médico e quero acesso aos prompts!")
          window.location.href = `https://wa.me/5511937064833?text=${message}`
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleWhatsAppClick = () => {
    // Track WhatsApp click - Facebook
    if ((window as any).fbq) {
      (window as any).fbq('track', 'Contact')
    }

    // Track WhatsApp click - Google Analytics
    if ((window as any).gtag) {
      (window as any).gtag('event', 'click', {
        'event_category': 'whatsapp',
        'event_label': 'access_prompts'
      })
    }
    
    const message = encodeURIComponent("Olá, sou médico e quero acesso aos prompts!")
    window.location.href = `https://wa.me/5511937064833?text=${message}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
            Obrigado!
          </h1>
          <p className="text-lg text-white/90 font-medium mb-8">
            Redirecionando para o WhatsApp em {countdown} segundos...
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center justify-center gap-2 bg-green-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-green-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Acessar Prompts
          </button>
        </div>
      </main>
    </div>
  )
} 