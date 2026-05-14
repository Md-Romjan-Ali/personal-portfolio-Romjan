"use client";

import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { assignment: "A01", score: 60, max: 60, status: "Perfect" },
  { assignment: "A02", score: 60, max: 60, status: "Perfect" },
  { assignment: "A03", score: 59, max: 60, status: "Perfect" },
  { assignment: "A04", score: 60, max: 60, status: "Perfect" },
  { assignment: "A05", score: 60, max: 60, status: "Perfect" },
  { assignment: "A06", score: 58, max: 60, status: "Perfect" },
  { assignment: "A07", score: 60, max: 60, status: "Excellent" },
  { assignment: "A08", score: 60, max: 60, status: "Perfect" },
];

const AcademicExcellence = () => {
  return (
    <section className="py-20 px-6  text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-bold tracking-[0.125em] uppercase block mb-3">
            ACADEMIC EXCELLENCE
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
           Consistent Academic Performance
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of my learning journey, dedication, and performance as a student at Programming Hero.
          </p>
        </motion.div>

        {/* Performance Chart */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111111] border border-gray-800 rounded-3xl p-8 md:p-12 mb-12"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Assignment Performance</h3>
          
          <div className="h-60 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} barCategoryGap={12}>
                <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                <XAxis 
                  dataKey="assignment" 
                  stroke="#666" 
                  fontSize={14}
                />
                <YAxis 
                  domain={[0, 60]} 
                  stroke="#666" 
                  fontSize={14}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "#2471C9",
                    border: "1px solid #4fd1c5",
                    borderRadius: "12px",
                    color: "#fff"
                  }}
                />
                <Bar dataKey="score" radius={[8, 8, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`}
                      fill={entry.score >= 60 ? "#4fd1c5" : "#22d3ee"} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-center gap-8 mt-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-cyan-400 rounded"></div>
              <span>Perfect Score</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-cyan-500 rounded"></div>
              <span>Excellent</span>
            </div>
          </div>
        </motion.div>

        {/* Journey Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto bg-[#111111] border border-gray-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="w-20 h-20 bg-gray-900 rounded-2xl flex items-center justify-center border border-cyan-500/20 shrink-0">
            <svg 
              className="w-10 h-10 text-cyan-400" 
              fill="none" 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
            >
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
              <path d="M4 22h16"></path>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
            </svg>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Programming Hero Journey</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
             Throughout my learning journey at Programming Hero, I maintained consistent performance across conceptual assignments, demonstrating my commitment to understanding and practicing modern web development technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicExcellence;