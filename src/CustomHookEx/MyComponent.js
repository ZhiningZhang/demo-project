import React from "react";
import useWindowWidth from "./useWindowWidth.js";

const MyComponent = () => {
  const [isSmall, size] = useWindowWidth();

  console.log(' --- small = ', isSmall);
  console.log(' --- size = ', size);

  return (
    // Return some elements
    <div>
      <p> My Component</p>
      isSmall: {isSmall.toString()}
      <p>size: {size}</p>
    </div>
  );
};

export default MyComponent;
