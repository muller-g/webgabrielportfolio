import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Footer: React.FC = () => {
  const t = useTranslation();

  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-900 dark:bg-black text-white">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <div className="flex items-center justify-center md:justify-start mb-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-2xl font-bold text-white">G</span>
                </div>
                <span className="text-2xl font-bold">Gabriel</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {t.footer.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h3 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h3>
              <div className="space-y-3">
                {[
                  { key: 'home', href: '#home' },
                  { key: 'about', href: '#about' },
                  { key: 'skills', href: '#skills' },
                  { key: 'projects', href: '#projects' },
                  { key: 'contact', href: '#contact' }
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => {
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm md:text-base"
                  >
                    {t.nav[item.key as keyof typeof t.nav]}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h3 className="text-lg font-semibold mb-4">{t.footer.connect}</h3>
              <div className="space-y-3 mb-6">
                <a
                  href="mailto:gabriel_muller98@hotmail.com"
                  className="flex items-center justify-center md:justify-start text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm md:text-base"
                >
                  <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="break-all">gabriel_muller98@hotmail.com</span>
                </a>
              </div>
              
              <div className="flex justify-center md:justify-start space-x-3">
                <a
                  href="https://github.com/muller-g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muller-g/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:gabriel_muller98@hotmail.com"
                  className="p-3 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left px-4 md:px-0">
                <p className="text-gray-400 text-sm">
                  © {currentYear} Gabriel. {t.footer.rights}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  {t.footer.backToTop}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;