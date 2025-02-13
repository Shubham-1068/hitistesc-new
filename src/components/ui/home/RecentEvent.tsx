import React from "react";
import { motion } from "framer-motion";
import { FaMapMarker } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { staggerContainer } from "@/utils/motion";
import TypingText from "@/components/CustomTexts";

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

interface EventData {
  id: number;
  imageUrl?: string;
  eventName: string;
  eventTiming: string;
  eventLocation: string;
}

const eventData: EventData[] = [
  {
    id: 1,
    imageUrl: "https://res.cloudinary.com/dds4wowea/image/upload/v1739427669/ppf_jzxbvp.jpg",
    eventName: "National Level Ideathon",
    eventTiming: "Upcoming 10th - 11th April",
    eventLocation: "SN Bose",
  },
  {
    id: 2,
    imageUrl: "https://res.cloudinary.com/dds4wowea/image/upload/v1739429882/IMG_20250210_174708_r6qojr.jpg",
    eventName: "AI Odyssey",
    eventTiming: "10th - 13th February",
    eventLocation: "SN Bose",
  },
  {
    id: 3,
    imageUrl: "https://res.cloudinary.com/dds4wowea/image/upload/v1739424323/Screenshot_20250213_105424_Instagram_wqo5xr.jpg",
    eventName: "Alumni Connect",
    eventTiming: "4th January",
    eventLocation: "Online",
  },
];

export default function RecentEvent() {
  return (
    <section className={`sm:p-16 xs:p-8 px-6 py-12 relative z-10`}>
      <motion.div
        variants={staggerContainer(0.1, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col`}
      >
        <TypingText title="௹ Recent Events" textStyles="text-center" />
        <div className="flex flex-wrap">
          {eventData.map((event) => (
            <div key={event.id} className="w-full sm:w-1/3 p-4">
              <motion.div
                variants={fadeInScale}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="relative"
              >
                <motion.img
                  src={event.imageUrl}
                  alt={event.eventName}
                  className="w-full h-[250px] object-cover rounded-2xl"
                  variants={fadeInScale}
                />
                <div className="absolute bottom-0 left-0 p-2 bg-[rgba(0,0,0,0.5)] text-white rounded-md w-full">
                  <div className="font-bold">{event.eventName}</div>
                  <div className="flex items-center space-x-3">
                    <IoCalendarOutline />
                    <span>{event.eventTiming}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaMapMarker />
                    <span>{event.eventLocation}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
