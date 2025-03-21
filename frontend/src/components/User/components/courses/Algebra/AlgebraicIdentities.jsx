import React, { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";
import SideMenu from "../SideMenu";
import { motion } from "framer-motion";

const basicAlgebraicIdentities = [
  { formula: "(a + b)^2 = a^2 + 2ab + b^2 = (a - b)^2 + 4ab" },
  { formula: "(a - b)^2 = a^2 - 2ab + b^2 = (a + b)^2 - 4ab" },
  {
    formula:
      "a^2 + b^2 = (a + b)^2 - 2ab = (a - b)^2 + 2ab = \\frac{(a + b)^2 + (a - b)^2}{2}",
  },
  { formula: "a^2 - b^2 = (a - b)(a + b)" },
  {
    formula:
      "ab = \\left(\\frac{a + b}{2}\\right)^2 - \\left(\\frac{a - b}{2}\\right)^2",
  },
  { formula: "(a + b)^3 = a^3 + b^3 + 3ab(a+b) = a^3 + 3a^2b + 3ab^2 + b^3" },
  { formula: "(a - b)^3 = a^3 - b^3 - 3ab(a-b) = a^3 - 3a^2b + 3ab^2 - b^3" },
  { formula: "a^3 + b^3 = (a + b)(a^2 - ab + b^2) = (a + b)^3 - 3ab(a + b)" },
  { formula: "a^3 - b^3 = (a - b)(a^2 + ab + b^2) = (a - b)^3 - 3ab(a - b)" },
  { formula: "(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ca" },
  { formula: "(a - b - c)^2 = a^2 + b^2 + c^2 - 2ab - 2bc + 2ca" },
  {
    formula:
      "a^3 + b^3 + c^3 - 3abc = (a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca)",
  },
  {
    formula: "a^3 + b^3 + c^3 = (a + b + c)^3 - 3(a + b)(b + c)(c + a) + 3abc",
  },
  { formula: "(a + b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4" },
  { formula: "(a - b)^4 = a^4 - 4a^3b + 6a^2b^2 - 4ab^3 + b^4" },
  { formula: "a^4 - b^4 = (a^2 - b^2)(a^2 + b^2)" },
  {
    formula: "(a^2 + b^2)^2 = a^4 + b^4 + 2a^2b^2 = (a^2 - b^2)^2 + 4a^2b^2",
  },
  {
    formula: "(a^2 - b^2)^2 = a^4 + b^4 - 2a^2b^2 = (a^2 + b^2)^2 - 4a^2b^2",
  },
];
// {formula: "x^4 + 4k^4 = (x^2 + k^2 + kx)(x^2 + k^2 - kx)",},

const AlgebraicIdentities = () => {
  const formulaRef = useRef([]);

  useEffect(() => {
    // Render each formula after the component mounts
    formulaRef.current.forEach((el, index) => {
      katex.render(basicAlgebraicIdentities[index].formula, el, {
        throwOnError: false,
      });
    });
  }, []);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.15 } }}
      className="flex"
    >
      <SideMenu />
      <div className="AlgebraicIdentities">
        <h1>Algebraic Identities</h1>
        <p>
          All of the basic Algebraic formulas that usually and commonly used in
          the almost every exam or olympiad, related with Mathematics.
        </p>
        <ul className="all-formulas-of-identity">
          {basicAlgebraicIdentities.map((identity, index) => (
            <li key={index} ref={(el) => (formulaRef.current[index] = el)}></li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default AlgebraicIdentities;
