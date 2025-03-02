import React from 'react';
import { motion } from 'framer-motion';

interface Partner {
  id: number;
  name: string;
  logo: string;
  description: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: "IIFON",
    logo: "https://iifon.org/wp-content/uploads/2024/04/logo.png",
    description: "Academic partner providing research and educational resources."
  },
  {
    id: 2,
    name: "Crypto Conference",
    logo: "https://iiw.iifon.org/images/india-kolkata.jpg",
    description: "Annual blockchain conference and networking event."
  },
];

const Guest: React.FC = () => {
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
    <section className="bg-transparent pb-16 px-6 md:px-12 -mt-3">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >

        <motion.div className="text-center mb-12 text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-400" variants={itemVariants}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-accent">Partners</span></h2>
          <p className="text-md text-gray-300 max-w-2xl mx-auto">
            Collaborating with industry leaders to bring you the best resources and opportunities
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row justify-center items-center gap-8"
          variants={containerVariants}
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              className="bg-white h-[120px] w-[250px] md:h-[160px] md:w-[400px] rounded-xl overflow-hidden border-2 border-slate-600 hover:border-[#dcffb7] transition-colors duration-300 flex justify-around items-center"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="overflow-hidden flex justify-center items-center p-5 object-contain">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="w-[75%] object-fill"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
        >
          <p className="text-gray-300 mb-6">
            Interested in becoming a sponsor or partner? Reach out to us at <a href="mailto:hitiste.studentchapter@gmail.com" className="text-accent cursor-pointer text-[#dcffb7] transition-colors duration-300">hitiste.studentchapter@gmail.com</a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Guest;