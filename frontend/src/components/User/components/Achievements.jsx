import React from "react";
import { motion } from "framer-motion";
const Achievements = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.15 } }}
    >
      Achievements
    </motion.div>
  );
};

export default Achievements;
