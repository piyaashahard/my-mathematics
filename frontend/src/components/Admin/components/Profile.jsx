import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Profile = () => {
  const navigate = useNavigate();
  const userInformation = JSON.parse(localStorage.getItem("user"));
  const userId = userInformation?._id;

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const id = urlParams.get("id");

  useEffect(() => {
    if (!id) {
      setError("No user ID provided.");
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(`http://localhost:5000/api/user/${id}`);
        if (!response.ok) {
          throw new Error("User not found.");
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  const handleMakeAccountPrivate = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/user/${id}/private`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ private: true }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update account privacy.");
      }

      const updatedUser = await response.json();
      setUser(updatedUser);
      alert("Your account is now private.");
    } catch (err) {
      console.error("Error making account private:", err);
      alert("An error occurred while updating your account privacy.");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>My_Mathematics | Admin</title>
      </Helmet>

      {userId === id ? (
        <>
          <h1>Welcome, {userInformation?.name}</h1>
          <button onClick={handleLogout}>Logout</button>
          {/* <button onClick={handleMakeAccountPrivate}>
            Make Account Private
          </button> */}
        </>
      ) : (
        <>
          <h1>Profile</h1>
          <p>Name: {user?.name}</p>
          <p>Email: {user?.email}</p>
        </>
      )}
    </motion.div>
  );
};

export default Profile;
