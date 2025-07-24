import { Card } from "@/components/ui/card";
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  Cloud,
  Palette,
  GitBranch
} from "lucide-react";

const techCategories = [
  {
    title: "Frontend",
    icon: Globe,
    color: "text-blue-400",
    technologies: [
      "React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", 
      "SCSS", "Framer Motion", "Three.js", "D3.js"
    ]
  },
  {
    title: "Backend",
    icon: Server,
    color: "text-green-400",
    technologies: [
      "Node.js", "Express.js", "Python", "Django", "FastAPI", 
      "GraphQL", "REST APIs", "WebSocket", "Microservices"
    ]
  },
  {
    title: "Database",
    icon: Database,
    color: "text-purple-400",
    technologies: [
      "PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase", 
      "Supabase", "Prisma", "TypeORM", "Elasticsearch"
    ]
  },
  {
    title: "Mobile",
    icon: Smartphone,
    color: "text-pink-400",
    technologies: [
      "React Native", "Expo", "Flutter", "Swift", "Kotlin", 
      "Ionic", "Progressive Web Apps", "Capacitor"
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "text-cyan-400",
    technologies: [
      "AWS", "Vercel", "Docker", "Kubernetes", "CI/CD", 
      "GitHub Actions", "Nginx", "Linux", "Terraform"
    ]
  },
  {
    title: "Design & Tools",
    icon: Palette,
    color: "text-orange-400",
    technologies: [
      "Figma", "Adobe XD", "Photoshop", "Sketch", "Principle", 
      "InVision", "Zeplin", "Abstract", "Miro"
    ]
  }
];

const TechStackSection = () => {
  return (
    <section id="tech-stack" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build 
            robust, scalable, and beautiful digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="glass-card p-8 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-secondary/50 mr-4`}>
                  <category.icon className={`h-8 w-8 ${category.color}`} />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-sm bg-muted/50 rounded-full hover:bg-muted transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Development Philosophy */}
        <Card className="glass-card p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-primary/20">
              <Code2 className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Development Philosophy</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I believe in writing clean, maintainable code that follows best practices and industry standards. 
            My approach focuses on performance optimization, accessibility, and creating intuitive user experiences. 
            I'm always learning and adapting to new technologies while maintaining a solid foundation in proven solutions.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default TechStackSection;