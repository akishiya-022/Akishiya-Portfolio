import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Wrench, Sparkles } from 'lucide-react';

// Skills data organized by category
const skillsData = {
  programming: {
    title: 'Programming',
    icon: Code,
    skills: ['Python (Basic)', 'HTML', 'CSS', 'JavaScript', 'SQL', 'React (Basic)'],
    color: 'from-blue-500 to-cyan-500',
  },
  tools: {
    title: 'Tools',
    icon: Wrench,
    skills: ['VS Code', 'Figma', 'Git (Basic)'],
    color: 'from-purple-500 to-pink-500',
  },
  other: {
    title: 'Other',
    icon: Sparkles,
    skills: ['AI-assisted Application Development'],
    color: 'from-orange-500 to-red-500',
  },
};

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 md:py-32 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-dark-700 dark:text-white mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([key, category], categoryIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              className="glass dark:glass-dark rounded-2xl p-6 card-hover"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} 
                              flex items-center justify-center shadow-lg`}
                >
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-dark-700 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: categoryIndex * 0.15 + index * 0.1 + 0.3 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/50 
                               dark:bg-dark-700/50 transition-all"
                  >
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}
                    />
                    <span className="text-dark-600 dark:text-dark-200 font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
