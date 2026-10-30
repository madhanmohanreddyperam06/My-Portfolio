import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navItems = [
    "Home",
    "Education",
    "LeetCode",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];

  const headerVariants = {
    initial: { y: -100 },
    animate: {
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 + 0.2, duration: 0.4 },
    }),
  };

  return (
    <>
      <motion.header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 border-0 glassmorphism-no-border ${
          scrolled || mobileMenuOpen ? "top-0 py-2" : "top-6 py-2.5 md:py-1"
        }`}
        variants={headerVariants}
        initial="initial"
        animate="animate"
        style={{
          borderWidth: 0, // Explicitly setting border width to 0
          borderStyle: "none", // Ensuring no border style
        }}
      >
        <div className="container-custom flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="w-[2px] h-6 bg-light mr-2"></div>
            <span className="font-serif text-lg tracking-wider">
              Madhan DEV
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item, i) => (
                <motion.li
                  key={item}
                  custom={i}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium hover:text-light transition-colors duration-300"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Mobile Hamburger Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden text-light p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-6 flex flex-col space-y-1.5 justify-center items-center h-5">
              <motion.div
                className="w-6 h-[2px] bg-light rounded-full origin-center"
                animate={
                  mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="w-6 h-[2px] bg-light rounded-full"
                animate={
                  mobileMenuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }
                }
                transition={{ duration: 0.2 }}
              />
              <motion.div
                className="w-6 h-[2px] bg-light rounded-full origin-center"
                animate={
                  mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-light/10 bg-[#101010]/95 backdrop-blur-xl shadow-2xl"
            >
              <div className="container-custom py-4">
                <ul className="flex flex-col divide-y divide-light/5">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03, duration: 0.2 }}
                    >
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="flex items-center justify-between py-3 text-sm font-medium text-light/80 hover:text-white transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="tracking-wide">{item}</span>
                        <span className="text-xs text-muted font-mono">
                          0{index + 1}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Backdrop overlay for mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
