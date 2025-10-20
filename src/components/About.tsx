import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Calendar, Code, Zap, Target } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const About: React.FC = () => {
  const t = useTranslation();

  const stats = [
    {
      icon: Calendar,
      value: t.about.sinceDate,
      label: t.about.marketActive,
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Code,
      value: '50+',
      label: t.about.projects,
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: Users,
      value: '12+',
      label: t.about.companies,
      color: 'text-purple-600 dark:text-purple-400'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: t.about.subtitle,
      description: t.about.description
    },
    {
      icon: Target,
      title: t.about.diverseExperience,
      description: t.about.experience
    },
    {
      icon: Award,
      title: t.about.commitment,
      description: t.about.ownership
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t.about.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.about.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white dark:bg-dark-800 rounded-2xl hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-dark-700"
            >
              <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-800 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-dark-700"
            >
              <feature.icon className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            {t.about.journey}
          </h3>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 dark:bg-primary-800"></div>
            
            <div className="space-y-8 md:space-y-12">
              {[
                {
                  year: '2021',
                  title: t.about.careerStart,
                  description: t.about.careerStartDesc,
                  side: 'left'
                },
                {
                  year: '2022',
                  title: t.about.skillsExpansion,
                  description: t.about.skillsExpansionDesc,
                  side: 'right'
                },
                {
                  year: '2022',
                  title: t.about.complexProjects,
                  description: t.about.complexProjectsDesc,
                  side: 'left'
                },
                {
                  year: '2022',
                  title: t.about.techLeadership,
                  description: t.about.techLeadershipDesc,
                  side: 'right'
                },
                {
                  year: '2023',
                  title: t.about.newChallenges,
                  description: t.about.newChallengesDesc,
                  side: 'left'
                },
                {
                  year: '2025',
                  title: t.about.today,
                  description: t.about.todayDesc,
                  side: 'right'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    item.side === 'left' ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  <div className="w-full md:hidden">
                    <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-dark-700">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-primary-600 dark:bg-primary-400 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-bold text-lg">{item.year}</span>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className={`hidden md:block w-1/2 ${item.side === 'left' ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-dark-700">
                      <div className="text-primary-600 dark:text-primary-400 font-bold text-lg mb-2">
                        {item.year}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-dark-900"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;