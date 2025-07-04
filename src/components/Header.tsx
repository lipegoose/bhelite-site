
import { useState } from "react";
import { Menu, X, Phone, MapPin, Heart, Megaphone, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-gray-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(31) 993.963.916</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Belo Horizonte - MG</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1 hover:text-[#CC9933] transition-colors cursor-pointer" title="Meus Favoritos">
              <Heart className="w-4 h-4" />
              <span>Meus Favoritos</span>
            </div>
            <div className="flex items-center gap-1 hover:text-[#CC9933] transition-colors cursor-pointer" title="Anuncie seu Imóvel">
              <Megaphone className="w-4 h-4" />
              <span>Anuncie seu Imóvel</span>
            </div>
            <div className="flex items-center gap-1 hover:text-[#CC9933] transition-colors cursor-pointer" title="Área do Cliente">
              <LogIn className="w-4 h-4" />
              <span>Área do Cliente</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center justify-between py-1">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/imgs/logo-bhelite.png"
                alt="BH Elite Imobiliária" 
                className="h-[70px] w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#inicio" className="text-white hover:text-[#CC9933] font-medium transition-colors">
                Início
              </a>
              <a href="#imoveis" className="text-white hover:text-[#CC9933] font-medium transition-colors">
                Imóveis
              </a>
              <a href="#sobre" className="text-white hover:text-[#CC9933] font-medium transition-colors">
                Sobre
              </a>
              <a href="#servicos" className="text-white hover:text-[#CC9933] font-medium transition-colors">
                Serviços
              </a>
              <a href="#blog" className="text-white hover:text-[#CC9933] font-medium transition-colors">
                Blog
              </a>
              <a href="#contato" className="text-white hover:text-[#CC9933] font-medium transition-colors">
                Contato
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2 hover:text-[#CC9933] transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden pb-6">
              <div className="space-y-4">
                <a href="#inicio" className="block text-white hover:text-[#CC9933] font-medium transition-colors">
                  Início
                </a>
                <a href="#imoveis" className="block text-white hover:text-[#CC9933] font-medium transition-colors">
                  Imóveis
                </a>
                <a href="#sobre" className="block text-white hover:text-[#CC9933] font-medium transition-colors">
                  Sobre
                </a>
                <a href="#servicos" className="block text-white hover:text-[#CC9933] font-medium transition-colors">
                  Serviços
                </a>
                <a href="#blog" className="block text-white hover:text-[#CC9933] font-medium transition-colors">
                  Blog
                </a>
                <a href="#contato" className="block text-white hover:text-[#CC9933] font-medium transition-colors">
                  Contato
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
