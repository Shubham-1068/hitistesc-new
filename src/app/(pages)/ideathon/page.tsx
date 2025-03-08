"use client";
import { motion } from "framer-motion";
import {
    Award, Calendar, Trophy, Users, Zap, BookOpen, Target, Lightbulb,
    Globe, Crosshair, Shield, Brain, History, Image as ImageIcon, Sparkles
} from "lucide-react";

import P1 from "../../../../public/images/p1.jpeg";
import P2 from "../../../../public/images/p2.jpeg";
import P3 from "../../../../public/images/p3.jpeg";
import P4 from "../../../../public/images/p4.jpeg";
import P5 from "../../../../public/images/p5.jpeg";
import P6 from "../../../../public/images/p6.jpeg";
import P7 from "../../../../public/images/p7.jpeg";

import InteractiveBentoGallery from "@/components/InteractiveBento";
import Decorations from "@/components/ui/home/Decorations";
import ShapeLandingHero from "@/components/ShapeLandingHero";

const sponsorTiers = [
    {
        name: "Silver",
        price: "₹25,000 - ₹45,000",
        features: [
            "Logo on event banners & brochures",
            "Social media mentions & website listing",
            "Acknowledgment during the event",
            "Company profile in event booklet",
            "Special networking session with top teams",
            "Featured mention in sessions"
        ],
        color: "bg-gradient-to-br from-gray-200 to-gray-400"
    },
    {
        name: "Gold",
        price: "₹65,000 - ₹95,000",
        features: [
            "All silver perks",
            "Prime logo placement",
            "Dedicated speaking slot",
            "Exclusive branding on merchandise",
            "Digital promotions",
            "VIP networking opportunities"
        ],
        color: "bg-gradient-to-br from-yellow-200 to-yellow-400"
    },
    {
        name: "Diamond",
        price: "Custom",
        features: [
            "All gold perks",
            "Nationwide publicity",
            "Talent acquisition opportunities",
            "National-Level recognition",
            "Custom branding solutions",
            "Industry exclusivity"
        ],
        color: "bg-gradient-to-br from-blue-200 to-blue-400"
    }
];

const mediaItems = [
    {
        id: 1,
        type: "image",
        url: P1.src,
        span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
    },
    {
        id: 2,
        type: "image",
        url: P2.src,
        span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
    },
    {
        id: 3,
        type: "image",
        url: P3.src,
        span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2",
    },
    {
        id: 4,
        type: "image",
        url: P4.src,
        span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
        id: 5,
        type: "image",
        url: P5.src,
        span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
    },
    {
        id: 6,
        type: "image",
        url: P6.src,
        span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
        id: 7,
        type: "image",
        url: P7.src,
        span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    }
]

