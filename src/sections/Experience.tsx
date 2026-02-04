import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const experiences = [
  {
    title: "Backend Developer Intern",
    company: "Kuraz Technologies",
    period: "2023 - 2024",
    description: [
      "Developed backend systems using Laravel and PHP",
      "Implemented secure authentication systems",
      "Designed and optimized database schemas",
      "Collaborated with frontend developers on API integration",
    ],
    current: false,
  },
  {
    title: "Web Development Intern",
    company: "Banking Website Project",
    period: "2023",
    description: [
      "Built responsive banking website interfaces",
      "Implemented interactive UI components",
      "Ensured cross-browser compatibility",
      "Followed security best practices for financial applications",
    ],
    current: false,
  },
];

const achievements = [
  "Developed secure authentication systems with role-based access control",
  "Built and optimized RESTful APIs for high-performance applications",
  "Designed efficient database schemas for scalable data management",
  "Implemented performance optimizations reducing load times by 40%",
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="Experience & Achievements"
          subtitle="My professional journey and key accomplishments"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <div>
            <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
              <Briefcase className="text-primary" size={24} />
              Work Experience
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary to-primary/20" />
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  className="relative pl-10 pb-10 last:pb-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Dot */}
                  <div className="timeline-dot absolute left-0 top-1" />
                  
                  <div className="glass-card p-6 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center gap-2 text-sm text-primary mb-2">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <h4 className="text-lg font-display font-bold mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-muted-foreground mb-4">{exp.company}</p>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              Key Achievements
            </h3>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-5 flex items-start gap-4 hover:border-primary/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-muted-foreground">{achievement}</p>
                </motion.div>
              ))}
            </div>

            {/* Education Card */}
            <motion.div
              className="glass-card p-6 mt-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-3xl">🎓</span>
                </div>
                <div>
                  <h4 className="font-display font-bold">BSc Software Engineering</h4>
                  <p className="text-muted-foreground">Adama Science and Technology University</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
