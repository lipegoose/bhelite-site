
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mb-8">
          <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors shadow">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors shadow">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors shadow">
            <Youtube className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors shadow">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Institucional */}
          <div>
            <h3 className="font-bold mb-4">INSTITUCIONAL</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Quem Somos</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Trabalhe Conosco</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Portal do Corretor</a></li>
            </ul>
          </div>

          {/* Quero Alugar */}
          <div>
            <h3 className="font-bold mb-4">QUERO ALUGAR</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Residencial</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Comercial</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Encontre Meu Imóvel</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Cadastro Locação</a></li>
            </ul>
          </div>

          {/* Quero Comprar */}
          <div>
            <h3 className="font-bold mb-4">QUERO COMPRAR</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Residencial</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Comercial</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Lançamento</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Encontre Meu Imóvel</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Simular Financiamento</a></li>
            </ul>
          </div>

          {/* Área do Cliente */}
          <div>
            <h3 className="font-bold mb-4">ÁREA DO CLIENTE</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Anunciar Imóvel</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">2ª Via de Boleto</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Extrato Proprietário</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Fundo de reservas e taxas</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Contestações de vistoria</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Aviso de desocupação</a></li>
            </ul>
          </div>

          {/* Social Widget */}
          <div className="lg:col-span-1">
            <div className="bg-orange-500 p-4 rounded text-white text-center">
              <div className="text-sm mb-2">BH Elite Imobiliária</div>
              <div className="text-xs">273 seguidores</div>
              <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs mt-2">
                Seguir Página
              </button>
            </div>
          </div>
        </div>

        {/* Unidades */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="font-bold mb-2">Unidade Class: Mangabeiras</h4>
            <p className="text-sm text-gray-600">
              📍 Rua Ramalhete, 475<br />
              Mangabeiras - Belo Horizonte/MG.<br />
              CRECI: 2392 F
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Unidade Class: Vila da Serra</h4>
            <p className="text-sm text-gray-600">
              📍 Alameda Oscar Niemeyer 288<br />
              loja 01<br />
              Vale do Sereno Nova Lima/MG.<br />
              CRECI 9023
            </p>
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <div className="grid grid-cols-2 gap-4 text-left">
              <div>
                <h5 className="font-bold text-sm mb-1">Unidade Floresta</h5>
                <p className="text-xs text-gray-600">
                  📍 Rua Dona Maria Ignez, 219<br />
                  Floresta - Belo Horizonte/MG.<br />
                  CRECI: 2392
                </p>
              </div>
              <div>
                <h5 className="font-bold text-sm mb-1">Unidade Silveira</h5>
                <p className="text-xs text-gray-600">
                  📍 Rua Ilacir Pereira Lima, 661<br />
                  Silveira - Belo Horizonte/MG.<br />
                  CRECI: 3289
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-left mt-4">
              <div>
                <h5 className="font-bold text-sm mb-1">Unidade Palmares</h5>
                <p className="text-xs text-gray-600">
                  📍 Rua José Cleto, 200 - Loja 2<br />
                  Palmares - Belo Horizonte/MG.<br />
                  CRECI: 08402
                </p>
              </div>
              <div>
                <h5 className="font-bold text-sm mb-1">Unidade Castelo</h5>
                <p className="text-xs text-gray-600">
                  📍 Av. Miguel Perrela, 47<br />
                  Castelo - Belo Horizonte/MG.<br />
                  CRECI: 3650
                </p>
              </div>
            </div>
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
                className="h-8 w-auto mr-4"
              />
            </div>
            <div className="text-center">
              <p>BH Elite Imobiliária. CRECI 2392 © 2025</p>
              <p className="text-xs mt-1">
                <a href="#" className="hover:text-gray-300">Política de privacidade</a> | 
                <a href="#" className="hover:text-gray-300 ml-1">Termos de uso</a>
              </p>
              <p className="text-xs mt-1">
                Feito com ❤️ pelo time da RocketImob | Site para imobiliária
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
