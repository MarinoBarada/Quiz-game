import React from "react";
import "./Input.css";

function Difficulty({ value, action }) {
  return (
    <div className="container">
      <label htmlFor="difficulty">Select Difficulty:</label>
      <select name="difficulty" value={value} onChange={action}>
        <option value="">Any Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
}

export default Difficulty;
