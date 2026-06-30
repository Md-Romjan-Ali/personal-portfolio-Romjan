"use client";

import { motion } from "framer-motion";
import {
    FaGithub,
    FaLinkedinIn,
    FaFacebookF,

} from "react-icons/fa";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const socials = [
        {
            icon: <FaGithub />,
            href: "https://github.com/Md-Romjan-Ali",
        },
        {
            icon: <FaLinkedinIn />,
            href: "https://www.linkedin.com/in/md-romjan-ali/",
        },
        {
            icon: <FaFacebookF />,
            href: "https://www.facebook.com/",
        },
        {
            icon: <MdOutlineEmail />,
            href: "https://mail.google.com/mail/u/0/#inbox",
        },
    ];

    return (
        <footer className="bg-[#0b0b0b] border-t border-zinc-800 text-white px-6 lg:px-10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto">
                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 mb-16">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-extrabold mb-5">
                            Md <span className="text-cyan-400">Romjan Ali</span>
                        </h2>

                        <p className="text-zinc-400 leading-relaxed max-w-md">
                            Full Stack MERN Developer passionate about building modern,
                            scalable, and user-friendly web applications with clean UI and
                            smooth user experiences.
                        </p>

                        {/* Email */}
                        <div className="mt-6 flex items-center gap-3 text-zinc-300">
                            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                                <MdEmail size={22} />
                            </div>

                            <span className="text-sm md:text-base break-all">
                                romjan.merndev@gmail.com
                            </span>
                        </div>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="lg:mx-auto"
                    >
                        <h3 className="text-xl font-bold mb-6">Quick Links</h3>

                        <ul className="space-y-4">
                            {navLinks.map((link, i) => (
                                <li key={i}>
                                    <Link
                                        href={link.href}
                                        className="text-zinc-400 hover:text-cyan-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Social */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-bold mb-6">Connect With Me</h3>

                        <p className="text-zinc-400 mb-6 leading-relaxed">
                            Feel free to connect with me on social platforms and explore my
                            latest projects and development journey.
                        </p>

                        <div className="flex gap-4">
                            {socials.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    whileHover={{ scale: 1.12, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-12 h-12 rounded-2xl bg-[#111111] border border-zinc-800 hover:border-cyan-400 hover:text-cyan-400 text-zinc-300 flex items-center justify-center text-xl transition-all duration-300"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-zinc-500 text-sm text-center md:text-left">
                        © {new Date().getFullYear()} Md Romjan Ali. All rights reserved.
                    </p>

                    <p className="text-zinc-600 text-sm">
                        Built with Next.js, Tailwind CSS & Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    );
}