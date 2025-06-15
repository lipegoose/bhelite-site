
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const blogPosts = [
    {
      day: "06",
      month: "Mar",
      title: "Recursos Tecnológicos Como Diferencial Em Imóveis Para Locação",
      excerpt: "O constante desenvolvimento tecnológico possibilitou que tarefas antes unicamente analógicas fossem tomadas pelo digital. Hoje em dia é difícil imaginar [...]",
      categories: ["Atualizar", "Aluguel de Imóveis"],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      day: "12",
      month: "Fev",
      title: "Mercado Imobiliário Em 2025: O Que Esperar No Primeiro Semestre?",
      excerpt: "O mercado imobiliário brasileiro entra em 2025 com expectativas otimistas e novas tendências que prometem transformar a forma como as [...]",
      categories: ["Mercado Imobiliário", "Mercado Imobiliário 2025"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      day: "28",
      month: "Jan",
      title: "Comprar Ou Alugar: O Que É Melhor?",
      excerpt: "A decisão entre comprar ou alugar um imóvel sempre foi um tema central nas finanças pessoais e planejamento familiar. Com [...]",
      categories: ["Mercado Imobiliário", "Mercado Imobiliário 2025"],
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section id="blog" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Já Conhece o Blog da <span className="text-[#CC9933]">BH Elite</span> Imobiliária?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Informações para quem quer comprar, vender ou alugar um imóvel e dicas dos melhores lugares de Belo Horizonte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-black text-white p-2 text-center">
                  <div className="text-lg font-bold">{post.day}</div>
                  <div className="text-sm">{post.month}</div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex gap-2 mb-3">
                  {post.categories.map((category, catIndex) => (
                    <span key={catIndex} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {category}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#CC9933] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <button className="text-gray-800 font-medium text-sm hover:text-[#CC9933] transition-colors">
                  LEIA MAIS
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3">
            VER MAIS ARTIGOS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
