import React from 'react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-1 bg-primary-light"></div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-headline text-primary-light font-bold">Engenharia de software sob medida</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-headline font-bold leading-[1.1] mb-8 uppercase tracking-tighter">
          Transformamos problemas reais em <span className="text-primary-light text-glow">soluções digitais</span> que ajudam empresas a crescer.
        </h1>
        
        <p className="text-lg md:text-xl text-white/60 font-body mb-12 max-w-xl leading-relaxed">
          A UpDevTech desenvolve sistemas, aplicativos e automações para empresas que precisam organizar operações, reduzir tarefas manuais e evoluir com segurança.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a href="https://wa.me/5581995270031?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20os%20servi%C3%A7os%20da%20UpDevTech." target="_blank" rel="noreferrer" className="monolith-button">Falar sobre um projeto</a>
          <a href="#projetos" className="px-8 py-4 border border-white/10 font-headline font-bold uppercase tracking-wider hover:bg-white/5 transition-all">
            Ver experiências
          </a>
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
            <div className="text-4xl font-headline font-bold text-primary-light mb-1">3</div>
            <div className="text-[10px] uppercase tracking-widest text-white/50">Frentes integradas: <br/>API, Web e App</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
