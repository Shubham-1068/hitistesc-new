"use client";
import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React from "react";
import BackgroundImage from "@/components/ui/events/BackgroundImage";
import Slides from "@/components/ui/events/Slides";
import SlideInfo from "@/components/ui/events/SlideInfo";
import Controls from "@/components/ui/events/Controls";

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
  registration: boolean;
  registrationLink?: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export default function Home() {
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(sliderData[0]);
  const [currentSlideData, setCurrentSlideData] = React.useState<CurrentSlideData>({
    data: initData,
    index: 0,
  });

  return (
    <main className={`${inter.className} relative min-h-screen select-none overflow-hidden text-white antialiased`}>
      <AnimatePresence>
        <BackgroundImage transitionData={transitionData} currentSlideData={currentSlideData} />
        <div className="absolute z-20 h-full w-full">
          <div className="flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo transitionData={transitionData} currentSlideData={currentSlideData} />
            </div>
            <div className="col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}

const sliderData = [
  {
    id: " 1",
    img: "https://res.cloudinary.com/dds4wowea/image/upload/v1739639103/ideathon_ugcda9.jpg",
    location: "SN Bose",
    description: "Join the Ideathon on Emerging Trends in AI and Cyber Security at Haldia Institute of Technology! Submit your innovative group project by 9th March 2025 and compete offline on 11th April 2025. ",
    title: "National Level Ideathon",
    registration: true,
    registrationLink: "https://forms.gle/La1A77MUMABr67Ha7",
  },
  {
    id: " 2",
    img: "https://res.cloudinary.com/dds4wowea/image/upload/v1739429882/IMG_20250210_174708_r6qojr.jpg",
    location: "CS Dept",
    description: "'AI Odyssey Workshop' was an electrifying journey into the world of AI! From fundamentals to advanced concepts, it was a hands-on experience that empowered future tech innovators!",
    title: "AI Odyssey",
    registration: false,
  },
  {
    id: "3",
    img: "https://res.cloudinary.com/dds4wowea/image/upload/v1739424323/Screenshot_20250213_105424_Instagram_wqo5xr.jpg",
    location: "Online",
    description:
      "An inspiring and insightful session with HIT alumni! A truly enriching experience filled with valuable career guidance and motivation.",
    title: "Alumni Connect",
    registration: false,
  },
  {
    id: "4",
    img: "https://res.cloudinary.com/dds4wowea/image/upload/v1735397965/IMG_6073_fgnwsz.jpg",
    location: "CS Department",
    description:
      "Quest for Enigma 2.0 was an exhilarating tech challenge! A fantastic event that tested knowledge, boosted problem-solving skills, and kept the excitement high!",
    title: "Quest for Enigma 2.0",
    registration: false,
  },
  {
    id: "5",
    img: "https://res.cloudinary.com/dds4wowea/image/upload/v1739639580/webD_mhtpwf.jpg",
    location: "Online",
    description:
      "Web-D-Explore was an incredible journey into web development! A perfect blend of learning, hands-on experience, and skill-building for future tech enthusiasts!",
    title: "Web D Explore",
    registration: false,
  },
  {
    id: "6",
    img: "https://res.cloudinary.com/dds4wowea/image/upload/v1735397267/vlcsnap-2024-12-28-18h42m34s109_yw8qgt.png",
    location: "Online",
    description:
      "An insightful and engaging session for freshers! A great opportunity to gain guidance, overcome challenges, and set the path for academic success.",
    title: "Interactive Session",
    registration: false,
  },
  {
    id: "7",
    img: "https://res.cloudinary.com/dds4wowea/image/upload/v1735397126/eco_yxqmcg.jpg",
    location: "CS Department",
    description:
      "'Echoes of Freedom' was a vibrant celebration of success, talent, and independence! A truly memorable evening filled with recognition, culture, and joy!",
    title: "Echos of Freedom",
    registration: false,
  },
  {
    id: "8",
    img: "https://res.cloudinary.com/dds4wowea/image/upload/v1735392861/IMG-20240808-WA0075_pfahhs.jpg",
    location: "CS Department",
    description:
      "'Bit N Bytes 2.0' was an electrifying coding competition! A perfect platform to challenge skills, compete, and grow in the world of competitive programming!",
    title: "Bit N Bytes",
    registration: false,
  },
  {
    id: "9",
    img: "https://res.cloudinary.com/dds4wowea/image/upload/v1735392094/IMG_3504_q3xnlq.jpg",
    location: "CS Department",
    description:
      "'The Last Algorithm' was a heartfelt tribute to our departing seniors—a celebration of their legacy, wisdom, and the unforgettable impact they've left on Team ISTE. Wishing them all success in their new journey!",
    title: "The Last Algorithm",
    registration: false,
  },
  {
    id: "10",
    img: "https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "SN Bose Auditorium",
    description:
      "The wait is finally over, and Team ISTE will ensure that it is worthwhile. Get ready for an amazing experience as the Indian Society for Technical Education - HIT Student Chapter is thrilled to extend an invitation to you for our First Annual Student Convention.",
    title: "Annual Convention",
    registration: false,
  },
  {
    id: "11",
    img: "https://res.cloudinary.com/dqs4ncrqj/image/upload/v1716350127/p8y6nom6ez2zlfmdtlnh.jpg",
    location: "CS Department",
    description:
      'The "Communicraft" workshop was meticulously crafted to elevate participants’ communication skills through a multifaceted approach under the guidance of an experienced HR from the DataSpace Academy.',
    title: "Communicraft",
    registration: false,
  },
  {
    id: "12",
    img: "https://res.cloudinary.com/ds4lbluhe/image/upload/v1708694408/WhatsApp_Image_2024-02-23_at_18.47.38_034a1c5d_l5rf8s.jpg",
    location: "CS Department",
    description:
      'The cost-free "CodeVault" event, hosted by the ISTE HIT Student Chapter, acted as an expansion of the "Access Denied" Ethical Hacking workshop, ranking the top 75 contenders out of 260 participants.',
    title: "CodeVault",
    registration: false,
  },
  {
    id: "13",
    img: "https://res.cloudinary.com/ds4lbluhe/image/upload/v1708693635/IMG_20231101_185655_pwdjnf.jpg",
    location: "CS Lab 2nd Floor",
    description:
      'The "Access Denied" Ethical Hacking workshop aimed to empower participants with skills in uncovering vulnerabilities, mastering penetration testing techniques, and understanding the ethical dimensions of hacking. Led by instructors from DataSpace Academy, this workshop provided expert guidance in cybersecurity practices.',
    title: "Access Denied",
    registration: false,
  },
  {
    id: "14",
    img: "https://res.cloudinary.com/dqs4ncrqj/image/upload/v1716352303/sl6feobfbckblfymk3o2.jpg",
    location: "Cryptography Lab",
    description:
      '"Quest for Enigma" was an engaging technical quiz event evaluating participants’ proficiency across a wide range of technical and aptitude areas, fostering networking, recognition, and career enhancement.',
    title: "Quest for Enigma",
    registration: false,
  },
  {
    id: "15",
    img: "https://res.cloudinary.com/ds4lbluhe/image/upload/v1708695128/Screenshot_2024-02-23_190129_noofbb.png",
    location: "Cryptography Lab",
    description:
      '"BIT N BYTES" was the first event conducted by ISTE, designed for coding enthusiasts, consisting of two rounds: an initial online round on HackerRank, followed by an on-site competition.',
    title: "Bit N Bytes",
    registration: false,
  },
];

const initData = sliderData[0];
