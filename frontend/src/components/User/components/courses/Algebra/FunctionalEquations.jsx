import React from "react";
import { motion } from "framer-motion";

const FunctionalEquations = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.15 } }}
    >
      FunctionalEquations
    </motion.div>
  );
};

export default FunctionalEquations;
