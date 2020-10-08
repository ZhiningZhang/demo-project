import React from "react";
import ThemeContext from "./ThemeContext";
import ComponentB from "./ComponentB";

function ComponentA() {
  return (
    <div>
      <h3>Component A</h3>
      <ThemeContext.Provider value="green">
        <ComponentB></ComponentB>
      </ThemeContext.Provider>
    </div>
  );
}

export default ComponentA;
