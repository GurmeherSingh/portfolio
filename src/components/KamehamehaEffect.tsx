import React from 'react';
import { motion } from 'framer-motion';

const KamehamehaEffect: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Energy Charge */}
      <motion.div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 2, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 1, times: [0, 0.5, 1] }}
      >
        <div className="w-32 h-32 bg-gradient-to-r from-blue-400 via-cyan-300 to-white rounded-full blur-sm" />
      </motion.div>

      {/* Energy Beam */}
      <motion.div
        className="absolute left-1/2 top-1/2 transform -translate-y-1/2 origin-left"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ 
          scaleX: [0, 0, 1, 1, 0], 
          opacity: [0, 0, 1, 1, 0],
          width: ['0px', '0px', '100vw', '100vw', '0px']
        }}
        transition={{ duration: 3, times: [0, 0.3, 0.4, 0.9, 1] }}
      >
        <div className="h-16 bg-gradient-to-r from-blue-500 via-cyan-300 to-white blur-sm" />
        <div className="absolute inset-0 h-16 bg-gradient-to-r from-blue-400 via-cyan-200 to-yellow-200" />
      </motion.div>

      {/* Screen Flash */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0.8, 0] }}
        transition={{ duration: 3, times: [0, 0.4, 0.5, 1] }}
      />

      {/* Text Effect */}
      <motion.div
        className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: [0, 0, 1, 1, 0], 
          scale: [0, 0, 1.5, 1.5, 0],
          rotate: [0, 0, 5, -5, 0]
        }}
        transition={{ duration: 3, times: [0, 0.2, 0.3, 0.8, 1] }}
      >
        <div className="text-6xl font-bold text-yellow-300 text-center tracking-wider">
          KAMEHAMEHA!
        </div>
      </motion.div>
    </div>
  );
};

export default KamehamehaEffect;