import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { ACourses, CCourses, GCourses, NTCourses } from "./Elements";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Courses = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= 768 && window.innerWidth <= 1024
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: isMobile ? 2 : isTablet ? 4 : 7, // 2 for mobile, 4 for tablet, 7 for desktop
    slidesToScroll: 2,
  };

  return (
    <>
      <Helmet>
        <title>My_Mathematics | All Courses</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5 }}
        className="Courses"
      >
        <h1>Learn through play and practice.</h1>
        <p id="p">
          Step by step, follow the full path to success while preparing for IMO
          and BdMO.
        </p>

        <main>
          <div className="number">
            <div className="heading-row">
              <h2>Algebra</h2>
              <Link to="algebra">See full path</Link>
            </div>

            <div className="topics">
              <Slider {...settings} className="full-topic">
                {ACourses.map((course, index) => (
                  <Link to={`algebra/${course.path}`} key={course.title}>
                    <p>Level {index + 1}</p>
                    <div className="topic">
                      <h3>{course.title}</h3>
                    </div>
                  </Link>
                ))}
              </Slider>
            </div>
          </div>

          <div className="number">
            <div className="heading-row">
              <h2>Number Theory</h2>
              <Link to="number-theory">See full path</Link>
            </div>

            <div className="topics">
              <Slider {...settings} className="full-topic">
                {NTCourses.map((course, index) => (
                  <Link key={course.title}>
                    <p>Level {index + 1}</p>
                    <div className="topic">
                      <h3>{course.title}</h3>
                    </div>
                  </Link>
                ))}
              </Slider>
            </div>
          </div>

          <div className="number">
            <div className="heading-row">
              <h2>Geometry</h2>
              <Link to="geometry">See full path</Link>
            </div>

            <div className="topics">
              <Slider {...settings} className="full-topic">
                {GCourses.map((course, index) => (
                  <Link key={course.title}>
                    <p>Level {index + 1}</p>
                    <div className="topic">
                      <h3>{course.title}</h3>
                    </div>
                  </Link>
                ))}
              </Slider>
            </div>
          </div>

          <div className="number">
            <div className="heading-row">
              <h2>Combinatorics</h2>
              <Link to="combinatorics">See full path</Link>
            </div>

            <div className="topics">
              <Slider {...settings} className="full-topic">
                {CCourses.map((course, index) => (
                  <Link key={course.title}>
                    <p>Level {index + 1}</p>
                    <div className="topic">
                      <h3>{course.title}</h3>
                    </div>
                  </Link>
                ))}
              </Slider>
            </div>
          </div>
        </main>
      </motion.div>
    </>
  );
};

export default Courses;
