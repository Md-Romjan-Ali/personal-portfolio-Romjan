"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useMouse } from "../../contexts/MouseContext";
const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { mouseX, mouseY } = useMouse();
  const resumeRef = useRef(null);

  const magnetX = useTransform(mouseX, (x) => {
    if (!resumeRef.current) return 0;
    const rect = resumeRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const dx = x - centerX;
    const distance = Math.abs(dx);
    if (distance < 100) return dx * 0.1;
    return 0;
  });

  const magnetY = useTransform(mouseY, (y) => {
    if (!resumeRef.current) return 0;
    const rect = resumeRef.current.getBoundingClientRect();
    const centerY = rect.top + rect.height / 2;
    const dy = y - centerY;
    const distance = Math.abs(dy);
    if (distance < 100) return dy * 0.1;
    return 0;
  });
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#0a0a0a]/50 backdrop-blur-md border-b border-white/10">
      <motion.div
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8"
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            <div className="flex items-center gap-4">
              <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 overflow-hidden cursor-pointer hover:border-white/40 transition">
                <Image
                  src="https://i.ibb.co.com/cc6pFkMb/Gemini-Generated-Image-lojvjplojvjplojv-removebg-preview.png"
                  alt="Md. Romjan Ali Avatar"
                  width={60}
                  height={60}
                  className="object-cover rounded-full"
                />
              </a>
              <span className="text-sm uppercase tracking-[0.35em] text-white/70">Romjan</span>
            </div>
          </div>
          <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box md:hidden z-1 w-52 shadow-sm">

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm  btn font-medium text-gray-300 transition-colors flex justify-start hover:text-white"
              >
                {link.label}
              </a>
            ))}

          </ul>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <motion.a
          ref={resumeRef}
          x={magnetX}
          y={magnetY}
          target="_blank"
          href="/Resume Romjan.pdf" download
          className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-gray-200"
        >
          Resume
        </motion.a>
      </motion.div>
    </header>
  );
}
