import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../src/features/counter/counterSlice";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function incrementClick() {
    dispatch(increment());
  }

  function decrementClick() {
    dispatch(decrement());
  }

  function resetClick() {
    dispatch(reset());
  }

  function sendAmount() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <>
      <div className="container">
        <button onClick={incrementClick}>+</button>
        <p> Count : {count}</p>
        <button onClick={decrementClick}>-</button>
        <br />
        <br />
        <button onClick={resetClick}>Reset</button>
      </div>
      <br />
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <br />
        <button onClick={sendAmount}>Add Amount</button>
      </div>
    </>
  );
}

export default App;
