'use client'

import { Logo } from '@/components/ui/logo'
import Link from 'next/link'

const posts = [
  {
    id: 1,
    slug: 'como-gerar-pacientes-sem-gastar-com-anuncios',
    title: 'Como gerar pacientes sem gastar com anúncios',
    excerpt: 'Descubra estratégias eficazes para atrair pacientes de forma orgânica e sustentável.',
    date: '22 Abril 2024',
    readTime: '5 min',
    category: 'Marketing Digital',
    image: '/blog/post1.jpg'
  },
  {
    id: 2,
    slug: 'os-segredos-do-marketing-medico-em-2024',
    title: 'Os segredos do marketing médico em 2024',
    excerpt: 'As principais tendências e estratégias que estão revolucionando o marketing na área da saúde.',
    date: '21 Abril 2024',
    readTime: '7 min',
    category: 'Estratégia',
    image: '/blog/post2.jpg'
  },
  {
    id: 3,
    slug: 'como-aumentar-o-faturamento-do-seu-consultorio',
    title: 'Como aumentar o faturamento do seu consultório',
    excerpt: 'Dicas práticas e estratégias comprovadas para maximizar seus resultados.',
    date: '20 Abril 2024',
    readTime: '6 min',
    category: 'Gestão',
    image: '/blog/post3.jpg'
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-[100dvh] bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-16 pt-8">
          <Link href="/">
            <Logo className="scale-150" variant="light" />
          </Link>
          <Link 
            href="/" 
            className="text-white hover:text-white/80 transition-colors"
          >
            Voltar para Home
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Blog Med1
          </h1>
          <p className="text-xl text-white/80 mb-16 text-center">
            Conteúdo exclusivo sobre marketing médico e gestão de consultórios
          </p>

          <div className="grid gap-8">
            {posts.map(post => (
              <Link 
                key={post.id}
                href={`/blog/${post.slug}`}
                className="block"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all">
                  <div className="flex items-start gap-6">
                    <div className="w-48 h-32 bg-white/20 rounded-lg flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 text-sm text-white/60 mb-2">
                        <span>{post.category}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime} de leitura</span>
                      </div>
                      <h2 className="text-2xl font-semibold text-white mb-3">
                        {post.title}
                      </h2>
                      <p className="text-white/80">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 