import React from "react";
import "./Input.css";

function Number({ value, action ,notValid}) {
  return (
    <div className="container">
      <label htmlFor="number">Number of Questions:</label>
      <input type="number" min={0} max={50} value={value} onChange={action} />
      {notValid && <span>The number must be greater than 0</span>}
    </div>
  );
}

export default Number;
