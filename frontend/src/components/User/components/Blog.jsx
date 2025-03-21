import React from "react";
import { blogPosts } from "./Elements";

import "./../styles/blogs.css";
import SubscribeForm from "./SubscribeForm";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>My_Mathematics | Blogs</title>
      </Helmet>
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
                  <Link to={post.url} className="read-more">
                    Read More <span className="arrow">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <SubscribeForm />
      </div>
    </>
  );
};

export default Blog;
