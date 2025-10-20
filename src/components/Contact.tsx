import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useApp } from '../context/AppContext';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const t = useTranslation();
  const { language } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs
      .send(process.env.REACT_APP_SERVICE_ID || '', process.env.REACT_APP_TEMPLATE_ID || '', formData, process.env.REACT_APP_PUBLIC_KEY)
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitStatus('success');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setIsSubmitting(false);
          setSubmitStatus('error');
        },
    );
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.emailLabel,
      value: 'gabriel_muller98@hotmail.com',
      href: 'mailto:gabriel_muller98@hotmail.com'
    },
    {
      icon: MapPin,
      label: t.contact.location,
      value: t.contact.locationValue,
      href: '#'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-dark-700"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t.contact.sendMessage}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white transition-colors duration-200"
                  placeholder={language === 'pt' ? 'Seu nome completo' : 'Your full name'}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white transition-colors duration-200"
                  placeholder={language === 'pt' ? 'seu@email.com' : 'your@email.com'}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white transition-colors duration-200 resize-none"
                  placeholder={t.contact.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-lg py-3 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    {t.contact.sending}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    {t.contact.send}
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  {t.contact.success}
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg"
                >
                  <AlertCircle className="w-5 h-5 mr-2" />
                  {t.contact.error}
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t.contact.info}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {t.contact.contactDesc}
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-white dark:bg-dark-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 group"
                >
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg mr-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors duration-200">
                    <info.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {info.label}
                    </div>
                    <div className="text-gray-900 dark:text-white font-semibold">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white"
            >
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></div>
                <span className="font-semibold">Status</span>
              </div>
              <p className="text-green-100">
                {t.contact.availability}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-dark-700"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {t.contact.connect}
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/muller-g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-dark-800 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200"
                >
                  <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/muller-g/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-dark-800 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200"
                >
                  <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="mailto:gabriel_muller98@hotmail.com"
                  className="p-3 bg-gray-100 dark:bg-dark-800 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200"
                >
                  <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;