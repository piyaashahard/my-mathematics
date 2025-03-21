// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// import { ACourses } from "./../../Elements.js";
// import { Block } from "../../../images/images.js";
// import SideMenu from "../SideMenu.jsx";

// const Algebra = () => {
//   const [completed, setCompleted] = useState(0);

//   return (
// <motion.div
//   initial={{ width: 0 }}
//   animate={{ width: "100%" }}
//   exit={{ x: window.innerWidth, transition: { duration: 0.15 } }}
//   className="algebra"
//   style={{ display: "flex", height: "100vh" }}
// >
//       <SideMenu />

//       <main>
//         <div className="algebra-div">
//           <h1>Algebra </h1>
//           <p>{`Total ${ACourses.length} levels, You have completed ${completed} levels.`}</p>
//         </div>

//         <div className="box-container wrapper">
//           {ACourses.map((course, index) => (
//             <Link
//               className="full-box icon facebook"
//               key={course.path}
//               to={course.path}
//             >
//               <div className="box">
//                 <img src={Block} alt="" className="upper" />
//                 <img src={Block} alt="" className="lower" />
//               </div>
//               <span className="tooltip">Level {index + 1}</span>
//               <p>{course.title}</p>
//             </Link>
//           ))}
//         </div>
//       </main>
//     </motion.div>
//   );
// };

// export default Algebra;

import React from "react";
import { motion } from "framer-motion";

const Algebra = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      Algebra
    </motion.div>
  );
};

export default Algebra;
