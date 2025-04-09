"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { FaUserPlus } from "react-icons/fa6";
import { RiMenu4Line } from "react-icons/ri";
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
  const [scrolled, setScrolled] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile navigation menu
  const toggleNav = (): void => {
    setIsNavOpen(!isNavOpen);
  };

  // Handle navigation click
  const handleMenuClick = (path: string): void => {
    router.push(path);
    setIsNavOpen(false); // Close mobile menu after selection
  };

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/events", label: "EVENTS" },
    { path: "/gallery", label: "MEMORIES" },
    { path: "/blogs", label: "BLOGS" },
    { path: "/about", label: "ABOUT" },
  ];

  return (
    <>
      {/* Floating Navbar */}
      <motion.nav
        variants={navVariants}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 mx-auto lg:mt-4 mt-2 max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%] transition-all duration-500 ${
          scrolled 
        ? "bg-black/40 backdrop-blur-xl shadow-[0_4px_16px_0_rgba(220,255,183,0.1)]" 
        : "bg-black/20 backdrop-blur-xl"
        } rounded-2xl overflow-hidden`}
      >
        <div className="w-full mx-auto">
          {/* Main Navbar Container */}
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-20"
        >
          <div
            onClick={() => router.push("/")}
            className="flex items-center cursor-pointer group"
          >
            <motion.span 
          className="text-white text-2xl font-extrabold tracking-wider group-hover:text-[#DCFFB7] transition-colors duration-300 cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
            >
          ISTE
            </motion.span>
            <motion.span 
          className="text-[#DCFFB7] text-2xl font-extrabold tracking-wider ml-2 group-hover:text-white transition-colors duration-300 cursor-pointer"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
            >
          HIT
            </motion.span>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <motion.div
          key={index}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * index }}
          whileHover={{ y: -3 }}
          whileTap={{ y: 0 }}
          className="relative"
            >
          <div
            onClick={() => handleMenuClick(item.path)}
            className={`cursor-pointer px-4 py-2 text-sm font-medium transition-all duration-300 ${
              pathname === item.path
            ? "text-[#DCFFB7]"
            : "text-white hover:text-[#DCFFB7]"
            }`}
          >
            {item.label}
          </div>
          {pathname === item.path && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#DCFFB7] mx-4"
              initial={{ opacity: 0, width: "0%" }}
              animate={{ opacity: 1, width: "calc(100% - 2rem)" }}
              transition={{ duration: 0.3 }}
            />
          )}
            </motion.div>
          ))}

          {/* Authentication Button - Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="ml-6"
          >
            {isAuthenticated ? (
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(255, 99, 132, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => signOut()}
            className="flex items-center justify-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-rose-400 to-rose-500 text-white font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/10 border border-transparent hover:border-rose-300"
          >
            <IoIosLogOut className="text-lg" />
            <span>Logout</span>
          </motion.button>
            ) : (
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(220, 255, 183, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/login"
              className="flex items-center justify-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-[#DCFFB7] to-[#9be662] text-gray-900 font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#DCFFB7]/10 border border-transparent hover:border-[#DCFFB7]/50"
            >
              <FaUserPlus className="text-sm" />
              <span>Login</span>
            </Link>
          </motion.div>
            )}
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden relative z-20">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleNav}
            className="text-white p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
            aria-controls="navbar-menu"
            aria-expanded={isNavOpen}
          >
            {isNavOpen ? (
          <IoCloseOutline className="text-2xl" />
            ) : (
          <RiMenu4Line className="text-2xl" />
            )}
          </motion.button>
        </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="absolute top-0 left-0 right-0 p-4 hidden md:flex justify-between items-center"
            >
              <div className="flex items-center">
                <span className="text-white text-2xl font-extrabold tracking-wider">ISTE</span>
                <span className="text-[#DCFFB7] text-2xl font-extrabold tracking-wider ml-2">HIT</span>
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleNav}
                className="text-white p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
              >
                <IoCloseOutline className="text-2xl" />
              </motion.button>
            </motion.div>
            
            <div className="flex flex-col h-full justify-center items-center px-6 pt-16">
              <div className="w-full max-w-md">
                {navItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className="mb-6"
                  >
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleMenuClick(item.path)}
                      className={`flex items-center justify-between cursor-pointer py-3 px-4 rounded-xl transition-all duration-300 ${
                        pathname === item.path
                          ? "bg-[#DCFFB7]/10 text-[#DCFFB7] font-bold"
                          : "text-white hover:bg-white/5"
                      }`}
                    >
                      <span className="text-xl">{item.label}</span>
                      {pathname === item.path && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 rounded-full bg-[#DCFFB7]"
                        />
                      )}
                    </motion.div>
                  </motion.div>
                ))}

                {/* Authentication Button - Mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-10"
                >
                  {isAuthenticated ? (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        signOut();
                        setIsNavOpen(false);
                      }}
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-rose-400 to-rose-500 text-white flex items-center justify-center gap-2 text-lg font-medium shadow-lg"
                    >
                      <IoIosLogOut className="text-xl" />
                      <span>Logout</span>
                    </motion.button>
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href="/login"
                        onClick={() => setIsNavOpen(false)}
                        className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#DCFFB7] to-[#9be662] text-gray-900 flex items-center justify-center gap-2 text-lg font-medium shadow-lg"
                      >
                        <FaUserPlus className="text-xl" />
                        <span>Login</span>
                      </Link>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;