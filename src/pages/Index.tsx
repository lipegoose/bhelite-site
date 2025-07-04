
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import RegionsSection from "../components/RegionsSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div 
        className="relative bg-cover bg-center pt-[80px]"
        style={{ backgroundImage: `url('/imgs/bg-hero.png')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        <div className="relative">
          <HeroSection />
        </div>
      </div>
      <RegionsSection />
      <AboutSection />
      <ServicesSection />
      <BlogSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
