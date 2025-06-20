
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mb-8">
          <a href="https://www.facebook.com/profile.php?id=61577307390837" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#CC9933] hover:text-white transition-colors shadow">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/bheliteimoveis" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#CC9933] hover:text-white transition-colors shadow">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://www.youtube.com/@BHELITE" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#CC9933] hover:text-white transition-colors shadow">
            <Youtube className="w-5 h-5" />
          </a>
          <a href="https://www.tiktok.com/@bheliteimoveis" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#CC9933] hover:text-white transition-colors shadow">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Institucional */}
          <div>
            <h3 className="font-bold mb-4">INSTITUCIONAL</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#CC9933] transition-colors">Quem Somos</a></li>
              <li><a href="#" className="hover:text-[#CC9933] transition-colors">Trabalhe Conosco</a></li>
              <li><a href="#" className="hover:text-[#CC9933] transition-colors">Portal do Corretor</a></li>
            </ul>
          </div>

          {/* Quero Alugar */}
          <div>
            <h3 className="font-bold mb-4">QUERO ALUGAR</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#CC9933] transition-colors">Residencial</a></li>
              <li><a href="#" className="hover:text-[#CC9933] transition-colors">Comercial</a></li>
              <li><a href="#" className="hover:text-[#CC9933] transition-colors">Encontre Meu Imóvel</a></li>
              <li><a href="#" className="hover:text-[#CC9933] transition-colors">Cadastro Locação</a></li>
            </ul>
          </div>

          {/* Quero Comprar */}
          <div>
            <h3 className="font-bold mb-4">QUERO COMPRAR</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#CC9933] transition-colors">Residencial</a></li>
              <li><a href="#" className="hover:text-[#CC9933] transition-colors">Comercial</a></li>
              <li><a href="#" className="hover:text-[#CC9933] transition-colors">Lançamento</a></li>
              <li><a href="#" className="hover:text-[#CC9933] transition-colors">Encontre Meu Imóvel</a></li>
              <li><a href="#" className="hover:text-[#CC9933] transition-colors">Simular Financiamento</a></li>
            </ul>
          </div>

          {/* Área do Cliente */}
          <div>
            <h3 className="font-bold mb-4">ÁREA DO CLIENTE</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#CC9933] transition-colors">Anunciar Imóvel</a></li>
              <li><a href="#" className="hover:text-[#CC9933] transition-colors">2ª Via de Boleto</a></li>
              <li><a href="#" className="hover:text-[#CC9933] transition-colors">Extrato Proprietário</a></li>
              <li><a href="#" className="hover:text-[#CC9933] transition-colors">Fundo de reservas e taxas</a></li>
              <li><a href="#" className="hover:text-[#CC9933] transition-colors">Contestações de vistoria</a></li>
              <li><a href="#" className="hover:text-[#CC9933] transition-colors">Aviso de desocupação</a></li>
            </ul>
          </div>

          {/* Social Widget */}
          <div className="lg:col-span-1">
            <div className="bg-[#CC9933] p-4 rounded text-white text-center">
              <div className="text-sm mb-2">BH Elite Imobiliária</div>
              <div className="text-xs">273 seguidores</div>
              <button className="bg-white text-[#CC9933] px-3 py-1 rounded text-xs mt-2 hover:bg-gray-100 transition-colors">
                Seguir Página
              </button>
            </div>
          </div>
        </div>

        {/* Endereço Único */}
        <div className="mt-12 text-center">
          <div>
            <h4 className="font-bold mb-2">BH Elite Imobiliária</h4>
            <p className="text-sm text-gray-600">
              📍 Rua Ramalhete, 475<br />
              Mangabeiras - Belo Horizonte/MG.<br />
              CRECI: 2392 F
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src="/imgs/logo-bhelite.png" 
                alt="BH Elite Imobiliária" 
                className="h-16 w-auto mr-4"
              />
            </div>
            <div className="text-center">
              <p>BH Elite Imobiliária. CRECI 2392 © 2025</p>
              <p className="text-xs mt-1">
                <a href="#" className="hover:text-[#CC9933] transition-colors">Política de privacidade</a> | 
                <a href="#" className="hover:text-[#CC9933] transition-colors ml-1">Termos de uso</a>
              </p>
              <p className="text-xs mt-1">
                Feito com ❤️ pelo time da <a href="https://hera-i.com.br/" className="inline-flex items-center align-bottom" target="_blank" rel="noopener noreferrer" title="HeRa-i"><img src="https://hera-i.com.br/imgs/logo.png" alt="HeRa-i" className="h-5 hover:opacity-80 transition-opacity ml-1" /></a> | Site para imobiliária
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
