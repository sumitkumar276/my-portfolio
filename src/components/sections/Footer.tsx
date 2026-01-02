"use client";

import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center md:text-left">
            <p className="text-white/60 text-sm md:text-base">
              © {currentYear} Sumit Kumar Prajapati. All rights reserved.
            </p>
          </div>

          <motion.a
            href="#home"
            className="text-white/60 hover:text-blue-400 transition-colors text-sm font-medium"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to top ↑
          </motion.a>

          <div className="text-center md:text-right">
            <p className="text-white/40 text-xs md:text-sm">
              Built with Next.js, Tailwind CSS & Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
