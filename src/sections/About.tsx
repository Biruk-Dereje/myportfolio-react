import { motion } from "framer-motion";
import { GraduationCap, Code2, Target, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Expertise in both frontend and backend technologies",
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant solutions",
    },
    {
      icon: Sparkles,
      title: "Modern Tech Stack",
      description: "Always learning and adopting new technologies",
    },
    {
      icon: GraduationCap,
      title: "BSc Software Engineering",
      description: "Adama Science and Technology University",
    },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="About Me"
          subtitle="A passionate software engineer dedicated to building innovative solutions"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
              
              <h3 className="text-2xl font-display font-bold mb-6">
                Crafting Digital Experiences
              </h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm Biruk Dereje, a Software Engineer based in Addis Ababa, Ethiopia.
                  With a strong foundation in both frontend and backend development,
                  I specialize in building robust, scalable web applications.
                </p>
                <p>
                  My journey in software engineering has equipped me with expertise
                  in React, Laravel, Python, and modern database technologies.
                  I'm passionate about writing clean, maintainable code and
                  creating intuitive user experiences.
                </p>
                <p>
                  I hold a BSc in Software Engineering from Adama Science and
                  Technology University, where I developed a strong foundation
                  in computer science principles and software development practices.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="skill-badge">Problem Solving</span>
                <span className="skill-badge">Team Collaboration</span>
                <span className="skill-badge">Continuous Learning</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="glass-card p-6 hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
