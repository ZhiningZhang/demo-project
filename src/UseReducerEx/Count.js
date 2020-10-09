import React, { useReducer } from "react";

//https://www.youtube.com/watch?v=sYDFCuZHrqw

function Count() {
  const [count, dispatch2] = useReducer((state, action) => {
    console.log("--- useReducer state = ", state);
    console.log("--- useReducer action = ", action);

    switch(action)
    {
        case 'add':
            return state + 1;
        case 'minus':
            return state - 1;
        default:

    }

    return state;
  }, 1);
  return (
    <div>
      <h2>UseReducer1</h2>
      <p>Count: {count}</p>
      <p>
        <button onClick={() => dispatch2("add")}>Increment</button>

        <button onClick={() => dispatch2("minus")}>Minus</button>
      </p>
    </div>
  );
}

export default Count;
