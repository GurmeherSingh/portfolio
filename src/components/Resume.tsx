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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6"
              onClick={() => setShowPreview(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-lg max-w-4xl w-full h-full max-h-[90vh] overflow-hidden relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute top-4 right-4 z-10">
                  <button
                    onClick={() => setShowPreview(false)}
                    className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="h-full overflow-y-auto p-8">
                  <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-8">
                      <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Name</h1>
                      <p className="text-gray-600">Computer Science Student @ NJIT</p>
                      <p className="text-gray-500">email@example.com | (555) 123-4567</p>
                    </div>

                    <div className="space-y-6 text-gray-800">
                      <div>
                        <h2 className="text-xl font-bold border-b-2 border-orange-400 mb-3">Education</h2>
                        <div>
                          <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
                          <p className="text-gray-600">New Jersey Institute of Technology</p>
                          <p className="text-gray-500">Expected Graduation: May 2025</p>
                        </div>
                      </div>

                      <div>
                        <h2 className="text-xl font-bold border-b-2 border-orange-400 mb-3">Experience</h2>
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-semibold">Software Development Intern</h3>
                            <p className="text-gray-600">Tech Corp | Summer 2024</p>
                            <ul className="text-gray-500 text-sm mt-1 list-disc list-inside">
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
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-green-400/30">
              <h4 className="text-lg font-bold text-green-400 mb-2">Education</h4>
              <p className="text-gray-300">B.S. Computer Science</p>
              <p className="text-gray-400">NJIT - Expected 2025</p>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-blue-400/30">
              <h4 className="text-lg font-bold text-blue-400 mb-2">Experience</h4>
              <p className="text-gray-300">3+ Internships</p>
              <p className="text-gray-400">Full-Stack Development</p>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-purple-400/30">
              <h4 className="text-lg font-bold text-purple-400 mb-2">Projects</h4>
              <p className="text-gray-300">10+ Completed</p>
              <p className="text-gray-400">Open Source Contributor</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>