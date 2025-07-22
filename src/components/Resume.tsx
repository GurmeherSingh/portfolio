import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, FileText } from 'lucide-react';

interface ResumeProps {
  soundEnabled: boolean;
}

const Resume: React.FC<ResumeProps> = ({ soundEnabled }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Removed handleDownload function as we are linking directly to the PDF

  return (
    <div className="min-h-screen py-20 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-orange-400 text-center mb-16"
        >
          Power Documentation
        </motion.h2>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-blue-400/30 mb-8"
          >
            <div className="flex items-center justify-center mb-6">
              <motion.div
                className="p-4 rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 mr-4"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(251, 146, 60, 0.5)',
                    '0 0 40px rgba(251, 146, 60, 0.8)',
                    '0 0 20px rgba(251, 146, 60, 0.5)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <FileText className="w-12 h-12 text-white" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Official Battle Record</h3>
                <p className="text-gray-300">Complete documentation of my technical journey</p>
              </div>
            </div>

            <div className="flex justify-center">
              <a
                href="/Gurmeher_Singh_Resume.pdf"
                download
                className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
              {/*
              <button
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
                onClick={() => setShowPreview(true)}
              >
                <Eye className="w-5 h-5" />
                <span>Preview</span>
              </button>
              */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-6"
          >
      


          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Resume;