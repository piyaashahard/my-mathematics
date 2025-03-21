import React from "react";
import { motion } from "framer-motion";
const RootsOfUnity = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.15 } }}
    >
      RootsOfUnity
    </motion.div>
  );
};

export default RootsOfUnity;
