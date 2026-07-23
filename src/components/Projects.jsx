import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Smartphone } from 'lucide-react';

// Project data
const projects = [
  {
    title: 'SafePath AI',
    subtitle: "Predictive Women's & Student Safety Network",
    description:
      'Built an AI-assisted safety web application with secure authentication and database integration using Supabase. Currently developing the mobile application version.',
    technologies: ['React 18', 'Vite', 'Tailwind CSS', 'React Router', 'Supabase'],
    type: 'web',
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    title: 'Expense Tracker',
    subtitle: 'Mobile App UI Design',
    description:
      'Designed a comprehensive expense tracking mobile application with features for expense management, savings goals, expense history, and user profiles.',
    features: ['Expense Management', 'Savings Goal', 'Expense History', 'Profile'],
    type: 'design',
    featured: false,
  },
  {
    title: 'Quick Learn',
    subtitle: 'Educational Mobile App',
    description:
      'Educational mobile application designed in Figma with interactive courses, quizzes, dashboard analytics, and an AI chatbot for learning assistance.',
    features: ['Courses', 'Quiz', 'Dashboard', 'AI Chatbot'],
    type: 'design',
    featured: false,
  },
  {
    title: 'NewsBook',
    subtitle: 'News Mobile App UI',
    description:
      'Modern news mobile application UI featuring categorized news sections for politics, technology, sports, and a sleek navigation system.',
    features: ['Politics', 'Technology', 'Sports', 'Modern Navigation'],
    type: 'design',
    featured: false,
  },
];

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 md:py-32 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-dark-700 dark:text-white mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`glass dark:glass-dark rounded-2xl overflow-hidden card-hover ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              {/* Project Header */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {project.type === 'design' && (
                        <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-medium">
                          Figma Design
                        </span>
                      )}
                      {project.featured && (
                        <span className="px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="font-display font-bold text-xl md:text-2xl text-dark-700 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-primary-500 font-medium">{project.subtitle}</p>
                  </div>

                  {project.type === 'design' && (
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Smartphone size={24} className="text-white" />
                    </div>
                  )}
                </div>

                <p className="text-dark-500 dark:text-dark-200 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies or Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {(project.technologies || project.features)?.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full bg-white dark:bg-dark-600 
                                 text-dark-600 dark:text-dark-200 text-sm font-medium 
                                 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                {project.type === 'web' && (
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full 
                                 bg-dark-700 dark:bg-dark-600 text-white font-medium 
                                 hover:bg-dark-800 transition-colors"
                    >
                      <Github size={18} />
                      GitHub
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full 
                                 bg-primary-500 text-white font-medium 
                                 hover:bg-primary-600 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </motion.a>
                  </div>
                )}

                {/* Mobile Mockup for Design Projects */}
                {project.type === 'design' && (
                  <div className="flex gap-4 mt-6">
                    {project.features?.slice(0, 3).map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: index * 0.15 + i * 0.1 + 0.3 }}
                        className="flex-1 aspect-[9/16] rounded-2xl bg-gradient-to-br 
                                   from-primary-100 to-primary-200 
                                   dark:from-dark-600 dark:to-dark-700 
                                   flex items-center justify-center p-4 shadow-inner"
                      >
                        <span className="text-center text-sm font-medium text-dark-500 dark:text-dark-200">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
