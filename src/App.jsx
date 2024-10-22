import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../src/features/counter/counterSlice";
import "./App.css";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function incrementClick() {
    dispatch(increment());
  }

  function decrementClick() {
    dispatch(decrement());
  }

  return (
    <>
      <div className="container">
        <button onClick={incrementClick}>+</button>
        <p> Count : {count}</p>
        <button onClick={decrementClick}>-</button>
      </div>
    </>
  );
}

export default App;
