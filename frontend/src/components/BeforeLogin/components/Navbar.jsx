import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { fadeIn } from "./varients";
import { motion } from "framer-motion";
import { logo } from "./../images/images";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    const changeNavbarBackground = () => {
      if (window.scrollY >= 400) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", changeNavbarBackground);
    return () => {
      window.removeEventListener("scroll", changeNavbarBackground);
    };
  }, []);

  return (
    <>
      <div className={`Navbar`}>
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            onClick={() => window.open("https://shreyandey.vercel.app")}
          />
          My_Mathematics
        </div>

        <div className="buttons">
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>

      <motion.nav
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView={"show"}
        className={` main-navbar ${navbar && "active"} `}
      >
        <div className="row">
          <h1>
            <img src={logo} />
            My_Mathematics
          </h1>

          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/all-courses">All Courses</Link>
            <Link to="/contact-with-us">Contact us</Link>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
