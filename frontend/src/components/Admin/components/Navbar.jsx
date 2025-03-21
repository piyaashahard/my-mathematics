import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user._id : "";

  const allLinks = [
    { name: "Home", href: "/" },
    { name: "Blogs", href: "/blogs" },
    { name: "Profile", href: `/user-profile?id=${userId}` },
    { name: "All Users", href: "/all-users" },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {allLinks.map((link) => (
          <li key={link.href} className="navbar-item">
            <Link to={link.href} className="navbar-link">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
