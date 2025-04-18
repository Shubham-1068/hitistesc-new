"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Testimonial = {
    quote: string;
    name: string;
    designation: string;
    src: string;
};

const Contributers = ({
    testimonials,
    autoplay = false,
}: {
    testimonials: Testimonial[];
    autoplay?: boolean;
}) => {
    const [active, setActive] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    // Ensure component renders only on the client side
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const isActive = (index: number) => {
        return index === active;
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay]);

    const randomRotateY = () => {
        return Math.floor(Math.random() * 21) - 10;
    };

    if (!isMounted) return null;

    return (
        <>
            <motion.div 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} 
                className="flex flex-col items-center gap-4 lg:-mb-5 text-center bg-transparent lg:mt-10 -mb-10"
            >
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400">
                    Our Contributors
                </h1>
                <p className="text-md text-gray-300 max-w-2xl px-8 md:px-0">
                Grateful to all contributors for their valuable contributions to the development of this website
                </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }} className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20">
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="-mb-11 lg:mb-0">
                        <div className="relative h-80 w-full">
                            <AnimatePresence>
                                {testimonials.map((testimonial, index) => (
                                    <motion.div
                                        key={testimonial.name}
                                        initial={{
                                            opacity: 0,
                                            scale: 0.9,
                                            z: -100,
                                            rotate: randomRotateY(),
                                        }}
                                        animate={{
                                            opacity: isActive(index) ? 1 : 0.7,
                                            scale: isActive(index) ? 1 : 0.95,
                                            z: isActive(index) ? 0 : -100,
                                            rotate: isActive(index) ? 0 : randomRotateY(),
                                            zIndex: isActive(index)
                                                ? 999
                                                : testimonials.length + 2 - index,
                                            y: isActive(index) ? [0, -80, 0] : 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.9,
                                            z: 100,
                                            rotate: randomRotateY(),
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            ease: "easeInOut",
                                        }}
                                        className="absolute inset-0 origin-bottom flex justify-center items-center"
                                    >
                                        <img
                                            src={testimonial.src}
                                            alt={testimonial.name}
                                            draggable={false}
                                            className={`h-[80%] lg:h-full w-[80%] lg:w-full rounded-3xl object-cover object-center`}
                                        />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="flex justify-between flex-col py-4">
                        <motion.div
                            key={active}
                            initial={{
                                y: 20,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            exit={{
                                y: -20,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.2,
                                ease: "easeInOut",
                            }}
                            className="border-2 border-slate-600 p-5 rounded-xl"
                        >
                            <h3 className="text-2xl font-bold text-[#dcffb7]">
                                {testimonials[active].name}
                            </h3>
                            <p className="text-sm text-gray-100">
                                {testimonials[active].designation}
                            </p>
                            <motion.p className="text-md text-gray-300 mt-4 lg:mt-8 dark:text-neutral-300">
                                {testimonials[active].quote.split(" ").map((word, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{
                                            filter: "blur(10px)",
                                            opacity: 0,
                                            y: 5,
                                        }}
                                        animate={{
                                            filter: "blur(0px)",
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                            ease: "easeInOut",
                                            delay: 0.02 * index,
                                        }}
                                        className="inline-block"
                                    >
                                        {word}&nbsp;
                                    </motion.span>
                                ))}
                            </motion.p>
                        </motion.div>
                        <div className="flex gap-4 pt-12 md:pt-0 ml-3">
                            <button
                                onClick={handlePrev}
                                className="h-9 md:h-11 w-9 md:w-11 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button cursor-pointer"
                            >
                                <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300 cursor-pointer" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="h-9 md:h-11 w-9 md:w-11 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button cursor-pointer"
                            >
                                <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300 cursor-pointer" />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Contributers;
