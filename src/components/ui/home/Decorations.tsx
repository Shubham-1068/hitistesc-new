import React from 'react';
import { motion } from 'framer-motion';

const Decorations: React.FC = () => {
  return (
    <>


      {/* Subtle gradient lines */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-accent-orange to-transparent"></div>
        <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-transparent via-primary to-transparent"></div>
      </div>

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      {/* Subtle animated gradient orbs */}
      <div className="absolute top-1/3 right-10 z-0 pointer-events-none">
        <motion.div
          className="w-64 h-64 rounded-full bg-gradient-to-r from-primary/5 to-accent/5 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      <div className="absolute bottom-1/3 left-10 z-0 pointer-events-none">
        <motion.div
          className="w-48 h-48 rounded-full bg-gradient-to-r from-accent-orange/5 to-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </>
  );
};

export default Decorations;