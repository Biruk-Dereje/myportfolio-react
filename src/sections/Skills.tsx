import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    color: "from-primary to-accent",
  },
  {
    title: "Backend",
    skills: ["Laravel", "Python", "PHP", "MySQL", "PostgreSQL"],
    color: "from-secondary to-muted",
  },
  {
    title: "Tools & Others",
    skills: ["Git", "REST APIs", "XAMPP", "VS Code", "Postman"],
    color: "from-muted to-secondary",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies and tools I use to bring ideas to life"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass-card p-6 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Gradient Top Border */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color}`}
              />

              <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}
                />
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="skill-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Bars */}
        <motion.div
          className="mt-16 glass-card p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-display font-bold mb-8 text-center">
            Proficiency Level
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "React & JavaScript", level: 85 },
              {name: "Python & Django", level: 85 },
              { name: "Git & Version Control", level: 85 },
              { name: "Laravel & PHP", level: 80 },
              { name: "Database Design", level: 75 },
              { name: "REST API Development", level: 70 },
            ].map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-primary">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
