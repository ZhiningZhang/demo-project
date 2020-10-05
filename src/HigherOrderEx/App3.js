import React from "react";

//!!!!!
//https://blog.jakoblind.no/simple-explanation-of-higher-order-components-hoc/
//Simple explanation of Higher-Order Components (HOC)

const Hello = ({ name }) => <h2>Hello {name}!</h2>;

const Hi = ({ name }) => <h4>Hi {name}!</h4>;

// Take in a component as argument WrappedComponent
function simpleHOC(WrappedComponent) {
  // And return a new anonymous component
  return class extends React.Component {
    render() {
      return <div> HOC message : <WrappedComponent {...this.props} /></div> ;
    }
  };
}

const NewComponent = simpleHOC(Hello);

const NewComponent2 = simpleHOC(Hi);

const App3 = () => (
  <div>
    <p>
      <NewComponent name="Andy" />
    </p>
    <p>
      <NewComponent2 name="Andy" />
    </p>
  </div>
);

export default App3;
