import React, { useEffect, useRef, useState } from "react";
import {
  algebra,
  AMC,
  APMO,
  BdMO,
  combinatorics,
  doing,
  EGMO,
  geometry,
  IMO,
  logo,
  mathBanner,
  number,
} from "./../images/images";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, textVariant, zoomIn } from "./varients";
import { Helmet } from "react-helmet";

const Home = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const circleRef = useRef(null);

  const positions = [
    { top: "3vw", right: "28vw" },
    { top: "4vw", right: "28vw" },
    { top: "3vw", right: "30vw" },
    { top: "6vw", right: "31vw" },
    { top: "5vw", right: "35vw" },
    { top: "2vw", right: "28vw" },
    { top: "2vw", right: "25vw" },
    { top: "2vw", right: "23vw" },
    { top: "1vw", right: "29vw" },
    { top: "5vw", right: "30vw" },
    { top: "6vw", right: "31vw" },
    { top: "2vw", right: "29vw" },
    { top: "3vw", right: "31vw" },
    { top: "5vw", right: "21vw" },
    { top: "6vw", right: "22vw" },
    { top: "2vw", right: "29vw" },
    { top: "2vw", right: "30vw" },
    { top: "7vw", right: "31vw" },
    { top: "6vw", right: "30vw" },
    { top: "7vw", right: "29vw" },
    { top: "3vw", right: "23vw" },
    { top: "3.5vw", right: "27vw" },
    { top: "5vw", right: "27vw" },
    { top: "4vw", right: "27vw" },
    { top: "1vw", right: "27vw" },
  ];
  const charPositions = [
    {
      left: "calc(7vw + 4px)",
    },
    {
      left: "calc(9vw + 7px)",
    },
    {
      left: "calc(11vw + 10px)",
    },
    {
      left: "14vw",
    },
    {
      left: "calc(16vw + 3px)",
    },
  ];
  const sliders = [
    {
      img: IMO,
      name: "IMO",
    },
    {
      img: APMO,
      name: "APMO",
    },
    {
      img: EGMO,
      name: "EGMO",
    },
    {
      img: BdMO,
      name: "BDMO",
    },
    {
      img: AMC,
      name: "AMC",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (circleRef.current) {
        const circle = circleRef.current;
        const circleRect = circle.getBoundingClientRect();
        const circleRadius = circleRect.width / 2;

        const mouseX = e.clientX - circleRect.left;
        const mouseY = e.clientY - circleRect.top;

        const dx = mouseX - circleRadius;
        const dy = mouseY - circleRadius;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < circleRadius) {
          setPosition({ x: mouseX, y: mouseY });
        } else {
          const angle = Math.atan2(dy, dx);
          const x = circleRadius + Math.cos(angle) * circleRadius;
          const y = circleRadius + Math.sin(angle) * circleRadius;
          setPosition({ x, y });
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const variantsCursor = {
    default: {
      x: position.x - 16,
      y: position.y - 16,
    },
  };

  return (
    <>
      <Helmet>
        <title>My_Mathematics</title>
      </Helmet>

      <div className="Home">
        <div className="home-div">
          <motion.div
            variants={zoomIn("0", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="banner"
          >
            <h1>
              <div className="first-p">
                <div className="left">
                  {charPositions.map((position, index) => (
                    <div
                      key={index}
                      className={`animated-div animated-div-${index}`} // Dynamic class names
                      style={{
                        position: "absolute",
                        top: position.top,
                        left: position.left,
                        height: position.height,
                        animationDelay: "0.5s",
                      }}
                    ></div>
                  ))}
                </div>
                Achieve
                <div className="right">
                  <div className="round"></div>
                  <div className="round round2"></div>
                  <div className="line"></div>
                  <div className="dots">
                    {positions.map((position, index) => (
                      <div
                        key={index}
                        style={{
                          position: "absolute",
                          top: position.top,
                          right: position.right,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="upper">
                <div className="line"></div>
                <div className="line" style={{ left: "10vw" }}></div>
                <div className="line" style={{ left: "20vw" }}></div>
                <div className="line" style={{ left: "30vw" }}></div>
                <div className="line" style={{ left: "40vw" }}></div>
                <div className="line" style={{ left: "50vw" }}></div>
                <div className="line" style={{ left: "60vw" }}></div>
                <div className="line" style={{ left: "70vw" }}></div>
                <div className="line" style={{ left: "80vw" }}></div>
              </div>

              <div>
                <div className="row">
                  <p>by</p> <img src={doing} /> <p>doing</p>
                  <div className="right">
                    <div className="sine-curve"></div>
                    <div className="circle"></div>
                    <div className="line"></div>
                  </div>
                </div>

                <div className="upper">
                  <div className="line"></div>
                  <div className="line" style={{ left: "10vw" }}></div>
                  <div className="line" style={{ left: "20vw" }}></div>
                  <div className="line" style={{ left: "30vw" }}></div>
                  <div className="line" style={{ left: "40vw" }}></div>
                  <div className="line" style={{ left: "50vw" }}></div>
                  <div className="line" style={{ left: "60vw" }}></div>
                  <div className="line" style={{ left: "70vw" }}></div>
                  <div className="line" style={{ left: "80vw" }}></div>
                </div>
              </div>
            </h1>
          </motion.div>

          <main>
            <motion.h2
              variants={textVariant(0)}
              initial="hidden"
              whileInView={"show"}
            >
              Prepare for Bangladesh Mathematical Olympiad (BdMO) &
              International Mathematical Olympiad (IMO) within 6 months
            </motion.h2>

            <motion.button
              variants={fadeIn("up", 0)}
              initial="hidden"
              whileInView={"show"}
              className="get-started"
              onClick={() => (window.location.href = "/signup")}
            >
              Get Started
            </motion.button>

            <div className="topics">
              <div className="robot">
                <div className="circle" ref={circleRef}>
                  <div
                    className="black-dot"
                    style={{
                      left: `${position.x - 7.5}px`, // Adjust to center the dot
                      top: `${position.y - 7.5}px`, // Adjust to center the dot
                    }}
                  ></div>
                </div>
              </div>

              <h3>
                <img src={algebra} /> Algebra
              </h3>
              <h3>
                <img src={number} alt="" />
                Number Theory
              </h3>
              <h3>
                <img src={geometry} alt="" />
                Geometry
              </h3>
              <h3>
                <img src={combinatorics} alt="" />
                Combinatorics
              </h3>
            </div>
          </main>
        </div>

        <motion.div
          variants={zoomIn("0", 0.5)}
          initial="hidden"
          whileInView={"show"}
          className="slider-container"
        >
          <div
            className="slider"
            style={{ "--width": "20%", "--height": "200px", "--quantity": 5 }}
          >
            <div className="list">
              {sliders.map((slider, index) => (
                <div
                  className="item"
                  key={index}
                  style={{ "--position": `${index + 1}` }}
                >
                  <img src={slider.img} alt="" />
                  <motion.div
                    animate="default"
                    variants={variantsCursor}
                    className="cursor"
                    style={{
                      left: `${position.x - 16}px`, // Adjust to center the dot
                      top: `${position.y - 16}px`, // Adjust to center the dot
                    }}
                  >
                    {slider.name}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView={"show"}
          className="banner-img-container"
        >
          <img src={mathBanner} alt="none" className="banner-img" />
          <motion.div
            variants={zoomIn("0", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="text"
          >
            <h1>Start your journey</h1>
            <p>
              Prepare for the Bangladesh Mathematical Olympiad (BdMO) and the
              International Mathematical Olympiad (IMO) with confidence. Sharpen
              your skills, boost your problem-solving abilities, and get ready
              to excel at both BdMO and IMO with thorough preparation
            </p>
            <button
              className="get-started"
              onClick={() => (window.location.href = "/signup")}
            >
              Get Started
            </button>
          </motion.div>
        </motion.div>

        <h1 className="extra">
          Gather some knowledge from the ocean of mathematics <br /> from
          My_Mathematics.
        </h1>
      </div>
    </>
  );
};

export default Home;
