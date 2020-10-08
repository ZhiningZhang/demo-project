import React, { useState, useEffect } from "react";

//https://dev.to/damcosset/how-to-create-custom-hooks-in-react-44nd

const LayoutComponent = () => {
  const [onSmallScreen, setOnSmallScreen] = useState(false);

  const [size, setSize] = useState(0);

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
  }, []);

  let checkScreenSize = () => {
    setSize(window.innerWidth);
    setOnSmallScreen(window.innerWidth < 768);
  };

  return (
    <div className={`${onSmallScreen ? "small" : "large"}`}>
      <h1>Hello World!</h1>
      {onSmallScreen.toString()}
      <p>window.innerWidth : {window.innerWidth}</p>
      <p>size: {size} </p>
      <p>{`${onSmallScreen ? "small" : "large"}`}</p>
    </div>
  );
};

export default LayoutComponent;
