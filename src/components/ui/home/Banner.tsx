import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Star, Sparkles } from 'lucide-react';

const events = [
    { 
      description: 'ExploitX !', 
      icon: <Sparkles className="text-yellow-300" size={20} />,
      highlight: true
    }
];

const Banner: React.FC = () => {
    return (
        <div className="relative w-full overflow-hidden border-y border-gray-700">            
            {/* Label */}
            <motion.div 
                className="hidden md:flex absolute z-10 top-0 left-0 font-bold items-center justify-center h-full rounded-r-full bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 pr-8"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <span className="mr-2 text-lg font-extrabold tracking-wide">UPCOMING 🎉</span>
            </motion.div>
            
            {/* Scrolling content */}
            <motion.div
                className="flex py-4 pl-4 md:pl-48 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <motion.div
                    className="flex space-x-16 md:space-x-24"
                    animate={{
                        x: ["0%", "-50%"],
                        transition: {
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 25,
                                ease: "linear"
                            }
                        }
                    }}
                >
                    {[...events, ...events].map((event, index) => (
                        <motion.div 
                            key={index} 
                            className={`flex items-center space-x-3 whitespace-nowrap ${event.highlight ? 'bg-opacity-20 bg-indigo-900 rounded-full px-4 py-1.5' : 'px-2 py-1.5'}`}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <motion.span
                                animate={{ 
                                    rotate: event.highlight ? [0, 15, 0] : 0,
                                }}
                                transition={{ 
                                    repeat: event.highlight ? Infinity : 0, 
                                    duration: 1.5,
                                    repeatDelay: 2
                                }}
                            >
                                {event.icon}
                            </motion.span>
                            <span className={`${event.highlight ? 'text-white font-semibold' : 'text-gray-200'} text-sm md:text-base`}>
                                {event.description}
                            </span>
                            {event.highlight && (
                                <motion.span 
                                    className="inline-block w-2 h-2 rounded-full bg-cyan-400"
                                    animate={{ 
                                        opacity: [0, 1, 0],
                                        scale: [0.8, 1.2, 0.8]
                                    }}
                                    transition={{ 
                                        duration: 1.5, 
                                        repeat: Infinity,
                                        ease: "easeInOut" 
                                    }}
                                />
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Banner;