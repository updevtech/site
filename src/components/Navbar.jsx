import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const whatsappUrl = 'https://wa.me/5581995270031?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20os%20servi%C3%A7os%20da%20UpDevTech.';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-navbar px-6 py-4 border-b border-outline-variant/10">
      <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src="/updevtech-wordmark.png" alt="UpDevTech" className="w-36 h-8 object-contain object-left" />
      </div>
      
      <div className="hidden md:flex gap-12 text-sm font-headline font-medium uppercase tracking-widest text-white/70">
        <a href="#servicos" className="hover:text-primary-light transition-colors">Soluções</a>
        <a href="#processo" className="hover:text-primary-light transition-colors">Processo</a>
        <a href="#projetos" className="hover:text-primary-light transition-colors">Experiências</a>
      </div>

      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hidden md:inline-flex monolith-button text-xs px-6 py-2">
        Falar no WhatsApp
      </a>

      <button type="button" onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white" aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={isOpen}>
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-5 pt-6 pb-2 text-sm font-headline font-medium uppercase tracking-widest text-white/70">
          <a href="#servicos" onClick={closeMenu} className="hover:text-primary-light transition-colors">Soluções</a>
          <a href="#processo" onClick={closeMenu} className="hover:text-primary-light transition-colors">Processo</a>
          <a href="#projetos" onClick={closeMenu} className="hover:text-primary-light transition-colors">Experiências</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu} className="monolith-button text-xs px-6 py-3 text-center">Falar no WhatsApp</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
