import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-8 sm:py-12 border-t border-muted border-opacity-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <div className="flex items-center mb-2">
              <div className="w-[2px] h-6 bg-light mr-2"></div>
              <span className="font-serif text-base sm:text-lg tracking-wider">MADHAN MOHAN REDDY PERAM</span>
            </div>
            <p className="text-muted text-sm">
              Tech enthusiast building innovative solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <a href="#home" className="text-muted hover:text-light transition-colors text-sm sm:text-base">Home</a>
            <a href="#education" className="text-muted hover:text-light transition-colors text-sm sm:text-base">Education</a>
            <a href="#skills" className="text-muted hover:text-light transition-colors text-sm sm:text-base">Skills</a>
            <a href="#experience" className="text-muted hover:text-light transition-colors text-sm sm:text-base">Experience</a>
            <a href="#projects" className="text-muted hover:text-light transition-colors text-sm sm:text-base">Projects</a>
            <a href="#contact" className="text-muted hover:text-light transition-colors text-sm sm:text-base">Contact</a>
          </motion.div>
        </div>

        <div className="border-t border-muted border-opacity-10 pt-6 sm:pt-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-muted text-center"
          >
            © {currentYear} Madhan Mohan Reddy Peram. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;