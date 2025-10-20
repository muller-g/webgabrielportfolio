import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Database, 
  Settings,
  Palette,
  Cloud
} from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const TechIcon: React.FC<{ name: string; className?: string }> = ({ name, className = "w-6 h-6" }) => {
  const iconMap: { [key: string]: string } = {
    'React.js': '/assets/react.svg',
    'Vue.js': '/assets/vue.svg',
    'Next.js': '/assets/next.svg',
    'TypeScript': '/assets/typescript.svg',
    'JavaScript': '/assets/javascript.svg',
    'Tailwind CSS': '/assets/tailwind.svg',
    'Node.js': '/assets/nodejs.svg',
    'Laravel': '/assets/laravel.svg',
    'NestJS': '/assets/nestjs.svg',
    'PHP': '/assets/php.svg',
    'Express.js': '/assets/express.svg',
    'MySQL': '/assets/mysql.svg',
    'PostgreSQL': '/assets/postgresql.svg',
    'MongoDB': '/assets/mongodb.svg',
    'Redis': '/assets/redis.svg',
    'SQLite': '/assets/sqlite.svg',
    'Docker': '/assets/docker.svg',
    'Git': '/assets/git.svg',
    'AWS': '/assets/aws.svg',
    'Linux': '/assets/linux.svg',
    'Nginx': '/assets/nginx.svg',
    'GCP': '/assets/gcp.svg',
    'Terraform': '/assets/terraform.svg',
    'WhatsApp API': '/assets/whatsapp.svg'
  };

  const iconPath = iconMap[name];
  
  if (iconPath) {
    return (
      <img 
        src={iconPath} 
        alt={name} 
        className={className}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const fallback = target.nextElementSibling as HTMLElement;
          if (fallback) fallback.style.display = 'block';
        }}
      />
    );
  }
  
  return null;
};

const Skills: React.FC = () => {
  const t = useTranslation();

  const skillCategories = [
    {
      icon: Palette,
      title: t.skills.frontend,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900',
      skills: [
        { name: 'React.js', hasIcon: true },
        { name: 'Vue.js', hasIcon: true },
        { name: 'Next.js', hasIcon: true },
        { name: 'TypeScript', hasIcon: true },
        { name: 'JavaScript', hasIcon: true },
        { name: 'Tailwind CSS', hasIcon: true }
      ]
    },
    {
      icon: Server,
      title: t.skills.backend,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900',
      skills: [
        { name: 'Node.js', hasIcon: true },
        { name: 'Laravel', hasIcon: true },
        { name: 'NestJS', hasIcon: true },
        { name: 'PHP', hasIcon: true },
        { name: 'Express.js', hasIcon: true },
        { name: 'REST APIs', hasIcon: false, fallbackIcon: '🔗' }
      ]
    },
    {
      icon: Database,
      title: t.skills.database,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900',
      skills: [
        { name: 'MySQL', hasIcon: true },
        { name: 'PostgreSQL', hasIcon: true },
        { name: 'MongoDB', hasIcon: true },
        { name: 'Redis', hasIcon: true },
        { name: 'SQLite', hasIcon: true },
        { name: 'Elasticsearch', hasIcon: false, fallbackIcon: '🔍' }
      ]
    },
        {
          icon: Settings,
          title: t.skills.tools,
          color: 'text-orange-600 dark:text-orange-400',
          bgColor: 'bg-orange-100 dark:bg-orange-900',
          skills: [
            { name: 'Docker', hasIcon: true },
            { name: 'Git', hasIcon: true },
            { name: 'AWS', hasIcon: true },
            { name: 'Linux', hasIcon: true },
            { name: 'CI/CD', hasIcon: false, fallbackIcon: '🔄' },
            { name: 'Testing', hasIcon: false, fallbackIcon: '🧪' }
          ]
        },
        {
          icon: Cloud,
          title: t.skills.devops,
          color: 'text-indigo-600 dark:text-indigo-400',
          bgColor: 'bg-indigo-100 dark:bg-indigo-900',
          skills: [
            { name: 'Nginx', hasIcon: true },
            { name: 'AWS', hasIcon: true },
            { name: 'GCP', hasIcon: true },
            { name: 'Docker', hasIcon: true },
            { name: 'Kubernetes', hasIcon: false, fallbackIcon: '⚙️' },
            { name: 'Terraform', hasIcon: true }
          ]
        }
  ];

  return (
    <section id="skills" className="section-padding bg-white dark:bg-dark-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t.skills.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-dark-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-dark-700"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl ${category.bgColor} mr-4`}>
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center p-3 bg-white dark:bg-dark-800 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors duration-200 border border-gray-200 dark:border-dark-600"
                  >
                    <div className="text-2xl mb-1 flex items-center justify-center w-8 h-8">
                      {skill.hasIcon ? (
                        <TechIcon name={skill.name} className="w-6 h-6" />
                      ) : (
                        <span>{skill.fallbackIcon}</span>
                      )}
                    </div>
                    <h4 className="text-xs font-semibold text-gray-900 dark:text-white text-center">
                      {skill.name}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            {t.skills.otherTech}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { name: 'WhatsApp API', hasIcon: true },
              { name: 'Chatbots', hasIcon: false, fallbackIcon: '🤖' },
              { name: 'E-commerce', hasIcon: false, fallbackIcon: '🛒' },
              { name: 'Payment Systems', hasIcon: false, fallbackIcon: '💳' },
              { name: 'CRM Systems', hasIcon: false, fallbackIcon: '📊' },
              { name: 'Landing Pages', hasIcon: false, fallbackIcon: '📄' },
              { name: 'Inventory Systems', hasIcon: false, fallbackIcon: '📦' },
              { name: 'Mass Messaging', hasIcon: false, fallbackIcon: '📢' },
              { name: 'Web Scraping', hasIcon: false, fallbackIcon: '🕷️' },
              { name: 'Automation', hasIcon: false, fallbackIcon: '⚙️' },
              { name: 'Microservices', hasIcon: false, fallbackIcon: '🔧' },
              { name: 'GraphQL', hasIcon: false, fallbackIcon: '📡' }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-3 bg-gray-50 dark:bg-dark-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-300 dark:border-dark-600 hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-md transition-all duration-200"
              >
                <div className="text-xl mb-1 flex items-center justify-center w-6 h-6">
                  {tech.hasIcon ? (
                    <TechIcon name={tech.name} className="w-5 h-5" />
                  ) : (
                    <span>{tech.fallbackIcon}</span>
                  )}
                </div>
                <span className="text-xs font-medium text-center">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">{t.skills.experience}</h3>
            <p className="text-primary-100 mb-6 max-w-3xl mx-auto">
              {t.skills.experienceDesc}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🚀</div>
                <h4 className="font-semibold mb-2">{t.skills.fullstackDev}</h4>
                <p className="text-sm text-primary-100">{t.skills.fullstackDesc}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="font-semibold mb-2">{t.skills.automation}</h4>
                <p className="text-sm text-primary-100">{t.skills.automationDesc}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-semibold mb-2">{t.skills.enterprise}</h4>
                <p className="text-sm text-primary-100">{t.skills.enterpriseDesc}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;