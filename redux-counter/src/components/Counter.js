import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {increment , decrement , reset} from '../actions/counterActions'

export default function Counter() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  // const [count, setCount] = React.useState(0);
  return (
    <div className="container">
      <h1>Counter</h1>
      <p className="counter">{count}</p>
      <div className="buttons">
        <button
          type="button"
          className="btn"
          onClick={() => dispatch(decrement())}
        >
          Decrease
        </button>
        <button type="button" className="btn" onClick={() => dispatch(reset())}>
          Reset
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => dispatch(increment())}
        >
          Increase
        </button>
      </div>
    </div>
  );
}
