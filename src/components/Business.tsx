import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Users, Code, Mail, ExternalLink } from 'lucide-react';

interface BusinessProps {
  soundEnabled: boolean;
}

const Business: React.FC<BusinessProps> = ({ soundEnabled }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const projects = [
    {
      title: "Artisans Network",
      description: "A platform connecting skilled artisans with customers, featuring real-time messaging, portfolio showcases, and project management tools.",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      status: "In Development",
      icon: Users,
      color: "from-red-500 to-red-700"
    },
    {
      title: "Code Mentor Platform",
      description: "An educational platform that pairs experienced developers with beginners, featuring interactive coding sessions and progress tracking.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "WebRTC"],
      status: "Planning Phase",
      icon: Code,
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Tech Startup Incubator",
      description: "A comprehensive resource hub for aspiring tech entrepreneurs, including pitch deck templates, funding resources, and mentorship programs.",
      technologies: ["React", "Express", "AWS", "Stripe"],
      status: "Concept",
      icon: Rocket,
      color: "from-green-500 to-green-700"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-orange-400 text-center mb-8"
        >
          Red Ribbon Army - Business Division
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center text-gray-300 mb-16 max-w-2xl mx-auto"
        >
          Like the Red Ribbon Army's technological innovations, I'm building solutions that 
          push the boundaries of what's possible. Each project represents a strategic advance 
          in the digital landscape.
        </motion.p>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <motion.div
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-red-400/30 h-full"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(239, 68, 68, 0.3)'
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'In Development' ? 'bg-green-500/20 text-green-300' :
                    project.status === 'Planning Phase' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-blue-500/20 text-blue-300'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <div className="flex items-center mb-4">
                  <motion.div
                    className={`p-3 rounded-full bg-gradient-to-r ${project.color} mr-4`}
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(239, 68, 68, 0.3)',
                        '0 0 40px rgba(239, 68, 68, 0.6)',
                        '0 0 20px rgba(239, 68, 68, 0.3)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    <project.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>

                <p className="text-gray-300 mb-6">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-red-300 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-red-500/20 text-red-300 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-red-500 to-red-700 text-white py-2 px-4 rounded-lg font-semibold hover:from-red-600 hover:to-red-800 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-red-400/30"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Build Something Revolutionary?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're looking for a technical co-founder, a development partner, or just 
            want to discuss innovative ideas, I'm always open to collaboration on projects 
            that can change the world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-500 to-red-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-red-800 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Start a Project</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Users className="w-5 h-5" />
              <span>Join the Network</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Business;