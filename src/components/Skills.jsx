import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Mapping of skill names to their image files
  const skillImages = {
    React: "/react.png",
    "Next.js": "/Next.js.png",
    Angular: "/angular.png",
    TypeScript: "/typescript.png",
    JavaScript: "/javascript.png",
    HTML: "/html.png",
    CSS: "/css.png",
    "Tailwind CSS": "/tailwind css.png",
    "Node.js": "/nodejs.png",
    "Express.js": "/express.js.png",
    Python: "/python.gif",
    "REST APIs": "/rest-api.png",
    WebSockets: "/web sockets.png",
    NumPy: "/numpy.png",
    Pandas: "/pandas.png",
    Tensorflow: "/tensorflow.png",
    "scikit-learn": "/scikit-learn.png",
    Matplotlib: "/matplotlib.png",
    MySQL: "/mysql.png",
    SQLite: "/SQLite.png",
    Git: "/git.png",
    GitHub: "/github.png",
    "VS Code": "/visual-studio-code.png",
    Vercel: "/vercel.png",
    OpenAI: "/openAI.png",
    Claude: "/Claude.png",
    "Google Gemini API": "/gemini-ai.png",
    Java: "/java.gif",
    Flask: "/Flask.png",
    Streamlit: "/streamlit.png",
    Django: "/django.png",
    AWS: "/aws.png",
  };

  const categories = [
    {
      name: "Programming Languages",
      skills: ["Python", "Java", "TypeScript", "JavaScript"],
    },
    {
      name: "Frontend",
      skills: ["React", "Next.js", "Angular", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "WebSockets"],
    },
    {
      name: "Database",
      skills: ["MySQL", "SQLite"],
    },
    {
      name: "Machine Learning",
      skills: ["NumPy", "Pandas", "Tensorflow", "scikit-learn", "Matplotlib"],
    },
    {
      name: "Frameworks",
      skills: ["Flask", "Streamlit", "Django"],
    },
    {
      name: "DevOps & Tools",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Vercel",
        "OpenAI",
        "Claude",
        "Google Gemini API",
      ],
    },
    {
      name: "Cloud",
      skills: ["AWS"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
          <h4 className="font-serif text-sm text-muted mb-2">EXPERTISE</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">
            TECHNICAL SKILLS
          </h2>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {categories.map((category, i) => (
            <motion.div
              key={i}
              className="border border-muted border-opacity-20 bg-primary bg-opacity-40 p-4 sm:p-6"
              variants={itemVariants}
            >
              <h3 className="text-light font-medium mb-3 sm:mb-4 pb-2 border-b border-muted border-opacity-20 text-sm sm:text-base">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {category.skills.map((skill, j) => (
                  <motion.span
                    key={j}
                    className="text-sm sm:text-base bg-secondary px-3 sm:px-4 py-2 rounded-md flex items-center gap-2"
                    whileHover={{
                      y: -2,
                      backgroundColor: "rgba(245, 245, 245, 0.05)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    {skillImages[skill] && (
                      <img
                        src={skillImages[skill]}
                        alt={skill}
                        className="w-5 h-5 object-contain"
                      />
                    )}
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 sm:mt-16 flex flex-col md:flex-row items-center justify-between p-4 sm:p-6 border border-muted border-opacity-20 bg-primary bg-opacity-40"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg sm:text-xl font-medium mb-2">
              Ready to collaborate?
            </h3>
            <p className="text-sm sm:text-base text-muted">
              Let's discuss how my skills can help your project.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-2 rounded-sm font-medium transition-all duration-300 bg-light text-primary hover:bg-opacity-90 whitespace-nowrap"
          >
            Get in Touch
            <span className="ml-2">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
