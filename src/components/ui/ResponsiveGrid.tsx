"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ResponsiveGridProps {
  children: ReactNode;
  desktopCols?: number;
  tabletCols?: number;
  className?: string;
  staggerDelay?: number;
}

export const ResponsiveGrid = ({
  children,
  desktopCols = 3,
  tabletCols = 2,
  className = "",
  staggerDelay = 0.1,
}: ResponsiveGridProps) => {
  const gridClass = `grid grid-cols-1 md:grid-cols-${tabletCols} lg:grid-cols-${desktopCols} gap-6 md:gap-8 w-full`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  } as const;

  return (
    <motion.div
      className={`${gridClass} ${className}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
};
