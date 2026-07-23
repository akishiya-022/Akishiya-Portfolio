import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Languages as LanguagesIcon } from 'lucide-react';

// Language data
const languages = [
  { name: 'English', level: 'Professional', flag: '🇬🇧', proficiency: 85 },
  { name: 'Tamil', level: 'Native', flag: '🇮🇳', proficiency: 100 },
];

function Languages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="languages" className="py-20 md:py-32 px-4" ref={ref}>
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-dark-700 dark:text-white mb-4">
            <span className="gradient-text">Languages</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
        </motion.div>

        {/* Languages Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="glass dark:glass-dark rounded-2xl p-6 card-hover"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{lang.flag}</span>
                <div>
                  <h3 className="font-display font-bold text-xl text-dark-700 dark:text-white">
                    {lang.name}
                  </h3>
                  <p className="text-primary-500 font-medium text-sm">{lang.level}</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-2 bg-dark-100 dark:bg-dark-600 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${lang.proficiency}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.15 + 0.3 }}
                  className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Languages;
