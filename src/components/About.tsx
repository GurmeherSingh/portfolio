import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, X } from 'lucide-react';

interface AboutProps {
  soundEnabled: boolean;
}

const About: React.FC<AboutProps> = ({ soundEnabled }) => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [showShenron, setShowShenron] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const summonShenron = () => {
    setShowShenron(true);
    setTimeout(() => setShowShenron(false), 5000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-6">
            About Me
          </h2>
          
          <div className="relative">
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-blue-400/30"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate Computer Science undergraduate at NJIT, driven by the same 
                determination that fuels the Saiyans in their quest for strength. Just like 
                Goku's endless pursuit of martial arts mastery, I'm constantly pushing my 
                limits in the world of technology and software development.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                My journey has taken me through various internships and projects, each one 
                making me stronger and more skilled. I believe in the power of continuous 
                learning and the importance of protecting what matters most - whether that's 
                building secure applications or creating meaningful connections through code.
              </p>

              {/* Hidden Dragon Ball Easter Egg */}
              <motion.div
                className="absolute -top-4 -right-4 cursor-pointer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowEasterEgg(true)}
                onDoubleClick={summonShenron}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Vegeta Quote Overlay */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <blockquote className="text-xl md:text-2xl font-semibold text-blue-300 italic">
            "It's not about the power level, it's about the journey to get there."
          </blockquote>
          <cite className="text-gray-400 mt-2 block">- Inspired by Vegeta's Character Arc</cite>
        </motion.div>
        
        {/* Shenron Easter Egg */}
        {showShenron && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: -100 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          >
            <div className="text-center">
              <motion.div
                className="text-6xl mb-4"
                animate={{ 
                  textShadow: [
                    '0 0 20px #10B981',
                    '0 0 40px #10B981',
                    '0 0 20px #10B981'
                  ]
                }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                🐉
              </motion.div>
              <motion.h2
                className="text-4xl font-bold text-green-400 mb-4"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                SHENRON APPEARS!
              </motion.h2>
              <p className="text-green-300 text-xl">
                "Your wish has been granted... You have discovered the secret!"
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Easter Egg Modal */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6"
            onClick={() => setShowEasterEgg(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-slate-900 border border-orange-400 rounded-lg max-w-2xl w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowEasterEgg(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              
              <h3 className="text-2xl font-bold text-orange-400 mb-6">
                Why Dragon Ball Z?
              </h3>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  Dragon Ball Z has been a profound source of inspiration throughout my 
                  academic journey. The series teaches us about perseverance, growth, and 
                  the importance of never giving up, even when facing seemingly impossible 
                  challenges.
                </p>
                
                <p>
                  I actually wrote a paper analyzing Vegeta's character arc and how his 
                  transformation from a ruthless prince to a protective father mirrors the 
                  growth we experience in our own lives. His journey from pride to humility, 
                  from selfishness to sacrifice, resonates deeply with the challenges we 
                  face in computer science and life.
                </p>
                
                <p className="text-blue-300 font-semibold">
                  "Even the mightiest warrior can learn to be gentle."
                </p>
                
                <p>
                  This philosophy guides my approach to coding, teamwork, and leadership. 
                  Just like Vegeta learned to fight for others rather than just himself, 
                  I've learned to code not just for personal achievement, but to create 
                  solutions that help others and make a positive impact.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;