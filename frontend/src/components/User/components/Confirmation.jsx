import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { zoomIn } from "./Elements";
import { ImCross } from "react-icons/im";

const Confirmation = ({ message, onConfirm, onCancel }) => {
  // Ensure the `overflow-hidden` class is added when the component mounts and removed on unmount
  useEffect(() => {
    const htmlElement = document.querySelector("html");
    htmlElement.classList.add("overflow-hidden");

    return () => {
      htmlElement.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className="confirmation-overlay">
      <motion.div
        className="confirmation-box"
        variants={zoomIn(0, 0.5)}
        initial="hidden"
        whileInView={"show"}
      >
        <ImCross className="icon" onClick={onCancel} />
        <p className="confirmation-message">{message}</p>
        <div className="confirmation-buttons">
          <button onClick={onConfirm} className="confirm">
            Confirm
          </button>
          <button onClick={onCancel} className="cancel">
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Confirmation;
