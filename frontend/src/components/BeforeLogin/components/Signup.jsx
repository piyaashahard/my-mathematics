import { useState } from "react";
import axios from "axios";

import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:5000/auth/signup", {
        name,
        email,
        password,
      });
      alert(response.data.message);

      window.location.href = "/login";
    } catch (error) {
      alert("Signup failed");
    }
  };

  return (
    <>
      <Helmet>
        <title>My_Mathematics | Signup</title>
      </Helmet>

      <div className="Signup">
        <div className="login-form">
          <h1>SignUp in My_Mathematics</h1>
          <div className="form-input">
            <MdDriveFileRenameOutline />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="input">Name :</label>
          </div>

          <div className="form-input">
            <IoIosMail />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="input">Email :</label>
          </div>

          <div className="form-input">
            <RiLockPasswordFill />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="input">Password</label>
          </div>

          <button onClick={handleSignup}>Signup</button>

          <p>
            Already have an account in My_Mathematics. Then you should{" "}
            <Link to="/login">Log In.</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
