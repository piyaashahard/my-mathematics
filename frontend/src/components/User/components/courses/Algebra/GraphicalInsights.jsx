import React from "react";
import { motion } from "framer-motion";
const GraphicalInsights = () => {
  return <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.15 } }}>GraphicalInsights</motion.div>;
};

export default GraphicalInsights;
