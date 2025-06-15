
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Equipe BH Elite"
              className="rounded-lg shadow-xl w-full"
            />
          </div>

          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              O que Fazemos
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A melhor imobiliária de Belo Horizonte e agora também a 
              melhor imobiliária de Nova Lima!
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Na BH Elite Imobiliária, cada imóvel é tratado de forma única e 
              especial. Por isso, conectamos os melhores imóveis aos 
              melhores clientes.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Melhor Imobiliária para comprar, 
              vender ou alugar o seu imóvel em 
              Belo Horizonte.
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Com uma equipe formada por especialistas de cada região, 
              nos qualificamos cada vez mais para lhe assessorar e ajudar 
              a solucionar todas as suas dificuldades no momento da 
              venda ou compra do seu sonhado imóvel.
            </p>
            <Button className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3">
              Conheça a BH Elite Imobiliária →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
