import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[9999]">

      {/* Logo */}
      <motion.h1
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-orange-500"
      >
        Coding Ninjas
      </motion.h1>

      {/* Spinner */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
        className="w-14 h-14 border-4 border-orange-500 border-t-transparent rounded-full mt-8"
      />

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
        }}
        className="mt-6 text-gray-600 text-lg"
      >
        Loading...
      </motion.p>

    </div>
  );
}