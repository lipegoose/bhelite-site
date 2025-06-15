
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <img 
                src="/lovable-uploads/185efedd-8775-45c1-972d-52844c78aad9.png" 
                alt="BH Elite Imobiliária" 
                className="h-20 w-auto mb-4"
              />
              <p className="text-gray-300 leading-relaxed">
                A BH Elite é especializada no mercado imobiliário de Belo Horizonte, 
                oferecendo excelência em serviços de compra, venda e locação.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center hover:bg-yellow-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center hover:bg-yellow-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center hover:bg-yellow-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-300 hover:text-yellow-400 transition-colors">Início</a></li>
              <li><a href="#imoveis" className="text-gray-300 hover:text-yellow-400 transition-colors">Imóveis</a></li>
              <li><a href="#sobre" className="text-gray-300 hover:text-yellow-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-yellow-400 transition-colors">Serviços</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-yellow-400 transition-colors">Blog</a></li>
              <li><a href="#contato" className="text-gray-300 hover:text-yellow-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Venda de Imóveis</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Locação</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Consultoria</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Avaliação</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Administração</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Financiamento</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Rua da Bahia, 1200 - Centro<br />
                    Belo Horizonte - MG<br />
                    CEP: 30160-011
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <p className="text-gray-300">(31) 3024-4555</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <p className="text-gray-300">contato@bhelite.com.br</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-yellow-400 mt-1" />
                <div>
                  <p className="text-gray-300">
                    Segunda à Sexta: 8h às 18h<br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 BH Elite Imobiliária. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                CRECI: 12345-J
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
