
import iotbeatImage from "@/assets/iotbeat.jpg";
import webcraftImage from "@/assets/project-1.jpg";
import bustlersImage from "@/assets/project-3.jpg";

import project2Image from "@/assets/project-2.jpg";
import complyAIImage from "@/assets/comply-ai.jpg";

export const realProjects = [
  {
    id: 1,
    title: "WebCraft – AI-Powered Website Builder",
    description:
      "WebCraft is an AI-powered platform that enables users to generate complete websites by simply typing natural language prompts. It combines the power of AI with modern front-end technologies to streamline website creation—no coding knowledge required.",
    image: webcraftImage,
    technologies: [
      "Next.js",
      "React.js",
      "TailwindCSS",
      "Framer Motion",
      "OpenRouter API",
      "Netlify"
    ],
    liveLink: "https://wwebcraft.netlify.app",
    githubLink: "https://github.com/jhakartik376",
    featured: true
  },
  {
    id: 2,
    title: "Comply – Employee & HR Workflow Automation Platform",
    description:
      "Comply is a full-stack web application designed to automate and streamline workflows for HR departments and employees. It offers an all-in-one platform for managing attendance, payslips, leave applications, and more—making HR operations more efficient and transparent.",
    image: complyAIImage, // Placeholder: generic AI illustration
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "TailwindCSS",
      "Express.js",
      "Node.js",
      "Supabase",
      "PostgreSQL"
    ],
    liveLink: "https://regal-tarsier-ce2e62.netlify.app",
    githubLink: "https://github.com/jhakartik376",
    featured: true
  },
  {
    id: 3,
    title: "Bustlers – Official Company Website",
    description:
      "Bustlers is a modern and responsive official website built for a client to professionally represent their company online. It serves as a digital gateway for showcasing their services, mission, testimonials, and contact information—all within a sleek and user-friendly interface.",
    image: bustlersImage,
    technologies: [
      "JavaScript",
      "TailwindCSS",
      "Figma",
      "Express.js",
      "Node.js"
    ],
    liveLink: "https://bustlers.netlify.app",
    githubLink: "https://github.com/jhakartik376",
    featured: false
  },
  {
    id: 4,
    title: "IoTBeat – Official Company Website",
    description:
      "IoTBeat is a sleek, client-delivered official website crafted to represent the company's digital identity. Focused on modern aesthetics and functionality, the website showcases the company’s mission, services, client engagement model, and contact options—all in a responsive, fast-loading format.",
    image: iotbeatImage,
    technologies: [
      "JavaScript",
      "TailwindCSS",
      "Figma",
      "Express.js",
      "Node.js"
    ],
    liveLink: "https://iotbeat.com",
    githubLink: "Private / Not Available",
    featured: false
  }
];
