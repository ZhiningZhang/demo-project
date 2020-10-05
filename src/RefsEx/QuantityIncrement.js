import React from "react";

//Refs in React
//https://www.youtube.com/watch?v=t4okzJc6_Ak&list=PL6n9fhu94yhVpO8VBlUXbxKUuG-n2b1bL&index=19

//https://www.pragimtech.com/blog/reactjs/refs-in-react/

class QuantityIncrement extends React.Component {
  constructor(props) {
    super(props);

    this.quantityRef = React.createRef();
    this.state = { count: 0 };
  }

  incrementQuantity = () => {
    console.log(
      "this.quantityRef.current.value = ",
      this.quantityRef.current.value
    );
    this.quantityRef.current.value++;
  };

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    //alert("Text Message");

    return (
      <div>
        <p>
          <label>
            Enter Quantity : <input type="text" ref={this.quantityRef}></input>
            <button onClick={this.incrementQuantity}>+</button>
          </label>
        </p>
        <p>
          <h4>read-only </h4>
          <label>
            Enter Count : <input type="text" value={this.state.count}></input>
            <button onClick={this.incrementCount}>+ count</button>{" "}
          </label>
        </p>
      </div>
    );
  }
}

export default QuantityIncrement;
