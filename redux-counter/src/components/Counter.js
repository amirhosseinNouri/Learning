import React from "react";

export default function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="container">
      <h1>Counter</h1>
      <p className="counter">{count}</p>
      <div className="buttons">
        <button
          type="button"
          className="btn"
          onClick={() => setCount(count - 1)}
        >
          Decrease
        </button>
        <button type="button" className="btn" onClick={() => setCount(0)}>
          Reset
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setCount(count + 1)}
        >
          Increase
        </button>
      </div>
    </div>
  );
}
