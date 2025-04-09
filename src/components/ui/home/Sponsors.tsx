import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X, ExternalLink } from "lucide-react";

interface Sponsor {
  name: string;
  category: "Gold" | "Silver" | "Others";
  description: string;
  logoUrl?: string;
  website?: string;
}

const sponsors: Sponsor[] = [
  {
    name: "Trishita Engineering",
    category: "Gold",
    description:
      "Trisita Engineering LLP, founded in 1992 in Kolkata, offers IT and engineering solutions with a focus on BIM, 3D modeling, and laser scanning. With a PAN India presence, it supports architecture and MEPFS coordination, aiming to lead in tech-driven innovation.",
    website: "https://trisita.co.in/",
    logoUrl:
      "https://res.cloudinary.com/db1sduyls/image/upload/v1743842313/Trishita_eng._h6ausk.jpg",
  },
  {
    name: "EEGRAB",
    category: "Silver",
    description:
      "EEGRAB is a leading provider of IoT and IIoT solutions, empowering industries to achieve digital transformation through innovative and scalable technologies.",
    website: "https://eegrab.com/",
    logoUrl:
      "https://res.cloudinary.com/db1sduyls/image/upload/v1743839108/EEGRAB_fzneo4.png",
  },
  {
    name: "DataSpace Academy",
    category: "Silver",
    description:
      "DataSpace Academy is a Kolkata-based ed-tech platform offering hands-on courses in cybersecurity, data science, and more. Founded in 2021, it focuses on practical, industry-ready training to bridge the education-industry gap.",
    website: "https://dataspaceacademy.com/",
    logoUrl:
      "https://res.cloudinary.com/db1sduyls/image/upload/v1743842178/dataspace_c5xv8t.jpg",
  },
  {
    name: "IEM Labs",
    category: "Silver",
    description:
      "IEMLabs, founded in 2016 in Kolkata, is a certified cybersecurity company offering VAPT, audits, and cloud consulting. They also provide training in cybersecurity, ethical hacking, data science, and programming.",
    website: "https://iemlabs.com/",
    logoUrl:
      "https://res.cloudinary.com/db1sduyls/image/upload/v1743836719/IEMLabs_yaaufb.png",
  },
  {
    name: "ARDENT Computech",
    category: "Others",
    description:
      "Ardent Computech, founded in 2002 in Kolkata, offers IT training, internships, and software development services. They specialize in areas like data science, cybersecurity, and RDBMS to bridge the academia-industry gap.",
    website: "https://www.ardentcollaborations.com/",
    logoUrl:
      "https://res.cloudinary.com/db1sduyls/image/upload/v1743839046/Ardent_vhxzob.jpg",
  },
  {
    name: "Turnpike Analyst",
    category: "Others",
    description:
      "TurnPikeAnalyst's JAMES WEBB SERVER enables secure, seamless ECM migrations, enhancing business processes and efficiency with innovative, industry-recognized AI solutions.",
    website: "https://www.turnpikeanalyst.com/",
    logoUrl:
      "https://res.cloudinary.com/db1sduyls/image/upload/v1743843506/TurnPikeAnalist_yhl0wp.png",
  },
  {
    name: "Unstop",
    category: "Others",
    description:
      "Explore opportunities from across the globe to grow, showcase skills, gain CV points & get hired by your dream company.",
    website: "https://unstop.com/",
    logoUrl:
      "https://res.cloudinary.com/db1sduyls/image/upload/v1744187941/Unstop_mzcyhe.jpg",
  },
  {
    name: "SecurIT360",
    category: "Others",
    description:
      "SecurIT360, founded in 2009, is a growing Cybersecurity and Compliance firm with offices in Birmingham and Kansas City, led by David Forrestall (CISSP, CISA).",
    website: "https://www.securit360.com/",
    logoUrl:
      "https://res.cloudinary.com/db1sduyls/image/upload/v1744188325/SecurIT360_uz8t9u.jpg",
  },
  {
    name: "Jobcarr",
    category: "Others",
    description:
      "We are your strategic partner in human capital. From talent acquisition to transformative training.",
    website: "https://jobcarr.com/",
    logoUrl:
      "https://res.cloudinary.com/db1sduyls/image/upload/v1744188708/jobcarr-logo_txmyaa.png",
  },
];

