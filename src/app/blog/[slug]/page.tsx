'use client';

import { Logo } from '@/components/ui/logo';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface Post {
  id: number;
  slug: string;
  title: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const posts: Record<string, Post> = {
  'como-gerar-pacientes-sem-gastar-com-anuncios': {
    id: 1,
    slug: 'como-gerar-pacientes-sem-gastar-com-anuncios',
    title: 'Como gerar pacientes sem gastar com anúncios',
    content: `
      <h2>Introdução</h2>
      <p>No cenário atual da medicina, atrair pacientes de forma orgânica se tornou uma habilidade essencial para profissionais da saúde. Este artigo explora métodos eficazes para construir uma presença digital sólida sem depender exclusivamente de anúncios pagos.</p>

      <h2>1. Otimize sua presença online</h2>
      <p>Comece criando perfis profissionais em plataformas relevantes como Google Meu Negócio, LinkedIn e Instagram. Mantenha suas informações atualizadas e responda ativamente às avaliações e comentários.</p>

      <h2>2. Produza conteúdo de qualidade</h2>
      <p>Compartilhe seu conhecimento através de artigos, vídeos e posts informativos. Foque em temas relevantes para seus pacientes e use uma linguagem acessível.</p>

      <h2>3. Networking profissional</h2>
      <p>Construa relacionamentos com outros profissionais da saúde. Parcerias estratégicas podem gerar indicações mútuas e expandir sua rede de contatos.</p>

      <h2>4. Excelência no atendimento</h2>
      <p>Pacientes satisfeitos são sua melhor forma de marketing. Invista em um atendimento humanizado e personalizado para gerar indicações espontâneas.</p>

      <h2>Conclusão</h2>
      <p>A construção de uma presença digital orgânica é um investimento a longo prazo que traz resultados sustentáveis. Combine estas estratégias e adapte-as à sua realidade para alcançar os melhores resultados.</p>
    `,
    date: '22 Abril 2024',
    readTime: '5 min',
    category: 'Marketing Digital',
    image: '/blog/post1.jpg'
  },
  'os-segredos-do-marketing-medico-em-2024': {
    id: 2,
    slug: 'os-segredos-do-marketing-medico-em-2024',
    title: 'Os segredos do marketing médico em 2024',
    content: `
      <h2>Introdução</h2>
      <p>O marketing médico está em constante evolução. Em 2024, novas tendências e tecnologias estão redefinindo como os profissionais de saúde se conectam com seus pacientes.</p>

      <h2>1. Inteligência Artificial no Marketing</h2>
      <p>A IA está revolucionando a personalização do conteúdo e a automação do relacionamento com pacientes. Saiba como implementar essas ferramentas de forma ética e eficiente.</p>

      <h2>2. Marketing de Conteúdo Especializado</h2>
      <p>A criação de conteúdo relevante e especializado continua sendo uma das estratégias mais efetivas. Aprenda a desenvolver uma estratégia de conteúdo que gere autoridade.</p>

      <h2>3. Presença Omnichannel</h2>
      <p>Estar presente em múltiplos canais de forma integrada é essencial. Descubra como criar uma experiência consistente em todas as plataformas.</p>

      <h2>Conclusão</h2>
      <p>O sucesso no marketing médico em 2024 depende da capacidade de adaptar-se às novas tecnologias mantendo o foco no relacionamento humano com os pacientes.</p>
    `,
    date: '21 Abril 2024',
    readTime: '7 min',
    category: 'Estratégia',
    image: '/blog/post2.jpg'
  },
  'como-aumentar-o-faturamento-do-seu-consultorio': {
    id: 3,
    slug: 'como-aumentar-o-faturamento-do-seu-consultorio',
    title: 'Como aumentar o faturamento do seu consultório',
    content: `
      <h2>Introdução</h2>
      <p>Maximizar o faturamento do consultório vai além de aumentar o número de pacientes. É necessário uma abordagem estratégica que combine eficiência operacional e excelência no atendimento.</p>

      <h2>1. Otimize sua agenda</h2>
      <p>Implemente um sistema eficiente de agendamento que minimize faltas e maximize o aproveitamento do seu tempo. Use lembretes automáticos e confirmações prévias.</p>

      <h2>2. Diversifique seus serviços</h2>
      <p>Identifique oportunidades para oferecer serviços complementares que agreguem valor aos seus pacientes e aumentem o ticket médio.</p>

      <h2>3. Gestão financeira eficiente</h2>
      <p>Mantenha um controle rigoroso das finanças, monitore indicadores chave e implemente processos de cobrança eficientes.</p>

      <h2>4. Invista em tecnologia</h2>
      <p>Utilize sistemas de gestão modernos que automatizem processos e permitam um melhor controle do seu negócio.</p>

      <h2>Conclusão</h2>
      <p>O aumento do faturamento é resultado de uma gestão profissional combinada com excelência no atendimento. Implemente estas estratégias gradualmente e monitore os resultados.</p>
    `,
    date: '20 Abril 2024',
    readTime: '6 min',
    category: 'Gestão',
    image: '/blog/post3.jpg'
  }
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = posts[slug];

  if (!post) {
    return (
      <div className="min-h-[100dvh] bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-16 pt-8">
            <Link href="/">
              <Logo className="scale-150" variant="light" />
            </Link>
            <Link 
              href="/blog" 
              className="text-white hover:text-white/80 transition-colors"
            >
              Voltar para o Blog
            </Link>
          </div>
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Post não encontrado</h1>
            <p className="text-xl text-white/80">
              O post que você está procurando não existe ou foi removido.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-16 pt-8">
          <Link href="/">
            <Logo className="scale-150" variant="light" />
          </Link>
          <Link 
            href="/blog" 
            className="text-white hover:text-white/80 transition-colors"
          >
            Voltar para o Blog
          </Link>
        </div>

        <article className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} de leitura</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {post.title}
          </h1>

          <div 
            className="prose prose-invert prose-white max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
} 