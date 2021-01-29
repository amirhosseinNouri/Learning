import React from "react";


export default function Counter(props) {

  const amount = props.state.count

  return (
    <div className="container">
      <h1>Counter</h1>
      <p className="counter">{amount}</p>
      <div className="buttons">
        <button
          type="button"
          className="btn"
          onClick={() => console.log("decrease")}
        >
          Decrease
        </button>
        <button type="button" className="btn" onClick={() => console.log("reset")}>
          Reset
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => console.log("increase")}
        >
          Increase
        </button>
      </div>
    </div>
  );
}
