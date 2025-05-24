'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Logo } from '@/components/ui/logo';

function SearchParamsContent() {
  const searchParams = useSearchParams();
  return (
    <div className="text-center w-full max-w-2xl mx-auto space-y-6">
      <div className="w-16 h-16 border-4 border-blue-600 border-t-white rounded-full animate-spin mx-auto"></div>
      <h2 className="text-3xl font-light text-white">
        Estamos procurando um dos nossos analistas para falar com você...
      </h2>
      <p className="text-xl text-white/80">
        Redirecionando...
      </p>
    </div>
  );
}

export default function PropostaSuccessPage() {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Dispara o evento de lead para o Facebook Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Proposta 3 Meses',
        content_category: new URLSearchParams(window.location.search).get('profession'),
        value: new URLSearchParams(window.location.search).get('revenue'),
        currency: 'BRL',
      });
    }
  }, []);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      const name = new URLSearchParams(window.location.search).get('name');
      const message = encodeURIComponent(`Olá! Me chamo ${name} e quero agendar uma demonstração do Med1!`);
      window.location.href = `https://wa.me/5511937064833?text=${message}`;
    }
  }, [countdown]);

  return (
    <div className="min-h-[100dvh] bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-1 flex flex-col">
        <div className="flex justify-center mb-16 pt-8">
          <Logo className="scale-150" variant="light" />
        </div>

        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <Suspense fallback={<div>Carregando...</div>}>
            <SearchParamsContent />
          </Suspense>
        </div>
      </div>
    </div>
  );
} 