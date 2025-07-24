import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <div id="home">
          <HeroSection />
        </div>
        
        <AboutSection />
        <ProjectsSection />
        <TechStackSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-secondary/20 py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-sm md:text-base">
            © 2024 Kartik Jha. All rights reserved. Built with React, TypeScript & Tailwind CSS
          </p>
          <p className="text-muted-foreground/70 text-xs mt-2">
            Designed & Developed with ❤️ by Kartik Jha
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
