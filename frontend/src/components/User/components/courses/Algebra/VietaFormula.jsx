import React from "react";
import { motion } from "framer-motion";
const VietaFormula = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.15 } }}
    >
      VietaFormula
    </motion.div>
  );
};

export default VietaFormula;
