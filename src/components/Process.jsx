import React from 'react';

const steps = [
  ['01', 'Entendimento', 'Conhecemos o problema, os objetivos, os usuários e o impacto esperado na operação.'],
  ['02', 'Arquitetura', 'Definimos a solução, as integrações e as etapas de entrega antes de construir.'],
  ['03', 'Desenvolvimento', 'Construímos com validações frequentes, comunicação direta e escopo bem definido.'],
  ['04', 'Evolução', 'Homologamos, entregamos e deixamos o produto preparado para continuar crescendo.'],
];

const Process = () => (
  <section id="processo" className="py-24 px-6 md:px-20 bg-surface-low">
    <div className="max-w-3xl mb-16">
      <div className="text-[10px] uppercase tracking-[0.4em] text-primary-light font-headline font-bold mb-5">Como trabalhamos</div>
      <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase leading-tight">Clareza antes do código.</h2>
      <p className="mt-6 text-white/50 font-body leading-relaxed">Um processo simples para reduzir incertezas e transformar uma necessidade de negócio em uma solução que pode evoluir.</p>
    </div>
    <div className="grid md:grid-cols-4 gap-px bg-white/10">
      {steps.map(([number, title, description]) => (
        <article key={number} className="bg-surface-low p-8 min-h-[250px]">
          <span className="text-primary-light font-headline font-bold">{number}</span>
          <h3 className="mt-16 text-xl font-headline font-bold uppercase">{title}</h3>
          <p className="mt-4 text-sm text-white/45 leading-relaxed">{description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Process;
