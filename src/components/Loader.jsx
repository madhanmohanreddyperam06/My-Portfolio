import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-primary">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Dot matrix grid */}
        <div className="grid grid-cols-5 gap-2 mb-6">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-light rounded-full"
              initial={{ opacity: 0.1 }}
              animate={{ opacity: (i % 3 === 0) ? 0.8 : 0.2 }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.05
              }}
            />
          ))}
        </div>

        <motion.div
          className="w-16 h-[1px] bg-light mb-4"
          initial={{ width: 0 }}
          animate={{ width: "4rem" }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.p
          className="text-light font-sans text-xs tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          MADHAN DEV
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loader;