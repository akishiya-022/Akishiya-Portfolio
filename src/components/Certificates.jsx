import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';

// Certificate data
const certificates = [
  {
    title: 'Full Stack Python Internship',
    issuer: 'Spectrum Softtech',
    icon: '🐍',
  },
  {
    title: 'Full Stack Web Development Internship',
    issuer: 'AK Info Park',
    icon: '🌐',
  },
  {
    title: 'UI/UX Design Workshop',
    issuer: 'Workshop Certificate',
    icon: '🎨',
  },
  {
    title: 'Machine Learning Workshop',
    issuer: 'Workshop Certificate',
    icon: '🤖',
  },
];

function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certificates" className="py-20 md:py-32 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-dark-700 dark:text-white mb-4">
            <span className="gradient-text">Certificates</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass dark:glass-dark rounded-2xl p-6 text-center card-hover group"
            >
              {/* Icon */}
              <motion.div
                className="text-5xl mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              >
                {cert.icon}
              </motion.div>

              {/* Award icon */}
              <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 mx-auto mb-4 flex items-center justify-center">
                <Award size={24} className="text-primary-500" />
              </div>

              {/* Title */}
              <h3 className="font-display font-semibold text-dark-700 dark:text-white mb-2 leading-tight">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="text-dark-400 dark:text-dark-300 text-sm">
                {cert.issuer}
              </p>

              {/* Hover indicator */}
              <motion.div
                className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <span className="inline-flex items-center gap-1 text-primary-500 text-sm font-medium">
                  View <ExternalLink size={14} />
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
