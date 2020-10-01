import React, { useState } from "react";

//https://www.youtube.com/watch?v=_C6LRsaxPx0&list=PL6n9fhu94yhVpO8VBlUXbxKUuG-n2b1bL&index=6
//function

function CountCharacters() {
  const [message, setMessage] = useState();
  const [counter, setCounter] = useState(0);

  const onMessageChange = (text) => {
    setCounter(text.length);
    setMessage(`Message has ${text.length} number of Characters`);
  };

  return (
    <div>
      <h2>Function: Welcome to Count Characters Component...</h2>
      <p>
        <label>
          Enter Message :{" "}
          <input
            type="text"
            onChange={(e) => onMessageChange(e.target.value)}
          ></input>
        </label>
      </p>

      <p>
        <label>{message}</label>
      </p>
      <p>
        <label>{counter}</label>
      </p>
    </div>
  );
}

export default CountCharacters;
