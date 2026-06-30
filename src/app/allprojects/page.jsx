"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const projects = [
    {
        title: "PropertyHub",
        description:
            "Built a modern property rental booking platform with responsive UI, secure JWT-based authentication, and seamless property booking with secure Stripe payment integration.",
        tech: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "Mongodb", "JavaScript (ES6)", "API"],
        images: [
            "https://i.ibb.co.com/W459yLD6/Whats-App-Image-2026-06-27-at-9-56-27-PM.jpg",
            "https://i.ibb.co.com/ZpJYNc7J/Whats-App-Image-2026-06-27-at-9-58-50-PM.jpg",
            "https://i.ibb.co.com/S71BYHQz/Whats-App-Image-2026-06-27-at-10-04-10-PM.jpg",
        ],
        live: "https://property-renteal-booking-platformcl.vercel.app",
        source: "https://github.com/Md-Romjan-Ali/property-rental-client",
    },
    {
        title: "StudyRoom",
        description:
            "Study Nook is a modern AI-powered study platform designed to help users focus better, plan efficiently, and improve learning productivity in a distraction-free environment.",
        tech: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "JavaScript (ES6)", "API",],
        images: [
            "https://i.ibb.co.com/rKVrJGbq/a73e3bae-ebb3-45fa-8eed-2af93bbc1053.jpg",
            "https://i.ibb.co.com/0pV0yxNt/0d5365f6-f077-4205-9c51-69e5ef8efda4.jpg",
            "https://i.ibb.co.com/FbhmfyjJ/7af76d10-b7b1-4173-9d02-f7d06e3a1a87.jpg",


            // Add more images here if available
        ],
        live: "https://study-nook-delta.vercel.app/",
        source: "https://github.com/Md-Romjan-Ali/StudyNook",
    },
    {
        title: "MediQueue",
        description:
            "MediQeue is a modern online tutor platform designed to connect students with qualified tutors for personalized learning and academic support.",
        tech: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "Mongodb", "JavaScript (ES6)", "API"],
        images: [
            "https://i.ibb.co.com/qYXdfQJJ/b2e4a65d-ca64-41e4-8c4d-535c2b7fa16a.jpg",
            "https://i.ibb.co.com/67GgHdRD/7fa0a63b-f714-4233-8b06-c8c95b58d67c.jpg",
            "https://i.ibb.co.com/SwyYytvF/586a3977-b9a4-4733-b34e-b72d46bbf7ae.jpg",
        ],
        live: "https://mediqeue.vercel.app",
        source: "https://github.com/Md-Romjan-Ali/mediqueue",
    },
    {
        title: "English || জানালা",
        description:
            "English Janala is a simple and interactive web application designed to help beginners learn basic English vocabulary and concepts easily.",
        tech: ["HTML5", "Tailwind CSS", "JavaScript (ES6)", "API"],
        images: [
            "https://i.ibb.co.com/tPmNG35W/image.png",
            "https://i.ibb.co.com/Y75L5XhQ/image.png",
            "https://i.ibb.co.com/YT15Bb0S/image.png",
        ],
        live: "https://md-romjan-ali.github.io/English-Janala/",
        source: "https://github.com/Md-Romjan-Ali/English-Janala",
    },
    {
        title: "Payoo Mobile Bank",
        description:
            "A modern digital wallet UI inspired by mobile banking apps with clean design, authentication flow, and transaction-style interface.",
        tech: ["HTML5", "Tailwind CSS", "JavaScript"],
        images: [
            "https://i.ibb.co.com/F4MYpdfG/image.png",
            "https://i.ibb.co.com/4vyZ5Fx/image.png",
            "https://i.ibb.co.com/21ffKWc4/image.png",
        ],
        live: "https://md-romjan-ali.github.io/payoo-mobile/",
        source: "https://github.com/Md-Romjan-Ali/payoo-mobile",
    },
    {
        title: "GitHub Issues Tracker",
        description:
            "A web application that lets users browse, search, and filter GitHub-style issues, view their status, and explore details in a modal.",
        tech: ["HTML5", "Tailwind CSS", "DaisyUI", "JavaScript"],
        images: [
            "https://i.ibb.co.com/sJ59Nx7P/image.png",
            "https://i.ibb.co.com/pjYkn3XV/image.png",
            "https://i.ibb.co.com/35vM2h22/image.png",
        ],
        live: "#",
        source: "#",
    },
    {
        title: "AI Tool Platform",
        description:
            "Romjan AI Tool Platform is a multi-tool web application that provides different AI-based utilities in one place, offering users quick and simple online tools through a clean and responsive interface.",
        tech: ["HTML5", "Tailwind CSS", "DaisyUI", "JavaScript (ES6)", "API"],
        images: [
            "https://i.ibb.co.com/fdCbxgvp/image.png",
            "https://i.ibb.co.com/gb45qmJy/image.png",
            "https://i.ibb.co.com/Pv9hmSvN/image.png",
        ],
        live: "https://romjanaitoolplatform.netlify.app/",
        source: "https://github.com/Md-Romjan-Ali/B-13_A-6_DigiTools",
    },
];

