import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResumeRedirect from './components/ResumeRedirect.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Loader from './components/Loader.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/resume" element={<ResumeRedirect />} />
        <Route
          path="/*"
          element={
            <AnimatePresence>
              {loading ? (
                <Loader key="loader" />
              ) : (
                <motion.div
                  key="app"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-primary text-accent min-h-screen"
                >
                  <Header />
                  <main>
                    <Hero />
                    <Projects />
                    <Skills />
                    <Education />
                    <Contact />
                  </main>
                  <Footer />
                </motion.div>
              )}
            </AnimatePresence>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;