import React, { useState, useEffect } from "react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Beauty of Prime Numbers",
      author: "John Doe",
      date: "January 15, 2025",
      summary:
        "Discover the fascinating world of prime numbers and their applications in cryptography, computer science, and number theory.",
      image: "prime-numbers.jpg",
      url: "/blog/prime-numbers",
    },
    {
      id: 2,
      title: "Understanding Geometry Through Real-Life Examples",
      author: "Jane Smith",
      date: "January 10, 2025",
      summary:
        "Learn how geometry shapes our world, from architecture to nature. Explore real-life examples that make geometry fun and relatable.",
      image: "geometry.jpg",
      url: "/blog/geometry-real-life",
    },
    {
      id: 3,
      title: "10 Tips to Prepare for Math Olympiads",
      author: "Emily Brown",
      date: "January 5, 2025",
      summary:
        "Ace your math olympiad preparation with these 10 essential tips, including problem-solving techniques and time management strategies.",
      image: "math-olympiad.jpg",
      url: "/blog/math-olympiad-tips",
    },
  ];

  return (
    <div className="Blogs">
      <div className="blog-page">
        <h1>Welcome to the My_Mathematics Blog</h1>
        <p>
          Explore articles, tips, and resources to enhance your mathematical
          journey. From foundational concepts to advanced problem-solving, we
          have something for everyone.
        </p>

        <div className="blog-posts">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-post">
              <img
                src={post.image}
                alt={post.title}
                className="blog-post-image"
              />
              <div className="blog-post-content">
                <h2 className="blog-post-title">{post.title}</h2>
                <p className="blog-post-meta">
                  By {post.author} | {post.date}
                </p>
                <p className="blog-post-summary">{post.summary}</p>
                <a href={post.url} className="read-more">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SubscribeForm />
    </div>
  );
};

// Subscribe Form with Search Feature
const SubscribeForm = () => {
  const [email, setEmail] = useState(""); // For subscription input field
  const [searchEmail, setSearchEmail] = useState(""); // For search input field
  const [message, setMessage] = useState(""); // For success/error messages
  const [isSubmitting, setIsSubmitting] = useState(false); // For loading state
  const [subscribers, setSubscribers] = useState([]); // To store the list of subscribers
  const [filteredSubscribers, setFilteredSubscribers] = useState([]); // To store search results

  // Fetch all subscribers on component mount
  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const response = await fetch(
        "https://my-mathematics.vercel.app/api/subscribers"
      ); // Replace with your backend API URL
      const data = await response.json();
      if (response.ok) {
        setSubscribers(data.subscribers); // Update the subscribers list
        setFilteredSubscribers(data.subscribers); // Initialize filtered subscribers
      } else {
        setMessage(data.message || "Failed to fetch subscribers.");
      }
    } catch (error) {
      setMessage("An error occurred while fetching subscribers.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(""); // Clear previous messages

    try {
      const response = await fetch(
        "https://my-mathematics.vercel.app/api/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("Subscription successful! 🎉");
        setEmail(""); // Clear the email input
        fetchSubscribers(); // Refresh the subscriber list
      } else {
        setMessage(data.message || "Subscription failed. Try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }

    setIsSubmitting(false);
  };

  // Handle search input and filter results
  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchEmail(searchValue);

    if (searchValue === "") {
      setFilteredSubscribers(subscribers); // Reset to all subscribers if search is cleared
    } else {
      const filtered = subscribers.filter((subscriber) =>
        subscriber.email.toLowerCase().includes(searchValue)
      );
      setFilteredSubscribers(filtered);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button} disabled={isSubmitting}>
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {message && <p style={styles.message}>{message}</p>}

      <h3 style={styles.subscribersHeading}>Search Subscribers</h3>
      <input
        type="text"
        placeholder="Search by email"
        value={searchEmail}
        onChange={handleSearch}
        style={styles.input}
      />

      <h3 style={styles.subscribersHeading}>Subscribers</h3>
      <div style={styles.subscribersList}>
        {filteredSubscribers.length > 0 ? (
          filteredSubscribers.map((subscriber) => (
            <div key={subscriber._id} style={styles.subscriberCard}>
              <p style={styles.subscriberEmail}>{subscriber.email}</p>
              <p style={styles.subscriberDate}>
                Subscribed on:{" "}
                {new Date(subscriber.subscribedAt).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <p style={styles.noSubscribers}>No subscribers found.</p>
        )}
      </div>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    textAlign: "center",
    maxWidth: "600px",
    margin: "2rem auto",
    padding: "1.5rem",
    backgroundColor: "var(--background-dark)",
    border: "1px solid var(--border-color)",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "1.5rem",
    color: "var(--primary-color)",
    marginBottom: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid var(--border-color)",
    outline: "none",
    width: "100%",
  },
  button: {
    padding: "0.75rem",
    fontSize: "1rem",
    color: "var(--background-dark)",
    backgroundColor: "var(--primary-color)",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
  message: {
    marginTop: "1rem",
    color: "var(--text-secondary)",
  },
  subscribersHeading: {
    marginTop: "2rem",
    fontSize: "1.25rem",
    color: "var(--secondary-color)",
  },
  subscribersList: {
    marginTop: "1rem",
    textAlign: "left",
  },
  subscriberCard: {
    padding: "0.5rem",
    border: "1px solid var(--border-color)",
    borderRadius: "4px",
    marginBottom: "1rem",
    backgroundColor: "var(--background-light)",
  },
  subscriberEmail: {
    fontSize: "1rem",
    color: "var(--text-primary)",
  },
  subscriberDate: {
    fontSize: "0.875rem",
    color: "var(--text-light)",
  },
  noSubscribers: {
    color: "var(--text-secondary)",
    fontSize: "1rem",
  },
};

export default Blog;