function ImageCarousel({ images }) {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % images.length);
    const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="relative rounded-3xl mb-8 aspect-video overflow-hidden bg-[#1a1a1a]">
            <AnimatePresence mode="wait">
                <motion.img
                    key={index}
                    src={images[index]}
                    alt="project"
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* Previous Button */}
            <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-cyan-500 p-3 rounded-full text-white text-2xl transition-all backdrop-blur-md"
            >
                ‹
            </button>

            {/* Next Button */}
            <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-cyan-500 p-3 rounded-full text-white text-2xl transition-all backdrop-blur-md"
            >
                ›
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index
                            ? "bg-cyan-400 scale-125"
                            : "bg-zinc-600 hover:bg-zinc-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default function FeaturedProjects() {
    const techColors = [
        "bg-blue-500/10 text-blue-400 border-blue-500/30",
        "bg-purple-500/10 text-purple-400 border-purple-500/30",
        "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
        "bg-amber-500/10 text-amber-400 border-amber-500/30",
        "bg-rose-500/10 text-rose-400 border-rose-500/30",
        "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    ];

    return (
        <section
            id="projects"
            className="bg-grid-pattern py-20 px-6 lg:px-2 text-white"
        >
            <Link
                href="/"
                className="flex mb-10 justify-center max-w-70 mx-auto items-center gap-3 px-6 py-3 rounded-2xl bg-[#3d2a02] border border-zinc-800 text-zinc-300 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300 group"
            >
                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />

                <span className="font-medium">Back To Home</span>
            </Link>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 relative inline-block after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-3 after:w-1/2 after:h-[3px] after:bg-cyan-400 after:shadow-[0_0_15px_#22d3ee]">
                        Featured Projects
                    </h2>

                    <p className="max-w-3xl mx-auto text-zinc-400 text-lg leading-relaxed">
                        Explore some of my recent frontend and full-stack
                        projects built with modern web technologies. Each
                        project focuses on clean UI design, responsive layouts,
                        smooth user experience, and practical functionality.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {projects.map((project, i) => (
                        <motion.article
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.1 }}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.3 },
                            }}
                            className="bg-[#111111] border border-zinc-800/50 rounded-[2.5rem] p-6 flex flex-col h-full transition-all duration-300 hover:border-cyan-500/30 group"
                        >
                            {/* Image Carousel */}
                            <ImageCarousel images={project.images} />

                            {/* Title */}
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-zinc-400 leading-relaxed mb-8">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-10">
                                {project.tech.map((tech, idx) => (
                                    <motion.span
                                        key={idx}
                                        whileHover={{ scale: 1.08, y: -2 }}
                                        className={`px-4 py-1.5 rounded-2xl text-xs font-semibold border transition-all duration-300 ${techColors[
                                            idx % techColors.length
                                        ]
                                            }`}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4 mt-auto">
                                <motion.a
                                    href={project.live}
                                    target="_blank"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex-1 text-center bg-white text-black font-bold py-4 px-6 rounded-2xl hover:bg-cyan-400 transition-all duration-300"
                                >
                                    Live Demo
                                </motion.a>

                                <motion.a
                                    href={project.source}
                                    target="_blank"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex-1 text-center border border-zinc-700 hover:border-zinc-400 text-zinc-300 font-bold py-4 px-6 rounded-2xl hover:bg-zinc-900 transition-all duration-300"
                                >
                                    Source Code
                                </motion.a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}