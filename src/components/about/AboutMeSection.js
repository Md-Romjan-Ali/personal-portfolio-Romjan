"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMouse } from "../../contexts/MouseContext";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

export default function AboutMeSection() {
  const { mouseX, mouseY } = useMouse();
  const buttonRef = useRef(null);

  const magnetX = useTransform(mouseX, (x) => {
    if (!buttonRef.current) return 0;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const dx = x - centerX;
    const distance = Math.abs(dx);
    if (distance < 100) return dx * 0.1;
    return 0;
  });

  const magnetY = useTransform(mouseY, (y) => {
    if (!buttonRef.current) return 0;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerY = rect.top + rect.height / 2;
    const dy = y - centerY;
    const distance = Math.abs(dy);
    if (distance < 100) return dy * 0.1;
    return 0;
  });
  return (
    <main id="about" className="bg-grid-pattern min-h-screen flex items-center justify-center p-6 md:p-12" data-purpose="section-container">
      <div className="max-w-6xl w-full">
        {/* Section Title */}
        <header className="mb-16 text-center" data-purpose="section-header">
          <motion.h1
            className="text-4xl md:text-5xl font-bold inline-block relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            About Me
            <span className="block h-1 w-1/2 bg-[#00f2a6] mx-auto mt-2 rounded-full opacity-50"></span>
          </motion.h1>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" data-purpose="main-layout-grid">
          {/* BEGIN: BioAndStack */}
          <motion.section
            data-purpose="bio-and-stack"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >
            {/* Bio Text */}
            <motion.div className="mb-8" data-purpose="bio-content" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
              <p className="text-lg leading-relaxed mb-4">
                Hi, I&apos;m <span className="bg-zinc-800 px-2 py-0.5 rounded text-white font-medium">Romjan Islam</span>, a <span className="text-[#00f2a6] font-semibold">Full-Stack Web Developer.</span>
              </p>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                I enjoy building modern and responsive web applications using React, Next.js, Node.js, and MongoDB. I focus on writing clean code, building REST APIs, and creating practical real-world projects while continuously improving my backend and system design skills.
              </p>
            </motion.div>
            {/* Core Stack Tags */}
            <motion.div className="mb-10" data-purpose="core-stack" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
              <div className="flex items-center gap-2 mb-4 text-[#00f2a6]">
                <span className="text-xl font-bold">&lt;&gt;</span>
                <h3 className="text-lg font-bold text-white">Curiosity</h3>
              </div>
            <p>I’m not just focused on building web applications — I’m more curious about why things work the way they do under the hood.</p>
            </motion.div>
            {/* Advanced Technologies List */}
            <motion.div className="mb-10" data-purpose="advanced-tech" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
              <div className="flex items-center gap-2 mb-4 text-[#00f2a6]">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
                <h3 className="text-lg font-bold text-white">Advanced Technologies</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-zinc-400">
                {[
                  "REST API Development & Integration",
                  "Authentication & Authorization",
                  "Database Design & CRUD Operations",
                  "Component-based UI Architecture",
                  "Responsive Web Application Development",
                  "Project Deployment (Vercel)",
                  "AI Tools Integration",
                  "Multi-role based architecture",
                ].map((item) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-2"
                    whileHover={{ x: 4, color: "#d1fae5" }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="w-1.5 h-1.5 bg-[#00f2a6] rounded-full" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.section>
          {/* END: BioAndStack */}
          {/* BEGIN: ExperienceCard */}
          <motion.section
            className="lg:pl-8"
            data-purpose="experience-card-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <motion.div
              className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 md:p-8 flex flex-col h-full"
              data-purpose="experience-card"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 130, damping: 18 }}
            >
              <header className="flex items-center gap-3 mb-6 border-b border-zinc-800 pb-4">
                <div className="text-[#00f2a6]">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <h2 className="text-xl font-bold">Development Experience</h2>
              </header>
              <motion.ul
                className="space-y-5 grow text-sm text-zinc-300 mb-8"
                data-purpose="experience-list"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {[
                  "Built multiple responsive web applications",
                  "Developed full-stack projects using React, Next.js & Node.js",
                  "Integrated APIs to create dynamic applications",
                  "Designed and managed database structures",
                  "Implemented authentication systems",
                  "CI/CD pipeline understanding",
                  "Worked on real-world project-based learning",
                  "Improving system design and backend understanding",
                ].map((item) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3"
                    variants={fadeUp}
                    whileHover={{ x: 4, color: "#d1fae5" }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="w-1.5 h-1.5 bg-[#00f2a6] rounded-full mt-1.5 shrink-0" />
                    <p>{item}</p>
                  </motion.li>
                ))}
              </motion.ul>
              {/* CTA Button */}
              <motion.button
                ref={buttonRef}
                x={magnetX}
                y={magnetY}
                className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-[#00f2a6] hover:text-black transition-colors duration-300"
                data-purpose="cta-button"
              >
                Let&apos;s Work Together
              </motion.button>
            </motion.div>
          </motion.section>
          {/* END: ExperienceCard */}
        </div>
      </div>
    </main>
  );
}