import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const categories = [
    {
      name: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express.js", "Python", "REST APIs", "WebSockets"],
    },
    {
      name: "Machine Learning",
      skills: [
        "NumPy",
        "Pandas",
        "Tensorflow",
        "scikit-learn",
        "Matplotlib",
      ],
    },
    {
      name: "Database",
      skills: ["MySQL", "MongoDB"],
    },
    {
      name: "DevOps & Tools",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Vercel",
        "OpenAI",
        "Google Gemini API",
      ],
    },
    {
      name: "Programming Languages",
      skills: ["Python", "Java"],
    },
    {
      name: "Frameworks",
      skills: ["Flask", "Streamlit", "Django"],
    },
    {
      name: "Cloud",
      skills: [
        "AWS",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="skills" className="section-padding bg-secondary">
      <div className="container-custom" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h4 className="font-mono text-sm text-muted mb-2">EXPERTISE</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {categories.map((category, i) => (
            <motion.div 
              key={i} 
              className="border border-muted border-opacity-20 bg-primary bg-opacity-40 p-6"
              variants={itemVariants}
            >
              <h3 className="text-light font-medium mb-4 pb-2 border-b border-muted border-opacity-20">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <motion.span 
                    key={j} 
                    className="text-sm bg-secondary px-3 py-1 rounded-sm"
                    whileHover={{ 
                      y: -2, 
                      backgroundColor: "rgba(245, 245, 245, 0.05)", 
                      transition: { duration: 0.2 } 
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 flex flex-col md:flex-row items-center justify-between p-6 border border-muted border-opacity-20 bg-primary bg-opacity-40"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-medium mb-2">Ready to collaborate?</h3>
            <p className="text-muted">Let's discuss how my skills can help your project.</p>
          </div>
          <a href="#contact" className="btn btn-primary whitespace-nowrap">
            Get in Touch
            <span className="ml-2">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;