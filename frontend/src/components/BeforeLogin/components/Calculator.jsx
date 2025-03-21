import React, { useState } from "react";
import { Helmet } from "react-helmet";

const Calculator = () => {
  const [display, setDisplay] = useState("");
  const [history, setHistory] = useState([]);

  const handleInput = (value) => {
    setDisplay((prev) => prev + value);
  };

  const calculate = () => {
    try {
      const result = eval(display); // Evaluate the expression (use with caution or replace with a safer parser)
      setHistory((prev) => [...prev, { expression: display, result }]);
      setDisplay(String(result));
    } catch (error) {
      setDisplay("Error");
    }
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      calculate();
    } else if (event.key === "Backspace") {
      setDisplay((prev) => prev.slice(0, -1));
    } else {
      handleInput(event.key);
    }
  };

  return (
    <>
      <Helmet>
        <title>My_Mathematics | Calculator</title>
      </Helmet>

      <div className="calculator" onKeyDown={handleKeyPress} tabIndex="0">
        <div className="calculator-display">
          <input
            type="text"
            value={display}
            onChange={(e) => setDisplay(e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="calculator-buttons">
          {/* Basic operations */}
          <button onClick={() => handleInput("+")}>+</button>
          <button onClick={() => handleInput("-")}>-</button>
          <button onClick={() => handleInput("*")}>*</button>
          <button onClick={() => handleInput("/")}>/</button>

          {/* Advanced functions */}
          <button onClick={() => handleInput("Math.sin(")}>sin</button>
          <button onClick={() => handleInput("Math.cos(")}>cos</button>
          <button onClick={() => handleInput("Math.tan(")}>tan</button>
          <button onClick={() => handleInput("Math.log10(")}>log</button>
          <button onClick={() => handleInput("Math.log(")}>ln</button>
          <button onClick={() => handleInput("Math.sqrt(")}>√</button>
          <button onClick={() => handleInput("**")}>x^y</button>
          <button onClick={() => handleInput("%")}>mod</button>
          <button onClick={() => handleInput("Math.PI")}>π</button>
          <button onClick={() => handleInput("Math.E")}>e</button>

          {/* Memory functions */}
          <button onClick={clearDisplay}>C</button>
          <button onClick={clearHistory}>Clear History</button>
          <button onClick={calculate}>=</button>
        </div>

        {/* History */}
        <div className="calculator-history">
          <h3>History</h3>
          <ul>
            {history.map((item, index) => (
              <li key={index}>
                {item.expression} = {item.result}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Calculator;
