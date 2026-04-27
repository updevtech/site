import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Importando a logo da sua pasta assets
import Brandlogo from "../assets/Container.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // NOVO: Estado para rastrear qual link está ativo. (Inicia no 'servicos')
  const [activeLink, setActiveLink] = useState('servicos');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Função para fechar o menu mobile e também definir o link ativo
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsMobileMenuOpen(false); // Fecha o menu mobile se clicar em um link
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#181416] px-8 py-4 flex justify-between items-center border-b border-white/5 shadow-lg">
      
      {/* 1. Esquerda: Logotipo da Marca */}
      <div className="flex items-center gap-2 w-1/4">
        <img src={Brandlogo} alt="Logo" className="w-25 h-25object-contain" />
      </div>
      
      {/* 2. Centro: Links de Navegação */}
      <div className="hidden md:flex justify-center items-center gap-10 w-2/4 text-sm font-bold uppercase tracking-widest">
        
        {/* LINK 1: Serviços */}
        <a 
          href="#servicos" 
          onClick={() => handleLinkClick('servicos')}
          className={`transition-all duration-300 border-b-2 pb-1 ${
            activeLink === 'servicos' 
              ? 'text-[#ffb5c6] border-[#ffb5c6] -translate-y-1' // Rosa, com linha e sobe
              : 'text-[#9ca3af] border-transparent translate-y-0 hover:text-[#ffb5c6]' // Cinza, sem linha, normal
          }`}
        >
          Serviços
        </a>

        {/* LINK 2: O Monólito */}
        <a 
          href="#padrao" 
          onClick={() => handleLinkClick('padrao')}
          className={`transition-all duration-300 border-b-2 pb-1 ${
            activeLink === 'padrao' 
              ? 'text-[#ffb5c6] border-[#ffb5c6] -translate-y-1' 
              : 'text-[#9ca3af] border-transparent translate-y-0 hover:text-[#ffb5c6]'
          }`}
        >
          O Monólito
        </a>

        {/* LINK 3: Diferenciais */}
        <a 
          href="#diferenciais" 
          onClick={() => handleLinkClick('diferenciais')}
          className={`transition-all duration-300 border-b-2 pb-1 ${
            activeLink === 'diferenciais' 
              ? 'text-[#ffb5c6] border-[#ffb5c6] -translate-y-1' 
              : 'text-[#9ca3af] border-transparent translate-y-0 hover:text-[#ffb5c6]'
          }`}
        >
          Diferenciais
        </a>

      </div>

      {/* 3. Direita: Botão CTA Desktop */}
      <div className="hidden md:flex justify-end w-1/4">
        <button className="bg-[#ffb5c6] text-[#4a0818] font-bold text-xs px-8 py-3 uppercase tracking-wider hover:bg-[#fca5a5] transition-colors shadow-sm">
          Solicitar Consultoria
        </button>
      </div>

      {/* 4. Ícone de Toggle para o Menu Mobile */}
      <button 
        className="md:hidden text-[#ffb5c6] hover:text-white transition-colors p-2 rounded-md bg-white/5"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* 5. Dropdown do Menu Mobile (Também sincronizado com o estado activeLink) */}
      {isMobileMenuOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-[#181416] border-b border-white/5 flex flex-col items-center py-8 gap-6 md:hidden shadow-xl">
          <a 
            href="#servicos" 
            onClick={() => handleLinkClick('servicos')} 
            className={`font-bold uppercase tracking-widest text-sm transition-all duration-300 ${activeLink === 'servicos' ? 'text-[#ffb5c6] -translate-y-1' : 'text-[#9ca3af]'}`}
          >
            Serviços
          </a>
          
          <a 
            href="#padrao" 
            onClick={() => handleLinkClick('padrao')} 
            className={`font-bold uppercase tracking-widest text-sm transition-all duration-300 ${activeLink === 'padrao' ? 'text-[#ffb5c6] -translate-y-1' : 'text-[#9ca3af]'}`}
          >
            O Monólito
          </a>
          
          <a 
            href="#diferenciais" 
            onClick={() => handleLinkClick('diferenciais')} 
            className={`font-bold uppercase tracking-widest text-sm transition-all duration-300 ${activeLink === 'diferenciais' ? 'text-[#ffb5c6] -translate-y-1' : 'text-[#9ca3af]'}`}
          >
            Diferenciais
          </a>
          
          <button className="bg-[#ffb5c6] text-[#4a0818] font-bold text-xs px-8 py-3 mt-4 uppercase tracking-wider">
            Solicitar Consultoria
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;