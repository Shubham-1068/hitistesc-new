import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Calendar, X } from 'lucide-react';
import Promo from '../../../../public/LatestEvent.jpeg';

const Hero: React.FC = () => {
  const [isImagePopup, setIsImagePopup] = useState(false);
  
  // Close popup when escape key is pressed
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isImagePopup) {
        setIsImagePopup(false);
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isImagePopup]);

  // Prevent scrolling on body when popup is open
  useEffect(() => {
    if (isImagePopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isImagePopup]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        yoyo: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  return (
    <div className="text-white min-h-screen pt-24 pb-16 px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between relative">
      <motion.div 
        className="md:w-1/2 mb-16 md:mb-0 mt-11"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400"
          variants={itemVariants}
        >
          National <span className="text-[#DCFFB7]">Level</span> <br />IDEATHON !
        </motion.h1>
        
        <motion.p 
          className="text-md mb-8 max-w-lg bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-200 font-semibold"
          variants={itemVariants}
        >
          Adorable minds, full of creativity and Epic ideas that spark inspiration. Where imagination meets innovation!
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-4"
          variants={itemVariants}
        >
          <motion.button 
            className="md:px-6 px-5 md:py-3 py-2 bg-white text-black font-semibold rounded-full hover:bg-opacity-90 transition-colors"
            variants={buttonVariants}
            whileHover="hover"
            onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScHi9ybkWZjvl8XleTmODsaUFr_clmiqgF7RW6_Bardz8LhAg/viewform", "_blank")}
          >
            Register Now
          </motion.button>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="md:w-[45%] w-[80%] ml-2 md:ml-0 -mt-4 md:-mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="relative">
          <motion.div 
            className="absolute -top-10 -left-10 md:w-32 md:h-32 w-28 h-28 bg-[#DCFFB7] rounded-tr-3xl rounded-bl-3xl"
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold"
              animate={{ 
                rotate: [0, 5, 0, -5, 0],
                transition: { duration: 5, repeat: Infinity }
              }}
            >
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="absolute md:-bottom-5 -bottom-2 -right-5 md:w-40 md:h-40 w-32 h-32 bg-[#DCFFB7] rounded-tl-3xl rounded-br-3xl"
            initial={{ opacity: 0, rotate: 10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold"
              animate={{ 
                rotate: [0, -5, 0, 5, 0],
                transition: { duration: 5, repeat: Infinity }
              }}
            >
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="absolute -bottom-10 -left-10 w-36 h-36 bg-transparent rounded-tr-3xl rounded-bl-3xl"
            initial={{ opacity: 0, rotate: -5 }}
            animate={{ opacity: 0.7, rotate: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold"
              animate={{ 
                rotate: [0, 5, 0, -5, 0],
                transition: { duration: 5, repeat: Infinity }
              }}
            >
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative z-10 -left-3 -top-3 md:-left-0 md:-top-0 w-[calc(100%+12px)] md:w-auto bg-black rounded-lg md:p-4 p-2 border border-gray-800"
            whileHover={{ scale: 1.02 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <div 
              className="w-full md:h-[400px] h-[300px] bg-transparent rounded-lg flex items-center justify-center overflow-hidden cursor-pointer group" 
              onClick={() => setIsImagePopup(true)}
            >
              <img 
                src={Promo.src} 
                alt="Promotion" 
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" 
              />

              {/* Visual indicator that image is clickable */}
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium px-4 py-2 bg-black bg-opacity-60 rounded-full cursor-pointer">
                  Click to enlarge
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Image Popup with Scrolling */}
      <AnimatePresence>
        {isImagePopup && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsImagePopup(false)}
          >
            <motion.div 
              className="md:mt-16 relative max-w-[600px] w-full max-h-[90vh] bg-black rounded-lg border border-gray-700 overflow-hidden md:pt-4 md:px-4"
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button 
                className="absolute top-2 right-2 bg-rose-600 hover:bg-rose-700 text-black rounded-full p-1 z-50 shadow-lg"
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsImagePopup(false)}
              >
                <X size={24} color='white' className='cursor-pointer' />
              </motion.button>
              
                <div className="overflow-auto max-h-[80vh] p-2 flex items-center justify-center">
                <img 
                  src={Promo.src} 
                  alt="Promotion" 
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                </div>
              
              {/* Mobile-friendly close button at bottom */}
              <div className="sm:hidden flex justify-center mt-4 mb-4">
                <button 
                  className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold"
                  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScHi9ybkWZjvl8XleTmODsaUFr_clmiqgF7RW6_Bardz8LhAg/viewform", "_blank")}
                >
                  Register Now!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;