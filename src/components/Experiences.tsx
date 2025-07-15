import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, Zap } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

interface ExperiencesProps {
  soundEnabled: boolean;
}

const Experiences: React.FC<ExperiencesProps> = ({ soundEnabled }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const experiences: ExperienceItem[] = [
    {
      title: "Software Development Intern",
      company: "Tech Corp",
      period: "Summer 2024",
      description: "Developed scalable web applications using React and Node.js, contributing to a 40% increase in user engagement.",
      technologies: ["React", "Node.js", "MongoDB", "AWS"]
    },
    {
      title: "Research Assistant",
      company: "NJIT Computer Science Department",
      period: "Spring 2024",
      description: "Assisted in machine learning research projects, focusing on natural language processing and data analysis.",
      technologies: ["Python", "TensorFlow", "NLP", "Data Analysis"]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "Fall 2023",
      description: "Built responsive user interfaces and implemented modern design patterns for a fintech application.",
      technologies: ["Vue.js", "TypeScript", "Tailwind CSS", "REST APIs"]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-orange-400 text-center mb-16"
        >
          Battle Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 via-yellow-400 to-green-400" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative flex items-center mb-12"
            >
              {/* Timeline Node */}
              <motion.div
                className="absolute left-6 w-4 h-4 bg-orange-400 rounded-full z-10"
                whileHover={{ scale: 1.5 }}
                animate={{
                  boxShadow: [
                    '0 0 10px rgba(251, 146, 60, 0.5)',
                    '0 0 20px rgba(251, 146, 60, 0.8)',
                    '0 0 10px rgba(251, 146, 60, 0.5)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />

              {/* Experience Card */}
              <motion.div
                className="ml-16 bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-400/30 flex-1"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <Briefcase className="w-6 h-6 text-orange-400 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-blue-300 font-medium">{exp.company}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4 text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{exp.period}</span>
                </div>

                <p className="text-gray-300 mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm"
                      whileHover={{ scale: 1.1 }}
                      animate={{
                        boxShadow: [
                          '0 0 5px rgba(251, 146, 60, 0.3)',
                          '0 0 10px rgba(251, 146, 60, 0.6)',
                          '0 0 5px rgba(251, 146, 60, 0.3)',
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: techIndex * 0.5,
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Energy Burst Effect */}
                <motion.div
                  className="absolute -top-2 -right-2 opacity-0"
                  whileHover={{ opacity: 1 }}
                >
                  <Zap className="w-6 h-6 text-yellow-400" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;