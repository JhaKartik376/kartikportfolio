import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  Palette,
  Brain,
  Zap
} from "lucide-react";

const skills = [
  { name: "Frontend Development", icon: Globe, color: "text-blue-400" },
  { name: "Backend Development", icon: Server, color: "text-green-400" },
  { name: "Mobile Development", icon: Smartphone, color: "text-purple-400" },
  { name: "Database Design", icon: Database, color: "text-orange-400" },
  { name: "UI/UX Design", icon: Palette, color: "text-pink-400" },
  { name: "Problem Solving", icon: Brain, color: "text-yellow-400" },
  { name: "Performance Optimization", icon: Zap, color: "text-red-400" },
  { name: "Clean Code", icon: Code2, color: "text-cyan-400" },
];

const technologies = [
  "React", "TypeScript", "Node.js", "Python", "Next.js", "Express",
  "PostgreSQL", "MongoDB", "AWS", "Docker", "Git", "Tailwind CSS",
  "GraphQL", "Redis", "Jest", "Cypress", "Figma", "Three.js"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hi, I'm Kartik Jha, a passionate Full Stack Developer with expertise in modern web technologies. 
            I love creating innovative solutions and turning complex problems into elegant, user-friendly experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              My journey as a developer began with curiosity and has evolved into a passion for creating 
              meaningful digital experiences. I specialize in building scalable web applications using 
              modern technologies like React, Node.js, and cloud platforms.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I believe in writing clean, maintainable code and staying updated with the latest industry trends. 
              My goal is to create solutions that not only function perfectly but also provide exceptional 
              user experiences and drive business growth.
            </p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="hover-lift">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="animate-slide-in-right">
            <Card className="glass-card p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-6">Core Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                    <skill.icon className={`h-5 w-5 md:h-6 md:w-6 ${skill.color}`} />
                    <span className="text-sm md:text-base font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <Card className="glass-card p-4 md:p-6 text-center hover-lift">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-muted-foreground text-xs md:text-sm">Projects Completed</div>
          </Card>
          <Card className="glass-card p-4 md:p-6 text-center hover-lift">
            <div className="text-2xl md:text-3xl font-bold text-accent mb-2">3+</div>
            <div className="text-muted-foreground text-xs md:text-sm">Years Experience</div>
          </Card>
          <Card className="glass-card p-4 md:p-6 text-center hover-lift">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">50k+</div>
            <div className="text-muted-foreground text-xs md:text-sm">Lines of Code</div>
          </Card>
          <Card className="glass-card p-4 md:p-6 text-center hover-lift">
            <div className="text-2xl md:text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-muted-foreground text-xs md:text-sm">Learning Mode</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;