import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// IMPORTANTE: Importe o arquivo da sua logo aqui. 
// Coloque o arquivo 'logo_up.jpeg' na mesma pasta deste componente ou ajuste o caminho.
import BrandLogo from './logo';;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-navbar px-6 py-4 flex justify-between items-center border-b border-outline-variant/10">
      
      {/* 1. Logo (Agora usando a SUA imagem real) e Nome na posição de origem */}
      <div className="flex items-center gap-2">
        <BrandLogo />
        <span className="font-headline font-bold text-xl tracking-tighter uppercase">UpDevTech</span>
      </div>
      
      {/* 2. Links de Navegação (Posição de origem) */}
      <div className="hidden md:flex gap-12 text-sm font-headline font-medium uppercase tracking-widest text-white/70">
        <a href="#servicos" className="hover:text-primary-light transition-colors">Serviços</a>
        <a href="#padrao" className="hover:text-primary-light transition-colors">O Padrão Monolith</a>
        <a href="#diferenciais" className="hover:text-primary-light transition-colors">Diferenciais</a>
      </div>

      {/* 3. Botão Solicitar Consultoria (Posição de origem - totalmente separado do menu) */}
      <button className="monolith-button text-xs px-6 py-2">
        Solicitar Consultoria
      </button>

      {/* 4. Ícone do Menu Mobile (Posição de origem) */}
      <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </div>

      {/* 5. Comportamento Funcional do Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-black/95 backdrop-blur-md border-b border-outline-variant/10 flex flex-col items-center py-6 gap-6 md:hidden">
          <a href="#servicos" onClick={toggleMobileMenu} className="text-white hover:text-primary-light transition-colors">Serviços</a>
          <a href="#padrao" onClick={toggleMobileMenu} className="text-white hover:text-primary-light transition-colors">O Padrão Monolith</a>
          <a href="#diferenciais" onClick={toggleMobileMenu} className="text-white hover:text-primary-light transition-colors">Diferenciais</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;