import React from 'react';

const MonolithModule = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-primary-container noise-texture text-on-primary-container">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-[10px] uppercase tracking-[0.4em] font-headline font-bold mb-6 opacity-60">Manifesto Monolith.01</div>
          <h2 className="text-4xl md:text-6xl font-headline font-bold uppercase mb-8 leading-[1.1]">
            Uma Boutique de Software com Alma de Gigante.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm opacity-90 font-body leading-relaxed">
            <p>
              Nascemos no ecossistema de Recife para elevar a régua da entrega digital. Nossa estrutura é enxuta, mas nossa tecnologia é monumental. Construímos soluções que não apenas funcionam, mas sustentam negócios em crescimento exponencial.
            </p>
            <p>
              O "Padrão Monolith" é o nosso selo: se não for para ser o melhor código da sua stack, não deve ser escrito. Combinamos robustez técnica com a flexibilidade que o mercado moderno exige.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full h-[1px] bg-on-primary-container/20 md:hidden mb-8"></div>
          {/* Decorative element */}
          <div className="grid grid-cols-3 gap-1 opacity-20">
             {[...Array(9)].map((_, i) => (
               <div key={i} className="w-20 h-20 bg-on-primary-container"></div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonolithModule;
