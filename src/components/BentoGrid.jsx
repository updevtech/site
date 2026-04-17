import React from 'react';
import { Shield, Zap, Heart } from 'lucide-react';

const BentoGrid = () => {
  return (
    <section id="diferenciais" className="py-24 px-6 md:px-20 bg-surface">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase mb-6 leading-tight">
            Por que o mercado nos escolhe?
          </h2>
          <p className="text-white/50 leading-relaxed font-body">
            Não entregamos apenas código. Entregamos ativos digitais de alta valorização construídos sob as premissas da engenharia moderna.
          </p>
        </div>
        <div className="text-8xl font-headline font-bold text-white/5 opacity-20">01</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        <div className="surface-card p-10 min-h-[350px] flex flex-col justify-between">
          <Shield className="w-8 h-8 text-primary-light" />
          <div>
            <h3 className="text-xl font-headline font-bold mb-4 uppercase">Consultoria Consultiva</h3>
            <p className="text-sm text-white/40 leading-relaxed font-body">
              Nossa equipe atua como parceira estratégica, desenhando processos para suportar o crescimento da sua empresa.
            </p>
          </div>
        </div>

        <div className="surface-card p-10 min-h-[350px] flex flex-col justify-between">
          <Zap className="w-8 h-8 text-primary-light" />
          <div>
            <h3 className="text-xl font-headline font-bold mb-4 uppercase">Engenharia de Elite</h3>
            <p className="text-sm text-white/40 leading-relaxed font-body">
              Seguimos o "Padrão Monolith": código limpo, arquitetura escalável e segurança aplicada em cada linha escrita.
            </p>
          </div>
        </div>

        <div className="surface-card p-10 min-h-[350px] flex flex-col justify-between">
          <Heart className="w-8 h-8 text-primary-light" />
          <div>
            <h3 className="text-xl font-headline font-bold mb-4 uppercase">Agilidade de Boutique</h3>
            <p className="text-sm text-white/40 leading-relaxed font-body">
              Foco total em poucos projetos simultâneos. Você recebe atenção de sêniores, não de estagiários em escala.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
