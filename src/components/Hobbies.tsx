import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Music, Palette, TowerControl as GameController, Book, Camera, Headphones } from 'lucide-react';

interface Hobby {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  details: string[];
  color: string;
}

interface HobbiesProps {
  soundEnabled: boolean;
}

const Hobbies: React.FC<HobbiesProps> = ({ soundEnabled }) => {
  const [openCapsule, setOpenCapsule] = useState<string | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const hobbies: Hobby[] = [
    {
      id: 'music',
      title: 'Music Production',
      icon: Music,
      description: 'Creating beats and melodies that resonate with the soul',
      details: [
        'Electronic music production using Ableton Live',
        'Mixing and mastering techniques',
        'Sound design and synthesis',
        'Collaboration with local artists'
      ],
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 'fragrances',
      title: 'Fragrance Collection',
      icon: Palette,
      description: 'Exploring the art of scent and olfactory experiences',
      details: [
        'Curating unique and rare fragrances',
        'Understanding fragrance notes and composition',
        'Seasonal scent rotation',
        'Discovering niche perfume houses'
      ],
      color: 'from-amber-400 to-orange-500'
    },
    {
      id: 'animation',
      title: 'Animation Studies',
      icon: GameController,
      description: 'Analyzing the craft behind animated masterpieces',
      details: [
        'Frame-by-frame animation techniques',
        'Character development and storytelling',
        'Studio analysis (Toei, Madhouse, Bones)',
        'Animation history and evolution'
      ],
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 'reading',
      title: 'Technical Reading',
      icon: Book,
      description: 'Continuous learning through books and research',
      details: [
        'Computer science textbooks and papers',
        'Technology blogs and articles',
        'Philosophy and critical thinking',
        'Biographies of tech leaders'
      ],
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 'photography',
      title: 'Photography',
      icon: Camera,
      description: 'Capturing moments and exploring visual composition',
      details: [
        'Street photography and urban exploration',
        'Digital editing and post-processing',
        'Landscape and nature photography',
        'Portrait and event photography'
      ],
      color: 'from-red-400 to-rose-500'
    },
    {
      id: 'podcasts',
      title: 'Podcast Listening',
      icon: Headphones,
      description: 'Staying informed through audio content',
      details: [
        'Technology and startup podcasts',
        'Comedy and entertainment shows',
        'Educational content and interviews',
        'News and current events analysis'
      ],
      color: 'from-indigo-400 to-purple-500'
    }
  ];

  const toggleCapsule = (id: string) => {
    setOpenCapsule(openCapsule === id ? null : id);
  };

  return (
    <div className="min-h-screen py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-orange-400 text-center mb-8"
        >
          Capsule Corp Collection
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center text-gray-300 mb-16 max-w-2xl mx-auto"
        >
          Just like Bulma's capsule technology, I keep my interests stored in compact forms. 
          Click each capsule to reveal the full scope of my passions!
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <motion.div
                className="cursor-pointer"
                onClick={() => toggleCapsule(hobby.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`bg-gradient-to-r ${hobby.color} rounded-full p-1 mb-4`}>
                  <div className="bg-slate-800 rounded-full p-6">
                    <div className="text-center">
                      <hobby.icon className="w-8 h-8 text-white mx-auto mb-2" />
                      <h3 className="text-white font-bold">{hobby.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>

              <AnimatePresence>
                {openCapsule === hobby.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -20 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-400/30 mt-4"
                  >
                    <p className="text-gray-300 mb-4">{hobby.description}</p>
                    <ul className="space-y-2">
                      {hobby.details.map((detail, detailIndex) => (
                        <motion.li
                          key={detailIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: detailIndex * 0.1 }}
                          className="flex items-start text-sm text-gray-400"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${hobby.color} mt-2 mr-3 flex-shrink-0`} />
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Capsule Corp Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-400/30">
            <div className="text-blue-300 font-bold text-lg mb-2">CAPSULE CORP</div>
            <div className="text-gray-400 text-sm">
              "Hoi-Poi Capsule Technology" - Compacting Life's Passions
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hobbies;