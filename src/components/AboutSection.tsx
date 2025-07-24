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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer with 5+ years of experience building scalable web applications 
            and digital solutions that make a real impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Started my journey in web development with a curiosity for how things work behind the scenes. 
              Over the years, I've evolved from writing simple HTML pages to architecting complex, 
              scalable applications that serve thousands of users.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date with the latest 
              technologies and best practices. My goal is to create solutions that not only work 
              well but are also enjoyable to use and maintain.
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
              <h3 className="text-2xl font-semibold mb-6">Core Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                    <skill.icon className={`h-6 w-6 ${skill.color}`} />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="glass-card p-6 text-center hover-lift">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </Card>
          <Card className="glass-card p-6 text-center hover-lift">
            <div className="text-3xl font-bold text-accent mb-2">5+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </Card>
          <Card className="glass-card p-6 text-center hover-lift">
            <div className="text-3xl font-bold text-primary mb-2">100k+</div>
            <div className="text-muted-foreground">Lines of Code</div>
          </Card>
          <Card className="glass-card p-6 text-center hover-lift">
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-muted-foreground">Learning Mode</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;