"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { FaUserPlus } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { navVariants } from "@/utils/motion";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import { useUserContext } from "@/context/useUserContext";
import Link from "next/link";

const Navbar: React.FC = () => {
  const { mutate: signOut } = useSignOutAccount();
  const { isAuthenticated } = useUserContext();
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  // Toggle mobile navigation menu
  const toggleNav = (): void => {
    setIsNavOpen(!isNavOpen);
  };

  // Handle navigation click
  const handleMenuClick = (path: string): void => {
    router.push(path);
    setIsNavOpen(false); // Close mobile menu after selection
  };

  return (
    <motion.nav
      variants={navVariants}
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-10 bg-black/50 backdrop-blur-lg transition-all duration-300 border-b-2 border-gray-700 md:rounded-b-3xl ${isNavOpen ? "h-screen md:h-auto" : "rounded-b-3xl"
        }`}
    >
      {/* 🔹 Marquee for Upcoming Events */}
      {/* {pathname === "/" && (
        <div className="bg-[#DCFFB7] text-gray-900 py-2 overflow-hidden whitespace-nowrap">
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex space-x-10 items-center"
              animate={{ x: "-100%" }}
              initial={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
              <Link href="#recent-events" className="font-bold text-lg cursor-pointer hover:underline">
                🚀 Upcoming Event: NATIONAL LEVEL IDEATHON
              </Link>
              <Link href="#recent-events" className="font-bold cursor-pointer text-lg hover:underline">
                🎯 Upcoming Event: ANNUAL CONVENTION
              </Link>
              <Link href="#recent-events" className="font-bold text-lg cursor-pointer hover:underline">
                🚀 Upcoming Event: NATIONAL LEVEL IDEATHON
              </Link>
              <Link href="#recent-events" className="font-bold cursor-pointer text-lg hover:underline">
                🎯 Upcoming Event: ANNUAL CONVENTION
              </Link>
            </motion.div>
          </div>
        </div>
      )} */}

      {/* 🔹 Main Navbar */}
      <div className="flex items-center justify-between px-6 md:px-12 md:py-3 py-2">
        {/* 🔹 Logo */}
        <div
          className="text-white text-2xl font-extrabold tracking-widest cursor-pointer hover:text-[#DCFFB7] transition"
          onClick={() => router.push("/")}
        >
          ISTE HIT
        </div>

        {/* 🔹 Mobile Menu Button */}
        <div className="md:hidden relative z-10 mt-2">
          <button
            onClick={toggleNav}
            className="text-white hover:text-[#DCFFB7] transition"
            aria-controls="navbar-menu"
            aria-expanded={isNavOpen}
          >
            {isNavOpen ? (
              <IoCloseOutline className="text-3xl" />
            ) : (
              <GiHamburgerMenu className="text-3xl" />
            )}
          </button>
        </div>

        {/* 🔹 Navigation Links */}
        <div
          className={`absolute md:static md:bg-transparent top-0 left-0 h-screen md:h-auto w-full md:w-auto text-center md:flex items-center md:space-x-10 ${isNavOpen ? "block" : "hidden md:flex"
            }`}
          id="navbar-menu"
        >
          {/* 🔹 Navigation Links for mobile devices */}
          {isNavOpen && <ul className="md:hidden h-full w-full relative top-0 -mt-10 md:mt-0 flex flex-col justify-center items-end gap-10 md:flex-row md:items-center md:space-x-6 text-white text-lg">
            {[
              { path: "/", label: "HOME" },
              { path: "/events", label: "EVENTS" },
              { path: "/gallery", label: "MEMORIES" },
              { path: "/social", label: "SOCIAL" },
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 110 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.2 }}
                className="hover:text-[#DCFFB7] transition mr-3"
              >
                <div
                  onClick={() => handleMenuClick(item.path)}
                  className={`cursor-pointer px-4 py-1 rounded-lg transition-all text-2xl ${pathname === item.path
                    ? "border-r-4 border-[#DCFFB7] mx-3 rounded-none font-extrabold text-3xl"
                    : "hover:text-[#DCFFB7]"
                    }`}
                >
                  {item.label}
                </div>
              </motion.li>
            ))}

            {/* 🔹 Authentication Buttons */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }} className="absolute bottom-16 w-full flex flex-col items-center justify-center">
              <div className="w-full flex items-center justify-center"><div className="h-[1px] w-[85%] bg-slate-400"></div></div>
              <div className="w-[65%] h-10 mt-10 border-2 rounded-xl border-[#DCFFB7] flex items-center justify-center overflow-hidden" onClick={() => { setIsNavOpen(false) }}>
                {isAuthenticated ? (
                  <button
                    onClick={() => signOut()}
                    className="w-full h-full bg-rose-300 text-gray-900 flex items-center justify-center gap-2 text-lg transition"
                  >
                    <IoIosLogOut className="text-xl" /> <p>Logout</p>
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="w-full h-full bg-[#DCFFB7] text-gray-900 flex items-center justify-center gap-2 text-lg transition"
                  >
                    <FaUserPlus className="text-xl" /> <p>Login</p>
                  </Link>
                )}
              </div>
            </motion.div>

          </ul>}

        </div>

        {/* 🔹 Navigation Links for big screen devices */}
        {<ul className="hidden md:flex items-center text-white text-md">
          {[
            { path: "/", label: "HOME" },
            { path: "/events", label: "EVENTS" },
            { path: "/gallery", label: "MEMORIES" },
            { path: "/social", label: "SOCIAL" },
          ].map((item, index) => (
            <li
              className="hover:text-[#DCFFB7] transition"
            >
              <div
                onClick={() => handleMenuClick(item.path)}
                className={`cursor-pointer mx-4 px-1 rounded-lg transition-all text-md ${pathname === item.path
                  ? "border-b-2 border-[#DCFFB7] rounded-none font-bold"
                  : "hover:text-[#DCFFB7]"
                  }`}
              >
                {item.label}
              </div>
            </li>
          ))}

          {/* 🔹 Authentication Buttons */}
          <div className="w-[65%] flex items-center justify-center text-md ml-3 cursor-pointer" onClick={() => { setIsNavOpen(false) }}>
            {isAuthenticated ? (
              <button
                onClick={() => signOut()}
                className="w-full h-full bg-rose-300 text-gray-900 flex items-center justify-center gap-1 transition px-2 rounded-xl cursor-pointer hover:bg-transparent hover:text-rose-300 border-2 border-rose-300"
              >
                <IoIosLogOut className="text-xl" /> Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="w-full h-full bg-[#DCFFB7] text-gray-900 flex items-center justify-center gap-1 transition px-2 rounded-xl cursor-pointer hover:bg-transparent hover:text-[#DCFFB7] border-2 border-[#DCFFB7]"
              >
                <FaUserPlus className="text-lg" /> Login
              </Link>
            )}
          </div>
        </ul>}

      </div>
    </motion.nav>
  );
};

export default Navbar;
