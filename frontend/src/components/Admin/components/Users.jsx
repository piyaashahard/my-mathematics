import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to handle image updates for a specific user
  const handleImageUpdate = async (userId, newImage) => {
    try {
      const formData = new FormData();
      formData.append("image", newImage);

      const response = await fetch(
        `http://localhost:5000/api/user/image/${userId}`,
        {
          method: "PATCH",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update image");
      }

      const updatedUser = await response.json();

      // Update the users state with the new image
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, image: updatedUser.image } : user
        )
      );
      alert("Image updated successfully!");
    } catch (error) {
      console.error("Error updating image:", error);
      alert("Failed to update image. Please try again.");
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/users"); // Fetch all users
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data); // Update users state with fetched data
        console.log(data);
      } catch (error) {
        setError(error.message); // Set error state if fetch fails
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false); // Stop loading spinner regardless of outcome
      }
    };

    fetchUsers();
  }, []); // Dependency array ensures this runs only once on mount

  if (loading) {
    return <div className="loading">Loading...</div>; // Display loading message while fetching data
  }

  if (error) {
    return <div className="error">Error: {error}</div>; // Display error message if fetch fails
  }

  return (
    <div className="users-container">
      <h1>Users</h1>
      {users.length === 0 ? (
        <p className="no-users">No users found.</p> // Show this message if no users exist
      ) : (
        <ul className="users-list">
          {users.map((user) => (
            <li key={user._id} className="user-card">
              <img
                src={`http://localhost:5000/api/user/image/${user?._id}`} // Use user's image URL
                alt={`${user.name}'s profile`}
                className="user-image"
              />
              <div className="user-info">
                <p>
                  <strong>Name:</strong> {user.name}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Private:</strong> {user.private ? "Yes" : "No"}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
