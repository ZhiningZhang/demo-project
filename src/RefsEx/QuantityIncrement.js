import React from "react";


//Refs in React
//https://www.youtube.com/watch?v=t4okzJc6_Ak&list=PL6n9fhu94yhVpO8VBlUXbxKUuG-n2b1bL&index=19

//https://www.pragimtech.com/blog/reactjs/refs-in-react/

class QuantityIncrement extends React.Component {
  constructor(props) {
    super(props);

    this.quantityRef = React.createRef();
  }

  incrementQuantity = () => {
    this.quantityRef.current.value++;
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
      </div>
    );
  }
}

export default QuantityIncrement;
