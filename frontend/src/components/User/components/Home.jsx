import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./../styles/Home.css";
import { homeBanner, mathBanner, mathematicians } from "../images/images";
import { courses, fadeIn, LearnWhyWithUs, zoomIn } from "./Elements";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

import Slider from "react-slick";
import { Helmet } from "react-helmet";

const Home = () => {
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

  const settingsOfUserHome = {
    dots: isMobile ? false : true, // Show navigation dots
    infinite: true, // Enable infinite scrolling
    slidesToShow: isMobile ? 1 : 3, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable autoplay
    speed: 1500, // Transition speed
    autoplaySpeed: 4000, // Time between transitions in autoplay
    cssEase: "cubic-bezier(0.68, -0.55, 0.27, 1.55)", // Smooth animation curve
    fade: false, // Disable fade for more visual variety
    adaptiveHeight: true, // Adjust height to the tallest slide
    centerMode: true, // Highlight the center slide
    centerPadding: "20px", // Padding around the center slide
    pauseOnHover: true, // Pause autoplay on hover
    arrows: true, // Enable navigation arrows
    responsive: [
      {
        breakpoint: 1024, // For medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // For small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>My_Mathematics</title>
      </Helmet>

      <motion.main
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5 }}
        className="home-container"
      >
        {/* Hero Section */}
        <section className="hero-section">
          <motion.div
            variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView={"show"}
            className="hero-content"
          >
            <h1>
              Welcome to <br /> My_Mathematics
            </h1>
            <p>
              Unlock the power of mathematics through interactive animations,
              engaging lessons, and expertly curated content designed to help
              you excel in Math Olympiads like BdMO, IMO, and APMO.
            </p>
            <Link className="hero-button" to="/courses">
              Explore Courses <FaArrowRightLong className="icon" />
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0)}
            initial="hidden"
            whileInView={"show"}
            className="hero-image"
          >
            <img src={mathBanner} alt="Math animations and learning" />
          </motion.div>
        </section>

        {/* Features Section */}
        <motion.section
          variants={zoomIn(0, 0.5)}
          initial="hidden"
          whileInView={"show"}
          className="features-section"
        >
          <h2>Why Learn with Us?</h2>
          <div className="features">
            {LearnWhyWithUs.map((div) => (
              <div className="feature" key={div.img}>
                <img src={div.img} alt="Interactive animations" />
                <h3>{div.title}</h3>
                <p>{div.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Banner Section */}
        <section className="lower-banner-section">
          <img
            src={homeBanner}
            alt=""
            style={{ width: "auto", height: "550px" }}
          />
          <motion.div
            variants={zoomIn(0, 0.4)}
            initial="hidden"
            whileInView={"show"}
            className="absolute"
          >
            <h1>Start your Journey</h1>
            <p>
              Prepare for the Bangladesh Mathematical Olympiad (BdMO) and the
              International Mathematical Olympiad (IMO) with confidence. Sharpen
              your skills, boost your problem-solving abilities, and get ready
              to excel at both BdMO and IMO with thorough preparation
            </p>
            <Link to={"/courses"}>
              <span className="explore"> Get Started</span>{" "}
              <span className="doing">Achieve by doing</span>{" "}
              <FaArrowRightLong className="icon" />
            </Link>
          </motion.div>
        </section>

        {/* Popular Courses Section */}
        <motion.section
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView={"show"}
          className="popular-courses"
        >
          <h2>Our All Popular Courses</h2>
          <div className="courses">
            {courses.map((course) => (
              <div className="course-card" key={course.text}>
                <h3>{course.title}</h3>
                <p>{course.text}</p>
                <button onClick={() => (window.location.href = course.href)}>
                  Start Learning
                </button>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Information about the greatest mathematician */}
        <section
          className="mathematicians-section"
          style={{ "--quantity": mathematicians.length }}
        >
          <h2>Greatest Mathematicians in the History of Mathematics</h2>
          <Slider {...settingsOfUserHome} className="mathematicians-list">
            {mathematicians.map((mathematician) => (
              <div key={mathematician.id} className="mathematician-card">
                <img
                  src={mathematician.image}
                  alt={mathematician.name}
                  className="mathematician-image"
                />
                <h3>{mathematician.name}</h3>
                <p>{mathematician.achievements}</p>
                <p>
                  <strong>Born:</strong> {mathematician.birthYear}
                </p>
                <p>
                  <strong>Died:</strong> {mathematician.deathYear}
                </p>
                <p>
                  <strong>Birthplace:</strong> {mathematician.birthplace}
                </p>
                <p>
                  <strong>Notable Works:</strong>{" "}
                  {mathematician.notableWorks.join(", ")}
                </p>
                <p>
                  <strong>Legacy:</strong> {mathematician.legacy}
                </p>
                {mathematician.awards.length > 0 && (
                  <p>
                    <strong>Awards:</strong> {mathematician.awards.join(", ")}
                  </p>
                )}
              </div>
            ))}
          </Slider>

          <p className="explore-mathematicians">
            <Link to="/mathematicians">
              Explore all mathematicians <FaArrowRightLong />
            </Link>
          </p>
        </section>

        {/* Lets make life more interesting */}
        <motion.section className="millennium-problems">
          <h1>Let's Make Life More Interesting !!!</h1>
          <p>
            What do you think? What is one of the hardest ways to earn 1 million
            dollars?
          </p>
          <h2>
            Well, solving one of the seven Millennium Prize Problems in
            mathematics could be one of the hardest ways!
          </h2>
          <p>
            The Millennium Prize Problems are seven of the most challenging and
            important problems in mathematics. The Clay Mathematics Institute
            has offered a prize of $1 million for each problem solved. Here are
            the problems:
          </p>
          <ol>
            <li>
              <strong>P vs NP Problem:</strong> This asks whether every problem
              whose solution can be quickly verified can also be quickly solved.
              It's fundamental to computer science and cryptography.
            </li>
            <li>
              <strong>Riemann Hypothesis:</strong> A conjecture about the
              distribution of prime numbers, suggesting all non-trivial zeros of
              the Riemann zeta function lie on a critical line.
            </li>
            <li>
              <strong>Yang-Mills Existence and Mass Gap:</strong> A challenge in
              mathematical physics to establish the existence of quantum field
              theories that align with particle physics.
            </li>
            <li>
              <strong>Navier-Stokes Existence and Smoothness:</strong> Focused
              on fluid dynamics, this problem asks if solutions always exist and
              are smooth for the equations describing fluid flow.
            </li>
            <li>
              <strong>Hodge Conjecture:</strong> A deep problem in algebraic
              geometry, questioning whether certain classes of cohomology can be
              represented by algebraic cycles.
            </li>
            <li>
              <strong>Poincaré Conjecture:</strong> This was solved by Grigori
              Perelman in 2003. It deals with understanding three-dimensional
              spaces and their topological properties.
            </li>
            <li>
              <strong>Birch and Swinnerton-Dyer Conjecture:</strong> A
              conjecture in number theory about the solutions to equations
              defining elliptic curves and their relationship to an associated
              function.
            </li>
          </ol>
          <p>
            Only one of these problems has been solved so far. Do you think you
            could tackle one of the remaining six? There’s an opportunity to win
            1+ million dollars if you succeed!
          </p>
        </motion.section>
      </motion.main>
    </>
  );
};

export default Home;
