import React, { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import KamehamehaEffect from './components/KamehamehaEffect';
import Hero from './components/Hero';
import About from './components/About';
import Experiences from './components/Experiences';
import OnCampus from './components/OnCampus';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Hobbies from './components/Hobbies';
import Business from './components/Business';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import SoundToggle from './components/SoundToggle';

// Custom cursor component
const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <img
      src="/goku1.png"
      alt="Goku Cursor"
      style={{
        position: 'fixed',
        left: pos.x - 16,
        top: pos.y - 16,
        width: 32,
        height: 32,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

function App() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [showKamehameha, setShowKamehameha] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const triggerKamehameha = () => {
    setShowKamehameha(true);
    setTimeout(() => setShowKamehameha(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white overflow-x-hidden relative">
      <CustomCursor />

      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30">
        {/* Floating Dragon Balls */}
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + Math.sin(i) * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <div className="absolute inset-1 bg-yellow-400 rounded-full flex items-center justify-center">
              <div className="text-red-600 text-xs font-bold">{i + 1}</div>
            </div>
          </motion.div>
        ))}

        {/* Energy Waves */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-blue-500/10 to-orange-400/10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
        />

        {/* Lightning Effects */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`lightning-${i}`}
            className="absolute w-1 bg-gradient-to-b from-yellow-400 to-transparent"
            style={{
              left: `${20 + i * 30}%`,
              height: '100vh',
            }}
            animate={{
              opacity: [0, 1, 0],
              scaleY: [0, 1, 0],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 3 + i * 2,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Sound Toggle */}
      <SoundToggle
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        onKamehameha={triggerKamehameha}
      />

      {/* Kamehameha Effect */}
      <AnimatePresence>
        {showKamehameha && <KamehamehaEffect />}
      </AnimatePresence>

      {/* Main Content */}
      <main className="relative z-10">
        <section id="hero">
          <Hero soundEnabled={soundEnabled} />
        </section>
        <section id="about">
          <About soundEnabled={soundEnabled} />
        </section>
        <section id="experiences">
          <Experiences soundEnabled={soundEnabled} />
        </section>
        <section id="campus">
          <OnCampus soundEnabled={soundEnabled} />
        </section>
        <section id="skills">
          <Skills soundEnabled={soundEnabled} />
        </section>
        <section id="resume">
          <Resume soundEnabled={soundEnabled} />
        </section>
        <section id="hobbies">
          <Hobbies soundEnabled={soundEnabled} />
        </section>
        {/* <section id="business">
          <Business soundEnabled={soundEnabled} />
        </section> */}
        <section id="contact">
          <Contact soundEnabled={soundEnabled} />
        </section>
      </main>
    </div>
  );
}

export default App;
