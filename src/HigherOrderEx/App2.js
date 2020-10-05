import React from "react";

//https://css-tricks.com/what-are-higher-order-components-in-react/
// /A Higher-Order Component Example

const hoc = (WrappedComponent) => (props) => {
  return (
    <div className="border border-primary m-2 p-2">
      <WrappedComponent {...props}>
        {props.children.toUpperCase()} bbb
      </WrappedComponent>
    </div>
  );
};

const Username = (props) => <div className="border border-primary m-2 p-2">{props.children} aaa </div>;

const UpperCaseUsername = hoc(Username);

const App2 = () => (
  <div>
    <p>
      <UpperCaseUsername>Andy</UpperCaseUsername>
    </p>
    <p>
      <UpperCaseUsername>Cindy</UpperCaseUsername>
    </p>
  </div>
);

export default App2;
