import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cloud, Smartphone, Brain, Shield } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ElementType;
  character: string;
  description: string;
  color: string;
}

interface SkillsProps {
  soundEnabled: boolean;
}

const Skills: React.FC<SkillsProps> = ({ soundEnabled }) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [poweringUp, setPoweringUp] = useState<string | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const handleSkillClick = (skillName: string) => {
    setPoweringUp(skillName);
    setTimeout(() => setPoweringUp(null), 2000);
  };

  const skills: Skill[] = [
    {
      name: "JavaScript/TypeScript",
      level: 90,
      icon: Code,
      character: "Goku",
      description: "Like Goku's mastery of martial arts, I've achieved Super Saiyan level in JavaScript!",
      color: "from-yellow-400 to-orange-500"
    },
    {
      name: "React/Next.js",
      level: 85,
      icon: Code,
      character: "Vegeta",
      description: "The Prince of all Frameworks! My React skills are as refined as Vegeta's Final Flash.",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Node.js",
      level: 80,
      icon: Database,
      character: "Piccolo",
      description: "Strategic and powerful like Piccolo, handling backend operations with wisdom.",
      color: "from-green-400 to-emerald-500"
    },
    {
      name: "Python",
      level: 85,
      icon: Brain,
      character: "Gohan",
      description: "Scholarly and analytical like Gohan, perfect for data science and AI projects.",
      color: "from-purple-400 to-purple-600"
    },
    {
      name: "AWS/Cloud",
      level: 75,
      icon: Cloud,
      character: "Trunks",
      description: "Future-focused technology, just like Trunks from the future timeline.",
      color: "from-cyan-400 to-blue-500"
    },
    {
      name: "Mobile Development",
      level: 70,
      icon: Smartphone,
      character: "Goten",
      description: "Young but promising, rapidly growing stronger in the mobile development realm.",
      color: "from-pink-400 to-red-500"
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
          Power Levels & Abilities
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              onClick={() => handleSkillClick(skill.name)}
            >
              <motion.div
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-400/30 cursor-pointer h-full"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                }}
                animate={{
                  borderColor: poweringUp === skill.name 
                    ? ['rgba(251, 146, 60, 0.8)', 'rgba(34, 197, 94, 0.8)', 'rgba(251, 146, 60, 0.8)']
                    : hoveredSkill === skill.name 
                      ? 'rgba(251, 146, 60, 0.8)' 
                      : 'rgba(59, 130, 246, 0.3)',
                  boxShadow: poweringUp === skill.name
                    ? ['0 0 20px rgba(251, 146, 60, 0.8)', '0 0 40px rgba(34, 197, 94, 0.8)', '0 0 20px rgba(251, 146, 60, 0.8)']
                    : '0 10px 30px rgba(0, 0, 0, 0.3)'
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Power-up Effect */}
                {poweringUp === skill.name && (
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400/20 to-orange-500/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: [0, 1, 0], 
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{ duration: 2, repeat: 1 }}
                  />
                )}
                
                <div className="flex items-center mb-4">
                  <motion.div
                    className={`p-3 rounded-full bg-gradient-to-r ${skill.color} mr-4`}
                    animate={{
                      scale: hoveredSkill === skill.name ? 1.2 : 1,
                      boxShadow: hoveredSkill === skill.name 
                        ? ['0 0 20px rgba(251, 146, 60, 0.8)', '0 0 40px rgba(251, 146, 60, 0.6)', '0 0 20px rgba(251, 146, 60, 0.8)']
                        : '0 0 10px rgba(59, 130, 246, 0.3)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <skill.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{skill.name}</h3>
                    <p className="text-orange-300 text-sm">{skill.character}</p>
                    {poweringUp === skill.name && (
                      <motion.p
                        className="text-yellow-300 text-xs font-bold"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.5, repeat: 4 }}
                      >
                        POWERING UP!
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* Power Level Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Power Level</span>
                    <span className="text-sm font-bold text-orange-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>

                {/* Tooltip */}
                <AnimatePresence>
                  {hoveredSkill === skill.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute z-10 bg-slate-900 border border-orange-400 rounded-lg p-3 -top-16 left-1/2 transform -translate-x-1/2 w-64"
                    >
                      <p className="text-sm text-gray-300">{skill.description}</p>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-orange-400" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Power Reading Display */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="bg-green-500/20 backdrop-blur-sm border border-green-400 rounded-lg p-6 inline-block">
            <div className="text-green-400 font-mono">
              <div className="text-sm mb-2">COMBINED POWER READING</div>
              <motion.div
                className="text-3xl font-bold"
                animate={{
                  color: ['#4ADE80', '#22C55E', '#16A34A', '#15803D'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                {Math.round(skills.reduce((total, skill) => total + skill.level, 0) / skills.length)}% EFFICIENCY
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;