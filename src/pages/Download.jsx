import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWindows, FaMobile, FaApple, FaLinux, FaDownload } from 'react-icons/fa';

const Download = () => {
  const [hoveredPlatform, setHoveredPlatform] = useState(null);
  const [selectedVersion, setSelectedVersion] = useState('stable');
  const [downloadStatus, setDownloadStatus] = useState({});

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const platforms = [
    {
      name: 'Windows',
      icon: FaWindows,
      version: '2.1.0',
      size: '64.5 MB',
      gradient: 'from-blue-400 to-blue-500',
      requirements: 'Windows 10 or later',
      features: ['Auto-updates', 'Native notifications', 'Windows integration'],
      downloadUrl: '#'
    },
    {
      name: 'macOS',
      icon: FaApple,
      version: '2.1.0',
      size: '68.2 MB',
      gradient: 'from-gray-600 to-gray-700',
      requirements: 'macOS 10.15 or later',
      features: ['Apple Silicon support', 'Touch Bar support', 'iCloud sync'],
      downloadUrl: '#'
    },
    {
      name: 'Linux',
      icon: FaLinux,
      version: '2.1.0',
      size: '61.8 MB',
      gradient: 'from-orange-400 to-orange-500',
      requirements: 'Ubuntu 20.04 or equivalent',
      features: ['AppImage format', 'System tray support', 'Native notifications'],
      downloadUrl: '#'
    },
    {
      name: 'Mobile',
      icon: FaMobile,
      version: '2.1.0',
      size: '45.3 MB',
      gradient: 'from-green-400 to-green-500',
      requirements: 'iOS 14+ / Android 8+',
      features: ['Cross-platform sync', 'Offline mode', 'Touch ID/Face ID'],
      downloadUrl: '#'
    }
  ];

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const handleDownload = (platform) => {
    setDownloadStatus(prev => ({
      ...prev,
      [platform.name]: 'downloading'
    }));

    // Open the Google Drive link in a new tab
    window.open('https://drive.google.com/file/d/1e126EVbSOjKMm4N4rnx88ZvOulqcBeBW/view?usp=sharing', '_blank');

    // Show download status for visual feedback
    setTimeout(() => {
      setDownloadStatus(prev => ({
        ...prev,
        [platform.name]: 'completed'
      }));

      // Reset status after showing completion
      setTimeout(() => {
        setDownloadStatus(prev => ({
          ...prev,
          [platform.name]: null
        }));
      }, 2000);
    }, 2000);
  };

  const getButtonContent = (platform) => {
    const status = downloadStatus[platform.name];
    
    if (status === 'downloading') {
      return (
        <>
          <motion.div
            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <span>Downloading...</span>
        </>
      );
    }
    
    if (status === 'completed') {
      return (
        <>
          <svg className="w-5 h-5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M5 13l4 4L19 7" />
          </svg>
          <span>Downloaded!</span>
        </>
      );
    }

    return (
      <>
        <FaDownload className="w-4 h-4" />
        <span>Download</span>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block p-2 px-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full text-white text-sm mb-8"
          >
            Version 2.1.0 Now Available
          </motion.div>
          
          <motion.h1 
            className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl mb-6"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Download GrowBook
          </motion.h1>
          
          <motion.p 
            className="mt-5 text-xl text-gray-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Choose your platform and get started with the best accounting experience
          </motion.p>

          {/* Version Selector */}
          <motion.div variants={itemVariants} className="mt-8 flex justify-center space-x-4">
            <button
              onClick={() => setSelectedVersion('stable')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedVersion === 'stable'
                ? 'bg-indigo-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              Stable Release
            </button>
            <button
              onClick={() => setSelectedVersion('beta')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedVersion === 'beta'
                ? 'bg-indigo-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              Beta Version
            </button>
          </motion.div>
        </motion.div>

        {/* Download Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {platforms.map((platform) => (
            <motion.div
              key={platform.name}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
              onHoverStart={() => setHoveredPlatform(platform.name)}
              onHoverEnd={() => setHoveredPlatform(null)}
            >
              <motion.div 
                animate={floatingAnimation}
                className={`w-12 h-12 rounded-full bg-gradient-to-r ${platform.gradient} flex items-center justify-center mb-6`}
              >
                <platform.icon className="w-6 h-6 text-white" />
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{platform.name}</h3>
              <p className="text-gray-600 mb-4">Version {platform.version}</p>
              <p className="text-sm text-gray-500 mb-6">Size: {platform.size}</p>

              <AnimatePresence>
                {hoveredPlatform === platform.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute inset-x-0 -bottom-4 bg-white rounded-b-2xl shadow-lg p-4 z-10"
                  >
                    <p className="text-sm font-medium text-gray-900 mb-2">Requirements:</p>
                    <p className="text-sm text-gray-600 mb-3">{platform.requirements}</p>
                    <ul className="text-sm text-gray-600">
                      {platform.features.map((feature, index) => (
                        <li key={index} className="flex items-center mb-1">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleDownload(platform)}
                disabled={downloadStatus[platform.name] === 'downloading'}
                className={`w-full rounded-lg bg-gradient-to-r ${platform.gradient} px-4 py-2 text-white font-medium flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-75`}
              >
                {getButtonContent(platform)}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.div
          variants={itemVariants}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose Our App?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cross-Platform Sync',
                description: 'Seamlessly sync your data across all your devices',
                icon: '🔄'
              },
              {
                title: 'Secure & Private',
                description: 'Enterprise-grade security with end-to-end encryption',
                icon: '🔒'
              },
              {
                title: 'Regular Updates',
                description: 'Get the latest features and security updates automatically',
                icon: '⚡'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="text-4xl mb-4"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="mt-24 text-center bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl p-12"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-white/10 backdrop-blur-lg rounded-full px-6 py-2 text-white mb-8"
          >
            Get Started Today
          </motion.div>
          
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ready to transform your accounting?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join thousands of satisfied users who've already made the switch
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleDownload(platforms[0])}
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Download Now
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Download;
