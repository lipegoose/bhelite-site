
import { Button } from "@/components/ui/button";
import { Award, Users, TrendingUp, Shield } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Excelência",
      description: "Mais de 10 anos de experiência no mercado imobiliário"
    },
    {
      icon: Users,
      title: "Atendimento",
      description: "Equipe especializada e atendimento personalizado"
    },
    {
      icon: TrendingUp,
      title: "Resultados",
      description: "Histórico comprovado de sucesso em vendas e locações"
    },
    {
      icon: Shield,
      title: "Confiança",
      description: "Transparência e segurança em todas as transações"
    }
  ];

  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Quem é a <span className="text-yellow-600">BH Elite</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A BH Elite Imobiliária é uma empresa especializada no mercado imobiliário de 
              Belo Horizonte e região metropolitana. Com mais de uma década de experiência, 
              oferecemos soluções completas para compra, venda e locação de imóveis.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nossa missão é conectar pessoas aos seus sonhos, proporcionando experiências 
              excepcionais em cada transação imobiliária. Contamos com uma equipe de 
              profissionais altamente qualificados e especializados.
            </p>
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3">
              Conheça Nossa História
            </Button>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Equipe BH Elite"
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-yellow-600 text-white p-6 rounded-lg shadow-xl">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm">Imóveis Vendidos</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                <feature.icon className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
