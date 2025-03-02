import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Lightbulb, Rocket, Globe, Twitter, Linkedin, Github } from 'lucide-react';
import Logo from '../../../../public/Iste.png';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}


const AboutUs: React.FC = () => {
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

  return (
    <section className="py-16 px-6 md:px-12 -mt-36">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="w-full flex justify-center items-center mb-10">
          <img src={Logo.src} alt="Logo-iste-main" className='h-[180px] md:h-[220px] w-[180px] md:w-[220px]' />
        </div>
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <span className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400">Who We Are?</span>
          <p className="text-md text-gray-300 max-w-3xl mx-auto mt-5">
          The ISTE Student Chapter at Haldia Institute of Technology fosters innovation in educational technology. As part of ISTE, we empower students with the skills and knowledge to excel in the digital age through research, workshops, and collaborative projects.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row justify-center items-center gap-12 mb-20"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className='text-center'>
            <h3 className="text-2xl font-bold mb-6 flex items-center justify-center">
              <Target className="text-primary mr-3" size={28} color='white'/>
              Our Mission
            </h3>
            <p className="mb-6 text-gray-300">
            Our mission is to empower students with the skills, knowledge, and opportunities to excel in the digital age by fostering innovation, collaboration, and research in educational technology.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className='text-center'>
            <h3 className="text-2xl font-bold mb-6 flex items-center justify-center">
              <Lightbulb className="text-accent-orange mr-3" size={28} />
              Our Vision
            </h3>
            <p className="mb-6 text-gray-300">
            Our vision is to create a community of forward-thinking individuals who drive the future of education through technology, innovation, and collaboration, shaping a digitally empowered world.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;