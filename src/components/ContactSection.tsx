import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  MessageSquare 
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "kartikjha376@gmail.com",
    href: "mailto:kartikjha376@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9534843079",
    href: "tel:+919534843079"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: "#"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/jhakartik376",
    color: "hover:text-white"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kartik-jha-21956b1a1/",
    color: "hover:text-blue-400"
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/kartikjha_dev",
    color: "hover:text-blue-400"
  }
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <Card className="glass-card p-8 mb-8">
              <div className="flex items-center mb-6">
                <MessageSquare className="h-6 w-6 md:h-8 md:w-8 text-primary mr-3" />
                <h3 className="text-xl md:text-2xl font-semibold">Let's Talk</h3>
              </div>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, creative projects, 
                or just having a friendly chat about technology and development.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-primary/20 mr-4 group-hover:bg-primary/30 transition-colors">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{info.label}</div>
                      <div className="text-muted-foreground text-sm">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 glass-card hover-lift group ${social.color} transition-colors`}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="glass-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="mt-2"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="mt-2 resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full hover-glow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;