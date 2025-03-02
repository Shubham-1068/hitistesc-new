import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Code, Video, MessageSquare, X } from "lucide-react";

// Sparkle effect component
const Sparkle = ({ style }: { style: React.CSSProperties }) => (
  <motion.div
    className="absolute w-1 h-1 bg-white rounded-full pointer-events-none"
    style={style}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
    }}
    transition={{
      duration: Math.random() * 0.8 + 0.4,
      ease: "easeInOut",
    }}
    exit={{ opacity: 0 }}
  />
);

// Circuit line component for tech background
const CircuitLine = ({ position, length, rotation, delay }: { 
  position: { top?: string, left?: string, right?: string, bottom?: string },
  length: number,
  rotation: number,
  delay: number
}) => (
  <motion.div
    className="absolute h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
    style={{
      ...position,
      width: `${length}px`,
      transform: `rotate(${rotation}deg)`,
    }}
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: [0, 0.7, 0],
      x: [0, 5, 0],
    }}
    transition={{
      duration: 3,
      delay: delay,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
);

// Digital node component
const DigitalNode = ({ position }: { 
  position: { top?: string, left?: string, right?: string, bottom?: string }
}) => (
  <motion.div
    className="absolute w-1.5 h-1.5 bg-cyan-400/40 rounded-full"
    style={position}
    initial={{ opacity: 0.3 }}
    animate={{ 
      opacity: [0.3, 0.8, 0.3],
      boxShadow: [
        "0 0 0px rgba(34, 211, 238, 0)",
        "0 0 4px rgba(34, 211, 238, 0.5)",
        "0 0 0px rgba(34, 211, 238, 0)"
      ]
    }}
    transition={{
      duration: Math.random() * 2 + 2,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
);

// Corner decoration component
const CornerDecoration = ({ position }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) => {
  const positionClasses = {
    "top-left": "top-1 left-1",
    "top-right": "top-1 right-1",
    "bottom-left": "bottom-1 left-1",
    "bottom-right": "bottom-1 right-1",
  };

  return (
    <motion.div
      className={`absolute w-4 h-4 flex items-center justify-center ${positionClasses[position]}`}
      initial={{ opacity: 0.5 }}
      animate={{
        opacity: [0.5, 1, 0.5],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      <div className="w-1 h-1 bg-cyan-400/60 rounded-full" />
    </motion.div>
  );
};

// Team data with descriptions
const teamData = [
  {
    title: "Technical",
    icon: <Code className="w-6 h-6" />,
    gradient: "bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900",
    description: "Our technical team consists of expert developers, engineers, and architects who build robust solutions using cutting-edge technologies. They specialize in full-stack development, cloud architecture, and performance optimization.",
    accentColor: "cyan",
  },
  {
    title: "Media",
    icon: <Video className="w-6 h-6" />,
    gradient: "bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900",
    description: "The media team creates compelling visual content, manages our digital presence, and develops engaging multimedia experiences. They excel in video production, graphic design, and interactive media.",
    accentColor: "blue",
  },
  {
    title: "Public Relations",
    icon: <MessageSquare className="w-6 h-6" />,
    gradient: "bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900",
    description: "Our PR team builds and maintains relationships with stakeholders, manages our brand reputation, and creates strategic communication plans. They are experts in crisis management, media relations, and brand storytelling.",
    accentColor: "indigo",
  },
];

export default function TeamExplorer() {
  const [activePanel, setActivePanel] = useState<number | null>(null);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Create sparkle effect
  const createSparkles = (count: number, x?: number, y?: number) => {
    const newSparkles = Array.from({ length: count }, (_, i) => ({
      id: Date.now() + i,
      x: x ? x + (Math.random() * 200 - 100) : Math.random() * window.innerWidth,
      y: y ? y + (Math.random() * 200 - 100) : Math.random() * window.innerHeight,
    }));
    
    setSparkles(prev => [...prev, ...newSparkles]);
    
    setTimeout(() => {
      setSparkles(prev => prev.filter(s => !newSparkles.some(ns => ns.id === s.id)));
    }, 1000);
  };

  // Handle panel click to show team details
  const handlePanelClick = (index: number, e: React.MouseEvent) => {
    createSparkles(15, e.clientX, e.clientY);
    setSelectedTeam(index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const panelVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    }),
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.98 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2,
      },
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="w-full min-h-screen bg-transparent flex flex-col items-center justify-center overflow-hidden p-4 md:p-8 -mt-[100px] lg:-mt-32 lg:mb-8 mb-28">
      {/* Header */}
      <motion.div
        className="flex flex-col items-center gap-4 mb-12 md:mb-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="flex flex-col lg:flex-row justify-center items-center gap-2" variants={titleVariants}>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400">
            Explore our
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400">
            Teams
          </h1>
        </motion.div>
        <motion.p
          className="text-md text-gray-300 max-w-2xl text-center px-4 md:px-0"
          variants={titleVariants}
        >
          Discover the talented groups that drive our success and innovation
        </motion.p>
      </motion.div>

      {/* Sparkle effects */}
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <Sparkle
            key={sparkle.id}
            style={{
              left: sparkle.x,
              top: sparkle.y,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </AnimatePresence>

      {/* Team panels */}
      <motion.div
        className="flex flex-col md:flex-row justify-center items-center w-full max-w-5xl gap-6 md:gap-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {teamData.map((team, index) => (
          <motion.div
            key={index}
            className={`relative h-[150px] md:h-[320px] w-[80vw] md:w-[300px] rounded-lg ${team.gradient} 
                      backdrop-blur-sm backdrop-filter cursor-pointer overflow-hidden`}
            custom={index}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            variants={panelVariants}
            onMouseEnter={() => setActivePanel(index)}
            onMouseLeave={() => setActivePanel(null)}
            onClick={(e) => handlePanelClick(index, e)}
          >
            {/* Tech background elements */}
            <div className="absolute inset-0 overflow-hidden opacity-30">
              {/* Circuit lines */}
              <CircuitLine position={{ top: "20%", left: "10%" }} length={60} rotation={0} delay={0} />
              <CircuitLine position={{ top: "40%", left: "5%" }} length={80} rotation={45} delay={0.5} />
              <CircuitLine position={{ top: "70%", left: "20%" }} length={40} rotation={-30} delay={1} />
              <CircuitLine position={{ top: "30%", right: "10%" }} length={50} rotation={90} delay={1.5} />
              <CircuitLine position={{ bottom: "20%", right: "15%" }} length={70} rotation={-45} delay={2} />
              
              {/* Digital nodes */}
              <DigitalNode position={{ top: "15%", left: "10%" }} />
              <DigitalNode position={{ top: "35%", left: "30%" }} />
              <DigitalNode position={{ top: "60%", left: "15%" }} />
              <DigitalNode position={{ top: "25%", right: "25%" }} />
              <DigitalNode position={{ top: "50%", right: "10%" }} />
              <DigitalNode position={{ bottom: "20%", right: "30%" }} />
              <DigitalNode position={{ bottom: "30%", left: "25%" }} />
            </div>

            {/* Animated gradient overlay */}
            <motion.div 
              className="absolute inset-0 opacity-0"
              style={{
                background: index === 0 
                  ? "radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.15), transparent 70%)"
                  : index === 1
                    ? "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15), transparent 70%)"
                    : "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15), transparent 70%)"
              }}
              animate={{
                opacity: activePanel === index ? [0, 0.8, 0.4] : 0,
              }}
              transition={{
                duration: 2,
                repeat: activePanel === index ? Infinity : 0,
                repeatType: "reverse",
              }}
            />

            {/* Border frame with glow effect */}
            <motion.div
              className="absolute inset-0 border border-white/20 rounded-lg"
              animate={{
                boxShadow: activePanel === index
                  ? index === 0 
                    ? ["0 0 0px rgba(34, 211, 238, 0)", "0 0 10px rgba(34, 211, 238, 0.3)", "0 0 0px rgba(34, 211, 238, 0)"]
                    : index === 1
                      ? ["0 0 0px rgba(59, 130, 246, 0)", "0 0 10px rgba(59, 130, 246, 0.3)", "0 0 0px rgba(59, 130, 246, 0)"]
                      : ["0 0 0px rgba(99, 102, 241, 0)", "0 0 10px rgba(99, 102, 241, 0.3)", "0 0 0px rgba(99, 102, 241, 0)"]
                  : "none",
              }}
              transition={{
                duration: 2,
                repeat: activePanel === index ? Infinity : 0,
                repeatType: "reverse",
              }}
            />

            {/* Corner decorations */}
            <CornerDecoration position="top-left" />
            <CornerDecoration position="top-right" />
            <CornerDecoration position="bottom-left" />
            <CornerDecoration position="bottom-right" />

            {/* Content */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10"
              animate={{
                y: activePanel === index ? [0, -5, 0] : 0,
              }}
              transition={{
                duration: 3,
                repeat: activePanel === index ? Infinity : 0,
                repeatType: "reverse",
              }}
            >
              <motion.div
                className="text-white/80 mb-3"
                animate={{
                  scale: activePanel === index ? [1, 1.1, 1] : 1,
                  opacity: activePanel === index ? 1 : 0.8,
                  textShadow: activePanel === index 
                    ? index === 0 
                      ? ["0 0 0px rgba(34, 211, 238, 0)", "0 0 10px rgba(34, 211, 238, 0.7)", "0 0 0px rgba(34, 211, 238, 0)"]
                      : index === 1
                        ? ["0 0 0px rgba(59, 130, 246, 0)", "0 0 10px rgba(59, 130, 246, 0.7)", "0 0 0px rgba(59, 130, 246, 0)"]
                        : ["0 0 0px rgba(99, 102, 241, 0)", "0 0 10px rgba(99, 102, 241, 0.7)", "0 0 0px rgba(99, 102, 241, 0)"]
                    : "none",
                }}
                transition={{
                  duration: 2,
                  repeat: activePanel === index ? Infinity : 0,
                  repeatType: "reverse",
                }}
              >
                {team.icon}
              </motion.div>
              
              <motion.h2
                className="text-white text-2xl font-light tracking-wider mb-2"
                animate={{
                  textShadow: activePanel === index 
                    ? index === 0 
                      ? "0 0 8px rgba(34, 211, 238, 0.5)"
                      : index === 1
                        ? "0 0 8px rgba(59, 130, 246, 0.5)"
                        : "0 0 8px rgba(99, 102, 241, 0.5)"
                    : "none",
                }}
              >
                {team.title}
              </motion.h2>
              
              <motion.p
                className="text-white/70 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: activePanel === index ? 1 : 0.7 }}
                transition={{ duration: 0.3 }}
              >
                Click to learn more
              </motion.p>
            </motion.div>

            {/* Hover gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-lg"
              initial={{ opacity: 0 }}
              animate={{
                opacity: activePanel === index ? [0, 0.2, 0] : 0,
              }}
              transition={{
                duration: 2,
                repeat: activePanel === index ? Infinity : 0,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Team details modal */}
      <AnimatePresence>
        {selectedTeam !== null && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={backdropVariants}
              onClick={() => setSelectedTeam(null)}
            />
            
            <motion.div
              ref={modalRef}
              className="fixed top-[30%] transform w-[90%] max-w-lg 
                        bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-xl border border-white/10 
                        shadow-2xl z-50 overflow-hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Tech background for modal */}
              <div className="absolute inset-0 overflow-hidden opacity-20">
                <CircuitLine position={{ top: "20%", left: "10%" }} length={100} rotation={0} delay={0} />
                <CircuitLine position={{ top: "40%", left: "5%" }} length={120} rotation={45} delay={0.5} />
                <CircuitLine position={{ top: "70%", left: "20%" }} length={80} rotation={-30} delay={1} />
                <CircuitLine position={{ top: "30%", right: "10%" }} length={90} rotation={90} delay={1.5} />
                <CircuitLine position={{ bottom: "20%", right: "15%" }} length={110} rotation={-45} delay={2} />
                
                <DigitalNode position={{ top: "15%", left: "10%" }} />
                <DigitalNode position={{ top: "35%", left: "30%" }} />
                <DigitalNode position={{ top: "60%", left: "15%" }} />
                <DigitalNode position={{ top: "25%", right: "25%" }} />
                <DigitalNode position={{ top: "50%", right: "10%" }} />
                <DigitalNode position={{ bottom: "20%", right: "30%" }} />
                <DigitalNode position={{ bottom: "30%", left: "25%" }} />
              </div>
              
              {/* Modal header */}
              <div className="relative p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="text-white/90"
                    animate={{
                      textShadow: selectedTeam === 0 
                        ? ["0 0 0px rgba(34, 211, 238, 0)", "0 0 10px rgba(34, 211, 238, 0.7)", "0 0 0px rgba(34, 211, 238, 0)"]
                        : selectedTeam === 1
                          ? ["0 0 0px rgba(59, 130, 246, 0)", "0 0 10px rgba(59, 130, 246, 0.7)", "0 0 0px rgba(59, 130, 246, 0)"]
                          : ["0 0 0px rgba(99, 102, 241, 0)", "0 0 10px rgba(99, 102, 241, 0.7)", "0 0 0px rgba(99, 102, 241, 0)"]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    {teamData[selectedTeam].icon}
                  </motion.div>
                  <h3 className="text-2xl font-medium text-white">
                    {teamData[selectedTeam].title} Team
                  </h3>
                </div>
              </div>
              
              {/* Modal content */}
              <div className="p-6 relative z-10">
                <p className="text-white/80 mb-6">
                  {teamData[selectedTeam].description}
                </p>
              </div>
              
              {/* Modal footer */}
              <div className="p-4 bg-white/5 flex justify-end relative z-10">
                <button
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                  onClick={() => setSelectedTeam(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}