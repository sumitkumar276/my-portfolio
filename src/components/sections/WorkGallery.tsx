"use client";

import { motion } from "framer-motion";
import { GlassmorphicCard } from "@/components/ui/GlassmorphicCard";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";
import Image from "next/image";

interface WorkItem {
  id: string;
  title: string;
  description: string;
  imageGradient: string;
  category: string;
  link: string;
  span?: "small" | "medium" | "large";
  imageUrl: string;
}

const workItems: WorkItem[] = [
  {
    id: "1",
    title: "TimeFlow - Project Management Suite",
    description:
      "Enterprise project management platform with real-time collaboration, timeline tracking, and team productivity analytics. Built with Next.js 14, PostgreSQL, and WebSocket integration for live updates across teams.",
    imageGradient: "from-blue-500 to-purple-600",
    category: "Full-Stack",
    link: "#",
    span: "large",
    imageUrl: "/images/project1.png",
  },
  {
    id: "2",
    title: "Performance Analytics Dashboard",
    description:
      "Real-time business intelligence dashboard with 50+ interactive visualizations, custom filters, and predictive analytics for time-based metrics",
    imageGradient: "from-purple-500 to-pink-500",
    category: "Frontend",
    link: "#",
    span: "medium",
    imageUrl: "/images/project2.png",
  },
  {
    id: "3",
    title: "TimeSync Mobile App",
    description:
      "Cross-platform React Native app for schedule synchronization and time tracking across teams globally",
    imageGradient: "from-pink-500 to-orange-400",
    category: "Mobile",
    link: "#",
    span: "small",
    imageUrl: "/images/project3.png",
  },
  {
    id: "4",
    title: "Design System & UI Kit",
    description:
      "Comprehensive design system with 200+ reusable components, theming system, and accessibility standards documentation",
    imageGradient: "from-orange-400 to-red-500",
    category: "Design",
    link: "#",
    span: "small",
    imageUrl: "/images/project4.png",
  },
  {
    id: "5",
    title: "Time-Series Database Infrastructure",
    description:
      "Scalable serverless infrastructure handling 10M+ time-based events daily using AWS Lambda, DynamoDB, and CloudFront CDN",
    imageGradient: "from-green-500 to-blue-500",
    category: "Backend",
    link: "#",
    span: "medium",
    imageUrl: "/images/project5.png",
  },
];

const spanClassMap = {
  small: "md:col-span-1 md:row-span-1",
  medium: "md:col-span-2 md:row-span-2",
  large: "md:col-span-3 md:row-span-2",
};

export const WorkGallery = () => {
  const { device, isTouchDevice } = useDeviceDetect();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="work" className="relative py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl">
            A selection of projects showcasing my expertise in building
            scalable, performant web applications.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {workItems.map((item) => (
            <motion.div
              key={item.id}
              className={`md:col-span-1 md:row-span-1 ${device !== "mobile" && spanClassMap[item.span || "small"]
                }`}
              variants={itemVariants}
            >
              <GlassmorphicCard
                className="h-full flex flex-col overflow-hidden group"
                disableHover={isTouchDevice}
                whileHover={!isTouchDevice ? { y: -4 } : {}}
              >
                {/* Image Container */}
                <div className="relative w-full h-48 md:h-56 lg:h-72 -m-6 md:-m-8 mb-4 md:mb-6 overflow-hidden">
                  <motion.div
                    className={`relative w-full h-full bg-gradient-to-br ${item.imageGradient}`}
                    initial={{ scale: 1 }}
                    whileHover={!isTouchDevice ? { scale: 1.05 } : { scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <span className="text-xs md:text-sm text-blue-400 font-semibold mb-2 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 line-clamp-2 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/60 mb-4 line-clamp-2 md:line-clamp-3">
                    {item.description}
                  </p>

                  {/* CTA Link */}
                  <motion.a
                    href={item.link}
                    className="mt-auto inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16l-4-4m0 0l4-4m-4 4h18"
                      />
                    </svg>
                  </motion.a>
                </div>
              </GlassmorphicCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
