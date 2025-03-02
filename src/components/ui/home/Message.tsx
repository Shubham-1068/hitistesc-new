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
      className="lg:max-w-[30vw] max-w-[75vw] mx-auto"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="bg-transparent rounded-xl shadow-lg overflow-hidden border-2 border-slate-700 flex justify-center items-center"
      >
        <div className="p-4 sm:p-8 md:p-6">
          <div className="flex flex-col justify-center sm:flex-row items-center sm:items-center gap-6">
            <div className="flex-shrink-0 bg-slate-200 text-black p-3 rounded-full">
              <UserCircle size={48} strokeWidth={1.5} />
            </div>
            <div className="text-center">
              <h4 className="font-bold text-2xl sm:text-3xl bg-clip-text text-transparent bg-slate-200">
                Mr. Priyatosh Jana
              </h4>
              <p className="text-sm sm:text-base text-slate-200 font-medium uppercase tracking-wider mt-1">
                Student Chapter Convener — HIT@ISTE
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Message;