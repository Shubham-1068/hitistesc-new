"use client"

import type React from "react"
import { motion } from "framer-motion"
import {
  CircleDot,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  ChevronRight,
  Calendar,
  Code,
  Cpu,
} from "lucide-react"
import Link from "next/link"


const Footer: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <footer className="relative bg-black text-white pt-8 pb-5 px-6 md:px-12 overflow-hidden border-t border-gray-600">
      {/* Tech-themed decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,120,255,0.1),transparent_40%)]"></div>
        <div className="absolute top-1/2 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,rgba(37,99,235,0.1),transparent_40%)]"></div>
        <div className="absolute -top-24 -left-24 w-48 h-48 border border-gray-800 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 border border-gray-800 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 border border-gray-800 rounded-full"></div>
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="flex items-center">
            <div className="relative">
              <img src="/Iste.png" alt="Iste-Logo" className="w-14 h-14 rounded-full" />
              <div className="absolute inset-0 bg-primary/20 blur-md rounded-full"></div>
            </div>
            <span className="text-2xl font-bold ml-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 cursor-default">
              ISTE-HIT
            </span>
          </div>
          <p className="text-gray-200 leading-relaxed cursor-default">
          Innovating, Educating, Empowering.
          </p>
          <div className="flex space-x-4">
            {[
              { icon: Instagram, href: "https://www.instagram.com/iste.hit.sc/" },
              { icon: Linkedin, href: "https://www.linkedin.com/company/iste-hit-sc/posts/?feedView=all" },
              { icon: Github, href: "https://github.com/ISTE-HIT" },
            ].map((social, index) => (
              <motion.a key={index} href={social.href} className="relative group" whileHover={{ y: -5 }}>
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="bg-gray-800/80 p-2.5 rounded-full backdrop-blur-sm border border-gray-700/50 relative z-10 group-hover:border-primary/50 transition-colors cursor-pointer">
                  <social.icon size={18} className="text-gray-200 group-hover:text-white transition-colors cursor-pointer" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="hidden md:block space-y-6">
          <h3 className="text-lg font-bold relative inline-block">
            Quick Links
            <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-slate-400"></div>
          </h3>
          <ul className="space-y-3">
          {[
              { path: "/", label: "HOME" },
              { path: "/events", label: "EVENTS" },
              { path: "/gallery", label: "MEMORIES" },
              { path: "/social", label: "SOCIAL" },
              { path: "/about", label: "ABOUT" },
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 110 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.2 }}
                className="hover:text-[#DCFFB7] transition mr-3"
              >
                <div
                  
                  className={`cursor-pointer transition-all text-sm`}
                >
                  <Link className="cursor-pointer" href={item.path}>{item.label}</Link>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <h3 className="text-lg font-bold relative inline-block">
            Contact Us
            <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-slate-400"></div>
          </h3>
          <ul className="space-y-4">
            {[
              { icon: MapPin, text: "Haldia Institute of Technology, Purba Medinipur, Haldia, West Bengal-721657" },
              { icon: Phone, text: "90027-80765" },
              { icon: Mail, text: "hitiste.studentchapter@gmail.com" },
            ].map((contact, index) => (
              <li key={index} className="flex items-center cursor-pointer">
                <div className="p-1.5 bg-gray-800/80 rounded-md border border-gray-700/50 mr-3 group-hover:border-primary/30 transition-colors">
                  <contact.icon size={16} className="text-primary" color="white" />
                </div>
                <span className="text-gray-200 group-hover:text-gray-300 transition-colors text-sm cursor-pointer">{contact.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative max-w-7xl mx-auto mt-7 pt-5 border-t border-gray-700/50 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.5 } }}
        viewport={{ once: true }}
      >

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm cursor-default">
          <p className="cursor-default mb-1">Made with ❤️ by ISTE-HIT</p>
          <p className="cursor-default">© {new Date().getFullYear()} ISTE-HIT. All rights reserved.</p>
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300 transition-colors cursor-pointer">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors cursor-pointer">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors cursor-pointer">
              Cookie Policy
            </a>
          </div> */}
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer

