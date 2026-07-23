import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';

// Contact information
const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '7845101937',
    href: 'tel:7845101937',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'akishiya022@gmail.com',
    href: 'mailto:akishiya022@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Mekkamandapam',
    href: '#',
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: '[linkedin.com](https://linkedin.com/in/akishiya022)',
    color: 'hover:bg-blue-500',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: '[github.com](https://github.com/akishiya022)',
    color: 'hover:bg-gray-700',
  },
];

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-20 md:py-32 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-dark-700 dark:text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-dark-400 dark:text-dark-300 max-w-lg mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat!
          </p>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 glass dark:glass-dark rounded-xl card-hover group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform">
                  <item.icon size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-dark-400 dark:text-dark-300 text-sm">{item.label}</p>
                  <p className="font-semibold text-dark-700 dark:text-white">{item.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.6 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`w-12 h-12 rounded-xl bg-white dark:bg-dark-600 flex items-center 
                              justify-center shadow-lg text-dark-500 dark:text-dark-200 
                              ${social.color} hover:text-white transition-all`}
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass dark:glass-dark rounded-2xl p-6 md:p-8"
          >
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-dark-600 dark:text-dark-200 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-600 
                             border border-dark-100 dark:border-dark-500 
                             focus:border-primary-500 dark:focus:border-primary-500 
                             focus:ring-2 focus:ring-primary-500/20 outline-none 
                             transition-all text-dark-700 dark:text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-dark-600 dark:text-dark-200 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-600 
                             border border-dark-100 dark:border-dark-500 
                             focus:border-primary-500 dark:focus:border-primary-500 
                             focus:ring-2 focus:ring-primary-500/20 outline-none 
                             transition-all text-dark-700 dark:text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-dark-600 dark:text-dark-200 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-600 
                             border border-dark-100 dark:border-dark-500 
                             focus:border-primary-500 dark:focus:border-primary-500 
                             focus:ring-2 focus:ring-primary-500/20 outline-none 
                             transition-all resize-none text-dark-700 dark:text-white"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-primary-500 hover:bg-primary-600 
                           text-white font-semibold flex items-center justify-center gap-2 
                           shadow-lg shadow-primary-500/30 transition-colors"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
