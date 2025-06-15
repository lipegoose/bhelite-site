
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import RegionsSection from "../components/RegionsSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div 
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url('/imgs/bg-hero.png')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/60" />
        <Header />
        <HeroSection />
      </div>
      <RegionsSection />
      <AboutSection />
      <ServicesSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
