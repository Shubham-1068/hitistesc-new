import React from "react";
import { motion } from "framer-motion";
import { UserCircle } from "lucide-react";

import { fadeIn, staggerContainer } from "../../../utils/motion";

const Message = () => (
  <section className="py-16 lg:px-4 px-1 sm:px-8 bg-transparent -mt-8">
    <motion.div
      variants={staggerContainer(0.1, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="lg:max-w-[70vw] max-w-[85vw] mx-auto"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="bg-transparent rounded-xl shadow-lg overflow-hidden border-2 border-slate-700"
      >
        <div className="p-4 sm:p-8 md:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 border-b border-slate-100 pb-6">
            <div className="flex-shrink-0 bg-[#dcffb7] text-black p-3 rounded-full">
              <UserCircle size={48} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-bold text-2xl sm:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#dcffb7] to-[#dcffb7]">
                Mr. Priyatosh Jana
              </h4>
              <p className="text-sm sm:text-base text-slate-200 font-medium uppercase tracking-wider mt-1">
                Convener — HIT@ISTE
              </p>
            </div>
          </div>
          
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p className="font-medium text-lg sm:text-xl">Dear Members and Supporters,</p>
            <p className="text-base">
              Welcome to ISTE HIT Chapter! We are dedicated to fostering innovation and 
              excellence in technology and education.
            </p>
            <p className="text-base">
              Join us in our mission to shape the future of education through technology 
              and innovation.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Message;