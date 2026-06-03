"use client";

import React from "react";
import { motion } from "framer-motion";

export const AnimatedLogoBg: React.FC = () => {
  const greenColor = "#1F2A22";
  const goldColor = "#C8A96B";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        className="absolute -right-32 -top-32 w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-[0.06] md:opacity-[0.08]"
        initial={{ rotate: 0, scale: 0.95 }}
        animate={{
          rotate: [0, 10, -5, 0],
          scale: [0.95, 1.02, 0.98, 0.95],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shield - Left Half (Dark Green) */}
          <path
            d="M 60 16 
               C 42 16, 28 22, 26 25 
               C 24 50, 29 76, 60 98 
               L 60 90 
               C 34 70, 31 48, 31 28 
               C 33 26, 45 21, 60 21 Z"
            fill={greenColor}
          />

          {/* Shield - Right Half (Gold) */}
          <path
            d="M 60 16 
               C 78 16, 92 22, 94 25 
               C 96 50, 91 76, 60 98 
               L 60 90 
               C 86 70, 89 48, 89 28 
               C 87 26, 75 21, 60 21 Z"
            fill={goldColor}
          />

          {/* Checkmark - Left Part (Dark Green) */}
          <path
            d="M 42 58 
               L 54 70 
               L 60 63.5
               L 60 53.5
               L 52 46.5
               L 42 58 Z"
            fill={greenColor}
          />

          {/* Checkmark - Right Part (Gold) */}
          <path
            d="M 60 63.5 
               L 93 30.5
               L 88 25.5
               L 60 53.5
               L 60 63.5 Z"
            fill={goldColor}
          />
        </svg>
      </motion.div>

      {/* A second soft floating element in the bottom-left */}
      <motion.div
        className="absolute -left-48 -bottom-48 w-[400px] h-[400px] md:w-[600px] md:h-[600px] opacity-[0.03] md:opacity-[0.05]"
        initial={{ rotate: 180, scale: 1 }}
        animate={{
          rotate: [180, 195, 170, 180],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 60 16 
               C 42 16, 28 22, 26 25 
               C 24 50, 29 76, 60 98 
               L 60 90 
               C 34 70, 31 48, 31 28 
               C 33 26, 45 21, 60 21 Z"
            fill={greenColor}
          />
          <path
            d="M 60 16 
               C 78 16, 92 22, 94 25 
               C 96 50, 91 76, 60 98 
               L 60 90 
               C 86 70, 89 48, 89 28 
               C 87 26, 75 21, 60 21 Z"
            fill={goldColor}
          />
          <path
            d="M 42 58 
               L 54 70 
               L 60 63.5
               L 60 53.5
               L 52 46.5
               L 42 58 Z"
            fill={greenColor}
          />
          <path
            d="M 60 63.5 
               L 93 30.5
               L 88 25.5
               L 60 53.5
               L 60 63.5 Z"
            fill={goldColor}
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default AnimatedLogoBg;
