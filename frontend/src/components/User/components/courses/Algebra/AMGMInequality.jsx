import React from "react";
import { motion } from "framer-motion";

const AMGMInequality = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.15 } }}
    >
      AMGMInequality
    </motion.div>
  );
};

export default AMGMInequality;
