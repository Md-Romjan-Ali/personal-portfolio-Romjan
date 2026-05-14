"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { BiMouse } from "react-icons/bi";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiJavascript,
  SiPostman,
  SiGit,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { useMouse } from "../../contexts/MouseContext";

// ─── Orbit config ─────────────────────────────────────────────────────────────
// Each orbit ring holds icons placed evenly around a circle.
// radius: distance from center (px), duration: one full revolution (s)
const orbitRings = [
  {
    radius: 155,
    duration: 18,
    direction: 1, // clockwise
    icons: [
      { Icon: SiReact,      color: "#61DAFB", label: "React" },
      { Icon: SiNextdotjs,  color: "#ffffff", label: "Next.js" },
      { Icon: SiNodedotjs,  color: "#68A063", label: "Node.js" },
      { Icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" },
    ],
  },
  {
    radius: 215,
    duration: 28,
    direction: -1, // counter-clockwise
    icons: [
      { Icon: SiMongodb,    color: "#47A248", label: "MongoDB" },
      { Icon: SiExpress,    color: "#aaaaaa", label: "Express" },
      { Icon: SiTailwindcss,color: "#38BDF8", label: "Tailwind" },
      { Icon: SiPostman,    color: "#FF6C37", label: "Postman" },
      { Icon: SiGit,        color: "#F05032", label: "Git" },
    ],
  },
];

// ─── Single orbiting icon ─────────────────────────────────────────────────────
function OrbitIcon({ Icon, color, label, angle, radius, duration, direction, windowWidth, windowHeight }) {
  const [hovered, setHovered] = useState(false);
  const { mouseX, mouseY } = useMouse();

  // angle in degrees where this icon starts on the ring
  const startAngleDeg = angle;
  const animateTo = direction === 1 ? startAngleDeg + 360 : startAngleDeg - 360;

  // Magnet effect
  const magnetX = useTransform(mouseX, (x) => {
    if (windowWidth === 0) return 0;
    const centerX = windowWidth / 2;
    const centerY = windowHeight / 2;
    const currentAngle = startAngleDeg + (Date.now() / 1000 / duration) * 360 * direction;
    const rad = currentAngle * Math.PI / 180;
    const iconX = centerX + radius * Math.cos(rad);
    const dx = x - iconX;
    const distance = Math.abs(dx);
    if (distance < 100) return dx * 0.1;
    return 0;
  });

  const magnetY = useTransform(mouseY, (y) => {
    if (windowHeight === 0) return 0;
    const centerX = windowWidth / 2;
    const centerY = windowHeight / 2;
    const currentAngle = startAngleDeg + (Date.now() / 1000 / duration) * 360 * direction;
    const rad = currentAngle * Math.PI / 180;
    const iconY = centerY + radius * Math.sin(rad);
    const dy = y - iconY;
    const distance = Math.abs(dy);
    if (distance < 100) return dy * 0.1;
    return 0;
  });

  return (
    <motion.div
      className="absolute"
      style={{
        // Position the icon on the circle via CSS custom properties
        left: "50%",
        top: "50%",
        width: 0,
        height: 0,
      }}
      animate={{ rotate: [startAngleDeg, animateTo] }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {/* Arm — move icon out to radius, then counter-rotate so icon stays upright */}
      <motion.div
        style={{
          position: "absolute",
          left: radius,
          top: 0,
          transform: "translate(-50%, -50%)",
        }}
        animate={{ rotate: [0, direction === 1 ? -360 : 360] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        x={magnetX}
        y={magnetY}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        {/* Tooltip */}
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest pointer-events-none z-50"
            style={{
              background: `${color}22`,
              border: `1px solid ${color}55`,
              color,
            }}
          >
            {label}
          </motion.div>
        )}

        {/* Icon bubble */}
        <motion.div
          className="flex items-center justify-center rounded-xl cursor-pointer"
          style={{
            width: 42,
            height: 42,
            background: `${color}18`,
            border: `1px solid ${color}40`,
            boxShadow: hovered ? `0 0 18px ${color}55, 0 0 6px ${color}33` : `0 0 8px ${color}22`,
            color,
            transition: "box-shadow 0.3s",
          }}
          animate={hovered ? { scale: 1.25 } : { scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
        >
          <Icon size={20} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// ─── Orbit ring with dashed track ────────────────────────────────────────────
function OrbitRing({ ring, index, windowWidth, windowHeight }) {
  const iconCount = ring.icons.length;

  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ zIndex: 10 + index }}
    >
      {/* Dashed circular track */}
      <div
        className="absolute rounded-full"
        style={{
          width: ring.radius * 2,
          height: ring.radius * 2,
          border: "1px dashed rgba(255,255,255,0.07)",
        }}
      />

      {/* Icons */}
      <div className="relative pointer-events-auto" style={{ width: 0, height: 0 }}>
        {ring.icons.map((item, i) => {
          const startAngle = (360 / iconCount) * i;
          return (
            <OrbitIcon
              key={item.label}
              {...item}
              angle={startAngle}
              radius={ring.radius}
              duration={ring.duration}
              direction={ring.direction}
              windowWidth={windowWidth}
              windowHeight={windowHeight}
            />
          );
        })}
      </div>
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const techTags = [
  { label: "MongoDB",    color: "from-emerald-500/15 border-emerald-400/30 text-emerald-300",   Icon: SiMongodb    },
  { label: "Express",    color: "from-slate-700/20 border-slate-500/30 text-slate-200",         Icon: SiExpress    },
  { label: "Next.js",    color: "from-white/15 border-white/20 text-white",                     Icon: SiNextdotjs  },
  { label: "Node.js",    color: "from-emerald-600/15 border-emerald-400/30 text-emerald-200",   Icon: SiNodedotjs  },
  { label: "JavaScript", color: "from-yellow-400/15 border-yellow-300/30 text-yellow-200",      Icon: SiJavascript },
];

const socialIcons = [
  {
    label: "GitHub", href: "#",
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c.955.005 1.917.129 2.801.378 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn", href: "#",
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    label: "Email", href: "#",
    svg: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
        <rect height="16" rx="2" width="20" x="2" y="4"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
];

const phrases = ["MERN Stack Developer", "Problem Solver", "UI/UX Enthusiast", "Creative Coder"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(120);
  const [trail, setTrail] = useState([]);
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Typewriter
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
        if (typedText === currentPhrase) { setIsDeleting(true); setSpeed(1200); }
        else setSpeed(120);
      } else {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));
        if (!typedText) { setIsDeleting(false); setPhraseIndex((p) => (p + 1) % phrases.length); setSpeed(150); }
        else setSpeed(60);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, phraseIndex, speed]);

  // Mouse trail
  useEffect(() => {
    const move = (e) => setTrail((p) => [{ x: e.clientX, y: e.clientY }, ...p].slice(0, 10));
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Largest orbit diameter (215 * 2 = 430) + icon size (42) + padding
  const orbitAreaSize = 500;

  return (
    <main className="bg-grid-pattern relative mx-auto flex max-w-7xl flex-col justify-center px-6 py-24 lg:px-8 min-h-screen">
      <motion.div
        className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* ── Left column ── */}
        <div className="space-y-8">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-[#00df9a]/30 bg-[#00df9a]/10 px-4 py-1.5 text-sm font-medium text-[#00df9a]"
          >
            <span className="h-2 w-2 rounded-full bg-[#00df9a] animate-pulse" />
            Available for New Opportunities
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-4">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Md. Romjan Ali
            </h1>
            <div className="text-xl font-medium text-white sm:text-2xl">
              <span>{typedText}</span>
              <span className="ml-1 inline-block h-7 w-0.5 rounded bg-[#00df9a] animate-pulse" />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            {techTags.map(({ label, color, Icon }) => (
              <span key={label} className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-1.5 text-sm font-medium shadow-sm backdrop-blur-sm bg-gradient-to-r ${color}`}>
                <Icon className="h-4 w-4" />
                {label}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
            <button className="rounded-2xl bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-gray-200 active:scale-95">
              View Projects
            </button>
            <button className="rounded-2xl border border-white/10 bg-[#121212] px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/5 active:scale-95">
              Download Resume
            </button>
          </motion.div>

          <motion.div variants={fadeUp} className="flex gap-3 pt-2">
            {socialIcons.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0f0f0f] text-white/70 transition hover:border-[#00df9a]/40 hover:text-[#00df9a] hover:bg-[#00df9a]/5"
                aria-label={item.label}
              >
                {item.svg}
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── Right column: profile + orbits ── */}
        <motion.div
          variants={fadeUp}
          className="relative mx-auto flex items-center justify-center"
          style={{ width: orbitAreaSize, height: orbitAreaSize }}
        >
          {/* Orbit rings */}
          {orbitRings.map((ring, i) => (
            <OrbitRing key={i} ring={ring} index={i} windowWidth={windowWidth} windowHeight={windowHeight} />
          ))}

          {/* Soft radial glow behind profile */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 260,
              height: 260,
              background: "radial-gradient(circle, rgba(0,223,154,0.12) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />

          {/* Profile image */}
          <motion.div
            className="relative z-20"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div
              className="relative overflow-hidden rounded-full"
              style={{
                width: 220,
                height: 220,
                border: "2px solid rgba(0,223,154,0.25)",
                boxShadow: "0 0 0 8px rgba(0,223,154,0.05), 0 0 60px rgba(0,223,154,0.1)",
              }}
            >
              <Image
                src="https://i.ibb.co.com/cc6pFkMb/Gemini-Generated-Image-lojvjplojvjplojv-removebg-preview.png"
                alt="Md. Romjan Ali"
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>

            {/* Badge: lightning bolt */}
            <motion.div
              className="absolute -top-3 -right-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#111] shadow-lg z-30"
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </motion.div>

            {/* Badge: code brackets */}
            <motion.div
              className="absolute -bottom-3 -left-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#111] shadow-lg z-30"
              animate={{ x: [0, -6, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <div className="absolute inset-x-0 bottom-8 flex flex-col items-center">
        <motion.div
          className="flex h-12 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <BiMouse className="h-5 w-5 text-white/60" />
        </motion.div>
        <p className="mt-2 text-[10px] uppercase tracking-[0.35em] text-gray-500">Scroll down</p>
      </div>

      {/* Cursor trail */}
      {trail.map((pos, i) => (
        <span
          key={`${pos.x}-${pos.y}-${i}`}
          className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00df9a]/60 transition-all duration-200 ease-out"
          style={{
            left: pos.x, top: pos.y,
            width: `${16 - i * 1.2}px`, height: `${16 - i * 1.2}px`,
            opacity: Math.max(0, 0.7 - i * 0.07),
            boxShadow: `0 0 10px rgba(0,223,154,0.3)`,
          }}
        />
      ))}
    </main>
  );
}