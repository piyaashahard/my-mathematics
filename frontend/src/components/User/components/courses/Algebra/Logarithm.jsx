import React from "react";
import { motion } from "framer-motion";
const Logarithm = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.15 } }}
    >
      Logarithm
    </motion.div>
  );
};

export default Logarithm;
