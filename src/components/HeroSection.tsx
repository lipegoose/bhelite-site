import { Search, MapPin, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <section 
      id="inicio"
      className="relative py-32 min-h-[80vh] flex items-center"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center w-full">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight font-normal">
          <span className="font-['Bell_MT']">BH ELITE</span>
          <br />
          <span className="text-3xl lg:text-4xl">Especialista em venda e locação de imóveis em BH</span>
        </h1>

        {/* Search Form */}
        <div className="bg-white bg-opacity-20 rounded-lg p-6 max-w-6xl mx-auto shadow-2xl mt-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            <div>
              <select className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#CC9933] focus:border-[#CC9933] bg-white">
                <option>VENDA</option>
                <option>LOCAÇÃO</option>
              </select>
            </div>
            
            <div>
              <select className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#CC9933] focus:border-[#CC9933] bg-white">
                <option>APARTAMENTO</option>
                <option>CASA</option>
                <option>TERRENO</option>
                <option>COMERCIAL</option>
              </select>
            </div>
            
            <div>
              <select className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#CC9933] focus:border-[#CC9933] bg-white">
                <option>BELO HORIZONTE</option>
                <option>NOVA LIMA</option>
              </select>
            </div>
            
            <div>
              <Input 
                placeholder="BAIRRO" 
                className="px-4 py-3 focus:ring-[#CC9933] focus:border-[#CC9933]"
              />
            </div>
            
            <Button className="bg-[#CC9933] hover:bg-[#B8852E] text-white px-8 py-3 h-auto">
              BUSCAR
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <button className="text-[#CC9933] font-medium drop-shadow-sm hover:underline flex items-center gap-1 transition-colors">
              <span>≡</span> Avançado
            </button>
            <button className="text-[#CC9933] font-medium drop-shadow-sm hover:underline flex items-center gap-1 transition-colors">
              <span>#</span> Por código
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