function App() {
  const [selectedSponsor, setSelectedSponsor] = useState<Sponsor | null>(null);

  const categoryStyles = {
    Gold: {
      border: "border-yellow-500/50",
      text: "text-yellow-500",
      shadow: "shadow-yellow-500/20",
      gradient: "from-yellow-500/10 to-transparent",
      bgHover: "hover:bg-yellow-500/5",
    },
    Silver: {
      border: "border-gray-400/50",
      text: "text-gray-300",
      shadow: "shadow-gray-400/20",
      gradient: "from-gray-400/10 to-transparent",
      bgHover: "hover:bg-gray-400/5",
    },
    Others: {
      border: "border-amber-700/50",
      text: "text-amber-700",
      shadow: "shadow-amber-700/20",
      gradient: "from-amber-700/10 to-transparent",
      bgHover: "hover:bg-amber-700/5",
    },
  };

  return (
    <div className="min-h-screen bg-black text-white py-8 px-4 mt-8 mb-16">
      <div className="max-w-4xl mx-auto w-[85%] md:w-[90%]">
        <motion.h1
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Industrial Partners
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {(["Gold", "Silver", "Others"] as const).map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col text-center my-2 md:my-0"
            >
              <div className="flex items-center gap-2 mb-3 text-center justify-center">
                <Award className={`w-5 h-5 ${categoryStyles[category].text}`} />
                <h2
                  className={`text-2xl font-semibold text-center ${categoryStyles[category].text}`}
                >
                  {category}
                </h2>
              </div>

              <div className="grid gap-3 md:gap-4">
                {sponsors
                  .filter((s) => s.category === category)
                  .map((sponsor) => (
                    <motion.div
                      key={sponsor.name}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className={`
                      p-2 rounded-lg cursor-pointer
                      bg-gradient-to-b ${categoryStyles[category].gradient}
                      border ${categoryStyles[category].border}
                      ${categoryStyles[category].bgHover}
                      transition-all duration-200
                    `}
                      onClick={() => setSelectedSponsor(sponsor)}
                    >
                      <div className="bg-black/30 rounded flex items-center justify-center mb-2">
                        {sponsor.logoUrl ? (
                          <img
                            src={sponsor.logoUrl}
                            alt={`${sponsor.name} logo`}
                            className="max-w-[70%] object-contain cursor-pointer py-1"
                          />
                        ) : (
                          <span className="text-gray-600 text-xs">Logo</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedSponsor && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedSponsor(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className={`
                  relative w-full max-w-md bg-black/95 rounded-lg p-4
                  border ${categoryStyles[selectedSponsor.category].border}
                  shadow-lg ${categoryStyles[selectedSponsor.category].shadow}
                `}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedSponsor(null)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-gray-800/50"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="h-24 bg-black/30 rounded mb-3 flex items-center justify-center">
                  {selectedSponsor.logoUrl ? (
                    <img
                      src={selectedSponsor.logoUrl}
                      alt={`${selectedSponsor.name} logo`}
                      className="max-w-[80%] max-h-[90%] object-contain"
                    />
                  ) : (
                    <span className="text-gray-600 text-lg">Logo</span>
                  )}
                </div>

                <h3
                  className={`text-xl font-bold mb-1 ${categoryStyles[selectedSponsor.category].text
                    }`}
                >
                  {selectedSponsor.name}
                </h3>

                <div className="flex items-center gap-1 mb-2">
                  <Award
                    className={`w-4 h-4 ${categoryStyles[selectedSponsor.category].text
                      }`}
                  />
                  <span className="text-md text-gray-300">
                    {selectedSponsor.category}
                  </span>
                </div>

                <p className="text-gray-300 text-sm mb-8 line-clamp-3">
                  {selectedSponsor.description}
                </p>

                {selectedSponsor.website && (
                  <a
                    href={selectedSponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      inline-flex items-center gap-1 px-3 py-2 border border-white rounded-xl
                      ${categoryStyles[selectedSponsor.category].text}
                      ${categoryStyles[selectedSponsor.category].bgHover}
                      hover:opacity-90 transition-all duration-200 text-base cursor-pointer
                    `}
                  >
                    Website <ExternalLink className="w-4 h-4 cursor-pointer" />
                  </a>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;