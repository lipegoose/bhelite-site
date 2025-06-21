
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
              Quem toca isso aqui sou eu mesmo, uai!
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Sou o <span className="text-[#CC9933] font-semibold">Danilo</span>, corretor de imóveis há mais de 10 anos, especialista em venda e locação na região Centro-Sul de BH – de Lourdes à Sion, do Gutierrez à Savassi, eu conheço tudo como a palma da mão.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Já fui sócio de imobiliária grande, mas agora resolvi fazer diferente: atendimento direto, humano, sem blá-blá-blá nem empurra-empurra. Aqui na <span className="text-[#CC9933] font-semibold">BH Elite</span>, você não fala com assistente nem chatbot — fala comigo mesmo.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Gosto de escutar mais do que falar, entender o que cê realmente procura, e correr atrás com estratégia, olho clínico e aquele jeitinho mineiro de resolver tudo sem estresse.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Se quiser vender, alugar ou achar um cantinho novo pra morar, bora conversar. Aqui o negócio é sério, mas o atendimento é leve e com café passado na hora. ☕
            </p>
            <Button className="bg-[#CC9933] hover:bg-[#B8852E] text-white px-8 py-3">
              Conheça a <span className="font-semibold">BH Elite</span> Imobiliária →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
