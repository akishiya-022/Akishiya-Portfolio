import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';

function Hero() {
  // Typewriter effect for roles
  const roles = [
    'Aspiring Software Engineer',
    'AI & Data Science Student',
    'Web Developer',
    'UI/UX Enthusiast',
  ];
  const typedText = useTypewriter(roles, 80, 40, 2000);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 md:pt-20 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block text-4xl md:text-6xl mb-4"
            animate={{ rotate: [0, 20, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
          >
            👋
          </motion.span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display font-bold text-4xl md:text-6xl lg:text-7xl 
                     text-dark-700 dark:text-white mb-4"
        >
          Hi, I'm{' '}
          <span className="gradient-text">Akishiya</span>
        </motion.h1>

        {/* Typewriter subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-12 md:h-14 flex items-center justify-center mb-6"
        >
          <p className="font-display text-xl md:text-2xl text-primary-500 dark:text-primary-400">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>
        </motion.div>

        {/* Introduction paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-dark-400 dark:text-dark-200 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Passionate Artificial Intelligence and Data Science student with hands-on 
          experience in web development, Python Full Stack, and UI/UX design. 
          Interested in building user-friendly software solutions and continuously 
          learning new technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 
                       bg-primary-500 hover:bg-primary-600 text-white font-semibold 
                       rounded-full shadow-lg shadow-primary-500/30 transition-all"
          >
            <Download size={20} />
            Download Resume
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 
                       bg-white dark:bg-dark-600 text-dark-600 dark:text-white 
                       font-semibold rounded-full shadow-lg hover:shadow-xl 
                       transition-all border border-dark-100 dark:border-dark-500"
          >
            <Mail size={20} />
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex justify-center gap-6"
        >
          <motion.a
            href="[linkedin.com](https://linkedin.com/in/akishiya022)"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            className="p-3 rounded-full bg-white dark:bg-dark-600 shadow-lg 
                       text-dark-500 dark:text-dark-200 hover:text-primary-500 
                       dark:hover:text-primary-400 transition-colors"
          >
            <Linkedin size={24} />
          </motion.a>

          <motion.a
            href="[github.com](https://github.com/akishiya022)"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            className="p-3 rounded-full bg-white dark:bg-dark-600 shadow-lg 
                       text-dark-500 dark:text-dark-200 hover:text-primary-500 
                       dark:hover:text-primary-400 transition-colors"
          >
            <Github size={24} />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-dark-300 dark:border-dark-500 
                       flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-3 rounded-full bg-primary-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
