import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';


const Hero: React.FC = () => {
  const t = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-dark-900 dark:to-dark-800 pt-10 sm:pt-24 lg:pt-0">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1 overflow-x-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                {t.hero.greeting}
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mt-2">
                {t.hero.name}
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-600 dark:text-primary-400 mt-4">
                {t.hero.title}
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto lg:mx-0"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base text-gray-500 dark:text-gray-500 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollToSection('#projects')}
                className="btn-primary text-lg px-8 py-3"
              >
                {t.hero.cta}
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-secondary text-lg px-8 py-3"
              >
                {t.hero.contact}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex justify-center lg:justify-start space-x-6 mt-8"
            >
              <a
                href="https://github.com/muller-g"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors duration-200 group"
              >
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/muller-g/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors duration-200 group"
              >
                <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
              </a>
              <a
                href="mailto:gabriel_muller98@hotmail.com"
                className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors duration-200 group"
              >
                <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full h-80 sm:h-96 lg:h-[500px] max-[599px]:h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-3xl transform rotate-3"></div>
              
              <div className="relative bg-white dark:bg-dark-800 rounded-3xl shadow-2xl p-8 h-full flex flex-col justify-center items-center">
                <div className="img-gb-container"></div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {t.hero.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                  {t.hero.title}
                </p>
                
                <div className="flex flex-wrap gap-3 justify-center">
                  {['React', 'Node.js', 'Laravel', 'Vue.js', 'TypeScript', 'Docker'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-10"
        >
          <button
            onClick={() => scrollToSection('#about')}
            className="animate-bounce-slow p-2 bg-white/80 dark:bg-dark-800/80 rounded-full shadow-lg backdrop-blur-sm"
          >
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 dark:text-gray-500" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;