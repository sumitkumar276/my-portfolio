"use client";

import { ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

interface GlassmorphicCardProps extends MotionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "hover" | "interactive";
  disableHover?: boolean;
}

export const GlassmorphicCard = ({
  children,
  className = "",
  variant = "default",
  disableHover = false,
  ...motionProps
}: GlassmorphicCardProps) => {
  const baseClass =
    "glassmorphism rounded-2xl p-6 md:p-8 transition-all duration-300";

  const variantClass = {
    default: "backdrop-blur-xl bg-white/5 border border-white/10",
    hover:
      "backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20",
    interactive:
      "backdrop-blur-xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 hover:border-white/20 active:bg-white/15",
  };

  return (
    <motion.div
      className={`${baseClass} ${variantClass[variant]} ${className}`}
      whileHover={!disableHover ? { y: -2 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};
