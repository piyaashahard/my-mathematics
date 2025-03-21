import React from "react";
import { motion } from "framer-motion";
const MathematicalInduction = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.15 } }}
    >
      MathematicalInduction
    </motion.div>
  );
};

export default MathematicalInduction;
