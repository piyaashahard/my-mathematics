import React from "react";
import { motion } from "framer-motion";
const LagrangeInterpolation = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.15 } }}
    >
      LagrangeInterpolation
    </motion.div>
  );
};

export default LagrangeInterpolation;
