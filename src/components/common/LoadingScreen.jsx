import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const LoadingScreen = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)'
          }}
        >
          {/* Background Curve */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1920 1080"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M0 0 L1920 0 L1920 1080 L0 1080 Q400 800 0 0"
                fill="#f0f0f0"
                opacity="0.5"
              />
            </svg>
          </motion.div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
              className="w-96 h-96 flex items-center justify-center"
            >
              <Logo className="w-full h-full" />
            </motion.div>

            {/* Loading Bar */}
            <motion.div
              className="w-64 h-1 bg-gray-200 rounded-full mt-8 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="h-full bg-blue-600 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  delay: 0.7
                }}
              />
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-600 mt-4 text-sm font-medium"
            >
              Loading...
            </motion.div>
          </div>

          {/* Subtle Background Animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-blue-100 rounded-full opacity-20"
                style={{
                  width: Math.random() * 300 + 100,
                  height: Math.random() * 300 + 100,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{
                  scale: 0,
                  x: Math.random() * 100 - 50,
                  y: Math.random() * 100 - 50,
                }}
                animate={{
                  scale: [0, 1, 0],
                  x: [null, Math.random() * 200 - 100],
                  y: [null, Math.random() * 200 - 100],
                }}
                transition={{
                  duration: 5 + Math.random() * 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
