'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type DemoRequest = {
  id: number;
  name: string;
  email: string;
  whatsapp: string;
  speciality: string;
  bestTime: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export default function AdminPage() {
  const [requests, setRequests] = useState<DemoRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDemoRequests() {
      try {
        const response = await fetch('/api/demo-requests');
        
        if (!response.ok) {
          throw new Error('Falha ao carregar pedidos de demonstração');
        }
        
        const data = await response.json();
        setRequests(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
        console.error('Erro ao buscar pedidos de demonstração:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchDemoRequests();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Administração Med1 - Pedidos de Demonstração
          </h1>
          <p className="text-gray-600">
            Gerencie todos os pedidos de demonstração em um só lugar
          </p>
          
          <div className="mt-4 flex justify-center gap-4">
            <Link 
              href="/admin/inside-sales"
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
            >
              Ver leads de Inside Sales
            </Link>
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {loading && (
            <div className="p-8 text-center">
              <p className="text-gray-600">Carregando pedidos...</p>
            </div>
          )}

          {error && (
            <div className="p-8 text-center">
              <p className="text-red-600">Erro: {error}</p>
              <button 
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={() => window.location.reload()}
              >
                Tentar novamente
              </button>
            </div>
          )}

          {!loading && !error && requests.length === 0 && (
            <div className="p-8 text-center">
              <p className="text-gray-600">Nenhum pedido de demonstração encontrado.</p>
            </div>
          )}

          {!loading && !error && requests.length > 0 && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nome
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contato
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Especialidade
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Horário preferido
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Data
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {requests.map((request) => (
                    <tr key={request.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{request.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{request.email}</div>
                        <div className="text-sm text-gray-500">{request.whatsapp}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{request.speciality}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{request.bestTime}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span 
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${request.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                              request.status === 'contacted' ? 'bg-blue-100 text-blue-800' :
                              request.status === 'scheduled' ? 'bg-purple-100 text-purple-800' :
                              request.status === 'completed' ? 'bg-green-100 text-green-800' :
                              'bg-red-100 text-red-800'
                            }`}
                        >
                          {request.status === 'pending' ? 'Pendente' :
                           request.status === 'contacted' ? 'Contactado' :
                           request.status === 'scheduled' ? 'Agendado' :
                           request.status === 'completed' ? 'Concluído' : 'Cancelado'
                          }
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(request.createdAt).toLocaleString('pt-BR')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <Link 
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Voltar para o início
          </Link>
        </div>
      </div>
    </div>
  );
} 