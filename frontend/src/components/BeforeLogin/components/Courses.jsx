import React, { useEffect, useState } from "react";

import Slider from "react-slick";
import { ACourses, NTCourses, GCourses, CCourses } from "./varients";
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

  const definitionOfAllCourses = [
    { title: "Algebra", courses: ACourses },
    { title: `Number Theory`, courses: NTCourses },
    { title: "Geometry", courses: GCourses },
    { title: "Combinatorics", courses: CCourses },
  ];

  const handleClickToCourse = () => {
    if (!localStorage.getItem("user")) {
      console.log(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>My_Mathematics | All Courses</title>
      </Helmet>

      <div className="Courses">
        <h1>Learn through play and practice.</h1>
        <p id="p">
          Step by step, follow the full path to success while preparing for IMO
          and BdMO.
        </p>

        <main>
          {definitionOfAllCourses.map((section, sectionIndex) => (
            <div className="number" key={sectionIndex}>
              <div className="heading-row">
                <h2>{section.title}</h2>
                <Link to="/login">See path</Link>
              </div>

              <div className="topics">
                <Slider {...settings} className="full-topic">
                  {section.courses.map((course, index) => (
                    <Link
                      to={`${course.path}`}
                      onClick={handleClickToCourse}
                      key={index}
                    >
                      <p>Level {index + 1}</p>
                      <div className="topic">
                        <h3>{course.title}</h3>
                      </div>
                    </Link>
                  ))}
                </Slider>
              </div>
            </div>
          ))}
        </main>
      </div>

      {/* <div className="course-login"></div> */}
    </>
  );
};

export default Courses;
