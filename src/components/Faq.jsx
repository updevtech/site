import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const questions = [
  ['Que tipo de solução a UpDevTech desenvolve?', 'Desenvolvemos sistemas Web, aplicativos Android e iOS, APIs, integrações e automações sob medida.'],
  ['A empresa atende qualquer segmento?', 'Sim. Começamos entendendo o processo e o problema do negócio para avaliar a melhor solução técnica.'],
  ['O projeto pode ser dividido em etapas?', 'Sim. Projetos maiores podem ser organizados em módulos e entregas progressivas, com validação ao longo do caminho.'],
  ['A UpDevTech oferece suporte depois da entrega?', 'Podemos combinar suporte, manutenção evolutiva e novas funcionalidades conforme a necessidade do projeto.'],
];

const Faq = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 px-6 md:px-20 bg-surface">
      <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-16">
        <div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-primary-light font-headline font-bold mb-5">Perguntas frequentes</div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase leading-tight">Antes de começar.</h2>
        </div>
        <div className="border-t border-white/10">
          {questions.map(([question, answer], index) => {
            const isOpen = open === index;
            return (
              <div key={question} className="border-b border-white/10">
                <button type="button" onClick={() => setOpen(isOpen ? null : index)} className="w-full py-6 flex items-center justify-between text-left gap-6" aria-expanded={isOpen}>
                  <span className="font-headline font-bold uppercase text-sm md:text-base">{question}</span>
                  {isOpen ? <Minus className="w-5 h-5 text-primary-light shrink-0" /> : <Plus className="w-5 h-5 text-primary-light shrink-0" />}
                </button>
                {isOpen && <p className="pb-6 text-sm text-white/50 leading-relaxed max-w-2xl">{answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
