import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import { IoIosMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { ThumbsUp } from "../images/images";

import { zoomIn } from "./varients";
import { Helmet } from "react-helmet";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/login`,
        {
          email,
          password,
          // image,
        }
      );

      setSuccessful(true);

      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.token);

      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <Helmet>
        <title>My_Mathematics | Login</title>
      </Helmet>

      <div className="Login">
        <div className="login-form">
          <h1>Log in to My_Mathematics</h1>
          <div className="form-input">
            <IoIosMail />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
            <label htmlFor="input">Email :</label>
          </div>

          <div className="form-input">
            <RiLockPasswordFill />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="input">Password :</label>
          </div>

          <button onClick={handleLogin}>Login</button>

          <p>
            Don't have an account on My_Mathematics? <br />
            <Link to="/signup">Sign up</Link> now to create a new account and
            become a part of the My_Mathematics community!
          </p>
        </div>
      </div>

      {successful && (
        <motion.div
          variants={zoomIn(0, 0.5)}
          initial="hidden"
          whileInView={"show"}
          className="successful"
        >
          <div className="successful-div">
            <img src={ThumbsUp} alt="" />

            <h1>You have successfully logged in!</h1>
            <p>Please Wait !!!</p>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Login;
