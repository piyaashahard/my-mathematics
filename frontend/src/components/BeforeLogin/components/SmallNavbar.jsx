import React, { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { logo } from "../images/images";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
import { fadeIn } from "./varients";
import { NavLink } from "react-router-dom";

const SmallNavbar = () => {
  const NavLinkList = [
    { path: "/", label: "Home" },
    { path: "/all-courses", label: "All Courses" },
    { path: "/contact-with-us", label: "Contact with us" },
    { path: "/blogs", label: "Blogs" },
    { path: "/about-us", label: "About Us" },
    { path: "/terms-and-conditions", label: "Terms & Conditions" },
    { path: "/privacy-policy", label: "Privacy & Policy" },
    { path: "/login", label: "Login" },
    { path: "/signup", label: "Signup" },
  ];

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  useEffect(() => {
    const htmlElement = document.documentElement; // Use `document.documentElement` instead of querySelector for better performance.

    if (show) {
      htmlElement.classList.add("overflow-hidden");
    } else {
      htmlElement.classList.remove("overflow-hidden");
    }

    return () => {
      htmlElement.classList.remove("overflow-hidden"); // Cleanup ensures smooth unmounting or unexpected issues.
    };
  }, [show]);

  return (
    <>
      <motion.div
        className={`smallNavbar-main ${show && "active-small-navbar"}`}
        style={{ display: show ? "block" : "none" }}
        variants={fadeIn("left", 0)}
        initial="hidden"
        whileInView={"show"}
      >
        <main>
          <RxCross2 className="cross" onClick={handleHide} />
          <div className="list">
            {NavLinkList.map(({ path, label }) => (
              <NavLink key={path} onClick={() => setShow(false)} to={path}>
                {label}
              </NavLink>
            ))}
          </div>
        </main>
      </motion.div>

      <div className="SmallNavbar">
        <div className="title">
          <img src={logo} alt="" />
          <h1>My_Mathematics</h1>
        </div>
        <RiMenu3Fill className="menu-icon" onClick={handleShow} />
      </div>
    </>
  );
};

export default SmallNavbar;
