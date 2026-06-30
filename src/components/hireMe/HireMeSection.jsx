"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const HireMeSection = () => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // 3D Mouse Move Effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateYValue = (mouseX / rect.width) * 15;   // Max 15 degrees
    const rotateXValue = -(mouseY / rect.height) * 15; // Max 15 degrees

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <section className="bg-grid-pattern py-24 px-6 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-6xl">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative overflow-hidden rounded-[3rem] bg-[#0a0a0c] border border-neutral-800 shadow-2xl h-full"
        >
          {/* Background Glows */}
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#b4c6ff]/10 blur-[120px] rounded-full"></div>
          <div className="absolute -top-32 right-10 w-80 h-80 bg-purple-500/10 blur-[100px] rounded-full"></div>

          <div className="relative z-10 px-8 py-20 md:px-16 md:py-28 text-center flex flex-col items-center">

            {/* Decorative Element */}
            <motion.div
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="mb-6"
            >
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
                <div className="w-3 h-3 bg-[#b4c6ff] rounded-full animate-ping"></div>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6"
            >
              Your vision,<br />
              <span className="text-[#b4c6ff]">my expertise</span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-neutral-400 text-xl md:text-2xl max-w-xl leading-relaxed mb-12"
            >
              Let us collaborate to build something that pushes the boundaries of what is possible on the web.
            </motion.p>

            {/* 3D Animated Hire Me Button */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center gap-3 font-bold text-xl px-14 py-7 rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Infinite Rainbow Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#b4c6ff] via-purple-400 via-pink-400 via-cyan-400 to-[#b4c6ff] bg-[length:400%_400%] animate-[gradient_3s_linear_infinite]"></div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000"></div>

              <span className="relative z-10 flex items-center gap-4 text-black">
                Hire Me Now
                <motion.span
                  animate={{ rotate: isHovered ? -20 : 0 }}
                  className="text-2xl inline-block"
                >
                  🚀
                </motion.span>
              </span>
            </motion.a>
          </div>

          {/* Subtle Border Glow */}
          <div className="absolute inset-0 rounded-[3rem] border border-white/10 pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HireMeSection;