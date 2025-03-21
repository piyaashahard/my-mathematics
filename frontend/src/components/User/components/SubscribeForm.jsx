import React, { useState, useEffect } from "react";
import { IoMdMail } from "react-icons/io";
import { Newsletter } from "../images/images";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState(0);

  useEffect(() => {
    fetchSubscriberCount();
  }, []);

  const fetchSubscriberCount = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/subscribers/count"
      );
      const data = await response.json();
      if (response.ok) {
        setSubscriberCount(data.count);
      } else {
        setMessage(data.message || "Failed to fetch subscriber count.");
      }
    } catch (error) {
      setMessage("An error occurred while fetching subscriber count.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Subscription successful! 🎉");
        setEmail(""); // Clear the email input
        fetchSubscriberCount(); // Refresh the subscriber count
      } else {
        setMessage(data.message || "Subscription failed. Try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="Subscribe">
      <h2>Subscribe to Our Newsletter !</h2>

      <div className="row">
        <div className="logo">
          <img src={Newsletter} alt="" />
        </div>

        <div className="form">
          <p>
            Subscribe to our newsletter and <br /> stay updated
          </p>

          <form onSubmit={handleSubmit}>
            <div className="input-div">
              <IoMdMail className="icon" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="input">Your Email Address</label>
            </div>
            <button type="submit" disabled={isSubmitting}>
              Subscribe
            </button>
          </form>
          <p className="message">{message && message}</p>
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
