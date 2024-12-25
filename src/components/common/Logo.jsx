import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = '' }) => {
  const letterVariants = {
    hidden: { 
      opacity: 0,
      scale: 1,
      rotate: 0
    },
    visible: {
      opacity: 1,
      scale: [1, 1.1, 1],
      rotate: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  // Finance symbols for floating animation
  const symbols = ['$', '₹', '€', '£', '¥', '%', '+', '='];

  return (
    <motion.div className={`${className} relative`}>
      <svg viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Floating Finance Symbols */}
        {symbols.map((symbol, index) => (
          <motion.text
            key={index}
            x={50 + (index * 60)}
            y="50"
            fontSize="20"
            fill="#4FB06A"
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, -30, 0],
              x: [50 + (index * 60), 50 + (index * 60) + (index % 2 ? 20 : -20), 50 + (index * 60)]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut"
            }}
          >
            {symbol}
          </motion.text>
        ))}

        {/* Animated Calculator Keys Background */}
        {[...Array(9)].map((_, i) => (
          <motion.rect
            key={i}
            x={400 + ((i % 3) * 30)}
            y={20 + (Math.floor(i / 3) * 30)}
            width="20"
            height="20"
            rx="4"
            fill="#0A2463"
            opacity="0.1"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Animated Line Graph */}
        <motion.path
          d="M20,280 Q60,250 100,260 T180,240 T260,220 T340,200"
          stroke="#4FB06A"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />

        {/* Circular Progress Indicator */}
        <motion.circle
          cx="450"
          cy="250"
          r="20"
          stroke="#0A2463"
          strokeWidth="4"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Main Text Group */}
        <g transform="translate(50, 120)">
          {/* Animated Letters */}
          <motion.text
            x="0"
            y="0"
            fontSize="60"
            fontFamily="Arial"
            fontWeight="bold"
            fill="#0A2463"
          >
            <motion.tspan variants={letterVariants} initial="hidden" animate="visible" transition={{ delay: 0 }}>G</motion.tspan>
            <motion.tspan variants={letterVariants} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>r</motion.tspan>
            <motion.tspan variants={letterVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>o</motion.tspan>
            <motion.tspan variants={letterVariants} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>w</motion.tspan>
            <motion.tspan variants={letterVariants} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>w</motion.tspan>
            <motion.tspan variants={letterVariants} initial="hidden" animate="visible" transition={{ delay: 0.5 }}>B</motion.tspan>
            <motion.tspan variants={letterVariants} initial="hidden" animate="visible" transition={{ delay: 0.6 }}>o</motion.tspan>
            <motion.tspan variants={letterVariants} initial="hidden" animate="visible" transition={{ delay: 0.7 }}>o</motion.tspan>
            <motion.tspan variants={letterVariants} initial="hidden" animate="visible" transition={{ delay: 0.8 }}>k</motion.tspan>
          </motion.text>
        </g>

        {/* Bar Chart */}
        <motion.g transform="translate(350, 50)">
          {/* First Bar */}
          <motion.rect
            x="0"
            y="150"
            width="15"
            height="30"
            fill="#0D5F26"
            initial={{ height: 0, y: 180 }}
            animate={{ height: 30, y: 150 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
          {/* Second Bar */}
          <motion.rect
            x="20"
            y="130"
            width="15"
            height="50"
            fill="#2D8C46"
            initial={{ height: 0, y: 180 }}
            animate={{ height: 50, y: 130 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          />
          {/* Third Bar */}
          <motion.rect
            x="40"
            y="100"
            width="15"
            height="80"
            fill="#4FB06A"
            initial={{ height: 0, y: 180 }}
            animate={{ height: 80, y: 100 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          />
          {/* Arrow */}
          <motion.path
            d="M55 90 L70 70 L85 90"
            stroke="#4FB06A"
            strokeWidth="4"
            fill="none"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          />
          {/* Last Bar */}
          <motion.rect
            x="80"
            y="110"
            width="15"
            height="70"
            fill="#0D5F26"
            initial={{ height: 0, y: 180 }}
            animate={{ height: 70, y: 110 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          />
        </motion.g>

        {/* Coins Animation */}
        {[...Array(5)].map((_, i) => (
          <motion.circle
            key={`coin-${i}`}
            cx={50 + (i * 30)}
            cy="200"
            r="10"
            fill="#FFD700"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -50, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Subtitle */}
        <motion.text
          x="250"
          y="270"
          textAnchor="middle"
          fontSize="14"
          fontFamily="Arial"
          fill="#666666"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.2 }}
        >
          FINANCE & ACCOUNTING SOFTWARE
        </motion.text>
      </svg>
    </motion.div>
  );
};

export default Logo;
