"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const ContuctMePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! (Demo)");
    // You can connect EmailJS or backend here later
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-grid-pattern min-h-screen py-20 px-6 md:px-12 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Contact <span className="text-cyan-400">Me</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's connect and discuss how we can work together on your next project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#111111] border border-gray-800 rounded-3xl p-8 md:p-10 flex flex-col justify-between h-full"
          >
            <div>
              <p className="text-gray-400 leading-relaxed mb-10">
                I'm always open to new opportunities, exciting projects, or conversations about technology and development. Feel free to reach out!
              </p>

              <div className="space-y-6">
                {/* Email */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group flex items-center gap-4 p-5 bg-[#0f172a] rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <MdOutlineEmail size={30}/>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-200 font-medium">mdromjanali224512@gmail.com</p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group flex items-center gap-4 p-5 bg-[#0f172a] rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <FaWhatsapp size={30}/>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp</p>
                    <p className="text-gray-200 font-medium">+880 19##-######</p>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group flex items-center gap-4 p-5 bg-[#0f172a] rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <FaLocationDot size={30}/>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-200 font-medium">Mymensingh, Bangladesh (Remote Available)</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <p className="uppercase text-xs tracking-widest text-gray-500 mb-4">Connect With Me</p>
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-2xl flex items-center justify-center transition-colors text-2xl"
                >
                  🐙
                </motion.a>

                <motion.a
                  href="#"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-[#0077b5] hover:bg-[#005f8f] rounded-2xl flex items-center justify-center transition-colors text-2xl text-white"
                >
                  in
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-[#111111] border border-gray-800 rounded-3xl p-8 md:p-10"
          >
            <h2 className="text-3xl font-bold mb-2">Let's Start a Project</h2>
            <p className="text-gray-400 mb-10">
              I'm currently available for full-stack (MERN) web development roles and exciting collaborations.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-[#0f172a] border border-gray-700 rounded-2xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all text-gray-200 placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-[#0f172a] border border-gray-700 rounded-2xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all text-gray-200 placeholder-gray-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-[#0f172a] border border-gray-700 rounded-2xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all text-gray-200 placeholder-gray-500 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-white text-black font-bold py-5 rounded-2xl text-lg flex items-center justify-center gap-3 hover:bg-cyan-400 transition-all duration-300 group"
              >
                Send Message
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContuctMePage;