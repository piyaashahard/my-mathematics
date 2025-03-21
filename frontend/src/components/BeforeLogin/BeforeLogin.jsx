import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import Error from "./components/Error";
import About from "./components/About";
import Privacy from "./components/Privacy";
import Conditions from "./components/Conditions";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmallNavbar from "./components/SmallNavbar";
import Blog from "./components/Blogs";
import Profile from "./components/Profile";

import "./style/style.css";
import "./style/animation.css";
import "./style/footer.css";
import "./style/navbar.css";
import "./style/Responsive.css";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  }, [location.pathname]); // Trigger on every route change

  return null;
};

// Page transition animations
const pageTransition = {
  initial: { opacity: 0, x: -50 }, // Starting state (fade in + slide in)
  animate: { opacity: 1, x: 0 }, // Ending state
  exit: { opacity: 0, x: 50 }, // Exit state (fade out + slide out)
  transition: { duration: 0.5 }, // Animation duration
};

const BeforeLogin = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="BeforeLogin">
      <ScrollToTop />
      {isMobile ? <SmallNavbar /> : <Navbar />}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div {...pageTransition}>
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/blogs"
            element={
              <motion.div {...pageTransition}>
                <Blog />
              </motion.div>
            }
          />
          <Route
            path="/user-profile"
            element={
              <motion.div {...pageTransition}>
                <Profile />
              </motion.div>
            }
          />
          <Route
            path="/login"
            element={
              <motion.div {...pageTransition}>
                <Login />
              </motion.div>
            }
          />
          <Route
            path="/signup"
            element={
              <motion.div {...pageTransition}>
                <Signup />
              </motion.div>
            }
          />
          <Route
            path="/all-courses"
            element={
              <motion.div {...pageTransition}>
                <Courses />
              </motion.div>
            }
          />
          <Route
            path="/contact-with-us"
            element={
              <motion.div {...pageTransition}>
                <Contact />
              </motion.div>
            }
          />
          <Route
            path="/about-us"
            element={
              <motion.div {...pageTransition}>
                <About />
              </motion.div>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <motion.div {...pageTransition}>
                <Privacy />
              </motion.div>
            }
          />
          <Route
            path="/terms-and-conditions"
            element={
              <motion.div {...pageTransition}>
                <Conditions />
              </motion.div>
            }
          />
          <Route
            path="*"
            element={
              <motion.div {...pageTransition}>
                <Error />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
};

// Wrap the entire app in BrowserRouter
const App = () => {
  return (
    <BrowserRouter>
      <BeforeLogin />
    </BrowserRouter>
  );
};

export default App;
