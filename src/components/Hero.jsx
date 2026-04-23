import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Avatar from "./Avatar"; // Added import

const DottedText = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const roles = [
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "AI Engineer",
    ];
    const currentRole = roles[loopIndex % roles.length];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        setText(currentRole.substring(0, text.length + 1));

        if (text.length === currentRole.length) {
          // Finished typing, pause then start deleting
          setTypingSpeed(2000); // 2 second pause
          setIsDeleting(true);
        } else {
          setTypingSpeed(150); // Normal typing speed
        }
      } else {
        // Deleting
        setText(currentRole.substring(0, text.length - 1));

        if (text.length === 0) {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setLoopIndex((prev) => prev + 1);
          setTypingSpeed(150); // Normal typing speed
        } else {
          setTypingSpeed(50); // Faster deleting speed
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopIndex, typingSpeed]);

  return (
    <div className="font-serif">
      <span>{text}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-1 h-6 bg-light ml-1"
      />
    </div>
  );
};

const Hero = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="home"
      className="h-screen flex items-center relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute left-1/3 top-1/4 w-72 h-72 rounded-full bg-gradient-to-tr from-[#202020] to-transparent opacity-30 blur-xl"
          animate={{
            x: [0, 10, 0],
            y: [0, -10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/3 w-64 h-64 rounded-full bg-gradient-to-bl from-[#252525] to-transparent opacity-20 blur-xl"
          animate={{
            x: [0, -15, 0],
            y: [0, 15, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Nothing-styled top bar */}
      <div className="absolute top-0 left-0 right-0 bg-primary bg-opacity-50 flex justify-between items-center px-6 py-1 border-b border-muted border-opacity-10">
        <div className="font-serif text-xs text-muted">
          {formatTime(currentTime)}-{formatDate(currentTime)}
        </div>
        <div className="font-serif text-xs text-muted">
          ~MADHAN MOHAN REDDY PERAM
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 lg:ml-28 lg:mr-auto">
        {/* Mobile Profile Picture - Only visible on mobile */}
        <div className="flex flex-col items-center mb-6 md:hidden">
          {/* MY PORTFOLIO Tag - Mobile Only */}

          <div className="relative">
            {/* Animated White Circle */}
            <motion.div
              className="absolute inset-0 rounded-full border border-white/30"
              animate={{
                rotate: 360,
                scale: [1, 1.05, 1],
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                borderColor: "rgba(255, 255, 255, 0.8)",
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            />

            {/* Profile Image with Fade Animation */}
            <motion.div
              className="relative w-36 h-36"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 1,
                type: "spring",
                scale: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  src="/Madhu.jpeg"
                  alt="Madhan Mohan Reddy Peram"
                  className="w-36 h-36 rounded-full object-cover bg-transparent shadow-lg scale-110"
                  style={{ objectPosition: "center 25%" }}
                  key="madhu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Main container for hero content */}
        {/* Desktop Profile Picture - Replaced Avatar component */}
        <div className="hidden md:block absolute top-1/2 right-20 lg:right-32 transform -translate-y-1/2 z-10">
          <div className="relative">
            {/* Animated White Circle */}
            <motion.div
              className="absolute inset-0 rounded-full border border-white/30"
              animate={{
                rotate: 360,
                scale: [1, 1.05, 1],
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                borderColor: "rgba(255, 255, 255, 0.8)",
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            />

            {/* Profile Image with Fade Animation */}
            <motion.div
              className="relative w-72 h-72"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 1,
                type: "spring",
                delay: 0.5,
                scale: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                scale: 1.05,
                rotate: 2,
                boxShadow: "0 15px 40px rgba(34, 197, 94, 0.4)",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  src="/Madhu.jpeg"
                  alt="Madhan Mohan Reddy Peram"
                  className="w-72 h-72 rounded-full object-cover bg-transparent shadow-2xl scale-110"
                  style={{ objectPosition: "center 25%" }}
                  key="madhu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
        <div className="text-left">
          <motion.div
            className=""
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={childVariants} className="mb-4">
              <div className="inline-block w-12 h-[1px] bg-muted mr-4 align-middle"></div>
              <span className="text-muted">PORTFOLIO</span>
            </motion.div>

            {/* Nothing-inspired headline with dotted/pixel effect */}
            <motion.h1
              variants={childVariants}
              className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8"
            >
              <div className="mb-2 font-serif text-xs sm:text-sm tracking-wider text-muted">
                HELLO, I'M
              </div>
              <div className="nothing-headline font-serif tracking-wide text-2xl sm:text-3xl md:text-5xl">
                MADHAN MOHAN REDDY PERAM
              </div>
              <div className="mt-3 text-gradient text-lg sm:text-xl md:text-2xl">
                <DottedText />
              </div>
            </motion.h1>

            <motion.p
              variants={childVariants}
              className="text-base sm:text-lg md:text-xl mb-8 md:mb-10 max-w-full sm:max-w-xl"
            >
              Solving real-world problems through innovative solutions. Eager to
              apply technical expertise and creativity in dynamic environments.
            </motion.p>

            {/* Social media and resume section */}
            <motion.div
              variants={childVariants}
              className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 mb-8 md:mb-12"
            >
              <a
                href="https://github.com/madhanmohanreddyperam06"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-light transition-colors"
              >
                <svg
                  className="social-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.84 21.49C9.34 21.581 9.522 21.276 9.522 21.008C9.522 20.766 9.513 20.011 9.508 19.172C6.726 19.791 6.143 17.898 6.143 17.898C5.699 16.754 5.064 16.451 5.064 16.451C4.187 15.818 5.131 15.829 5.131 15.829C6.104 15.898 6.626 16.868 6.626 16.868C7.498 18.412 8.974 17.945 9.541 17.687C9.63 17.058 9.888 16.592 10.175 16.32C7.956 16.046 5.62 15.233 5.62 11.477C5.62 10.386 6.01 9.491 6.646 8.787C6.546 8.531 6.202 7.57 6.747 6.181C6.747 6.181 7.563 5.908 9.497 7.211C10.29 7.002 11.151 6.898 12.001 6.894C12.849 6.899 13.71 7.002 14.505 7.211C16.437 5.908 17.252 6.181 17.252 6.181C17.798 7.57 17.454 8.531 17.354 8.787C17.991 9.491 18.379 10.386 18.379 11.477C18.379 15.246 16.038 16.044 13.813 16.313C14.172 16.647 14.492 17.308 14.492 18.313C14.492 19.754 14.479 20.674 14.479 21.007C14.479 21.278 14.659 21.586 15.167 21.49C19.137 20.162 22 16.418 22 12C22 6.477 17.523 2 12 2Z" />
                </svg>
                GITHUB
              </a>

              <a
                href="https://www.hackerrank.com/profile/h99220041310"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-light transition-colors"
              >
                <img
                  src="\hackerrank.svg"
                  alt="Hackerrank Logo"
                  className="w-6 h-6"
                />
                HACKERRANK
              </a>

              <a
                href="https://www.linkedin.com/in/madhan-mohan-reddy-peram-63181b253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-light transition-colors"
              >
                <svg
                  className="social-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                </svg>
                LINKEDIN
              </a>

              <a
                href="https://www.guvi.in/madhanmohanreddyperam0678058"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-light transition-colors"
              >
                <img
                  src="/GUVI.png"
                  alt="GUVI Logo"
                  className="w-6 h-6 rounded"
                />
                GUVI
              </a>
            </motion.div>

            <motion.div
              variants={childVariants}
              className="flex flex-wrap gap-5"
            >
              <a href="#projects" className="nothing-btn red-line-hover group">
                VIEW PROJECTS
                <svg
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>

              <a
                href="/Resume_Mine.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="nothing-btn red-line-hover"
              >
                RESUME
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
