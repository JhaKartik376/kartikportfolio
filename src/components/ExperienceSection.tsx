import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "TechSolutions Inc",
    role: "Full Stack Developer",
    duration: "2022 - Present",
    location: "Remote",
    type: "Full-time",
    description: [
      "Developed responsive web applications using React and Node.js",
      "Built RESTful APIs and integrated third-party services",
      "Implemented modern UI/UX designs with Tailwind CSS",
      "Collaborated in agile development environment"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "JavaScript"],
    achievements: [
      "Successfully delivered 10+ client projects",
      "Improved application performance by 30%",
      "Maintained high code quality standards"
    ]
  },
  {
    id: 2,
    company: "WebCraft Studios",
    role: "Frontend Developer",
    duration: "2021 - 2022",
    location: "India",
    type: "Full-time",
    description: [
      "Created responsive websites using HTML, CSS, and JavaScript",
      "Worked with design team to implement pixel-perfect interfaces",
      "Optimized websites for better performance and SEO",
      "Maintained and updated existing client websites"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "SCSS", "Bootstrap"],
    achievements: [
      "Delivered 15+ responsive websites",
      "Improved client website loading speeds by 40%",
      "Achieved 95% client satisfaction rate"
    ]
  },
  {
    id: 3,
    company: "Freelance Projects",
    role: "Web Developer",
    duration: "2020 - 2021",
    location: "Remote",
    type: "Freelance",
    description: [
      "Built custom websites for small businesses and startups",
      "Developed e-commerce solutions and portfolio websites",
      "Provided ongoing maintenance and support services",
      "Worked directly with clients to understand requirements"
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "MySQL", "HTML", "CSS"],
    achievements: [
      "Completed 20+ freelance projects successfully",
      "Built strong client relationships and repeat business",
      "Gained experience in project management and client communication"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Experience
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My professional journey in web development, from freelance projects to full-time roles, 
            building modern applications and delivering quality solutions.
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
                      <h3 className="text-xl md:text-2xl font-bold mb-2">{experience.role}</h3>
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