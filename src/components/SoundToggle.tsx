import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

interface SoundToggleProps {
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  onKamehameha: () => void;
}

const SoundToggle: React.FC<SoundToggleProps> = ({ soundEnabled, setSoundEnabled, onKamehameha }) => {
  const handleDoubleClick = () => {
    onKamehameha();
  };

  return (
    <div className="fixed top-20 right-4 z-50 flex flex-col space-y-2">
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setSoundEnabled(!soundEnabled)}
        className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
      >
        {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </motion.button>
      
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)'
        }}
        whileTap={{ scale: 0.9 }}
        onDoubleClick={handleDoubleClick}
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-colors duration-200 text-xs font-bold"
        title="Double-click for Kamehameha!"
      >
        波
      </motion.button>
    </div>
  );
};

export default SoundToggle;