import React, { FC } from "react";
import { motion } from "framer-motion";

import { startingFeatures } from "@/consts";
import JoinSteps from "@/components/JoinSteps";
import TypingText from "@/components/CustomTexts";
import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion";
export default function JoinUs() {
  return (
    <section className={`sm:p-16 xs:p-8 px-6 py-12 relative z-10 cursor-default`}>
      <motion.div
        variants={staggerContainer(0.1, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8 lg:flex-row`}
      >
        <motion.div
          variants={planetVariants("left")}
          className={`flex-1 flex justify-center items-center`}
        >
          <img
            src="/Iste.png"
            alt="get-started"
            className="w-3/5 max-w-sm object-contain md:h-[75%] md:w-full pointer-events-none"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.1, 1)}
          className="flex flex-1 flex-col justify-center items-center"
        >
          {/* Typing Text section */}
          <div className="hidden md:flex md:flex-row flex-col justify-center items-center">
            <TypingText title="௹ Why you should join us?" textStyles={"text-3xl"} />
          </div>
          <div className="flex md:hidden md:flex-row flex-col justify-center items-center">
            <TypingText title="௹ Why you should" textStyles={"text-[25px]"} />
            <TypingText title=" join us?" textStyles={"text-[25px]"} />
          </div>

          <div className="mt-[31px] flex max-w-[390px] flex-col gap-2">
            {startingFeatures.map((feature: string, index: number) => (
              <JoinSteps
                key={feature}
                number={`${index < 10 ? "0" : ""} ${index + 1}`}
                text={feature}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
