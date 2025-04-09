"use client";

import React, { useState, useEffect } from 'react';
import { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Award, ChevronRight, ChevronLeft } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  registerlink : string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Annual Convention 2025",
    date: "April 10, 2025",
    description: "Get ready for an exciting journey with ISTE - HIT Student's Chapter! Join us on 10th April at 1:00 PM in SN Bose Auditorium for our Annual Convention — a celebration of technology, innovation, and excellence.",
    image: "https://res.cloudinary.com/db1sduyls/image/upload/v1743836720/AC_p1e35i.jpg",
    registerlink : "https://docs.google.com/forms/d/e/1FAIpQLSd_BhgbLN9_mQ-9zFct-MEpM824NWAx7hwVZQjW6Edjhy9LKw/viewform?usp=sharing"
  },
  {
    id: 2,
    title: "National Level Ideathon",
    date: "April 11, 2025",
    description: "Ready to turn your ideas into reality with ISTE HIT SC? Join IDEATHON — where innovation meets insight. Take the leap and bring your boldest ideas to life!",
    image: "https://res.cloudinary.com/db1sduyls/image/upload/v1743836926/Ideathon_buucrz.jpg",
    registerlink : "https://docs.google.com/forms/d/e/1FAIpQLScHi9ybkWZjvl8XleTmODsaUFr_clmiqgF7RW6_Bardz8LhAg/closedform"
  }
];

const HeroSection = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const eventInterval = setInterval(() => {
      setCurrentEventIndex((prev) => (prev + 1) % events.length);
    }, 8000);

    return () => {
      clearInterval(eventInterval);
    };
  }, []);

  const nextEvent = () => {
    setCurrentEventIndex((prev) => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentEventIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="min-h-screen bg-transparent text-white overflow-hidden relative">
      {/* Main Content */}
      <div className="min-h-screen w-screen flex flex-col justify-center py-16 px-4 md:px-12">
        {/* Events Section */}
        <div className="flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentEventIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 gap-16 md:gap-12 items-center relative"
            >
              <div className="space-y-6 z-10 relative md:left-8">
                <motion.h2
                  className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#DCFFB7] via-white to-white"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {events[currentEventIndex].title}
                </motion.h2>
                <motion.div
                  className="flex items-center gap-2 text-[#DCFFB7]"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Calendar className="w-5 h-5" />
                  <span>{events[currentEventIndex].date}</span>
                </motion.div>
                <motion.p
                  className="text-gray-300 text-base md:text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {events[currentEventIndex].description}
                </motion.p>
                <motion.button
                  className="px-8 py-3 bg-gradient-to-r from-[#DCFFB7] to-white text-black font-bold rounded-full 
                           shadow-[0_0_20px_rgba(220,255,183,0.3)] hover:shadow-[0_0_30px_rgba(220,255,183,0.5)]
                           transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(events[currentEventIndex].registerlink, "_blank")}
                >
                  Register Now
                </motion.button>
              </div>

              <div className="flex items-center justify-center relative md:left-8">
                <motion.div
                  className="relative h-[290px] sm:h-[300px] md:h-[400px] lg:h-[450px] p-4 max-w-3xl rounded-2xl overflow-hidden cursor-pointer"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  onClick={toggleFullScreen}
                >
                  {/* Main image */}
                  <motion.img
                    src={events[currentEventIndex].image}
                    alt={events[currentEventIndex].title}
                    className="w-full h-full object-contain"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7 }}
                  />

                  {/* Animated tech lines */}
                  <motion.div
                    className="absolute inset-0 border-2 border-blue-500/30"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                  <motion.div
                    className="absolute inset-2 border border-purple-500/20"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                  />

                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-blue-400/60" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-purple-400/60" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-purple-400/60" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-blue-400/60" />

                  {/* Glowing dots */}
                  <motion.div
                    className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-400"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-purple-400"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-5 justify-center mt-8 md:absolute bottom-8 md:left-1/2 md:-translate-x-1/2 md:z-20">
          <motion.button
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0px 0px 10px rgba(220, 255, 183, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-[#DCFFB7]/30 to-white/25 
                       backdrop-blur-sm shadow-md border border-[#DCFFB7]/40
                       flex items-center justify-center hover:border-[#DCFFB7]/60
                       relative overflow-hidden group"
            onClick={prevEvent}
          >
            <ChevronLeft className="w-6 h-6 text-[#DCFFB7] cursor-pointer 
                                   group-hover:text-[#DCFFB7]/90 transition-colors" />
          </motion.button>

          <motion.button
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0px 0px 10px rgba(220, 255, 183, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-[#DCFFB7]/30 to-white/25 
                       backdrop-blur-sm shadow-md border border-[#DCFFB7]/40
                       flex items-center justify-center hover:border-[#DCFFB7]/60
                       relative overflow-hidden group"
            onClick={nextEvent}
          >
            <ChevronRight className="w-6 h-6 text-[#DCFFB7] cursor-pointer 
                                    group-hover:text-[#DCFFB7]/90 transition-colors" />
          </motion.button>
        </div>
      </div>

      {/* Full Screen Image Modal */}
      <AnimatePresence>
        {isFullScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={toggleFullScreen}
          >
            <motion.img
              src={events[currentEventIndex].image}
              alt={events[currentEventIndex].title}
              className="max-w-[80vw] max-h-[80vh] object-contain"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;