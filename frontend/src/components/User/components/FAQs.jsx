import React from "react";
import { motion } from "framer-motion";
import Questions from "./FAQs/Questions/Questions";
import AllBooks from "./FAQs/Books/Books";
import { Helmet } from "react-helmet";

const FAQs = React.memo(() => {
  return (
    <>
      <Helmet>
        <title>My_Mathematics | Questions & Books</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5 }}
        className="AllFAQs"
      >
        <Questions />

        <AllBooks />
      </motion.div>
    </>
  );
});

export default FAQs;
