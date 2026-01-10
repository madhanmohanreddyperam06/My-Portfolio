import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const education = [
    {
      institution: "Kalasalingam University, Krishnankoil, Tamil Nadu | 2022-2026",
      degree: "B.Tech",
      field: "Computer Science and Engineering (CSE)",
      period: "CGPA : 8.13",
    },
    {
      institution: "Narayana Junior College, Cuddapah, Andhra Pradesh | 2020-2022",
      degree: "Intermediate",
      field: "MPC",
      period: "Percentage : 84.2%",
    },
    {
      institution: "Swamy Vivekananda H S, Cuddapah, Andhra Pradesh | 2019-2020",
      degree: "Class X",
      field: "SSC",
      period: "Percentage : 99.3%",
    },
  ];

  const achievements = [
    "2x Gold badge holder -Hackerrank(Python)",
    "Finalist in National Level Hackathon -IBM",
    "Published an IEEE article - Smart College Helpdesk Assistant using Machine Learning & NLP",
    "Certified Full Stack Web Developer -Future Interns",
    "Certified AI Developer Intern -Viswam AI",
    "Secured 89 Percentile in JEE MAINS",
    "Achieved 17463 Rank in EAPCET",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="education" className="section-padding bg-primary">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h4 className="font-mono text-sm text-muted mb-2">BACKGROUND</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Achievements</h2>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="md:col-span-2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-xl font-medium mb-6 flex items-center">
              <div className="w-4 h-4 border border-light mr-3"></div>
              Education
            </h3>

            <div className="space-y-8">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  className="border-l-2 border-muted border-opacity-30 pl-6 relative"
                  variants={itemVariants}
                >
                  <div className="absolute w-3 h-3 bg-primary border border-light rounded-full -left-[7px] top-1"></div>
                  <h4 className="text-lg font-medium mb-1">{edu.institution}</h4>
                  <p className="text-muted mb-1">{edu.degree} {edu.field && `- ${edu.field}`}</p>
                  {edu.period && <p className="text-sm font-mono text-light opacity-70">{edu.period}</p>}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-xl font-medium mb-6 flex items-center">
              <div className="w-4 h-4 border border-light mr-3"></div>
              Achievements
            </h3>

            <ul className="space-y-4">
              {achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <span className="text-light mt-1 mr-2 opacity-60">⁕</span>
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="mt-8 p-4 border border-muted border-opacity-20 bg-secondary bg-opacity-30"
              variants={itemVariants}
            >
              <h4 className="text-sm font-medium mb-2">Continuous Learning</h4>
              <p className="text-muted text-sm">
                Always exploring new technologies and participating in hackathons
                to expand my knowledge and practical experience.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;