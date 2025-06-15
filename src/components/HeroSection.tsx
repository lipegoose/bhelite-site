
import { Search, MapPin, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <section 
      id="inicio"
      className="relative py-24 bg-gradient-to-b from-black to-neutral-800 min-h-[70vh] flex items-center"
    >
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
          A MELHOR IMOBILIÁRIA DE
          <br />
          <span className="text-yellow-400">BELO HORIZONTE</span>
        </h1>
        <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto font-medium drop-shadow">
          Encontre o imóvel dos seus sonhos com a BH Elite. 
          Mais de 10 anos de experiência no mercado imobiliário de Belo Horizonte.
        </p>

        {/* Search Form formatado para destaque */}
        <div className="bg-white/95 backdrop-blur-sm rounded shadow-2xl p-5 max-w-2xl w-full border-2 border-white/80 mx-auto mb-2">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 transition-all shadow">
                <option>Apartamento</option>
                <option>Casa</option>
                <option>Terreno</option>
                <option>Comercial</option>
              </select>
            </div>
            <div>
              <div className="relative">
                <MapPin className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                <Input 
                  placeholder="Bairro ou região" 
                  className="pl-10 focus:ring-yellow-500 focus:border-yellow-500 bg-white"
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <DollarSign className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                <Input 
                  placeholder="R$ 500.000" 
                  className="pl-10 focus:ring-yellow-500 focus:border-yellow-500 bg-white"
                />
              </div>
            </div>
            <Button className="bg-yellow-700 hover:bg-yellow-600 text-white h-10 px-8 font-semibold rounded">
              <Search className="w-5 h-5 mr-2" />
              Buscar
            </Button>
          </div>
        </div>
        {/* Simples estatísticas removidas para deixar mais parecido com referência.
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-white">
          ... keep existing code (estatísticas) the same ...
        </div>
        */}
      </div>
    </section>
  );
};

export default HeroSection;
