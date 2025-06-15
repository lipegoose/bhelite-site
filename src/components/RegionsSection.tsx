
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const RegionsSection = () => {
  const regions = [
    {
      name: "Pampulha",
      description: "Região nobre com lagoa, museus e arquitetura moderna",
      image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      properties: "150+ imóveis"
    },
    {
      name: "Floresta",
      description: "Bairro tradicional com boa infraestrutura e acessibilidade",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      properties: "200+ imóveis"
    },
    {
      name: "Centro-Sul",
      description: "Região central com comércio, serviços e facilidades",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      properties: "300+ imóveis"
    },
    {
      name: "Nova Lima",
      description: "Cidade metropolitana com alto padrão de vida",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      properties: "100+ imóveis"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Principais Regiões de Atuação
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Atuamos nas melhores regiões de Belo Horizonte e região metropolitana, 
            oferecendo as melhores oportunidades do mercado imobiliário.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={region.image} 
                  alt={region.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">{region.properties}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                  {region.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {region.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionsSection;
