import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Error = () => {
  return (
    <>
      <Helmet>
        <title>404 | Page Not Found</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5 }}
        className="Error"
      >
        <h1>Oops!</h1>
        <h2>404 Error | Page Not Found</h2>

        <p>
          The page you’re trying to access may no longer exist, might have been
          renamed, or is currently unavailable. Please check the URL or try
          again later.
        </p>

        <Link to="/">
          <span>
            <FaArrowLeft />
          </span>{" "}
          Back to Home
        </Link>
      </motion.div>
    </>
  );
};

export default Error;
