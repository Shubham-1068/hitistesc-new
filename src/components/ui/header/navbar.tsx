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
      initial="hidden"
      whileInView="show"
      className={`fixed top-0 left-0 w-full z-10 bg-black/50 backdrop-blur-lg transition-all duration-300 ${isNavOpen ? "rounded-b-lg" : "rounded-b-full"
        }`}
    >
      {/* 🔹 Marquee for Upcoming Events */}
      {pathname === "/" && (
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
      )}

      {/* 🔹 Main Navbar */}
      <div className="flex items-center justify-between px-6 md:px-12 py-3">
        {/* 🔹 Logo */}
        <div
          className="text-white text-2xl font-extrabold tracking-widest cursor-pointer hover:text-[#DCFFB7] transition"
          onClick={() => router.push("/")}
        >
          ISTE HIT
        </div>

        {/* 🔹 Mobile Menu Button */}
        <div className="md:hidden">
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
          className={`absolute md:static bg-black/80 md:bg-transparent top-16 left-0 w-full md:w-auto text-center md:flex items-center md:space-x-10 ${isNavOpen ? "block" : "hidden md:flex"
            }`}
          id="navbar-menu"
        >
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 text-white text-lg">
            {[
              { path: "/", label: "HOME" },
              { path: "/events", label: "EVENTS" },
              { path: "/social", label: "SOCIAL" },
            ].map((item, index) => (
              <li key={index}>
                <div
                  onClick={() => handleMenuClick(item.path)}
                  className={`cursor-pointer px-4 py-2 rounded-lg transition-all ${pathname === item.path
                      ? "bg-[#DCFFB7] text-black font-bold"
                      : "hover:text-[#DCFFB7]"
                    }`}
                >
                  {item.label}
                </div>
              </li>
            ))}
          </ul>

          {/* 🔹 Authentication Buttons */}
          <div className="mt-4 md:mt-0 md:ml-8">
            {isAuthenticated ? (
              <button
                onClick={signOut}
                className="text-rose-300 flex items-center gap-1 text-lg hover:text-red-500 transition"
              >
                <IoIosLogOut className="text-xl" /> Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="text-[#DCFFB7] flex items-center gap-1 text-lg hover:text-white transition"
              >
                <FaUserPlus className="text-xl" /> Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
