import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-navbar px-6 py-4 flex justify-between items-center border-b border-outline-variant/10">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-primary"></div>
        <span className="font-headline font-bold text-xl tracking-tighter uppercase">UpDevTech</span>
      </div>
      
      <div className="hidden md:flex gap-12 text-sm font-headline font-medium uppercase tracking-widest text-white/70">
        <a href="#servicos" className="hover:text-primary-light transition-colors">Serviços</a>
        <a href="#padrao" className="hover:text-primary-light transition-colors">O Padrão Monolith</a>
        <a href="#diferenciais" className="hover:text-primary-light transition-colors">Diferenciais</a>
      </div>

      <button className="monolith-button text-xs px-6 py-2">
        Solicitar Consultoria
      </button>

      <div className="md:hidden">
        <Menu className="w-6 h-6 text-white" />
      </div>
    </nav>
  );
};

export default Navbar;
