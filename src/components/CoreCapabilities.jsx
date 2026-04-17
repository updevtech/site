import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const capabilities = [
  {
    id: '01',
    title: 'Sistemas Web Customizados',
    desc: 'Arquiteturas distribuídas e interfaces de alta performance para operações complexas.'
  },
  {
    id: '02',
    title: 'Aplicativos Mobile',
    desc: 'Experiências nativas e híbridas que colocam o seu negócio na palma da mão do usuário.'
  },
  {
    id: '03',
    title: 'Automação Inteligente',
    desc: 'Eficiência operacional através de scripts, IA e integração de dados de última geração.'
  },
  {
    id: '04',
    title: 'UX/UI Design',
    desc: 'Interfaces que traduzem autoridade e sofisticação em jornadas de usuário impecáveis.'
  }
];

const CoreCapabilities = () => {
  return (
    <section id="servicos" className="py-24 px-6 md:px-20 bg-surface">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase">Core Capabilities</h2>
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
        <div className="flex flex-wrap justify-center gap-12 text-sm font-headline font-bold text-white/40 uppercase tracking-widest">
          <span>Node.js</span>
          <span>React</span>
          <span>Python</span>
          <span>AWS</span>
          <span>PostgreSQL</span>
          <span>Docker</span>
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;
