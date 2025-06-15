import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Search, MessageCircle, Key, PlusCircle, Users } from "lucide-react";

const ServicesSection = () => {
  const mainServices = [
    {
      icon: PlusCircle,
      title: "Anunciar Imóvel",
      description: "Anuncie seu imóvel conosco e alcance milhares de interessados com nossa expertise em marketing digital.",
      features: ["Avaliação gratuita", "Fotos profissionais", "Marketing digital", "Acompanhamento personalizado"],
      color: "bg-yellow-600"
    },
    {
      icon: Search,
      title: "Buscar Imóvel",
      description: "Encontre o imóvel perfeito com nossa curadoria especializada e atendimento personalizado.",
      features: ["Busca personalizada", "Visitas agendadas", "Análise de documentação", "Negociação especializada"],
      color: "bg-yellow-600"
    },
    {
      icon: MessageCircle,
      title: "Consultoria Especializada",
      description: "Receba orientação completa sobre investimentos imobiliários e tomada de decisões estratégicas.",
      features: ["Análise de mercado", "Consultoria de investimento", "Orientação jurídica", "Planejamento financeiro"],
      color: "bg-yellow-600"
    }
  ];

  const additionalServices = [
    {
      icon: Key,
      title: "Administração de Imóveis",
      description: "Gestão completa do seu patrimônio"
    },
    {
      icon: Home,
      title: "Avaliação Imobiliária",
      description: "Laudos técnicos e avaliações precisas"
    },
    {
      icon: Users,
      title: "Assessoria Jurídica",
      description: "Suporte legal em todas as transações"
    }
  ];

  return (
    <section id="servicos" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Conheça as Soluções da <span className="text-yellow-600">BH Elite</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos serviços completos para todas as suas necessidades imobiliárias, 
            com excelência e profissionalismo em cada etapa.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Serviços Adicionais
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                  <service.icon className="w-6 h-6 text-yellow-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
