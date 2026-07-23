import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Code, Palette, Brain } from 'lucide-react';

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    { icon: Brain, text: 'AI & Data Science', color: 'bg-blue-500' },
    { icon: Code, text: 'Web Development', color: 'bg-green-500' },
    { icon: Palette, text: 'UI/UX Design', color: 'bg-purple-500' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-dark-700 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Decorative element / Avatar area */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Animated background circles */}
              <motion.div
                className="absolute inset-0 rounded-full bg-primary-200 dark:bg-primary-900/30"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-4 rounded-full bg-primary-300 dark:bg-primary-800/40"
                animate={{ scale: [1.1, 1, 1.1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div className="absolute inset-8 rounded-full bg-primary-500 flex items-center justify-center">
                <User size={80} className="text-white" />
              </div>

              {/* Floating skill badges */}
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  className={`absolute ${item.color} text-white px-3 py-1.5 rounded-full 
                              text-sm font-medium shadow-lg flex items-center gap-2`}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, delay: index * 0.3, repeat: Infinity }}
                  style={{
                    top: index === 0 ? '0%' : index === 1 ? '50%' : '85%',
                    left: index === 0 ? '60%' : index === 1 ? '-10%' : '70%',
                  }}
                >
                  <item.icon size={16} />
                  {item.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass dark:glass-dark rounded-2xl p-6 md:p-8">
              <p className="text-dark-500 dark:text-dark-200 leading-relaxed mb-4">
                I am currently pursuing{' '}
                <span className="font-semibold text-primary-500">
                  B.Tech in Artificial Intelligence and Data Science
                </span>{' '}
                at Rohini College of Engineering and Technology.
              </p>
              <p className="text-dark-500 dark:text-dark-200 leading-relaxed mb-4">
                I enjoy developing web applications, designing mobile interfaces in 
                Figma, and exploring AI-powered solutions that solve real-world problems.
              </p>
              <p className="text-dark-500 dark:text-dark-200 leading-relaxed">
                I have completed internships in{' '}
                <span className="font-semibold text-primary-500">
                  Full Stack Python Development
                </span>{' '}
                and{' '}
                <span className="font-semibold text-primary-500">
                  Full Stack Web Development
                </span>
                , gaining practical industry experience.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '2+', label: 'Internships' },
                { value: '4+', label: 'Projects' },
                { value: '8.07', label: 'CGPA' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-white dark:bg-dark-600 shadow-lg"
                >
                  <p className="font-display font-bold text-2xl md:text-3xl gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-dark-400 dark:text-dark-300 text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
