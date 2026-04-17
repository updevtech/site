import React from 'react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-1 bg-primary-light"></div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-headline text-primary-light font-bold">Digital Monolith Agency</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-headline font-bold leading-[1.1] mb-8 uppercase tracking-tighter">
          Transformamos sua visão em <span className="text-primary-light text-glow">tecnologia</span> de alta performance.
        </h1>
        
        <p className="text-lg md:text-xl text-white/60 font-body mb-12 max-w-xl leading-relaxed">
          Engenharia de elite com o DNA de Recife. Unimos a robustez do Padrão Monolith com a agilidade de uma boutique premium de software.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <button className="monolith-button">Iniciar Projeto</button>
          <button className="px-8 py-4 border border-white/10 font-headline font-bold uppercase tracking-wider hover:bg-white/5 transition-all">
            Conhecer o Padrão
          </button>
        </div>
      </div>

      <div className="relative aspect-square md:aspect-auto md:h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-primary-dark/20 blur-[120px] rounded-full"></div>
        <div className="w-full max-w-md bg-surface-low p-4 relative group">
          <img 
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop" 
            alt="Monolith Technology" 
            className="w-full grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute -bottom-6 -right-6 bg-surface-highest p-6 min-w-[200px]">
            <div className="text-4xl font-headline font-bold text-primary-light mb-1">0%</div>
            <div className="text-[10px] uppercase tracking-widest text-white/50">Objetivo de Erro <br/> Anual em Prod</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
