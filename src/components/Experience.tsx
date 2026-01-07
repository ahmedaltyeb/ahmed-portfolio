import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const experiences = [
  {
    title: "Software Developer",
    company: "Al Arabi Falcons",
    location: "Dubai, UAE",
    period: "2023 - Present",
    description: [
      "Developed and maintained React-based web applications with TailwindCSS",
      "Integrated RESTful APIs and managed SQLite databases",
      "Implemented automation scripts to improve workflow efficiency",
      "Collaborated with cross-functional teams using Agile methodologies",
    ],
  },
  {
    title: "Frontend Developer & Web Engineer",
    company: "Loof Boutique",
    location: "Dubai, UAE",
    period: "2022 - 2023",
    description: [
      "Built responsive e-commerce interfaces with React and modern CSS",
      "Created reusable UI component libraries for consistent design",
      "Optimized website performance achieving 40% faster load times",
      "Implemented SEO strategies resulting in improved search rankings",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "Gold Signature for Kandora",
    location: "Dubai, UAE",
    period: "2021 - 2022",
    description: [
      "Assisted in frontend development and UI improvements",
      "Automated repetitive tasks to enhance team productivity",
      "Maintained and updated WordPress websites",
      "Collaborated with designers to implement pixel-perfect designs",
    ],
  },
];

export const Experience = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            My professional journey in frontend development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 -translate-x-1.5 mt-2 z-10 ring-4 ring-background" />

                {/* Content */}
                <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass-card p-6 hover-lift">
                    <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-3 w-3" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
