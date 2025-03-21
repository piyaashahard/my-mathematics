import React from "react";
import { ACourses } from "../Elements";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  return (
    <ul className="side-bar">
      <h1>Algebra</h1>
      {ACourses.map((course) => (
        <li key={course.path}>
          <NavLink to={`/courses/algebra/${course.path}`}>
            {course.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default SideMenu;
