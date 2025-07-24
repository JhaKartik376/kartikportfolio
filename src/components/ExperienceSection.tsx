import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "TechCorp Solutions",
    role: "Senior Full Stack Developer",
    duration: "2022 - Present",
    location: "San Francisco, CA",
    type: "Full-time",
    description: [
      "Lead development of microservices architecture serving 500K+ users",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews",
      "Built real-time analytics dashboard with React and D3.js"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "TypeScript"],
    achievements: [
      "Improved application performance by 40%",
      "Reduced bug reports by 70% through comprehensive testing",
      "Led team of 5 developers on major product launch"
    ]
  },
  {
    id: 2,
    company: "StartupXYZ",
    role: "Frontend Developer",
    duration: "2020 - 2022",
    location: "Remote",
    type: "Full-time",
    description: [
      "Developed responsive web applications using React and Next.js",
      "Collaborated with design team to implement pixel-perfect UI/UX",
      "Optimized application bundle size by 50% using code splitting",
      "Integrated third-party APIs and payment gateways"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Stripe", "Firebase"],
    achievements: [
      "Increased user engagement by 35%",
      "Successfully launched 3 major product features",
      "Maintained 99.9% uptime for production applications"
    ]
  },
  {
    id: 3,
    company: "Digital Agency Pro",
    role: "Web Developer",
    duration: "2019 - 2020",
    location: "New York, NY",
    type: "Full-time",
    description: [
      "Built custom WordPress themes and plugins for client projects",
      "Developed e-commerce solutions using WooCommerce and Shopify",
      "Implemented SEO best practices improving client rankings",
      "Created responsive designs for 20+ client websites"
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "MySQL", "SCSS"],
    achievements: [
      "Delivered 25+ client projects on time and within budget",
      "Improved client website speeds by average of 45%",
      "Maintained 98% client satisfaction rate"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey building scalable applications and leading development teams 
            across various industries and company sizes.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block animate-pulse-glow"></div>
                
                <Card className="glass-card ml-0 md:ml-20 p-8 hover-lift">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-2xl font-bold mb-2">{experience.role}</h3>
                      <div className="flex items-center text-primary mb-2">
                        <Building className="h-4 w-4 mr-2" />
                        <span className="font-semibold">{experience.company}</span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {experience.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {experience.location}
                        </div>
                        <Badge variant="secondary">{experience.type}</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="hover-lift">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;