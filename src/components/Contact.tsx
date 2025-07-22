import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Twitter, Send, MapPin } from 'lucide-react';

interface ContactProps {
  soundEnabled: boolean;
}

const Contact: React.FC<ContactProps> = ({ soundEnabled }) => {
  // Formspree handles form submission, no local state needed
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // No handleSubmit or handleChange needed

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/GurmeherSingh',
      label: 'GitHub',
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/gurmehersingh/',
      label: 'LinkedIn',
      color: 'from-blue-600 to-blue-800'
    },
    // Twitter link removed
    {
      icon: Mail,
      href: 'mailto:guru170606@gmail.com?subject=Contact%20from%20Portfolio%20Site',
      label: 'Email',
      color: 'from-red-500 to-red-700'
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
          Dragon Radar Communications
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center text-gray-300 mb-16 max-w-2xl mx-auto"
        >
          Like Bulma's Dragon Radar, this communication system helps us connect across the digital universe. 
          Whether you want to collaborate, hire, or just talk tech, I'm ready to receive your signal!
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-orange-400/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Send className="w-6 h-6 mr-3 text-orange-400" />
                Send a Message
              </h3>

              <form action="https://formspree.io/f/mjkoyyok" method="POST" className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <motion.input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-gray-600 rounded-lg text-white focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 transition-all duration-200"
                    placeholder="Your name"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-gray-600 rounded-lg text-white focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 transition-all duration-200"
                    placeholder="your.email@example.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-gray-600 rounded-lg text-white focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20 transition-all duration-200 resize-none"
                    placeholder="Your message here..."
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 flex items-center justify-center space-x-2 relative overflow-hidden"
                >
                  {/* Removed showDragonRadar animation overlay, as variable is undefined */}
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Dragon Radar & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="space-y-8"
          >
            {/* Dragon Radar */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-green-400/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-green-400" />
                Dragon Radar
              </h3>
              
              <div className="relative">
                <motion.div
                  className="w-48 h-48 mx-auto bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full border-2 border-green-400 flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(34, 197, 94, 0.3)',
                      '0 0 40px rgba(34, 197, 94, 0.6)',
                      '0 0 20px rgba(34, 197, 94, 0.3)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <div className="text-center">
                    <div className="text-green-400 font-bold text-lg mb-2">LOCATION</div>
                    <div className="text-white font-semibold">New Jersey</div>
                    <div className="text-gray-300 text-sm">Available for Remote</div>
                  </div>
                </motion.div>

                {/* Radar Blips */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-orange-400 rounded-full"
                    style={{
                      top: `${25 + Math.sin(i * 1.5) * 20}%`,
                      left: `${25 + Math.cos(i * 1.5) * 20}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-blue-400/30">
              <h3 className="text-2xl font-bold text-white mb-6">
                Power-Up Connections
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gradient-to-r ${social.color} p-4 rounded-lg flex items-center justify-center space-x-2 text-white font-semibold hover:shadow-lg transition-all duration-200`}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
                      rotate: [0, -5, 5, 0]
                    }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      boxShadow: [
                        '0 0 10px rgba(59, 130, 246, 0.3)',
                        '0 0 20px rgba(59, 130, 246, 0.6)',
                        '0 0 10px rgba(59, 130, 246, 0.3)',
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="hidden sm:inline">{social.label}</span>
                    <motion.div
                      className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full opacity-0"
                      whileHover={{ opacity: 1, scale: [1, 1.5, 1] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;