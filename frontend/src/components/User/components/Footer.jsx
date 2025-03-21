import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { logo } from "../images/images";

import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
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
    <motion.Footer
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="footer"
    >
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      <div className="all-items">
        <div className="logo">
          <img
            src={logo}
            alt=""
            onClick={() => window.open("https://shreyandey.vercel.app")}
          />
          <p>My_Mathematics</p>
        </div>

        <div className="links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">All Courses</Link>
            </li>
            {/* <li>Tutorials</li>
            <li>Practice Tests</li> */}
            <li>
              <Link to={"/blogs"}>Blogs</Link>
            </li>
            <li>
              <Link to={"/questions-books"}>Questions & Books</Link>
            </li>
            <li>
              <Link to={"/contact-with-us"}>Contact with us</Link>
            </li>
          </ul>
        </div>

        <div className="tools">
          <h1>Educational Tools</h1>
          <ul>
            <li>
              <Link to={"/calculator"}>Calculator</Link>
            </li>
            <li>
              <Link to={"/math-formulas-sheet"}>Math Formulas Sheet</Link>
            </li>
          </ul>
        </div>

        <div className="legal">
          <ul>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        <div className="social">
          <h1>Social Media links</h1>
          <ul>
            <li>
              <a href="https://www.facebook.com/shreyan1729" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/shreyan1729" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://x.com/ShreyanDey1729" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://github.com/Shreyan1729" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/shreyan-dey-72968b342/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:shreyandeyrudra@gmail.com" target="_blank">
                Gmail
              </a>
            </li>
            <li>
              <a href="https://wa.me/+8801818927655" target="_blank">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copy">
        All Rights Reserved by{" "}
        <span
          onClick={() => window.open("https://shreyandey.vercel.app")}
          style={{ cursor: "pointer" }}
        >
          Shreyan Dey.
        </span>
        <br />© {currentYear} My_Mathematics.
        {isMobile ? <br /> : " "}
        Designed by Emam Hossain Miraj.
      </div>
    </motion.Footer>
  );
};

export default Footer;
