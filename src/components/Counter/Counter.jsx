import { useState } from "react";
import "./Counter.css";

function Counter(props) {
    //     read     write                 intial
    const [value, setValue] = useState(props.value || 0);

    function increment() {
        setValue(value + 1);
        // console.log(value);
    }
    function decrement() {
        setValue(value - 1);
        // console.log(value);
    }

  return (
    <div className="counter-container">
      <h3 className="counter-title">{props.name || "COUNTER"}</h3>
      <div className="counter-row">
      <button className="btn btn-danger" onClick={decrement}>-</button>
      <span className="counter-value">{value}</span>
      <button className='btn btn-success' onClick={increment}>+</button>
      </div>
      
    </div>
  );
}

export default Counter;
