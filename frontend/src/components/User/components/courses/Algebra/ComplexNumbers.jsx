import React from "react";
import { motion } from "framer-motion";

const ComplexNumbers = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.15 } }}
    >
      ComplexNumbers
    </motion.div>
  );
};

export default ComplexNumbers;
