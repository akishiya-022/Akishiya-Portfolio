import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Certificates from './components/Certificates';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" />
      ) : (
        <div className="min-h-screen gradient-bg dark:gradient-bg scrollbar-thin">
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Internships />
            <Certificates />
            <Languages />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;
