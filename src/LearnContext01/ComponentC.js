import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

//React Render Props
//https://www.robinwieruch.de/react-render-props

function ComponentC() {
  let context = useContext(ThemeContext);
  console.log(context);

  return (
    <div>
      <h5>Use ThemeContext.Consumer</h5>
      <ThemeContext.Consumer>
        {(value) => (
          <div>
            <h3 style={{ color: value }}>Component C</h3>
            {value}
          </div>
        )}
      </ThemeContext.Consumer>

      <h5>Not Use ThemeContext.Consumer</h5>

      <div>
        <h3 style={{ color: context }}>Component C</h3>
        {ThemeContext.value}
        {context}
      </div>
    </div>
  );
}

export default ComponentC;
