"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import HeroSection from "../components/hero/HeroSection";
import AboutMeSection from "../components/about/AboutMeSection";
import TechStackSection from "@/components/tech/TechStackSection";
import FeaturedProjects from "@/components/projects/FeatureProjects";
import ContuctMePage from "@/components/contuctMe/ContuctMe";
import HireMeSection from "@/components/hireMe/HireMeSection";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);

          setTimeout(() => {
            setIsLoading(false);
          }, 200);

          return 100;
        }

        return prev + 1;
      });
    }, 30);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div className="bg-grid-pattern min-h-screen text-white overflow-hidden">
      {/* Loader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[10001] flex items-center justify-center bg-[#050505] overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

            <div className="relative z-10 flex flex-col items-center text-center px-6">
              {/* Animated Logo */}
              <motion.div
                animate={{ scale: 1 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="relative mb-10"
              >
                <div className="w-32 h-32 rounded-full border border-cyan-500/20 bg-white/5 backdrop-blur-xl flex items-center justify-center shadow-[0_0_60px_rgba(34,211,238,0.15)]">
                  <motion.span
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="text-5xl md:text-6xl font-black text-white"
                  >
                    R
                  </motion.span>
                </div>

                {/* Rotating Ring */}
                <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-cyan-400 border-l-transparent border-b-transparent animate-spin" />
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-extrabold tracking-tight"
              >
                Md. <span className="text-cyan-400">Romjan Ali</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 text-sm uppercase tracking-[0.35em] text-zinc-500"
              >
                Loading Portfolio Experience
              </motion.p>

              {/* Progress Bar */}
              <div className="w-[320px] h-[10px] bg-zinc-800 rounded-full overflow-hidden mt-10 border border-zinc-700">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-cyan-200 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.7)]"
                />
              </div>

              {/* Percentage */}
              <motion.p
                key={progress}
                initial={{ opacity: 0.5, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 text-cyan-400 text-lg font-semibold"
              >
                {progress}%
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!isLoading && (
        <>
          <Navbar />
          <HeroSection />
          <AboutMeSection />
          <TechStackSection />
          <FeaturedProjects />

          <ContuctMePage />
          <HireMeSection />
          <Footer />
        </>
      )}
    </div>
  );
}