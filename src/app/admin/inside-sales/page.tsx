'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type InsideSalesLead = {
  id: number;
  name: string;
  email: string;
  whatsapp: string;
  instagram: string;
  area: string;
  employees: string;
  revenue: string;
  useTechnology: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export default function InsideSalesAdminPage() {
  const [leads, setLeads] = useState<InsideSalesLead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLeads() {
      try {
        console.log('Iniciando busca de leads...');
        const response = await fetch('/api/form-submission');
        console.log('Resposta recebida:', response.status, response.statusText);
        
        if (!response.ok) {
          throw new Error('Falha ao carregar leads de Inside Sales');
        }
        
        const data = await response.json();
        console.log('Dados recebidos:', data);
        setLeads(data);
      } catch (err) {
        console.error('Erro ao buscar leads de Inside Sales:', err);
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    }

    fetchLeads();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Administração Med1 - Leads de Inside Sales
          </h1>
          <p className="text-gray-600">
            Acompanhe e gerencie leads de Inside Sales
          </p>
          
          <div className="mt-4 flex justify-center gap-4">
            <Link 
              href="/admin"
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
            >
              Ver pedidos de demonstração
            </Link>
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {loading && (
            <div className="p-8 text-center">
              <p className="text-gray-600">Carregando leads...</p>
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

          {!loading && !error && leads.length === 0 && (
            <div className="p-8 text-center">
              <p className="text-gray-600">Nenhum lead de Inside Sales encontrado.</p>
            </div>
          )}

          {!loading && !error && leads.length > 0 && (
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
                      Área
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Funcionários
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Faturamento
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tecnologia
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
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{lead.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{lead.email}</div>
                        <div className="text-sm text-gray-500">{lead.whatsapp}</div>
                        <div className="text-sm text-gray-500">IG: {lead.instagram}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{lead.area}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{lead.employees}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{lead.revenue}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{lead.useTechnology}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span 
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${lead.status === 'new' ? 'bg-yellow-100 text-yellow-800' :
                              lead.status === 'contacted' ? 'bg-blue-100 text-blue-800' :
                              lead.status === 'qualified' ? 'bg-purple-100 text-purple-800' :
                              lead.status === 'converted' ? 'bg-green-100 text-green-800' :
                              'bg-red-100 text-red-800'
                            }`}
                        >
                          {lead.status === 'new' ? 'Novo' :
                           lead.status === 'contacted' ? 'Contactado' :
                           lead.status === 'qualified' ? 'Qualificado' :
                           lead.status === 'converted' ? 'Convertido' : 'Descartado'
                          }
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(lead.createdAt).toLocaleString('pt-BR')}
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