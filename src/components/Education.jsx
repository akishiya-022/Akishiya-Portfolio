import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-20 md:py-32 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-dark-700 dark:text-white mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="glass dark:glass-dark rounded-3xl p-8 md:p-12 card-hover">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 rounded-t-3xl" />

            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary-500 flex items-center justify-center shadow-lg shadow-primary-500/30">
                  <GraduationCap size={36} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="font-display font-bold text-xl md:text-2xl text-dark-700 dark:text-white mb-2">
                  Bachelor of Technology
                </h3>
                <p className="text-primary-500 font-semibold text-lg mb-3">
                  Artificial Intelligence & Data Science
                </p>
                <p className="text-dark-500 dark:text-dark-200 mb-4">
                  Rohini College of Engineering and Technology
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30">
                    <Award size={18} className="text-primary-500" />
                    <span className="font-semibold text-primary-600 dark:text-primary-400">
                      CGPA: 8.07/10
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark-100 dark:bg-dark-600">
                    <Calendar size={18} className="text-dark-400" />
                    <span className="text-dark-500 dark:text-dark-200">
                      Final Year
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
