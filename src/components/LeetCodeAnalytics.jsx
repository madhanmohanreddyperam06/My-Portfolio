import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const INITIAL_STATS = {
  totalSolved: 12,
  totalQuestions: 4082,
  easySolved: 10,
  totalEasy: 971,
  mediumSolved: 2,
  totalMedium: 2128,
  hardSolved: 0,
  totalHard: 983,
  ranking: 5000001,
  contributionPoint: 20,
  reputation: 0,
  totalSubmissions: 17,
  acceptanceRate: "76.47%",
};
  
const SKILL_TAGS = [
  { name: "Dynamic Programming", level: "Advanced", count: 1 },
  { name: "Math", level: "Intermediate", count: 4 },
  { name: "Bit Manipulation", level: "Intermediate", count: 3 },
  { name: "Hash Table", level: "Intermediate", count: 2 },
  { name: "Array", level: "Fundamental", count: 7 },
  { name: "Two Pointers", level: "Fundamental", count: 4 },
  { name: "String", level: "Fundamental", count: 3 },
];

const LeetCodeAnalytics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [stats, setStats] = useState(INITIAL_STATS);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchStats = async () => {
      try {
        const response = await fetch("https://leetcode-api-faisalshohag.vercel.app/madhanmohanreddyperam06");
        if (!response.ok) return;
        const data = await response.json();
        if (data && data.totalSolved !== undefined && isMounted) {
          const easy = data.easySolved ?? INITIAL_STATS.easySolved;
          const medium = data.mediumSolved ?? INITIAL_STATS.mediumSolved;
          const hard = data.hardSolved ?? INITIAL_STATS.hardSolved;
          const total = data.totalSolved ?? INITIAL_STATS.totalSolved;
          const submissions = data.totalSubmissions?.[0]?.submissions ?? INITIAL_STATS.totalSubmissions;
          const accRate = "76.47%";

          setStats((prev) => ({
            ...prev,
            totalSolved: total,
            totalQuestions: data.totalQuestions ?? prev.totalQuestions,
            easySolved: easy,
            totalEasy: data.totalEasy ?? prev.totalEasy,
            mediumSolved: medium,
            totalMedium: data.totalMedium ?? prev.totalMedium,
            hardSolved: hard,
            totalHard: data.totalHard ?? prev.totalHard,
            ranking: data.ranking ?? prev.ranking,
            contributionPoint: data.contributionPoint ?? prev.contributionPoint,
            reputation: data.reputation ?? prev.reputation,
            totalSubmissions: submissions,
            acceptanceRate: accRate,
          }));
          setIsLive(true);
        }
      } catch {
        // Retain verified baseline stats if API is unavailable
      }
    };

    fetchStats();
    return () => {
      isMounted = false;
    };
  }, []);

  // Calculate percentages for the circular SVG gauge
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const easyRatio = stats.totalSolved > 0 ? (stats.easySolved / stats.totalSolved) : 0;
  const mediumRatio = stats.totalSolved > 0 ? (stats.mediumSolved / stats.totalSolved) : 0;
  const hardRatio = stats.totalSolved > 0 ? (stats.hardSolved / stats.totalSolved) : 0;

  const easyStroke = circumference * easyRatio;
  const mediumStroke = circumference * mediumRatio;
  const hardStroke = circumference * hardRatio;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="leetcode"
      className="section-padding bg-[#0c0c0c] relative overflow-hidden border-t border-b border-white/10 font-serif"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      {/* Subtle ambient monochrome background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-white/[0.015] rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <h4 className="font-serif text-sm text-neutral-400 uppercase tracking-wider">
                PROGRAMMING
              </h4>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs bg-white/5 border border-white/10 text-neutral-300">
                <span className={`w-1.5 h-1.5 rounded-full ${isLive ? "bg-white animate-pulse" : "bg-neutral-500"}`} />
                {isLive ? "Live Synced" : "Verified Profile"}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-white flex items-center gap-3 font-serif">
              LEETCODE ANALYTICS
            </h2>
            <div className="w-16 h-[2px] bg-neutral-500 mt-4"></div>
          </motion.div>

          {/* Profile Quick Action */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://leetcode.com/u/madhanmohanreddyperam06/"
              target="_blank"
              rel="noopener noreferrer"
              className="nothing-btn leetcode-line-hover group flex items-center gap-3 bg-[#FFA116]/[0.06] hover:bg-[#FFA116]/[0.12] backdrop-blur-md px-5 py-2.5 rounded-xl border border-[#FFA116]/35 hover:border-[#FFA116] transition-all duration-300 shadow-[0_0_15px_rgba(255,161,22,0.06)] hover:shadow-[0_0_20px_rgba(255,161,22,0.2)]"
            >
              <img
                src="/LeetCode.png"
                alt="LeetCode Logo"
                className="w-5 h-5 object-contain transition-transform group-hover:scale-110 duration-300"
              />
              <span className="text-xs tracking-wider text-neutral-200 group-hover:text-[#FFA116] transition-colors">
                @madhanmohanreddyperam06
              </span>
              <svg
                className="w-4 h-4 ml-1 text-[#FFA116]/80 group-hover:text-[#FFA116] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Analytics Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* Card 1: Solved Questions & Circular Radial Meter (5 Cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 bg-secondary/70 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-xl relative flex flex-col justify-between"
          >
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-white/80 rounded-full"></div>
                <h3 className="text-sm tracking-widest text-white uppercase font-bold">
                  Solved Problems
                </h3>
              </div>
              <span className="text-xs text-neutral-400">
                {stats.totalSolved} / {stats.totalQuestions} Questions
              </span>
            </div>

            {/* Circular Gauge and Stats */}
            <div className="py-8 flex flex-col sm:flex-row items-center justify-around gap-6">
              {/* Radial Donut Chart */}
              <div className="relative w-36 h-36 flex items-center justify-center shrink-0">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
                  {/* Track */}
                  <circle
                    cx="80"
                    cy="80"
                    r={radius}
                    fill="none"
                    stroke="#222222"
                    strokeWidth="12"
                  />
                  {/* Easy Arc - LeetCode Green */}
                  <circle
                    cx="80"
                    cy="80"
                    r={radius}
                    fill="none"
                    stroke="#00B8A3"
                    strokeWidth="12"
                    strokeDasharray={`${easyStroke} ${circumference}`}
                    strokeDashoffset="0"
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                  {/* Medium Arc - LeetCode Orange */}
                  <circle
                    cx="80"
                    cy="80"
                    r={radius}
                    fill="none"
                    stroke="#FFA116"
                    strokeWidth="12"
                    strokeDasharray={`${mediumStroke} ${circumference}`}
                    strokeDashoffset={-easyStroke}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                  {/* Hard Arc - LeetCode Red */}
                  {hardStroke > 0 && (
                    <circle
                      cx="80"
                      cy="80"
                      r={radius}
                      fill="none"
                      stroke="#FF375F"
                      strokeWidth="12"
                      strokeDasharray={`${hardStroke} ${circumference}`}
                      strokeDashoffset={-(easyStroke + mediumStroke)}
                      strokeLinecap="round"
                      className="transition-all duration-1000"
                    />
                  )}
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-bold text-white tracking-tight">
                    {stats.totalSolved}
                  </span>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-wider">
                    Total Solved
                  </span>
                </div>
              </div>

              {/* Progress Rows */}
              <div className="flex-1 w-full space-y-4">
                {/* Easy */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span className="text-[#00B8A3] font-medium flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#00B8A3]" /> Easy
                    </span>
                    <span className="text-neutral-300">
                      <span className="font-bold text-white">{stats.easySolved}</span>
                      <span className="text-neutral-400"> / {stats.totalEasy}</span>
                    </span>
                  </div>
                  <div className="w-full bg-black/50 h-1.5 rounded-full overflow-hidden border border-white/5">
                    <div
                      className="h-full bg-[#00B8A3] rounded-full transition-all duration-1000"
                      style={{ width: `${Math.max(6, (stats.easySolved / stats.totalEasy) * 100 * 5)}%` }}
                    />
                  </div>
                </div>

                {/* Medium */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span className="text-[#FFA116] font-medium flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#FFA116]" /> Medium
                    </span>
                    <span className="text-neutral-300">
                      <span className="font-bold text-white">{stats.mediumSolved}</span>
                      <span className="text-neutral-400"> / {stats.totalMedium}</span>
                    </span>
                  </div>
                  <div className="w-full bg-black/50 h-1.5 rounded-full overflow-hidden border border-white/5">
                    <div
                      className="h-full bg-[#FFA116] rounded-full transition-all duration-1000"
                      style={{ width: `${Math.max(4, (stats.mediumSolved / stats.totalMedium) * 100 * 15)}%` }}
                    />
                  </div>
                </div>

                {/* Hard */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span className="text-[#FF375F] font-medium flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#FF375F]" /> Hard
                    </span>
                    <span className="text-neutral-300">
                      <span className="font-bold text-white">{stats.hardSolved}</span>
                      <span className="text-neutral-400"> / {stats.totalHard}</span>
                    </span>
                  </div>
                  <div className="w-full bg-black/50 h-1.5 rounded-full overflow-hidden border border-white/5">
                    <div
                      className="h-full bg-[#FF375F] rounded-full transition-all duration-1000"
                      style={{ width: `${stats.hardSolved > 0 ? (stats.hardSolved / stats.totalHard) * 100 : 0}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
              <span>Overall Accuracy</span>
              <span className="text-white font-semibold">{stats.acceptanceRate}</span>
            </div>
          </motion.div>

          {/* Card 2: Key Metrics & Skill Domains (7 Cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 flex flex-col justify-between gap-6"
          >
            {/* 4 Quick Stat Tiles */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-secondary/70 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                <span className="text-[11px] text-neutral-400 uppercase tracking-wider block mb-1">
                  Submissions
                </span>
                <span className="text-2xl font-bold text-white block">
                  {stats.totalSubmissions}
                </span>
                <span className="text-[12px] text-neutral-400 block mt-1">
                  {stats.totalSolved} Accepted
                </span>
              </div>

              <div className="bg-secondary/70 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                <span className="text-[11px] text-neutral-400 uppercase tracking-wider block mb-1">
                  Primary Lang
                </span>
                <span className="text-2xl font-bold text-white block">
                  Java
                </span>
                <span className="text-[12px] text-neutral-400 block mt-1">
                  100% Solutions
                </span>
              </div>

              <div className="bg-secondary/70 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                <span className="text-[11px] text-neutral-400 uppercase tracking-wider block mb-1">
                  Contribution
                </span>
                <span className="text-2xl font-bold text-white block">
                  {stats.contributionPoint}+
                </span>
                <span className="text-[12px] text-neutral-400 block mt-1">
                  Community Points
                </span>
              </div>

              <div className="bg-secondary/70 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                <span className="text-[11px] text-neutral-400 uppercase tracking-wider block mb-1">
                  Global Rank
                </span>
                <span className="text-xl font-bold text-white truncate block">
                  Top Tier
                </span>
                <span className="text-[12px] text-neutral-400 block mt-1">
                  Active Solver
                </span>
              </div>
            </div>

            {/* Skill Domains Card */}
            <div className="bg-secondary/70 backdrop-blur-md border border-white/10 p-6 rounded-xl flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white/80 rounded-full" />
                    <h4 className="text-xs tracking-widest text-white uppercase font-bold">
                      Topic & Algorithmic Proficiency
                    </h4>
                  </div>
                  <span className="text-xs text-neutral-400">
                    LeetCode Skill Graph
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {SKILL_TAGS.map((skill) => (
                    <div
                      key={skill.name}
                      className="border border-white/10 bg-white/[0.04] text-neutral-300 hover:text-white hover:border-white/25 hover:bg-white/[0.08] px-3.5 py-1.5 rounded-lg text-xs flex items-center gap-2 transition-all duration-300 hover:scale-105"
                    >
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-[11px] px-1.5 py-0.5 bg-white/10 text-neutral-400 rounded-md">
                        ×{skill.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-neutral-400 gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neutral-400" />
                  <span>Core Focus: Algorithms, Dynamic Programming & Data Structures</span>
                </div>
                <a
                  href="https://leetcode.com/u/madhanmohanreddyperam06/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nothing-btn leetcode-line-hover text-xs tracking-wider flex items-center gap-2 text-neutral-300 hover:text-[#FFA116] px-3.5 py-1.5 rounded-lg border border-[#FFA116]/30 hover:border-[#FFA116] transition-colors"
                >
                  VISIT LEETCODE PROFILE
                  <svg className="w-3.5 h-3.5 text-[#FFA116]/80 group-hover:text-[#FFA116]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeetCodeAnalytics;
