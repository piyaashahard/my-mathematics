import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const algebraRoutes = [
  { path: "algebraic-identities", component: <AlgebraicIdentities /> },
  { path: "pre-algebra", component: <PreAlgebra /> },
  { path: "vieta-formula", component: <VietaFormula /> },
  { path: "symmetric-polynomials", component: <SymmetricPolynomials /> },
  { path: "remainder-theorem", component: <RemainderTheorem /> },
  { path: "factor-theorem", component: <FactorTheorem /> },
  { path: "am-gm-inequality", component: <AMGMInequality /> },
  { path: "binomial-theorem", component: <BinomialTheorem /> },
  {
    path: "cauchy-schwarz-inequality",
    component: <CauchySchwarzInequality />,
  },
  { path: "jensen-inequality", component: <JensenInequality /> },
  { path: "arithmetic-progression", component: <ArithmeticProgression /> },
  { path: "geometric-progression", component: <GeometricProgression /> },
  { path: "recurrence-relations", component: <RecurrenceRelations /> },
  { path: "functional-equations", component: <FunctionalEquations /> },
  { path: "roots-of-unity", component: <RootsOfUnity /> },
  { path: "logarithm", component: <Logarithm /> },
  { path: "complex-numbers", component: <ComplexNumbers /> },
  { path: "de-moivres-theorem", component: <MoivreTheorem /> },
  { path: "argand-plane", component: <ArgandPlane /> },
  { path: "cyclotomic-polynomials", component: <CyclotomicPolynomials /> },
  { path: "lagrange-interpolation", component: <LagrangeInterpolation /> },
  { path: "polynomial-inequalities", component: <PolynomialInequalities /> },
  { path: "symmetric-expressions", component: <SymmetricExpressions /> },
  { path: "homogeneous-expressions", component: <HomogeneousExpressions /> },
  { path: "cyclic-expressions", component: <CyclicExpressions /> },
  { path: "newtons-sums", component: <NewtonSums /> },
  { path: "graphical-insights", component: <GraphicalInsights /> },
  { path: "mathematical-induction", component: <MathematicalInduction /> },
  { path: "bounding-techniques", component: <BoundingTechniques /> },
];

import "./styles/Responsive.css";
import "./styles/style.css";
import "./styles/footer.css";

import Home from "./components/Home";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import FAQs from "./components/FAQs";
import Formulas from "./components/Formulas";
import Calculator from "./components/Calculator";
import About from "./components/About";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Blog from "./components/Blog";
import SmallNavbar from "./components/SmallNavbar";
import Mathematicians from "./components/Mathematicians";

import Error from "./components/Error";

import PrimeNumbers from "./components/Blogs/PrimeNumbers";
import GeometryRealLife from "./components/Blogs/GeometryRealLife";
import MathOlympiadTips from "./components/Blogs/MathOlympiadTips";

import Algebra from "./components/courses/Algebra/Algebra";
import NumberTheory from "./components/courses/NumberTheory/NumberTheory";
import Geometry from "./components/courses/Geometry/Geometry";
import Combinatorics from "./components/courses/Combinatorics/Combinatorics";

