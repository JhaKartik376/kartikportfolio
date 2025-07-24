import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-glow/30 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }}></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-slide-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-shimmer">Kartik Jha</span>
            <br />
            <span className="text-gradient">Full Stack Developer</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with modern technologies. 
            Passionate about clean code, innovative solutions, and bringing ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="hover-glow group w-full sm:w-auto">
              <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:rotate-12 transition-transform" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="hover-lift w-full sm:w-auto">
              <Download className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/kartikjha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass-card hover-lift group"
            >
              <Github className="h-5 w-5 md:h-6 md:w-6 group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://linkedin.com/in/kartikjha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass-card hover-lift group"
            >
              <Linkedin className="h-5 w-5 md:h-6 md:w-6 group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="mailto:kartikjha.dev@gmail.com"
              className="p-3 glass-card hover-lift group"
            >
              <Mail className="h-5 w-5 md:h-6 md:w-6 group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;