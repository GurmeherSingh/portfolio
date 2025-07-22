import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Target } from 'lucide-react';

interface HeroProps {
  soundEnabled: boolean;
}

const Hero: React.FC<HeroProps> = ({ soundEnabled }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showInstantTransmission, setShowInstantTransmission] = useState(false);
  const [konamiCode, setKonamiCode] = useState<string[]>([]);
  const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newSequence = [...konamiCode, e.code].slice(-10);
      setKonamiCode(newSequence);
      
      if (JSON.stringify(newSequence) === JSON.stringify(konamiSequence)) {
        setShowInstantTransmission(true);
        setTimeout(() => setShowInstantTransmission(false), 2000);
        setKonamiCode([]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiCode]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Ki Energy Orbs */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-orange-400/30 to-yellow-400/30"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Instant Transmission Effect */}
        {showInstantTransmission && (
          <motion.div
            className="absolute inset-0 bg-yellow-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.1, repeat: 10, repeatType: 'reverse' }}
          />
        )}
      </div>

      {/* Floating Scouter UI removed */}

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="pl-2 md:pl-4 text-6xl md:text-8xl font-bold mb-6 pb-4 leading-normal bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent"
            whileHover={{
              scale: 1.05,
              textShadow: '0 0 30px rgba(251, 146, 60, 1)',
            }}
            animate={{
              textShadow: [
                '0 0 10px rgba(251, 146, 60, 0.5)',
                '0 0 20px rgba(251, 146, 60, 0.8)',
                '0 0 10px rgba(251, 146, 60, 0.5)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
           Gurmeher Singh
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Computer Science Undergrad @ NJIT
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 }}
            className="mb-12 cursor-pointer"
            onClick={() => {
              setShowInstantTransmission(true);
              setTimeout(() => setShowInstantTransmission(false), 2000);
            }}
          >
            <span className="text-lg md:text-xl text-blue-300 font-semibold">
              "The power comes in response to a need, not a desire."
            </span>
          </motion.div>
        </motion.div>

        {/* Power Level Display */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2 }}
          className="fixed bottom-8 left-8 bg-green-500/20 backdrop-blur-sm border border-green-400 rounded-lg p-4 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onClick={() => {
            const randomPower = Math.floor(Math.random() * 9000) + 1000;
            // You could add state to show different power levels
          }}
        >
          <div className="text-green-400 font-mono text-sm">
            <div>POWER LEVEL</div>
            <motion.div
              className="text-2xl font-bold"
              animate={{
                color: ['#4ADE80', '#22C55E', '#16A34A', '#15803D'],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              OVER 9000!
            </motion.div>
            <div className="text-xs text-green-300 mt-1">
              (Click to scan)
            </div>
          </div>
        </motion.div>
        
        {/* Hidden Konami Code Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 5 }}
          className="fixed bottom-4 right-4 text-xs text-gray-500"
        >
          Try the Konami Code...
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-orange-400 cursor-pointer"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;