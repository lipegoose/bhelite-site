
import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-20">
      {/* Top bar - escura, estilo Prolar */}
      <div className="bg-neutral-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <img
              src="/imgs/logo-bhelite.png"
              alt="BH Elite Imobiliária"
              className="h-8 w-auto mr-4"
            />
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="font-medium tracking-wide">(31) 993.963.916</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Belo Horizonte - MG</span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <span className="hidden md:block text-sm text-white/80">Atendimento: Segunda à Sexta - 8h às 18h</span>
            <a
              href="#"
              className="hidden md:flex items-center text-white/70 hover:text-yellow-400 transition-colors gap-1"
            >
              <span className="text-xs">Meus Favoritos</span>
            </a>
            <Button className="bg-yellow-700 hover:bg-yellow-600 px-4 py-1 text-xs font-semibold hidden md:inline-block">
              Anuncie seu Imóvel
            </Button>
          </div>
        </div>
      </div>

      {/* Menu principal */}
      <div className="bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-2">
          {/* Logo visível mobile */}
          <img
            src="/imgs/logo-bhelite.png"
            alt="BH Elite Imobiliária"
            className="h-12 w-auto lg:hidden"
          />

          <nav className="hidden lg:flex gap-8 items-center">
            <a href="#inicio" className="text-white font-semibold hover:text-yellow-400 transition-colors">Início</a>
            <a href="#imoveis" className="text-white font-semibold hover:text-yellow-400 transition-colors">Imóveis</a>
            <a href="#sobre" className="text-white font-semibold hover:text-yellow-400 transition-colors">Sobre</a>
            <a href="#servicos" className="text-white font-semibold hover:text-yellow-400 transition-colors">Serviços</a>
            <a href="#blog" className="text-white font-semibold hover:text-yellow-400 transition-colors">Blog</a>
            <a href="#contato" className="text-white font-semibold hover:text-yellow-400 transition-colors">Contato</a>
            <Button className="bg-yellow-700 hover:bg-yellow-600 px-6 py-2 text-white font-semibold">
              Anunciar Imóvel
            </Button>
          </nav>
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
              aria-label="Abrir menu"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-neutral-900 z-50 shadow-xl animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              <a href="#inicio" className="block text-white font-semibold hover:text-yellow-400">Início</a>
              <a href="#imoveis" className="block text-white font-semibold hover:text-yellow-400">Imóveis</a>
              <a href="#sobre" className="block text-white font-semibold hover:text-yellow-400">Sobre</a>
              <a href="#servicos" className="block text-white font-semibold hover:text-yellow-400">Serviços</a>
              <a href="#blog" className="block text-white font-semibold hover:text-yellow-400">Blog</a>
              <a href="#contato" className="block text-white font-semibold hover:text-yellow-400">Contato</a>
              <Button className="w-full bg-yellow-700 hover:bg-yellow-600 text-white font-semibold">Anunciar Imóvel</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

