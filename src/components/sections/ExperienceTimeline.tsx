"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GlassmorphicCard } from "@/components/ui/GlassmorphicCard";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "1",
    role: "Senior Full-Stack Developer",
    company: "TechCore Solutions",
    period: "2023 - Present",
    description:
      "Leading development of time-management suite for enterprise clients. Architected microservices handling 10M+ daily transactions. Managed cross-functional team of 6 engineers, implemented CI/CD pipelines, and achieved 99.9% uptime SLA. Mentored junior developers and established coding standards across the organization.",
    skills: ["Next.js 14", "Node.js", "PostgreSQL", "AWS", "TypeScript", "Docker", "Kubernetes"],
  },
  {
    id: "2",
    role: "Full-Stack Developer",
    company: "InnovateLabs Inc.",
    period: "2021 - 2023",
    description:
      "Developed scalable web applications for SaaS platforms. Built real-time collaboration features using WebSockets and Redis. Optimized database queries reducing load time by 60%. Mentored 3 junior developers and established testing protocols achieving 90% code coverage.",
    skills: ["React", "Python", "MongoDB", "Docker", "GraphQL", "Redis", "Jest"],
  },
  {
    id: "3",
    role: "Frontend Developer",
    company: "DesignFirst Agency",
    period: "2019 - 2021",
    description:
      "Developed responsive web applications for 20+ clients across various industries. Implemented pixel-perfect designs and ensured 98% Lighthouse score. Created reusable component libraries and maintained design system. Optimized bundle size by 45% through code splitting and lazy loading.",
    skills: ["React", "Vue.js", "TypeScript", "SASS", "Figma", "Webpack", "Testing Library"],
  },
  {
    id: "4",
    role: "Junior Web Developer",
    company: "StartupHub Studios",
    period: "2018 - 2019",
    description:
      "Started professional development journey building full-stack applications. Learned modern web technologies and best practices. Contributed to 8+ production projects. Participated in agile development with 2-week sprints and code review processes.",
    skills: ["HTML5", "CSS3", "JavaScript", "React Basics", "Git", "npm", "REST APIs"],
  },
];

export const ExperienceTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  } as const;

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative py-16 md:py-24 lg:py-32"
    >
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl">
            Over 7+ years of experience building innovative solutions with
            cutting-edge technologies.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative space-y-8 md:space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent transform -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative"
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-0 md:left-1/2 top-8 w-8 h-8 bg-blue-500 rounded-full border-4 border-black transform -translate-x-1/2 -translate-y-4 md:-translate-x-1/2"
                style={{
                  scale: scrollYProgress,
                  opacity: opacity,
                }}
              />

              {/* Content card */}
              <div
                className={`md:w-1/2 ${index % 2 === 0 ? "md:ml-0" : "md:ml-1/2 md:pl-8"}`}
              >
                <GlassmorphicCard className="ml-12 md:ml-0">
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-2xl font-bold mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-blue-400 font-semibold text-sm md:text-base">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs md:text-sm text-white/50 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-white/70 mb-4 text-sm md:text-base leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs md:text-sm text-white/70 hover:bg-white/10 hover:border-white/20 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </GlassmorphicCard>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
