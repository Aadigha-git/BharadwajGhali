"use client";

import { motion } from "framer-motion";

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 3.7 }}
      onAnimationComplete={() => (document.body.style.overflow = "unset")}
    >
      <div className="relative">
        <motion.div
          className="absolute h-4 w-4 rounded-full bg-foreground"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
            rotate: 360,
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
        />
        <motion.div
          className="h-4 w-4 rounded-full bg-foreground"
          animate={{
            scale: [1.5, 1, 1.5],
            opacity: [0.5, 1, 0.5],
            rotate: -360,
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
        />
      </div>
    </motion.div>
  );
}
