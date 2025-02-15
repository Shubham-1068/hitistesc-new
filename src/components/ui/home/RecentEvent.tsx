import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMapMarker } from "react-icons/fa";
import { IoCalendarOutline, IoClose } from "react-icons/io5";
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
  eventDetails: string;
  eventLocation: string;
  registrationLink?: string;
}

const eventData: EventData[] = [
  {
    id: 1,
    imageUrl: "https://res.cloudinary.com/dds4wowea/image/upload/v1739447493/ideathon_2_xhozqx.jpg",
    eventName: "National Level Ideathon",
    eventTiming: "Upcoming 11th April",
    eventDetails: `📝 **Topic for Ideathon:**  
    Emerging Trends in AI and Cyber Security  

    🎯 **Eligibility Criteria:**  
    1️⃣ This competition is open to students from all colleges across India.  
    2️⃣ Each applicant is allowed one entry.  

    📜 **Rules:**  
    1️⃣ This is a group event (Applicants must form a group of 3 participants).  
    2️⃣ The idea should be original.  
    3️⃣ The presentation will be judged on the basis of innovation, technical feasibility, message, neatness, literature review, and overall methodology.  
    4️⃣ Each submission must be backed by a Research Paper.  
    5️⃣ A Proposed Methodology and Literature Review must be provided.  
    6️⃣ A Report with a proper abstract of the proposed methodology must be submitted.  
    7️⃣ **Word limit for the abstract:** 200 words.  
    8️⃣ **References:** The research paper provided should have at least 10 references.  
    9️⃣ **Chances of rejection will be high if supporting files are not submitted.**  

    📅 **Key Details:**  
    📌 **Last Date of Submission:** 9th March, 2025  
    📌 **Result Announcement:** 25th March, 2025  
    📌 **Mode of Contest:** Offline  
    📌 **Final Event Date:** 11th April, 2025  
    📌 **Final Event Location:** Haldia Institute of Technology, Haldia  
    📌 **College Address:** ICARE Complex, HIT College Road, Hatiberia, Haldia - 721657`,
    eventLocation: "SN Bose",
    registrationLink: "https://forms.gle/La1A77MUMABr67Ha7",
  },
  {
    id: 2,
    imageUrl: "https://res.cloudinary.com/dds4wowea/image/upload/v1739429882/IMG_20250210_174708_r6qojr.jpg",
    eventName: "Annual Convension",
    eventTiming: "10th April",
    eventDetails: "An exciting journey into the future of Artificial Intelligence and its real-world applications.",
    eventLocation: "SN Bose",
  },
  {
    id: 3,
    imageUrl: "https://res.cloudinary.com/dds4wowea/image/upload/v1739637923/rec-iste_4x_t6t3yl.png",
    eventName: "Recruitment",
    eventTiming: "Comming Soon",
    eventDetails: `Are you passionate about technology, creativity, and teamwork? The Indian Society for Technical Education (ISTE) HIT SC is looking for enthusiastic individuals who want to join our dynamic team! This is your chance to be part of an innovative community that fosters learning, networking, and skill development.

**Positions to apply for:**

🔹 Technical Team – Are you skilled in coding, web development, or software tools? Join the technical team to work on exciting projects, manage the ISTE website, and develop tech-based solutions.
🔹 Content Writing Team – If you have a flair in writing, join us to create engaging blogs, event reports, social media content, and newsletters that showcase ISTE's achievements.
🔹 Public Relations (PR) Team – Love networking and outreach? Help us build collaborations, connect with sponsors, and promote ISTE across various platforms
🔹 Photography and Videography Team – Capture the essence of ISTE events with your photography and videography skills. Help in media coverage and content creation for promotions.
🔹 Graphic Design Team – Are you creative with an eye for design? Join us to design posters, banners, social media creatives, and event branding materials.
🔹 Video Editing Team – Skilled in video production and editing? Help us create engaging promotional videos, event highlights, and reels for ISTE’s digital presence.

**Rules to be followed by a Core Member of ISTE HIT SC:-**

1. Integrity, Inclusivity & Professionalism – All members must uphold honesty, fairness, teamwork, and respect while fostering an inclusive environment. A professional dress code (formal or ISTE-approved t-shirt) is mandatory during society events and meetings.  
2. Commitment, Membership & Accountability – Regular attendance at meetings and events is required. Once selected as a core member, you must take ISTE membership and purchase the ISTE-approved t-shirt. Members must also complete assigned tasks within deadlines to contribute effectively to the society’s goals.  
3. Exclusive Core Membership Rule – You can only be a core member of one technical society in the college. While you may hold general memberships elsewhere. Involvement in core team activities (interviews, or decision-making) for another technical society, you will be immediately removed from ISTE.  
4. Mandatory PR & Promotion Participation – Every member must actively promote ISTE and take part in Public Relations (PR) efforts, regardless of their background. Training will be provided if needed, but PR involvement is non-negotiable.  
5. Zero Tolerance for Misconduct – Harassment, discrimination, and substance abuse are strictly prohibited. Violations will lead to serious disciplinary action, including suspension or expulsion.`,
    eventLocation: "CS Department",
    registrationLink: "https://forms.gle/taY6WLE2sXgjcDuU7"
  },
];
export default function RecentEvent() {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Reset on unmount
    };
  }, [selectedEvent]);

  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <motion.div
        variants={staggerContainer(0.1, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <TypingText title="௹ Recent Events" textStyles="text-center" />

        {/* Event Cards */}
        <div className="flex flex-wrap pt-14">
          {eventData.map((event) => (
            <div key={event.id} className="w-full sm:w-1/3 p-4">
              <motion.div
                variants={fadeInScale}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="relative cursor-pointer"
                onClick={() => setSelectedEvent(event)}
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

      {/* Modal Popup */}
      {selectedEvent && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedEvent(null)}
        >
          <motion.div
            className="bg-[#101828] w-[90vw] h-[70vh] rounded-lg shadow-lg relative flex flex-col p-6 text-white"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-6 right-4 text-3xl text-gray-300 hover:text-white z-50"
              onClick={() => setSelectedEvent(null)}
            >
              <IoClose />
            </button>

            {/* Wrapper for scrolling content */}
            <div className="flex-1 overflow-y-auto pr-3 mt-12">
              <h2 className="text-2xl font-bold mb-4">{selectedEvent.eventName}</h2>
              <p className="text-gray-300 flex items-center space-x-2">
                <IoCalendarOutline /> <span>{selectedEvent.eventTiming}</span>
              </p>
              <p className="text-gray-300 flex items-center space-x-2 mt-2">
                <FaMapMarker /> <span>{selectedEvent.eventLocation}</span>
              </p>
              <p className="text-gray-300 whitespace-pre-line">{selectedEvent.eventDetails}</p>
            </div>


            {/* Apply Now Button */}
            {selectedEvent.registrationLink && (
              <div className="mt-4 text-center">
                <a
                  href={selectedEvent.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block cursor-pointer bg-[#DCFFB7] text-black font-bold py-2 px-6 rounded-lg hover:bg-[#bde37d] transition"
                >
                  Apply Now
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
