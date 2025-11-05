// src/components/Counter.jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        border: "2px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        color: "#000",
        textAlign: "center",
        width: "250px",
        margin: "20px auto",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ marginBottom: "15px" }}>Simple Counter</h2>
      <p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}>
        Current Count: {count}
      </p>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "10px 15px",
          margin: "5px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Increment
      </button>

      <button
        onClick={() => setCount(count - 1)}
        style={{
          padding: "10px 15px",
          margin: "5px",
          backgroundColor: "#f44336",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => setCount(0)}
        style={{
          padding: "10px 15px",
          margin: "5px",
          backgroundColor: "#2196F3",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
