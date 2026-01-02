"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { device, isTouchDevice } = useDeviceDetect();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div
        className="pointer-events-auto backdrop-blur-xl bg-black/50 border border-white/10 rounded-2xl m-4 md:m-6 p-4 md:p-6"
        animate={{ y: isVisible ? 0 : -200 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="flex justify-between items-center">
          <motion.a
            href="#home"
            className="flex items-center gap-3"
            whileHover={{ scale: device === "mobile" ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/logo.svg" alt="SK Logo" className="h-10 w-10" />
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">SK</span>
          </motion.a>

          {/* Desktop Navigation */}
          {device !== "mobile" && !isTouchDevice && (
            <div className="hidden md:flex gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-white/70 hover:text-blue-400 transition-colors text-sm font-medium"
                  whileHover={{ color: "#60a5fa" }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          )}

          {/* Mobile Menu Button */}
          {(device === "mobile" || isTouchDevice) && (
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 -mr-2 text-white focus:outline-2 focus:outline-offset-2 focus:outline-blue-400 rounded-lg"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </motion.button>
          )}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (device === "mobile" || isTouchDevice) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="mt-6 pt-6 border-t border-white/10 overflow-hidden"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-white/70 hover:text-blue-400 transition-colors font-medium py-2"
                    onClick={handleNavClick}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
};
