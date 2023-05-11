import React from "react";
import "./Input.css";

function Number({ value, action }) {
  return (
    <div className="container">
      <label htmlFor="number">Number of Questions:</label>
      <input type="number" min={1} max={50} value={value} onChange={action} />
    </div>
  );
}

export default Number;
