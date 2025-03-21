import React, { useState } from "react";
import { motion } from "framer-motion";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { BiSolidRightArrow } from "react-icons/bi";
import { fadeIn } from "./Elements";
import { Helmet } from "react-helmet";

const Formulas = () => {
  const [visibility, setVisibility] = useState({
    algebraic: false,
    trigonometry: false,
    numberTheory: false,
    combinatorics: false,
  });

  const toggleVisibility = (section) => {
    setVisibility((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
      <Helmet>
        <title>My_Mathematics | Math Formulas Sheet</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5 }}
        className="formulas"
      >
        <section>
          <h1>Math Formulas Sheet</h1>

          {/* Algebraic Formulas */}
          <section>
            <h2 onClick={() => toggleVisibility("algebraic")}>
              <BiSolidRightArrow
                style={{
                  transform: visibility.algebraic
                    ? "rotate(-90deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.3s linear", // Smooth transition for the rotation
                }}
              />
              Algebraic Formulas
            </h2>
            {visibility.algebraic && (
              <motion.div
                variants={fadeIn("up", 0)}
                initial="hidden"
                whileInView={"show"}
                className={`section-of-formulas`}
              >
                <div className="formula-section">
                  <h3>1. Quadratic Formula</h3>
                  <ul>
                    <BlockMath math="\text{If } ax^2 + bx + c = 0 \text{ where } a \neq 0 \text{ and } b, c \in \mathbb{N}" />
                    <BlockMath math="x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}" />
                  </ul>
                </div>

                <div className="formula-section">
                  <h3>2. Factorization Formulas</h3>
                  <ul>
                    <BlockMath math="a^2 - b^2 = (a + b)(a - b)" />
                    <BlockMath math="a^2 + b^2 = (a + b)^2-2ab = (a - b)^2+2ab" />
                    <BlockMath math="(a+b)^2 = a^2 + 2ab + b^2" />
                    <BlockMath math="(a-b)^2 = a^2 - 2ab + b^2" />
                    <BlockMath math="(x+a)(x+b) = x^2 + (a+b)x + ab" />
                    <BlockMath math="(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3" />
                    <BlockMath math="(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3" />
                    <BlockMath math="(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ca" />
                    <BlockMath math="( a -b + c)^2 = a^2 + b^2 + c^2 - 2ab - 2bc + 2ca" />
                    <BlockMath math="( a+ b - c)^2 = a^2 + b^2 + c^2 + 2ab - 2bc - 2ca" />
                    <BlockMath math="( a- b - c)^2 = a^2 + b^2 + c^2 - 2ab + 2bc - 2ca" />
                    <BlockMath math="( b -a - c)^2 = a^2 + b^2 + c^2 - 2ab - 2bc + 2ca" />
                    <BlockMath math="2(ab+bc+ca) = (a+b+c)^2 - (a^2 + b^2 + c^2)" />
                    <BlockMath math="a^2 + b^2 + c^2 = (a+b+c)^2 - 2(ab+bc+ca)" />
                    <BlockMath math="a^3 + b^3 = (a+b)(a^2 - ab + b^2)" />
                    <BlockMath math="a^3 - b^3 = (a-b)(a^2 + ab + b^2)" />
                    <BlockMath math="ab = \left(\frac{a + b}{2}\right)^2 - \left(\frac{a - b}{2}\right)^2" />
                  </ul>
                </div>

                <div className="formula-section">
                  <h3>3. Binomial Theorem</h3>
                  <ul>
                    <li>
                      <BlockMath math="(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k" />
                    </li>
                  </ul>
                </div>

                <div className="formula-section">
                  <h3>4. Inequality</h3>
                  <ul>
                    <li>
                      <h4>Titu's Lemma: </h4>
                      <BlockMath math="\frac{a_1^2}{b_1} + \frac{a_2^2}{b_2} + \dots + \frac{a_n^2}{b_n} \geq \frac{(a_1 + a_2 + \dots + a_n)^2}{b_1 + b_2 + \dots + b_n}" />
                    </li>
                    <li>
                      <h4>Chebyshev’s Inequality: </h4>
                      <BlockMath math="P(|X - \mu| < k\sigma) \geq 1 - \frac{1}{k^2}" />
                      <BlockMath math="\left( \sum_{i=1}^{n} a_i^2 \right) \cdot \left( \sum_{i=1}^{n} b_i^2 \right) \geq n \cdot \left( \sum_{i=1}^{n} a_i b_i \right)^2" />
                    </li>
                    <li>
                      <h4>Rearrangement Inequality: </h4>
                      <BlockMath math="\sum_{i=1}^{n} a_i b_i \geq \sum_{i=1}^{n} a_{\sigma(i)} b_{\sigma(i)} \quad \text{(when both sequences are sorted in the same order)}" />
                      <BlockMath math="\sum_{i=1}^{n} a_i b_i \leq \sum_{i=1}^{n} a_{\sigma(i)} b_{\sigma(i)} \quad \text{(when one sequence is sorted in reverse order)}" />
                    </li>
                    <li>
                      <h4>Holder's Inequality:</h4>
                      <BlockMath math="\left( \sum_{i=1}^{n} |a_i b_i| \right) \leq \left( \sum_{i=1}^{n} |a_i|^p \right)^{1/p} \left( \sum_{i=1}^{n} |b_i|^q \right)^{1/q}" />
                    </li>
                  </ul>
                </div>

                <div className="formula-section">
                  <h2>Fibonacci Sequence and Properties</h2>

                  <div className="list-div">
                    <h3>1. Definition:</h3>
                    <ul className="lists">
                      <li>
                        The Fibonacci sequence is defined as:
                        <BlockMath math="F_0 = 0, \quad F_1 = 1, \quad F_n = F_{n-1} + F_{n-2} \quad \text{for} \quad n \geq 2" />
                      </li>
                    </ul>
                  </div>

                  <div className="list-div">
                    <h3>2. First Few Terms of Fibonacci Sequence:</h3>
                    <ul className="lists">
                      <li>
                        The first few terms of the Fibonacci sequence are:
                        <BlockMath math="0, 1, 1, 2, 3, 5, 8, 13, 21, 34, \dots" />
                      </li>
                    </ul>
                  </div>

                  <div className="list-div">
                    <h3>3. Closed-form Expression (Binet's Formula):</h3>
                    <ul className="lists">
                      <li>
                        The closed-form expression for the nth Fibonacci number
                        is given by Binet's formula:
                        <BlockMath math="F_n = \frac{\phi^n - (1-\phi)^n}{\sqrt{5}} \text{(where \( \phi = \frac{1 + \sqrt{5}}{2} \) is the golden ratio.)}" />
                      </li>
                    </ul>
                  </div>

                  <div className="list-div">
                    <h3>4. Sum of Fibonacci Numbers:</h3>
                    <ul className="lists">
                      <li>
                        The sum of the first n terms in Fibonacci numbers is:
                        <BlockMath math="\sum_{i=0}^{n} F_i = F_{n+2} - 1" />
                      </li>
                    </ul>
                  </div>

                  <div className="list-div">
                    <h3>5. Even Fibonacci Numbers:</h3>
                    <ul className="lists">
                      <li>
                        The even Fibonacci numbers form another sequence: 0, 2,
                        8, 34, ...
                      </li>
                    </ul>
                  </div>

                  <div className="list-div">
                    <h3>6. Fibonacci and the Golden Ratio:</h3>
                    <ul className="lists">
                      <li>
                        <BlockMath math="\text{As \( n \to \infty \), the ratio \( \frac{F_n}{F_{n-1}} \) approaches the golden ratio \( \phi \).}" />
                        <BlockMath math="\lim_{n \to \infty} \frac{F_n}{F_{n-1}} = \phi" />
                      </li>
                    </ul>
                  </div>

                  <div className="list-div">
                    <h3>7. Fibonacci Identity:</h3>
                    <ul className="lists">
                      <li>
                        A key identity in Fibonacci numbers is:
                        <BlockMath math="F_n F_{n+1} - F_{n-1} F_{n+2} = (-1)^n" />
                      </li>
                    </ul>
                  </div>

                  <div className="list-div">
                    <h3>8. Generating Function:</h3>
                    <ul className="lists">
                      <li>
                        The generating function for the Fibonacci sequence is:
                        <BlockMath math="G(x) = \sum_{n=0}^{\infty} F_n x^n = \frac{1}{1 - x - x^2}" />
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </section>

          {/* Trigonometry Formulas */}
          <section>
            <h2 onClick={() => toggleVisibility("trigonometry")}>
              <BiSolidRightArrow
                style={{
                  transform: visibility.trigonometry
                    ? "rotate(-90deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.3s linear", // Smooth transition for the rotation
                }}
              />
              Trigonometry Formulas
            </h2>
            {visibility.trigonometry && (
              <motion.div
                variants={fadeIn("up", 0)}
                initial="hidden"
                whileInView={"show"}
                className="section-of-formulas"
              >
                <div className="formula-section">
                  <h3>1. Compound Angle Formulas</h3>
                  <h4>Sum Formula:</h4>
                  <ul>
                    <li>
                      <BlockMath math="\sin(A + B) = \sin A \cos B + \cos A \sin B" />
                    </li>
                    <li>
                      <BlockMath math="\cos(A + B) = \cos A \cos B - \sin A \sin B" />
                    </li>
                  </ul>
                  <h4>Difference Formula:</h4>
                  <ul>
                    <li>
                      <BlockMath math="\sin(A - B) = \sin A \cos B - \cos A \sin B" />
                    </li>
                    <li>
                      <BlockMath math="\cos(A - B) = \cos A \cos B + \sin A \sin B" />
                    </li>
                  </ul>
                </div>
                <div className="formula-section">
                  <h3>2. Multiple Angle Formulas</h3>
                  <h4>Double Angle Formula:</h4>
                  <ul>
                    <li>
                      <BlockMath math="\sin(2A) = 2 \sin A \cos A" />
                    </li>
                    <li>
                      <BlockMath math="\cos(2A) = \cos^2 A - \sin^2 A" />
                    </li>
                    <li>
                      <BlockMath math="\cos(2A) = 2 \cos^2 A - 1" />
                    </li>
                    <li>
                      <BlockMath math="\cos(2A) = 1 - 2 \sin^2 A" />
                    </li>
                  </ul>
                  <h4>Triple Angle Formula:</h4>
                  <ul>
                    <li>
                      <BlockMath math="\sin(3A) = 3 \sin A - 4 \sin^3 A" />
                    </li>
                    <li>
                      <BlockMath math="\cos(3A) = 4 \cos^3 A - 3 \cos A" />
                    </li>
                  </ul>
                </div>
                <div className="formula-section">
                  <h3>3. Sub-multiple Angle Formulas</h3>
                  <h4>Half Angle Formula:</h4>
                  <ul>
                    <li>
                      <BlockMath math="\sin\left(\frac{A}{2}\right) = \pm \sqrt{\frac{1 - \cos A}{2}}" />
                    </li>
                    <li>
                      <BlockMath math="\cos\left(\frac{A}{2}\right) = \pm \sqrt{\frac{1 + \cos A}{2}}" />
                    </li>
                  </ul>
                </div>
                <div className="formula-section">
                  <h3>4. Pythagorean Identity</h3>
                  <ul>
                    <li>
                      <BlockMath math="\sin^2 A + \cos^2 A = 1" />
                    </li>
                  </ul>
                </div>
                <div className="formula-section">
                  <h3>5. Tangent and Cotangent Relations</h3>
                  <ul>
                    <li>
                      <BlockMath math="\tan A = \frac{\sin A}{\cos A}" />
                    </li>
                    <li>
                      <BlockMath math="\cot A = \frac{\cos A}{\sin A}" />
                    </li>
                  </ul>
                </div>
                <div className="formula-section">
                  <h3>6. Reciprocal Identities</h3>
                  <ul>
                    <li>
                      <BlockMath math="\sec A = \frac{1}{\cos A}" />
                    </li>
                    <li>
                      <BlockMath math="\csc A = \frac{1}{\sin A}" />
                    </li>
                    <li>
                      <BlockMath math="\cot A = \frac{1}{\tan A}" />
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </section>

          {/* Number Theory Formulas */}
          <section>
            <h2 onClick={() => toggleVisibility("numberTheory")}>
              <BiSolidRightArrow
                style={{
                  transform: visibility.numberTheory
                    ? "rotate(-90deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.3s linear", // Smooth transition for the rotation
                }}
              />
              Number Theory Formulas
            </h2>
            {visibility.numberTheory && (
              <motion.div
                variants={fadeIn("up", 0)}
                initial="hidden"
                whileInView={"show"}
                className="section-of-formulas"
              >
                <div className="formula-section">
                  <h3>1. Euclidean Algorithm</h3>
                  <ul>
                    <li>
                      <BlockMath math="\gcd(a, b) = \gcd(b, a \mod b)" />
                    </li>
                  </ul>
                </div>
                <div className="formula-section">
                  <h3>2. Modular Arithmetic</h3>
                  <ul>
                    <li>
                      <BlockMath math="a \equiv b \pmod{n}" />
                    </li>
                  </ul>
                </div>
                <div className="formula-section">
                  <h3>3. Chinese Remainder Theorem</h3>
                  <ul>
                    <li>
                      <BlockMath math="x \equiv a_1 \pmod{m_1}, \, x \equiv a_2 \pmod{m_2}, \dots, x \equiv a_k \pmod{m_k}" />
                    </li>
                    <li>
                      <BlockMath math="\text{Let the moduli } m_1, m_2, \dots, m_k \text{ be pairwise coprime, then the system has a unique solution modulo } M = m_1 m_2 \dots m_k." />
                    </li>
                  </ul>
                </div>
                <div className="formula-section">
                  <h3>4. Remainder Theorem</h3>
                  <ul>
                    <li>
                      <BlockMath math="\text{If a polynomial } f(x) \text{ is divided by } (x - a), \text{ then the remainder is } f(a)." />
                    </li>
                  </ul>
                </div>
                <div className="formula-section">
                  <h3>5. Factor Theorem</h3>
                  <ul>
                    <li>
                      <BlockMath math="\text{If } (x - a) \text{ is a factor of the polynomial } f(x), \text{ then } f(a) = 0." />
                    </li>
                  </ul>
                </div>
                <div className="formula-section">
                  <h3>6. LCM and GCD Properties</h3>
                  <ul>
                    <li>
                      <BlockMath math="\text{LCM}(a, b) = \frac{|a \cdot b|}{\text{GCD}(a, b)}" />
                    </li>
                    <li>
                      <BlockMath math="\text{GCD}(a, b) \cdot \text{LCM}(a, b) = |a \cdot b|" />
                    </li>
                    <li>
                      <BlockMath math="\text{GCD}(a, b) = \text{GCD}(b, a \mod b)" />
                    </li>
                  </ul>
                </div>
                <div className="formula-section">
                  <h3>7. Factorial Properties</h3>
                  <ul>
                    <li>
                      <BlockMath math="n! = n \cdot (n-1) \cdot (n-2) \cdot \dots \cdot 1" />
                    </li>
                    <li>
                      <BlockMath math="0! = 1" />
                    </li>
                    <li>
                      <BlockMath math="\frac{n!}{(n-r)!} = P(n, r) \text{ (Permutation)}" />
                    </li>
                    <li>
                      <BlockMath math="\frac{n!}{r!(n-r)!} = C(n, r) \text{ (Combination)}" />
                    </li>
                  </ul>
                </div>
                <div className="formula-section">
                  <h3>8. Congruence</h3>
                  <ul>
                    <li>
                      <BlockMath math="a \equiv b \pmod{n} \text{ if } n \text{ divides } (a - b)." />
                    </li>
                    <li>
                      <BlockMath math="a \equiv b \pmod{n} \text{ means that } a - b = kn \text{ for some integer } k." />
                    </li>
                  </ul>
                </div>
                <div className="formula-section">
                  <h3>9. Fermat's Little Theorem</h3>
                  <ul>
                    <li>
                      <BlockMath math="a^{p-1} \equiv 1 \pmod{p} \text{ where } p \text{ is a prime number and } a \text{ is not divisible by } p." />
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </section>

          {/* Combinatorics Formulas */}
          <section>
            <h2 onClick={() => toggleVisibility("combinatorics")}>
              <BiSolidRightArrow
                style={{
                  transform: visibility.combinatorics
                    ? "rotate(-90deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.3s linear", // Smooth transition for the rotation
                }}
              />
              Combinatorics Formulas
            </h2>
            {visibility.combinatorics && (
              <motion.div
                variants={fadeIn("up", 0)}
                initial="hidden"
                whileInView={"show"}
                className="section-of-formulas"
              >
                <section className="formula-section">
                  <h3>1. Permutation</h3>
                  <ul className="lists">
                    <li>
                      <BlockMath math="P(n, r) = \frac{n!}{(n - r)!}" />
                    </li>
                  </ul>
                </section>
                <section className="formula-section">
                  <h3>2. Combination</h3>
                  <ul className="lists">
                    <li>
                      <BlockMath math="C(n, r) = \frac{n!}{r!(n - r)!}" />
                    </li>
                  </ul>
                </section>
                <section className="formula-section">
                  <h3>3. Binomial Coefficients</h3>
                  <ul className="lists">
                    <li>
                      <BlockMath math="\binom{n}{r} = \frac{n!}{r!(n - r)!}" />
                    </li>
                  </ul>
                </section>
              </motion.div>
            )}
          </section>
        </section>
      </motion.div>
    </>
  );
};

export default Formulas;
