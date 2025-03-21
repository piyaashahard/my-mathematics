import React from "react";
import { motion } from "framer-motion";
const FactorTheorem = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.15 } }}
    >
      FactorTheorem
    </motion.div>
  );
};

export default FactorTheorem;
