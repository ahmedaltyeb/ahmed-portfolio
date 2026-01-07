import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useInView } from "@/hooks/useInView";

const projects = [
  {
    id: 1,
    title: "React Analytics Dashboard",
    category: "React",
    description:
      "A comprehensive analytics dashboard with real-time data visualization, interactive charts, and performance metrics tracking.",
    problem: "Businesses needed a centralized platform to monitor KPIs in real-time.",
    solution: "Built a responsive dashboard with dynamic charts, filters, and export functionality.",
    tech: ["React.js", "TypeScript", "TailwindCSS", "Recharts", "REST API"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Loof Boutique E-commerce",
    category: "E-commerce",
    description:
      "A modern e-commerce frontend for a fashion boutique with product filtering, cart management, and checkout flow.",
    problem: "The boutique needed a user-friendly online presence to showcase and sell products.",
    solution: "Developed a responsive storefront with smooth animations and optimized performance.",
    tech: ["React.js", "TailwindCSS", "Context API", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Admin Panel UI Kit",
    category: "UI/Dashboard",
    description:
      "A comprehensive admin panel with user management, data tables, and analytics widgets.",
    problem: "Teams needed a reusable admin interface with consistent design patterns.",
    solution: "Created a modular component library with dark mode and responsive layouts.",
    tech: ["React.js", "TypeScript", "Shadcn UI", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Corporate Landing Page",
    category: "Landing Page",
    description:
      "SEO-optimized landing page for a corporate client with smooth animations and contact forms.",
    problem: "Company needed a professional web presence to attract B2B clients.",
    solution: "Built a fast-loading, SEO-friendly landing page with lead generation forms.",
    tech: ["React.js", "TailwindCSS", "Framer Motion", "SEO"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Task Management App",
    category: "React",
    description:
      "A Kanban-style task management application with drag-and-drop, filters, and team collaboration.",
    problem: "Teams needed an intuitive way to track and manage project tasks.",
    solution: "Developed a drag-and-drop interface with real-time updates and status tracking.",
    tech: ["React.js", "TypeScript", "DnD Kit", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const categories = ["All", "React", "E-commerce", "UI/Dashboard", "Landing Page"];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const { ref, isInView } = useInView(0.1);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in building modern web applications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group glass-card overflow-hidden hover-lift"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform"
                    aria-label="Live demo"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform"
                    aria-label="GitHub repository"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-4 mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="group">
            View All Projects
            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
