"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Youtube,
  Facebook,
  Instagram,
  ExternalLink,
} from "lucide-react";
import { GlassmorphicCard } from "@/components/ui/GlassmorphicCard";

interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

const socialLinks: SocialLink[] = [
  {
    id: "youtube",
    label: "YouTube",
    url: "https://youtube.com/@sumitkumarprajapati",
    icon: (
      <Youtube
        size={32}
        className="fill-red-600 text-red-600"
        aria-hidden="true"
      />
    ),
    color: "text-red-600",
    bgColor: "hover:bg-red-600/10",
  },
  {
    id: "facebook",
    label: "Facebook",
    url: "https://facebook.com/sumitkumarprajapati",
    icon: (
      <Facebook
        size={32}
        className="fill-blue-600 text-blue-600"
        aria-hidden="true"
      />
    ),
    color: "text-blue-600",
    bgColor: "hover:bg-blue-600/10",
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://instagram.com/sumitkumarprajapati",
    icon: (
      <Instagram
        size={32}
        className="text-white"
        aria-hidden="true"
      />
    ),
    color: "text-gradient-to-r from-pink-500 via-purple-500 to-orange-400",
    bgColor: "hover:bg-pink-500/10",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/in/sumitkumarprajapati",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-blue-600"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
    color: "text-blue-600",
    bgColor: "hover:bg-blue-600/10",
  },
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/sumitkumarprajapati",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-white"
        aria-hidden="true"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: "text-white",
    bgColor: "hover:bg-white/10",
  },
  {
    id: "twitter",
    label: "X (Twitter)",
    url: "https://twitter.com/sumitkprajapati",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-white"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.165-6.756-5.908 6.756h-3.31l7.73-8.835L2.004 2.25h6.696l4.676 6.188 5.368-6.188zM17.55 19.5h1.83L6.281 3.92H4.38l13.17 15.58z" />
      </svg>
    ),
    color: "text-white",
    bgColor: "hover:bg-white/10",
  },
  {
    id: "email",
    label: "Email",
    url: "mailto:sumit@sumitkumarprajapati.com",
    icon: <Mail size={32} className="text-white" aria-hidden="true" />,
    color: "text-white",
    bgColor: "hover:bg-white/10",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };

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
    <section id="contact" className="relative py-16 md:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your
            ideas to life.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <GlassmorphicCard className="h-full">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Send Me a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-full mb-4">
                    <svg
                      className="w-8 h-8 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">
                    Message sent successfully!
                  </h4>
                  <p className="text-white/60">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-white/80"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:bg-white/10 focus:border-blue-400 focus:outline-none transition-all"
                      placeholder="Your name"
                      aria-label="Your name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-white/80"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:bg-white/10 focus:border-blue-400 focus:outline-none transition-all"
                      placeholder="your.email@example.com"
                      aria-label="Your email"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-white/80"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:bg-white/10 focus:border-blue-400 focus:outline-none transition-all resize-none"
                      placeholder="Tell me about your project..."
                      aria-label="Your message"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 px-6 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </motion.button>
                </form>
              )}
            </GlassmorphicCard>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <GlassmorphicCard className="h-full flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Connect with Me
              </h3>

              <p className="text-white/60 text-sm md:text-base mb-8">
                Find me on social media or connect via email. Let's chat about
                web development, design, and technology.
              </p>

              {/* Social Icons Grid */}
              <div className="grid grid-cols-5 gap-4 md:gap-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Connect on ${social.label}`}
                    className={`relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl border border-white/10 transition-all ${social.bgColor} group`}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                    {/* Tooltip */}
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {social.label}
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Email CTA */}
              <div className="mt-auto pt-8 border-t border-white/10">
                <p className="text-white/60 text-sm mb-4">Or email directly:</p>
                <motion.a
                  href="mailto:your.email@example.com"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm md:text-base"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  your.email@example.com
                  <ExternalLink size={16} aria-hidden="true" />
                </motion.a>
              </div>
            </GlassmorphicCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
