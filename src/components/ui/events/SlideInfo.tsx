import React from "react";
import { motion } from "framer-motion";
import OtherInfo from "./OtherInfo";
import { Data, CurrentSlideData } from "@/app/(pages)/events/page";

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

function SlideInfo({ transitionData, currentSlideData }: Props) {
  const eventData = transitionData ? transitionData : currentSlideData.data;

  return (
    <>
      <motion.span layout className="mb-2 h-1 w-5 rounded-full bg-white" />
      <OtherInfo data={eventData} />
      <motion.div layout className="mt-5 flex items-center gap-3">
        {eventData.registration ? (
          <a href={eventData.registrationLink} target="_blank" rel="noopener noreferrer">
            <button
              className="w-fit rounded-full border-[1px] border-[#ffffff8f] px-6 py-3 text-[10px] font-thin transition duration-300 
                ease-in-out hover:bg-white hover:text-black"
            >
              REGISTER NOW
            </button>
          </a>
        ) : (
          <button
            className="w-fit rounded-full border-[1px] border-[#ffffff8f] px-6 py-3 text-[10px] font-thin cursor-not-allowed"
            disabled
          >
            REGISTRATION CLOSED
          </button>
        )}
      </motion.div>
    </>
  );
}

export default SlideInfo;
