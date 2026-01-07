import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useInView } from "@/hooks/useInView";

// Import project images
import projectLoof from "@/assets/project-loof.png";
import projectKandora from "@/assets/project-kandora.png";
import projectGoldSignature from "@/assets/project-gold-signature.png";
import projectBusiness from "@/assets/project-business-website.png";

const projects = [
  {
    id: 1,
    title: "Loof Boutique E-commerce",
    category: "E-commerce",
    description:
      "Built responsive frontend for an abaya store with product listing, cart management, and mobile-first design.",
    problem: "The boutique needed a modern online presence to showcase and sell luxury abayas.",
    solution: "Developed a responsive storefront with smooth animations, product filtering, and optimized performance.",
    tech: ["React", "TailwindCSS", "JavaScript", "Bootstrap", "REST API"],
    image: projectLoof,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Bait Al Kandora E-commerce",
    category: "E-commerce",
    description:
      "Premium e-commerce platform for traditional menswear with advanced filtering, multilingual support, and booking system.",
    problem: "Needed a sophisticated platform to showcase premium kandora collections with booking capabilities.",
    solution: "Built a full-featured storefront with mega menu navigation, category filtering, and tailor booking integration.",
    tech: ["React.js", "TailwindCSS", "REST API", "i18n"],
    image: projectKandora,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Gold Signature Business Website",
    category: "Business",
    description:
      "Corporate website for a high-quality tailoring service with elegant design and service showcase.",
    problem: "Business needed a professional web presence to attract clients and showcase tailoring services.",
    solution: "Created an elegant, responsive website with smooth animations, portfolio showcase, and contact integration.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "SEO"],
    image: projectGoldSignature,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Corporate Service Center",
    category: "Business",
    description:
      "Bilingual corporate website with service center information, multilingual support, and modern UI.",
    problem: "Company needed a professional bilingual website to serve Arabic and English speaking customers.",
    solution: "Built a responsive corporate site with RTL support, service pages, and contact integration.",
    tech: ["React.js", "CSS3", "JavaScript", "i18n", "SEO"],
    image: projectBusiness,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "React Analytics Dashboard",
    category: "React",
    description:
      "Admin dashboard with data visualization, interactive charts, and performance metrics tracking.",
    problem: "Businesses needed a centralized platform to monitor KPIs in real-time.",
    solution: "Built a responsive dashboard with dynamic charts, filters, and export functionality.",
    tech: ["React.js", "TypeScript", "TailwindCSS", "Chart.js", "REST API"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "POS & Invoice Management",
    category: "Python",
    description:
      "Desktop POS system with invoice generation, inventory tracking, and PDF export capabilities.",
    problem: "Retail business needed an efficient point-of-sale system with invoice management.",
    solution: "Built a desktop application with intuitive UI, database integration, and PDF invoice generation.",
    tech: ["Python", "Tkinter", "SQLite", "jsPDF"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "Admin Panel UI",
    category: "React",
    description:
      "Interactive admin interface for internal tools with user management, data tables, and analytics widgets.",
    problem: "Teams needed a reusable admin interface with consistent design patterns.",
    solution: "Created a modular component library with dark mode support and responsive layouts.",
    tech: ["React.js", "TailwindCSS", "REST API", "TypeScript"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const categories = ["All", "React", "E-commerce", "Business", "Python"];

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
            Selected <span className="text-primary">Projects</span> & Web Applications
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in building modern, responsive web applications
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
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                  <a
                    href={project.liveUrl}
                    className="p-2.5 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform shadow-lg"
                    aria-label="Live demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2.5 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform shadow-lg"
                    aria-label="GitHub repository"
                    target="_blank"
                    rel="noopener noreferrer"
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
          <Button variant="outline" size="lg" className="group" asChild>
            <a 
              href="https://github.com/ahmed-eltyeb" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View All Projects
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
