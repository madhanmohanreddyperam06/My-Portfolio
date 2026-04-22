import { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const handleProjectSelect = (index) => {
    setActiveProject(index);
  };

  const projects = [
    {
      title: "FitHub - AI Powered Fitness Trainer",
      description:
        "A static website application for Zym Enthusiasts for their daily workout guidance with attractive features.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/images/fitbill-preview.png",
      liveLink: "",
      githubLink: "https://github.com/madhanmohanreddyperam06/FitHub.git",
      highlights: [
        "Responsive UI with dropdown menu for workout selection.",
        "Multiple workout pages including Back, Chest, Biceps & Triceps, Shoulder, Leg, and All Workouts.",
        "Interactive chatbot powered by an AI API to answer user queries.",
        "Virtual assistant with voice recognition and speech synthesis to navigate the site and perform commands.",
        "Personalized Workout Plans",
        "Nutrition Guide",
      ],
    },
    {
      title: "MITRA - Smart College Helpdesk Assistant",
      description:
        "An intelligent AI-powered helpdesk assistant designed specifically for college students and staff. This bot provides instant support by understanding natural language queries and delivering relevant FAQ responses with text-to-speech capabilities.",
      tech: ["Python", "Streamlit", "MySQL", "Pandas", "scikit-learn"],
      image: "/images/attendance-preview.png",
      liveLink: "",
      githubLink: "https://github.com/madhanmohanreddyperam06/MITRA.git",
      highlights: [
        "Admission Information: Get details about admission process, eligibility, and requirements",
        "Course Information: Browse available courses and programs",
        "Fee Structure: Information about fees, scholarships, and payment options",
        "Hostel Facilities: Details about accommodation and hostel services",
        "Library Services: Library facilities and resources information",
        "Placement Support: Career guidance and placement statistics",
        "Contact Information: Department contacts and office locations",
      ],
    },
    {
      title:
        "Campus Finder - Smart Educational Institution Discovery Platform using Gen AI",
      description:
        "A comprehensive Generative AI based web application built with Next.js that serves as a one-stop-shop for discovering and evaluating educational institutions across India. This platform is designed to empower students and parents with the data they need to make informed decisions about their educational future.",
      tech: ["React", "Next.js", "Generative AI", "TailwindCSS", "TypeScript"],
      image: "/images/studysphere-preview.png",
      liveLink: "",
      githubLink: "https://github.com/madhanmohanreddyperam06/Campus-Finder.git",
      highlights: [
        "Role-based Access Control : Admin & User roles with different permissions",
        "Comprehensive Search : Users can search for thousands of institutions by name, location, or course",
        "Detailed Institution Profiles: Every institution has a rich profile page featuring courses, fees, placements, and campus infrastructure.",
        "Advanced Filtering: Narrow down results by filtering based on institution type, state, city, NIRF Ranking, and NAAC Grade.",
        "AI-powered features : College Recommendation Engine, AI Career Guide LLM, AI Institution Comparison Tool",
      ],
    },
    {
      title: "GiveBit - Donation & Charity Management Portal",
      description:
        "A full-stack web application for managing charity donations and contributions between NGOs and donors.",
      tech: [
        "Angular",
        "Node.js",
        "MySQL",
        "HTML",
        "CSS",
        "JWT",
        "Typescript",
        "Express.js",
      ],
      image: "/images/movie-review-preview.png",
      liveLink: "",
      githubLink: "https://github.com/madhanmohanreddyperam06/Charity-and-Donation-Management-Portal.git",
      highlights: [
        "Role-based login (NGO/Donor)",
        "Secure JWT-based user authentication",
        "Personalized dashboards for both NGOs and Donors",
        "NGOs can create and manage donation requests",
        "Donors can browse and contribute to donations",
        "Live status tracking of donations and contributions",
      ],
    },
    {
      title: "VENDORA - E-Commerce Storefront",
      description:
        "A modern, full-stack online store built with React, Next.js, TypeScript, and Tailwind CSS. This project demonstrates a complete e-commerce solution with product catalog, shopping cart, checkout flow, user authentication, and order management.",
      tech: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "Fakestore API",
      ],
      image: "/images/whistle-counter-preview.png",
      liveLink: "",
      githubLink: "https://github.com/madhanmohanreddyperam06/Vendora.git",
      highlights: [
        "Dashboard for managing products and orders",
        "Login/register functionality with persistent sessions",
        "Browse products with filtering, search, and category navigation",
        "Detailed product pages with image galleries and specifications",
        "Complete checkout process with form validation",
        "Order history, tracking, and confirmation pages",
      ],
    },
    {
      title: "BookMyDoctor - Doctor Appointment System",
      description: "A comprehensive hospital appointment management system supporting Admin, Doctor, and Patient workflows with strict Online/Offline mode separation.",
      tech: ["Python", "Flask", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
      image: "/images/whistle-counter-preview.png",
      liveLink: "",
      githubLink: "https://github.com/madhanmohanreddyperam06/Doctor-Appointment-System.git",
      highlights: [
        "Separate dashboards and functionalities for Admin, Doctor, and Patient with secure access control",
        "Real-time analytics for appointments, revenue, and user management with full system monitoring",
        "Easily manage doctors, shifts, availability, and consultation modes (Online/Offline)",
        "Time-based appointment scheduling with token generation for efficient patient flow",
        "Doctors can manage diagnoses, prescriptions, and follow-ups digitally",
        "Video consultation links for online visits and automatic clinic details for offline appointments",
      ],
    },
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
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="section-padding bg-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <h4 className="font-serif text-sm text-muted mb-2">PORTFOLIO</h4>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 uppercase tracking-wider">FEATURED PROJECTS</h2>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8">
          {/* Project selector - mobile version */}
          <motion.div
            className="md:hidden w-full mb-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-muted">SELECT PROJECT</p>
              <div className="text-xs text-muted">{activeProject + 1}/{projects.length}</div>
            </div>
            <div className="flex overflow-x-auto pb-3 scrollbar-hide snap-x snap-mandatory">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`snap-start flex-shrink-0 w-[70%] sm:w-[60%] mr-2 sm:mr-3 p-3 sm:p-4 cursor-pointer transition-all duration-300 ${activeProject === index
                    ? "bg-secondary bg-opacity-50 border border-light border-opacity-20"
                    : "bg-secondary bg-opacity-10 border border-muted border-opacity-10"
                    }`}
                  onClick={() => handleProjectSelect(index)}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className={`font-medium text-xs sm:text-sm mb-1 ${activeProject === index ? "text-light" : "text-muted"
                    }`}>
                    {project.title.split(" - ")[0]}
                  </h3>
                  <p className="text-xs text-muted line-clamp-1">
                    {project.tech.slice(0, 3).join(", ")}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Project selector - desktop version */}
          <motion.div
            className="hidden md:block md:col-span-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`border-l border-muted ${activeProject === index ? "border-opacity-100" : "border-opacity-20"
                  } p-4 cursor-pointer transition-all duration-300 ${activeProject === index ? "bg-secondary bg-opacity-30" : ""
                  }`}
                onClick={() => handleProjectSelect(index)}
                whileHover={{
                  backgroundColor: "rgba(26, 26, 26, 0.3)",
                  transition: { duration: 0.2 }
                }}
              >
                <h3 className={`font-medium text-sm mb-1 ${activeProject === index ? "text-light" : "text-muted"
                  }`}>
                  {project.title.split(" - ")[0]}
                </h3>
                <p className="text-xs text-muted line-clamp-1">
                  {project.tech.slice(0, 3).join(", ")}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Project details */}
          <motion.div
            className="col-span-1 md:col-span-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={activeProject}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="bg-secondary bg-opacity-20 p-4 md:p-6 border border-muted border-opacity-10 rounded-lg cursor-pointer red-line-hover"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2 sm:mb-3">{projects[activeProject].title}</h3>
              <p className="text-sm md:text-base text-muted mb-4 md:mb-6 leading-relaxed">
                {projects[activeProject].description}
              </p>

              <div className="mb-4 md:mb-6">
                <h4 className="text-xs md:text-sm font-serif mb-2 md:mb-3">KEY HIGHLIGHTS</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {projects[activeProject].highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-light opacity-50 mt-1">→</span>
                      <span className="text-xs md:text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs md:text-sm font-serif mb-2 md:mb-3">TECHNOLOGIES USED</h4>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {projects[activeProject].tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs py-1 px-2 sm:px-3 bg-primary border border-muted border-opacity-20 rounded-sm red-line-hover"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {(projects[activeProject].liveLink || projects[activeProject].githubLink) && (
                <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-end">
                  {projects[activeProject].liveLink && (
                    <a
                      href={projects[activeProject].liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif text-xs inline-flex items-center px-4 sm:px-5 py-2 md:px-6 md:py-2 border border-light hover:bg-light hover:bg-opacity-5 transition-all duration-300 group"
                    >
                      VIEW LIVE PROJECT
                      <svg className="ml-2 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  )}
                  {projects[activeProject].githubLink && (
                    <a
                      href={projects[activeProject].githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif text-xs inline-flex items-center px-4 sm:px-5 py-2 md:px-6 md:py-2 border border-muted hover:bg-secondary hover:bg-opacity-30 transition-all duration-300 group red-line-hover"
                    >
                      VIEW GITHUB
                      <svg className="ml-2 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;