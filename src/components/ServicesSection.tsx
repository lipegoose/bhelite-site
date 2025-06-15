
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "Anuncie seu Imóvel!",
      subtitle: "Vamos Alugar ou Vender?",
      description: "Anuncie seu imóvel com quem ama e conhece cada cantinho da nossa cidade. Você terá uma consultoria completa e dedicada para lhe acompanhar em todas as etapas.",
      buttonText: "Anunciar Imóvel →"
    },
    {
      title: "Buscamos seu Imóvel!",
      subtitle: "Não Achou?",
      description: "Ainda não achou o imóvel que estava procurando? Conte-nos como é o imóvel que você procura e deixe com a equipe BH Elite Imobiliária que encontraremos rapidamente para você.",
      buttonText: "Encontre meu Imóvel →"
    },
    {
      title: "Receba sua Consultoria!",
      subtitle: "Quer Financiar?",
      description: "Não é apenas um simulador de financiamento, é uma consultoria one-to-one completa para facilitar ainda mais a sua vida e lhe ajudar a realizar o seu sonho.",
      buttonText: "Iniciar Consultoria →"
    }
  ];

  return (
    <section id="servicos" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Conheça as Soluções da BH Elite Imobiliária
          </h2>
          <p className="text-lg text-gray-600">
            Oportunidades para quem quer vender, alugar ou comprar imóveis em Belo Horizonte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <p className="text-sm text-gray-500 mb-2">{service.subtitle}</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <Button className="bg-[#CC9933] hover:bg-[#B8852E] text-white px-6 py-2">
                  {service.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
