import React from "react";
import { motion } from "framer-motion";

const ArithmeticProgression = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.15 } }}
    >
      ArithmeticProgression
    </motion.div>
  );
};

export default ArithmeticProgression;
