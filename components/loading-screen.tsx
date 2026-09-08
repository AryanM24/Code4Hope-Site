"use client";

import { motion } from "framer-motion";

function HeartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className="text-primary"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 bg-canvas flex items-center justify-center">
      <div className="flex flex-col items-center space-y-6">
        {/* Pulsing Heart Animation */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <HeartIcon />
        </motion.div>
        
        {/* Loading text */}
        <motion.p 
          className="text-slate font-medium text-lg"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
}
