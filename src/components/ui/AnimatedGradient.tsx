"use client";

import { motion } from "framer-motion";

interface AnimatedGradientProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  glowIntensity?: "low" | "medium" | "high";
}

export const AnimatedGradient = ({
  text,
  className = "",
  as: Component = "h1",
  glowIntensity = "medium",
}: AnimatedGradientProps) => {
  const glowClass = {
    low: "shadow-lg shadow-blue-500/20",
    medium: "shadow-2xl shadow-purple-500/30",
    high: "shadow-2xl shadow-pink-500/40",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  } as const;

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  } as const;

  return (
    <motion.div
      className={`inline-block ${glowClass[glowIntensity]}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Component
        className={`gradient-text font-bold tracking-tight ${className}`}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            variants={letterVariants}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </Component>
    </motion.div>
  );
};
