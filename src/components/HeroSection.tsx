
import { Search, MapPin, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <section 
      id="inicio"
      className="relative py-24"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          A MELHOR IMOBILIÁRIA DE
          <br />
          <span className="text-yellow-400">BELO HORIZONTE</span>
        </h1>
        
        <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
          Encontre o imóvel dos seus sonhos com a BH Elite. 
          Mais de 10 anos de experiência no mercado imobiliário de Belo Horizonte.
        </p>

        {/* Search Form */}
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Tipo de Imóvel
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <option>Apartamento</option>
                <option>Casa</option>
                <option>Terreno</option>
                <option>Comercial</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Localização
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                <Input 
                  placeholder="Bairro ou região" 
                  className="pl-10 focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Valor Máximo
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                <Input 
                  placeholder="R$ 500.000" 
                  className="pl-10 focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
            </div>
            
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white h-10 px-8">
              <Search className="w-5 h-5 mr-2" />
              Buscar
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-white">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-lg">Imóveis Vendidos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">10+</div>
            <div className="text-lg">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">1000+</div>
            <div className="text-lg">Clientes Satisfeitos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