import PreAlgebra from "./components/courses/Algebra/PreAlgebra";
import AlgebraicIdentities from "./components/courses/Algebra/AlgebraicIdentities";
import VietaFormula from "./components/courses/Algebra/VietaFormula";
import SymmetricPolynomials from "./components/courses/Algebra/SymmetricPolynomials";
import RemainderTheorem from "./components/courses/Algebra/RemainderTheorem";
import FactorTheorem from "./components/courses/Algebra/FactorTheorem";
import BinomialTheorem from "./components/courses/Algebra/BinomialTheorem";
import AMGMInequality from "./components/courses/Algebra/AMGMInequality";
import CauchySchwarzInequality from "./components/courses/Algebra/CauchySchwarzInequality";
import JensenInequality from "./components/courses/Algebra/JensenInequality";
import ArithmeticProgression from "./components/courses/Algebra/ArithmeticProgression";
import GeometricProgression from "./components/courses/Algebra/GeometricProgression";
import RecurrenceRelations from "./components/courses/Algebra/RecurrenceRelations";
import FunctionalEquations from "./components/courses/Algebra/FunctionalEquations";
import RootsOfUnity from "./components/courses/Algebra/RootsOfUnity";
import Logarithm from "./components/courses/Algebra/Logarithm";
import ComplexNumbers from "./components/courses/Algebra/ComplexNumbers";
import MoivreTheorem from "./components/courses/Algebra/MoivresTheorem";
import ArgandPlane from "./components/courses/Algebra/ArgandPlane";
import CyclotomicPolynomials from "./components/courses/Algebra/CyclotomicPolynomials";
import LagrangeInterpolation from "./components/courses/Algebra/LagrangeInterpolation";
import PolynomialInequalities from "./components/courses/Algebra/PolynomialInequalities";
import SymmetricExpressions from "./components/courses/Algebra/SymmetricExpressions";
import HomogeneousExpressions from "./components/courses/Algebra/HomogeneousExpressions";
import CyclicExpressions from "./components/courses/Algebra/CyclicExpressions";
import NewtonSums from "./components/courses/Algebra/NewtonSums";
import GraphicalInsights from "./components/courses/Algebra/GraphicalInsights";
import MathematicalInduction from "./components/courses/Algebra/MathematicalInduction";
import BoundingTechniques from "./components/courses/Algebra/BoundingTechniques";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return null;
};

const CoursesLayout = () => {
  return <Outlet />;
};

const UserDiv = () => {
  const location = useLocation();
  const [hideFooter, setHideFooter] = useState(false);

  // useEffect(() => {
  //   if (location.pathname === "/courses/algebra") {
  //     setHideFooter(true);
  //   } else {
  //     setHideFooter(false);
  //   }
  // }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path={`/user-profile`} element={<Profile />} />
          <Route path="/contact-with-us" element={<Contact />} />
          <Route path="/questions-books" element={<FAQs />} />
          <Route path="/math-formulas-sheet" element={<Formulas />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/mathematicians" element={<Mathematicians />} />

          <Route path="blogs" element={<CoursesLayout />}>
            <Route index element={<Blog />} />
            <Route path="prime-numbers" element={<PrimeNumbers />} />
            <Route path="geometry-real-life" element={<GeometryRealLife />} />
            <Route path="math-olympiad-tips" element={<MathOlympiadTips />} />
          </Route>

          <Route path="courses" element={<CoursesLayout />}>
            <Route index element={<Courses />} />

            <Route path="algebra" element={<CoursesLayout />}>
              <Route index element={<Algebra />} />

              {algebraRoutes.map(({ path, component }) => (
                <Route key={path} path={path} element={component} />
              ))}
            </Route>

            <Route path="number-theory" element={<NumberTheory />} />
            <Route path="combinatorics" element={<Combinatorics />} />
            <Route path="geometry" element={<Geometry />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </AnimatePresence>

      {/* {!hideFooter && <Footer />} */}
      <Footer />
    </>
  );
};

const User = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="User">
      <BrowserRouter>
        {isMobile ? <SmallNavbar /> : <Navbar />}
        <UserDiv />
      </BrowserRouter>
    </div>
  );
};

export default User;

// import React, { useEffect, useState, lazy, Suspense } from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   useLocation,
//   Outlet,
// } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";

// import "./styles/Responsive.css";
// import "./styles/style.css";
// import "./styles/footer.css";

// // Lazy load main components
// const Home = lazy(() => import("./components/Home"));
// const Profile = lazy(() => import("./components/Profile"));
// const Contact = lazy(() => import("./components/Contact"));
// const FAQs = lazy(() => import("./components/FAQs"));
// const Formulas = lazy(() => import("./components/Formulas"));
// const Calculator = lazy(() => import("./components/Calculator"));
// const About = lazy(() => import("./components/About"));
// const Privacy = lazy(() => import("./components/Privacy"));
// const Terms = lazy(() => import("./components/Terms"));
// const Mathematicians = lazy(() => import("./components/Mathematicians"));
// const Blog = lazy(() => import("./components/Blog"));
// const Footer = lazy(() => import("./components/Footer"));
// const Navbar = lazy(() => import("./components/Navbar"));
// const SmallNavbar = lazy(() => import("./components/SmallNavbar"));
// const Error = lazy(() => import("./components/Error"));

