import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Calendar } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Projects: React.FC = () => {
  const t = useTranslation();

  const projects = [
    {
      id: 1,
      title: t.projects.projects[0].title,
      description: t.projects.projects[0].description,
      image: '/assets/onlyfilms.png',
      technologies: ['Nodejs', 'React', 'PostgreSQL'],
      github: 'https://github.com/muller-g/only-films',
      demo: 'https://onlyfilms.com.br/',
      featured: true,
      year: '2025'
    },
    {
      id: 2,
      title: t.projects.projects[1].title,
      description: t.projects.projects[1].description,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      technologies: ['Node.js', 'WhatsApp API', 'OpenAI', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      year: '2024'
    },
    {
      id: 3,
      title: t.projects.projects[2].title,
      description: t.projects.projects[2].description,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Docker'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      year: '2023'
    },
    {
      id: 4,
      title: t.projects.projects[3].title,
      description: t.projects.projects[3].description,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'NestJS', 'MySQL', 'Redis'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      year: '2023'
    },
    {
      id: 5,
      title: t.projects.projects[4].title,
      description: t.projects.projects[4].description,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      technologies: ['Node.js', 'Twilio', 'Bull Queue', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      year: '2023'
    },
    {
      id: 6,
      title: t.projects.projects[5].title,
      description: t.projects.projects[5].description,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      technologies: ['React', 'D3.js', 'Express.js', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      year: '2022'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t.projects.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    {t.projects.featured}
                  </span>
                </div>
              )}

              <div 
                style={{ 
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'top center',
                  backgroundRepeat: 'no-repeat'
                }}
                className={`relative overflow-hidden ${
                project.featured ? 'h-64 lg:h-80' : 'h-48'
              }`}>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">G</span>
                    </div>
                    <p className="text-white font-medium drop-shadow-lg">
                      {project.title}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.year}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    {t.projects.viewCode}
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t.projects.viewProject}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {t.projects.interested}
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              {t.projects.interestedDesc}
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              {t.projects.letsTalk}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
