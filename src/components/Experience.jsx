import React from 'react';

const experiences = [
  {
    number: '01',
    title: 'Aplicativos Android e iOS',
    desc: 'Evolução e atualização de aplicativos já utilizados por milhares de pessoas, com atenção a compatibilidade, testes e publicação.',
    tags: 'Mobile · Android · iOS',
  },
  {
    number: '02',
    title: 'Plataformas para operações',
    desc: 'Sistemas web com painel administrativo para organizar usuários, conteúdos, agenda, documentos, pagamentos e relatórios.',
    tags: 'Web · Gestão · Processos',
  },
  {
    number: '03',
    title: 'Arquitetura integrada',
    desc: 'Projetos estruturados em API, Web e App, com integrações, segurança, infraestrutura e evolução por entregas.',
    tags: 'API · Integrações · Cloud',
  },
];

const Experience = () => {
  return (
    <section id="projetos" className="py-24 px-6 md:px-20 bg-surface-low">
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-16">
        <div className="max-w-2xl">
          <div className="text-[10px] uppercase tracking-[0.4em] text-primary-light font-headline font-bold mb-5">Experiência aplicada</div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase leading-tight">Soluções que saem do papel.</h2>
        </div>
        <p className="max-w-md text-white/50 font-body leading-relaxed">
          Cada trabalho nasce de um desafio específico. Conheça os tipos de soluções que já fazem parte da nossa experiência, sem expor informações confidenciais de clientes.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-1">
        {experiences.map((item) => (
          <article key={item.number} className="surface-card p-8 min-h-[280px] flex flex-col justify-between border border-white/5">
            <span className="text-sm font-headline font-bold text-primary-light">{item.number}</span>
            <div>
              <h3 className="text-xl font-headline font-bold uppercase mb-4">{item.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-6">{item.desc}</p>
              <span className="text-[10px] uppercase tracking-widest text-white/30 font-headline font-bold">{item.tags}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
