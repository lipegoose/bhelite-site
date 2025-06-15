
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
      <Header />
      <HeroSection />
      <RegionsSection />
      <AboutSection />
      <ServicesSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
