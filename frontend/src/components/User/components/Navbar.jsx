import React, { useEffect, useState } from "react";
import { logo } from "./../images/images";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [userInformation, setUserInformation] = useState(null);
  const [loading, setLoading] = useState(true);
  const userId = JSON.parse(localStorage.getItem("user"))?._id; // Get the user ID from localStorage

  const userInformationLocalHost = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (userId) {
      setLoading(true); // Set loading to true when fetching data
      fetch(`http://localhost:5000/api/user/${userId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("User not found");
          }
          return response.json();
        })
        .then((data) => {
          setUserInformation(data);
          setLoading(false); // Set loading to false once data is fetched
        })
        .catch((error) => {
          console.error("Error fetching user:", error);
          setLoading(false); // Set loading to false even if there's an error
        });
    } else {
      setLoading(false); // If no userId, stop loading
    }
  }, [userId]);

  const firstLetter =
    userInformation?.name?.[0]?.toUpperCase() ||
    userInformationLocalHost?.name?.[0]?.toUpperCase(); // Default to "U" if no user or name

  return (
    <nav className="main-navbar">
      <div className="row">
        <h1>
          <img src={logo} alt="My Mathematics Logo" />
          My_Mathematics
        </h1>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/courses">All Courses</Link>

          {userInformation?.image ? (
            <Link
              to={`/user-profile?id=${userId}`}
              className={`profile letter-${firstLetter}`}
            >
              <img
                src={`http://localhost:5000/api/user/image/${userId}`} // Updated to ensure full URL
                alt="Profile"
                style={{ width: "47px", height: "47px", borderRadius: "50%" }}
              />
            </Link>
          ) : (
            <Link
              to={`/user-profile?id=${userId}`}
              className={`profile letter-${firstLetter}`}
            >
              {firstLetter}
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
