import React from "react";
import { motion } from "framer-motion";
const NewtonSums = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.15 } }}
    >
      NewtonSums
    </motion.div>
  );
};

export default NewtonSums;
