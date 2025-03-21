import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Loading from "./Loading";
import Error from "./Error";

import { MdEdit } from "react-icons/md";
import { MdDownload } from "react-icons/md";
import Confirmation from "./Confirmation";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);
  const [privateProfile, setPrivateProfile] = useState(false);
  const [friendCount, setFriendCount] = useState(0);
  const [confirmation, setConfirmation] = useState({
    visible: false,
    message: "",
    onConfirm: null,
  });

  const navigate = useNavigate();
  const userInformation = JSON.parse(localStorage.getItem("user"));
  const userId = userInformation?._id;

  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");

  useEffect(() => {
    if (!id) {
      setError("No user ID provided.");
      setLoading(false);
      return;
    }

    setLoading(true);
    fetch(`http://localhost:5000/api/user/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("User not found");
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setPrivateProfile(data.private);
      })
      .catch(() => setError("User not found"))
      .finally(() => setLoading(false));
  }, [id]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  // Handle Delete Account
  const handleDeleteAccount = async () => {
    try {
      const response = await fetch(`http://localhost:5000/user/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) throw new Error();

      localStorage.clear();
      navigate("/");
      window.location.reload();
    } catch {
      alert("Something is error to delete this account.");
    }
  };

  // Handle Privacy Update
  const handlePrivacyUpdate = async () => {
    try {
      const newPrivacyStatus = !privateProfile;

      const response = await fetch(
        `http://localhost:5000/api/user/${id}/private`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ private: newPrivacyStatus }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Failed to update account privacy."
        );
      }

      const { private: updatedPrivacyStatus } = await response.json();
      setPrivateProfile(updatedPrivacyStatus);
    } catch (error) {
      console.error("Error updating account privacy:", error);
      alert(
        error.message || "An unexpected error occurred while updating privacy."
      );
    }
  };

  const handleImageUpload = async () => {
    if (!image) return alert("Please select an image.");

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch(
        `http://localhost:5000/api/upload-image/${id}`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (!response.ok) throw new Error();

      const data = await response.json();
      setUser({ ...user, image: data.imageUrl });
      alert("Image uploaded successfully!");
      window.location.reload();
    } catch {
      alert("Error uploading image.");
    }
  };

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <motion.div
        className="profile-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <Helmet>
          <title>{`My_Mathematics | ${
            userId === id ? userInformation.name : user?.name || "Profile"
          }`}</title>
        </Helmet>

        <div className="profile-card">
          {userId === id ? (
            <>
              <div className="profile-actions">
                <div className="img-section">
                  <div className="img-div">
                    <h1>My_Mathematics</h1>
                  </div>

                  <div className="profile-details">
                    <div className="img">
                      {user?.image && (
                        <img
                          src={`http://localhost:5000/api/user/image/${user?._id}`}
                          alt="Profile"
                        />
                      )}
                    </div>

                    <div className="image-upload">
                      <input
                        id="image-input"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                      />

                      <button>
                        {!image ? (
                          <label
                            htmlFor="image-input"
                            className="image-upload-label"
                          >
                            <MdEdit className="edit-icon" />
                          </label>
                        ) : (
                          <MdDownload
                            className="edit"
                            onClick={handleImageUpload}
                          />
                        )}
                      </button>
                    </div>

                    <div className="detail">
                      <h3>{userInformation.name}</h3>
                      <p>Friends {friendCount}</p>
                    </div>
                  </div>

                  <div className="buttons">
                    <button
                      onClick={() =>
                        setConfirmation({
                          visible: true,
                          message: "Are you sure you want to log out?",
                          onConfirm: handleLogout,
                        })
                      }
                      className="btn logout"
                    >
                      Logout
                    </button>
                    <button
                      onClick={() =>
                        setConfirmation({
                          visible: true,
                          message:
                            "Are you sure you want to delete your account? This action cannot be undone.",
                          onConfirm: handleDeleteAccount,
                        })
                      }
                      className="btn delete"
                    >
                      Delete Account
                    </button>
                    <button
                      onClick={() =>
                        setConfirmation({
                          visible: true,
                          message: `Are you sure you want to ${
                            privateProfile
                              ? "make your account public"
                              : "make your account private"
                          }?`,
                          onConfirm: handlePrivacyUpdate,
                        })
                      }
                      className="btn privacy"
                    >
                      {privateProfile ? "Make Public" : "Make Private"}
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : user?.private === true ? (
            <div>The profile is locked by the user</div>
          ) : (
            <>
              <h1>{user?.name || "Unknown User"}</h1>
              <p>Email: {user?.email || "No email available"}</p>
              {user?.image ? (
                <img
                  src={`http://localhost:5000/api/user/image/${user?._id}`}
                  alt="Profile"
                  className="profile-image"
                />
              ) : (
                <div className="placeholder-image">No Profile Image</div>
              )}
            </>
          )}
        </div>
      </motion.div>

      {confirmation.visible && (
        <Confirmation
          message={confirmation.message}
          onConfirm={() => {
            confirmation.onConfirm();
            setConfirmation({ ...confirmation, visible: false });
          }}
          onCancel={() => setConfirmation({ ...confirmation, visible: false })}
        />
      )}
    </>
  );
};

export default Profile;
