import React from "react";
import {useSelector , useDispatch} from 'react-redux'
import {increase , decrease , reset} from '../actions'


function Counter() {

  const dispatch = useDispatch()
  const count = useSelector(state => state.count)


  return (
    <div className="container">
      <h1>Counter</h1>
      <p className="counter">{count}</p>
      <div className="buttons">
        <button
          type="button"
          className="btn"
          onClick={() => dispatch(decrease)}
        >
          Decrease
        </button>
        <button type="button" className="btn" onClick={() => dispatch(reset)}>
          Reset
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => dispatch(increase)}
        >
          Increase
        </button>
      </div>
    </div>
  );
}

export default Counter