// // Lazy load blog components
// const PrimeNumbers = lazy(() => import("./components/Blogs/PrimeNumbers"));
// const GeometryRealLife = lazy(() =>
//   import("./components/Blogs/GeometryRealLife")
// );
// const MathOlympiadTips = lazy(() =>
//   import("./components/Blogs/MathOlympiadTips")
// );

// // Lazy load course categories
// const Courses = lazy(() => import("./components/Courses"));
// const Algebra = lazy(() => import("./components/courses/Algebra/Algebra"));
// const NumberTheory = lazy(() =>
//   import("./components/courses/NumberTheory/NumberTheory")
// );
// const Geometry = lazy(() => import("./components/courses/Geometry/Geometry"));
// const Combinatorics = lazy(() =>
//   import("./components/courses/Combinatorics/Combinatorics")
// );

// // Algebra sub-routes
// const algebraRoutes = [
//   {
//     path: "algebraic-identities",
//     component: lazy(() =>
//       import("./components/courses/Algebra/AlgebraicIdentities")
//     ),
//   },
//   {
//     path: "pre-algebra",
//     component: lazy(() => import("./components/courses/Algebra/PreAlgebra")),
//   },
//   {
//     path: "vieta-formula",
//     component: lazy(() => import("./components/courses/Algebra/VietaFormula")),
//   },
//   {
//     path: "symmetric-polynomials",
//     component: lazy(() =>
//       import("./components/courses/Algebra/SymmetricPolynomials")
//     ),
//   },
//   {
//     path: "remainder-theorem",
//     component: lazy(() =>
//       import("./components/courses/Algebra/RemainderTheorem")
//     ),
//   },
//   {
//     path: "factor-theorem",
//     component: lazy(() => import("./components/courses/Algebra/FactorTheorem")),
//   },
//   {
//     path: "binomial-theorem",
//     component: lazy(() =>
//       import("./components/courses/Algebra/BinomialTheorem")
//     ),
//   },
//   {
//     path: "am-gm-inequality",
//     component: lazy(() =>
//       import("./components/courses/Algebra/AMGMInequality")
//     ),
//   },
//   {
//     path: "cauchy-schwarz-inequality",
//     component: lazy(() =>
//       import("./components/courses/Algebra/CauchySchwarzInequality")
//     ),
//   },
//   {
//     path: "jensen-inequality",
//     component: lazy(() =>
//       import("./components/courses/Algebra/JensenInequality")
//     ),
//   },
//   {
//     path: "arithmetic-progression",
//     component: lazy(() =>
//       import("./components/courses/Algebra/ArithmeticProgression")
//     ),
//   },
//   {
//     path: "geometric-progression",
//     component: lazy(() =>
//       import("./components/courses/Algebra/GeometricProgression")
//     ),
//   },
//   {
//     path: "recurrence-relations",
//     component: lazy(() =>
//       import("./components/courses/Algebra/RecurrenceRelations")
//     ),
//   },
//   {
//     path: "functional-equations",
//     component: lazy(() =>
//       import("./components/courses/Algebra/FunctionalEquations")
//     ),
//   },
//   {
//     path: "roots-of-unity",
//     component: lazy(() => import("./components/courses/Algebra/RootsOfUnity")),
//   },
//   {
//     path: "logarithm",
//     component: lazy(() => import("./components/courses/Algebra/Logarithm")),
//   },
//   {
//     path: "complex-numbers",
//     component: lazy(() =>
//       import("./components/courses/Algebra/ComplexNumbers")
//     ),
//   },
//   {
//     path: "de-moivres-theorem",
//     component: lazy(() =>
//       import("./components/courses/Algebra/MoivresTheorem")
//     ),
//   },
//   {
//     path: "argand-plane",
//     component: lazy(() => import("./components/courses/Algebra/ArgandPlane")),
//   },
//   {
//     path: "cyclotomic-polynomials",
//     component: lazy(() =>
//       import("./components/courses/Algebra/CyclotomicPolynomials")
//     ),
//   },
//   {
//     path: "lagrange-interpolation",
//     component: lazy(() =>
//       import("./components/courses/Algebra/LagrangeInterpolation")
//     ),
//   },
//   {
//     path: "polynomial-inequalities",
//     component: lazy(() =>
//       import("./components/courses/Algebra/PolynomialInequalities")
//     ),
//   },
//   {
//     path: "symmetric-expressions",
//     component: lazy(() =>
//       import("./components/courses/Algebra/SymmetricExpressions")
//     ),
//   },
//   {
//     path: "homogeneous-expressions",
//     component: lazy(() =>
//       import("./components/courses/Algebra/HomogeneousExpressions")
//     ),
//   },
//   {
//     path: "cyclic-expressions",
//     component: lazy(() =>
//       import("./components/courses/Algebra/CyclicExpressions")
//     ),
//   },
//   {
//     path: "newtons-sums",
//     component: lazy(() => import("./components/courses/Algebra/NewtonSums")),
//   },
//   {
//     path: "graphical-insights",
//     component: lazy(() =>
//       import("./components/courses/Algebra/GraphicalInsights")
//     ),
//   },
//   {
//     path: "mathematical-induction",
//     component: lazy(() =>
//       import("./components/courses/Algebra/MathematicalInduction")
//     ),
//   },
//   {
//     path: "bounding-techniques",
//     component: lazy(() =>
//       import("./components/courses/Algebra/BoundingTechniques")
//     ),
//   },
// ];

