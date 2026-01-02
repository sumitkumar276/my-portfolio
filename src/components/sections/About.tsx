"use client";

import { motion } from "framer-motion";

export const About = () => {
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
    <section id="about" className="relative py-16 md:py-24 lg:py-32 bg-white/5">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <p className="text-white/60 text-lg">Full-Stack Developer & Time-Based Project Specialist</p>
          </motion.div>

          {/* Main About Text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-white/80 text-lg leading-relaxed">
              Hi, I'm <span className="font-semibold text-white">Sumit Kumar Prajapati</span>, a passionate full-stack developer with 6+ years of experience building scalable web applications and specialized systems for time-based project management. I transform complex business requirements into elegant, performant solutions using cutting-edge technologies.
            </p>
            
            <p className="text-white/80 text-lg leading-relaxed">
              My expertise spans across the entire development stack: from architecting cloud infrastructure on AWS to crafting intuitive user interfaces with React and Next.js. I specialize in building real-time collaboration features, time-tracking systems, and project management platforms that serve thousands of users daily.
            </p>

            <p className="text-white/80 text-lg leading-relaxed">
              Beyond coding, I'm deeply committed to mentoring junior developers, establishing best practices within teams, and sharing knowledge through technical content on YouTube and social media. I believe in writing clean, maintainable code and staying at the forefront of web technologies.
            </p>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10"
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                6+
              </h3>
              <p className="text-white/60">Years of Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                50+
              </h3>
              <p className="text-white/60">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
                100k+
              </h3>
              <p className="text-white/60">Users Impacted</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
