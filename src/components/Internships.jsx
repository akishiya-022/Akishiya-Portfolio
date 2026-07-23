import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, CheckCircle } from 'lucide-react';

// Internship data
const internships = [
  {
    company: 'Spectrum Softtech',
    role: 'Full Stack Python Intern',
    highlights: [
      'Learned Python Full Stack development',
      'Worked with frontend and backend concepts',
      'Built web applications using VS Code',
    ],
    color: 'from-blue-500 to-indigo-500',
  },
  {
    company: 'AK Info Park',
    role: 'Full Stack Web Development Intern',
    highlights: [
      'Learned HTML, CSS and web development',
      'Developed responsive websites',
    ],
    color: 'from-green-500 to-teal-500',
  },
];

function Internships() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="internships" className="py-20 md:py-32 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-dark-700 dark:text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-900 transform md:-translate-x-1/2" />

          {internships.map((internship, index) => (
            <motion.div
              key={internship.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${internship.color} 
                            transform -translate-x-1/2 border-4 border-white dark:border-dark-800 z-10`}
              />

              {/* Card */}
              <div
                className={`ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                }`}
              >
                <div className="glass dark:glass-dark rounded-2xl p-6 md:p-8 card-hover">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${internship.color} 
                                  flex items-center justify-center shadow-lg flex-shrink-0`}
                    >
                      <Briefcase size={24} className="text-white" />
                    </div>
                    <div className={index % 2 === 0 ? 'md:text-right md:ml-auto' : ''}>
                      <h3 className="font-display font-bold text-xl text-dark-700 dark:text-white">
                        {internship.company}
                      </h3>
                      <p className="text-primary-500 font-medium">{internship.role}</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {internship.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className={`flex items-start gap-3 ${
                          index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                        }`}
                      >
                        <CheckCircle
                          size={20}
                          className="text-green-500 flex-shrink-0 mt-0.5"
                        />
                        <span className="text-dark-500 dark:text-dark-200">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Internships;
