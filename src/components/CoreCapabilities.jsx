import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const capabilities = [
  {
    id: '01',
    title: 'Sistemas Web Customizados',
    desc: 'Painéis e plataformas para centralizar processos, dados, usuários e operações do seu negócio.'
  },
  {
    id: '02',
    title: 'Aplicativos Mobile',
    desc: 'Aplicativos Android e iOS para conectar sua operação aos clientes, fornecedores e equipes.'
  },
  {
    id: '03',
    title: 'Automação Inteligente',
    desc: 'Integrações, automações e IA para reduzir tarefas repetitivas e melhorar a eficiência operacional.'
  },
  {
    id: '04',
    title: 'UX/UI Design',
    desc: 'Experiências claras e funcionais, pensadas para facilitar a jornada de quem usa o sistema.'
  }
];

const CoreCapabilities = () => {
  return (
    <section id="servicos" className="py-24 px-6 md:px-20 bg-surface">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase">Nossas soluções</h2>
        <div className="flex-1 h-[1px] bg-white/10"></div>
      </div>

      <div className="space-y-0">
        {capabilities.map((item) => (
          <div key={item.id} className="group border-b border-white/5 py-12 flex flex-col md:flex-row md:items-center justify-between hover:bg-surface-low transition-colors px-6 -mx-6">
            <div className="flex items-center gap-8 mb-4 md:mb-0">
              <span className="text-sm font-headline font-bold text-white/20">{item.id}</span>
              <h3 className="text-2xl md:text-3xl font-headline font-bold uppercase group-hover:text-primary-light transition-colors">{item.title}</h3>
            </div>
            <div className="flex items-center gap-12 max-w-md w-full justify-between">
              <p className="text-sm text-white/40 font-body leading-relaxed">{item.desc}</p>
              <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-primary-light transition-all" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 text-center overflow-hidden">
        <div className="text-[10px] uppercase tracking-[1em] text-white/20 mb-12">Nosso Ecossistema Tecnológico</div>
        <div className="technology-marquee" aria-label="Tecnologias utilizadas pela UpDevTech">
          <div className="technology-marquee-track">
            {[0, 1].map((group) => (
              <div className="technology-marquee-group" aria-hidden={group === 1} key={group}>
                <span>Flutter</span>
                <span>Kotlin</span>
                <span>Swift</span>
                <span>React</span>
                <span>Python</span>
                <span>Node.js</span>
                <span>PostgreSQL</span>
                <span>Google Cloud</span>
                <span>Firebase</span>
                <span>Docker</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;
