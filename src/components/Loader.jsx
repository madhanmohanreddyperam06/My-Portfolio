import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const statuses = [
    "EVERY IDEA STARTS WITH VISION",
    "       MINE STARTS HERE      ",
    "      WHERE IDEAS EVOLVE     ",
    "   AND BOUNDARIES DISAPPEAR  ",
    "      THIS IS MY CRAFT       ",
    "     WELCOME TO MY WORLD     ",
  ];

  useEffect(() => {
    const totalDuration = 8000; // 8 seconds
    const intervalTime = 50; // Update every 50ms
    const increment = 100 / (totalDuration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    const statusInterval = totalDuration / statuses.length;
    const statusTimer = setInterval(() => {
      setStatusIndex((prev) => (prev < statuses.length - 1 ? prev + 1 : prev));
    }, statusInterval);

    return () => {
      clearInterval(timer);
      clearInterval(statusTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden font-mono">
      {/* Background Dot Matrix */}
      <div className="absolute inset-0 dot-matrix opacity-[0.05] pointer-events-none" />

      {/* Scanning Line Effect */}
      <motion.div
        className="absolute inset-0 w-full h-[100px] bg-gradient-to-b from-transparent via-white/[0.03] to-transparent pointer-events-none"
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative flex flex-col items-center">
        {/* Central Logo / Name Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative mb-16"
        >
          {/* Animated Glitch Shadow */}
          <motion.div
            className="absolute inset-0 text-white/10 blur-sm select-none pointer-events-none"
            animate={{ x: [-2, 2, -2], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 0.2, repeat: Infinity }}
          >
            MADHAN DEV
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-[0.2em] text-white relative z-10">
            {/* Dot Animation on Text */}
            {"MADHAN DEV".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + i * 0.15, duration: 0.1 }}
                className={char === " " ? "mx-2" : ""}
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* System Info Display */}
        <div className="flex flex-col items-center gap-6 w-full max-w-[300px]">
          <div className="w-full flex justify-between items-end mb-2">
            <motion.span
              key={statusIndex}
              className="text-[10px] text-white/40 tracking-[0.3em] uppercase min-h-[1em] inline-block"
            >
              {statuses[statusIndex].split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.02 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
            <span className="text-xs text-white font-bold">
              {Math.floor(progress)}%
            </span>
          </div>

          {/* Premium Progress Bar */}
          <div className="w-full h-[2px] bg-white/5 relative overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          {/* Decorative Technical Bits */}
          <div className="flex justify-between w-full opacity-20">
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 h-1 bg-white"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
            <span className="text-[8px] tracking-widest uppercase">
              Kernel_v7.0.4
            </span>
          </div>
        </div>
      </div>

      {/* Edge Accents */}
      <div className="absolute top-10 left-10 text-[10px] text-white/10 rotate-90 origin-left tracking-[0.5em] uppercase">
        System_Initializing
      </div>
      <div className="absolute bottom-10 right-10 text-[10px] text-white/10 tracking-[0.5em] uppercase">
        © 2026 // Madhan.dev
      </div>
    </div>
  );
};

export default Loader;
