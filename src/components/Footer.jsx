import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface-low pt-24 pb-12 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h2 className="text-4xl md:text-7xl font-headline font-bold uppercase mb-12 leading-[1.1]">
          Tem um problema para resolver?
        </h2>
        <p className="text-white/50 mb-12 max-w-xl mx-auto font-body">
          Conte-nos o que sua empresa precisa. Vamos entender o cenário e avaliar juntos o melhor caminho para transformar a ideia em uma solução viável.
        </p>
        <a href="https://wa.me/5581995270031?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20os%20servi%C3%A7os%20da%20UpDevTech." target="_blank" rel="noreferrer" className="monolith-button px-12 py-6 text-lg">Iniciar conversa</a>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
        <div className="flex items-center gap-2">
          <img src="/updevtech-wordmark.png" alt="UpDevTech" className="w-36 h-8 object-contain object-left" />
        </div>
        
        <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/40 font-headline font-bold">
          <a href="https://wa.me/5581995270031" target="_blank" rel="noreferrer" className="hover:text-primary-light">WhatsApp</a>
          <a href="mailto:contato@updevtech.com.br" className="hover:text-primary-light">contato@updevtech.com.br</a>
          <a href="https://www.instagram.com/updevtech" target="_blank" rel="noreferrer" className="hover:text-primary-light">Instagram</a>
        </div>

        <div className="text-[10px] uppercase tracking-widest text-white/20 font-headline">
          © 2026 UpDevTech Desenvolvimento de Softwares LTDA
        </div>
      </div>
    </footer>
  );
};

export default Footer;
