import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Music, Palette, TowerControl as GameController, Book, Camera, Headphones, Watch } from 'lucide-react';

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
      id: 'fragrances',
      title: 'Fragrance Collection',
      icon: Palette,
      description: 'my favorite scents',
      details: [
        'YSL Y EDP',
        'Tom Ford Fucking Fabulous',
        'Jean Paul Gaultier Scandal',
        'Jean Paul Gaultier Le Male'
      ],
      color: 'from-amber-400 to-orange-500'
    },
    {
      id: 'reading',
      title: 'Timepieces',
      icon: Watch,
      description: 'I love collecting watches; currently I own 3',
      details: [
        'Casio Vinatge D182: Love the grey retro look',
        'HMT Himalaya: A super rare classic Indian watch with a timeless design',
        'Seiko 5: Loved saving up for this one, it has a beautiful automatic movement',
        'Currently saving up for a Citizen Zenshin :)',
      ],
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 'podcasts',
      title: 'Podcast Listening',
      icon: Headphones,
      description: 'My favorite hobby; my favorites mentioned here',
      details: [
        'Lenny’s Podcast',
        'Prakhar ke Pravachan',
        'WTF by Nikhil Kamath',
        'FLAGRANT with Andrew Schulz/Akaash Singh',
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