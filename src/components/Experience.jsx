import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const CertificateModal = ({ isOpen, onClose, certificate }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-primary border border-light border-opacity-30 rounded-lg max-w-4xl max-h-[90vh] overflow-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-light hover:text-muted transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-light mb-4 font-serif">{certificate.title}</h3>
          <div className="mb-4">
            <p className="text-muted text-sm font-serif">Issued by: {certificate.issuer}</p>
            <p className="text-muted text-sm font-serif">Date: {certificate.date}</p>
          </div>

          {certificate.pdf ? (
            <div className="bg-secondary rounded-lg p-4 mb-4">
              <iframe
                src={certificate.pdf}
                title={certificate.title}
                className="w-full h-[600px] rounded-lg border-0"
              />
            </div>
          ) : certificate.image ? (
            <div className="bg-secondary rounded-lg p-4 mb-4">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ) : (
            <div className="bg-secondary rounded-lg p-8 mb-4 text-center">
              <p className="text-muted">Certificate not available</p>
            </div>
          )}

          {certificate.description && (
            <p className="text-muted text-sm leading-relaxed">{certificate.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const experiences = [
    {
      company: "Matrimony.com | Chennai, India",
      position: "Full Stack Developer Trainee",
      duration: "Aug 2025 - Dec 2025",
      location: "Remote",
      responsibilities: [
        "Completed comprehensive Full Stack Development training under the guidance of experienced industry mentors.",
        "Gained hands-on experience by consistently working on daily tasks and real-world assignments.",
        "Developed strong skills in both frontend and backend technologies, including project structuring and deployment.",
        "Successfully designed and implemented a full stack project, applying end-to-end development practices.",
        "Enhanced problem-solving, debugging, and teamwork abilities through practical learning and mentorship support.",
      ],
      technologies: [
        "Angular",
        "HTML",
        "CSS",
        "Node.js",
        "Express.js",
        "TypeScript",
        "MySQL",
        "GitHub",
      ],
      certificate: {
        title: "Full Stack Development Certificate",
        issuer: "Matrimony.com",
        date: "December 2025",
        image: null,
        pdf: "/Matrimony_Certificate.pdf",
        description: "Certificate of completion for Full Stack Developer Trainee program at Matrimony.com, demonstrating proficiency in web development technologies and contribution to real-world projects."
      }
    },
    {
      company: "Future Interns",
      position: "Full Stack Web Developer Intern",
      duration: "Sep 2025 - Oct 2025",
      location: "Remote",
      responsibilities: [
        "Completed a Full Stack Web Developer internship at Future Interns, gaining practical industry exposure.",
        "Worked on both frontend and backend technologies, building dynamic and responsive web applications.",
        "Developed and deployed multiple real-world projects, applying full stack development concepts end-to-end.",
        "Strengthened skills in API integration, database management, and UI/UX design.",
      ],
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "MySQL",
        "GitHub",
      ],
      certificate: {
        title: "Full Stack Web Development Certificate",
        issuer: "Future Interns",
        date: "October 2025",
        image: null,
        pdf: "/Future Interns Certificate.pdf",
        description: "Recognition for exceptional performance as a Full Stack Web Developer, showcasing expertise in modern web technologies and successful project delivery."
      }
    },
    {
      company: "Viswam AI | Hyderabad, India",
      position: "AI Developer Intern",
      duration: "May 2025 - June 2025",
      location: "Remote",
      responsibilities: [
        "Completed an AI Developer Internship at Viswam AI, working on real-world LLM development tasks.",
        "Collected, curated, and maintained domain-specific corpora on a daily basis to support model training.",
        "Performed fine-tuning of Large Language Models (LLMs) using the prepared datasets to improve performance and relevance.",
        "Built and tested custom LLM-based solutions, applying NLP and machine learning techniques.",
        "Successfully completed all assigned tasks, demonstrating skills in data preprocessing, model training, and iterative improvement.",
      ],
      technologies: ["Python", "Streamlit", "Ruff", "Ollama", "GitLab"],
      certificate: {
        title: "AI Development Excellence Certificate",
        issuer: "Viswam AI",
        date: "June 2025",
        image: null,
        pdf: "/Viswam_AI Certificate.pdf",
        description: "Certificate of excellence for AI Development Internship, recognizing contributions to AI-powered applications and innovative solutions in artificial intelligence."
      }
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="experience" className="section-padding bg-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h4 className="font-serif text-sm text-muted mb-2">EXPERIENCE</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">PROFESSIONAL JOURNEY</h2>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        <motion.div
          className="space-y-8 md:space-y-12"
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border-l-2 border-muted border-opacity-30 pl-4 sm:pl-6 relative"
            >
              <div className="absolute w-3 h-3 bg-primary border border-light rounded-full -left-[7px] top-1"></div>

              <div className="mb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-medium text-light">{exp.position}</h3>
                  <span className="text-sm sm:text-base text-muted font-serif">{exp.duration}</span>
                </div>

                <h4 className="text-base sm:text-lg font-medium text-light mb-1">{exp.company}</h4>
                <p className="text-sm text-muted mb-4 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-1.414.586l-1.293-1.293a1 1 0 00-.707.293l-2.414 2.414a1 1 0 00.707.293l2.414 2.414a1 1 0 00.707-.293l1.293-1.293a1 1 0 001.414-.586l4.243-4.243a1 1 0 001.414 0l4.243 4.243a1 1 0 001.414 0l1.293 1.293a1 1 0 00.707.293l2.414-2.414a1 1 0 00-.707-.293l-1.293-1.293a1 1 0 00-1.414.586z" />
                  </svg>
                  {exp.location}
                </p>

                <div className="mb-4">
                  <h5 className="text-sm font-medium mb-2">Key Responsibilities</h5>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-light opacity-50 mt-1">→</span>
                        <span className="text-sm text-muted">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-medium mb-2">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs py-1 px-2 sm:px-3 bg-primary border border-muted border-opacity-20 rounded-sm red-line-hover"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {exp.certificate && (exp.certificate.pdf || exp.certificate.image) && (
                  <div className="mt-4">
                    <button
                      onClick={() => setSelectedCertificate(exp.certificate)}
                      className="inline-flex items-center px-4 py-2 bg-light bg-opacity-10 border border-light border-opacity-30 rounded-sm text-light text-sm font-serif hover:bg-opacity-20 transition-all duration-300 group"
                    >
                      <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                      View Certificate
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <CertificateModal
        isOpen={!!selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        certificate={selectedCertificate}
      />
    </section>
  );
};

export default Experience;
