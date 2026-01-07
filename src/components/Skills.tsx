import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const technicalSkills = [
  { name: "React.js", level: 95 },
  { name: "JavaScript ES6+", level: 90 },
  { name: "HTML5 & CSS3", level: 95 },
  { name: "TailwindCSS", level: 90 },
  { name: "TypeScript", level: 80 },
  { name: "Bootstrap", level: 85 },
];

const toolsAndTech = [
  { name: "RESTful APIs", level: 85 },
  { name: "Git & GitHub", level: 90 },
  { name: "Figma", level: 75 },
  { name: "Responsive Design", level: 95 },
  { name: "Performance Optimization", level: 80 },
  { name: "CI/CD", level: 70 },
];

const additionalSkills = [
  "WordPress/Shopify",
  "SEO Optimization",
  "Agile/Scrum",
  "Cross-Browser Compatibility",
  "UI/UX Design",
  "Cloud Hosting",
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const { ref, isInView } = useInView(0.3);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-foreground font-medium text-sm">{name}</span>
        <span className="text-primary font-semibold text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full bg-primary rounded-full"
        />
      </div>
    </div>
  );
};

export const Skills = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="skills" className="py-20 md:py-28 bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, responsive web applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-3 h-3 bg-primary rounded-full" />
              Core Technical Skills
            </h3>
            {technicalSkills.map((skill, index) => (
              <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-8"
          >
            <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-3 h-3 bg-primary rounded-full" />
              Tools & Technologies
            </h3>
            {toolsAndTech.map((skill, index) => (
              <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-8"
        >
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
            <span className="w-3 h-3 bg-primary rounded-full" />
            Additional Expertise
          </h3>
          <div className="flex flex-wrap gap-3">
            {additionalSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
