import { AboutSection } from "./components/AboutSection";
import { CompanySection } from "./components/CompanySection";
import { ContactSection } from "./components/ContactSection";
import CustomCursor from "./components/CustomCursor";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ServicesSection } from "./components/ServicesSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background">

      <CustomCursor></CustomCursor>
      <Header />
      <HeroSection />
      <AboutSection />
      <CompanySection/>
      <ServicesSection />
      <ProjectsSection />
      <ContactSection/>
      <Footer/>
    </div>
  );
}