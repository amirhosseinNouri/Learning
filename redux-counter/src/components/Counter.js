import React from "react";

export default function Counter({state}) {
    const amount  =state.count
  const [count, setCount] = React.useState(0);
  return (
    <div className="container">
      <h1>Counter</h1>
      <p className="counter">{amount}</p>
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