export default function IdeathonSection() {
    return (
        <div className="w-full overflow-hidden">

            <Decorations />
            {/* Hero Section */}
            <ShapeLandingHero />

            {/* Convention 1.0 Recap */}
            <section className="py-16 bg-black">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <History className="w-10 h-10 mx-auto mb-6 text-green-500" />
                        <h2 className="text-3xl font-bold mb-6">Annual Convention 1.0 Recap</h2>
                        <p className="text-lg text-gray-300">
                            The ISTE HIT Students' Chapter at HIT held its inaugural Annual Student Convention on May 22, 2024, highlighting ed-tech empowerment. The event featured keynote speeches, interactive sessions, and student project demonstrations, fostering innovation and collaboration. A key moment was the launch of ISTE HIT's new website to enhance communication and resource sharing. The convention set a high benchmark, reinforcing ISTE HIT's role in shaping technology and education.
                        </p>
                    </motion.div>
                </div>

                <div className="min-h-screen overflow-y-auto">
                    <InteractiveBentoGallery
                        mediaItems={mediaItems}
                        title=""
                        description=""
                    />
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 -mt-44 bg-transparent">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <BookOpen className="w-10 h-10 mx-auto mb-6 text-green-500" />
                        <h2 className="text-3xl font-bold mb-6">About ISTE HIT</h2>
                        <p className="text-lg text-gray-300 mb-6">
                            The ISTE HIT Students' Chapter at Haldia Institute of Technology is your gateway to a world of innovation in educational technology. As a part of the Indian Society for Technical Education (ISTE), we empower students with cutting-edge tools and knowledge for the digital age.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm"
                        >
                            <Target className="w-10 h-10 mb-4 text-green-500" />
                            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                            <p className="text-gray-300">
                                To build a dynamic technical community that empowers students with knowledge, skills, and industry exposure. We strive to bridge the gap between academia and industry through hands-on learning and innovation.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm"
                        >
                            <Lightbulb className="w-10 h-10 mb-4 text-green-500" />
                            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                            <p className="text-gray-300">
                                To foster leadership, networking, and collaboration while nurturing future-ready professionals. We are committed to ethical and sustainable technological advancements in shaping tomorrow's engineers and innovators.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Plans for Annual Convention & National Level Ideathon */}
            <section className="py-16 bg-black">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <Brain className="w-10 h-10 mx-auto mb-6 text-green-500" />
                        <h2 className="text-3xl font-bold mb-6">Annual Tech Convention & National-Level Ideathon: Shaping AI & Cybersecurity</h2>
                        <p className="text-lg text-gray-300 mb-6">
                            The ISTE HIT Students' Chapter is excited to present a two-day event dedicated to emerging trends in AI and cybersecurity.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm"
                        >
                            <Calendar className="w-10 h-10 mb-4 text-green-500" />
                            <h3 className="text-xl font-bold mb-4">Day 1: Annual Tech Convention</h3>
                            <p className="text-gray-300">
                                The Annual Tech Convention will bring together industry experts and academicians for insightful talks and interactive panels. Participants will explore the latest advancements in AI, delve into cybersecurity challenges, and gain practical knowledge through collaborative sessions.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm"
                        >
                            <Trophy className="w-10 h-10 mb-4 text-green-500" />
                            <h3 className="text-xl font-bold mb-4">Day 2: National-Level Ideathon</h3>
                            <p className="text-gray-300">
                                Shifts focus to innovation with a National-Level Ideathon. Here, students will tackle real-world problems, developing innovative solutions for today’s cybersecurity and AI challenges. With mentorship from seasoned professionals, teams will refine their ideas, ensuring they are both creative and practical.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="max-w-3xl mx-auto text-center mt-12"
                    >
                        <p className="text-lg text-gray-300">
                            This event aims to bridge the gap between academic theories and industry practices, promoting ethical AI development and robust security measures. Overall, it is not only a platform for knowledge exchange but also a movement toward a safer, more innovative digital future. It is a unique opportunity for students, professionals, and tech enthusiasts to come together, network, and drive the next wave of technological transformation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why Sponsor Us? */}
      <section className="py-16 bg-transparent relative">
          <div className="container mx-auto px-6">
              <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="max-w-4xl mx-auto"
              >
                  <div className="text-center mb-12">
                      <Award className="w-12 h-12 mx-auto mb-6 text-green-500" />
                      <h2 className="text-3xl font-bold mb-6">Why Partner With Us?</h2>
                      <p className="text-lg text-gray-300 mb-8">
                          Join us in shaping the future of technology education and innovation. Your partnership creates lasting impact and opens doors to endless possibilities.
                      </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                      <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-500/50 transition-all group"
                      >
                          <Globe className="w-8 h-8 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
                          <h3 className="text-xl font-bold mb-3">Massive Reach</h3>
                          <p className="text-gray-300">
                              Connect with 1000+ tech enthusiasts, innovators, and future leaders from across India. Amplify your brand's presence in the educational technology space.
                          </p>
                      </motion.div>

                      <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-500/50 transition-all group"
                      >
                          <Crosshair className="w-8 h-8 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
                          <h3 className="text-xl font-bold mb-3">Targeted Marketing</h3>
                          <p className="text-gray-300">
                              Engage directly with a curated audience passionate about AI, cybersecurity, and emerging technologies. Your message reaches the right people.
                          </p>
                      </motion.div>

                      <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-500/50 transition-all group"
                      >
                          <Shield className="w-8 h-8 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
                          <h3 className="text-xl font-bold mb-3">Brand Credibility</h3>
                          <p className="text-gray-300">
                              Position your brand as a leader in technology education and innovation. Build trust with future tech leaders and decision-makers.
                          </p>
                      </motion.div>

                      <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-500/50 transition-all group"
                      >
                          <Users className="w-8 h-8 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
                          <h3 className="text-xl font-bold mb-3">Talent Pipeline</h3>
                          <p className="text-gray-300">
                              Direct access to a pool of skilled tech talent. Connect with potential future employees and innovators early in their careers.
                          </p>
                      </motion.div>

                      <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-500/50 transition-all group"
                      >
                          <Zap className="w-8 h-8 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
                          <h3 className="text-xl font-bold mb-3">Innovation Hub</h3>
                          <p className="text-gray-300">
                              Be at the forefront of technological innovation. Witness and support groundbreaking ideas from young minds solving real-world challenges.
                          </p>
                      </motion.div>

                      <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                          className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-500/50 transition-all group"
                      >
                          <ImageIcon className="w-8 h-8 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
                          <h3 className="text-xl font-bold mb-3">Media Coverage</h3>
                          <p className="text-gray-300">
                              Benefit from extensive media coverage across digital and traditional platforms. Your brand reaches beyond the event through our marketing channels.
                          </p>
                      </motion.div>
                  </div>

                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                  >
                      <h3 className="text-2xl font-bold mb-4">Ready to Make an Impact?</h3>
                      <p className="text-lg text-gray-300 mb-6">
                          Join us in shaping the future of technology education. Let's create a partnership that drives innovation and empowers the next generation of tech leaders.
                      </p>
                      
                  </motion.div>
              </motion.div>
          </div>
      </section>

            {/* Sponsorship Opportunities */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-transparent" />

        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-green-500" />
              <h2 className="text-4xl font-bold text-white text-transparent">
                Sponsorship Opportunities
              </h2>
              <Sparkles className="w-6 h-6 text-green-500" />
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join our community of sponsors and make a lasting impact on our event's success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsorTiers.map((tier, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, translateY: -5 }}
                  className="rounded-2xl overflow-hidden backdrop-blur-lg border border-white/10 hover:border-yellow-500/50 transition-all duration-300"
                >
                  <div className={`p-8 ${tier.color}`}>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                      <Award className="w-8 h-8 text-gray-900" />
                    </div>
                    <p className="text-3xl font-bold mb-6 text-gray-900">{tier.price}</p>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + (i * 0.1) }}
                          className="flex items-center text-gray-900"
                        >
                          <span className="mr-2 text-lg">•</span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                    >
                      Become {tier.name}
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

            {/* Contact Section */}
