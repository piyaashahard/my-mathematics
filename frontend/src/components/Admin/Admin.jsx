import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./style/style.css";

import Home from "./components/Home";
import Profile from "./components/Profile";
import Blog from "./components/Blogs";
import Navbar from "./components/Navbar";
import Users from "./components/Users";

const Admin = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-profile" element={<Profile />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/all-users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Admin;
