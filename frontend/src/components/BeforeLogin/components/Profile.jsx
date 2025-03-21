import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Error from "./Error";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();

  const url = window.location.href;
  const params = new URLSearchParams(new URL(url).search);
  const id = params.get("id");

  useEffect(() => {
    if (!id) {
      setError("No user ID provided.");
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`http://localhost:5000/api/user/${id}`);

        if (!response.ok) {
          throw new Error("User not found");
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Error />;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return user?.private ? (
    <div>The profile is locked</div>
  ) : (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