<section className="py-16 bg-transparent">
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto text-center"
    >
      <h2 className="text-4xl font-bold mb-8">
        Get In Touch
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all duration-300"
        >
          <h3 className="text-xl font-semibold mb-4 text-white">Faculty Coordinator</h3>
          <p className="text-gray-200">Prof. Priyatosh Jana</p>
          <p className="text-green-400 font-medium mt-2 hover:text-green-300 transition-colors">
            9002780765
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all duration-300"
        >
          <h3 className="text-xl font-semibold mb-4 text-white">Student Coordinator</h3>
          <p className="text-gray-200">Priyam Sarkar</p>
          <p className="text-green-400 font-medium mt-2 hover:text-green-300 transition-colors">
            7074218485
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all duration-300"
        >
          <h3 className="text-xl font-semibold mb-4 text-white">Student Coordinator</h3>
          <p className="text-gray-200">Meghadri Mukherjee</p>
          <p className="text-green-400 font-medium mt-2 hover:text-green-300 transition-colors">
            7980017298
          </p>
        </motion.div>
      </div>
      <div className="text-center space-y-3">
        <p className="text-gray-300">
          Website:{' '}
          <a
            href="https://hitiste.vercel.app"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            hitiste.vercel.app
          </a>
        </p>
        <p className="text-gray-300">
          Email:{' '}
          <a
            href="mailto:hitiste.studentchapter@gmail.com"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium cursor-pointer"
          >
            hitiste.studentchapter@gmail.com
          </a>
        </p>
      </div>
    </motion.div>
  </div>
</section>

        </div>
    );
}