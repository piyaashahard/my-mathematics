import React, { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";
import SideMenu from "../SideMenu";
import { motion } from "framer-motion";

const basicAlgebraicIdentities = [
  { formula: "(x + y)^n = \\sum_{k=0}^n \\binom{n}{k} x^{n-k} y^k" }, // Binomial Theorem
];

const BinomialTheorem = () => {
  const formulaRef = useRef([]);
  const renderMath = (math, id) => {
    katex.render(math, document.getElementById(id), {
      throwOnError: false,
    });
  };

  useEffect(() => {
    // Render each formula after the component mounts
    formulaRef.current.forEach((el, index) => {
      katex.render(basicAlgebraicIdentities[index].formula, el, {
        throwOnError: false,
      });
    });

    renderMath("(x)", "monomial");
    renderMath("(x + 2)", "binomial");
    renderMath("(x + y + z)", "trinomial");
    renderMath("(x_1 + x_2 + \\cdots + x_n)", "multinomial");

    renderMath("(x+y)^0 = 1", "power-zero");
    renderMath("(x+y)^1 = x+y", "power-one");
    renderMath("(x + y)^2 = x^2+2xy+y^2", "power-two");
    renderMath("(x + y)^3 = x^3+3x^2y+3xy^2+y^3", "power-three");
    renderMath(
      "(x + y)^{50} = x^{50} y^{0} + x^{49} y^{1} + \\dots + x^{0} y^{50}",
      "power-fifty"
    );

    renderMath(
      "(x+2), (x+\\textit{i}), (x + \\sqrt[3]{7})",
      "example-of-definition"
    );
  }, []);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.15 } }}
      className="flex"
    >
      <SideMenu />
      <div className="BinomialTheorem">
        <h1>Binomial Theorem</h1>
        <main>
          <p className="definition">
            Binomial means add or subtract two different terms of two different
            family.
            <br />
            Example: <span id="example-of-definition"></span> ... etc.
          </p>

          <table>
            <tr>
              <td>One term</td>
              <td>
                Monomial <span id="monomial">{`(x)`}</span>
              </td>
            </tr>
            <tr>
              <td>Two term</td>
              <td>
                Binomial <span id="binomial"></span>
              </td>
            </tr>
            <tr>
              <td>Three term</td>
              <td>
                Trinomial <span id="trinomial"></span>
              </td>
            </tr>
            <tr>
              <td>...</td>
              <td>...</td>
            </tr>
            <tr>
              <td>...</td>
              <td>...</td>
            </tr>
            <tr>
              <td>...</td>
              <td>...</td>
            </tr>
            <tr>
              <td>'n' numbers of term</td>
              <td>
                Multinomial <span id="multinomial"></span>
              </td>
            </tr>
          </table>

          <p className="heading-p">
            Lets see and observe some things & gather some ideas from the table.
            Where we can see the power of (x + y) is increasing from 0 to 50.{" "}
          </p>
          <table>
            <tr>
              <td id="power-zero"></td>
              <td>Terms = 1; Power = 0 = (1-1) </td>
            </tr>
            <tr>
              <td id="power-one"></td>
              <td>Terms = 2; Power = 1 = (2-1) </td>
            </tr>
            <tr>
              <td id="power-two"></td>
              <td>Terms = 3; Power = 2 = (3-1) </td>
            </tr>
            <tr>
              <td id="power-three"></td>
              <td>Terms = 4; Power = 3 = (4-1) </td>
            </tr>
            <tr>
              <td>...</td>
              <td>...</td>
            </tr>
            <tr>
              <td>...</td>
              <td>...</td>
            </tr>
            <tr>
              <td>...</td>
              <td>...</td>
            </tr>
            <tr>
              <td id="power-fifty"></td>
              <td>Terms = 51; Power = 50 = (51-1) </td>
            </tr>

            <p className="result">
              So, we can see there the number of the <b>term</b> if
            </p>
          </table>
        </main>

        <ul className="all-formulas-of-identity">
          {basicAlgebraicIdentities.map((identity, index) => (
            <li key={index} ref={(el) => (formulaRef.current[index] = el)}></li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default BinomialTheorem;
