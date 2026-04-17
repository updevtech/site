import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface-low pt-24 pb-12 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h2 className="text-4xl md:text-7xl font-headline font-bold uppercase mb-12 leading-[1.1]">
          Pronto para elevar o padrão?
        </h2>
        <p className="text-white/50 mb-12 max-w-xl mx-auto font-body">
          Agende uma conversa estratégica com nossos especialistas e descubra como o Padrão Monolith pode transformar seu projeto.
        </p>
        <button className="monolith-button px-12 py-6 text-lg">Solicitar Consultoria Gratuita</button>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-primary"></div>
          <span className="font-headline font-bold text-lg uppercase">UpDevTech</span>
        </div>
        
        <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/40 font-headline font-bold">
          <a href="#" className="hover:text-primary-light">Privacidade</a>
          <a href="#" className="hover:text-primary-light">Termos</a>
          <a href="#" className="hover:text-primary-light">Setup</a>
          <a href="#" className="hover:text-primary-light">LinkedIn</a>
        </div>

        <div className="text-[10px] uppercase tracking-widest text-white/20 font-headline">
          © 2024 UpDevTech - Kinetic Monolith Engineering
        </div>
      </div>
    </footer>
  );
};

export default Footer;
