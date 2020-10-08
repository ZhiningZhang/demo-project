import { useState, useEffect } from "react";

//https://dev.to/damcosset/how-to-create-custom-hooks-in-react-44nds

//this is a custom hook
const useWindowsWidth = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  const [windowSize, setWindowSize] = useState(false);

  let checkScreenSize = () => {
    setIsScreenSmall(window.innerWidth < 600);
    setWindowSize(window.innerWidth);
  };
  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);


  //array, 
  return [isScreenSmall, windowSize];
};

export default useWindowsWidth;