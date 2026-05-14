"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/hero/HeroSection";
import AboutMeSection from "../components/about/AboutMeSection";
import TechStackSection from "@/components/tech/TechStackSection";
import FeaturedProjects from "@/components/projects/FeatureProjects";
import ContuctMePage from "@/components/contuctMe/ContuctMe";
import HireMeSection from "@/components/hireMe/HireMeSection";
import AcademicExcellence from "@/components/consistency/AcademicExcellence";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="bg-grid-pattern min-h-screen text-white overflow-hidden">
      {isLoading && (
        <div className="fixed inset-0 z-10001 flex items-center justify-center bg-[#050505] text-center">
          <div className="space-y-6 px-6">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/5 text-4xl font-bold text-white shadow-lg shadow-white/5">
              R
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">Md. Romjan Ali</p>
              <p className="mt-2 text-sm uppercase tracking-[0.35em] text-gray-400">Loading portfolio...</p>
            </div>
          </div>
        </div>
      )}
      <Navbar />
      <HeroSection />
      <AboutMeSection />
    <TechStackSection />
    <FeaturedProjects />
    <AcademicExcellence/>
    <ContuctMePage/>
    <HireMeSection/>
    </div>
  );
}
