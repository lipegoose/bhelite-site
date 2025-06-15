
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Como Escolher o Bairro Ideal em Belo Horizonte",
      excerpt: "Descubra os principais fatores a considerar na hora de escolher onde morar na capital mineira.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "15 Nov 2024",
      readTime: "5 min"
    },
    {
      title: "Mercado Imobiliário em 2024: Tendências e Oportunidades",
      excerpt: "Análise completa das tendências do mercado imobiliário para o ano de 2024 em BH.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "10 Nov 2024",
      readTime: "7 min"
    },
    {
      title: "Documentação para Compra de Imóvel: Guia Completo",
      excerpt: "Tudo que você precisa saber sobre a documentação necessária para comprar seu imóvel.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "05 Nov 2024",
      readTime: "6 min"
    },
    {
      title: "Investir em Imóveis: Dicas para Iniciantes",
      excerpt: "Primeiros passos para quem quer começar a investir no mercado imobiliário.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "01 Nov 2024",
      readTime: "8 min"
    }
  ];

  return (
    <section id="blog" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Blog da <span className="text-yellow-600">BH Elite</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fique por dentro das últimas notícias, dicas e tendências do mercado 
            imobiliário de Belo Horizonte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-yellow-600 font-medium group-hover:gap-3 transition-all">
                  <span>Ler mais</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3">
            Ver Todos os Artigos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
