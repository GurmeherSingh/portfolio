import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Trophy, Star, Zap } from 'lucide-react';

interface OnCampusProps {
  soundEnabled: boolean;
}

const OnCampus: React.FC<OnCampusProps> = ({ soundEnabled }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const activities = [
    {
      title: "Computer Science Club Secretary",
      description: "Leading initiatives to connect students with industry professionals and organizing coding workshops.",
      icon: Users,
      color: "from-blue-400 to-blue-600",
      achievements: ["Organized 5 tech talks", "Increased membership by 40%", "Led coding bootcamp"]
    },
    {
      title: "Racquetball Tournament Champion",
      description: "Competed in and won multiple campus racquetball tournaments, bringing the fighting spirit to sports.",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500",
      achievements: ["3 tournament wins", "Team captain", "Mentored newcomers"]
    },
    {
      title: "Peer Tutor - Data Structures",
      description: "Helping fellow students master complex algorithms and data structures with patience and clarity.",
      icon: Star,
      color: "from-green-400 to-emerald-500",
      achievements: ["50+ students tutored", "4.9/5 rating", "Algorithm specialist"]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-orange-400 text-center mb-16"
        >
          Campus Training Grounds
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <motion.div
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-400/30 h-full"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Aura Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-lg bg-gradient-to-r ${activity.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <motion.div
                      className={`p-3 rounded-full bg-gradient-to-r ${activity.color} mr-4`}
                      animate={{
                        boxShadow: [
                          '0 0 10px rgba(59, 130, 246, 0.5)',
                          '0 0 20px rgba(59, 130, 246, 0.8)',
                          '0 0 10px rgba(59, 130, 246, 0.5)',
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    >
                      <activity.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white">{activity.title}</h3>
                  </div>

                  <p className="text-gray-300 mb-6">{activity.description}</p>

                  <div className="space-y-2">
                    {activity.achievements.map((achievement, achievementIndex) => (
                      <motion.div
                        key={achievementIndex}
                        className="flex items-center text-sm text-gray-400"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + achievementIndex * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                        {achievement}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Power-up Effect */}
                <motion.div
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Zap className="w-5 h-5 text-yellow-400" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnCampus;