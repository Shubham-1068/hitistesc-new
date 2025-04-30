"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Lightbulb, Rocket, Linkedin, Mail, MapPin, Phone, Globe, Github } from 'lucide-react';
import Footer from '@/components/ui/footer/footer';
import Decorations from '@/components/ui/home/Decorations';

const convenor = {
  name: "Prof. Priyatosh Jana",
  role: "OFFICER IN-CHARGE ISTE-HIT SC",
  image: "https://res.cloudinary.com/db1sduyls/image/upload/v1744222607/PJ_Sir_mlxprk.jpg",
  bio: "The convenor of ISTE HIT SC Society drives innovation and fosters student engagement, creating impactful learning experiences for all members.",
  social: {
    linkedin: "https://www.linkedin.com/in/priyatosh-jana-87341375/?originalSubdomain=in",
    email: "priyatoshiana@gmail.com"
  }
};

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <>
    <Decorations />
    <div className="min-h-screen bg-transparent py-16 mt-14">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20" 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <div className="inline-block">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400 text-center mb-6"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              ISTE-HIT Student Chapter
            </motion.h1>
          </div>
          <p className="text-lg text-slate-200 max-w-3xl mx-auto">
            Empowering future technologists through innovation, collaboration, and excellence in education.
          </p>
        </motion.div>

        {/* Convenor Section */}
        <motion.div 
          variants={itemVariants}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#bdf38e] to-white text-transparent bg-clip-text">Our Chapter Incharge</h2>
          <motion.div 
            className="max-w-2xl mx-auto p-8 rounded-2xl border border-slate-600 flex flex-col md:flex-row items-center gap-8"
            whileHover={hoverVariants.hover}
          >
            <div className="flex flex-col md:flex-row items-center gap-10">
              <motion.div 
                className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-slate-200"
              >
                <img 
                  src={convenor.image} 
                  alt={convenor.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-2 text-white">{convenor.name}</h3>
                <p className="text-[#bdf38e] font-semibold mb-4">{convenor.role}</p>
                <p className="text-slate-200 mb-4">{convenor.bio}</p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <motion.a 
                    href={convenor.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: "#bdf38e" }}
                    className="text-muted-foreground hover:text-[#bdf38e] transition-colors"
                  >
                    <Linkedin size={20} color='white' />
                  </motion.a>
                  <motion.a 
                    href={convenor.social.email}
                    whileHover={{ scale: 1.2, color: "#bdf38e" }}
                    className="text-muted-foreground hover:text-[#bdf38e] transition-colors"
                  >
                    <Mail size={20} color='white' />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* What We Do Section */}
        <motion.div variants={itemVariants} className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#bdf38e] to-white text-transparent bg-clip-text">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Rocket, title: "Technical Workshops", desc: "Organizing hands-on workshops on cutting-edge technologies and industry practices." },
              { icon: Users, title: "Community Building", desc: "Creating a network of tech enthusiasts and fostering collaboration among students." },
              { icon: Award, title: "Competitions", desc: "Hosting technical competitions and hackathons to promote innovation and problem-solving." }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl border border-slate-600"
                variants={itemVariants}
                whileHover={hoverVariants.hover}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="w-12 h-12 text-[#bdf38e] mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-slate-200">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision & Mission */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 mb-24">
          {[
            { icon: Target, title: "Our Mission", desc: "To empower students with technical knowledge and skills through practical learning experiences, fostering innovation and professional growth in the field of technology." },
            { icon: Lightbulb, title: "Our Vision", desc: "To be a leading student chapter that nurtures future technology leaders and innovators, creating a lasting impact on the tech community through excellence in education and innovation." }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl border border-slate-600"
              variants={itemVariants}
              whileHover={hoverVariants.hover}
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon className="w-12 h-12 text-[#bdf38e] mb-4" />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-slate-200">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div 
  variants={itemVariants} 
  className="mb-24 px-4"
>
  <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#bdf38e] to-white text-transparent bg-clip-text">
    Connect With Us
  </h2>
  
  <motion.div 
    className="max-w-5xl mx-auto p-8 rounded-3xl bg-transparent border border-slate-600"
    whileHover={{ 
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
    }}
  >
    <div className="md:grid md:grid-cols-3 flex flex-col gap-12 md:gap-8">
      <motion.div 
        className="flex flex-col items-center text-center p-6 rounded-xl bg-slate-800/30"
        whileHover={{ 
          scale: 1.05,
          backgroundColor: "rgba(189, 243, 142, 0.1)"
        }}
      >
        <MapPin className="w-10 h-10 text-[#bdf38e] mb-5" />
        <h3 className="text-2xl font-semibold mb-3 text-white">Our Location</h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          Haldia Institute of Technology<br />
          Purba Medinipur, Haldia<br />
          West Bengal-721657
        </p>
      </motion.div>

      <motion.div 
        className="flex flex-col items-center text-center p-6 rounded-xl bg-slate-800/30"
        whileHover={{ 
          scale: 1.05,
          backgroundColor: "rgba(189, 243, 142, 0.1)"
        }}
      >
        <Mail className="w-10 h-10 text-[#bdf38e] mb-5" />
        <h3 className="text-2xl font-semibold mb-3 text-white">Email Us</h3>
        <a 
          href="mailto:hitiste.studentchapter@gmail.com" 
          className="text-slate-300 text-sm leading-relaxed w-full text-center break-words"
        >
          hitiste.studentchapter@gmail.com
        </a>
      </motion.div>

      <motion.div 
        className="flex flex-col items-center text-center p-6 rounded-xl bg-slate-800/30"
        whileHover={{ 
          scale: 1.05,
          backgroundColor: "rgba(189, 243, 142, 0.1)"
        }}
      >
        <Globe className="w-10 h-10 text-[#bdf38e] mb-5" />
        <h3 className="text-2xl font-semibold mb-3 text-white">Follow Us</h3>
        <div className="flex gap-6">
          <motion.a 
            href="https://www.linkedin.com/company/iste-hit-sc/posts/?feedView=all"
            whileHover={{ 
              scale: 1.3,
              rotate: 8,
              color: "#bdf38e"
            }}
            className="text-slate-300"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a 
            href="https://github.com/ISTE-HIT"
            whileHover={{ 
              scale: 1.3,
              rotate: -8,
              color: "#bdf38e"
            }}
            className="text-slate-300"
          >
            <Github size={24} />
          </motion.a>
        </div>
      </motion.div>
    </div>
  </motion.div>
</motion.div>
      </motion.div>
    </div>
    <Footer />
    </>
  );
};

export default AboutUs;