// const ScrollToTop = () => {
//   const location = useLocation();
//   useEffect(
//     () => window.scrollTo({ top: 0, behavior: "smooth" }),
//     [location.pathname]
//   );
//   return null;
// };

// const CoursesLayout = () => <Outlet />;

// const AppRoutes = () => {
//   const location = useLocation();
//   return (
//     <AnimatePresence mode="wait">
//       <Routes location={location} key={location.pathname}>
//         <Route path="/" element={<Home />} />
//         <Route path="/user-profile" element={<Profile />} />
//         <Route path="/contact-with-us" element={<Contact />} />
//         <Route path="/questions-books" element={<FAQs />} />
//         <Route path="/math-formulas-sheet" element={<Formulas />} />
//         <Route path="/calculator" element={<Calculator />} />
//         <Route path="/about-us" element={<About />} />
//         <Route path="/privacy-policy" element={<Privacy />} />
//         <Route path="/terms-and-conditions" element={<Terms />} />
//         <Route path="/mathematicians" element={<Mathematicians />} />

//         <Route path="/blogs" element={<CoursesLayout />}>
//           <Route index element={<Blog />} />
//           <Route path="prime-numbers" element={<PrimeNumbers />} />
//           <Route path="geometry-real-life" element={<GeometryRealLife />} />
//           <Route path="math-olympiad-tips" element={<MathOlympiadTips />} />
//         </Route>

//         <Route path="/courses" element={<CoursesLayout />}>
//           <Route index element={<Courses />} />
//           <Route path="algebra" element={<CoursesLayout />}>
//             <Route index element={<Algebra />} />
//             {algebraRoutes.map(({ path, component: Component }) => (
//               <Route key={path} path={path} element={<Component />} />
//             ))}
//           </Route>
//           <Route path="number-theory" element={<NumberTheory />} />
//           <Route path="combinatorics" element={<Combinatorics />} />
//           <Route path="geometry" element={<Geometry />} />
//         </Route>

//         <Route path="*" element={<Error />} />
//       </Routes>
//     </AnimatePresence>
//   );
// };

// const User = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="User">
//       <BrowserRouter>
//         <Suspense fallback={<div>Loading...</div>}>
//           {isMobile ? <SmallNavbar /> : <Navbar />}
//           <ScrollToTop />
//           <AppRoutes />
//           <Footer />
//         </Suspense>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default User;
