import { useState, useEffect } from "react";
import Admin from "./components/Admin/Admin";
import User from "./components/User/User";
import BeforeLogin from "./components/BeforeLogin/BeforeLogin";

const App = () => {
  const [user, setUser] = useState(null);

  // A helper function to validate JWT
  const validateToken = (token) => {
    if (!token) return false;
    try {
      const decoded = JSON.parse(atob(token.split(".")[1])); // Decode the JWT
      const expirationTime = decoded.exp * 1000; // Expiry time in ms
      return Date.now() < expirationTime; // Check if the token is expired
    } catch (e) {
      return false; // If decoding fails, return false
    }
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const userPasswordJWT = localStorage.getItem("token");

    if (storedUser && userPasswordJWT) {
      const isTokenValid = validateToken(userPasswordJWT);

      if (isTokenValid) {
        // If token is valid, check the user role
        if (
          storedUser.email === "shreyandeyrudra@gmail.com" &&
          storedUser.name === "Shreyan Dey"
        ) {
          setUser("admin");
        } else {
          setUser("student");
        }
      } else {
        setUser(null); // Invalid token, logout the user
      }
    } else {
      setUser(null); // No user data found, show BeforeLogin
    }
  }, []);

  return (
    <>
      {user === "admin" && <Admin />}
      {user === "student" && <User />}
      {user === null && <BeforeLogin />}
    </>
  );
};

export default App;

// import { useState, useEffect } from "react";

// import Admin from "./components/Admin/Admin";
// import User from "./components/User/User";
// import BeforeLogin from "./components/BeforeLogin/BeforeLogin";

// const App = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     const UserPasswordJWT = localStorage.getItem("token");
//     if (storedUser) {
//       if (
//         storedUser.email === "shreyandeyrudra@gmail.com" &&
//         storedUser.name === "Shreyan Dey" &&
//         UserPasswordJWT ===
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzdiNjkyYjEyMjU0OTg4YmY3ZmIyYzAiLCJpYXQiOjE3MzY5NjM0NjgsImV4cCI6MTczNjk2NzA2OH0.hlw4y7z_bt9P8oBEAhDpmBeSWs30SFzcDDMEkPaVSGs"
//       ) {
//         setUser("admin");
//       } else {
//         setUser("student");
//       }
//     } else {
//       setUser(null);
//     }

//   }, []);

//   return (
//     <>
//       {user === "admin" && <Admin />}
//       {user === "student" && <User />}
//       {user === null && <BeforeLogin />}
//     </>
//   );
// };

// export default App;
