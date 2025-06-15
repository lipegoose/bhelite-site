
import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-20">
      {/* Top bar */}
      <div className="bg-slate-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(31) 3024-4555</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Belo Horizonte - MG</span>
            </div>
          </div>
          <div className="text-sm">
            Atendimento: Segunda à Sexta - 8h às 18h
          </div>
        </div>
      </div>

      {/* Main header without background */}
      <div className="relative max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/185efedd-8775-45c1-972d-52844c78aad9.png"
              alt="BH Elite Imobiliária" 
              className="h-20 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#inicio" className="text-white hover:text-yellow-400 font-medium transition-colors">
              Início
            </a>
            <a href="#imoveis" className="text-white hover:text-yellow-400 font-medium transition-colors">
              Imóveis
            </a>
            <a href="#sobre" className="text-white hover:text-yellow-400 font-medium transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="text-white hover:text-yellow-400 font-medium transition-colors">
              Serviços
            </a>
            <a href="#blog" className="text-white hover:text-yellow-400 font-medium transition-colors">
              Blog
            </a>
            <a href="#contato" className="text-white hover:text-yellow-400 font-medium transition-colors">
              Contato
            </a>
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2">
              Anunciar Imóvel
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900 z-50">
            <div className="px-4 py-6 space-y-4">
              <a href="#inicio" className="block text-white hover:text-yellow-400 font-medium">
                Início
              </a>
              <a href="#imoveis" className="block text-white hover:text-yellow-400 font-medium">
                Imóveis
              </a>
              <a href="#sobre" className="block text-white hover:text-yellow-400 font-medium">
                Sobre
              </a>
              <a href="#servicos" className="block text-white hover:text-yellow-400 font-medium">
                Serviços
              </a>
              <a href="#blog" className="block text-white hover:text-yellow-400 font-medium">
                Blog
              </a>
              <a href="#contato" className="block text-white hover:text-yellow-400 font-medium">
                Contato
              </a>
              <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                Anunciar Imóvel
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
