"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GlassmorphicCard } from "@/components/ui/GlassmorphicCard";
import { useDeviceDetect } from "@/hooks/useDeviceDetect";

interface WorkItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
  span?: "small" | "medium" | "large";
}

const workItems: WorkItem[] = [
  {
    id: "1",
    title: "TimeFlow - Project Management Suite",
    description:
      "Enterprise project management platform with real-time collaboration and analytics.",
    image: "/images/project1.png",
    category: "Full-Stack",
    link: "#",
    span: "large",
  },
  {
    id: "2",
    title: "Performance Analytics Dashboard",
    description:
      "Real-time business intelligence dashboard with interactive charts.",
    image: "/images/project2.png",
    category: "Frontend",
    link: "#",
    span: "medium",
  },
  {
    id: "3",
    title: "TimeSync Mobile App",
    description:
      "Cross-platform mobile app for schedule sync and tracking.",
    image: "/images/project3.png",
    category: "Mobile",
    link: "#",
    span: "small",
  },
  {
    id: "4",
    title: "Design System & UI Kit",
    description:
      "Reusable design system with accessibility standards.",
    image: "/images/project4.webp",
    category: "Design",
    link: "#",
    span: "small",
  },
  {
    id: "5",
    title: "Time-Series Database Infrastructure",
    description:
      "Scalable backend handling millions of events daily.",
    image: "/images/project5.jpeg",
    category: "Backend",
    link: "#",
    span: "medium",
  },
];

const spanClassMap = {
  small: "md:col-span-1 md:row-span-1",
  medium: "md:col-span-2 md:row-span-2",
  large: "md:col-span-3 md:row-span-2",
};

export const WorkGallery = () => {
  const { device, isTouchDevice } = useDeviceDetect();

  return (
    <section id="work" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold mb-12">
          Featured <span className="gradient-text">Work</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workItems.map((item) => (
            <motion.div
              key={item.id}
              className={spanClassMap[item.span || "small"]}
              whileHover={!isTouchDevice ? { y: -6 } : {}}
            >
              <GlassmorphicCard className="h-full overflow-hidden">
                {/* IMAGE */}
                <div className="relative w-full h-56 md:h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={item.id === "1"}
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <span className="text-sm text-blue-400 font-semibold">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm mt-2">
                    {item.description}
                  </p>
                </div>
              </GlassmorphicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
