import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-dark-100 dark:border-dark-700">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo */}
          <motion.p
            className="font-display font-bold text-xl gradient-text mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Akishiya A
          </motion.p>

          {/* Copyright */}
          <p className="text-dark-400 dark:text-dark-300 text-sm flex items-center justify-center gap-2 flex-wrap">
            © {currentYear} Akishiya A. Built with React, Tailwind CSS and
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart size={16} className="text-red-500 fill-red-500" />
            </motion.span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
